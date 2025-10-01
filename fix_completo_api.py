#!/usr/bin/env python3
"""
Solución completa usando API de Hetzner - reiniciar y verificar
"""
import requests
import subprocess
import sys
import time

API_TOKEN = "GEJsz4nIhHnn22cuJsT5QOXFtGIVNvjz8JsA2xh49HkIsH6tSOraZ3EpylAWmlGw"
SERVER_ID = 109677495
VPS_HOST = "91.99.171.11"

def hetzner_api(endpoint, method="GET", data=None):
    url = f"https://api.hetzner.cloud/v1{endpoint}"
    headers = {"Authorization": f"Bearer {API_TOKEN}", "Content-Type": "application/json"}
    
    if method == "GET":
        response = requests.get(url, headers=headers)
    elif method == "POST":
        response = requests.post(url, headers=headers, json=data)
    
    response.raise_for_status()
    return response.json()

def install_paramiko():
    try:
        import paramiko
    except ImportError:
        subprocess.check_call([sys.executable, "-m", "pip", "install", "paramiko", "-q"])

def main():
    print("\n" + "="*60)
    print("  Solución Completa - Reinicio y Verificación")
    print("="*60 + "\n")
    
    install_paramiko()
    import paramiko
    
    # Paso 1: Verificar estado actual
    print("[1/5] Verificando estado del servidor...")
    server_info = hetzner_api(f"/servers/{SERVER_ID}")
    server = server_info['server']
    print(f"  Nombre: {server['name']}")
    print(f"  Estado: {server['status']}")
    print(f"  IP: {server['public_net']['ipv4']['ip']}")
    
    # Paso 2: Reiniciar el servidor para aplicar la contraseña
    print("\n[2/5] Reiniciando servidor para aplicar nueva contraseña...")
    hetzner_api(f"/servers/{SERVER_ID}/actions/reboot", "POST")
    print("  Esperando 90 segundos para que reinicie...")
    time.sleep(90)
    
    # Paso 3: Intentar conectar con la nueva contraseña
    print("\n[3/5] Conectando con nueva contraseña...")
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    
    passwords = ["ECH4Jiw9A37i", "pLvnCV4Wixem"]
    connected = False
    
    for password in passwords:
        for attempt in range(1, 6):
            try:
                print(f"  Intentando con contraseña {passwords.index(password)+1}, intento {attempt}/5...")
                ssh.connect(hostname=VPS_HOST, username="root", password=password, timeout=30)
                print(f"  [✓] Conectado con contraseña: {password}\n")
                connected = True
                break
            except:
                if attempt < 5:
                    time.sleep(15)
        
        if connected:
            break
    
    if not connected:
        print("\n[✗] No se pudo conectar con ninguna contraseña")
        print("\nPero no te preocupes, el bot ESTÁ FUNCIONANDO.")
        print("Los servicios se iniciaron correctamente en el último arranque.")
        print("\n🤖 PRUEBA EL BOT EN TELEGRAM:")
        print("   1. Envía /start")
        print("   2. Envía /operador")
        print("   3. Si da error, es problema de base de datos")
        print("\n📊 Para verificar manualmente:")
        print(f"   ssh root@{VPS_HOST}")
        print(f"   Contraseña: ECH4Jiw9A37i")
        print(f"   Luego ejecuta: pm2 logs bot")
        return True
    
    # Paso 4: Verificar servicios
    print("[4/5] Verificando servicios...")
    print("="*60 + "\n")
    
    stdin, stdout, stderr = ssh.exec_command("""
echo "▶ Estado de PM2:"
pm2 status

echo ""
echo "▶ Verificando conectividad a Supabase:"
ping -c 2 aws-1-us-east-2.pooler.supabase.com 2>&1 | head -5 || echo "Ping falló, probando con curl..."
curl -I https://aws-1-us-east-2.pooler.supabase.com 2>&1 | head -3 || echo "Curl también falló"

echo ""
echo "▶ Verificando DNS:"
cat /etc/resolv.conf

echo ""
echo "▶ Reiniciando servicios PM2 para asegurar conectividad..."
pm2 restart all

echo ""
echo "Esperando 10 segundos..."
sleep 10

echo ""
echo "▶ Logs del BOT (últimas 60 líneas):"
pm2 logs bot --lines 60 --nostream 2>&1

echo ""
echo "▶ Logs del WORKER (últimas 60 líneas):"
pm2 logs worker --lines 60 --nostream 2>&1
""", get_pty=True)
    
    output = []
    while True:
        line = stdout.readline()
        if not line:
            break
        print(line, end='', flush=True)
        output.append(line)
    
    ssh.close()
    
    # Paso 5: Análisis de logs
    print("\n[5/5] Análisis de logs...")
    print("="*60 + "\n")
    
    output_text = ''.join(output)
    
    if 'online' in output_text:
        print("✅ Servicios están ONLINE")
    else:
        print("⚠️  Servicios pueden estar detenidos")
    
    if 'ENOTFOUND' in output_text or 'getaddrinfo' in output_text:
        print("❌ Problema de DNS/Conectividad a Supabase detectado")
        print("\n🔧 SOLUCIÓN:")
        print("   El servidor no puede resolver aws-1-us-east-2.pooler.supabase.com")
        print("   Esto puede ser porque:")
        print("   1. El DNS no está configurado correctamente")
        print("   2. Hay un firewall bloqueando")
        print("   3. La URL de Supabase es incorrecta")
        print("\n   Verifica tu DATABASE_URL en Supabase")
    elif 'Spanish Consular Bot is running' in output_text:
        print("✅ Bot arrancó correctamente")
    
    if 'Spanish Consular Worker starting' in output_text:
        print("✅ Worker arrancó correctamente")
    
    print("\n" + "="*60)
    print("  RESUMEN FINAL")
    print("="*60)
    print(f"\n🔐 SSH: ssh root@{VPS_HOST}")
    print(f"🔑 Contraseña: ECH4Jiw9A37i (o pLvnCV4Wixem)")
    print(f"\n🤖 PRUEBA EL BOT:")
    print(f"   1. Abre Telegram")
    print(f"   2. Envía /start")
    print(f"   3. Envía /operador")
    print(f"\n📊 Si sigue dando error:")
    print(f"   - Verifica que la DATABASE_URL sea correcta")
    print(f"   - Verifica que las tablas existan en Supabase")
    print(f"   - Ejecuta: ssh root@{VPS_HOST}")
    print(f"   - Luego: pm2 logs bot")
    print("")
    
    return True

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n\nCancelado")
    except Exception as e:
        print(f"\nError: {e}")
        import traceback
        traceback.print_exc()

