// watcher_sigiloso.js
// Este script utiliza playwright-extra con un plugin de sigilo para intentar evadir la detección de bots.

import { chromium } from 'playwright-extra';
import stealth from 'puppeteer-extra-plugin-stealth';

// Añadir el plugin de sigilo
chromium.use(stealth());

// --- Configuración (extraída del informe y archivos) ---
const config = {
    publicKey: "28db94e270580be60f6e00285a7d8141f",
    serviceId: "bkt873048",
    country: "Cuba",
    delegation: "166",
    serviceName: "Visado de estancia (visado Schengen)",
    category: "Visados"
};

const widgetUrl = `https://www.citaconsular.es/es/hosteds/widgetdefault/${config.publicKey}/${config.serviceId}#datetime`;

async function main() {
    console.log('[+] Iniciando el watcher sigiloso...');
    const browser = await chromium.launch({
        headless: false, // Empezamos en modo no-headless para ver qué pasa
        slowMo: 50,      // Un poco de lentitud para parecer más humano
    });

    const context = await browser.newContext({
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
        viewport: { width: 1280, height: 720 },
        extraHTTPHeaders: {
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
            'Accept-Language': 'es-ES,es;q=0.9,en;q=0.8',
            'Accept-Encoding': 'gzip, deflate, br',
            'Connection': 'keep-alive',
        },
    });

    const page = await context.newPage();
    console.log(`[+] Navegando directamente al widget: ${widgetUrl}`);

    let appointmentData = null;

    page.on('response', async (response) => {
        const url = response.url();
        if (url.includes('/onlinebookings/datetime/')) {
            console.log(`[*] Petición de disponibilidad detectada: ${url}`);
            try {
                const body = await response.text();
                console.log(`[*] Longitud de la respuesta: ${body.length}`);

                if (body.length > 100) {
                    console.log('¡Respuesta parece contener datos!');
                    console.log('--- INICIO DE DATOS CRUDOS ---');
                    console.log(body);
                    console.log('--- FIN DE DATOS CRUDOS ---');
                    
                    const jsonpData = body.match(/jQuery[\d_]+\(.*\)/);
                    if (jsonpData && jsonpData[1]) {
                        appointmentData = JSON.parse(jsonpData[1]);
                        console.log('¡DATOS DE CITAS EXTRAÍDOS Y PARSEADOS!');
                    }
                } else {
                    console.log('[-] La respuesta está vacía o es muy corta. Probablemente fuimos bloqueados.');
                }
            } catch (error) {
                console.error(`[!] Error procesando la respuesta: ${error.message}`);
            }
        }
    });

    try {
        await page.goto(widgetUrl, { waitUntil: 'networkidle', timeout: 60000 });
        console.log('[+] Página del widget cargada.');

        console.log('[+] Tomando screenshot para depuración: debug_screenshot.png');
        await page.screenshot({ path: 'debug_screenshot.png', fullPage: true });
        
        const continueButton = page.locator('#idCaptchaButton');
        if (await continueButton.isVisible()) {
            console.log('[+] Boton Continue/Continuar encontrado. Haciendo clic...');
            await continueButton.click();
        } else {
            console.log('[-] No se encontró el botón "Continue". Es posible que el flujo haya cambiado.');
        }

        console.log('[+] Esperando 15 segundos para capturar todas las respuestas de red...');
        await page.waitForTimeout(15000);

        if (appointmentData) {
            console.log('\n\n✅✅✅ ¡ÉXITO! Se encontraron los siguientes datos de citas: ✅✅✅');
            console.log(JSON.stringify(appointmentData, null, 2));
        } else {
            console.log('\n\n❌❌❌ FRACASO: No se pudieron capturar los datos de las citas. Revisa los logs. ❌❌❌');
        }

    } catch (error) {
        console.error(`[!] Ocurrió un error durante la navegación: ${error.message}`);
    } finally {
        console.log('[+] Cerrando el navegador.');
        await browser.close();
    }
}

main();