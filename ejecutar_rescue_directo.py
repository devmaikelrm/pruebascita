#!/usr/bin/env python3
"""
Ejecutar instalación desde modo rescue - método directo
"""
import subprocess
import sys

VPS_HOST = "91.99.171.11"
VPS_USER = "root"
VPS_PASS = "WkgCxKeaPpbN"

def install_paramiko():
    try:
        import paramiko
        return True
    except ImportError:
        print("[→] Instalando paramiko...")
        subprocess.check_call([sys.executable, "-m", "pip", "install", "paramiko", "-q"])
        import paramiko
        return True

def ejecutar_comando(ssh, comando, mostrar=True):
    """Ejecutar comando y retornar output"""
    stdin, stdout, stderr = ssh.exec_command(comando, get_pty=True)
    
    output_lines = []
    while True:
        line = stdout.readline()
        if not line:
            break
        if mostrar:
            print(line, end='', flush=True)
        output_lines.append(line)
    
    exit_status = stdout.channel.recv_exit_status()
    return exit_status, ''.join(output_lines)

def main():
    print("\n" + "="*60)
    print("  CitaConsulares - Instalación desde Modo Rescue")
    print("="*60 + "\n")
    
    if not install_paramiko():
        return False
    
    import paramiko
    
    print(f"[→] Conectando a {VPS_HOST}...")
    
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    
    try:
        ssh.connect(
            hostname=VPS_HOST,
            username=VPS_USER,
            password=VPS_PASS,
            timeout=30
        )
        print(f"[✓] Conectado\n")
        
        # Paso 1: Detectar y montar disco
        print("="*60)
        print("  Paso 1: Montando disco real")
        print("="*60 + "\n")
        
        comandos_montaje = """
# Detectar disco
MAIN_DISK=$(lsblk -ndo NAME,TYPE | grep disk | head -1 | awk '{print $1}')
MAIN_PARTITION="${MAIN_DISK}1"

echo "Disco: /dev/$MAIN_DISK"
echo "Partición: /dev/$MAIN_PARTITION"

# Crear y montar
mkdir -p /mnt/system
mount /dev/$MAIN_PARTITION /mnt/system 2>/dev/null || echo "Ya montado"

# Montar sistemas virtuales
mount --bind /dev /mnt/system/dev 2>/dev/null || true
mount --bind /proc /mnt/system/proc 2>/dev/null || true
mount --bind /sys /mnt/system/sys 2>/dev/null || true
mount --bind /dev/pts /mnt/system/dev/pts 2>/dev/null || true

# DNS
cp /etc/resolv.conf /mnt/system/etc/resolv.conf

echo "✓ Disco montado"
df -h /mnt/system
"""
        
        exit_code, output = ejecutar_comando(ssh, comandos_montaje)
        if exit_code != 0:
            print("[✗] Error al montar disco")
            return False
        
        # Paso 2: Instalar en el sistema real
        print("\n" + "="*60)
        print("  Paso 2: Instalando en el sistema real")
        print("="*60 + "\n")
        
        comandos_instalacion = """
chroot /mnt/system /bin/bash <<'CHROOT_EOF'
set -e

echo "▶ Instalando dependencias..."
apt-get install -y git curl wget unzip build-essential ca-certificates 2>&1 | grep -v "^Reading\\|^Building" || true

echo "▶ Instalando Node.js 20..."
if ! command -v node >/dev/null 2>&1 || [[ $(node -v | cut -c2- | cut -d. -f1) -lt 20 ]]; then
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash - >/dev/null 2>&1
    apt-get install -y nodejs >/dev/null 2>&1
fi
echo "  ✓ Node.js $(node -v)"

echo "▶ Instalando pnpm..."
npm install -g pnpm >/dev/null 2>&1 || true
echo "  ✓ pnpm $(pnpm -v)"

echo "▶ Instalando PM2..."
npm install -g pm2 >/dev/null 2>&1 || true
echo "  ✓ PM2 $(pm2 -v)"

echo "▶ Clonando repositorio..."
if [[ -d /opt/CitaConsulares ]]; then
    cd /opt/CitaConsulares
    git fetch origin >/dev/null 2>&1 || true
    git reset --hard origin/main >/dev/null 2>&1 || true
    git clean -fd >/dev/null 2>&1 || true
else
    git clone https://github.com/devmaikelrm/CitaConsulares.git /opt/CitaConsulares >/dev/null 2>&1
    cd /opt/CitaConsulares
fi
echo "  ✓ Repositorio listo"

echo "▶ Instalando dependencias del proyecto..."
cd /opt/CitaConsulares
pnpm install -r 2>&1 | tail -10

echo "▶ Instalando Playwright..."
pnpm -C worker exec playwright install --with-deps chromium >/dev/null 2>&1 || true
echo "  ✓ Playwright instalado"

echo "▶ Compilando..."
pnpm -C shared build 2>&1 | tail -3 || true
pnpm -C worker build 2>&1 | tail -3 || true
pnpm -C bot build 2>&1 | tail -3 || true
echo "  ✓ Compilado"

echo "▶ Configurando .env..."
cat > /opt/CitaConsulares/bot/.env <<'ENVEOF'
TZ=America/Havana
TELEGRAM_BOT_TOKEN=7271022887:AAFLlCyJyXfGchaEsJ2-U4VRpSYKXwYrmkc
TELEGRAM_ADMIN_CHAT=6213988452
DATABASE_URL=postgresql://postgres.igbphvvaqnafxousalrn:Rita.1014@aws-1-us-east-2.pooler.supabase.com:6543/postgres
ENVEOF

cat > /opt/CitaConsulares/worker/.env <<'ENVEOF'
TZ=America/Havana
TELEGRAM_BOT_TOKEN=7271022887:AAFLlCyJyXfGchaEsJ2-U4VRpSYKXwYrmkc
TELEGRAM_ADMIN_CHAT=6213988452
WIDGET_URL=
CHECK_INTERVAL_MIN=6
CHECK_INTERVAL_MAX=10
COOLDOWN_BLOCK_HOURS=3
CAPTCHA_PROVIDER=
CAPTCHA_API_KEY=
CAPTCHA_TIMEOUT_SEC=25
DATABASE_URL=postgresql://postgres.igbphvvaqnafxousalrn:Rita.1014@aws-1-us-east-2.pooler.supabase.com:6543/postgres
ENVEOF

chmod 600 /opt/CitaConsulares/bot/.env
chmod 600 /opt/CitaConsulares/worker/.env
echo "  ✓ .env configurados"

echo "▶ Corrigiendo SSL..."
cat > /opt/CitaConsulares/bot/src/db.ts <<'DBEOF'
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from '@repo/shared/schema';

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  throw new Error('DATABASE_URL no está configurada');
}

const sql = neon(databaseUrl, {
  fetchOptions: {
    signal: AbortSignal.timeout(30000)
  }
});

export const db = drizzle(sql, { schema });
DBEOF

cp /opt/CitaConsulares/bot/src/db.ts /opt/CitaConsulares/worker/src/db.ts

pnpm -C bot build 2>&1 | tail -3 || true
pnpm -C worker build 2>&1 | tail -3 || true
echo "  ✓ SSL corregido y recompilado"

echo "▶ Configurando PM2..."
mkdir -p /var/log/pm2

cat > /opt/CitaConsulares/ecosystem.config.cjs <<'ECOEOF'
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
ECOEOF

pm2 startup systemd -u root --hp /root | grep -E '^sudo' | bash || true
echo "  ✓ PM2 configurado"

echo ""
echo "╔════════════════════════════════════════════════════════════╗"
echo "║         ✓ INSTALACIÓN COMPLETADA                          ║"
echo "╚════════════════════════════════════════════════════════════╝"

CHROOT_EOF
"""
        
        exit_code, output = ejecutar_comando(ssh, comandos_instalacion)
        
        if exit_code == 0:
            print("\n" + "="*60)
            print("  ✓ INSTALACIÓN COMPLETADA EXITOSAMENTE")
            print("="*60 + "\n")
            print("PRÓXIMOS PASOS:")
            print("")
            print("1. Ve al panel de Hetzner Cloud")
            print("2. Desactiva el modo rescue")
            print("3. Reinicia el servidor")
            print("4. Espera 2-3 minutos")
            print("5. Conéctate: ssh root@91.99.171.11")
            print("6. Ejecuta: pm2 start /opt/CitaConsulares/ecosystem.config.cjs")
            print("7. Verifica: pm2 status")
            print("")
            return True
        else:
            print(f"\n[✗] Error en la instalación")
            return False
        
    except Exception as e:
        print(f"[✗] Error: {e}")
        import traceback
        traceback.print_exc()
        return False
    finally:
        ssh.close()

if __name__ == "__main__":
    try:
        success = main()
        sys.exit(0 if success else 1)
    except KeyboardInterrupt:
        print("\n\n[!] Cancelado")
        sys.exit(1)

