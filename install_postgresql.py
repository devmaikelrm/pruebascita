#!/usr/bin/env python3
"""
Instalar PostgreSQL en el VPS y configurar la base de datos
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
    print("  Instalando PostgreSQL en el VPS")
    print("="*60 + "\n")
    
    install_paramiko()
    import paramiko
    
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    
    try:
        ssh.connect(hostname="91.99.171.11", username="root", key_filename="hetzner_vps_key", timeout=30)
        print("[✓] Conectado\n")
        
        print("Instalando PostgreSQL y configurando base de datos...")
        print("="*60 + "\n")
        
        stdin, stdout, stderr = ssh.exec_command("""
set -e

echo "╔════════════════════════════════════════════════════════════╗"
echo "║   Instalando PostgreSQL                                   ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

echo "▶ Actualizando repositorios..."
apt-get update -qq

echo ""
echo "▶ Instalando PostgreSQL..."
DEBIAN_FRONTEND=noninteractive apt-get install -y postgresql postgresql-contrib -qq

echo ""
echo "▶ Iniciando PostgreSQL..."
systemctl start postgresql
systemctl enable postgresql
systemctl status postgresql --no-pager | head -5

echo ""
echo "▶ Creando base de datos y usuario..."
sudo -u postgres psql <<'PSQL'
-- Crear usuario
CREATE USER citaconsular WITH PASSWORD 'CitaConsular2024!';

-- Crear base de datos
CREATE DATABASE citaconsular OWNER citaconsular;

-- Dar permisos
GRANT ALL PRIVILEGES ON DATABASE citaconsular TO citaconsular;

-- Conectar a la base de datos
\\c citaconsular

-- Dar permisos en el schema public
GRANT ALL ON SCHEMA public TO citaconsular;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO citaconsular;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO citaconsular;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO citaconsular;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON SEQUENCES TO citaconsular;

-- Verificar
\\l
\\du
PSQL

echo ""
echo "✓ Base de datos creada"

echo ""
echo "▶ Configurando PostgreSQL para aceptar conexiones locales..."
# Asegurar que PostgreSQL acepta conexiones locales
sed -i "s/#listen_addresses = 'localhost'/listen_addresses = 'localhost'/" /etc/postgresql/*/main/postgresql.conf || true

# Configurar autenticación
cat > /etc/postgresql/*/main/pg_hba.conf <<'PGHBA'
# TYPE  DATABASE        USER            ADDRESS                 METHOD
local   all             postgres                                peer
local   all             all                                     md5
host    all             all             127.0.0.1/32            md5
host    all             all             ::1/128                 md5
PGHBA

echo ""
echo "▶ Reiniciando PostgreSQL..."
systemctl restart postgresql

echo ""
echo "▶ Probando conexión..."
PGPASSWORD='CitaConsular2024!' psql -U citaconsular -d citaconsular -h localhost -c "SELECT version();" | head -3

echo ""
echo "╔════════════════════════════════════════════════════════════╗"
echo "║   Creando tablas del schema                               ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

