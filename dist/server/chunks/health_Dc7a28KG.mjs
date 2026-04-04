import { sql } from 'drizzle-orm';
import { m as memoryCache } from './cache_xCVwAm_v.mjs';
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import pg from 'pg';
import { pgTable, timestamp, text, uuid, varchar, boolean } from 'drizzle-orm/pg-core';
import * as Minio from 'minio';

const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }),
  image: text("image"),
  provider: varchar("provider", { length: 50 }).notNull(),
  providerId: varchar("provider_id", { length: 255 }).notNull(),
  isAdmin: boolean("is_admin").default(false),
  createdAt: timestamp("created_at").defaultNow()
});
const sessions = pgTable("sessions", {
  id: uuid("id").defaultRandom().primaryKey(),
  token: varchar("token", { length: 64 }).notNull().unique(),
  csrfToken: varchar("csrf_token", { length: 64 }).notNull(),
  userId: uuid("user_id").references(() => users.id).notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at").defaultNow()
});
const comments = pgTable("comments", {
  id: uuid("id").defaultRandom().primaryKey(),
  postSlug: varchar("post_slug", { length: 255 }).notNull(),
  userId: uuid("user_id").references(() => users.id).notNull(),
  content: text("content").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at")
});

const schema = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  comments,
  sessions,
  users
}, Symbol.toStringTag, { value: 'Module' }));

const defaultLocal = "postgresql://blog:blog@localhost:5432/blog";
const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL ?? defaultLocal
});
const db = drizzle(pool, { schema });

let client = null;
function parseEndpoint() {
  const raw = process.env.MINIO_ENDPOINT ?? "localhost:9000";
  const useSSL = process.env.MINIO_USE_SSL === "true";
  if (raw.includes(":")) {
    const [host, portStr] = raw.split(":");
    return { host, port: Number(portStr) || 9e3, useSSL };
  }
  return { host: raw, port: 9e3, useSSL };
}
function getClient() {
  if (!client) {
    const { host, port, useSSL } = parseEndpoint();
    client = new Minio.Client({
      endPoint: host,
      port,
      useSSL,
      accessKey: process.env.MINIO_ACCESS_KEY ?? "minioadmin",
      secretKey: process.env.MINIO_SECRET_KEY ?? "minioadmin"
    });
  }
  return client;
}
const BUCKET = process.env.MINIO_BUCKET ?? "blog-images";
async function checkMinioConnection() {
  try {
    const c = getClient();
    return await c.bucketExists(BUCKET);
  } catch {
    return false;
  }
}

const GET = async () => {
  let database = false;
  try {
    await db.execute(sql`SELECT 1`);
    database = true;
  } catch {
    database = false;
  }
  const minio = await checkMinioConnection();
  const checks = {
    database,
    minio,
    cache: memoryCache.size > 0,
    uptime: process.uptime()
  };
  const healthy = database;
  return new Response(JSON.stringify(checks), {
    status: healthy ? 200 : 503,
    headers: { "Content-Type": "application/json" }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
