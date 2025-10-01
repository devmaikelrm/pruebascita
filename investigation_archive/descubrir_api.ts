import { chromium } from 'playwright';

const START_URL = 'https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx';

async function discoverApi() {
  console.log(`[MasterScript] Starting FULL FLOW with all tricks from: ${START_URL}`);
  const allRequests: any[] = [];

  const browser = await chromium.launch({
    headless: false,
    slowMo: 100, // Slow down even more to seem human
    args: ['--no-sandbox', '--disable-dev-shm-usage', '--disable-blink-features=AutomationControlled'],
  });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  });
  const page = await context.newPage();

  try {
    console.log('[MasterScript] Step 1: Navigating and filling form...');
    await page.goto(START_URL, { waitUntil: 'networkidle' });

    await page.getByLabel('Países y territorios').selectOption('Cuba');
    await page.getByLabel('Categorías servicios').selectOption('Certificados');
    await page.getByLabel('Delegaciones').selectOption('166');
    await page.getByLabel('Servicios consulares').selectOption('Certificado de nacimiento');
    console.log('[MasterScript] Form filled.');

    const acceptButton = page.getByRole('button', { name: 'Aceptar' });
    if(await acceptButton.isVisible({timeout: 3000})){
        console.log('[MasterScript] Clicking cookie button...');
        await acceptButton.click();
    }

    console.log('[MasterScript] Step 2: Submitting form...');
    await page.getByRole('button', { name: 'Buscar' }).click();

    console.log('[MasterScript] Step 3: Waiting for popup and clicking link...');
    await page.waitForLoadState('networkidle');
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Solicitar certificación de Nacimiento para DNI Se abre en ventana nueva' }).click();
    const page1 = await page1Promise;
    console.log('[MasterScript] Popup window opened.');

    page1.on('response', async (response) => {
        allRequests.push({ url: response.url(), status: response.status(), contentType: response.headers()['content-type'] });
    });

    console.log('[MasterScript] Step 4: Clicking \'Continue\' on popup...');
    await page1.waitForLoadState('domcontentloaded');
    await page1.getByRole('button', { name: 'Continue / Continuar' }).click();

    console.log('[MasterScript] Step 5: Waiting for final page to load...');
    await page1.waitForTimeout(30000); // Generous wait for all requests to fire

  } catch (error) {
    console.error('[MasterScript] An error occurred:', error);
  } finally {
    console.log('\n\n--- [ FINAL NETWORK REPORT ] ---\n');
    if (allRequests.length > 0) {
      console.log(`Captured ${allRequests.length} total network requests:`);
      console.dir(allRequests, { depth: 2 });
    } else {
      console.log('No network requests were intercepted.');
    }
    console.log('\n--- [ END OF REPORT ] ---\n');

    await browser.close();
    console.log('[MasterScript] Script finished.');
  }
}

discoverApi();
