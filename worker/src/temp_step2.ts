
import { chromium } from 'playwright';

const TARGET_URL = 'https://www.cgecit.maec.es/';
const SCREENSHOT_PATH = 'c:\\Users\\Maikel\\Desktop\\CITAScONSULARES\\CitaConsulares\\worker\\step2_page.png';

async function investigateStep2() {
  console.log(`[Investigator] Navigating to ${TARGET_URL}...`);
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  try {
    await page.goto(TARGET_URL, { waitUntil: 'networkidle', timeout: 45000 });
    console.log('[Investigator] Page loaded. Taking screenshot...');
    await page.screenshot({ path: SCREENSHOT_PATH, fullPage: true });
    console.log(`[Investigator] ✅ Screenshot saved to: ${SCREENSHOT_PATH}`);
  } catch (error) {
    console.error('[Investigator] ❌ An error occurred:', error);
    console.log('A screenshot may have been saved at the point of error.');
  } finally {
    await browser.close();
  }
}

investigateStep2();

