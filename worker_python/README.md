# Worker Python - Undetected ChromeDriver

Este worker está diseñado para evadir sistemas anti-bot sofisticados usando `undetected-chromedriver`, una biblioteca de Python que hace que Selenium sea prácticamente indetectable.

## Características

✅ **Evasión anti-bot**: Usa undetected-chromedriver para bypassear Cloudflare, Imperva, DataDome, etc.
✅ **Comportamiento humano**: Movimientos de ratón aleatorios, delays variables, tipeo carácter por carácter
✅ **Integración con BD**: Conecta directamente con PostgreSQL usando psycopg2
✅ **Sistema de cooldowns**: Evita bloqueos gestionando intentos fallidos
✅ **Discovery mode**: Permite pruebas manuales antes de automatización completa

## Requisitos

- Python 3.11+
- Chrome/Chromium instalado
- Variables de entorno configuradas

## Variables de Entorno

```bash
DATABASE_URL=postgresql://user:pass@host:port/dbname
CHECK_MIN_MINUTES=6
CHECK_MAX_MINUTES=10
COOLDOWN_HOURS=2
DISCOVERY_MODE=true
```

## Instalación

Las dependencias ya están instaladas en el proyecto:
- undetected-chromedriver
- psycopg2-binary
- python-dotenv
- pyautogui

## Uso

```bash
python worker_python/undetected_worker.py
```

## Arquitectura

1. **db.py**: Gestión de conexiones y operaciones con PostgreSQL
2. **booking_adapter.py**: Lógica de navegación y reserva con Chrome
3. **undetected_worker.py**: Orquestador principal del worker

## Flujo de Navegación

Basado en el análisis exhaustivo (INFORME-EXHAUSTIVO-CITAS-CONSULARES.md):

1. Navega a página del gobierno español
2. Selecciona país, categoría, delegación y servicio
3. Abre popup del widget de citas
4. Maneja modales de bienvenida
5. Busca y selecciona slots disponibles
6. Realiza login (si no está en modo discovery)
7. Confirma la cita

## Diferencias con el Worker Node.js

| Característica | Node.js (Playwright) | Python (Undetected) |
|----------------|---------------------|---------------------|
| Detección anti-bot | ❌ Detectado | ✅ Evade detección |
| Headless mode | ✅ Funcional | ⚠️ Mejor con GUI |
| Velocidad | Más rápido | Más lento pero efectivo |
| Recursos | Medio | Alto |
| Mantenimiento | Más complejo | Más simple |

## Modo Discovery

Con `DISCOVERY_MODE=true`, el worker:
1. Encuentra slots disponibles
2. Toma screenshots
3. NO completa el login automáticamente
4. Permite seguimiento manual

Esto es útil para validar que el sistema funciona antes de automatizar completamente.

## Modo Headless vs GUI

⚠️ **IMPORTANTE**: Para máxima evasión anti-bot, el worker debe ejecutarse en modo GUI (no headless).

- ✅ **Modo GUI (recomendado)**: Mejor evasión, comportamiento natural
- ⚠️ **Modo headless**: Puede ser detectado, solo para pruebas limitadas

El sistema está configurado por defecto para modo GUI, que es lo óptimo según el análisis del INFORME-EXHAUSTIVO.

## Notas de Seguridad

- Las credenciales se obtienen de la base de datos
- Los screenshots se guardan en `screenshots/`
- Se implementan delays aleatorios para parecer humano
- Los movimientos de ratón son aleatorios y naturales
- Chrome se ejecuta en modo visible para evitar detección
