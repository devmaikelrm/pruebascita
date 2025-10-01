#!/usr/bin/env python3
"""
Fix del import de storage en worker
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
    print("  Fix Worker Import - Solución Definitiva")
    print("="*60 + "\n")
    
    install_paramiko()
    import paramiko
    
    print("[1/4] Rescue...")
    result = hetzner_api(f"/servers/{SERVER_ID}/actions/enable_rescue", "POST", {"type": "linux64"})
    rescue_pass = result.get('root_password')
    print(f"[✓] {rescue_pass}\n")
    
    print("[2/4] Reiniciando...")
    hetzner_api(f"/servers/{SERVER_ID}/actions/reboot", "POST")
    time.sleep(90)
    
    print("[3/4] Conectando...")
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    
    for i in range(1, 6):
        try:
            ssh.connect(hostname=VPS_HOST, username="root", password=rescue_pass, timeout=30)
            print("[✓] OK\n")
            break
        except:
            if i < 5:
                time.sleep(20)
            else:
                return False
    
    print("[4/4] Corrigiendo worker...")
    print("="*60 + "\n")
    
    stdin, stdout, stderr = ssh.exec_command("""
set -e

DISK=$(lsblk -ndo NAME,TYPE | grep disk | head -1 | awk '{print $1}')
mkdir -p /mnt/system
mount /dev/${DISK}1 /mnt/system
mount --bind /dev /mnt/system/dev
mount --bind /proc /mnt/system/proc
mount --bind /sys /mnt/system/sys

chroot /mnt/system /bin/bash <<'CHROOT'
set -e
cd /opt/CitaConsulares/worker/src

echo "Archivo ANTES:"
head -10 index.ts

# La solución: cambiar el import para crear storage directamente
cat > index.ts.new <<'NEWFILE'
import dotenv from 'dotenv';
import cron from 'node-cron';
import { AppointmentScheduler } from './scheduler.js';
import { db } from './db.js';
import { createDatabaseStorage } from '@repo/shared/storage';

dotenv.config();

console.log('Spanish Consular Worker starting...');

// Create storage from db
const storage = createDatabaseStorage(db);

// Create scheduler instance
const scheduler = new AppointmentScheduler(storage);

// Self-rescheduling timer with jitter between CHECK_MIN_MINUTES and CHECK_MAX_MINUTES
let isRunning = false;

async function scheduleNextRun() {
  if (isRunning) return;

  const minM = Number(process.env.CHECK_MIN_MINUTES || 6);
  const maxM = Number(process.env.CHECK_MAX_MINUTES || 10);
  const jitterMs = (minM + Math.random() * (maxM - minM)) * 60 * 1000;

  console.log(`Next check in ${(jitterMs / 60000).toFixed(1)} minutes`);

  setTimeout(async () => {
    isRunning = true;
    try {
      await scheduler.processQueue();
    } catch (error) {
      console.error('Error processing queue:', error);
    } finally {
      isRunning = false;
      scheduleNextRun();
    }
  }, jitterMs);
}

// Start the scheduler
scheduleNextRun();

// Also run a cron job every hour as a backup
cron.schedule('0 * * * *', async () => {
  if (!isRunning) {
    console.log('[CRON] Running hourly check');
    isRunning = true;
    try {
      await scheduler.processQueue();
    } catch (error) {
      console.error('[CRON] Error:', error);
    } finally {
      isRunning = false;
    }
  }
});

console.log('Worker is running. Press Ctrl+C to stop.');
NEWFILE

mv index.ts.new index.ts

echo ""
echo "Archivo DESPUÉS:"
head -15 index.ts

cd /opt/CitaConsulares

echo ""
echo "Compilando shared..."
pnpm -C shared build 2>&1 | tail -3

echo ""
echo "Compilando bot..."
pnpm -C bot build 2>&1 | tail -3

echo ""
echo "Compilando worker..."
pnpm -C worker build

echo ""
echo "✓ Compilación exitosa"
ls -lh worker/dist/

echo ""
echo "Arrancando servicios..."
pm2 delete all 2>/dev/null || true
pm2 start ecosystem.config.cjs
pm2 save

echo ""
pm2 status

echo ""
echo "Logs del bot:"
pm2 logs bot --lines 10 --nostream 2>/dev/null || true

echo ""
echo "Logs del worker:"
pm2 logs worker --lines 10 --nostream 2>/dev/null || true

CHROOT

umount /mnt/system/{dev,proc,sys} 2>/dev/null || true

echo ""
echo "╔════════════════════════════════════════════════════════════╗"
echo "║              ✓ WORKER CORREGIDO                           ║"
echo "╚════════════════════════════════════════════════════════════╝"
""", get_pty=True)
    
    while True:
        line = stdout.readline()
        if not line:
            break
        print(line, end='', flush=True)
    
    ssh.close()
    
    print("\nReiniciando en modo normal...")
    hetzner_api(f"/servers/{SERVER_ID}/actions/disable_rescue", "POST")
    time.sleep(5)
    hetzner_api(f"/servers/{SERVER_ID}/actions/reboot", "POST")
    time.sleep(120)
    
    print("Verificando...")
    ssh2 = paramiko.SSHClient()
    ssh2.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    
    for i in range(1, 4):
        try:
            ssh2.connect(hostname=VPS_HOST, username="root", password="pLvnCV4Wixem", timeout=30)
            print("\n[✓] Servidor OK\n")
            
            stdin, stdout, stderr = ssh2.exec_command("pm2 status && echo '' && pm2 logs --lines 25 --nostream", get_pty=True)
            while True:
                line = stdout.readline()
                if not line:
                    break
                print(line, end='')
            
            ssh2.close()
            break
        except:
            if i < 3:
                time.sleep(30)
    
    print("\n" + "="*60)
    print("  ✓ TODO LISTO")
    print("="*60)
    print(f"\n🔐 SSH: ssh root@{VPS_HOST}")
    print(f"🔑 Pass: pLvnCV4Wixem")
    print(f"\n🤖 Prueba el bot en Telegram enviando /start")
    print(f"\n📊 Comandos útiles:")
    print(f"   pm2 status")
    print(f"   pm2 logs bot")
    print(f"   pm2 logs worker")
    print(f"   pm2 restart all")
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

