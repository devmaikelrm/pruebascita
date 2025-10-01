#!/usr/bin/env python3
"""
Agregar generación automática de UUIDs en PostgreSQL
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
    print("  Agregando Generación Automática de UUIDs")
    print("="*60 + "\n")
    
    install_paramiko()
    import paramiko
    
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    
    try:
        ssh.connect(hostname="91.99.171.11", username="root", key_filename="hetzner_vps_key", timeout=30)
        print("[✓] Conectado\n")
        
        stdin, stdout, stderr = ssh.exec_command("""
cd /opt/CitaConsulares

echo "▶ Agregando extensión uuid-ossp y defaults a las tablas..."
PGPASSWORD='CitaConsular2024!' psql -U citaconsular -d citaconsular -h localhost <<'SQL'
-- Habilitar extensión UUID
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Agregar defaults para generar UUIDs automáticamente
ALTER TABLE operators ALTER COLUMN id SET DEFAULT uuid_generate_v4();
ALTER TABLE clients ALTER COLUMN id SET DEFAULT uuid_generate_v4();
ALTER TABLE preferences ALTER COLUMN id SET DEFAULT uuid_generate_v4();
ALTER TABLE queue ALTER COLUMN id SET DEFAULT uuid_generate_v4();
ALTER TABLE appointments ALTER COLUMN id SET DEFAULT uuid_generate_v4();
ALTER TABLE captcha_requests ALTER COLUMN id SET DEFAULT uuid_generate_v4();
ALTER TABLE cooldowns ALTER COLUMN id SET DEFAULT uuid_generate_v4();

-- Verificar
\\d operators
SQL

echo ""
echo "✓ UUIDs configurados"

echo ""
echo "▶ Reiniciando PM2..."
pm2 restart all
sleep 10

pm2 status

echo ""
echo "╔════════════════════════════════════════════════════════════╗"
echo "║              ✓ UUID GENERATION CONFIGURADO                ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""
echo "🤖 AHORA SÍ, PRUEBA /operador EN TELEGRAM"
echo ""
echo "Debería funcionar perfectamente"
echo ""
""", get_pty=True)
        
        while True:
            line = stdout.readline()
            if not line:
                break
            print(line, end='', flush=True)
        
        ssh.close()
        
        print("\n" + "="*60)
        print("  ✓ UUID GENERATION CONFIGURADO")
        print("="*60)
        print("\n🎉 ¡AHORA SÍ DEBERÍA FUNCIONAR!")
        print("\n🤖 Envía /operador en Telegram")
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

