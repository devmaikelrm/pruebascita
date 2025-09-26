import { supabase } from './supabase';

export async function getHeartbeats() {
  const { data, error } = await supabase.from('heartbeats').select('id,last_seen');
  if (error) return { bot: null, worker: null };
  const map = new Map(data.map((d: any) => [d.id, d.last_seen]));
  return { bot: map.get('bot') || null, worker: map.get('worker') || null };
}

export async function getStats(windowHours = 24) {
  const since = new Date(Date.now() - windowHours * 3600_000).toISOString();
  const base = supabase.from('reservas_logs').select('status,created_at', { count: 'exact', head: false }).gte('created_at', since);
  const { data, error } = await base;
  if (error || !data) return { attempts: 0, booked: 0, no_slots: 0, errors: 0, success_rate: 0, captchas: 0, series: [] };
  const attempts = data.length;
  const booked = data.filter(d => d.status === 'BOOKED').length;
  const no_slots = data.filter(d => d.status === 'NO_SLOTS').length;
  const errors = data.filter(d => d.status === 'ERROR').length;
  const success_rate = attempts ? Math.round((booked / attempts) * 100) : 0;
  // Captchas en ventana
  const { data: ce } = await supabase.from('captcha_events').select('id,created_at').gte('created_at', since);
  const captchas = ce?.length || 0;
  // Serie por hora
  const { data: series } = await supabase
    .rpc('exec_sql', { q: `select date_trunc('hour', created_at) as bucket,
      count(*) filter (where status is not null) as attempts,
      count(*) filter (where status = 'BOOKED') as booked
      from reservas_logs where created_at >= '${since}' group by 1 order by 1` }) as any;
  return { attempts, booked, no_slots, errors, success_rate, captchas, series: Array.isArray(series) ? series : [] };
}

export async function getRecentEvents(limit = 50) {
  const { data, error } = await supabase
    .from('reservas_logs')
    .select('created_at, service_type, status, message, cliente_id, servicio_id, screenshot_path')
    .order('created_at', { ascending: false })
    .limit(limit);
  if (error) return [];
  return data || [];
}

export async function getClientsSummary(windowHours = 24) {
  const since = new Date(Date.now() - windowHours * 3600_000).toISOString();
  // Intentos y resultados por cliente/servicio
  const { data, error } = await supabase
    .rpc('exec_sql', { q: `with w as (
      select cliente_id, servicio_id, service_type, status, created_at
      from reservas_logs where created_at >= '${since}'
    )
    select cliente_id, service_type,
      count(*) as attempts,
      count(*) filter (where status = 'BOOKED') as booked,
      count(*) filter (where status = 'NO_SLOTS') as no_slots,
      count(*) filter (where status = 'ERROR') as errors
    from w group by 1,2 order by 1,2` });
  if (error || !Array.isArray(data)) return [];
  // racha sin huecos: intentos desde el último BOOKED
  const { data: streaks } = await supabase
    .rpc('exec_sql', { q: `with last_booked as (
      select cliente_id, service_type, max(created_at) as last
      from reservas_logs where status = 'BOOKED' group by 1,2
    )
    select w.cliente_id, w.service_type, count(*) as streak
    from reservas_logs w left join last_booked b on b.cliente_id=w.cliente_id and b.service_type=w.service_type
    where w.created_at > coalesce(b.last, 'epoch') group by 1,2` });
  const streakMap = new Map((streaks as any[] | undefined)?.map(s => [`${s.cliente_id}:${s.service_type}`, Number(s.streak)]) || []);
  return (data as any[]).map(row => ({
    ...row,
    success_rate: row.attempts ? Math.round((row.booked / row.attempts) * 100) : 0,
    streak_without_slots: streakMap.get(`${row.cliente_id}:${row.service_type}`) || 0,
  }));
}

