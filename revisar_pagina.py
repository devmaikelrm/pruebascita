#!/usr/bin/env python3
"""
Revisar página sin modificar nada
"""
import subprocess
import sys

def install_paramiko():
    try:
        import paramiko
    except ImportError:
        subprocess.check_call([sys.executable, "-m", "pip", "install", "paramiko", "-q"])

def main():
    url = sys.argv[1] if len(sys.argv) > 1 else 'https://www.citaconsular.es'
    
    print("\n" + "="*60)
    print(f"  Revisando: {url}")
    print("="*60 + "\n")
    
    install_paramiko()
    import paramiko
    
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    
    try:
        ssh.connect(hostname="91.99.171.11", username="root", key_filename="hetzner_vps_key", timeout=30)
        print("[✓] Conectado\n")
        
        stdin, stdout, stderr = ssh.exec_command(f"""
cd /opt/CitaConsulares

cat > revisar.mjs <<'ENDJS'
import {{ chromium }} from 'playwright';

(async () => {{
  const browser = await chromium.launch({{ 
    headless: true,
    args: ['--no-sandbox']
  }});
  const page = await browser.newPage();
  
  const url = '{url}';
  console.log('Navegando a:', url);
  
  await page.goto(url, {{ waitUntil: 'networkidle', timeout: 30000 }});
  await page.waitForTimeout(2000);
  
  const title = await page.title();
  console.log('\\nTítulo:', title);
  
  // Screenshot
  await page.screenshot({{ path: 'pagina.png', fullPage: true }});
  console.log('Screenshot guardado: pagina.png');
  
  // Texto visible
  const text = await page.locator('body').textContent();
  console.log('\\n--- TEXTO VISIBLE EN LA PÁGINA ---');
  console.log(text.substring(0, 1500));
  console.log('\\n--- FIN TEXTO ---\\n');
  
  // Botones
  console.log('BOTONES ENCONTRADOS:');
  const buttons = await page.locator('button').all();
  for (let i = 0; i < buttons.length; i++) {{
    const text = await buttons[i].textContent();
    const visible = await buttons[i].isVisible();
    if (visible) {{
      console.log(`  [Botón ${{i+1}}] "${{text?.trim()}}"`);
    }}
  }}
  
  // Links
  console.log('\\nLINKS ENCONTRADOS:');
  const links = await page.locator('a').all();
  for (let i = 0; i < Math.min(links.length, 10); i++) {{
    const text = await links[i].textContent();
    const href = await links[i].getAttribute('href');
    const visible = await links[i].isVisible();
    if (visible) {{
      console.log(`  [Link ${{i+1}}] "${{text?.trim()}}" -> ${{href}}`);
    }}
  }}
  
  // Inputs
  console.log('\\nINPUTS ENCONTRADOS:');
  const inputs = await page.locator('input').all();
  for (let i = 0; i < inputs.length; i++) {{
    const type = await inputs[i].getAttribute('type');
    const placeholder = await inputs[i].getAttribute('placeholder');
    const name = await inputs[i].getAttribute('name');
    const visible = await inputs[i].isVisible();
    if (visible) {{
      console.log(`  [Input ${{i+1}}] type="${{type}}" name="${{name}}" placeholder="${{placeholder}}"`);
    }}
  }}
  
  // Selects
  console.log('\\nSELECTS ENCONTRADOS:');
  const selects = await page.locator('select').all();
  for (let i = 0; i < selects.length; i++) {{
    const name = await selects[i].getAttribute('name');
    const visible = await selects[i].isVisible();
    if (visible) {{
      console.log(`  [Select ${{i+1}}] name="${{name}}"`);
    }}
  }}
  
  await browser.close();
}})();
ENDJS

node revisar.mjs

echo ""
echo "════════════════════════════════════════════════════════════"
echo "Screenshot guardado en: /opt/CitaConsulares/pagina.png"
echo "════════════════════════════════════════════════════════════"
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

