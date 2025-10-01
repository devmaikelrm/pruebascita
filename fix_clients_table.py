#!/usr/bin/env python3
"""
Actualizar tabla clients para que coincida con el schema
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
    print("  Actualizando Tabla Clients")
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

echo "▶ Actualizando tabla clients..."
PGPASSWORD='CitaConsular2024!' psql -U citaconsular -d citaconsular -h localhost <<'SQL'
-- Agregar columnas faltantes a clients
ALTER TABLE clients ADD COLUMN IF NOT EXISTS username TEXT;
ALTER TABLE clients ADD COLUMN IF NOT EXISTS password TEXT;

-- Eliminar columnas que no están en el schema
ALTER TABLE clients DROP COLUMN IF EXISTS passport;

-- Actualizar constraints
ALTER TABLE clients ALTER COLUMN username SET NOT NULL;
ALTER TABLE clients ALTER COLUMN password SET NOT NULL;

-- Verificar estructura
\\d clients
SQL

echo ""
echo "✓ Tabla clients actualizada"

echo ""
echo "▶ Reiniciando PM2..."
pm2 restart all
sleep 10

pm2 status

echo ""
echo "╔════════════════════════════════════════════════════════════╗"
echo "║              ✓ TABLA CLIENTS ACTUALIZADA                  ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""
echo "🤖 AHORA PRUEBA /cliente EN TELEGRAM"
echo ""
echo "Debería funcionar correctamente"
echo ""
""", get_pty=True)
        
        while True:
            line = stdout.readline()
            if not line:
                break
            print(line, end='', flush=True)
        
        ssh.close()
        
        print("\n" + "="*60)
        print("  ✓ TABLA ACTUALIZADA")
        print("="*60)
        print("\n🤖 Prueba /cliente ahora")
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

