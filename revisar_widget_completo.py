#!/usr/bin/env python3
"""
Revisar widget con espera larga y búsqueda de iframes
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
    print(f"  Revisando WIDGET COMPLETO")
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

cat > revisar_widget.mjs <<'ENDJS'
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
  console.log('Esperando 10 segundos...');
  await page.waitForTimeout(10000);
  
  // Screenshot inicial
  await page.screenshot({{ path: 'widget_1_inicial.png', fullPage: true }});
  console.log('Screenshot 1 guardado');
  
  // Verificar HTML completo
  const html = await page.content();
  console.log('\\n=== HTML COMPLETO (primeros 3000 chars) ===');
  console.log(html.substring(0, 3000));
  console.log('\\n=== FIN HTML ===\\n');
  
  // Buscar todos los frames
  const frames = page.frames();
  console.log(`\\nTotal frames: ${{frames.length}}`);
  
  for (let i = 0; i < frames.length; i++) {{
    const frame = frames[i];
    console.log(`\\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
    console.log(`FRAME ${{i}}: ${{frame.url()}}`);
    console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
    
    try {{
      // Texto del frame
      const text = await frame.locator('body').textContent({{ timeout: 5000 }});
      console.log('\\nTexto visible:');
      console.log(text.substring(0, 2000));
      
      // Botones
      const buttons = await frame.locator('button').all();
      console.log(`\\nBotones: ${{buttons.length}}`);
      for (let j = 0; j < buttons.length; j++) {{
        const btnText = await buttons[j].textContent();
        const visible = await buttons[j].isVisible().catch(() => false);
        const disabled = await buttons[j].isDisabled().catch(() => false);
        if (visible) {{
          console.log(`  [${{j+1}}] "${{btnText?.trim()}}" (disabled: ${{disabled}})`);
        }}
      }}
      
      // Inputs
      const inputs = await frame.locator('input').all();
      console.log(`\\nInputs: ${{inputs.length}}`);
      for (let j = 0; j < inputs.length; j++) {{
        const type = await inputs[j].getAttribute('type');
        const placeholder = await inputs[j].getAttribute('placeholder');
        const name = await inputs[j].getAttribute('name');
        const visible = await inputs[j].isVisible().catch(() => false);
        if (visible) {{
          console.log(`  [${{j+1}}] type="${{type}}" name="${{name}}" placeholder="${{placeholder}}"`);
        }}
      }}
      
      // Divs con clase o id
      const divsWithClass = await frame.locator('div[class]').all();
      console.log(`\\nDivs con clase: ${{divsWithClass.length}}`);
      for (let j = 0; j < Math.min(divsWithClass.length, 20); j++) {{
        const className = await divsWithClass[j].getAttribute('class');
        const visible = await divsWithClass[j].isVisible().catch(() => false);
        if (visible && className) {{
          console.log(`  [${{j+1}}] class="${{className}}"`);
        }}
      }}
      
      // Links
      const links = await frame.locator('a').all();
      console.log(`\\nLinks: ${{links.length}}`);
      for (let j = 0; j < Math.min(links.length, 10); j++) {{
        const linkText = await links[j].textContent();
        const href = await links[j].getAttribute('href');
        const visible = await links[j].isVisible().catch(() => false);
        if (visible && linkText?.trim()) {{
          console.log(`  [${{j+1}}] "${{linkText.trim()}}" -> ${{href}}`);
        }}
      }}
      
    }} catch (e) {{
      console.log(`Error: ${{e.message}}`);
    }}
  }}
  
  await browser.close();
  console.log('\\n✓ Análisis completado');
}})();
ENDJS

node revisar_widget.mjs

echo ""
echo "════════════════════════════════════════════════════════════"
echo "Screenshots guardados en /opt/CitaConsulares/"
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

