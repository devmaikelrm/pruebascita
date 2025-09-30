# CitaConsulares – Bot + Worker Playwright

Sistema monorepo para búsqueda y reserva automática de la primera cita disponible en citaconsular.es (Bookitit), con notificaciones al operador vía Telegram, tolerancia a bloqueos, y capturas de evidencia.

Importante: este proyecto automatiza navegación web. Úsalo responsablemente, cumpliendo términos del servicio y normativa aplicable.

## 🚀 Instalación Rápida en VPS (Recomendado)

**¿Quieres tener todo funcionando en 10 minutos?** Usa el script de instalación automática:

```bash
# 1. Conectarse a tu VPS
ssh root@TU_IP_VPS

# 2. Descargar y ejecutar el script maestro
wget https://raw.githubusercontent.com/devmaikelrm/CitaConsulares/main/deploy-master.sh
chmod +x deploy-master.sh
bash deploy-master.sh
```

El script instalará y configurará **TODO automáticamente**:
- ✅ Node.js 20, pnpm, PM2
- ✅ Repositorio y dependencias
- ✅ Playwright Chromium
- ✅ Archivos .env con tus credenciales
- ✅ Corrección SSL para Supabase
- ✅ Servicios PM2 con auto-inicio
- ✅ GitHub Actions para deploy automático

**Documentación completa:**
- 📖 [RESUMEN_EJECUTIVO.md](RESUMEN_EJECUTIVO.md) - Resumen completo
- 📋 [INSTRUCCIONES_SIMPLES.txt](INSTRUCCIONES_SIMPLES.txt) - Instrucciones paso a paso
- 📚 [GUIA_VPS_COMPLETA.md](GUIA_VPS_COMPLETA.md) - Guía detallada
- 🔧 [TROUBLESHOOTING.md](TROUBLESHOOTING.md) - Solución de problemas

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

Guías detalladas por paquete:
- Ver `bot/README_ENV.md` para variables, ejemplos y operación del bot.
- Ver `worker/README_ENV.md` para variables, ejemplos y operación del worker.

Variables clave (worker):
- `TELEGRAM_BOT_TOKEN`, `TELEGRAM_ADMIN_CHAT`
- `DATABASE_URL`
- `WIDGET_URL` (URL del widget Bookitit de la oficina/servicio)
- `CHECK_INTERVAL_MIN`, `CHECK_INTERVAL_MAX` (intervalo con jitter)
- `COOLDOWN_BLOCK_HOURS` (bloqueos por sistema)
- `CAPTCHA_PROVIDER`, `CAPTCHA_API_KEY`, `CAPTCHA_TIMEOUT_SEC`
- `TZ`

Variables clave (bot):
- `TELEGRAM_BOT_TOKEN`, `DATABASE_URL`, `TELEGRAM_ADMIN_CHAT`

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

## Despliegue en VPS (resumen)
- Guía completa: ver `DEPLOY.md`.
- Primer despliegue (con PM2 y healthcheck):
  - `sudo bash scripts/setup.sh` (instala Node 20, pnpm, PM2, Playwright y prepara `/opt/CitaConsulares`).
  - Completar `/opt/CitaConsulares/bot/.env` y `/opt/CitaConsulares/worker/.env`.
  - `sudo bash /opt/CitaConsulares/scripts/deploy.sh` (inicia `bot`, `worker` y `healthcheck`).
- Actualizaciones:
  - `cd /opt/CitaConsulares && sudo bash scripts/update.sh` (pull, instalar deps, build y `pm2 reload`).
- PM2 útil:
  - `pm2 status`, `pm2 logs bot`, `pm2 logs worker`
  - `pm2 restart ecosystem.config.cjs` o `pm2 restart bot worker`
- Healthcheck:
  - Servicio HTTP simple en `:8080/health` (configurable). Responde `{"status":"ok"}`.

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
