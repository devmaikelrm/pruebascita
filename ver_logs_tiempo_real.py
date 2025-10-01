#!/usr/bin/env python3
"""
Ver logs en tiempo real y diagnosticar el error
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
    print("  Diagnóstico en Tiempo Real")
    print("="*60 + "\n")
    
    install_paramiko()
    import paramiko
    
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    
    try:
        ssh.connect(hostname="91.99.171.11", username="root", key_filename="hetzner_vps_key", timeout=30)
        print("[✓] Conectado\n")
        print("Esperando que envíes /operador en Telegram...")
        print("Mostrando logs en tiempo real...\n")
        print("="*60 + "\n")
        
        stdin, stdout, stderr = ssh.exec_command("""
cd /opt/CitaConsulares

echo "▶ Estado actual de PM2:"
pm2 status

echo ""
echo "▶ Verificando conexión a base de datos..."
node -e "
const { Pool } = require('pg');
const pool = new Pool({ 
  connectionString: 'postgresql://citaconsular:CitaConsular2024!@localhost:5432/citaconsular' 
});

console.log('Probando conexión...');
pool.query('SELECT NOW() as now, COUNT(*) as operator_count FROM operators')
  .then(r => {
    console.log('✓ Conexión exitosa');
    console.log('  Hora:', r.rows[0].now);
    console.log('  Operadores en DB:', r.rows[0].operator_count);
    return pool.query('SELECT table_name FROM information_schema.tables WHERE table_schema = \\'public\\' ORDER BY table_name');
  })
  .then(r => {
    console.log('  Tablas:', r.rows.map(row => row.table_name).join(', '));
    pool.end();
  })
  .catch(e => {
    console.log('✗ Error:', e.message);
    pool.end();
  });
" 2>&1

sleep 3

echo ""
echo "▶ Verificando variables de entorno del bot:"
pm2 env 0 | grep -E "(DATABASE_URL|TELEGRAM)" || echo "No se pudieron obtener las variables"

echo ""
echo "▶ Probando importación del storage en bot..."
cd bot
node -e "
import('./dist/db.js').then(mod => {
  console.log('✓ db.js importado correctamente');
  console.log('  Exports:', Object.keys(mod));
}).catch(e => {
  console.log('✗ Error importando db.js:', e.message);
});
" 2>&1

sleep 2

echo ""
echo "▶ Logs del BOT (últimas 100 líneas - CTRL+C para salir):"
pm2 logs bot --lines 100 --nostream 2>&1 | tail -120

echo ""
echo "════════════════════════════════════════════════════════════"
echo "Ahora envía /operador en Telegram y presiona ENTER aquí..."
read -t 30 dummy

echo ""
echo "▶ Logs después del comando:"
pm2 logs bot --lines 50 --nostream 2>&1 | tail -60
""", get_pty=True)
        
        while True:
            line = stdout.readline()
            if not line:
                break
            print(line, end='', flush=True)
        
        ssh.close()
        
    except Exception as e:
        print(f"[✗] Error: {e}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n\nCancelado")

