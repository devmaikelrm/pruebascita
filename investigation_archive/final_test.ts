
import { chromium } from 'playwright';

// Final test script to debug the complete flow in a visible browser.

const START_URL = 'https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx';

async function finalTest() {
  console.log(`[FinalTest] Starting FULL FLOW from: ${START_URL}`);
  
  const browser = await chromium.launch({
    headless: false,
    slowMo: 100,
    args: ['--no-sandbox', '--disable-dev-shm-usage', '--disable-blink-features=AutomationControlled'],
  });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  });
  const page = await context.newPage();

  try {
    console.log('[FinalTest] Step 1: Navigating and filling form...');
    await page.goto(START_URL, { waitUntil: 'networkidle' });

    await page.getByLabel('Países y territorios').selectOption('Cuba');
    await page.getByLabel('Categorías servicios').selectOption('Certificados');
    await page.getByLabel('Delegaciones').selectOption('166');
    await page.getByLabel('Servicios consulares').selectOption('Certificado de nacimiento');
    console.log('[FinalTest] Form filled.');

    const acceptButton = page.getByRole('button', { name: 'Aceptar' });
    if(await acceptButton.isVisible({timeout: 3000})){
        console.log('[FinalTest] Clicking cookie button...');
        await acceptButton.click();
    }

    console.log('[FinalTest] Step 2: Submitting form...');
    await page.getByRole('button', { name: 'Buscar' }).click();

    console.log('[FinalTest] Step 3: Waiting for popup and clicking link...');
    await page.waitForLoadState('networkidle');
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Solicitar certificación de Nacimiento para DNI Se abre en ventana nueva' }).click();
    const page1 = await page1Promise;
    console.log('[FinalTest] Popup window opened.');

    console.log('[FinalTest] Step 4: Clicking \'Continue\' on popup...');
    await page1.waitForLoadState('domcontentloaded');
    await page1.getByRole('button', { name: 'Continue / Continuar' }).click();

    console.log('[FinalTest] Step 5: Waiting for final page to load...');
    await page1.waitForTimeout(20000); // A long wait to observe the final page
    console.log('[FinalTest] Final observation time finished.');

  } catch (error) {
    console.error('[FinalTest] An error occurred:', error);
  } finally {
    console.log('[FinalTest] Closing browser.');
    await browser.close();
  }
}

finalTest();
