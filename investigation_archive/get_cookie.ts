import { chromium } from 'playwright';

// This script's only purpose is to launch a browser, visit the widget page
// to obtain a session cookie, and print it to the console.

const WIDGET_URL = 'https://www.citaconsular.es/es/hosteds/widgetdefault/2f21cd9c0d8aa26725bf8930e4691d645/bkt195382';

async function getSessionCookie() {
  console.log('[CookieFetcher] Launching browser to get a session cookie...');

  const browser = await chromium.launch({
    headless: true, // No need to see this one
    args: ['--no-sandbox', '--disable-dev-shm-usage', '--disable-blink-features=AutomationControlled'],
  });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  });
  const page = await context.newPage();

  try {
    // Navigate and perform clicks to ensure the session is fully established
    await page.goto(WIDGET_URL, { waitUntil: 'networkidle' });

    for (const frame of [page, ...page.frames()]) {
        const closeModalButton = frame.getByRole('button', { name: /Cerrar/i });
        if (await closeModalButton.first().isVisible({ timeout: 5000 }).catch(() => false)) {
            await closeModalButton.first().click();
            break;
        }
    }
    await page.waitForTimeout(500);

    for (const frame of [page, ...page.frames()]) {
        const continueButton = frame.getByRole('button', { name: /Continue|Continuar/i });
        if (await continueButton.first().isVisible({ timeout: 5000 }).catch(() => false)) {
            await continueButton.first().click();
            break;
        }
    }
    await page.waitForLoadState('networkidle');
    console.log('[CookieFetcher] Page interaction complete.');

    // Extract all cookies from the browser context
    const cookies = await context.cookies();

    if (cookies.length > 0) {
      console.log('\n✅ --- COOKIES FOUND --- ✅');
      console.log('The following cookies were found in the browser context:');
      console.dir(cookies);
    } else {
      console.error('\n❌ --- FAILED --- ❌');
      console.error('No cookies were set by the website.');
    }

  } catch (error) {
    console.error('[CookieFetcher] An error occurred:', error);
  } finally {
    await browser.close();
  }
}

getSessionCookie();
