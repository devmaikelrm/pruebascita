# 🚀 Guía Completa de Implementación en VPS

## 📋 Índice
1. [Resumen del Proyecto](#resumen-del-proyecto)
2. [Requisitos del VPS](#requisitos-del-vps)
3. [Preparación Inicial](#preparación-inicial)
4. [Instalación Paso a Paso](#instalación-paso-a-paso)
5. [Configuración de Variables de Entorno](#configuración-de-variables-de-entorno)
6. [Base de Datos](#base-de-datos)
7. [Despliegue](#despliegue)
8. [Verificación](#verificación)
9. [Comandos Útiles](#comandos-útiles)
10. [Solución de Problemas](#solución-de-problemas)

---

## 📖 Resumen del Proyecto

**CitaConsulares** es un sistema automatizado para reservar citas consulares en citaconsular.es (Bookitit).

### Componentes:
- **Worker (Playwright)**: Automatiza la navegación web y reserva de citas
- **Bot (Telegram)**: Gestiona operadores, clientes y notificaciones
- **Healthcheck**: Servicio HTTP simple para monitoreo
- **Base de Datos**: PostgreSQL (Supabase/Neon recomendado)

### Tecnologías:
- Node.js 20+
- TypeScript
- Playwright (navegador Chromium)
- PM2 (gestor de procesos)
- pnpm (gestor de paquetes)

---

## 💻 Requisitos del VPS

### Mínimos:
- **OS**: Ubuntu 22.04 o 24.04 (x86_64)
- **CPU**: 1-2 vCPU
- **RAM**: 2-4 GB
- **Disco**: 10 GB mínimo
- **Acceso**: SSH con sudo

### Puertos necesarios:
- **22**: SSH
- **8080**: Healthcheck (configurable)

### Proveedores recomendados:
- DigitalOcean (Droplet básico $6/mes)
- Vultr (Cloud Compute $6/mes)
- Linode (Nanode $5/mes)
- Hetzner (CX11 €4.15/mes)

---

## 🔧 Preparación Inicial

### 1. Conectarse al VPS

```bash
ssh root@TU_IP_VPS
# o
ssh usuario@TU_IP_VPS
```

### 2. Actualizar el sistema

```bash
sudo apt update && sudo apt upgrade -y
```

### 3. Crear usuario (si usas root)

```bash
# Opcional pero recomendado
adduser citabot
usermod -aG sudo citabot
su - citabot
```

---

## 📦 Instalación Paso a Paso

### Opción A: Instalación Automática (RECOMENDADA)

```bash
# 1. Clonar el repositorio
cd ~
git clone https://github.com/devmaikelrm/CitaConsulares.git
cd CitaConsulares

# 2. Ejecutar script de setup (instala todo)
sudo bash scripts/setup.sh
```

**¿Qué hace el script?**
- ✅ Instala Node.js 20
- ✅ Instala pnpm y PM2
- ✅ Configura swap de 2GB
- ✅ Configura firewall (UFW)
- ✅ Clona el proyecto en `/opt/CitaConsulares`
- ✅ Instala dependencias
- ✅ Instala Playwright Chromium
- ✅ Compila worker y bot
- ✅ Configura logrotate

### Opción B: Instalación Manual

<details>
<summary>Click para ver pasos manuales</summary>

```bash
# 1. Instalar Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo bash -
sudo apt-get install -y nodejs

# 2. Instalar pnpm
sudo npm install -g pnpm

# 3. Instalar PM2
sudo npm install -g pm2

# 4. Instalar dependencias del sistema
sudo apt-get install -y git curl unzip build-essential

# 5. Configurar swap (si no existe)
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab

# 6. Configurar firewall
sudo ufw allow OpenSSH
sudo ufw allow 8080/tcp
sudo ufw --force enable

# 7. Clonar proyecto
sudo mkdir -p /opt
sudo git clone https://github.com/devmaikelrm/CitaConsulares.git /opt/CitaConsulares
sudo chown -R $USER:$USER /opt/CitaConsulares

# 8. Instalar dependencias
cd /opt/CitaConsulares
pnpm install -r

# 9. Compilar shared
cd shared
pnpm build
cd ..

# 10. Instalar Playwright
cd worker
pnpm exec playwright install --with-deps chromium
cd ..

# 11. Compilar worker y bot
cd worker && pnpm build && cd ..
cd bot && pnpm build && cd ..

# 12. Configurar PM2 startup
pm2 startup systemd
# Ejecutar el comando que te muestre
```

</details>

---

## ⚙️ Configuración de Variables de Entorno

### 1. Obtener credenciales necesarias

#### A. Bot de Telegram
1. Habla con [@BotFather](https://t.me/BotFather) en Telegram
2. Envía `/newbot`
3. Sigue las instrucciones
4. Guarda el **token** (formato: `123456789:ABCdefGHIjklMNOpqrsTUVwxyz`)

#### B. Tu Chat ID de Telegram
1. Habla con [@userinfobot](https://t.me/userinfobot)
2. Envía cualquier mensaje
3. Guarda tu **ID** (número como `123456789`)

#### C. Base de Datos (Supabase - GRATIS)
1. Ve a [supabase.com](https://supabase.com)
2. Crea cuenta y nuevo proyecto
3. Espera ~2 minutos a que se cree
4. Ve a **Settings** → **Database**
5. Copia la **Connection String** (URI mode)
6. Formato: `postgresql://postgres:PASSWORD@db.xxxxx.supabase.co:5432/postgres`

#### D. URL del Widget
1. Ve a [citaconsular.es](https://citaconsular.es)
2. Selecciona tu oficina y servicio
3. Copia la URL completa del widget
4. Ejemplo: `https://www.citaconsular.es/widget/...`

### 2. Configurar archivos .env

#### Bot (.env)

```bash
cd /opt/CitaConsulares/bot
nano .env
```

Pega esto (reemplaza con tus valores):

```env
# Zona horaria
TZ=America/Havana

# Bot de Telegram
TELEGRAM_BOT_TOKEN=123456789:ABCdefGHIjklMNOpqrsTUVwxyz
TELEGRAM_ADMIN_CHAT=123456789

# Base de datos
DATABASE_URL=postgresql://postgres:TU_PASSWORD@db.xxxxx.supabase.co:5432/postgres
```

Guarda: `Ctrl+O`, `Enter`, `Ctrl+X`

#### Worker (.env)

```bash
cd /opt/CitaConsulares/worker
nano .env
```

Pega esto (reemplaza con tus valores):

```env
# Zona horaria
TZ=America/Havana

# Bot de Telegram (para notificaciones)
TELEGRAM_BOT_TOKEN=123456789:ABCdefGHIjklMNOpqrsTUVwxyz
TELEGRAM_ADMIN_CHAT=123456789

# URL del widget a monitorear
WIDGET_URL=https://www.citaconsular.es/widget/TU_WIDGET_AQUI

# Intervalo de chequeo (minutos)
CHECK_INTERVAL_MIN=6
CHECK_INTERVAL_MAX=10

# Cooldown tras bloqueo (horas)
COOLDOWN_BLOCK_HOURS=3

# Captcha (opcional - déjalo vacío por ahora)
CAPTCHA_PROVIDER=
CAPTCHA_API_KEY=
CAPTCHA_TIMEOUT_SEC=25

# Base de datos
DATABASE_URL=postgresql://postgres:TU_PASSWORD@db.xxxxx.supabase.co:5432/postgres
```

Guarda: `Ctrl+O`, `Enter`, `Ctrl+X`

---

## 🗄️ Base de Datos

### Opción A: Supabase (Recomendada - GRATIS)

1. **Accede al SQL Editor** en tu proyecto Supabase

2. **Ejecuta los scripts en orden**:

```sql
-- 1. Ejecuta: scripts/db-init.sql
-- Copia y pega el contenido completo
```

3. **Verifica las tablas**:
```sql
SELECT table_name FROM information_schema.tables 
WHERE table_schema = 'public';
```

Deberías ver:
- `operators`
- `clients`
- `preferences`
- `queue`
- `appointments`
- `captcha_requests`
- `cooldowns`

### Opción B: Neon/Postgres

Similar a Supabase, ejecuta `scripts/db-init.sql` en tu cliente SQL.

---

## 🚀 Despliegue

### 1. Verificar configuración

```bash
# Verificar que los .env existen y tienen contenido
cat /opt/CitaConsulares/bot/.env
cat /opt/CitaConsulares/worker/.env
```

### 2. Ejecutar deploy

```bash
cd /opt/CitaConsulares
sudo bash scripts/deploy.sh
```

**¿Qué hace?**
- ✅ Inicia worker, bot y healthcheck con PM2
- ✅ Configura auto-inicio en reboot
- ✅ Muestra el estado

### 3. Verificar estado

```bash
pm2 status
```

Deberías ver algo como:

```
┌─────┬──────────────┬─────────┬─────────┬─────────┐
│ id  │ name         │ status  │ restart │ uptime  │
├─────┼──────────────┼─────────┼─────────┼─────────┤
│ 0   │ worker       │ online  │ 0       │ 5s      │
│ 1   │ bot          │ online  │ 0       │ 5s      │
│ 2   │ healthcheck  │ online  │ 0       │ 5s      │
└─────┴──────────────┴─────────┴─────────┴─────────┘
```

---

## ✅ Verificación

### 1. Verificar logs

```bash
# Ver logs del worker
pm2 logs worker --lines 50

# Ver logs del bot
pm2 logs bot --lines 50

# Ver todos los logs
pm2 logs --lines 100
```

### 2. Verificar healthcheck

```bash
curl http://localhost:8080/health
```

Debería responder:
```json
{"status":"ok"}
```

### 3. Verificar bot de Telegram

1. Abre Telegram
2. Busca tu bot (el nombre que le diste)
3. Envía `/start`
4. Deberías recibir un mensaje de bienvenida

### 4. Verificar conexión a base de datos

```bash
pm2 logs bot --lines 20
```

No deberías ver errores de conexión.

---

## 🛠️ Comandos Útiles

### PM2 Básico

```bash
# Ver estado
pm2 status

# Ver logs en tiempo real
pm2 logs

# Ver logs de un servicio específico
pm2 logs worker
pm2 logs bot

# Reiniciar servicios
pm2 restart all
pm2 restart worker
pm2 restart bot

# Detener servicios
pm2 stop all
pm2 stop worker

# Recargar (sin downtime)
pm2 reload all

# Guardar configuración actual
pm2 save

# Ver información detallada
pm2 info worker
```

### Actualización del código

```bash
cd /opt/CitaConsulares
sudo bash scripts/update.sh
```

**¿Qué hace?**
- ✅ `git pull` (descarga cambios)
- ✅ Instala nuevas dependencias
- ✅ Recompila shared, worker y bot
- ✅ Recarga PM2 sin downtime

### Logs del sistema

```bash
# Logs de PM2 (rotados)
ls -lh /var/log/pm2/

# Ver log específico
tail -f /var/log/pm2/worker.out.log
tail -f /var/log/pm2/worker.error.log
```

### Monitoreo

```bash
# Monitor interactivo de PM2
pm2 monit

# Uso de recursos
pm2 list
htop  # si está instalado
```

---

## 🔥 Solución de Problemas Comunes

Ver archivo `TROUBLESHOOTING.md` para guía detallada.

### Problema: "pm2: command not found"

```bash
sudo npm install -g pm2
```

### Problema: "pnpm: command not found"

```bash
sudo npm install -g pnpm
```

### Problema: Worker se reinicia constantemente

```bash
# Ver el error
pm2 logs worker --err --lines 50

# Causas comunes:
# 1. DATABASE_URL incorrecto
# 2. TELEGRAM_BOT_TOKEN inválido
# 3. Falta Playwright Chromium
```

### Problema: Bot no responde

```bash
# 1. Verificar que el bot está corriendo
pm2 status

# 2. Ver logs
pm2 logs bot --lines 50

# 3. Verificar token
cat /opt/CitaConsulares/bot/.env | grep TELEGRAM_BOT_TOKEN

# 4. Reiniciar
pm2 restart bot
```

### Problema: "Cannot find module"

```bash
# Reinstalar dependencias
cd /opt/CitaConsulares
pnpm install -r

# Recompilar
cd shared && pnpm build && cd ..
cd worker && pnpm build && cd ..
cd bot && pnpm build && cd ..

# Reiniciar
pm2 restart all
```

---

## 📚 Recursos Adicionales

- [Documentación PM2](https://pm2.keymetrics.io/docs/usage/quick-start/)
- [Playwright Docs](https://playwright.dev/)
- [Supabase Docs](https://supabase.com/docs)
- [Telegram Bot API](https://core.telegram.org/bots/api)

---

## 🎯 Próximos Pasos

1. ✅ Registrar un operador: `/operador` en Telegram
2. ✅ Agregar un cliente: `/cliente` en Telegram
3. ✅ Configurar preferencias: `/preferencia` en Telegram
4. ✅ Verificar cola: `/status` en Telegram
5. ✅ Monitorear logs: `pm2 logs`

---

**¿Necesitas ayuda?** Revisa `TROUBLESHOOTING.md` o los logs con `pm2 logs`.

