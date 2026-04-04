import './load-env';
import { drizzle } from 'drizzle-orm/node-postgres';
import pg from 'pg';
import * as schema from '../../drizzle/schema';

const defaultLocal =
  'postgresql://blog:blog@localhost:5432/blog';

const pool = new pg.Pool({
  connectionString:
    process.env.DATABASE_URL ?? defaultLocal,
});

export const db = drizzle(pool, { schema });
export { pool };
