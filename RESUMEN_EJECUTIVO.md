# 📋 Resumen Ejecutivo - CitaConsulares VPS

## ✅ Lo que he creado para ti

He preparado un sistema completo de instalación automática para tu VPS que incluye:

### 📦 Scripts Creados

1. **`deploy-master.sh`** - Script maestro que hace TODO automáticamente
2. **`GUIA_VPS_COMPLETA.md`** - Guía detallada paso a paso
3. **`TROUBLESHOOTING.md`** - Solución de problemas comunes
4. **`EJECUTAR_EN_VPS.md`** - Instrucciones de ejecución
5. **`INSTRUCCIONES_SIMPLES.txt`** - Versión simplificada

### 🎯 Lo que hace el script automáticamente

El script `deploy-master.sh` ejecuta **8 fases completas**:

#### Fase 1: Instalación del Sistema
- ✅ Actualiza Ubuntu
- ✅ Instala Node.js 20
- ✅ Instala pnpm y PM2
- ✅ Configura swap de 2GB
- ✅ Configura firewall (UFW)

#### Fase 2: Repositorio y Código
- ✅ Clona/actualiza el repositorio
- ✅ Instala todas las dependencias
- ✅ Instala Playwright Chromium
- ✅ Compila shared, bot y worker

#### Fase 3: Configuración de Credenciales
- ✅ Te pide las credenciales de forma segura
- ✅ Crea archivos `.env` para bot y worker
- ✅ Configura permisos seguros (600)

#### Fase 4: Corrección SSL Supabase
- ✅ Corrige el problema de SSL en `bot/src/db.ts`
- ✅ Corrige el problema de SSL en `worker/src/db.ts`
- ✅ Recompila con las correcciones

#### Fase 5: Configuración PM2
- ✅ Crea `ecosystem.config.cjs`
- ✅ Configura logrotate
- ✅ Configura PM2 startup (auto-inicio)

#### Fase 6: Iniciar Servicios
- ✅ Inicia bot, worker y healthcheck
- ✅ Guarda configuración PM2

#### Fase 7: Verificación
- ✅ Verifica healthcheck
- ✅ Verifica logs del bot
- ✅ Verifica logs del worker

#### Fase 8: GitHub Actions
- ✅ Crea workflow para deploy automático
- ✅ Te indica cómo configurar los secrets

---

## 🚀 Cómo ejecutarlo (3 comandos)

### Opción 1: Descarga directa desde GitHub

```bash
# 1. Conectarse a VPS
ssh root@91.99.171.11

# 2. Descargar script
wget https://raw.githubusercontent.com/devmaikelrm/CitaConsulares/main/deploy-master.sh

# 3. Ejecutar
chmod +x deploy-master.sh && bash deploy-master.sh
```

### Opción 2: Copiar y pegar

```bash
# 1. Conectarse a VPS
ssh root@91.99.171.11

# 2. Crear archivo
nano deploy-master.sh
# (Pegar contenido del archivo deploy-master.sh)
# Guardar: Ctrl+O, Enter, Ctrl+X

# 3. Ejecutar
chmod +x deploy-master.sh && bash deploy-master.sh
```

---

## 📝 Credenciales que necesitarás

El script te pedirá estas credenciales **de forma segura** (no se mostrarán en pantalla):

