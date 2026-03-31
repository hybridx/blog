# Where to Use AI and Where Not To

## DO NOT use AI to generate (write it yourself -- this is where the learning is)

| Component | Why write it yourself |
|---|---|
| **OAuth2 flow** (`lib/auth/oauth.ts`) | You need to understand authorization code grant at the HTTP level. Every step -- state parameter, code exchange, token handling. If AI writes this, you won't be able to explain it in an interview. |
| **Session management** (`lib/auth/session.ts`) | Token generation, cookie setting, session validation -- this is core backend knowledge. Writing it teaches you how every web framework's auth actually works under the hood. |
| **CSRF protection** (`lib/auth/csrf.ts`) | It's ~30 lines of code. If you can't write CSRF protection from scratch, you don't understand why it exists. |
| **Rate limiting** (`lib/auth/ratelimit.ts`) | Simple SQL counting with time windows. Forces you to think about query performance, window boundaries, race conditions. |
| **Middleware chain** (`lib/auth/middleware.ts`) | The request pipeline is the core of your application. You need to own every line and understand the order of operations. |
| **Cache invalidation logic** (`lib/cache.ts`) | The L1/L2 strategy, TTL handling, stale-while-revalidate, webhook invalidation -- this is where you learn about cache consistency. AI will give you a working solution but you won't understand the edge cases. |
| **Comments service** (`lib/comments/service.ts`) | Simple CRUD but with ownership checks, admin overrides, sanitization pipeline. Write it to understand authorization patterns. |
| **Kubernetes manifests** (`k8s/*.yaml`) | Write every Deployment, Service, Ingress, StatefulSet, HPA, PDB by hand. You need to understand what every field does. Copy from the plan, but type it out -- don't generate it. |
| **Cloudflare Worker** (`cloudflare-worker/index.js`) | The failover logic is <50 lines. Write it yourself to understand health checking, state management at the edge, and request proxying. |
| **Load test scripts** (`load-test.js`) | Writing k6 test scenarios forces you to think about traffic patterns, user behavior, and what metrics matter. |
| **Prometheus alert rules** | Writing PromQL alert expressions forces you to think about what "unhealthy" actually means for each component. |

## OK to use AI for (these don't teach you anything new by doing manually)

| Component | Why AI is fine |
|---|---|
| **Astro page boilerplate** | `.astro` file structure, layout setup, slot patterns. You already know frontend -- this is just scaffolding. |
| **Drizzle schema** | Translating the SQL schema into Drizzle's TypeScript syntax. The thinking is in the schema design (which you understand from the LLD), not the Drizzle-specific API. |
| **Drizzle migration commands** | `npx drizzle-kit generate` and `npx drizzle-kit push`. Just CLI commands. |
| **Containerfile** | Multi-stage Node.js build pattern. You've seen it, you understand it, having AI write the syntax is fine. |
| **GitHub Actions YAML** | CI/CD workflow syntax is boilerplate. The decisions (what to build, when to deploy) are yours. The YAML syntax is not worth memorizing. |
| **CSS/styling** | Use your `@thundrex/web-components`. If you need additional styles, AI can help. Styling is not the learning goal. |
| **Package.json setup** | `npm install` commands, dependency management. Mechanical. |
| **Error messages and HTTP status codes** | "What status code for rate limit exceeded?" -- AI is a fine reference for this. |
| **README / documentation** | AI can help structure and polish docs. But write the technical content yourself first -- AI edits, you don't ghost-write. |
| **Prometheus/Grafana setup** | Installation steps, systemd units, Grafana data source config. The learning is in PromQL queries and alert design, not installation. |
| **Grafana dashboard JSON** | Import community dashboards (IDs 1860, 9628, etc.). Building dashboards from scratch doesn't teach you monitoring -- understanding the metrics does. |

## Use AI as a reviewer, not a writer

| Situation | How to use AI |
|---|---|
| **After writing OAuth flow** | Paste your code, ask "what security issues does this have?" -- learn from the critique. |
| **After writing SQL schema** | Ask "what indexes am I missing for these query patterns?" -- verify your thinking. |
| **After writing middleware** | Ask "what edge cases does this miss?" -- catch what you didn't think of. |
| **After writing cache logic** | Ask "how could this cache get into an inconsistent state?" -- stress-test your design. |
| **Stuck on a specific API** | Ask "how does GitHub's OAuth token endpoint respond when the code is expired?" -- use AI as documentation lookup. |
| **Debugging k3s issues** | Paste error logs, ask for diagnosis. k8s errors are often cryptic -- AI can save hours of Googling. |

## The Rule of Thumb

**If you could be asked about it in an interview, write it yourself.** If it's plumbing that nobody would ever ask about (YAML syntax, package.json, Containerfile boilerplate), let AI handle it. The code that makes your system interesting and the code that teaches you backend fundamentals -- that's yours to write.
