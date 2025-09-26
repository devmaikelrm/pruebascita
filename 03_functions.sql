-- 03_functions.sql — Funciones utilitarias (idempotentes)

-- increment_counter(k, step) => nuevo valor (int)
create or replace function increment_counter(k text, step int default 1)
returns int
language plpgsql
as $$
declare
  new_value int;
begin
  if step is null then step := 1; end if;
  insert into maintenance_counters as mc(key, value, updated_at)
  values (k, step, now())
  on conflict (key) do update set value = mc.value + excluded.value, updated_at = now()
  returning value into new_value;
  return new_value;
end;
$$;

comment on function increment_counter(text, int) is 'Upsert atómico en maintenance_counters y devuelve el nuevo valor.';

-- purge_old_logs(days int default 90, purge_bookings boolean default false) => total filas borradas
create or replace function purge_old_logs(days int default 90, purge_bookings boolean default false)
returns int
language plpgsql
as $$
declare
  cutoff timestamptz := now() - make_interval(days => coalesce(days, 90));
  total int := 0;
  deleted int := 0;
begin
  -- borrar logs antiguos
  delete from reservas_logs where created_at < cutoff;
  get diagnostics deleted = row_count;
  total := total + coalesce(deleted, 0);

  delete from captcha_events where created_at < cutoff;
  get diagnostics deleted = row_count;
  total := total + coalesce(deleted, 0);

  if purge_bookings then
    delete from reservas r
    where r.created_at < cutoff
      and r.portal_ref is null; -- solo incompletas
    get diagnostics deleted = row_count;
    total := total + coalesce(deleted, 0);
  end if;

  return total;
end;
$$;

comment on function purge_old_logs(int, boolean) is 'Purge de logs/captcha por antigüedad. Si purge_bookings=true, borra reservas antiguas sin portal_ref.';

-- (Opcional) exec_sql(q text) — solo permite DELETE/TRUNCATE en tablas del esquema actual
create or replace function exec_sql(q text)
returns int
language plpgsql
as $$
declare
  norm text;
  affected int := 0;
  tbl text;
  cmd text;
  curr_schema text := current_schema;
begin
  if q is null or length(trim(q)) = 0 then
    raise exception 'Empty query';
  end if;

  norm := lower(regexp_replace(q, '\s+', ' ', 'g'));

  -- Permitir: delete from <tabla> [where ...]
  --           truncate [table] <tabla>
  if norm like 'delete from %' then
    tbl := split_part(trim(both from substr(norm, length('delete from ')+1)), ' ', 1);
    -- Validar tabla del esquema actual
    select c.relname into tbl
    from pg_class c
    join pg_namespace n on n.oid = c.relnamespace
    where n.nspname = curr_schema and c.relkind = 'r' and c.relname = tbl;
    if tbl is null then
      raise exception 'Table not allowed';
    end if;
    execute q;
    get diagnostics affected = row_count;
    return affected;
  elsif norm like 'truncate %' then
    tbl := split_part(trim(both from substr(norm, length('truncate ')+1)), ' ', 1);
    tbl := replace(tbl, 'table ', '');
    select c.relname into tbl
    from pg_class c
    join pg_namespace n on n.oid = c.relnamespace
    where n.nspname = curr_schema and c.relkind = 'r' and c.relname = tbl;
    if tbl is null then
      raise exception 'Table not allowed';
    end if;
    execute q;
    return 0;
  else
    raise exception 'Only DELETE/TRUNCATE allowed';
  end if;
end;
$$;

comment on function exec_sql(text) is 'Ejecución controlada de DELETE/TRUNCATE sobre tablas del esquema actual.';
