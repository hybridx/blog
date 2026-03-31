# Low Level Design (LLD)

## Module Architecture

```mermaid
graph TD
    subgraph astroApp [Astro SSR Application]
        MW[middleware.ts - Request Pipeline]

        subgraph pagesLayer [Pages - SSR Routes]
            IndexPage[index.astro]
            BlogSlug["blog/[slug].astro"]
            AdminPages[admin/*.astro]
            APIRoutes[api/*.ts]
        end

        subgraph authModule [lib/auth/ - Hand-Built Auth]
            OAuth[oauth.ts - OAuth2 Auth Code Flow]
            SessionMod[session.ts - Session CRUD]
            CSRFMod[csrf.ts - Token Gen/Validate]
            RateLimitMod[ratelimit.ts - DB-Backed Counting]
            AdminAuthMod[admin.ts - Credential Check]
            ProvidersMod[providers/ - GitHub + Google Config]
        end

        subgraph coreModule [lib/ - Core Services]
            GitHubClient[github.ts - Content Fetch/Push]
            CacheMod[cache.ts - L1 Memory + L2 Filesystem]
            MarkdownMod[markdown.ts - marked + sanitize-html]
            MinIOClient[minio.ts - S3 Image Operations]
            DBMod[db.ts - Drizzle Connection]
        end

        subgraph commentsModule [lib/comments/ - Comments Service]
            CommentSvc[service.ts - CRUD Logic]
            SanitizeMod[sanitize.ts - Input Pipeline]
        end
    end

    MW --> pagesLayer
    pagesLayer --> authModule
    pagesLayer --> coreModule
    pagesLayer --> commentsModule
    authModule --> DBMod
    commentsModule --> DBMod
    commentsModule --> SanitizeMod
    GitHubClient --> CacheMod
    CacheMod --> MarkdownMod
```

## Detailed Database Schema with Indexes

```sql
-- Users table
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    image TEXT,
    provider VARCHAR(50) NOT NULL,
    provider_id VARCHAR(255) NOT NULL,
    is_admin BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(provider, provider_id)
);
CREATE INDEX idx_users_provider ON users(provider, provider_id);

-- Sessions table
CREATE TABLE sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    token VARCHAR(64) NOT NULL UNIQUE,
    csrf_token VARCHAR(64) NOT NULL,
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    expires_at TIMESTAMPTZ NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX idx_sessions_token ON sessions(token);
CREATE INDEX idx_sessions_expires ON sessions(expires_at);
CREATE INDEX idx_sessions_user ON sessions(user_id);

-- Comments table
CREATE TABLE comments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    post_slug VARCHAR(255) NOT NULL,
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ
);
CREATE INDEX idx_comments_slug ON comments(post_slug, created_at);
CREATE INDEX idx_comments_user ON comments(user_id);
```

### Index Rationale

- `idx_sessions_token`: Every authenticated request does `WHERE token = $1`. B-tree on unique varchar gives O(log n) lookup. This is the hottest query in the system.
- `idx_comments_slug`: `WHERE post_slug = $1 ORDER BY created_at` is the most frequent comment query. Composite index covers both filter and sort without a filesort.
- `idx_sessions_expires`: Cleanup job runs `DELETE WHERE expires_at < NOW()`. Without this, it's a full sequential scan.
- `UNIQUE(provider, provider_id)`: Prevents duplicate accounts from the same OAuth provider. Enforced at the database level, not just application level.

## Caching Architecture

```mermaid
graph TD
    Req[Incoming Request for /blog/my-post]
    L1{L1: In-Memory Map}
    L2{L2: Filesystem /tmp/blog-cache/}
    GH[GitHub API: Fetch markdown]
    Parse[Parse: marked then sanitize-html then HTML]

    Req --> L1
    L1 -->|HIT + fresh| Respond[Return cached HTML]
    L1 -->|HIT + stale| SWR[Serve stale, revalidate in background]
    L1 -->|MISS| L2
    L2 -->|HIT| Promote[Promote to L1 + Return]
    L2 -->|MISS| GH
    GH --> Parse
    Parse --> Store[Store in L1 + L2]
    Store --> Respond
    SWR --> Respond
    SWR -.->|async| GH
```

### Cache Invalidation Strategy

1. **Webhook**: GitHub push to content repo -> `POST /api/webhook` -> `cache.invalidateAll()` -> next request repopulates
2. **Polling fallback**: Every 5 min, check GitHub API for new commits. If found, invalidate. (Catches missed webhooks during power blips)
3. **ETags**: On revalidation, send `If-None-Match` with stored ETag. GitHub returns `304 Not Modified` if unchanged -- saves bandwidth and API quota.
4. **Stale-while-revalidate**: When L1 TTL expires, serve stale content immediately and revalidate in background. Reader never waits for GitHub API.

### Per-Pod vs Shared Cache

- L1 is per-pod (in-memory Map). Pod 1 and Pod 2 have independent caches.
- With 2 pods and round-robin load balancing, worst case is 2x GitHub API calls on cache miss (once per pod).
- For ~20-30 blog posts, this is negligible. Total cached content < 1MB per pod.
- If this becomes a problem at scale (visible via monitoring): add Redis as shared L1 cache.

