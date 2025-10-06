Guía de Watchers (DNI y TURISMO)

Resumen
- El bot puede vigilar hasta dos perfiles de Bookitit en paralelo:
  - Perfil 1: variables `DISPO_*` (ej. DNI)
  - Perfil 2: variables `DISPO2_*` (ej. TURISMO/Schengen)
- Cada watcher consulta el endpoint público de calendario (JSONP) y notifica nuevas fechas/horas detectadas. También reporta errores de backend o de parámetros.

Arranque y ciclo
- Arranque: `bot/src/index.ts` activa los watchers cuando `DISPO_ENABLED=1` y existen claves mínimas (`PUBLICKEY`, `SERVICE`, `AGENDA`). Si `DISPO2_*` está completo, inicia el segundo watcher.
- Frecuencia: configurable con `DISPO_INTERVAL_SEC` (+ jitter) o con `DISPO2_INTERVAL_SEC` para el 2º perfil (hereda si no se define).
- Horizonte de búsqueda: preferente por días (`DISPO_DAYS` / `DISPO2_DAYS`). Si no se define en días, usa meses (`DISPO_MONTHS`). La lógica está en `bot/src/disponibilidad.ts`.
- Modo nocturno: `DISPO_NIGHT_*` permite aumentar el intervalo durante la madrugada sin tocar la frecuencia diurna.
- Backoff ante errores: tras 2 fallos seguidos aplica espera adicional (`DISPO_BACKOFF_SEC`).

Variables del Perfil 1 (DNI)
- Requeridas si `DISPO_ENABLED=1`:
  - `DISPO_PUBLICKEY`
  - `DISPO_SERVICE`
  - `DISPO_AGENDA`
- Recomendadas/opcionales:
  - `DISPO_SRC` y `DISPO_SRVSRC` (referers coherentes, por defecto `https://citaconsular.es`)
  - `DISPO_DAYS` (p. ej. 90) o `DISPO_MONTHS` (si no usas días)
  - `DISPO_INTERVAL_SEC` y `DISPO_JITTER_PCT`
  - `DISPO_LABEL` (ej. `DNI`) para prefijar mensajes
  - `DISPO_VERBOSE=1` para enviar "No hay citas" en cada ciclo (útil en pruebas)

Variables del Perfil 2 (TURISMO)
- Segundo watcher opcional: define el trío mínimo para activarlo:
  - `DISPO2_PUBLICKEY`
  - `DISPO2_SERVICE`
  - `DISPO2_AGENDA`
- Herencia desde el Perfil 1 si no se define la variante `DISPO2_*`:
  - `DISPO2_SRC` (hereda `DISPO_SRC`)
  - `DISPO2_SRVSRC` (hereda `DISPO_SRVSRC`)
  - `DISPO2_DAYS` (hereda `DISPO_DAYS`)
  - `DISPO2_INTERVAL_SEC` (hereda `DISPO_INTERVAL_SEC`)
  - `DISPO2_JITTER_PCT` (hereda `DISPO_JITTER_PCT`)
- Etiqueta recomendada: `DISPO2_LABEL=TURISMO`.

Destinatarios
- El watcher envía notificaciones a:
  - `DISPO_RECIPIENTS` (lista de chat IDs separada por coma), y/o
  - `TELEGRAM_ADMIN_CHAT`, `TELEGRAM_ADMIN_CHAT_2`, `TELEGRAM_ADMIN_CHAT_LIST`.
- Si no hay destinatarios válidos, no arranca (mensaje de log: "No recipients configured").

Comandos útiles (Telegram)
- `/testnoti`: envía mensajes de prueba (OK y Error) para validar recepción.
- `/span on` | `/span off`: activa/desactiva verbosidad temporal. Si ON, en cada ciclo sin cambios se envía "No hay citas".

Formato de notificación
- Nuevas citas:
  - Cabecera con etiqueta del perfil (si `DISPO_LABEL`/`DISPO2_LABEL`), "Nuevas citas detectadas" y timestamp local.
  - Lista de días añadidos y, debajo, muestras de horas por día.
- Errores:
  - "no callback found" (parámetros/referer incorrectos)
  - "Backend Exception" (mensaje del backend de Bookitit)
  - Excepciones de red/parseo JSONP

