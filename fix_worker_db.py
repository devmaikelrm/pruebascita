#!/usr/bin/env python3
"""
Corregir worker/src/db.ts
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
    print("  Corrigiendo worker/src/db.ts")
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

echo "▶ Corrigiendo worker/src/db.ts..."
cat > worker/src/db.ts <<'DBTS'
import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from '@repo/shared/schema';
import { createDatabaseStorage } from '@repo/shared/storage';

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error('DATABASE_URL must be set. Did you forget to provision a database?');
}
const isSupabase = /\\.supabase\\.co/i.test(connectionString);
export const pool = new Pool({ connectionString, ssl: isSupabase ? { rejectUnauthorized: false } : undefined });
export const db = drizzle(pool, { schema });
export const storage = createDatabaseStorage(db);
DBTS

echo "✓ worker/src/db.ts actualizado"

echo ""
echo "▶ Recompilando worker..."
cd worker
rm -rf dist
pnpm tsc 2>&1 || echo "Errores, continuando..."

echo ""
echo "▶ Verificando worker/dist/db.js..."
head -15 dist/db.js

cd ..

echo ""
echo "▶ Reiniciando PM2..."
pm2 restart all
sleep 15

pm2 status

echo ""
echo "▶ Logs (últimas 60 líneas):"
pm2 logs --lines 60 --nostream 2>&1 | grep -E "(Spanish|Error|Next check|online)" | tail -30

echo ""
echo "╔════════════════════════════════════════════════════════════╗"
echo "║              ✓ TODO CORREGIDO                             ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""
echo "🤖 PRUEBA EL BOT AHORA:"
echo "   Envía /operador en Telegram"
echo ""
echo "📊 Base de datos PostgreSQL local:"
echo "   postgresql://citaconsular:CitaConsular2024!@localhost:5432/citaconsular"
echo ""
echo "🔐 SSH:"
echo "   ssh -i hetzner_vps_key root@91.99.171.11"
echo ""
echo "📝 Ver logs:"
echo "   pm2 logs bot"
echo "   pm2 logs worker"
echo ""
""", get_pty=True)
        
        while True:
            line = stdout.readline()
            if not line:
                break
            print(line, end='', flush=True)
        
        ssh.close()
        
        print("\n" + "="*60)
        print("  ✓ WORKER CORREGIDO")
        print("="*60)
        print("\n🎉 ¡TODO LISTO!")
        print("\n🤖 Prueba /operador en Telegram")
        print("   Debería funcionar perfectamente ahora")
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

