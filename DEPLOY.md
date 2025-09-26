# Guía de Despliegue (VPS Ubuntu)

## Requisitos del servidor
- Arquitectura x86_64
- Ubuntu 22.04 o 24.04
- 1–2 vCPU
- 2–4 GB de RAM
- Acceso sudo
- Puertos: SSH (22) y puerto del healthcheck (por defecto 8080)

## Variables de entorno
Copia `bot/.env.example` y `worker/.env.example` a `.env` en cada directorio y completa los valores:

### Comunes
- `TZ`

### Bot
- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_ADMIN_CHAT`

### Worker
- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_ADMIN_CHAT`
- `WIDGET_URL`
- `CHECK_INTERVAL_MIN`
- `CHECK_INTERVAL_MAX`
- `COOLDOWN_BLOCK_HOURS`
- `CAPTCHA_API_KEY` (opcional)
- `CAPTCHA_TIMEOUT_SEC`
- `DATABASE_URL`

> No subas los archivos `.env` al repositorio.

## Primer despliegue
1. Conéctate al VPS y descarga el repositorio (`git clone` o copia los archivos).
2. Ejecuta `sudo bash scripts/setup.sh`.
   - Instala Node.js 20, pnpm, PM2, Playwright y dependencias del sistema.
   - Configura swap (2 GB) si no existe.
   - Configura UFW (SSH + puerto de healthcheck).
   - Clona el proyecto en `/opt/CitaConsulares` y compila los paquetes.
   - Copia los scripts de despliegue a `/opt/CitaConsulares/scripts/`.
   - Instala el logrotate para `/var/log/pm2/*.log`.
   - Muestra el comando de `pm2 startup` (ejecútalo una vez).
3. Completa `bot/.env` y `worker/.env` en `/opt/CitaConsulares/`.
4. Ejecuta `sudo bash /opt/CitaConsulares/scripts/deploy.sh` para iniciar los servicios con PM2.

## Healthcheck
- Servicio HTTP simple en `HEALTHCHECK_PORT` (default 8080).
- Responde `{"status":"ok"}`.
- Puedes cambiar el puerto exportando `HEALTHCHECK_PORT` antes de ejecutar `setup.sh` o editando `ecosystem.config.cjs`.

## Logs
- `pm2 logs worker`
- `pm2 logs bot`
- Archivos rotados en `/var/log/pm2/`.

## Actualizaciones
1. `cd /opt/CitaConsulares`
2. `sudo bash scripts/update.sh`
   - `git pull`, `pnpm install`, `pnpm build` y `pm2 reload`.

## Seguridad
- UFW permite únicamente SSH y el puerto del healthcheck.
- Mantén el sistema actualizado (`apt-get update && apt-get upgrade`).
- Usa usuarios sin privilegios para la operación diaria.
- Considera supervisión y backups de la base de datos.

## Referencias Rápidas
- Reiniciar servicios manualmente: `pm2 restart ecosystem.config.cjs`
- Detener servicios: `pm2 stop all`
- Estado PM2: `pm2 status`
- El repositorio vive en `/opt/CitaConsulares/`.
