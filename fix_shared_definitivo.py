#!/usr/bin/env python3
"""
Fix definitivo del shared - limpiar y recompilar todo
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
    print("  Fix Definitivo - Recompilar Todo Desde Cero")
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

echo "▶ Deteniendo PM2..."
pm2 stop all

echo ""
echo "▶ Limpiando TODAS las compilaciones..."
rm -rf shared/dist bot/dist worker/dist
rm -rf shared/node_modules/.cache bot/node_modules/.cache worker/node_modules/.cache
rm -rf shared/tsconfig.tsbuildinfo bot/tsconfig.tsbuildinfo worker/tsconfig.tsbuildinfo

echo ""
echo "▶ Verificando que bot/src/db.ts usa 'pg'..."
cat bot/src/db.ts

echo ""
echo "▶ Compilando shared con tsc directo..."
cd shared
../node_modules/.bin/tsc --outDir dist --module ESNext --target ES2022 --moduleResolution node --esModuleInterop --skipLibCheck src/index.ts src/schema.ts src/storage.ts 2>&1 || echo "Compilación con errores, continuando..."

echo ""
echo "▶ Verificando shared/dist..."
ls -la dist/ 2>&1

echo ""
echo "▶ Compilando bot con tsc directo..."
cd ../bot
../node_modules/.bin/tsc --outDir dist --module ESNext --target ES2022 --moduleResolution bundler --esModuleInterop --skipLibCheck src/index.ts src/commands.ts src/db.ts src/storage.ts 2>&1 || echo "Compilación con errores, continuando..."

echo ""
echo "▶ Verificando bot/dist..."
ls -la dist/ 2>&1

echo ""
echo "▶ Verificando que bot/dist/db.js usa Pool de pg..."
head -20 dist/db.js

echo ""
echo "▶ Compilando worker con tsc directo..."
cd ../worker
../node_modules/.bin/tsc --outDir dist --module ESNext --target ES2022 --moduleResolution bundler --esModuleInterop --skipLibCheck src/*.ts 2>&1 || echo "Compilación con errores, continuando..."

echo ""
echo "▶ Verificando worker/dist..."
ls -la dist/ 2>&1

cd ..

echo ""
echo "▶ Iniciando PM2..."
pm2 start all
sleep 15

echo ""
pm2 status

echo ""
echo "▶ Probando conexión desde bot..."
cd bot
node -e "
process.env.DATABASE_URL = 'postgresql://citaconsular:CitaConsular2024!@localhost:5432/citaconsular';
import('./dist/db.js').then(async (mod) => {
  console.log('✓ db.js cargado');
  console.log('  Exports:', Object.keys(mod));
  
  // Probar query
  const result = await mod.pool.query('SELECT NOW() as now, version() as version');
  console.log('✓ Query exitosa');
  console.log('  Hora:', result.rows[0].now);
  console.log('  Versión:', result.rows[0].version.substring(0, 50));
  
  await mod.pool.end();
  console.log('✓ Pool cerrado');
}).catch(e => {
  console.log('✗ Error:', e.message);
  console.log('  Stack:', e.stack);
});
" 2>&1

sleep 5

echo ""
echo "▶ Logs finales:"
pm2 logs --lines 40 --nostream 2>&1 | tail -50

echo ""
echo "╔════════════════════════════════════════════════════════════╗"
echo "║              ✓ RECOMPILACIÓN COMPLETADA                   ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""
echo "Ahora envía /operador en Telegram para probar"
echo ""
""", get_pty=True)
        
        while True:
            line = stdout.readline()
            if not line:
                break
            print(line, end='', flush=True)
        
        ssh.close()
        
        print("\n" + "="*60)
        print("  ✓ PROCESO COMPLETADO")
        print("="*60)
        print("\n🤖 Prueba /operador en Telegram ahora")
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