Ejemplo de .env (mínimo para dos perfiles)
```
# Perfil 1 (DNI)
DISPO_ENABLED=1
DISPO_PUBLICKEY=xxxx
DISPO_SERVICE=bkt12345
DISPO_AGENDA=bkt67890
DISPO_SRC=https://www.citaconsular.es/es/hosteds/widgetdefault/xxxx/bkt12345
DISPO_SRVSRC=https://citaconsular.es
DISPO_DAYS=90
DISPO_INTERVAL_SEC=60
DISPO_JITTER_PCT=0.2
DISPO_LABEL=DNI

# Perfil 2 (TURISMO)
DISPO2_PUBLICKEY=yyyy
DISPO2_SERVICE=bkt54321
DISPO2_AGENDA=bkt09876
DISPO2_LABEL=TURISMO
```

Troubleshooting
- No llegan mensajes:
  - Verifica `TELEGRAM_BOT_TOKEN` y que hablaste con el bot (envía `/start`).
  - Asegura destinatarios (`DISPO_RECIPIENTS` o `TELEGRAM_ADMIN_CHAT(_LIST)`).
  - `DISPO_ENABLED=1` y claves mínimas definidas.
  - Logs: `pm2 logs bot --lines 200`.
- Respuestas de error del endpoint:
  - "no callback found": revisa `DISPO_SRC`/`DISPO_SRVSRC` y los IDs del widget.
  - Backend Exception: suele ser transitorio o por parámetros. Se notifica con el detalle devuelto.
- Sin cambios por largo tiempo:
  - Activa `/span on` o `DISPO_VERBOSE=1` para confirmar el ciclo de comprobación.

Arquitectura (referencias)
- Entrada watchers: `bot/src/index.ts` (sección DISPO_ENABLED); segundo watcher con `DISPO2_*`.
- Lógica y scheduler: `bot/src/disponibilidad.ts` (horizonte, jitter, nocturno, backoff, diff de slots y envío).

Detalles Técnicos del Endpoint (API)
- Endpoint Bookitit (JSONP): `https://www.citaconsular.es/onlinebookings/datetime/`
- Método: GET con parámetros (ejemplo representativo):
  - `callback=jQuery<rand>_<ts>`: requerido por JSONP (el backend envuelve la respuesta en esa función).
  - `type=default`
  - `publickey=<DISPO_PUBLICKEY>`
  - `lang=es` (o el fijado por `cfg.lang`)
  - `services[]=<DISPO_SERVICE>` (parámetro repetible)
  - `agendas[]=<DISPO_AGENDA>` (parámetro repetible)
  - `version=5` (o la de `cfg.version`)
  - `src=<DISPO_SRC>` (si se define)
  - `srvsrc=<DISPO_SRVSRC>` (si se define, por defecto `https://citaconsular.es`)
  - `start=<YYYY-MM-DD>` (inicio del rango)
  - `end=<YYYY-MM-DD>` (fin del rango)
  - `selectedPeople=1` (o lo fijado por `cfg.people`)
  - `_=<timestamp>` (antibuffer/anticashe)
- Cabeceras usadas por el watcher:
  - `User-Agent: Mozilla/5.0`
  - `Referer: <DISPO_SRC>` si está definido; si no, `https://www.citaconsular.es/`
- Respuesta esperada:
  - JSON envuelto en JSONP: `callback(<json>);`
  - Campos típicos: `Slots: [ { Date, Time, ... } ]` u otras variantes de mayúsculas/minúsculas; también puede venir un array de `Times` por día.
- Casuísticas de error detectadas y gestión:
  - Texto plano con `no callback found`: se notifica y sugiere revisar parámetros y Referer.
  - `Exception` en el JSON (backend): se extraen y reportan los mensajes agregados.
  - Errores de red/parseo: se notifica con backoff tras 2 fallos consecutivos (`DISPO_BACKOFF_SEC`).

