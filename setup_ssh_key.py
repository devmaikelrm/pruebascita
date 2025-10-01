#!/usr/bin/env python3
"""
Crear SSH key y configurarla en el servidor
"""
import requests
import subprocess
import sys
import os
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
    elif method == "PUT":
        response = requests.put(url, headers=headers, json=data)
    
    response.raise_for_status()
    return response.json()

def install_paramiko():
    try:
        import paramiko
    except ImportError:
        subprocess.check_call([sys.executable, "-m", "pip", "install", "paramiko", "-q"])

def main():
    print("\n" + "="*60)
    print("  Configurar SSH Key para Acceso sin Contraseña")
    print("="*60 + "\n")
    
    install_paramiko()
    import paramiko
    
    # Paso 1: Generar SSH key
    print("[1/6] Generando SSH key...")
    key = paramiko.RSAKey.generate(2048)
    
    # Guardar clave privada
    key_path = "hetzner_vps_key"
    key.write_private_key_file(key_path)
    print(f"  ✓ Clave privada guardada: {key_path}")
    
    # Obtener clave pública
    public_key = f"ssh-rsa {key.get_base64()}"
    print(f"  ✓ Clave pública generada")
    print(f"    {public_key[:60]}...")
    
    # Paso 2: Habilitar rescue mode
    print("\n[2/6] Habilitando rescue mode...")
    result = hetzner_api(f"/servers/{SERVER_ID}/actions/enable_rescue", "POST", {"type": "linux64"})
    rescue_pass = result.get('root_password')
    print(f"  ✓ Rescue habilitado (pass: {rescue_pass})")
    
    # Paso 3: Reiniciar en rescue
    print("\n[3/6] Reiniciando en rescue mode...")
    hetzner_api(f"/servers/{SERVER_ID}/actions/reboot", "POST")
    print("  Esperando 90 segundos...")
    time.sleep(90)
    
    # Paso 4: Conectar y agregar SSH key
    print("\n[4/6] Conectando al rescue mode...")
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    
    for attempt in range(1, 6):
        try:
            ssh.connect(hostname=VPS_HOST, username="root", password=rescue_pass, timeout=30)
            print(f"  ✓ Conectado\n")
            break
        except:
            if attempt < 5:
                print(f"  Intento {attempt}/5, esperando...")
                time.sleep(20)
            else:
                print("  ✗ No se pudo conectar")
                return False
    
    print("[5/6] Agregando SSH key al sistema...")
    
    stdin, stdout, stderr = ssh.exec_command(f"""
set -e

# Montar disco
DISK=$(lsblk -ndo NAME,TYPE | grep disk | head -1 | awk '{{print $1}}')
mkdir -p /mnt/system
mount /dev/${{DISK}}1 /mnt/system

# Agregar SSH key
mkdir -p /mnt/system/root/.ssh
chmod 700 /mnt/system/root/.ssh

# Agregar la clave pública
echo "{public_key}" >> /mnt/system/root/.ssh/authorized_keys
chmod 600 /mnt/system/root/.ssh/authorized_keys

echo "✓ SSH key agregada"

# Verificar
echo ""
echo "Claves autorizadas:"
cat /mnt/system/root/.ssh/authorized_keys

# Desmontar
umount /mnt/system

echo ""
echo "✓ Configuración completada"
""", get_pty=True)
    
    while True:
        line = stdout.readline()
        if not line:
            break
        print(line, end='', flush=True)
    
    ssh.close()
    
    # Paso 6: Desactivar rescue y reiniciar
    print("\n[6/6] Reiniciando en modo normal...")
    hetzner_api(f"/servers/{SERVER_ID}/actions/disable_rescue", "POST")
    time.sleep(5)
    hetzner_api(f"/servers/{SERVER_ID}/actions/reboot", "POST")
    print("  Esperando 120 segundos...")
    time.sleep(120)
    
    # Probar conexión con SSH key
    print("\nProbando conexión con SSH key...")
    ssh2 = paramiko.SSHClient()
    ssh2.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    
    for attempt in range(1, 6):
        try:
            ssh2.connect(hostname=VPS_HOST, username="root", key_filename=key_path, timeout=30)
            print(f"✓ Conectado con SSH key!\n")
            
            # Verificar servicios
            stdin, stdout, stderr = ssh2.exec_command("""
echo "╔════════════════════════════════════════════════════════════╗"
echo "║              ESTADO DEL SISTEMA                           ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

echo "▶ Estado de PM2:"
pm2 status

echo ""
echo "▶ Verificando DNS:"
nslookup aws-1-us-east-2.pooler.supabase.com 2>&1 | head -10

echo ""
echo "▶ Probando conexión a Supabase:"
timeout 5 bash -c 'cat < /dev/null > /dev/tcp/aws-1-us-east-2.pooler.supabase.com/6543' && echo "✓ Conexión TCP exitosa" || echo "✗ Conexión TCP falló"

echo ""
echo "▶ Reiniciando servicios..."
pm2 restart all
sleep 10

echo ""
echo "▶ Logs del BOT:"
pm2 logs bot --lines 50 --nostream 2>&1

echo ""
echo "▶ Logs del WORKER:"
pm2 logs worker --lines 50 --nostream 2>&1
""", get_pty=True)
            
            while True:
                line = stdout.readline()
                if not line:
                    break
                print(line, end='', flush=True)
            
            ssh2.close()
            break
        except Exception as e:
            if attempt < 5:
                print(f"Intento {attempt}/5, esperando...")
                time.sleep(20)
            else:
                print(f"✗ No se pudo conectar: {e}")
    
    print("\n" + "="*60)
    print("  ✓ SSH KEY CONFIGURADA")
    print("="*60)
    print(f"\n🔑 Clave privada guardada en: {key_path}")
    print(f"\n🔐 Para conectarte ahora:")
    print(f"   ssh -i {key_path} root@{VPS_HOST}")
    print(f"\n🤖 PRUEBA EL BOT EN TELEGRAM:")
    print(f"   1. Envía /start")
    print(f"   2. Envía /operador")
    print(f"   3. Envía /help")
    print(f"\n📊 Para ver logs:")
    print(f"   ssh -i {key_path} root@{VPS_HOST}")
    print(f"   pm2 logs bot")
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