## Auth Module Pseudocode

### OAuth2 Provider-Agnostic Flow

```typescript
// lib/auth/oauth.ts

interface OAuthProvider {
  name: string;
  authorizeUrl: string;
  tokenUrl: string;
  profileUrl: string;
  clientId: string;
  clientSecret: string;
  scopes: string[];
  mapProfile: (raw: any) => { id: string; name: string; email: string; image: string };
}

function getAuthorizationUrl(provider: OAuthProvider, state: string): string {
  const params = new URLSearchParams({
    client_id: provider.clientId,
    redirect_uri: `https://blog.181094.xyz/api/auth/${provider.name}`,
    scope: provider.scopes.join(' '),
    state,
    response_type: 'code',
  });
  return `${provider.authorizeUrl}?${params}`;
}

async function handleOAuthCallback(provider: OAuthProvider, code: string) {
  const tokenRes = await fetch(provider.tokenUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      client_id: provider.clientId,
      client_secret: provider.clientSecret,
      code,
      redirect_uri: `https://blog.181094.xyz/api/auth/${provider.name}`,
    }),
  });
  const { access_token } = await tokenRes.json();

  const profileRes = await fetch(provider.profileUrl, {
    headers: { Authorization: `Bearer ${access_token}` },
  });
  return provider.mapProfile(await profileRes.json());
}
```

### Session Management

```typescript
// lib/auth/session.ts
import crypto from 'node:crypto';

function generateToken(): string {
  return crypto.randomBytes(32).toString('hex');
}

async function createSession(userId: string) {
  const token = generateToken();
  const csrfToken = generateToken();
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  await db.insert(sessions).values({ token, csrfToken, userId, expiresAt });
  return { token, csrfToken };
}

async function validateSession(token: string) {
  const [session] = await db.select().from(sessions)
    .innerJoin(users, eq(sessions.userId, users.id))
    .where(and(eq(sessions.token, token), gt(sessions.expiresAt, new Date())));
  return session ?? null;
}

async function destroySession(token: string) {
  await db.delete(sessions).where(eq(sessions.token, token));
}
```

### Middleware Pipeline

```typescript
// lib/auth/middleware.ts
export async function onRequest({ request, cookies, locals }, next) {
  // 1. Session lookup
  const token = cookies.get('session')?.value;
  if (token) {
    const session = await validateSession(token);
    if (session) {
      locals.user = session.user;
      locals.session = session;
    } else {
      cookies.delete('session');
    }
  }

  // 2. Admin route protection
  if (request.url.includes('/admin') && !locals.user?.isAdmin) {
    return new Response(null, { status: 302, headers: { Location: '/admin/login' } });
  }

  // 3. CSRF on state-changing requests
  if (['POST', 'PUT', 'DELETE'].includes(request.method)) {
    const csrfToken = request.headers.get('x-csrf-token');
    if (!locals.session || csrfToken !== locals.session.csrfToken) {
      return new Response('CSRF validation failed', { status: 403 });
    }
  }

  // 4. Rate limiting
  if (request.method === 'POST' && request.url.includes('/api/comments')) {
    const allowed = await checkRateLimit(locals.user.id, 'comment', 10, 60);
    if (!allowed) return new Response('Rate limit exceeded', { status: 429 });
  }

  return next();
}
```

## Image Upload Flow

```mermaid
sequenceDiagram
    participant Admin as Admin Browser
    participant App as Blog App
    participant S3 as MinIO S3

    Admin->>App: POST /api/images/upload (file + session + CSRF)
    App->>App: Validate admin session
    App->>App: Validate file type (jpg/png/webp/gif only)
    App->>App: Validate file size (max 5MB)
    App->>App: Generate key: images/2026/04/[uuid].[ext]
    App->>S3: PutObject(bucket=blog-images, key, file)
    S3-->>App: Success
    App-->>Admin: 201 { key, url: /api/images/[key] }

    Note over Admin,S3: When reader loads blog post with image

    participant Reader as Reader Browser
    Reader->>App: GET /api/images/images/2026/04/abc.jpg
    App->>S3: PresignedGetObject(key, expiry=7d)
    S3-->>App: Presigned URL
    App-->>Reader: 302 Redirect to presigned URL
    Reader->>S3: Direct download via presigned URL
```

## Hardware Resource Budget (8GB per Laptop)

```
Laptop 1 (8GB total):
  Proxmox host:           ~500MB
  k3s-server VM (4096MB):
    k3s control plane:    ~300MB (API server, scheduler, controller-manager, SQLite)
    Traefik:              ~80MB
    cert-manager:         ~100MB
    PostgreSQL:           512MB (limit)
    postgres_exporter:    ~64MB (limit)
    Blog Pod 1:           512MB (limit)
    Buffer:               ~2.5GB (headroom for HPA pods, future services)
  Remaining on host:      ~3.4GB free