Normalización de Slots y Detección de Cambios
- El watcher elimina el envoltorio JSONP y hace `JSON.parse`.
- Normaliza fechas y horas tolerando variaciones de claves (`Date/date/Day/day`, `Time/time/Hour/hour`) y formatos ISO (`YYYY-MM-DDTHH:mm`).
- Construye un `Snapshot` por día: `{ 'YYYY-MM-DD': ['HH:mm', ...] }`.
- Compara el snapshot actual contra el previo y genera dos agregados:
  - Días añadidos (`addedDays`)
  - Horas nuevas por día (`addedTimes[date]`)
- Si hay cambios, envía notificación con un resumen de días y una muestra de horas por día.
- Si no hay cambios y la verbosidad está ON (`/span on` o `DISPO_VERBOSE=1`), envía "No hay citas" con marca temporal.

Horizonte, Rango y Frecuencia
- Horizonte por días (preferente): `DISPO_DAYS`/`DISPO2_DAYS`.
  - Se calcula `[hoy, hoy + (days-1)]` y se divide en segmentos por mes para consultar el endpoint.
- Alternativa por meses: `DISPO_MONTHS`/`DISPO2_MONTHS` (mes actual + N-1 siguientes).
- Frecuencia y jitter:
  - Base: `DISPO_INTERVAL_SEC` (por defecto 60s).
  - Jitter: `DISPO_JITTER_PCT` (p. ej. 0.2 → ±20% alrededor del intervalo), para evitar sincronías.
- Modo nocturno:
  - Ventana local `DISPO_NIGHT_START`–`DISPO_NIGHT_END` (por defecto 00:00–06:00).
  - Intervalo en nocturno: aleatorio uniforme entre `DISPO_NIGHT_MIN_SEC` y `DISPO_NIGHT_MAX_SEC`.
- Backoff por errores: tras 2 fallos consecutivos, espera adicional (`DISPO_BACKOFF_SEC`, por defecto 300s). Al primer ciclo exitoso se resetea el contador.

Destinatarios y Permisos
- Los watchers envían notificaciones a `DISPO_RECIPIENTS` y/o a los ADMINs definidos.
- El filtrado de IDs autorizados afecta a comandos del bot, no a las notificaciones del watcher (que siguen la lista de destinatarios indicada arriba).

Reproducción Manual (debug)
- Ejemplo de consulta (sustituye llaves):
```
curl -sG 'https://www.citaconsular.es/onlinebookings/datetime/' \
  --data-urlencode "callback=jQuery${RANDOM}_$(date +%s%3N)" \
  --data-urlencode 'type=default' \
  --data-urlencode 'publickey={DISPO_PUBLICKEY}' \
  --data-urlencode 'lang=es' \
  --data-urlencode 'services[]={DISPO_SERVICE}' \
  --data-urlencode 'agendas[]={DISPO_AGENDA}' \
  --data-urlencode 'version=5' \
  --data-urlencode 'src={DISPO_SRC}' \
  --data-urlencode 'srvsrc={DISPO_SRVSRC}' \
  --data-urlencode 'start=2025-10-01' \
  --data-urlencode 'end=2025-10-31' \
  --data-urlencode 'selectedPeople=1' \
  --data-urlencode "_=$(date +%s%3N)" \
  -H 'User-Agent: Mozilla/5.0' \
  -H 'Referer: {DISPO_SRC}'
```
- La respuesta será JSONP. Para inspeccionarla rápido: elimina el prefijo/sufijo de `callback(...)` y parsea el JSON.

Notas Operativas y Hallazgos Comunes
- Token de Telegram inválido: el bot arroja `Polling error: ETELEGRAM: 401 Unauthorized`; sin token correcto no hay comandos ni notificaciones. Solución: actualizar `TELEGRAM_BOT_TOKEN` y reiniciar PM2.
- Sin build: `ERR_MODULE_NOT_FOUND` sobre `bot/dist/index.js` indica que falta `npm run build`; solución: instalar dependencias y compilar antes de arrancar.
- Sin destinatarios: si no hay `DISPO_RECIPIENTS` ni ADMINs, el watcher no arranca y lo advierte en logs.
- Referer/parámetros incoherentes: provoca `no callback found`; revisar `DISPO_SRC`/`DISPO_SRVSRC` y los IDs del widget.
- Validación en vivo: usa `/testnoti` y `
`/span on` para ver el latido de "No hay" en cada ciclo.

