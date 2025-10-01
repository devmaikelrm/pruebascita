#!/usr/bin/env python3
"""
Corregir archivos db.ts en el servidor
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
    print("  Corrigiendo archivos db.ts")
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

echo "▶ Corrigiendo bot/src/db.ts..."
cat > bot/src/db.ts <<'DBTS'
import 'dotenv/config';
import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from '@repo/shared/schema';

if (!process.env.DATABASE_URL) {
  throw new Error(
    'DATABASE_URL must be set. Did you forget to provision a database?',
  );
}

const isSupabase = /\\.supabase\\.co/i.test(process.env.DATABASE_URL);
export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: isSupabase ? { rejectUnauthorized: false } : undefined,
});
export const db = drizzle(pool, { schema });
DBTS

echo "✓ bot/src/db.ts actualizado"

echo ""
echo "▶ Verificando worker/src/db.ts..."
cat worker/src/db.ts

echo ""
echo "▶ Limpiando compilaciones..."
rm -rf bot/dist worker/dist shared/dist

echo ""
echo "▶ Compilando shared..."
cd shared
pnpm tsc 2>&1 || echo "Errores en shared, continuando..."
ls -la dist/

echo ""
echo "▶ Compilando bot..."
cd ../bot
pnpm tsc 2>&1 || echo "Errores en bot, continuando..."
ls -la dist/

echo ""
echo "▶ Verificando bot/dist/db.js..."
head -20 dist/db.js

echo ""
echo "▶ Compilando worker..."
cd ../worker
pnpm tsc 2>&1 || echo "Errores en worker, continuando..."
ls -la dist/

cd ..

echo ""
echo "▶ Reiniciando PM2..."
pm2 restart all
sleep 15

pm2 status

echo ""
echo "▶ Probando conexión..."
node -e "
const { Pool } = require('pg');
const pool = new Pool({ 
  connectionString: 'postgresql://citaconsular:CitaConsular2024!@localhost:5432/citaconsular' 
});
pool.query('SELECT NOW() as now, COUNT(*) FROM operators')
  .then(r => {
    console.log('✓ Conexión PostgreSQL exitosa');
    console.log('  Hora:', r.rows[0].now);
    console.log('  Operadores:', r.rows[0].count);
    pool.end();
  })
  .catch(e => {
    console.log('✗ Error:', e.message);
    pool.end();
  });
"

sleep 3

echo ""
echo "▶ Logs finales:"
pm2 logs --lines 50 --nostream 2>&1 | tail -60

echo ""
echo "╔════════════════════════════════════════════════════════════╗"
echo "║              ✓ ARCHIVOS CORREGIDOS                        ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""
echo "Ahora envía /operador en Telegram"
echo ""
""", get_pty=True)
        
        while True:
            line = stdout.readline()
            if not line:
                break
            print(line, end='', flush=True)
        
        ssh.close()
        
        print("\n" + "="*60)
        print("  ✓ CORRECCIÓN COMPLETADA")
        print("="*60)
        print("\n🤖 Prueba /operador ahora")
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

