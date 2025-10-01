#!/usr/bin/env python3
"""
Recompilar bot y worker con la nueva configuración de PostgreSQL
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
    print("  Recompilando Bot y Worker")
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

echo "╔════════════════════════════════════════════════════════════╗"
echo "║   Recompilando Shared, Bot y Worker                      ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

echo "▶ Compilando shared..."
pnpm -C shared build

echo ""
echo "▶ Compilando bot..."
pnpm -C bot build

echo ""
echo "▶ Compilando worker..."
pnpm -C worker build

echo ""
echo "✓ Compilación completada"

echo ""
echo "╔════════════════════════════════════════════════════════════╗"
echo "║   Reiniciando servicios PM2                               ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

pm2 restart all

echo ""
pm2 status

echo ""
echo "Esperando 15 segundos para que arranquen..."
sleep 15

echo ""
echo "▶ Probando conexión a base de datos desde Node.js..."
node -e "
const { Pool } = require('pg');
const pool = new Pool({ connectionString: 'postgresql://citaconsular:CitaConsular2024!@localhost:5432/citaconsular' });
pool.query('SELECT NOW() as now, version() as version')
  .then(r => {
    console.log('✓ Conexión exitosa');
    console.log('  Hora del servidor:', r.rows[0].now);
    console.log('  Versión:', r.rows[0].version.split(',')[0]);
    pool.end();
  })
  .catch(e => {
    console.log('✗ Error:', e.message);
    pool.end();
  });
"

sleep 3

echo ""
echo "▶ Verificando tablas en la base de datos..."
PGPASSWORD='CitaConsular2024!' psql -U citaconsular -d citaconsular -h localhost -c "SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' ORDER BY table_name;"

echo ""
echo "╔════════════════════════════════════════════════════════════╗"
echo "║   Logs de los servicios                                   ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

echo "▶ Logs del BOT (últimas 40 líneas):"
pm2 logs bot --lines 40 --nostream 2>&1 | tail -50

echo ""
echo "▶ Logs del WORKER (últimas 40 líneas):"
pm2 logs worker --lines 40 --nostream 2>&1 | tail -50

echo ""
echo "╔════════════════════════════════════════════════════════════╗"
echo "║              ✓ TODO LISTO                                 ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""
""", get_pty=True)
        
        while True:
            line = stdout.readline()
            if not line:
                break
            print(line, end='', flush=True)
        
        ssh.close()
        
        print("\n" + "="*60)
        print("  ✓ RECOMPILACIÓN COMPLETADA")
        print("="*60)
        print("\n🎉 TODO ESTÁ LISTO!")
        print("\n🤖 PRUEBA EL BOT EN TELEGRAM:")
        print("   1. Envía /start")
        print("   2. Envía /operador")
        print("   3. Envía /help")
        print("\n📊 Base de datos PostgreSQL local:")
        print("   postgresql://citaconsular:CitaConsular2024!@localhost:5432/citaconsular")
        print("\n🔐 SSH:")
        print("   ssh -i hetzner_vps_key root@91.99.171.11")
        print("\n📝 Ver logs:")
        print("   pm2 logs bot")
        print("   pm2 logs worker")
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

