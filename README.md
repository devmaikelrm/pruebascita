# CitaConsulares – Bot + Worker Playwright

Sistema monorepo para búsqueda y reserva automática de la primera cita disponible en citaconsular.es (Bookitit), con notificaciones al operador vía Telegram, tolerancia a bloqueos, y capturas de evidencia.

Importante: este proyecto automatiza navegación web. Úsalo responsablemente, cumpliendo términos del servicio y normativa aplicable.

## Paquetes
- `worker/`: Worker Playwright que detecta huecos y reserva automáticamente.
- `bot/`: Bot de Telegram solo para operadores (alta de operadores, estado, utilidades).
- `server/` y `client/`: base de app/Panel (no requerido para ejecutar el flujo automático).

## Requisitos
- Node.js 18+
- Base de datos Postgres/Neon (variable `DATABASE_URL`)
- Token de bot de Telegram (para notificaciones del worker y uso del bot)

## Instalación
1) Clonar el repo y preparar entorno
```
npm i
(cd worker && npm i)
(cd bot && npm i)
```
2) Playwright Chromium
- Se instala automáticamente al hacer `npm i` en `worker` (postinstall). Si lo necesitas manualmente:
```
cd worker
npx playwright install chromium
```

## Configuración de entorno
Cada paquete incluye su `.env.example` con nombres unificados. Copia y ajusta:
- `worker/.env.example` → `worker/.env`
- `bot/.env.example` → `bot/.env`

Variables clave (worker):
- `TELEGRAM_BOT_TOKEN`, `TELEGRAM_ADMIN_CHAT_ID`
- `DATABASE_URL`
- `WIDGET_URL` (URL del widget Bookitit de la oficina/servicio)
- `CHECK_MIN_MINUTES`, `CHECK_MAX_MINUTES` (intervalo con jitter)
- `COOLDOWN_HOURS` (bloqueos por sistema)
- `CAPTCHA_PROVIDER`, `CAPTCHA_API_KEY`, `CAPTCHA_TIMEOUT_SECONDS`
- `TZ`

Variables clave (bot):
- `TELEGRAM_BOT_TOKEN`, `DATABASE_URL`, `TELEGRAM_ADMIN_CHAT_ID`

## Ejecución
- Worker (modo desarrollo):
```
cd worker
npm run dev
```
El worker se auto-programa con jitter entre `CHECK_MIN_MINUTES` y `CHECK_MAX_MINUTES` y procesa la cola de clientes.

- Bot de Telegram (opcional):
```
cd bot
npm run dev
```

## Automatización
- CI (GitHub Actions): cada push/PR construye `worker` y `bot` con Chromium Playwright listo.
  - Workflow: `.github/workflows/ci.yml`
- Servicio en VPS (systemd):
  - Copiar ejemplos: `deploy/systemd/worker.service.example` y `deploy/systemd/bot.service.example` a `/etc/systemd/system/` (renombrando sin `.example`).
  - Ajustar `WorkingDirectory` y rutas a `.env` si difieren.
  - Habilitar e iniciar:
    - `sudo systemctl daemon-reload`
    - `sudo systemctl enable worker.service bot.service`
    - `sudo systemctl start worker.service bot.service`

## Comportamiento del Worker
- Estrategia “primera disponible”: al detectar un hueco (HH:MM), selecciona el primero visible.
- Bienvenida/consentimiento: busca botones por texto en ES/EN y dentro de iframes si aplica.
- “No hay disponibilidad”: detecta por texto en ES/EN y reprograma sin errores.
- Login: localiza campos por label/placeholder o nombre genérico; detecta captcha.
- Captcha: “auto-then-skip”
  - Si hay proveedor y API configurados, intenta resolver con tiempo límite.
  - Si no hay servicio o expira, notifica al admin y salta al siguiente cliente.
- Bloqueo: detecta `error-cita.aspx` o contenido de “bloqueo/error de sistema”; aplica cooldown configurable y continúa con otros clientes.
- Capturas: dos obligatorias (`before` y `after`) guardadas en `worker/screenshots/` y usadas en la notificación final.
- Notificaciones (solo admin):
  - Hueco encontrado (cliente, trámite, oficina).
  - Cita confirmada (resumen + captura final).
  - Captcha no resuelto (motivo) y continuación.
  - Bloqueo (cooldown aplicado).
  - Error operativo (continúa la cola).

## Normalización de selectores (descripción)
- Bienvenida/consentimiento: botones por texto “aceptar/accept/continuar/continue/ok” en main y iframes.
- Continuar del widget: por rol botón y nombre “Continuar/Continue”.
- “No hay cita/disponibilidad”: textos “no hay citas/disponibilidad/huecos”, “no slots/availability”.
- Horarios Bookitit: patrón hora `HH:MM` (regex) y primer bloque visible clicable.
- Login: labels/placeholders en ES/EN de usuario/contraseña; botón “Acceder/Confirmar/Entrar/Login/Submit”.
- Éxito: textos “reserva realizada/confirmada”, “booking confirmed/reservation confirmed” y extracción básica de campos visibles.

## Logs
- Estructurados y sin secretos.

## Pruebas rápidas (manual)
1) Configurar `.env` y un cliente en la DB (cola `pending`).
2) Forzar ejecución del worker y observar:
   - Sin cupo: reprograma, sin errores ni notificaciones.
   - Con cupo: reserva automática, dos capturas y notificación con captura final.
   - Captcha sin API: notifica y salta.
   - Bloqueo: detecta, aplica cooldown y avisa.
3) Revisar logs y `worker/screenshots`.

## Criterios de aceptación
- Reserva automática end-to-end con dos capturas y notificación.
- Reintentos con jitter ante ausencia de cupo.
- Captcha auto-then-skip con notificación.
- Bloqueo con cooldown y notificación.
- Selectores robustos ES/EN.
- `.env.example` y documentación actualizada.

## Notas
- Gancho de proveedor de captcha preparado; no activo por defecto.
- Listo para VPS con navegador real (Chromium Playwright).
