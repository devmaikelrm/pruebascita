-- 06_app_schema_compat.sql — Esquema de compatibilidad con shared/src/schema.ts
-- Crea tablas esperadas por el código del bot/worker:
-- operators, clients, preferences, appointments, queue, cooldowns, captcha_requests

create extension if not exists pgcrypto;

-- operators
create table if not exists operators (
  id varchar primary key default gen_random_uuid(),
  telegram_user_id varchar not null unique,
  name text not null,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

-- clients
create table if not exists clients (
  id varchar primary key default gen_random_uuid(),
  name text not null,
  email text,
  username text not null,
  password text not null,
  is_active boolean not null default true,
  operator_id varchar references operators(id),
  created_at timestamptz not null default now()
);
create index if not exists idx_clients_active on clients(is_active);

-- preferences (1:1 por cliente)
create table if not exists preferences (
  id varchar primary key default gen_random_uuid(),
  client_id varchar not null unique references clients(id),
  service_type text not null default 'dni_habana',
  preferred_times jsonb,
  urgency integer not null default 1,
  notes text,
  created_at timestamptz not null default now()
);

-- appointments
create table if not exists appointments (
  id varchar primary key default gen_random_uuid(),
  client_id varchar not null references clients(id),
  service_type text not null,
  appointment_date timestamptz not null,
  appointment_time text not null,
  confirmation_data jsonb,
  screenshot_before_path text,
  screenshot_after_path text,
  status text not null default 'confirmed',
  created_at timestamptz not null default now()
);
create index if not exists idx_appointments_client on appointments(client_id);
create index if not exists idx_appointments_created_desc on appointments(created_at desc);

-- queue
create table if not exists queue (
  id varchar primary key default gen_random_uuid(),
  client_id varchar not null references clients(id),
  status text not null default 'pending',
  attempts integer not null default 0,
  last_attempt timestamptz,
  next_attempt timestamptz,
  error text,
  created_at timestamptz not null default now()
);
create index if not exists idx_queue_status on queue(status);
create index if not exists idx_queue_created_desc on queue(created_at desc);

-- cooldowns
create table if not exists cooldowns (
  id varchar primary key default gen_random_uuid(),
  type text not null,
  identifier text not null,
  reason text not null,
  expires_at timestamptz not null,
  created_at timestamptz not null default now()
);
create index if not exists idx_cooldowns_key on cooldowns(type, identifier);
create index if not exists idx_cooldowns_expires on cooldowns(expires_at);

-- captcha_requests
create table if not exists captcha_requests (
  id varchar primary key default gen_random_uuid(),
  client_id varchar not null references clients(id),
  operator_id varchar references operators(id),
  screenshot_path text not null,
  status text not null default 'pending',
  solution text,
  solved_at timestamptz,
  created_at timestamptz not null default now()
);
create index if not exists idx_captcha_requests_status on captcha_requests(status);

