#!/usr/bin/env python3
"""
Enviar mensaje de pruebas a todos los administradores
"""
import subprocess
import sys

def install_requests():
    try:
        import requests
    except ImportError:
        subprocess.check_call([sys.executable, "-m", "pip", "install", "requests", "-q"])

def main():
    print("\n" + "="*60)
    print("  Enviando Mensaje de Pruebas")
    print("="*60 + "\n")
    
    install_requests()
    import requests
    
    BOT_TOKEN = '7271022887:AAFLlCyJyXfGchaEsJ2-U4VRpSYKXwYrmkc'
    ADMIN_IDS = ['6213988452', '7652036984', '778282548']
    
    message = """⚠️ BOT EN PRUEBAS ⚠️

🔧 Por favor, NO USAR el bot por ahora.

El bot está en fase de pruebas para no romper las pruebas en curso.

❌ NO lo usen aún, estoy haciendo tests.

Gracias por su comprensión.

━━━━━━━━━━━━━━━━━━━━━━━━━━

Les avisaré cuando esté listo para usar.

🙏 Gracias"""
    
    url = f'https://api.telegram.org/bot{BOT_TOKEN}/sendMessage'
    
    print("📤 Enviando mensaje a todos los administradores...\n")
    
    for chat_id in ADMIN_IDS:
        try:
            data = {
                'chat_id': chat_id,
                'text': message
            }
            
            response = requests.post(url, json=data, timeout=10)
            
            if response.status_code == 200:
                print(f"✅ Mensaje enviado a {chat_id}")
            else:
                print(f"❌ Error enviando a {chat_id}: {response.status_code}")
                if response.status_code != 400:  # No mostrar detalles de "chat not found"
                    print(f"   Respuesta: {response.text}")
        
        except Exception as e:
            print(f"❌ Error enviando a {chat_id}: {e}")
        
        # Esperar 1 segundo entre mensajes
        import time
        time.sleep(1)
    
    print("\n" + "="*60)
    print("  ✓ MENSAJES ENVIADOS")
    print("="*60)
    print("\n📱 Mensaje enviado a todos los admins")
    print("   Ahora puedes hacer pruebas tranquilo")
    print("")

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n\nCancelado")

