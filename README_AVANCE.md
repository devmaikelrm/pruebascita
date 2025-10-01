# Resumen de avance (bot de citas consulares)

## Qué logramos hoy
- Modo descubrimiento activado por defecto: cuando aparece un hueco, el bot no confirma; captura pantalla, lista campos del formulario y envía enlace para continuar manualmente por Telegram.
- Reintentos 24/7: el ciclo se auto‐programa con jitter entre `CHECK_MIN_MINUTES` y `CHECK_MAX_MINUTES` (o `CHECK_INTERVAL_MIN/MAX`), sin parar aunque no haya citas.
- Detección de bloqueos mejorada: solo activa cooldown si detecta indicadores claros de bloqueo fuerte (p. ej. "Bloqueo temporal", "72 horas", "rate limit"). Mensajes genéricos de "Inactividad" no activan cooldown.
- Re‐programación suave: cuando no hay huecos o estamos en modo descubrimiento, el item de la cola queda en `pending` con el próximo intento programado automáticamente.
- Selección robusta del primer hueco disponible (Bookitit) con búsqueda en iframes y múltiples estrategias de selectores.
- Notificaciones por Telegram: aviso cuando se encuentra un hueco (incluye enlace, captura y resumen de campos en modo descubrimiento).

## Cómo ejecutarlo (modo descubrimiento)
1) Variables mínimas (en `/opt/CitaConsulares/worker/.env` o entorno):
   - `DATABASE_URL` (Postgres/Supabase)
   - `TELEGRAM_BOT_TOKEN`, `TELEGRAM_ADMIN_CHAT` (opcional pero recomendado)
   - `WIDGET_URL` (URL del widget/servicio a monitorear)
   - `DISCOVERY_MODE=true` (por defecto ya está en `true`)
   - `CHECK_MIN_MINUTES` y `CHECK_MAX_MINUTES` (o `CHECK_INTERVAL_MIN/MAX`) para la frecuencia
2) Compilar y arrancar con PM2:
   - `pnpm -C worker build`
   - `pm2 restart worker --update-env`
   - Logs: `pm2 logs worker --lines 200`

## Variables de entorno relevantes (worker)
- `WIDGET_URL`: URL del widget Bookitit a monitorear.
- `DISCOVERY_MODE`: `true` para modo descubrimiento (no confirma, solo notifica y captura).
- `CHECK_MIN_MINUTES`, `CHECK_MAX_MINUTES` (o `CHECK_INTERVAL_MIN`, `CHECK_INTERVAL_MAX`): ventana de tiempo entre ciclos.
- `COOLDOWN_HOURS` (o `COOLDOWN_BLOCK_HOURS`): horas de cooldown cuando hay bloqueo fuerte.
- `CAPTCHA_PROVIDER`, `CAPTCHA_API_KEY` (opcional): servicio automático de captcha.
- `TELEGRAM_BOT_TOKEN`, `TELEGRAM_ADMIN_CHAT`: notificaciones.
- `DATABASE_URL`: conexión a Postgres.

## Estado actual del bot
- Corre 24/7 y reintenta de forma indefinida.
- Si detecta hueco:
  - En modo descubrimiento: NO confirma; envía enlace + captura + resumen de campos para seguir manualmente.
  - En modo automático (cuando lo activemos): hará login/confirmación y registrará la cita.
- Si detecta “no hay disponibilidad”: re‐agenda y sigue probando.
- Si detecta bloqueo fuerte: aplica cooldown y notifica.

## Qué queda pendiente
- Llenado automático del formulario posterior al hueco (dependemos de ver exactamente qué campos pide en tu caso). Una vez tengamos las capturas/listado de campos del modo descubrimiento, implementamos el autocompletado y la confirmación.
- CAPTCHA automático (si aparece): integrar proveedor real (2captcha/capmonster) en `CaptchaManager.solveAutomatically`.
- Ajustar `COOLDOWN_HOURS` (48h o 72h) según comportamiento real del sistema.
- Verificación de compilación en VPS con `@types/node` disponibles (evitar errores de TS por tipos de Node cuando se compila en prod).

## Troubleshooting rápido
- Error TS “Cannot find type definition file for 'node'”: asegúrate de instalar devDependencies en la fase de build o usa `pnpm install` desde la raíz del monorepo y `pnpm -F @repo/shared build` antes de `pnpm -F spanishconsular-worker build`.
- Si Playwright falla al lanzar Chromium en VPS: verifica que `npx playwright install chromium` se ejecutó (lo hace el `postinstall`) y que `--no-sandbox` está activo (ya configurado).

## Próximos pasos sugeridos
1) Mantener `DISCOVERY_MODE=true` hasta recibir la primera captura/listado real de campos.
2) Con esa información, implementar el llenado y confirmación (activar `DISCOVERY_MODE=false`).
3) Ajustar frecuencia de chequeos y cooldown con datos reales.
4) Añadir tests mínimos de scraping/selección (simulados) para robustez.

