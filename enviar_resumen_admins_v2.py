#!/usr/bin/env python3
"""
Enviar resumen del deployment a todos los administradores
"""
import subprocess
import sys
import json

def install_requests():
    try:
        import requests
    except ImportError:
        subprocess.check_call([sys.executable, "-m", "pip", "install", "requests", "-q"])

def main():
    print("\n" + "="*60)
    print("  Enviando Resumen a Administradores")
    print("="*60 + "\n")
    
    install_requests()
    import requests
    
    BOT_TOKEN = '7271022887:AAFLlCyJyXfGchaEsJ2-U4VRpSYKXwYrmkc'
    ADMIN_IDS = ['6213988452', '7652036984', '778282548']
    
    message = """🎉 *DEPLOYMENT COMPLETADO* 🎉

✅ *Sistema CitaConsulares Operativo*

━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 *INFRAESTRUCTURA*
━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ PostgreSQL 16.10 (local en VPS)
✅ Node.js 20.19.5
✅ PM2 con auto-inicio
✅ Playwright + Chromium
✅ SSH Key configurada

━━━━━━━━━━━━━━━━━━━━━━━━━━
💾 *BASE DE DATOS*
━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 *8 Tablas creadas:*
• operators - Operadores del sistema
• clients - Clientes
• preferences - Preferencias de citas
• queue - Cola de solicitudes
• appointments - Citas confirmadas
• captcha_requests - Resolución CAPTCHA
• cooldowns - Rate limiting
• users - Usuarios

🔧 *Características:*
• UUIDs automáticos
• Timestamps automáticos
• Foreign keys configuradas
• Schema 100% sincronizado

━━━━━━━━━━━━━━━━━━━━━━━━━━
🤖 *SERVICIOS ACTIVOS*
━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ *Bot Telegram:* ONLINE
✅ *Worker:* ONLINE (cada 6-10 min)

━━━━━━━━━━━━━━━━━━━━━━━━━━
📝 *COMANDOS DISPONIBLES*
━━━━━━━━━━━━━━━━━━━━━━━━━━

/start - Iniciar bot
/help - Ayuda
/operador - Registrarse como operador
/cliente - Gestionar clientes
/status - Estado del sistema
/preferencia - Configurar preferencias

━━━━━━━━━━━━━━━━━━━━━━━━━━
🔧 *PROBLEMAS RESUELTOS*
━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ Conexión PostgreSQL (era Supabase)
✅ Schema completo sincronizado
✅ UUIDs generándose correctamente
✅ Compilación TypeScript
✅ Variables de entorno
✅ Columnas faltantes agregadas

━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 *PRÓXIMOS PASOS*
━━━━━━━━━━━━━━━━━━━━━━━━━━

1️⃣ Envía /operador para registrarte
2️⃣ Usa /cliente para gestionar clientes
3️⃣ Usa /status para ver el estado
4️⃣ El worker busca citas automáticamente

━━━━━━━━━━━━━━━━━━━━━━━━━━

🚀 *¡El sistema está 100% funcional!*

Servidor: 91.99.171.11
Fecha: 2025-10-01
Versión: 1.0.0"""
    
    url = f'https://api.telegram.org/bot{BOT_TOKEN}/sendMessage'
    
    print("📤 Enviando resumen a todos los administradores...\n")
    
    for chat_id in ADMIN_IDS:
        try:
            data = {
                'chat_id': chat_id,
                'text': message,
                'parse_mode': 'Markdown'
            }
            
            response = requests.post(url, json=data, timeout=10)
            
            if response.status_code == 200:
                print(f"✅ Mensaje enviado a {chat_id}")
            else:
                print(f"❌ Error enviando a {chat_id}: {response.status_code}")
                print(f"   Respuesta: {response.text}")
        
        except Exception as e:
            print(f"❌ Error enviando a {chat_id}: {e}")
        
        # Esperar 1 segundo entre mensajes
        import time
        time.sleep(1)
    
    print("\n" + "="*60)
    print("  ✓ PROCESO COMPLETADO")
    print("="*60)
    print("\n📱 Revisa Telegram para ver el mensaje")
    print("")

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n\nCancelado")

