-- Esquema mínimo para el bot de Telegram y worker
-- Ejecutar en la base de datos apuntada por DATABASE_URL

create extension if not exists pgcrypto;

create table if not exists operators (
  id varchar primary key default gen_random_uuid(),
  telegram_user_id varchar not null unique,
  name text not null,
  is_active boolean not null default true,
  created_at timestamp with time zone not null default now()
);

create table if not exists clients (
  id varchar primary key default gen_random_uuid(),
  name text not null,
  email text,
  username text not null unique,
  password text not null,
  operator_id varchar not null,
  is_active boolean not null default true,
  created_at timestamp with time zone not null default now()
);

create table if not exists preferences (
  client_id varchar primary key,
  service_type text not null,
  urgency integer not null default 3,
  preferred_times jsonb,
  notes text,
  created_at timestamp with time zone not null default now()
);

create table if not exists queue (
  id varchar primary key default gen_random_uuid(),
  client_id varchar not null,
  status text not null default 'pending',
  attempts integer not null default 0,
  last_attempt timestamp with time zone,
  next_attempt timestamp with time zone,
  error text,
  created_at timestamp with time zone not null default now()
);

create table if not exists appointments (
  id varchar primary key default gen_random_uuid(),
  client_id varchar not null,
  service_type text not null,
  appointment_date timestamp with time zone not null,
  appointment_time text not null,
  confirmation_data jsonb,
  screenshot_before_path text,
  screenshot_after_path text,
  status text not null default 'confirmed',
  created_at timestamp with time zone not null default now()
);

create table if not exists captcha_requests (
  id varchar primary key default gen_random_uuid(),
  client_id varchar not null,
  screenshot_path text,
  status text not null default 'pending',
  solution text,
  created_at timestamp with time zone not null default now(),
  solved_at timestamp with time zone
);

create table if not exists cooldowns (
  id varchar primary key default gen_random_uuid(),
  type text not null,
  identifier text not null,
  reason text,
  expires_at timestamp with time zone not null,
  created_at timestamp with time zone not null default now()
);


