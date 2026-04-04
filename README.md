# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Local stack (Podman or Docker)

This app expects **PostgreSQL** and **MinIO** with the same env names you use in production (`DATABASE_URL`, `MINIO_*`). For local development:

1. Copy env template: `cp .env.example .env` and edit secrets (OAuth, `SESSION_SECRET`, etc.).
2. Start services: `podman compose up -d` or `docker compose up -d` (see `compose.yaml`). Convenience scripts: `npm run compose:up` / `compose:down` / `compose:logs` (these use Podman; use `docker compose …` directly if you prefer Docker).
3. Apply the Drizzle schema: `npm run db:push` (or `npx drizzle-kit push`).
4. Run the app: `npm run dev`.

Postgres listens on **5432**, MinIO API on **9000**, MinIO console on **9001**. The `minio-init` service creates the `blog-images` bucket to match `MINIO_BUCKET` in `.env.example`.

### Verify Postgres and MinIO

**1. Schema reaches the database** (strong signal that `DATABASE_URL` is correct):

```sh
npm run db:push
```

If this completes without error, Drizzle can connect and apply the schema.

**2. Postgres is accepting connections** (no app required):

```sh
# If you use Compose from this repo (service name `postgres`):
podman compose exec postgres pg_isready -U blog -d blog
# or: docker compose exec postgres pg_isready -U blog -d blog
```

You should see `accepting connections`. Optional: `podman compose exec postgres psql -U blog -d blog -c 'SELECT 1'`.

**3. MinIO API responds** (process is up):

```sh
curl -sf http://localhost:9000/minio/health/live && echo " OK"
```

**4. App-level check** (loads `.env`, uses the same clients as production code). With the stack up and **`npm run dev`** running:

```sh
curl -s http://localhost:4321/api/health
```

You should get JSON with `"database": true` and `"minio": true` when both services match `.env`. If Postgres is down, this returns **503** and `"database": false`. If MinIO credentials or the bucket are wrong, `"minio"` stays false while Postgres can still be true.

**Troubleshooting `"database": false` but `"minio": true`:** MinIO can still pass when defaults match your local stack, while Postgres fails if `DATABASE_URL` is wrong or unreachable. Ensure `DATABASE_URL` in `.env` uses **`localhost`** (or `127.0.0.1`) when you run `npm run dev` on your machine—not the Docker service name `postgres` (that hostname only works inside the Compose network). The app loads `.env` via `dotenv` in `src/lib/load-env.ts` so `process.env` matches what you use in production. After fixing `.env`, restart `npm run dev`.

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
