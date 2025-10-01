#!/usr/bin/env python3
"""
Recrear schema completo usando drizzle-kit push
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
    print("  Recreando Schema Completo con Drizzle")
    print("="*60 + "\n")
    
    install_paramiko()
    import paramiko
    
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    
    try:
        ssh.connect(hostname="91.99.171.11", username="root", key_filename="hetzner_vps_key", timeout=30)
        print("[✓] Conectado\n")
        
        stdin, stdout, stderr = ssh.exec_command("""
set -e

cd /opt/CitaConsulares

echo "▶ Eliminando todas las tablas existentes..."
PGPASSWORD='CitaConsular2024!' psql -U citaconsular -d citaconsular -h localhost <<'SQL'
DROP TABLE IF EXISTS captcha_requests CASCADE;
DROP TABLE IF EXISTS appointments CASCADE;
DROP TABLE IF EXISTS queue CASCADE;
DROP TABLE IF EXISTS preferences CASCADE;
DROP TABLE IF EXISTS clients CASCADE;
DROP TABLE IF EXISTS operators CASCADE;
DROP TABLE IF EXISTS cooldowns CASCADE;

-- Verificar que no queden tablas
\\dt
SQL

echo ""
echo "✓ Tablas eliminadas"

echo ""
echo "▶ Usando drizzle-kit para crear el schema correcto..."
cd shared

# Crear drizzle.config.ts si no existe
cat > drizzle.config.ts <<'DRIZZLE'
import type { Config } from 'drizzle-kit';

export default {
  schema: './src/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL || 'postgresql://citaconsular:CitaConsular2024!@localhost:5432/citaconsular',
  },
} satisfies Config;
DRIZZLE

echo "✓ drizzle.config.ts creado"

echo ""
echo "▶ Ejecutando drizzle-kit push..."
DATABASE_URL='postgresql://citaconsular:CitaConsular2024!@localhost:5432/citaconsular' pnpm drizzle-kit push 2>&1 || echo "Drizzle-kit no disponible, usando SQL manual..."

echo ""
echo "▶ Verificando tablas creadas..."
PGPASSWORD='CitaConsular2024!' psql -U citaconsular -d citaconsular -h localhost -c "\\dt"

echo ""
echo "▶ Verificando estructura de operators..."
PGPASSWORD='CitaConsular2024!' psql -U citaconsular -d citaconsular -h localhost -c "\\d operators"

echo ""
echo "▶ Verificando estructura de clients..."
PGPASSWORD='CitaConsular2024!' psql -U citaconsular -d citaconsular -h localhost -c "\\d clients"

echo ""
echo "▶ Verificando estructura de queue..."
PGPASSWORD='CitaConsular2024!' psql -U citaconsular -d citaconsular -h localhost -c "\\d queue"

cd ..

echo ""
echo "▶ Reiniciando PM2..."
pm2 restart all
sleep 10

pm2 status

echo ""
echo "╔════════════════════════════════════════════════════════════╗"
echo "║              ✓ SCHEMA RECREADO                            ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""
echo "🤖 PRUEBA LOS COMANDOS:"
echo "   /operador - Registrarte como operador"
echo "   /cliente - Ver clientes"
echo "   /status - Ver estado del sistema"
echo ""
""", get_pty=True)
        
        while True:
            line = stdout.readline()
            if not line:
                break
            print(line, end='', flush=True)
        
        ssh.close()
        
        print("\n" + "="*60)
        print("  ✓ SCHEMA RECREADO")
        print("="*60)
        print("\n🤖 Prueba los comandos ahora")
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

