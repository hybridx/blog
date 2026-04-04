import type { APIRoute } from 'astro';
import { sql } from 'drizzle-orm';
import { memoryCache } from '../../lib/cache';
import { db } from '../../lib/db';
import { checkMinioConnection } from '../../lib/minio';

export const GET: APIRoute = async () => {
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
    uptime: process.uptime(),
  };

  const healthy = database;
  return new Response(JSON.stringify(checks), {
    status: healthy ? 200 : 503,
    headers: { 'Content-Type': 'application/json' },
  });
};
