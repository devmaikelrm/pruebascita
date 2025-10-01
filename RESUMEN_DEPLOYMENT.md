# 📋 RESUMEN COMPLETO DEL DEPLOYMENT

## 🎯 Estado Final: ✅ COMPLETADO

**Fecha:** 2025-10-01  
**Servidor:** Hetzner Cloud VPS (91.99.171.11)  
**Sistema:** Ubuntu 24.04  

---

## 🚀 Lo que se Logró

### ✅ 1. Infraestructura Base
- **PostgreSQL 16.10** instalado localmente en el VPS
- **Node.js 20.19.5** instalado
- **pnpm** configurado como package manager
- **PM2** instalado y configurado con auto-inicio en boot
- **Playwright** con Chromium instalado para web scraping
- **SSH Key** configurada para acceso sin contraseña

### ✅ 2. Base de Datos PostgreSQL
**Base de datos:** `citaconsular`  
**Usuario:** `citaconsular`  
**Password:** `CitaConsular2024!`  
**URL:** `postgresql://citaconsular:CitaConsular2024!@localhost:5432/citaconsular`

**8 Tablas creadas con Drizzle-kit:**
1. **operators** - Operadores del sistema (Telegram)
2. **clients** - Clientes que necesitan citas
3. **preferences** - Preferencias de citas de cada cliente
4. **queue** - Cola de solicitudes de citas
5. **appointments** - Citas confirmadas
6. **captcha_requests** - Solicitudes de resolución de CAPTCHA
7. **cooldowns** - Control de rate limiting
8. **users** - Usuarios del sistema

**Características:**
- ✅ UUIDs generados automáticamente con `gen_random_uuid()`
- ✅ Timestamps automáticos con `now()`
- ✅ Foreign keys configuradas correctamente
- ✅ Índices optimizados
- ✅ Schema sincronizado con el código TypeScript

### ✅ 3. Servicios Corriendo con PM2

#### **Bot de Telegram**
- **Nombre:** `bot`
- **Estado:** `online`
- **Ubicación:** `/opt/CitaConsulares/bot`
- **Logs:** `/var/log/pm2/bot.out.log` y `/var/log/pm2/bot.error.log`
- **Auto-restart:** Configurado
- **Comandos disponibles:**
  - `/start` - Iniciar bot
  - `/help` - Ayuda
  - `/operador` - Registrarse como operador
  - `/cliente` - Gestionar clientes
  - `/status` - Ver estado del sistema
  - `/preferencia` - Configurar preferencias

#### **Worker de Automatización**
- **Nombre:** `worker`
- **Estado:** `online`
- **Ubicación:** `/opt/CitaConsulares/worker`
- **Logs:** `/var/log/pm2/worker.out.log` y `/var/log/pm2/worker.error.log`
- **Intervalo:** Cada 6-10 minutos (aleatorio)
- **Función:** Buscar citas disponibles automáticamente usando Playwright

### ✅ 4. Variables de Entorno Configuradas

Todas las variables están embebidas en `ecosystem.config.cjs`:

```javascript
TELEGRAM_BOT_TOKEN=7271022887:AAFLlCyJyXfGchaEsJ2-U4VRpSYKXwYrmkc
TELEGRAM_ADMIN_CHAT=6213988452
TELEGRAM_ADMIN_CHAT_LIST=6213988452,7652036984,778282548
DATABASE_URL=postgresql://citaconsular:CitaConsular2024!@localhost:5432/citaconsular
TZ=America/Havana
CHECK_INTERVAL_MIN=6
CHECK_INTERVAL_MAX=10
COOLDOWN_BLOCK_HOURS=3
```

---

## 🔧 Problemas Resueltos

### 1. **Conexión a Base de Datos**
**Problema:** El código usaba `@neondatabase/serverless` (cliente HTTP para Supabase/Neon)  
**Solución:** Cambiado a `pg` (cliente nativo PostgreSQL) en:
- `bot/src/db.ts`
- `worker/src/db.ts`
- Recompilado ambos servicios

### 2. **Schema de Base de Datos Incompleto**
**Problema:** Tablas creadas manualmente no coincidían con el schema TypeScript  
**Solución:** 
- Eliminadas todas las tablas
- Usado `drizzle-kit push` para crear schema completo desde `shared/src/schema.ts`
- Todas las columnas ahora coinciden exactamente con el código

### 3. **Generación de UUIDs**
**Problema:** Columna `id` era NULL al insertar  
**Solución:** 
- Habilitada extensión `uuid-ossp`
- Configurado `DEFAULT gen_random_uuid()` en todas las tablas

### 4. **Compilación TypeScript**
**Problema:** Errores de compilación por imports incorrectos  
**Solución:**
- Corregidos imports de `drizzle-orm/neon-http` a `drizzle-orm/node-postgres`
- Recompilado con `pnpm tsc` en cada paquete

### 5. **PM2 Environment Variables**
**Problema:** Variables de entorno no se aplicaban correctamente  
**Solución:** Embebidas directamente en `ecosystem.config.cjs` en lugar de usar archivos `.env`

---

## 📁 Estructura del Proyecto en el VPS

```
/opt/CitaConsulares/
├── bot/
│   ├── src/
│   │   ├── index.ts
│   │   ├── db.ts          ← Corregido para usar PostgreSQL
│   │   └── commands.ts
│   ├── dist/              ← Compilado
│   └── package.json
├── worker/
│   ├── src/
│   │   ├── index.ts
│   │   ├── db.ts          ← Corregido para usar PostgreSQL
│   │   └── scraper.ts
│   ├── dist/              ← Compilado
│   └── package.json
├── shared/
│   ├── src/
│   │   ├── schema.ts      ← Schema de Drizzle ORM
│   │   └── storage.ts
│   ├── dist/              ← Compilado
│   ├── drizzle.config.ts  ← Configuración de Drizzle
│   └── package.json
├── ecosystem.config.cjs   ← Configuración PM2
├── package.json           ← Root workspace
└── pnpm-workspace.yaml
```

