-- 02_indexes.sql — Índices complementarios (idempotentes)

-- Rendimiento en consultas recientes y por claves de filtrado

-- reservas
create index if not exists idx_reservas_cliente_reserved_for on reservas(cliente_id, reserved_for);
create index if not exists idx_reservas_service_type_created_desc on reservas(service_type, created_at desc);

-- reservas_logs
create index if not exists idx_reservas_logs_cliente_created_desc on reservas_logs(cliente_id, created_at desc);

-- captcha_events
create index if not exists idx_captcha_service_type_created_desc on captcha_events(service_type, created_at desc);

