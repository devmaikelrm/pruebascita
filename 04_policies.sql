-- 04_policies.sql — RLS (opcional). Desactivado por defecto.
-- Ejemplos de políticas para Supabase.

-- IMPORTANTE: Por defecto NO se habilita RLS para evitar romper entornos existentes.
-- Descomenta las líneas `enable row level security` si deseas activarlo y aplica políticas.

-- alter table usuarios enable row level security;
-- alter table clientes enable row level security;
-- alter table servicios enable row level security;
-- alter table reservas enable row level security;
-- alter table reservas_logs enable row level security;
-- alter table captcha_events enable row level security;
-- alter table maintenance_counters enable row level security;

-- Ejemplos de políticas (comentadas):

-- -- Solo service_role puede escribir/leer en logs/captcha (para backend)
-- drop policy if exists p_logs_service_role_rw on reservas_logs;
-- create policy p_logs_service_role_rw on reservas_logs
--   for all
--   to service_role
--   using (true)
--   with check (true);

-- drop policy if exists p_captcha_service_role_rw on captcha_events;
-- create policy p_captcha_service_role_rw on captcha_events
--   for all
--   to service_role
--   using (true)
--   with check (true);

-- -- Denegar anónimos en todo
-- drop policy if exists p_no_anon_reservas on reservas;
-- create policy p_no_anon_reservas on reservas
--   for select to anon using (false);

-- -- Ejemplo multiusuario (lectura filtrada por usuario)
-- -- Asumiendo JWT claim sub = usuarios.id
-- drop policy if exists p_clientes_owner_select on clientes;
-- create policy p_clientes_owner_select on clientes
--   for select to authenticated
--   using (usuario_id = auth.uid());

