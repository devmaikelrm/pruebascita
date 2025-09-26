import { createClient } from '@supabase/supabase-js';

const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(url, anon, {
  auth: { persistSession: false },
});

export const READONLY = String(process.env.READONLY_MODE || '').toLowerCase() === 'true';
export const ADMIN_TOKEN = process.env.ADMIN_TOKEN || '';

export function requireAdmin(authHeader: string | null | undefined) {
  if (!ADMIN_TOKEN) return false;
  const token = (authHeader || '').replace(/^Bearer\s+/i, '').trim();
  return token && token === ADMIN_TOKEN;
}

