# CitaConsulares — Panel Web (Next.js)

Panel de monitorización y administración listo para Vercel (Free).

## Variables de entorno

- NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
- NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
- ADMIN_TOKEN=super-secreto-32chars
- READONLY_MODE=false

## Despliegue en Vercel

1) Importar proyecto panel/ en Vercel (Import Project)
2) Build Command: 
ext build
3) Output: .vercel/output (por defecto Next)
4) Configurar variables (.env) en Vercel

## Seguridad

- Endpoints POST requieren Authorization: Bearer 
- Si READONLY_MODE=true, todos los POST responden 403.

## Endpoints

- GET /api/health — Estado de bot/worker (latidos < 120s = ONLINE)
- GET /api/stats?window=24h — KPIs globales y serie temporal
- GET /api/clients/summary?window=24h — KPIs por cliente/servicio y racha sin huecos
- GET /api/events/recent?limit=50 — Últimos eventos de reservas_logs
- POST /api/queue/check — Encola tarea {cliente_id, servicio_type} (token requerido)
- POST /api/maintenance/clean — Limpieza (preview o ejecutar) SOLO DB
  - Recordatorio: los archivos (screenshots) se borran en la VPS (/limpiar_citas)

## Heartbeats

Crear tabla heartbeats(id text primary key, last_seen timestamptz not null)
- Insertar/actualizar cada 60s desde bot y worker: insert ... on conflict (id) do update set last_seen=now()
- IDs usados: ot, worker

## Semillas (opcional)

Puedes usar los scripts SQL del repo raíz (01..06) para crear tablas de negocio.

## Notas

- UI básica con Tailwind; puedes añadir shadcn/ui según necesites más componentes.
- La UI funciona con DB vacía; mostrará “sin datos”.
