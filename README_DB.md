# CitaConsulares — Base de Datos (Supabase/Neon/Postgres)

Este directorio contiene migraciones SQL idempotentes y el esquema Drizzle para el proyecto.

## Archivos
- `01_schema.sql` — creación de tipos, tablas y relaciones (idempotente)
- `02_indexes.sql` — índices recomendados
- `03_functions.sql` — funciones utilitarias (`increment_counter`, `purge_old_logs`, `exec_sql`)
- `04_policies.sql` — RLS opcional (comentado por defecto)
- `05_seed.sql` — datos de ejemplo mínimos
- `shared/schema.ts` — esquema Drizzle (TypeScript, ESM)

## Requisitos
- PostgreSQL 14+
- Extensión `pgcrypto` (se habilita con `create extension if not exists pgcrypto;`)

## Aplicar migraciones

Puedes aplicar estas migraciones de varias formas. Todas son idempotentes; volverlas a ejecutar es seguro.

### Supabase (Dashboard)
1. Abre SQL Editor.
2. Ejecuta, en orden: `01_schema.sql`, `02_indexes.sql`, `03_functions.sql`, `04_policies.sql` (opcional), `05_seed.sql`.

### Supabase (CLI)
Si usas `psql` con la cadena que te da Supabase:
```
psql "postgresql://<user>:<password>@<host>:6543/postgres?sslmode=require" -f 01_schema.sql
psql "..." -f 02_indexes.sql
psql "..." -f 03_functions.sql
psql "..." -f 04_policies.sql   # opcional
psql "..." -f 05_seed.sql
```

### Neon / Postgres local
Usa `psql` y ejecuta los archivos en el mismo orden.

## Funciones disponibles

- `select increment_counter('booked_since_advice', 1);`
  - Realiza un upsert atómico en `maintenance_counters` y devuelve el nuevo valor.

- `select purge_old_logs(90);`
  - Borra `reservas_logs` y `captcha_events` con `created_at < now() - interval '90 days'`.
  - Parámetro opcional: `purge_old_logs(90, true)` para borrar también reservas antiguas sin `portal_ref`.

- `select exec_sql('delete from reservas_logs where created_at < now() - interval ''180 days''');`
  - Solo permite `DELETE`/`TRUNCATE` sobre tablas del esquema actual. Rechaza cualquier otro comando.

## Retención recomendada (Supabase Free)
- Ejecutar semanalmente: `select purge_old_logs(90);`
- Guardar capturas en disco del VPS (no en storage). Añade un cron para limpiar ficheros viejos de `worker/screenshots/` si es necesario.

## Notas de modelado
- Soporta múltiples servicios por cliente: `servicios (cliente_id, type)` es único.
- Usa `timestamptz` (UTC por defecto del servidor) para tiempos.
- `clientes.password` es un campo de texto “temporal”. Considera cifrar o externalizar credenciales en el futuro.

## Drizzle ORM
- Importa el esquema desde `shared/schema.ts`.
- Ejemplo rápido (TypeScript):
```ts
import { db } from '../server/db';
import { reservasLogs } from '@repo/shared/schema';

await db.insert(reservasLogs).values({
  clienteId: 'uuid-cliente',
  servicioId: 'uuid-servicio',
  serviceType: 'dni',
  status: 'NO_SLOTS',
  message: 'Sin huecos visibles',
});

// Contador de reservas desde último aviso (RPC Supabase)
// select increment_counter('booked_since_advice', 1);
```

## RLS (opcional)
- El archivo `04_policies.sql` trae ejemplos comentados.
- Recomendación: activa RLS cuando vayas a exponer el API públicamente y uses `service_role` para el backend.

