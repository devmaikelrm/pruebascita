#!/usr/bin/env python3
"""
Corrección definitiva - versión simplificada
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
        return True
    except ImportError:
        subprocess.check_call([sys.executable, "-m", "pip", "install", "paramiko", "-q"])
        return True

def main():
    print("\n" + "="*60)
    print("  Corrección Definitiva - CitaConsulares")
    print("="*60 + "\n")
    
    if not install_paramiko():
        return False
    
    import paramiko
    
    # Habilitar rescue
    print("[1/4] Habilitando modo rescue...")
    result = hetzner_api(f"/servers/{SERVER_ID}/actions/enable_rescue", "POST", {"type": "linux64"})
    rescue_pass = result.get('root_password')
    print(f"[✓] Rescue habilitado (pass: {rescue_pass})\n")
    
    # Reiniciar
    print("[2/4] Reiniciando...")
    hetzner_api(f"/servers/{SERVER_ID}/actions/reboot", "POST")
    print(f"[→] Esperando 90s...\n")
    time.sleep(90)
    
    # Conectar
    print("[3/4] Conectando...")
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    
    for i in range(1, 6):
        try:
            ssh.connect(hostname=VPS_HOST, username="root", password=rescue_pass, timeout=30)
            print(f"[✓] Conectado\n")
            break
        except:
            if i < 5:
                print(f"[!] Intento {i}/5, esperando...")
                time.sleep(20)
            else:
                return False
    
    # Ejecutar corrección
    print("[4/4] Ejecutando corrección...")
    print("="*60 + "\n")
    
    stdin, stdout, stderr = ssh.exec_command("""
set -e

# Detectar y montar disco
DISK=$(lsblk -ndo NAME,TYPE | grep disk | head -1 | awk '{print $1}')
echo "Disco: $DISK"

mkdir -p /mnt/system
mount /dev/${DISK}1 /mnt/system || { echo "Error montando"; exit 1; }
echo "✓ Disco montado"

# Montar sistemas virtuales
mount --bind /dev /mnt/system/dev
mount --bind /proc /mnt/system/proc  
mount --bind /sys /mnt/system/sys

# Ejecutar en chroot
chroot /mnt/system /bin/bash <<'CHROOT_END'
set -e

cd /opt/CitaConsulares

echo "▶ Limpiando..."
rm -rf shared/dist bot/dist worker/dist 2>/dev/null || true

echo "▶ Instalando dependencias..."
pnpm install -r 2>&1 | tail -5

echo "▶ Compilando shared..."
pnpm -C shared build 2>&1 | tail -3

echo "▶ Compilando bot..."
pnpm -C bot build 2>&1 | tail -3

echo "▶ Compilando worker..."
pnpm -C worker build 2>&1 | tail -3

echo "✓ Compilación completada"

# Verificar .env
if [[ ! -f bot/.env ]]; then
cat > bot/.env <<'ENV1'
TZ=America/Havana
TELEGRAM_BOT_TOKEN=7271022887:AAFLlCyJyXfGchaEsJ2-U4VRpSYKXwYrmkc
TELEGRAM_ADMIN_CHAT=6213988452
TELEGRAM_ADMIN_CHAT_LIST=6213988452,7652036984,778282548
DATABASE_URL=postgresql://postgres.igbphvvaqnafxousalrn:Rita.1014@aws-1-us-east-2.pooler.supabase.com:6543/postgres
ENV1
chmod 600 bot/.env
fi

if [[ ! -f worker/.env ]]; then
cat > worker/.env <<'ENV2'
TZ=America/Havana
TELEGRAM_BOT_TOKEN=7271022887:AAFLlCyJyXfGchaEsJ2-U4VRpSYKXwYrmkc
TELEGRAM_ADMIN_CHAT=6213988452
WIDGET_URL=
CHECK_INTERVAL_MIN=6
CHECK_INTERVAL_MAX=10
COOLDOWN_BLOCK_HOURS=3
DATABASE_URL=postgresql://postgres.igbphvvaqnafxousalrn:Rita.1014@aws-1-us-east-2.pooler.supabase.com:6543/postgres
ENV2
chmod 600 worker/.env
fi

echo "✓ .env verificados"

# PM2
mkdir -p /var/log/pm2

cat > ecosystem.config.cjs <<'ECO'
module.exports = {
  apps: [
    {
      name: 'bot',
      cwd: '/opt/CitaConsulares/bot',
      script: 'dist/index.js',
      env_file: '/opt/CitaConsulares/bot/.env',
      max_restarts: 10,
      restart_delay: 5000,
      out_file: '/var/log/pm2/bot.out.log',
      error_file: '/var/log/pm2/bot.error.log',
      merge_logs: true,
      time: true
    },
    {
      name: 'worker',
      cwd: '/opt/CitaConsulares/worker',
      script: 'dist/index.js',
      env_file: '/opt/CitaConsulares/worker/.env',
      max_restarts: 10,
      restart_delay: 5000,
      out_file: '/var/log/pm2/worker.out.log',
      error_file: '/var/log/pm2/worker.error.log',
      merge_logs: true,
      time: true
    }
  ]
};
ECO

pm2 delete all 2>/dev/null || true
pm2 start ecosystem.config.cjs
pm2 save
pm2 startup systemd -u root --hp /root | grep '^sudo' | bash || true

echo ""
echo "✓ PM2 configurado y servicios iniciados"
pm2 status

CHROOT_END

# Desmontar
umount /mnt/system/dev /mnt/system/proc /mnt/system/sys 2>/dev/null || true

echo ""
echo "╔════════════════════════════════════════════════════════════╗"
echo "║              ✓ CORRECCIÓN COMPLETADA                      ║"
echo "╚════════════════════════════════════════════════════════════╝"
""", get_pty=True)
    
    # Mostrar output
    while True:
        line = stdout.readline()
        if not line:
            break
        print(line, end='', flush=True)
    
    ssh.close()
    
    # Desactivar rescue y reiniciar
    print("\nDesactivando rescue y reiniciando...")
    hetzner_api(f"/servers/{SERVER_ID}/actions/disable_rescue", "POST")
    time.sleep(5)
    hetzner_api(f"/servers/{SERVER_ID}/actions/reboot", "POST")
    print("Esperando 120s...\n")
    time.sleep(120)
    
    # Verificar
    print("Verificando...")
    ssh2 = paramiko.SSHClient()
    ssh2.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    
    for i in range(1, 4):
        try:
            ssh2.connect(hostname=VPS_HOST, username="root", password="pLvnCV4Wixem", timeout=30)
            print("\n[✓] Conectado al servidor normal\n")
            
            stdin, stdout, stderr = ssh2.exec_command("pm2 status && echo '' && pm2 logs bot --lines 10 --nostream", get_pty=True)
            while True:
                line = stdout.readline()
                if not line:
                    break
                print(line, end='')
            
            ssh2.close()
            break
        except:
            if i < 3:
                print(f"Intento {i}/3, esperando...")
                time.sleep(30)
    
    print("\n" + "="*60)
    print("  ✓ INSTALACIÓN COMPLETADA")
    print("="*60)
    print(f"\nSSH: ssh root@{VPS_HOST}")
    print(f"Pass: pLvnCV4Wixem")
    print("\nPrueba el bot en Telegram enviando /start")
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

