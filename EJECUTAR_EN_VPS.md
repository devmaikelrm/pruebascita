# 🚀 Instrucciones para Ejecutar en VPS

## Método 1: Copiar y Pegar (MÁS FÁCIL)

### Paso 1: Conectarse a la VPS

```bash
ssh root@91.99.171.11
```

Contraseña: `3i4jE9UwnXR3`

### Paso 2: Descargar el script maestro

Una vez dentro de la VPS, ejecuta:

```bash
curl -o deploy-master.sh https://raw.githubusercontent.com/devmaikelrm/CitaConsulares/main/deploy-master.sh
```

O si prefieres crearlo manualmente:

```bash
nano deploy-master.sh
```

Luego copia TODO el contenido del archivo `deploy-master.sh` y pégalo en el editor.

Guarda con: `Ctrl+O`, `Enter`, `Ctrl+X`

### Paso 3: Dar permisos de ejecución

```bash
chmod +x deploy-master.sh
```

### Paso 4: Ejecutar el script

```bash
bash deploy-master.sh
```

### Paso 5: Proporcionar credenciales cuando te las pida

El script te pedirá:

1. **Token del bot de Telegram**
   - Ve a [@BotFather](https://t.me/BotFather)
   - Envía `/mybots` → Selecciona tu bot → API Token
   - Formato: `123456789:ABCdefGHIjklMNOpqrsTUVwxyz`

2. **Tu Chat ID de Telegram**
   - Ve a [@userinfobot](https://t.me/userinfobot)
   - Envía cualquier mensaje
   - Copia el número que te da

3. **DATABASE_URL de Supabase**
   - Ve a tu proyecto en [supabase.com](https://supabase.com)
   - Settings → Database → Connection String (URI mode)
   - Formato: `postgresql://postgres:PASSWORD@db.xxxxx.supabase.co:5432/postgres`

4. **WIDGET_URL** (opcional por ahora)
   - Puedes presionar Enter para omitir
   - Lo configurarás después

---

## Método 2: Subir archivo desde tu PC (Windows)

### Opción A: Usando SCP desde PowerShell

```powershell
# Desde tu PC (PowerShell)
cd C:\Users\Computos\Desktop\citasembjada\CitaConsulares\CitaConsulares

# Subir el script
scp deploy-master.sh root@91.99.171.11:/root/

# Conectarse y ejecutar
ssh root@91.99.171.11
bash /root/deploy-master.sh
```

### Opción B: Usando WinSCP o FileZilla

1. Abre WinSCP o FileZilla
2. Conecta a:
   - Host: `91.99.171.11`
   - Usuario: `root`
   - Contraseña: `3i4jE9UwnXR3`
3. Sube el archivo `deploy-master.sh` a `/root/`
4. Conecta por SSH y ejecuta:
   ```bash
   bash /root/deploy-master.sh
   ```

---

## ¿Qué hace el script automáticamente?

✅ Instala Node.js 20, pnpm, PM2
✅ Configura swap de 2GB
✅ Configura firewall (SSH + puerto 8080)
✅ Clona el repositorio en `/opt/CitaConsulares`
✅ Instala todas las dependencias
✅ Instala Playwright Chromium
✅ Compila shared, bot y worker
✅ Te pide las credenciales de forma segura
✅ Crea archivos .env con tus credenciales
✅ Corrige el problema de SSL con Supabase
✅ Configura PM2 y auto-inicio
✅ Inicia todos los servicios
✅ Verifica que todo funcione
✅ Configura GitHub Actions para deploy automático

---

## Después de ejecutar el script

### 1. Verificar que todo funciona

```bash
# Ver estado de servicios
pm2 status

# Ver logs del bot
pm2 logs bot --lines 50

# Ver logs del worker
pm2 logs worker --lines 50
```

### 2. Probar el bot en Telegram

1. Abre Telegram
2. Busca tu bot
3. Envía `/start`
4. Deberías recibir un mensaje de bienvenida

### 3. Configurar la base de datos

1. Ve a [supabase.com](https://supabase.com)
2. Abre tu proyecto
3. Ve a SQL Editor
4. Ejecuta el contenido de `scripts/db-init.sql`

### 4. Configurar GitHub Actions (deploy automático)

1. Ve a: https://github.com/devmaikelrm/CitaConsulares/settings/secrets/actions
2. Click en "New repository secret"
3. Agrega estos 3 secrets:

   **Secret 1:**
   - Name: `VPS_HOST`
   - Value: `91.99.171.11`

   **Secret 2:**
   - Name: `VPS_USER`
   - Value: `root`

   **Secret 3:**
   - Name: `VPS_PASSWORD`
   - Value: `3i4jE9UwnXR3`

4. Ahora cada vez que hagas `git push` a la rama `main`, se desplegará automáticamente en tu VPS

### 5. IMPORTANTE: Cambiar contraseña de root

```bash
passwd
```

Luego actualiza el secret `VPS_PASSWORD` en GitHub con la nueva contraseña.

---

## Comandos útiles

```bash
# Ver estado
pm2 status

# Ver logs en tiempo real
pm2 logs

# Reiniciar servicios
pm2 restart all

# Actualizar código manualmente
cd /opt/CitaConsulares
bash scripts/update.sh

# Ver uso de recursos
pm2 monit

# Detener servicios
pm2 stop all

# Iniciar servicios
pm2 start ecosystem.config.cjs
```

---

## Solución de problemas

### Si el bot no responde en Telegram

```bash
# Ver logs de error
pm2 logs bot --err --lines 50

# Reiniciar bot
pm2 restart bot

# Verificar .env
cat /opt/CitaConsulares/bot/.env
```

### Si hay errores de base de datos

```bash
# Verificar DATABASE_URL
cat /opt/CitaConsulares/bot/.env | grep DATABASE_URL

# Probar conexión
cd /opt/CitaConsulares/bot
node -e "console.log(process.env.DATABASE_URL)" 
```

### Si los servicios se reinician constantemente

```bash
# Ver errores
pm2 logs --err --lines 100

# Resetear PM2
pm2 delete all
pm2 start ecosystem.config.cjs
```

---

## ¿Necesitas ayuda?

Revisa los logs:
```bash
pm2 logs --lines 200
```

O ejecuta el diagnóstico:
```bash
cd /opt/CitaConsulares
bash scripts/diagnostico.sh
```

---

**¡Listo! Ahora ejecuta el script y en 5-10 minutos tendrás todo funcionando** 🚀

