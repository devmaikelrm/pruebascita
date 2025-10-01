#!/usr/bin/env python3
"""
Configurar la URL correcta del widget y tomar screenshot
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
    print("  Configurando URL Correcta")
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

echo "▶ Actualizando ecosystem.config.cjs con la URL correcta..."
cp ecosystem.config.cjs ecosystem.config.cjs.backup

# Actualizar WIDGET_URL en el worker
sed -i "s|WIDGET_URL: '',|WIDGET_URL: 'https://www.citaconsular.es/es/hosteds/widgetdefault/2f21cd9c0d8aa26725bf8930e4691d645/bkt195382',|g" ecosystem.config.cjs

echo "✓ URL actualizada"

echo ""
echo "▶ Verificando cambio:"
grep -A 2 "WIDGET_URL" ecosystem.config.cjs

echo ""
echo "▶ Reiniciando worker con nueva configuración..."
pm2 delete worker
pm2 start ecosystem.config.cjs --only worker
sleep 5

echo ""
echo "▶ Verificando estado:"
pm2 status

echo ""
echo "▶ Creando script para tomar screenshot de la página..."
cat > test_url.js <<'TESTJS'
const { chromium } = require('playwright');

(async () => {
  console.log('\\n▶ Iniciando navegador...');
  const browser = await chromium.launch({ 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  
  const url = 'https://www.citaconsular.es/es/hosteds/widgetdefault/2f21cd9c0d8aa26725bf8930e4691d645/bkt195382';
  console.log(\`\\n▶ Navegando a: \${url}\`);
  
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
    console.log('✓ Página cargada');
    
    // Esperar un poco
    await page.waitForTimeout(3000);
    
    // Tomar screenshot
    await page.screenshot({ path: 'widget_screenshot.png', fullPage: true });
    console.log('✓ Screenshot guardado: widget_screenshot.png');
    
    // Obtener título
    const title = await page.title();
    console.log(\`\\n📄 Título de la página: \${title}\`);
    
    // Buscar elementos clave
    console.log('\\n🔍 Buscando elementos en la página...');
    
    // Buscar botones
    const buttons = await page.locator('button').count();
    console.log(\`   Botones encontrados: \${buttons}\`);
    
    // Buscar inputs
    const inputs = await page.locator('input').count();
    console.log(\`   Inputs encontrados: \${inputs}\`);
    
    // Buscar bloques de tiempo
    const timeBlocks = await page.locator('text=/^([0-2]?\\\\d:[0-5]\\\\d)$/').count();
    console.log(\`   Bloques de tiempo (HH:MM): \${timeBlocks}\`);
    
    // Buscar mensajes de "no disponible"
    const noAvail = await page.getByText(/no hay|no disponible|no slots/i).count();
    console.log(\`   Mensajes "no disponible": \${noAvail}\`);
    
    // Obtener texto visible
    const bodyText = await page.locator('body').textContent();
    console.log(\`\\n📝 Primeros 500 caracteres del texto visible:\`);
    console.log(bodyText.substring(0, 500));
    
    // Listar todos los botones visibles
    console.log('\\n🔘 Botones visibles:');
    const visibleButtons = await page.locator('button:visible').all();
    for (let i = 0; i < Math.min(visibleButtons.length, 10); i++) {
      const text = await visibleButtons[i].textContent();
      console.log(\`   [\${i+1}] \${text?.trim() || '(sin texto)'}\`);
    }
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
  
  await browser.close();
  console.log('\\n✓ Navegador cerrado\\n');
})();
TESTJS

echo ""
echo "▶ Ejecutando test de la URL..."
node test_url.js

echo ""
echo "╔════════════════════════════════════════════════════════════╗"
echo "║              URL CONFIGURADA                              ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""
echo "✅ URL actualizada en ecosystem.config.cjs"
echo "✅ Worker reiniciado con nueva URL"
echo "📸 Screenshot guardado en: widget_screenshot.png"
echo ""
echo "🔍 Ahora dime qué pasos debe seguir el bot en esta página"
echo ""
""", get_pty=True)
        
        while True:
            line = stdout.readline()
            if not line:
                break
            print(line, end='', flush=True)
        
        ssh.close()
        
        print("\n" + "="*60)
        print("  ✓ URL CONFIGURADA")
        print("="*60)
        print("\n📸 Screenshot tomado de la página")
        print("\n👉 Ahora dime paso a paso qué debe hacer el bot:")
        print("   1. ¿Qué botón debe hacer clic primero?")
        print("   2. ¿Qué información debe llenar?")
        print("   3. ¿En qué orden?")
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

