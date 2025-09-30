# 🔧 Guía de Solución de Problemas

## 📋 Índice
1. [Problemas de Instalación](#problemas-de-instalación)
2. [Problemas con PM2](#problemas-con-pm2)
3. [Problemas con Base de Datos](#problemas-con-base-de-datos)
4. [Problemas con Telegram Bot](#problemas-con-telegram-bot)
5. [Problemas con Worker/Playwright](#problemas-con-workerplaywright)
6. [Problemas de Red/Firewall](#problemas-de-redfirewall)
7. [Problemas de Memoria/Recursos](#problemas-de-memoriarecursos)
8. [Comandos de Diagnóstico](#comandos-de-diagnóstico)

---

## 🚨 Problemas de Instalación

### Error: "Node version is too old"

**Síntoma:**
```
Error: The engine "node" is incompatible with this module
```

**Solución:**
```bash
# Verificar versión actual
node -v

# Si es menor a v20, instalar Node 20
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo bash -
sudo apt-get install -y nodejs

# Verificar
node -v  # Debe mostrar v20.x.x
```

### Error: "pnpm: command not found"

**Solución:**
```bash
# Instalar pnpm globalmente
sudo npm install -g pnpm

# Verificar
pnpm -v
```

### Error: "pm2: command not found"

**Solución:**
```bash
# Instalar PM2 globalmente
sudo npm install -g pm2

# Verificar
pm2 -v
```

### Error: "Permission denied" durante instalación

**Solución:**
```bash
# Dar permisos al directorio
sudo chown -R $USER:$USER /opt/CitaConsulares

# O ejecutar con sudo
sudo bash scripts/setup.sh
```

### Error: "ENOSPC: System limit for number of file watchers reached"

**Solución:**
```bash
# Aumentar límite de watchers
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
sudo sysctl -p
```

---

## 🔄 Problemas con PM2

### PM2: Servicio se reinicia constantemente

**Diagnóstico:**
```bash
# Ver estado
pm2 status

# Ver logs de error
pm2 logs worker --err --lines 100
pm2 logs bot --err --lines 100
```

**Causas comunes:**

#### 1. Error en variables de entorno

```bash
# Verificar que los .env existen
ls -la /opt/CitaConsulares/bot/.env
ls -la /opt/CitaConsulares/worker/.env

# Ver contenido (sin mostrar passwords)
cat /opt/CitaConsulares/bot/.env | grep -v PASSWORD
cat /opt/CitaConsulares/worker/.env | grep -v PASSWORD

# Verificar que no estén vacíos
if [ -s /opt/CitaConsulares/bot/.env ]; then echo "Bot .env OK"; else echo "Bot .env VACÍO"; fi
if [ -s /opt/CitaConsulares/worker/.env ]; then echo "Worker .env OK"; else echo "Worker .env VACÍO"; fi
```

#### 2. Módulos faltantes

```bash
# Reinstalar dependencias
cd /opt/CitaConsulares
pnpm install -r

# Recompilar shared
cd shared && pnpm build && cd ..

# Recompilar worker y bot
cd worker && pnpm build && cd ..
cd bot && pnpm build && cd ..

# Reiniciar
pm2 restart all
```

#### 3. Error en código compilado

```bash
# Ver si existen los archivos compilados
ls -la /opt/CitaConsulares/worker/dist/
ls -la /opt/CitaConsulares/bot/dist/

# Si no existen, compilar
cd /opt/CitaConsulares/worker && pnpm build
cd /opt/CitaConsulares/bot && pnpm build
```

### PM2: "Error: Cannot find module"

**Solución completa:**
```bash
cd /opt/CitaConsulares

# 1. Limpiar node_modules
rm -rf node_modules worker/node_modules bot/node_modules shared/node_modules

# 2. Limpiar dist
rm -rf worker/dist bot/dist shared/dist

# 3. Reinstalar todo
pnpm install -r

# 4. Compilar en orden
cd shared && pnpm build && cd ..
cd worker && pnpm build && cd ..
cd bot && pnpm build && cd ..

# 5. Reiniciar PM2
pm2 restart all
```

### PM2: Servicios no inician al reiniciar el servidor

**Solución:**
```bash
# Configurar PM2 startup
pm2 startup systemd

# Ejecutar el comando que te muestre (ejemplo):
# sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u usuario --hp /home/usuario

# Guardar configuración actual
pm2 save

# Verificar
sudo systemctl status pm2-$USER
```

### PM2: "max_restarts reached"

**Diagnóstico:**
```bash
# Ver información detallada
pm2 info worker
pm2 info bot

# Ver logs completos
pm2 logs worker --lines 200 --err
```

**Solución:**
```bash
# Resetear contador de reintentos
pm2 reset worker
pm2 reset bot

# O eliminar y volver a crear
pm2 delete all
cd /opt/CitaConsulares
sudo bash scripts/deploy.sh
```

---

## 🗄️ Problemas con Base de Datos

### Error: "Connection refused" o "ECONNREFUSED"

**Diagnóstico:**
```bash
# Verificar DATABASE_URL
cat /opt/CitaConsulares/bot/.env | grep DATABASE_URL
cat /opt/CitaConsulares/worker/.env | grep DATABASE_URL
```

**Causas comunes:**

#### 1. URL incorrecta

Formato correcto:
```
postgresql://postgres:PASSWORD@db.xxxxx.supabase.co:5432/postgres
```

Verifica:
- ✅ Protocolo: `postgresql://`
- ✅ Usuario: `postgres`
- ✅ Password: sin espacios, caracteres especiales escapados
- ✅ Host: termina en `.supabase.co` o tu host
- ✅ Puerto: `5432` (o `6543` para pooling)
- ✅ Database: `postgres`

#### 2. Password con caracteres especiales

Si tu password tiene caracteres como `@`, `#`, `%`, etc:

```bash
# Codificar password
# Ejemplo: si password es "Pass@123"
# Usar: "Pass%40123" (@ = %40)

# O cambiar password en Supabase a uno sin caracteres especiales
```

#### 3. Firewall bloqueando

```bash
# Verificar conectividad
ping db.xxxxx.supabase.co

# Probar conexión al puerto
nc -zv db.xxxxx.supabase.co 5432
```

### Error: "SSL connection required"

**Solución:**

Agregar `?sslmode=require` al final de DATABASE_URL:

```env
DATABASE_URL=postgresql://postgres:PASSWORD@db.xxxxx.supabase.co:5432/postgres?sslmode=require
```

### Error: "relation does not exist"

**Causa:** Tablas no creadas

**Solución:**
```bash
# 1. Ir a Supabase SQL Editor
# 2. Ejecutar scripts/db-init.sql completo
# 3. Verificar tablas creadas:

# En Supabase SQL Editor:
SELECT table_name FROM information_schema.tables 
WHERE table_schema = 'public';
```

### Error: "too many connections"

**Solución:**

Usar connection pooling de Supabase:

```env
# Cambiar puerto 5432 a 6543
DATABASE_URL=postgresql://postgres:PASSWORD@db.xxxxx.supabase.co:6543/postgres
```

---

## 🤖 Problemas con Telegram Bot

### Bot no responde a comandos

**Diagnóstico paso a paso:**

#### 1. Verificar que el bot está corriendo

```bash
pm2 status
# Debe mostrar "bot" en estado "online"
```

#### 2. Ver logs del bot

```bash
pm2 logs bot --lines 50
```

#### 3. Verificar token

```bash
# Ver token (primeros caracteres)
cat /opt/CitaConsulares/bot/.env | grep TELEGRAM_BOT_TOKEN | cut -c1-30

# Probar token manualmente
curl https://api.telegram.org/bot<TU_TOKEN>/getMe
# Debe responder con información del bot
```

#### 4. Verificar Chat ID

```bash
# Ver tu chat ID configurado
cat /opt/CitaConsulares/bot/.env | grep TELEGRAM_ADMIN_CHAT

# Obtener tu chat ID real:
# 1. Habla con @userinfobot en Telegram
# 2. Compara con el configurado
```

**Soluciones:**

```bash
# Si el token es incorrecto
nano /opt/CitaConsulares/bot/.env
# Corregir TELEGRAM_BOT_TOKEN
# Guardar: Ctrl+O, Enter, Ctrl+X

# Reiniciar bot
pm2 restart bot

# Ver logs
pm2 logs bot --lines 20
```

### Bot responde "You need to register as an operator first"

**Causa:** No hay operadores registrados en la DB

**Solución:**

```bash
# 1. Verificar conexión a DB
pm2 logs bot | grep -i "database\|connection"

# 2. En Telegram, enviar:
/operador

# 3. Seguir las instrucciones del bot

# 4. Verificar en Supabase SQL Editor:
SELECT * FROM operators;
```

### Error: "ETELEGRAM: 401 Unauthorized"

**Causa:** Token inválido

**Solución:**
```bash
# 1. Crear nuevo bot con @BotFather
# 2. Obtener nuevo token
# 3. Actualizar .env
nano /opt/CitaConsulares/bot/.env
# Cambiar TELEGRAM_BOT_TOKEN

# 4. Reiniciar
pm2 restart bot
```

---

## 🎭 Problemas con Worker/Playwright

### Error: "Executable doesn't exist at /home/..."

**Causa:** Chromium no instalado

**Solución:**
```bash
cd /opt/CitaConsulares/worker
pnpm exec playwright install --with-deps chromium

# Verificar instalación
pnpm exec playwright --version
```

### Error: "browserType.launch: Failed to launch chromium"

**Solución completa:**
```bash
# 1. Instalar dependencias del sistema
sudo apt-get update
sudo apt-get install -y \
    libnss3 \
    libnspr4 \
    libatk1.0-0 \
    libatk-bridge2.0-0 \
    libcups2 \
    libdrm2 \
    libdbus-1-3 \
    libxkbcommon0 \
    libxcomposite1 \
    libxdamage1 \
    libxfixes3 \
    libxrandr2 \
    libgbm1 \
    libpango-1.0-0 \
    libcairo2 \
    libasound2

# 2. Reinstalar Playwright
cd /opt/CitaConsulares/worker
pnpm exec playwright install --with-deps chromium

# 3. Reiniciar worker
pm2 restart worker
```

### Worker no encuentra citas (siempre "No hay disponibilidad")

**Diagnóstico:**
```bash
# Ver logs del worker
pm2 logs worker --lines 100

# Buscar mensajes de "No hay disponibilidad" o "No slots"
```

**Verificaciones:**

1. **URL correcta:**
```bash
cat /opt/CitaConsulares/worker/.env | grep WIDGET_URL
# Debe ser la URL completa del widget
```

2. **Selectores actualizados:**
```bash
# Ver archivo de selectores
cat /opt/CitaConsulares/worker/src/selectors.ts
```

3. **Capturas de pantalla:**
```bash
# Ver últimas capturas
ls -lht /opt/CitaConsulares/worker/screenshots/ | head -10

# Ver una captura (si tienes acceso gráfico)
# O descargarla con scp para revisar
```

### Error: "Navigation timeout"

**Solución:**
```bash
# Aumentar timeout en worker/src/adapters/dni_habana.ts
# O verificar conectividad

# Probar acceso al sitio
curl -I https://www.citaconsular.es

# Ver logs
pm2 logs worker --lines 50
```

---

## 🌐 Problemas de Red/Firewall

### Healthcheck no responde

**Diagnóstico:**
```bash
# Verificar que healthcheck está corriendo
pm2 status | grep healthcheck

# Probar localmente
curl http://localhost:8080/health

# Ver logs
pm2 logs healthcheck
```

**Solución:**
```bash
# Verificar puerto
cat /opt/CitaConsulares/ecosystem.config.cjs | grep HEALTHCHECK_PORT

# Verificar firewall
sudo ufw status

# Permitir puerto si está bloqueado
sudo ufw allow 8080/tcp
```

### No se puede acceder al VPS por SSH

**Solución de emergencia:**

1. Acceder por consola del proveedor (DigitalOcean, Vultr, etc.)
2. Verificar UFW:
```bash
sudo ufw status
sudo ufw allow OpenSSH
sudo ufw reload
```

---

## 💾 Problemas de Memoria/Recursos

### Error: "JavaScript heap out of memory"

**Solución:**
```bash
# Aumentar límite de memoria para Node.js
# Editar ecosystem.config.cjs

nano /opt/CitaConsulares/ecosystem.config.cjs
```

Agregar en cada app:
```javascript
{
  name: 'worker',
  // ... otras opciones
  node_args: '--max-old-space-size=2048'  // 2GB
}
```

```bash
# Reiniciar
pm2 restart all
```

### Sistema sin memoria

**Diagnóstico:**
```bash
# Ver uso de memoria
free -h

# Ver procesos que más consumen
ps aux --sort=-%mem | head -10
```

**Solución:**
```bash
# Verificar swap
swapon --show

# Si no hay swap, crear
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab

# Verificar
free -h
```

### Disco lleno

**Diagnóstico:**
```bash
# Ver uso de disco
df -h

# Ver qué consume más espacio
du -sh /opt/CitaConsulares/* | sort -h
du -sh /var/log/pm2/* | sort -h
```

**Solución:**
```bash
# Limpiar logs viejos
pm2 flush

# Limpiar capturas viejas (más de 30 días)
find /opt/CitaConsulares/worker/screenshots -type f -mtime +30 -delete

# Limpiar cache de npm/pnpm
pnpm store prune
npm cache clean --force
```

---

## 🔍 Comandos de Diagnóstico

### Script de diagnóstico completo

Crea este archivo para diagnóstico rápido:

```bash
nano ~/diagnostico.sh
```

Contenido:
```bash
#!/bin/bash
echo "=== DIAGNÓSTICO CITACONSULARES ==="
echo ""
echo "--- Versiones ---"
node -v
pnpm -v
pm2 -v
echo ""
echo "--- Estado PM2 ---"
pm2 status
echo ""
echo "--- Memoria ---"
free -h
echo ""
echo "--- Disco ---"
df -h /opt
echo ""
echo "--- Archivos .env ---"
ls -lh /opt/CitaConsulares/bot/.env
ls -lh /opt/CitaConsulares/worker/.env
echo ""
echo "--- Últimos logs worker (10 líneas) ---"
pm2 logs worker --lines 10 --nostream
echo ""
echo "--- Últimos logs bot (10 líneas) ---"
pm2 logs bot --lines 10 --nostream
echo ""
echo "--- Healthcheck ---"
curl -s http://localhost:8080/health
echo ""
```

Usar:
```bash
chmod +x ~/diagnostico.sh
~/diagnostico.sh
```

### Logs estructurados

```bash
# Ver solo errores
pm2 logs --err

# Ver logs de las últimas 24h
pm2 logs --lines 1000 | grep "$(date +%Y-%m-%d)"

# Buscar palabra específica
pm2 logs worker | grep -i "error\|fail\|exception"

# Exportar logs
pm2 logs worker --lines 500 --nostream > ~/worker_logs.txt
```

---

## 📞 Obtener Ayuda

Si ninguna solución funciona:

1. **Recopilar información:**
```bash
# Ejecutar diagnóstico
~/diagnostico.sh > ~/diagnostico.txt

# Exportar logs
pm2 logs --lines 200 --nostream > ~/pm2_logs.txt

# Exportar configuración (sin passwords)
cat /opt/CitaConsulares/bot/.env | grep -v "PASSWORD\|TOKEN" > ~/config.txt
cat /opt/CitaConsulares/worker/.env | grep -v "PASSWORD\|TOKEN\|API_KEY" >> ~/config.txt
```

2. **Revisar documentación:**
- `README.md`
- `DEPLOY.md`
- `GUIA_VPS_COMPLETA.md`

3. **Verificar logs del sistema:**
```bash
sudo journalctl -u pm2-$USER -n 100
```

---

## ✅ Checklist de Verificación

Antes de reportar un problema, verifica:

- [ ] Node.js versión 20 o superior: `node -v`
- [ ] pnpm instalado: `pnpm -v`
- [ ] PM2 instalado: `pm2 -v`
- [ ] Archivos .env existen y tienen contenido
- [ ] DATABASE_URL es válido y accesible
- [ ] TELEGRAM_BOT_TOKEN es válido
- [ ] TELEGRAM_ADMIN_CHAT es tu ID correcto
- [ ] Tablas de DB creadas (ejecutaste db-init.sql)
- [ ] Playwright Chromium instalado
- [ ] Servicios compilados (existen carpetas dist/)
- [ ] PM2 muestra servicios "online"
- [ ] No hay errores en `pm2 logs`
- [ ] Firewall permite puertos necesarios
- [ ] Hay suficiente memoria y disco

---

**Última actualización:** 2025-09-30

