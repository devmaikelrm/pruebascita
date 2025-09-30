# ✅ TODO LISTO PARA EJECUTAR

## 📦 Lo que he preparado

He creado un sistema completo de instalación automática para tu VPS. Todo está listo y subido a GitHub.

---

## 🎯 OPCIÓN 1: Comando Único (MÁS RÁPIDO)

### Paso 1: Conectarse a tu VPS

Abre tu terminal y ejecuta:

```bash
ssh root@91.99.171.11
```

Contraseña: `3i4jE9UwnXR3`

### Paso 2: Ejecutar este comando

Copia y pega esto (todo en una línea):

```bash
wget -O deploy-master.sh https://raw.githubusercontent.com/devmaikelrm/CitaConsulares/main/deploy-master.sh && chmod +x deploy-master.sh && bash deploy-master.sh
```

### Paso 3: Proporcionar credenciales

El script te pedirá:

1. **Token del bot de Telegram**
   - Ve a [@BotFather](https://t.me/BotFather)
   - `/mybots` → Tu bot → API Token

2. **Tu Chat ID**
   - Ve a [@userinfobot](https://t.me/userinfobot)
   - Envía cualquier mensaje

3. **DATABASE_URL de Supabase**
   - [supabase.com](https://supabase.com) → Tu proyecto
   - Settings → Database → Connection String (URI)

4. **WIDGET_URL** (opcional)
   - Presiona Enter para omitir

### Paso 4: Esperar 5-10 minutos

El script hará TODO automáticamente.

---

## 🎯 OPCIÓN 2: Paso a Paso

Si prefieres ver cada paso, sigue las instrucciones en:

📖 **[INSTRUCCIONES_SIMPLES.txt](INSTRUCCIONES_SIMPLES.txt)**

---

## 📚 Documentación Completa

He creado estos archivos para ti:

| Archivo | Descripción |
|---------|-------------|
| **[RESUMEN_EJECUTIVO.md](RESUMEN_EJECUTIVO.md)** | Resumen completo de todo |
| **[INSTRUCCIONES_SIMPLES.txt](INSTRUCCIONES_SIMPLES.txt)** | Instrucciones paso a paso |
| **[GUIA_VPS_COMPLETA.md](GUIA_VPS_COMPLETA.md)** | Guía detallada con explicaciones |
| **[TROUBLESHOOTING.md](TROUBLESHOOTING.md)** | Solución de problemas |
| **[COMANDO_UNICO.txt](COMANDO_UNICO.txt)** | Comando único para copiar |
| **[deploy-master.sh](deploy-master.sh)** | Script maestro de instalación |

---

## ✨ Lo que hace el script automáticamente

### ✅ Fase 1: Sistema (2 min)
- Actualiza Ubuntu
- Instala Node.js 20
- Instala pnpm y PM2
- Configura swap de 2GB
- Configura firewall

### ✅ Fase 2: Código (3 min)
- Clona el repositorio
- Instala dependencias
- Instala Playwright Chromium
- Compila todo (shared, bot, worker)

### ✅ Fase 3: Credenciales (1 min)
- Te pide las credenciales de forma segura
- Crea archivos .env
- Configura permisos seguros

### ✅ Fase 4: SSL (1 min)
- Corrige problema de SSL con Supabase
- Recompila con correcciones

### ✅ Fase 5: PM2 (1 min)
- Configura ecosystem.config.cjs
- Configura logrotate
- Configura auto-inicio

### ✅ Fase 6: Servicios (1 min)
- Inicia bot, worker, healthcheck
- Guarda configuración

### ✅ Fase 7: Verificación (1 min)
- Verifica que todo funcione
- Muestra estado de servicios

### ✅ Fase 8: GitHub Actions (1 min)
- Configura deploy automático
- Te indica cómo configurar secrets

---

## 🎉 Después de ejecutar

### 1. Verificar que funciona

```bash
pm2 status
```

Deberías ver:
```
┌─────┬──────────────┬─────────┐
│ id  │ name         │ status  │
├─────┼──────────────┼─────────┤
│ 0   │ bot          │ online  │
│ 1   │ worker       │ online  │
│ 2   │ healthcheck  │ online  │
└─────┴──────────────┴─────────┘
```

### 2. Probar el bot

1. Abre Telegram
2. Busca tu bot
3. Envía `/start`
4. ✅ Deberías recibir respuesta

### 3. Configurar base de datos

1. Ve a Supabase SQL Editor
2. Ejecuta `scripts/db-init.sql`

### 4. Configurar GitHub Actions

1. Ve a: https://github.com/devmaikelrm/CitaConsulares/settings/secrets/actions
2. Agrega estos secrets:
   - `VPS_HOST`: `91.99.171.11`
   - `VPS_USER`: `root`
   - `VPS_PASSWORD`: `3i4jE9UwnXR3`

3. Ahora cada `git push` desplegará automáticamente

### 5. Cambiar contraseña (IMPORTANTE)

```bash
passwd
```

Luego actualiza el secret `VPS_PASSWORD` en GitHub.

---

## 🔧 Comandos útiles

```bash
# Ver estado
pm2 status

# Ver logs
pm2 logs bot
pm2 logs worker

# Reiniciar
pm2 restart all

# Monitor
pm2 monit

# Actualizar código
cd /opt/CitaConsulares
bash scripts/update.sh
```

---

## 🆘 ¿Problemas?

### Bot no responde

```bash
pm2 logs bot --err --lines 50
pm2 restart bot
```

### Error de base de datos

```bash
pm2 logs bot --lines 100
```

### Más ayuda

Consulta **[TROUBLESHOOTING.md](TROUBLESHOOTING.md)**

---

## 📊 Resumen

| Componente | Estado | Ubicación |
|------------|--------|-----------|
| Script maestro | ✅ Listo | `deploy-master.sh` |
| Documentación | ✅ Completa | Varios archivos .md |
| GitHub Actions | ✅ Configurado | `.github/workflows/deploy.yml` |
| Corrección SSL | ✅ Incluida | En el script |
| Auto-inicio | ✅ Configurado | PM2 startup |

---

## 🚀 ¡EJECUTA AHORA!

```bash
# 1. Conectarse
ssh root@91.99.171.11

# 2. Ejecutar
wget -O deploy-master.sh https://raw.githubusercontent.com/devmaikelrm/CitaConsulares/main/deploy-master.sh && chmod +x deploy-master.sh && bash deploy-master.sh
```

---

## ✅ Checklist

Después de ejecutar, verifica:

- [ ] `pm2 status` muestra 3 servicios online
- [ ] Bot responde en Telegram
- [ ] `curl http://localhost:8080/health` funciona
- [ ] No hay errores en logs
- [ ] Tablas creadas en Supabase
- [ ] GitHub Actions configurado
- [ ] Contraseña cambiada

---

## 🎯 Tiempo total estimado

- **Ejecución del script**: 5-10 minutos
- **Configuración post-instalación**: 5 minutos
- **Total**: ~15 minutos

---

## 📞 Soporte

Si tienes problemas:

1. Revisa **[TROUBLESHOOTING.md](TROUBLESHOOTING.md)**
2. Ejecuta `pm2 logs --err --lines 100`
3. Verifica que las credenciales sean correctas

---

**¡Todo está listo! Solo ejecuta el comando y en 10 minutos tendrás tu bot funcionando** 🚀

---

**Creado por:** Augment AI Assistant  
**Fecha:** 2025-09-30  
**Versión:** 1.0  
**Repositorio:** https://github.com/devmaikelrm/CitaConsulares

