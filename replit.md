# Spanish Consular Appointment Bot System

## Project Overview
A Node.js TypeScript monorepo for automating Spanish consular appointments in Havana, specifically for "Certificación de Nacimiento para DNI". The system consists of:

- **Management Dashboard** - React frontend for managing operators, clients, and monitoring automation
- **Telegram Bot** - For operator notifications and captcha resolution
- **Playwright Worker** - Automated browser for appointment booking
- **PostgreSQL Database** - Stores clients, operators, appointments, and queue data

## Current Status
✅ **Completed:**
- Management dashboard with full UI components
- Database schema designed for all entities
- Status monitoring and activity logging
- Client management forms and queue visualization
- Captcha handling interface
- Professional dark theme with sidebar navigation

## Architecture Decisions
- Using Material Design principles for operator productivity
- Dark mode as default theme for console monitoring
- PostgreSQL database with Drizzle ORM
- Telegram integration for real-time notifications
- Human-in-the-loop captcha solving with optional 2Captcha fallback

## Storage Requirements
**Note:** User dismissed Dropbox integration. Need to implement alternative file storage for:
- Captcha screenshots during human verification
- Before/after booking confirmation screenshots
- System logs and error captures

## Required API Keys/Secrets
- `TELEGRAM_BOT_TOKEN` - For bot notifications and captcha HIL
- `TWOCAPTCHA_API_KEY` - Optional automated captcha solving
- File storage credentials (to be determined)

## User Preferences
- Focus on the real use case of Spanish consular appointments
- Anti-blocking measures are critical (cooldowns, delays)
- Human intervention preferred over automated captcha solving
- Professional interface for operators managing multiple clients

## Next Steps
1. Implement Telegram bot for operator commands (/operador, /cliente, /preferencia, /status, /captcha)
2. Build Playwright worker with citaconsular.es automation
3. Add anti-blocking system with IP/account cooldowns
4. Set up file storage for screenshots
5. Implement scheduling with human-like delays (6-10 min with jitter)

## File Structure
```
/bot - Telegram bot service
/worker - Playwright automation worker  
/sql - Database schema and seeds
/client - React management dashboard
/server - Express API backend
/shared - Shared TypeScript types and schemas
```