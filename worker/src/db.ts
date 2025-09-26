import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from '@repo/shared/schema';
import { createDatabaseStorage } from '@repo/shared/storage';

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error('DATABASE_URL must be set. Did you forget to provision a database?');
}
const isSupabase = /\.supabase\.co/i.test(connectionString);
export const pool = new Pool({ connectionString, ssl: isSupabase ? { rejectUnauthorized: false } : undefined });
export const db = drizzle(pool, { schema });
export const storage = createDatabaseStorage(db);
