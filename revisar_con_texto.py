#!/usr/bin/env python3
"""
Revisar página mostrando todo el texto y botones
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
    print(f"  Revisando TEXTO COMPLETO")
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

cat > revisar_texto.mjs <<'ENDJS'
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
  await page.waitForTimeout(5000);
  
  // Texto completo visible
  const text = await page.locator('body').textContent();
  console.log('\\n=== TEXTO COMPLETO DE LA PÁGINA ===');
  console.log(text);
  console.log('\\n=== FIN TEXTO ===\\n');
  
  // Todos los links
  console.log('\\n=== LINKS ===');
  const links = await page.locator('a').all();
  for (let i = 0; i < links.length; i++) {{
    const text = await links[i].textContent();
    const href = await links[i].getAttribute('href');
    const visible = await links[i].isVisible().catch(() => false);
    if (visible && text?.trim()) {{
      console.log(`[${{i+1}}] "${{text.trim()}}" -> ${{href}}`);
    }}
  }}
  
  // Screenshot
  await page.screenshot({{ path: 'pagina_texto.png', fullPage: true }});
  console.log('\\nScreenshot guardado: pagina_texto.png');
  
  await browser.close();
}})();
ENDJS

node revisar_texto.mjs

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

