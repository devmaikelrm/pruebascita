/**
 * visual-demo.ts
 * 
 * Este script realiza una demostración visual, paso a paso, de cómo funciona
 * la estrategia del HybridWatcher. No es un monitor persistente, sino una
 * ejecución única diseñada para ser observada.
 * 
 * Uso: pnpm tsx visual-demo.ts
 */

import axios from 'axios';
import playwright from 'playwright-extra';
import stealth from 'puppeteer-extra-plugin-stealth';
import { Browser, Page } from 'playwright';
import * as fs from 'fs';

playwright.chromium.use(stealth());

// --- Configuración de la demo (Turismo/Schengen) ---
const config = {
  serviceId: 'bkt873048',
  publicKey: '28db94e270580be60f6e00285a7d8141f',
  serviceName: 'Visado de estancia (visado Schengen)',
  country: 'Cuba',
  category: 'Visados',
  delegation: '166',
};

async function visualDemo() {
  console.log('🚀 INICIANDO MODO DE CAPTURA DE TRÁFICO 🚀');
  console.log('--------------------------------------------------');
  console.log('El navegador se abrirá y cerrará automáticamente.');
  console.log('Se generará un archivo logs/trafico.json con las peticiones.');
  console.log('--------------------------------------------------');

  // Crear la carpeta de logs si no existe
  fs.mkdirSync('logs', { recursive: true });

  const capturedRequests = [];

  const browser = await playwright.chromium.launch({
    headless: false,
  });

  const context = await browser.newContext();
  
  await context.tracing.start({
    screenshots: true,
    snapshots: true,
    sources: true,
  });

  const page = await context.newPage();

  // Capturar todas las peticiones
  await page.route('**/*', route => {
    const request = route.request();
    capturedRequests.push({
      url: request.url(),
      method: request.method(),
      headers: request.headers(),
      postData: request.postData(),
    });
    route.continue();
  });

  try {
    await page.goto('https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx');

    // Esperar un tiempo para que se carguen las peticiones iniciales
    await page.waitForTimeout(5000); 

  } finally {
    console.log('Deteniendo la grabación y guardando datos...');
    fs.writeFileSync('logs/trafico.json', JSON.stringify(capturedRequests, null, 2));
    await context.tracing.stop({ path: 'trace.zip' });
    await browser.close();
    console.log('✅ Peticiones guardadas en logs/trafico.json');
    console.log('✅ Grabación de traza guardada en trace.zip');
    console.log('Para ver la traza, ejecute: pnpm playwright show-trace trace.zip');
  }
}

visualDemo();