# Crear las tablas
PGPASSWORD='CitaConsular2024!' psql -U citaconsular -d citaconsular -h localhost <<'SCHEMA'
-- Operators table
CREATE TABLE IF NOT EXISTS operators (
    id TEXT PRIMARY KEY,
    telegram_user_id TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Clients table
CREATE TABLE IF NOT EXISTS clients (
    id TEXT PRIMARY KEY,
    operator_id TEXT REFERENCES operators(id),
    name TEXT NOT NULL,
    passport TEXT NOT NULL,
    email TEXT,
    phone TEXT,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Preferences table
CREATE TABLE IF NOT EXISTS preferences (
    id TEXT PRIMARY KEY,
    client_id TEXT REFERENCES clients(id) UNIQUE,
    consulate TEXT,
    appointment_type TEXT,
    preferred_dates TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Queue table
CREATE TABLE IF NOT EXISTS queue (
    id TEXT PRIMARY KEY,
    client_id TEXT REFERENCES clients(id),
    status TEXT DEFAULT 'pending',
    priority INTEGER DEFAULT 0,
    last_attempt TIMESTAMP,
    next_attempt TIMESTAMP,
    attempts INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Appointments table
CREATE TABLE IF NOT EXISTS appointments (
    id TEXT PRIMARY KEY,
    client_id TEXT REFERENCES clients(id),
    queue_id TEXT REFERENCES queue(id),
    appointment_date TIMESTAMP,
    consulate TEXT,
    appointment_type TEXT,
    confirmation_code TEXT,
    status TEXT DEFAULT 'confirmed',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Captcha requests table
CREATE TABLE IF NOT EXISTS captcha_requests (
    id TEXT PRIMARY KEY,
    queue_id TEXT REFERENCES queue(id),
    image_url TEXT,
    status TEXT DEFAULT 'pending',
    solution TEXT,
    solved_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Cooldowns table
CREATE TABLE IF NOT EXISTS cooldowns (
    id TEXT PRIMARY KEY,
    type TEXT NOT NULL,
    identifier TEXT NOT NULL,
    expires_at TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Crear índices
CREATE INDEX IF NOT EXISTS idx_operators_telegram ON operators(telegram_user_id);
CREATE INDEX IF NOT EXISTS idx_clients_operator ON clients(operator_id);
CREATE INDEX IF NOT EXISTS idx_queue_status ON queue(status);
CREATE INDEX IF NOT EXISTS idx_queue_next_attempt ON queue(next_attempt);
CREATE INDEX IF NOT EXISTS idx_captcha_status ON captcha_requests(status);
CREATE INDEX IF NOT EXISTS idx_cooldowns_expires ON cooldowns(expires_at);

-- Verificar tablas creadas
\\dt
SCHEMA

echo ""
echo "✓ Tablas creadas"

echo ""
echo "╔════════════════════════════════════════════════════════════╗"
echo "║   Actualizando configuración de PM2                       ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

cd /opt/CitaConsulares

# Nueva DATABASE_URL local
DB_URL="postgresql://citaconsular:CitaConsular2024!@localhost:5432/citaconsular"

cat > ecosystem.config.cjs <<ECOJS
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
        DATABASE_URL: '${DB_URL}'
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
        DATABASE_URL: '${DB_URL}'
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
echo "Esperando 10 segundos..."
sleep 10

echo ""
echo "▶ Logs del BOT:"
pm2 logs bot --lines 30 --nostream 2>&1

echo ""
echo "▶ Logs del WORKER:"
pm2 logs worker --lines 30 --nostream 2>&1

echo ""
echo "╔════════════════════════════════════════════════════════════╗"
echo "║              ✓ INSTALACIÓN COMPLETADA                     ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""
echo "Base de datos PostgreSQL local instalada y configurada"
echo "DATABASE_URL: ${DB_URL}"
echo ""
""", get_pty=True)
        
        while True:
            line = stdout.readline()
            if not line:
                break
            print(line, end='', flush=True)
        
        ssh.close()
        
        print("\n" + "="*60)
        print("  ✓ POSTGRESQL INSTALADO Y CONFIGURADO")
        print("="*60)
        print("\n📊 Base de datos:")
        print("   Host: localhost")
        print("   Puerto: 5432")
        print("   Database: citaconsular")
        print("   Usuario: citaconsular")
        print("   Contraseña: CitaConsular2024!")
        print("\n🤖 PRUEBA EL BOT AHORA:")
        print("   1. Envía /start")
        print("   2. Envía /operador")
        print("   3. Todos los comandos deberían funcionar")
        print("\n📊 Para ver la base de datos:")
        print("   ssh -i hetzner_vps_key root@91.99.171.11")
        print("   PGPASSWORD='CitaConsular2024!' psql -U citaconsular -d citaconsular -h localhost")
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

