#!/usr/bin/env python3
"""
Corregir DATABASE_URL en PM2
"""
import subprocess
import sys

def install_paramiko():
    try:
        import paramiko
    except ImportError:
        subprocess.check_call([sys.executable, "-m", "pip", "install", "paramiko", "-q"])

def main():
    print("\n" + "="*60)
    print("  Corrigiendo DATABASE_URL")
    print("="*60 + "\n")
    
    install_paramiko()
    import paramiko
    
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    
    try:
        ssh.connect(hostname="91.99.171.11", username="root", key_filename="hetzner_vps_key", timeout=30)
        print("[✓] Conectado con SSH key\n")
        
        stdin, stdout, stderr = ssh.exec_command("""
cd /opt/CitaConsulares

echo "▶ Actualizando ecosystem.config.cjs con DATABASE_URL correcta..."

cat > ecosystem.config.cjs <<'ECOJS'
module.exports = {
  apps: [
    {
      name: 'bot',
      cwd: '/opt/CitaConsulares/bot',
      script: 'dist/index.js',
      env: {
        TZ: 'America/Havana',
        TELEGRAM_BOT_TOKEN: '7271022887:AAFLlCyJyXfGchaEsJ2-U4VRpSYKXwYrmkc',
        TELEGRAM_ADMIN_CHAT: '6213988452',
        TELEGRAM_ADMIN_CHAT_LIST: '6213988452,7652036984,778282548',
        DATABASE_URL: 'postgresql://postgres.igbphvvaqnafxousalrn:Rita.1014@aws-1-us-east-2.pooler.supabase.com:6543/postgres'
      },
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
      env: {
        TZ: 'America/Havana',
        TELEGRAM_BOT_TOKEN: '7271022887:AAFLlCyJyXfGchaEsJ2-U4VRpSYKXwYrmkc',
        TELEGRAM_ADMIN_CHAT: '6213988452',
        WIDGET_URL: '',
        CHECK_INTERVAL_MIN: '6',
        CHECK_INTERVAL_MAX: '10',
        COOLDOWN_BLOCK_HOURS: '3',
        DATABASE_URL: 'postgresql://postgres.igbphvvaqnafxousalrn:Rita.1014@aws-1-us-east-2.pooler.supabase.com:6543/postgres'
      },
      max_restarts: 10,
      restart_delay: 5000,
      out_file: '/var/log/pm2/worker.out.log',
      error_file: '/var/log/pm2/worker.error.log',
      merge_logs: true,
      time: true
    }
  ]
};
ECOJS

echo "✓ Ecosystem actualizado"

echo ""
echo "▶ Reiniciando servicios PM2..."
pm2 delete all
pm2 start ecosystem.config.cjs
pm2 save

echo ""
pm2 status

echo ""
echo "Esperando 15 segundos para que arranquen..."
sleep 15

echo ""
echo "▶ Probando conexión a base de datos..."
node -e "
const { neon } = require('@neondatabase/serverless');
const sql = neon('postgresql://postgres.igbphvvaqnafxousalrn:Rita.1014@aws-1-us-east-2.pooler.supabase.com:6543/postgres');
sql\\\`SELECT 1 as test\\\`.then(r => console.log('✓ Conexión a DB exitosa:', r)).catch(e => console.log('✗ Error de DB:', e.message));
" 2>&1 || echo "Node test falló"

echo ""
echo "▶ Logs del BOT (últimas 30 líneas):"
pm2 logs bot --lines 30 --nostream 2>&1

echo ""
echo "▶ Logs del WORKER (últimas 30 líneas):"
pm2 logs worker --lines 30 --nostream 2>&1
""", get_pty=True)
        
        while True:
            line = stdout.readline()
            if not line:
                break
            print(line, end='', flush=True)
        
        ssh.close()
        
        print("\n" + "="*60)
        print("  ✓ DATABASE_URL CORREGIDA")
        print("="*60)
        print("\n🤖 PRUEBA EL BOT AHORA:")
        print("   Envía /operador en Telegram")
        print("\n   Debería funcionar correctamente")
        print("")
        
    except Exception as e:
        print(f"[✗] Error: {e}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n\nCancelado")

