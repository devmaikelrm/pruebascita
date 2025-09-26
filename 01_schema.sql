-- 01_schema.sql — Esquema base CitaConsulares (idempotente)
-- Requisitos: PostgreSQL 14+ (Supabase/Neon OK)
-- Nota: Seguro para ejecutar múltiples veces.

-- Extensiones necesarias (UUID aleatorio, etc.)
create extension if not exists pgcrypto;

-- =========================
-- Enums
-- =========================
do $$ begin
  create type service_type as enum ('dni','turismo','notaria','legalizacion');
exception when duplicate_object then null; end $$;

do $$ begin
  create type booking_status as enum ('BOOKED','NO_SLOTS','ERROR');
exception when duplicate_object then null; end $$;

do $$ begin
  create type block_reason as enum ('CAPTCHA','HTTP_403','HTTP_429','UNKNOWN');
exception when duplicate_object then null; end $$;

-- =========================
-- Tablas
-- =========================

-- Usuarios del sistema (operadores/propietarios de clientes)
create table if not exists usuarios (
  id uuid primary key default gen_random_uuid(),
  email text unique,
  display_name text,
  created_at timestamptz not null default now()
);

-- Clientes (credenciales y portal)
create table if not exists clientes (
  id uuid primary key default gen_random_uuid(),
  usuario_id uuid references usuarios(id) on delete set null,
  name text not null,
  site_url text not null,
  username text not null,
  password text not null, -- TODO: cifrar/gestionar secreto fuera de la DB
  created_at timestamptz not null default now(),
  constraint ck_clientes_username_nonempty check (length(trim(username)) > 0),
  constraint ck_clientes_name_nonempty check (length(trim(name)) > 0)
);

-- Índice por usuario
create index if not exists idx_clientes_usuario_id on clientes(usuario_id);

-- Servicios por cliente
create table if not exists servicios (
  id uuid primary key default gen_random_uuid(),
  cliente_id uuid references clientes(id) on delete cascade,
  type service_type not null,
  enabled boolean not null default true,
  notes text,
  created_at timestamptz not null default now()
);

-- Único por (cliente, tipo)
create unique index if not exists uq_servicios_cliente_tipo on servicios(cliente_id, type);

-- Reservas confirmadas
create table if not exists reservas (
  id bigserial primary key,
  cliente_id uuid references clientes(id) on delete set null,
  servicio_id uuid references servicios(id) on delete set null,
  service_type service_type not null,
  portal_ref text,
  reserved_for timestamptz,
  screenshot_path text,
  meta jsonb,
  created_at timestamptz not null default now()
);

-- Índices básicos reservas
create index if not exists idx_reservas_cliente_id on reservas(cliente_id);
create index if not exists idx_reservas_servicio_id on reservas(servicio_id);
create index if not exists idx_reservas_service_type on reservas(service_type);
create index if not exists idx_reservas_created_at_desc on reservas(created_at desc);

-- Logs de intentos/resultados
create table if not exists reservas_logs (
  id bigserial primary key,
  cliente_id uuid references clientes(id) on delete set null,
  servicio_id uuid references servicios(id) on delete set null,
  service_type service_type not null,
  status booking_status not null,
  message text,
  screenshot_path text,
  meta jsonb,
  created_at timestamptz not null default now()
);

-- Índices básicos logs
create index if not exists idx_reservas_logs_cliente_id on reservas_logs(cliente_id);
create index if not exists idx_reservas_logs_servicio_id on reservas_logs(servicio_id);
create index if not exists idx_reservas_logs_service_type on reservas_logs(service_type);
create index if not exists idx_reservas_logs_status_created_desc on reservas_logs(status, created_at desc);

-- Eventos de captcha/bloqueos
create table if not exists captcha_events (
  id bigserial primary key,
  cliente_id uuid references clientes(id) on delete set null,
  servicio_id uuid references servicios(id) on delete set null,
  service_type service_type not null,
  reason block_reason not null,
  details text,
  created_at timestamptz not null default now()
);

-- Índices básicos captcha
create index if not exists idx_captcha_cliente_id on captcha_events(cliente_id);
create index if not exists idx_captcha_servicio_id on captcha_events(servicio_id);
create index if not exists idx_captcha_service_type on captcha_events(service_type);
create index if not exists idx_captcha_created_at_desc on captcha_events(created_at desc);

-- Contadores de mantenimiento
create table if not exists maintenance_counters (
  key text primary key,
  value int not null default 0,
  updated_at timestamptz not null default now()
);

-- Semilla mínima del contador principal (idempotente)
insert into maintenance_counters(key, value)
values ('booked_since_advice', 0)
on conflict (key) do nothing;

