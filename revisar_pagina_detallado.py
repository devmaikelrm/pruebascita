#!/usr/bin/env python3
"""
Revisar página con más detalle (iframes, esperas, etc)
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
    print(f"  Revisando DETALLADO: {url}")
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

cat > revisar_detallado.mjs <<'ENDJS'
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
  console.log('Esperando 5 segundos para que cargue todo...');
  await page.waitForTimeout(5000);
  
  const title = await page.title();
  console.log('Título:', title);
  
  // Screenshot
  await page.screenshot({{ path: 'pagina_detallada.png', fullPage: true }});
  console.log('Screenshot guardado\\n');
  
  // Verificar iframes
  const frames = page.frames();
  console.log(`Total de frames: ${{frames.length}}`);
  
  for (let i = 0; i < frames.length; i++) {{
    const frame = frames[i];
    const frameUrl = frame.url();
    console.log(`\\n--- FRAME ${{i}} ---`);
    console.log(`URL: ${{frameUrl}}`);
    
    try {{
      const frameText = await frame.locator('body').textContent({{ timeout: 5000 }});
      console.log(`Texto (primeros 800 chars):`);
      console.log(frameText.substring(0, 800));
      
      // Botones en este frame
      const buttons = await frame.locator('button').all();
      if (buttons.length > 0) {{
        console.log(`\\nBotones en este frame:`);
        for (let j = 0; j < buttons.length; j++) {{
          const text = await buttons[j].textContent();
          const visible = await buttons[j].isVisible().catch(() => false);
          if (visible) {{
            console.log(`  [Botón ${{j+1}}] "${{text?.trim()}}"`);
          }}
        }}
      }}
      
      // Inputs en este frame
      const inputs = await frame.locator('input').all();
      if (inputs.length > 0) {{
        console.log(`\\nInputs en este frame:`);
        for (let j = 0; j < inputs.length; j++) {{
          const type = await inputs[j].getAttribute('type');
          const placeholder = await inputs[j].getAttribute('placeholder');
          const visible = await inputs[j].isVisible().catch(() => false);
          if (visible) {{
            console.log(`  [Input ${{j+1}}] type="${{type}}" placeholder="${{placeholder}}"`);
          }}
        }}
      }}
      
      // Divs con texto
      const divs = await frame.locator('div').all();
      console.log(`\\nTotal divs: ${{divs.length}}`);
      
    }} catch (e) {{
      console.log(`Error accediendo al frame: ${{e.message}}`);
    }}
  }}
  
  await browser.close();
  console.log('\\n✓ Análisis completado');
}})();
ENDJS

node revisar_detallado.mjs

echo ""
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

