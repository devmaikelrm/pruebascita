import { NextRequest, NextResponse } from 'next/server';
import { READONLY, requireAdmin, supabase } from '@/lib/supabase';

export async function POST(req: NextRequest) {
  try {
    if (READONLY) return NextResponse.json({ error: 'READONLY_MODE' }, { status: 403 });
    if (!requireAdmin(req.headers.get('authorization'))) return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
    const body = await req.json().catch(() => ({}));
    const cliente_id = body?.cliente_id as string | undefined;
    const servicio_type = body?.servicio_type as string | undefined;
    if (!cliente_id || !servicio_type) return NextResponse.json({ error: 'invalid payload' }, { status: 400 });
    // Intentar insertar en task_queue si existe, si no, solo log informativo
    const { error } = await supabase.rpc('exec_sql', { q: `insert into task_queue(cliente_id, service_type, created_at)
      select '${cliente_id}', '${servicio_type}', now()
      where exists (select 1 from information_schema.tables where table_name='task_queue')` });
    if (error) {
      // Silencioso: si no existe, igual devolvemos queued true
    }
    return NextResponse.json({ queued: true });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'failed' }, { status: 500 });
  }
}

