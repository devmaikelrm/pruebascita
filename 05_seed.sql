-- 05_seed.sql — Datos de ejemplo mínimos (idempotente)

-- Usuario admin
insert into usuarios(id, email, display_name)
values (
  coalesce((select id from usuarios where email = 'admin@example.com'), gen_random_uuid()),
  'admin@example.com',
  'Admin'
)
on conflict (email) do update set display_name = excluded.display_name;

-- Cliente demo asociado al admin
insert into clientes(id, usuario_id, name, site_url, username, password)
values (
  coalesce((select c.id from clientes c where c.name = 'Cliente Demo'), gen_random_uuid()),
  (select id from usuarios where email = 'admin@example.com' limit 1),
  'Cliente Demo',
  'https://www.citaconsular.es',
  'demo.user@example.com',
  'demo-password'  -- solo demostración
)
on conflict (id) do update set 
  usuario_id = excluded.usuario_id,
  site_url = excluded.site_url,
  username = excluded.username;

-- Servicios iniciales: dni y turismo
insert into servicios(id, cliente_id, type, enabled)
select gen_random_uuid(), c.id, t.type, true
from (select id from clientes where name = 'Cliente Demo' limit 1) c,
     (values ('dni'::service_type), ('turismo'::service_type)) as t(type)
on conflict do nothing;

-- Semilla del contador de mantenimiento
insert into maintenance_counters(key, value)
values ('booked_since_advice', 0)
on conflict (key) do nothing;

