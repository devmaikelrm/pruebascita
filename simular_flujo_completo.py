#!/usr/bin/env python3
"""
Simular el flujo completo paso a paso
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
    print("  SIMULANDO FLUJO COMPLETO")
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

cat > simular_flujo.mjs <<'ENDJS'
import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ 
    headless: true,
    args: ['--no-sandbox']
  });
  const page = await browser.newPage();
  
  const url = 'https://www.citaconsular.es/es/hosteds/widgetdefault/2f21cd9c0d8aa26725bf8930e4691d645/bkt195382';
  
  console.log('\\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('PASO 1: Navegando a la URL del widget');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('URL:', url);
  
  await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(3000);
  
  await page.screenshot({ path: 'paso1_inicial.png', fullPage: true });
  console.log('✓ Screenshot guardado: paso1_inicial.png');
  
  console.log('\\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('PASO 2: Buscando modal de bienvenida');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  
  // Buscar el botón "Aceptar" en el modal
  const aceptarButton = page.getByRole('button', { name: /aceptar/i });
  const aceptarExists = await aceptarButton.count();
  
  console.log(`Botones "Aceptar" encontrados: ${aceptarExists}`);
  
  if (aceptarExists > 0) {
    console.log('✓ Modal de bienvenida encontrado');
    console.log('Haciendo clic en "Aceptar"...');
    await aceptarButton.click();
    await page.waitForTimeout(2000);
    console.log('✓ Clic realizado');
    
    await page.screenshot({ path: 'paso2_despues_aceptar.png', fullPage: true });
    console.log('✓ Screenshot guardado: paso2_despues_aceptar.png');
  } else {
    console.log('⚠ No se encontró el modal de bienvenida');
  }
  
  console.log('\\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('PASO 3: Analizando contenido después del modal');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  
  await page.waitForTimeout(2000);
  
  // Texto visible
  const text = await page.locator('body').textContent();
  console.log('\\nTexto visible (primeros 1500 chars):');
  console.log(text.substring(0, 1500));
  
  // Botones
  console.log('\\n--- BOTONES VISIBLES ---');
  const buttons = await page.locator('button:visible').all();
  for (let i = 0; i < buttons.length; i++) {
    const btnText = await buttons[i].textContent();
    console.log(`  [${i+1}] "${btnText?.trim()}"`);
  }
  
  // Inputs
  console.log('\\n--- INPUTS VISIBLES ---');
  const inputs = await page.locator('input:visible').all();
  for (let i = 0; i < inputs.length; i++) {
    const type = await inputs[i].getAttribute('type');
    const placeholder = await inputs[i].getAttribute('placeholder');
    const name = await inputs[i].getAttribute('name');
    console.log(`  [${i+1}] type="${type}" name="${name}" placeholder="${placeholder}"`);
  }
  
  // Links
  console.log('\\n--- LINKS VISIBLES ---');
  const links = await page.locator('a:visible').all();
  for (let i = 0; i < Math.min(links.length, 10); i++) {
    const linkText = await links[i].textContent();
    const href = await links[i].getAttribute('href');
    if (linkText?.trim()) {
      console.log(`  [${i+1}] "${linkText.trim()}" -> ${href}`);
    }
  }
  
  // Divs con texto
  console.log('\\n--- DIVS CON CLASE ---');
  const divs = await page.locator('div[class]:visible').all();
  for (let i = 0; i < Math.min(divs.length, 15); i++) {
    const className = await divs[i].getAttribute('class');
    const text = await divs[i].textContent();
    if (text && text.trim().length > 0 && text.trim().length < 100) {
      console.log(`  [${i+1}] class="${className}" text="${text.trim().substring(0, 50)}"`);
    }
  }
  
  await page.screenshot({ path: 'paso3_contenido_final.png', fullPage: true });
  console.log('\\n✓ Screenshot guardado: paso3_contenido_final.png');
  
  await browser.close();
  
  console.log('\\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('✓ SIMULACIÓN COMPLETADA');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\n');
})();
ENDJS

node simular_flujo.mjs

echo ""
echo "════════════════════════════════════════════════════════════"
echo "Screenshots guardados:"
echo "  - paso1_inicial.png"
echo "  - paso2_despues_aceptar.png"
echo "  - paso3_contenido_final.png"
echo "════════════════════════════════════════════════════════════"
""", get_pty=True)
        
        while True:
            line = stdout.readline()
            if not line:
                break
            print(line, end='', flush=True)
        
        ssh.close()
        
        print("\n" + "="*60)
        print("  ✓ SIMULACIÓN COMPLETADA")
        print("="*60)
        print("\n📸 Revisa los screenshots para ver qué aparece")
        print("\n👉 Ahora dime qué debe hacer el bot después de hacer clic en 'Aceptar'")
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