Laptop 2 (8GB total):
  Proxmox host:           ~500MB
  k3s-agent VM (3072MB):
    k3s agent:            ~200MB (kubelet, flannel, kube-proxy)
    MinIO:                512MB (limit)
    Blog Pod 2:           512MB (limit)
    Buffer:               ~1.8GB (absorbs HPA scaling to pods 3-6)
  Monitoring VM (2048MB):
    OS + overhead:        ~200MB
    Prometheus:           ~400MB (30d retention, ~10 targets)
    Grafana:              ~250MB
    Alertmanager:         ~50MB
    Loki:                 ~200MB
    Blackbox Exporter:    ~20MB
    Node Exporter:        ~20MB
    Buffer:               ~900MB
  Remaining on host:      ~2.3GB free
```

## Monitoring Architecture

```mermaid
graph TD
    subgraph monVM [Monitoring VM - 192.168.1.12]
        Prom[Prometheus]
        Grafana[Grafana]
        AM[Alertmanager]
        Loki[Loki]
        BB[Blackbox Exporter]
        NE0[Node Exporter]
    end

    subgraph laptop1Host [Laptop 1 - Proxmox Host]
        NE1[Node Exporter]
        subgraph k3sServer [k3s-server VM]
            NE2[Node Exporter]
            PGExp[postgres_exporter]
            Promtail[Promtail - ships Traefik logs]
        end
    end

    subgraph laptop2Host [Laptop 2 - Proxmox Host]
        NE3[Node Exporter]
        subgraph k3sAgent [k3s-agent VM]
            NE4[Node Exporter]
            MinIOMetrics[MinIO /metrics]
        end
    end

    subgraph internet [External]
        BlogURL["blog.181094.xyz"]
        OtherURL["181094.xyz"]
    end

    Prom -->|scrape :9100| NE0
    Prom -->|scrape :9100| NE1
    Prom -->|scrape :9100| NE2
    Prom -->|scrape :9100| NE3
    Prom -->|scrape :9100| NE4
    Prom -->|scrape :9187| PGExp
    Prom -->|scrape :9000| MinIOMetrics
    Prom -->|alerts| AM
    BB -->|probe| BlogURL
    BB -->|probe| OtherURL
    Prom -->|scrape| BB
    Grafana -->|query| Prom
    Grafana -->|query| Loki
    Promtail -->|push logs| Loki
    AM -->|notify| Discord[Discord / Telegram]
```

### Prometheus Scrape Targets

| Job | Target | Port | Metrics |
|---|---|---|---|
| proxmox-host-1 | Laptop 1 bare metal | 9100 | CPU, RAM, disk, network, thermals |
| proxmox-host-2 | Laptop 2 bare metal | 9100 | Same |
| k3s-server-vm | 192.168.1.10 | 9100 | VM system metrics |
| k3s-agent-vm | 192.168.1.11 | 9100 | VM system metrics |
| monitoring-vm | localhost | 9100 | Monitoring VM health |
| k3s-apiserver | 192.168.1.10 | 6443 | API request latency, etcd, admission controller |
| postgresql | NodePort 30187 | 9187 | Connections, query duration, cache hit ratio, dead tuples |
| minio | 192.168.1.11 | 9000 | Storage used, requests/s, errors |
| blog-app | NodePort | 4321 | Request latency, cache hits, active sessions (custom) |
| blackbox-http | localhost | 9115 | Uptime, SSL expiry, response time for external URLs |

### Key Alert Rules

| Alert | Condition | Severity | Action |
|---|---|---|---|
| NodeDown | `up == 0` for 1m | critical | Scrape target unreachable -- check host/VM |
| HighCPU | CPU > 85% for 5m | warning | Investigate load, consider HPA tuning |
| HighMemory | RAM > 90% for 5m | warning | Check for memory leaks, adjust limits |
| DiskAlmostFull | Disk > 85% for 10m | warning | Clean up old data, expand storage |
| BlogDown | Blackbox probe fails for 2m | critical | Check k3s pods, Cloudflare failover should activate |
| SSLExpiringSoon | Cert expires < 7 days | warning | Check cert-manager renewal |
| PostgreSQLDown | pg_up == 0 for 1m | critical | Check StatefulSet, PVC |
| TooManyConnections | PG connections > 80% max | warning | Add connection pooling |

## Security Layers

```
Request flow through security:

Browser Request
    |
    +-- Cloudflare: DDoS protection, DNS filtering
    |
    +-- Traefik: TLS termination, HTTPS enforcement, HSTS
    |
    +-- Astro Middleware:
    |   +-- Session validation (cookie -> DB lookup -> attach user)
    |   +-- Admin route protection (redirect if not admin)
    |   +-- CSRF token validation (on POST/PUT/DELETE)
    |   +-- Rate limiting (DB-backed counter per user/IP)
    |
    +-- API Endpoint:
    |   +-- Input validation (type checking, length limits)
    |   +-- Content sanitization (marked -> sanitize-html, strict whitelist)
    |   +-- Authorization checks (ownership for delete)
    |
    +-- Database:
        +-- Parameterized queries via Drizzle (SQL injection prevention)
        +-- Unique constraints (prevent duplicate accounts)
        +-- Foreign keys with CASCADE (referential integrity)
```
