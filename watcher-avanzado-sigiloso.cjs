
const { chromium } = require('playwright-extra');
const stealth = require('puppeteer-extra-plugin-stealth')();
const fs = require('fs');
const path = require('path');

// Use the stealth plugin
chromium.use(stealth);

const MAX_RETRIES = 10;
const RETRY_DELAY_MIN_S = 60; // 1 minute
const RETRY_DELAY_MAX_S = 300; // 5 minutes

function getRandomDelay() {
    return (Math.random() * (RETRY_DELAY_MAX_S - RETRY_DELAY_MIN_S) + RETRY_DELAY_MIN_S) * 1000;
}

async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
    let browser;
    let attempt = 0;

    while (attempt < MAX_RETRIES) {
        attempt++;
        console.log(`[INFO] Attempt ${attempt}/${MAX_RETRIES} starting...`);

        try {
            browser = await chromium.launch({
                headless: false, // Start in non-headless mode for better anti-bot evasion
                args: [
                    '--no-sandbox',
                    '--disable-setuid-sandbox',
                    '--disable-infobars',
                    '--window-position=0,0',
                    '--ignore-certifcate-errors',
                    '--ignore-certifcate-errors-spki-list',
                    '--user-agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"'
                ]
            });

            const context = await browser.newContext({
                viewport: { width: 1280, height: 800 },
                locale: 'es-ES',
            });
            const page = await context.newPage();

            let appointmentData = null;

            // Intercept the specific request that fetches appointment data
            await page.route('https://citaconsular.es/onlinebookings/datetime/', async route => {
                console.log('[INFO] Intercepted datetime request. Fetching response...');
                const response = await route.fetch();
                const body = await response.text();

                // The response is JSONP, so we need to extract the JSON part
                const match = body.match(/^jQuery\d+_\d+\((.*)\)$/);
                if (match && match[1]) {
                    try {
                        const jsonData = JSON.parse(match[1]);
                        if (jsonData.Slots && jsonData.Slots.length > 0) {
                            console.log(`[SUCCESS] Found ${jsonData.Slots.length} available slot(s)!`);
                            appointmentData = jsonData;
                            fs.writeFileSync(
                                path.join(__dirname, `citas-disponibles-${new Date().toISOString().replace(/:/g, '-')}.json`),
                                JSON.stringify(appointmentData, null, 2)
                            );
                        } else {
                            console.log('[INFO] Datetime response contained no available slots.');
                        }
                    } catch (e) {
                        console.error('[ERROR] Failed to parse JSON from datetime response.', e);
                        console.error('[ERROR] Raw response body:', body);
                    }
                } else {
                    console.warn('[WARN] Datetime response was empty or not in the expected JSONP format.');
                    console.warn('[WARN] Raw response body:', body);
                }
                // Continue the request
                route.fulfill({ response });
            });

            console.log('[INFO] Navigating to the main services page...');
            await page.goto('https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx', { waitUntil: 'networkidle', timeout: 60000 });
            await delay(3000);

            // Accept cookies if the banner is present
            const cookieButton = await page.$('#onetrust-accept-btn-handler');
            if (cookieButton) {
                console.log('[INFO] Accepting cookie policy...');
                await cookieButton.click();
                await delay(2000);
            }

            console.log('[INFO] Filling out the consular services form...');
            await page.selectOption('select#Consulado', { label: 'Cuba' });
            await delay(4000);
            await page.selectOption('select#Categoria', { label: 'Visados' });
            await delay(4000);
            await page.click('input[value="Buscar"]');

            console.log('[INFO] Waiting for popup and navigating to the appointment widget...');
            const [popup] = await Promise.all([
                page.waitForEvent('popup', { timeout: 90000 }),
                page.click('a[href*="citaconsular.es"]', { timeout: 60000 })
            ]);
            await popup.waitForLoadState('networkidle', { timeout: 90000 });
            await delay(10000);

            console.log('[INFO] Clicking the critical "Continue" button to trigger data load...');
            await popup.click('#idCaptchaButton');

            // Wait a bit for the datetime request to be triggered and intercepted
            await delay(20000);

            if (appointmentData) {
                console.log('[SUCCESS] Automation complete. Found appointments.');
                await browser.close();
                return; // Exit the script successfully
            } else {
                console.log('[INFO] No appointments found in this attempt.');
            }

        } catch (error) {
            console.error(`[ERROR] An error occurred during attempt ${attempt}:`, error);
        } finally {
            if (browser) {
                await browser.close();
            }
        }

        if (attempt < MAX_RETRIES) {
            const sleepTime = getRandomDelay();
            console.log(`[INFO] Waiting for ${Math.round(sleepTime / 1000)} seconds before next attempt...`);
            await delay(sleepTime);
        }
    }

    console.log('[FAIL] Max retries reached. No appointments found.');
}

run();
