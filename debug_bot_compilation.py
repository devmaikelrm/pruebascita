#!/usr/bin/env python3
"""
Debug compilación del bot
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
    print("  Debug Compilación del Bot")
    print("="*60 + "\n")
    
    install_paramiko()
    import paramiko
    
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    
    try:
        ssh.connect(hostname="91.99.171.11", username="root", key_filename="hetzner_vps_key", timeout=30)
        print("[✓] Conectado\n")
        
        stdin, stdout, stderr = ssh.exec_command("""
cd /opt/CitaConsulares/bot

echo "▶ Intentando compilar bot con output completo..."
pnpm tsc 2>&1

echo ""
echo "▶ Verificando si se creó dist/..."
ls -la dist/ 2>&1 || echo "No existe dist/"

echo ""
echo "▶ Verificando tsconfig.json..."
cat tsconfig.json

echo ""
echo "▶ Compilando manualmente con tsc directo..."
../node_modules/.bin/tsc --outDir dist --module ESNext --target ES2022 --moduleResolution bundler --esModuleInterop --skipLibCheck src/index.ts src/commands.ts src/db.ts src/storage.ts 2>&1

echo ""
echo "▶ Verificando dist/ nuevamente..."
ls -la dist/ 2>&1 || echo "Aún no existe dist/"

echo ""
echo "▶ Intentando con configuración simple..."
cat > tsconfig.temp.json <<'TSCONFIG'
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "node",
    "outDir": "./dist",
    "rootDir": "./src",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "strict": false
  },
  "include": ["src/**/*"]
}
TSCONFIG

../node_modules/.bin/tsc -p tsconfig.temp.json 2>&1

echo ""
echo "▶ Verificando dist/ final..."
ls -la dist/ 2>&1 || echo "Todavía no existe dist/"
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