---

## 🔐 Credenciales y Acceso

### SSH
```bash
ssh -i hetzner_vps_key root@91.99.171.11
```

### PostgreSQL
```bash
# Desde el VPS
PGPASSWORD='CitaConsular2024!' psql -U citaconsular -d citaconsular -h localhost

# Connection string
postgresql://citaconsular:CitaConsular2024!@localhost:5432/citaconsular
```

### Telegram Bot
- **Token:** `7271022887:AAFLlCyJyXfGchaEsJ2-U4VRpSYKXwYrmkc`
- **Admin IDs:** `6213988452`, `7652036984`, `778282548`

---

## 📝 Comandos Útiles

### PM2
```bash
# Ver estado
pm2 status

# Ver logs en tiempo real
pm2 logs bot
pm2 logs worker
pm2 logs all

# Reiniciar servicios
pm2 restart bot
pm2 restart worker
pm2 restart all

# Detener servicios
pm2 stop all

# Ver información detallada
pm2 info bot
pm2 info worker

# Guardar configuración
pm2 save

# Ver logs históricos
pm2 logs bot --lines 100
```

### PostgreSQL
```bash
# Conectar a la base de datos
PGPASSWORD='CitaConsular2024!' psql -U citaconsular -d citaconsular -h localhost

# Ver tablas
\dt

# Ver estructura de una tabla
\d operators
\d clients
\d queue

# Ver datos
SELECT * FROM operators;
SELECT * FROM clients;
SELECT * FROM queue;

# Salir
\q
```

### Recompilar Código
```bash
cd /opt/CitaConsulares

# Recompilar todo
pnpm build

# Recompilar solo bot
cd bot && pnpm tsc

# Recompilar solo worker
cd worker && pnpm tsc

# Recompilar solo shared
cd shared && pnpm tsc

# Reiniciar después de recompilar
pm2 restart all
```

---

## 🎯 Próximos Pasos

### 1. Registrar Operador
Envía `/operador` en Telegram para registrarte como operador del sistema.

### 2. Agregar Clientes
Usa `/cliente` para agregar clientes que necesitan citas.

### 3. Configurar Preferencias
Usa `/preferencia` para configurar las preferencias de citas de cada cliente.

### 4. Monitorear Sistema
Usa `/status` para ver el estado del sistema y la cola de solicitudes.

### 5. Verificar Worker
El worker se ejecuta automáticamente cada 6-10 minutos. Verifica los logs:
```bash
pm2 logs worker
```

---

## ⚠️ Notas Importantes

1. **Auto-inicio:** PM2 está configurado para iniciar automáticamente al reiniciar el servidor
2. **Logs:** Los logs se guardan en `/var/log/pm2/` y rotan automáticamente
3. **Base de datos local:** PostgreSQL corre localmente, no hay dependencia de servicios externos
4. **Timezone:** Configurado a `America/Havana`
5. **Rate limiting:** Cooldown de 3 horas configurado para evitar bloqueos

---

## 🐛 Troubleshooting

### Si el bot no responde:
```bash
pm2 logs bot --err --lines 50
pm2 restart bot
```

### Si el worker no ejecuta:
```bash
pm2 logs worker --err --lines 50
pm2 restart worker
```

### Si hay errores de base de datos:
```bash
# Verificar que PostgreSQL esté corriendo
systemctl status postgresql

# Verificar conexión
PGPASSWORD='CitaConsular2024!' psql -U citaconsular -d citaconsular -h localhost -c "SELECT 1;"
```

### Si necesitas recrear el schema:
```bash
cd /opt/CitaConsulares/shared
DATABASE_URL='postgresql://citaconsular:CitaConsular2024!@localhost:5432/citaconsular' pnpm drizzle-kit push
```

---

## ✅ Checklist de Verificación

- [x] PostgreSQL instalado y corriendo
- [x] Base de datos `citaconsular` creada
- [x] 8 tablas creadas con schema correcto
- [x] Bot compilado y corriendo
- [x] Worker compilado y corriendo
- [x] PM2 configurado con auto-inicio
- [x] Variables de entorno configuradas
- [x] SSH key configurada
- [x] Logs funcionando correctamente
- [x] Bot responde a comandos básicos (/start, /help)
- [x] Conexión a PostgreSQL funcionando
- [x] UUIDs generándose automáticamente
- [x] Schema sincronizado con código TypeScript

---

## 🎉 Resultado Final

**¡SISTEMA COMPLETAMENTE FUNCIONAL!**

- ✅ Bot de Telegram operativo
- ✅ Worker de automatización corriendo
- ✅ Base de datos PostgreSQL local configurada
- ✅ PM2 gestionando procesos con auto-restart
- ✅ Logs centralizados
- ✅ Auto-inicio en boot del servidor
- ✅ Schema de base de datos completo y correcto

**El sistema está listo para:**
1. Registrar operadores
2. Gestionar clientes
3. Automatizar búsqueda de citas
4. Notificar por Telegram
5. Resolver CAPTCHAs (cuando se implemente)

---

**Documentado por:** Augment Agent  
**Fecha:** 2025-10-01  
**Versión:** 1.0.0

