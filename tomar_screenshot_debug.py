#!/usr/bin/env python3
"""
Tomar screenshot de lo que el bot está viendo
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
    print("  Tomando Screenshot de Debug")
    print("="*60 + "\n")
    
    install_paramiko()
    import paramiko
    
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    
    try:
        ssh.connect(hostname="91.99.171.11", username="root", key_filename="hetzner_vps_key", timeout=30)
        print("[✓] Conectado\n")
        
        # Crear script de debug
        stdin, stdout, stderr = ssh.exec_command("""
cd /opt/CitaConsulares

echo "▶ Creando script de debug..."
cat > debug_screenshot.js <<'DEBUGJS'
const { chromium } = require('playwright');

(async () => {
  console.log('Iniciando navegador...');
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  const url = process.env.WIDGET_URL || 'https://www.citaconsular.es';
  console.log(\`Navegando a: \${url}\`);
  
  await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
  console.log('Página cargada');
  
  // Tomar screenshot
  await page.screenshot({ path: 'debug_screenshot.png', fullPage: true });
  console.log('Screenshot guardado: debug_screenshot.png');
  
  // Obtener el HTML
  const html = await page.content();
  console.log('\\n--- HTML de la página ---');
  console.log(html.substring(0, 2000)); // Primeros 2000 caracteres
  console.log('\\n--- Fin del HTML ---\\n');
  
  // Buscar elementos de tiempo
  const timeBlocks = await page.locator('text=/^([0-2]?\\\\d:[0-5]\\\\d)$/').count();
  console.log(\`Bloques de tiempo encontrados: \${timeBlocks}\`);
  
  // Buscar mensajes de "no disponible"
  const noAvail = await page.getByText(/no hay (citas|disponibilidad|huecos)|no slots|no availability/i).count();
  console.log(\`Mensajes de "no disponible": \${noAvail}\`);
  
  await browser.close();
  console.log('Navegador cerrado');
})();
DEBUGJS

echo "✓ Script creado"

echo ""
echo "▶ Ejecutando script de debug..."
node debug_screenshot.js

echo ""
echo "▶ Verificando screenshot..."
ls -lh debug_screenshot.png 2>/dev/null || echo "No se creó el screenshot"

echo ""
echo "╔════════════════════════════════════════════════════════════╗"
echo "║              DEBUG COMPLETADO                             ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""
echo "📸 Screenshot guardado en: /opt/CitaConsulares/debug_screenshot.png"
echo ""
echo "🔍 Para descargar el screenshot:"
echo "   scp -i hetzner_vps_key root@91.99.171.11:/opt/CitaConsulares/debug_screenshot.png ."
echo ""
""", get_pty=True)
        
        while True:
            line = stdout.readline()
            if not line:
                break
            print(line, end='', flush=True)
        
        ssh.close()
        
        print("\n" + "="*60)
        print("  ✓ DEBUG COMPLETADO")
        print("="*60)
        print("\n📸 Screenshot tomado")
        print("\n🔍 Ahora dime: ¿Cuál es la URL correcta del widget de citas?")
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