### 1. Telegram Bot Token
- Ve a [@BotFather](https://t.me/BotFather)
- Envía `/mybots` → Selecciona tu bot → API Token
- Formato: `123456789:ABCdefGHIjklMNOpqrsTUVwxyz`

### 2. Tu Chat ID de Telegram
- Ve a [@userinfobot](https://t.me/userinfobot)
- Envía cualquier mensaje
- Copia el número (ej: `123456789`)

### 3. DATABASE_URL de Supabase
- Ve a [supabase.com](https://supabase.com) → Tu proyecto
- Settings → Database → Connection String (URI mode)
- Formato: `postgresql://postgres:PASSWORD@db.xxxxx.supabase.co:5432/postgres`

### 4. WIDGET_URL (opcional)
- Puedes presionar Enter para omitir
- Lo configurarás después cuando tengas la URL del widget

---

## ⏱️ Tiempo estimado

- **Descarga e instalación**: 5-8 minutos
- **Configuración de credenciales**: 2 minutos
- **Verificación**: 1 minuto
- **Total**: ~10 minutos

---

## 🎯 Después de ejecutar el script

### 1. Verificar servicios

```bash
pm2 status
```

Deberías ver:
```
┌─────┬──────────────┬─────────┬─────────┐
│ id  │ name         │ status  │ restart │
├─────┼──────────────┼─────────┼─────────┤
│ 0   │ bot          │ online  │ 0       │
│ 1   │ worker       │ online  │ 0       │
│ 2   │ healthcheck  │ online  │ 0       │
└─────┴──────────────┴─────────┴─────────┘
```

### 2. Probar el bot en Telegram

1. Abre Telegram
2. Busca tu bot
3. Envía `/start`
4. Deberías recibir respuesta

### 3. Configurar base de datos

1. Ve a Supabase SQL Editor
2. Ejecuta el contenido de `scripts/db-init.sql`
3. Verifica que las tablas se crearon

### 4. Configurar GitHub Actions

1. Ve a: https://github.com/devmaikelrm/CitaConsulares/settings/secrets/actions
2. Agrega estos secrets:
   - `VPS_HOST`: `91.99.171.11`
   - `VPS_USER`: `root`
   - `VPS_PASSWORD`: `3i4jE9UwnXR3`

3. Ahora cada `git push` a `main` desplegará automáticamente

### 5. Cambiar contraseña de root (IMPORTANTE)

```bash
passwd
```

Luego actualiza el secret `VPS_PASSWORD` en GitHub.

---

## 📊 Estructura final en VPS

```
/opt/CitaConsulares/
├── bot/
│   ├── src/
│   ├── dist/           # Compilado
│   └── .env            # Credenciales (600)
├── worker/
│   ├── src/
│   ├── dist/           # Compilado
│   ├── screenshots/    # Capturas
│   └── .env            # Credenciales (600)
├── shared/
│   └── dist/           # Compilado
├── healthcheck/
│   └── server.js
├── ecosystem.config.cjs
└── .github/
    └── workflows/
        └── deploy.yml  # Deploy automático
```

---

## 🔧 Comandos útiles

```bash
# Ver estado
pm2 status

# Ver logs en tiempo real
pm2 logs

# Ver logs específicos
pm2 logs bot
pm2 logs worker

# Reiniciar servicios
pm2 restart all
pm2 restart bot

# Monitor interactivo
pm2 monit

# Actualizar código manualmente
cd /opt/CitaConsulares
bash scripts/update.sh

# Ver uso de recursos
free -h
df -h
```

---

## 🆘 Solución de problemas

### Bot no responde en Telegram

```bash
pm2 logs bot --err --lines 50
pm2 restart bot
```

### Error de base de datos

```bash
# Verificar DATABASE_URL
cat /opt/CitaConsulares/bot/.env | grep DATABASE_URL

# Ver logs
pm2 logs bot --lines 100
```

### Servicios se reinician constantemente

```bash
# Ver errores
pm2 logs --err --lines 100

# Resetear PM2
pm2 delete all
cd /opt/CitaConsulares
pm2 start ecosystem.config.cjs
```

### Más ayuda

Consulta `TROUBLESHOOTING.md` para soluciones detalladas.

---

## 📚 Documentación completa

- **`GUIA_VPS_COMPLETA.md`** - Guía paso a paso detallada
- **`TROUBLESHOOTING.md`** - Solución de problemas
- **`EJECUTAR_EN_VPS.md`** - Instrucciones de ejecución
- **`README.md`** - Documentación del proyecto
- **`DEPLOY.md`** - Guía de despliegue original

---

## ✅ Checklist de verificación

Después de ejecutar el script, verifica:

- [ ] `pm2 status` muestra 3 servicios online
- [ ] Bot responde en Telegram con `/start`
- [ ] `curl http://localhost:8080/health` responde `{"status":"ok"}`
- [ ] No hay errores en `pm2 logs`
- [ ] Tablas creadas en Supabase
- [ ] GitHub Actions configurado
- [ ] Contraseña de root cambiada

---

## 🎉 ¡Listo!

Una vez ejecutes el script y completes los pasos posteriores, tendrás:

✅ Bot funcionando 24/7 en tu VPS
✅ Worker automatizado
✅ Deploy automático con GitHub Actions
✅ Logs centralizados con PM2
✅ Auto-inicio en reboot
✅ Firewall configurado
✅ SSL corregido para Supabase

---

## 📞 Próximos pasos

1. **Ejecuta el script** siguiendo las instrucciones
2. **Verifica** que todo funcione
3. **Configura** GitHub Actions
4. **Prueba** el bot en Telegram
5. **Registra** un operador con `/operador`
6. **Agrega** clientes con `/cliente`

---

**¿Listo para empezar?** 🚀

Ejecuta:
```bash
ssh root@91.99.171.11
wget https://raw.githubusercontent.com/devmaikelrm/CitaConsulares/main/deploy-master.sh
chmod +x deploy-master.sh && bash deploy-master.sh
```

---

**Creado por:** Augment AI Assistant
**Fecha:** 2025-09-30
**Versión:** 1.0

