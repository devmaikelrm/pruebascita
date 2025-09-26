import { NextRequest, NextResponse } from 'next/server';
import { READONLY, requireAdmin, supabase } from '@/lib/supabase';

export async function POST(req: NextRequest) {
  try {
    if (READONLY) return NextResponse.json({ error: 'READONLY_MODE' }, { status: 403 });
    if (!requireAdmin(req.headers.get('authorization'))) return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
    const body = await req.json().catch(() => ({}));
    const preview = !!body?.preview;
    const days = Math.max(1, Math.min(3650, Number(body?.days || 90)));
    if (preview) {
      const since = new Date(Date.now() - days * 86400_000).toISOString();
      const { count } = await supabase
        .from('reservas_logs')
        .select('*', { count: 'exact', head: true })
        .lt('created_at', since);
      return NextResponse.json({ preview: true, days, db_rows_to_clean: count || 0, note: 'Los archivos se borran en el VPS. Ejecuta /limpiar_citas en Telegram.' });
    }
    const { data, error } = await supabase.rpc('purge_old_logs', { days });
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ preview: false, days, db_rows_deleted: data ?? 0, note: 'Los archivos se borran en el VPS. Ejecuta /limpiar_citas en Telegram.' });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'failed' }, { status: 500 });
  }
}

