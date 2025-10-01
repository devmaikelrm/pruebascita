#!/usr/bin/env python3
"""
Verificar DNS y conectividad a Supabase
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
    response = requests.post(url, headers=headers, json=data) if method == "POST" else requests.get(url, headers=headers)
    response.raise_for_status()
    return response.json()

def install_paramiko():
    try:
        import paramiko
    except ImportError:
        subprocess.check_call([sys.executable, "-m", "pip", "install", "paramiko", "-q"])

def main():
    print("\n" + "="*60)
    print("  Verificar DNS y Conectividad")
    print("="*60 + "\n")
    
    install_paramiko()
    import paramiko
    
    # Primero verificar si está en rescue mode
    print("Verificando estado del servidor...")
    server_info = hetzner_api(f"/servers/{SERVER_ID}")
    rescue_enabled = server_info.get('server', {}).get('rescue_enabled', False)
    
    if rescue_enabled:
        print("[!] Servidor en rescue mode, desactivando...")
        hetzner_api(f"/servers/{SERVER_ID}/actions/disable_rescue", "POST")
        time.sleep(5)
        hetzner_api(f"/servers/{SERVER_ID}/actions/reboot", "POST")
        print("[→] Esperando 120s para que arranque en modo normal...\n")
        time.sleep(120)
    else:
        print("[✓] Servidor en modo normal\n")
    
    print("Conectando al servidor...")
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    
    for i in range(1, 6):
        try:
            ssh.connect(hostname=VPS_HOST, username="root", password="pLvnCV4Wixem", timeout=30)
            print("[✓] Conectado\n")
            break
        except:
            if i < 5:
                print(f"Intento {i}/5, esperando...")
                time.sleep(20)
            else:
                print("[✗] No se pudo conectar")
                return False
    
    print("Verificando DNS y conectividad...")
    print("="*60 + "\n")
    
    stdin, stdout, stderr = ssh.exec_command("""
echo "▶ Verificando DNS..."
cat /etc/resolv.conf

echo ""
echo "▶ Probando resolución DNS de Supabase..."
nslookup aws-1-us-east-2.pooler.supabase.com || echo "DNS FALLO"

echo ""
echo "▶ Probando ping a Supabase..."
ping -c 3 aws-1-us-east-2.pooler.supabase.com || echo "PING FALLO"

echo ""
echo "▶ Probando conexión TCP a Supabase..."
timeout 5 bash -c 'cat < /dev/null > /dev/tcp/aws-1-us-east-2.pooler.supabase.com/6543' && echo "✓ Conexión TCP exitosa" || echo "✗ Conexión TCP falló"

echo ""
echo "▶ Estado de PM2..."
pm2 status

echo ""
echo "▶ Reiniciando servicios PM2..."
pm2 restart all

echo ""
echo "Esperando 10 segundos..."
sleep 10

echo ""
echo "▶ Logs del bot (últimas 40 líneas)..."
pm2 logs bot --lines 40 --nostream

echo ""
echo "▶ Logs del worker (últimas 40 líneas)..."
pm2 logs worker --lines 40 --nostream
""", get_pty=True)
    
    while True:
        line = stdout.readline()
        if not line:
            break
        print(line, end='', flush=True)
    
    ssh.close()
    
    print("\n" + "="*60)
    print("  Verificación Completada")
    print("="*60)
    print("\n🤖 Prueba el bot de nuevo:")
    print("   Envía /start en Telegram")
    print("\n📊 Si sigue fallando, ejecuta:")
    print("   ssh root@91.99.171.11")
    print("   pm2 logs bot")
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

