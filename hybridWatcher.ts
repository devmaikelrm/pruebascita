import axios from 'axios';
import playwright from 'playwright-extra';
import stealth from 'puppeteer-extra-plugin-stealth';
import { Browser, Page } from 'playwright';

playwright.chromium.use(stealth());

export interface HybridWatcherConfig {
  serviceId: string;
  publicKey: string;
  serviceName: string; // e.g., "Certificado de Nacimiento"
  country: string; // e.g., "Cuba"
  category: string; // e.g., "Certificados"
  delegation: string; // e.g., "166"
  onSlotsFound: (details: any) => Promise<void>;
  checkIntervalMs: number;
  sessionTtlMs?: number;
}

export class HybridWatcher {
  private config: HybridWatcherConfig;
  private sessionCookie: string | null = null;
  private sessionTimestamp: number | null = null;
  private browser: Browser | null = null;
  private timer: NodeJS.Timeout | null = null;
  private isRunning = false;

  constructor(config: HybridWatcherConfig) {
    this.config = config;
    console.log(`[HybridWatcher:${this.config.serviceName}] Creado. Intervalo: ${config.checkIntervalMs / 1000}s`);
  }

  public start() {
    if (this.isRunning) {
      console.log(`[HybridWatcher:${this.config.serviceName}] Ya está en ejecución.`);
      return;
    }
    this.isRunning = true;
    console.log(`[HybridWatcher:${this.config.serviceName}] Iniciando...`);
    this.scheduleNextCheck(0);
  }

  public stop() {
    if (!this.isRunning) return;
    this.isRunning = false;
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
    if (this.browser) {
      this.browser.close();
      this.browser = null;
    }
    this.invalidateSession();
    console.log(`[HybridWatcher:${this.config.serviceName}] Detenido.`);
  }

  private scheduleNextCheck(delay: number) {
    if (!this.isRunning) return;
    this.timer = setTimeout(() => this.runCheck(), delay);
  }

  private async runCheck() {
    try {
      if (!this.sessionCookie || this.isSessionExpired()) {
        await this.refreshSessionCookie();
      }
      await this.checkApiDirectly();
    } catch (error) {
      console.error(`[HybridWatcher:${this.config.serviceName}] Error en el ciclo de verificación:`, error);
      // Si el error es grave (ej. fallo al obtener cookie), reseteamos la cookie para forzar un refresco completo.
      this.invalidateSession();
    } finally {
      this.scheduleNextCheck(this.config.checkIntervalMs);
    }
  }

  /**
   * Paso 1: Usa Playwright "Stealth" para obtener una cookie de sesión válida.
   */
  private async refreshSessionCookie(): Promise<void> {
    console.log(`[HybridWatcher:${this.config.serviceName}] Obteniendo nueva cookie de sesión...`);
    let page: Page | null = null;
    try {
      if (!this.browser) {
        this.browser = await playwright.chromium.launch({ headless: true });
      }
      page = await this.browser.newPage();

      await page.goto('https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx');
      await page.getByLabel('Países y territorios').selectOption({ label: this.config.country });
      await page.getByLabel('Categorías servicios').selectOption({ label: this.config.category });
      await page.getByLabel('Delegaciones').selectOption(this.config.delegation);
      await page.getByLabel('Servicios consulares').selectOption({ label: this.config.serviceName });

      const page1Promise = page.waitForEvent('popup');
      await page.getByRole('button', { name: 'Buscar' }).click();
      const bookingPage = await page1Promise;

      await bookingPage.getByRole('button', { name: 'Continue / Continuar' }).click();

      // VALIDACIÓN MEJORADA: Esperar a que el widget se configure completamente
      // antes de intentar leer las cookies.
      console.log(`[HybridWatcher:${this.config.serviceName}] Esperando configuración del widget...`);
      await bookingPage.waitForResponse(
        response => response.url().includes('/onlinebookings/getwidgetconfiguration') && response.status() === 200,
        { timeout: 20000 }
      ).catch(() => {
        throw new Error('Timeout esperando la respuesta de configuración del widget. El flujo puede haber cambiado.');
      });

      await bookingPage.waitForLoadState('networkidle');

      const cookies = await bookingPage.context().cookies();
      // EXTRACCIÓN MEJORADA: Capturar todas las cookies del dominio, no solo PHPSESSID.
      const sessionCookies = cookies
        .filter(c => c.domain.includes('citaconsular.es'))
        .map(c => `${c.name}=${c.value}`)
        .join('; ');

      if (!sessionCookies) {
        throw new Error('No se pudieron obtener cookies relevantes de citaconsular.es.');
      }
      this.sessionCookie = sessionCookies;
      this.sessionTimestamp = Date.now();
      console.log(`[HybridWatcher:${this.config.serviceName}] Cookies obtenidas con éxito: ${this.sessionCookie}`);
    } finally {
      if (page) await page.close();
    }
  }

  /**
   * Paso 2: Usa axios para llamar a la API mes a mes con la cookie.
   */
  private async checkApiDirectly(): Promise<void> {
    if (!this.sessionCookie) throw new Error('No hay cookie de sesión para verificar la API.');

    const allAvailableSlots: any[] = [];
    const maxMonthsToScan = 12;

    for (let i = 0; i < maxMonthsToScan; i++) {
      const targetDate = new Date();
      targetDate.setMonth(targetDate.getMonth() + i);
      const year = targetDate.getFullYear();
      const month = targetDate.getMonth();

      const startDate = new Date(year, month, 1).toISOString().split('T')[0];
      const endDate = new Date(year, month + 1, 0).toISOString().split('T')[0];

      // SOLUCIÓN: Generar dinámicamente los parámetros 'callback' y '_' que la API espera.
      const callback = `jQuery${Math.random().toString().replace(/\./g, '')}_${Date.now()}`;
      const timestamp = Date.now();

      const url = `https://www.citaconsular.es/onlinebookings/datetime/${this.config.publicKey}/${this.config.serviceId}/${startDate}/${endDate}?callback=${callback}&_=${timestamp}`;

      const headers = {
        'Accept': 'text/javascript, application/javascript, */*; q=0.01',
        'Cookie': this.sessionCookie,
        'Referer': 'https://www.citaconsular.es/',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
        'X-Requested-With': 'XMLHttpRequest',
      };

      try {
        const response = await axios.get(url, { headers, timeout: 10000 });
        const responseText = response.data;
        
        const match = responseText.match(/^\w+\((.*)\)$/);
        if (!match) {
            console.warn(`[HybridWatcher:${this.config.serviceName}] Respuesta no es JSONP válido para ${startDate}.`);
            continue;
        }

        const data = JSON.parse(match[1]);

        // MANEJO DE EXCEPCIONES: Si la API devuelve un error, tratarlo como sesión inválida.
        if (data.Exception) {
            throw new Error(`La API devolvió una excepción: ${data.Exception?.errors?.[0]?.message || 'Error desconocido'}`);
        }

        for (const key in data) {
          if (/^\d{4}-\d{2}-\d{2}$/.test(key) && Array.isArray(data[key])) {
            const slots = data[key].map((slot: any) => ({
              time: slot.time,
              available: slot.available ?? slot.count ?? slot.slots ?? slot.huecos ?? 1
            })).filter((slot: any) => slot.time && slot.available > 0);

            if (slots.length > 0) {
              allAvailableSlots.push({ date: key, slots: slots });
            }
          }
        }
      } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 403) {
          console.warn(`[HybridWatcher:${this.config.serviceName}] Error 403. La cookie ha expirado. Refrescando...`);
          this.invalidateSession();
          return; // Salir de la exploración de meses para refrescar la cookie
        } else {
          // Cualquier otro error (incluida la excepción de la API) también fuerza un refresco.
          console.error(`[HybridWatcher:${this.config.serviceName}] Error durante la petición API. Forzando refresco de sesión.`, error.message);
          this.invalidateSession();
          return; // Salir de la exploración de meses para refrescar la cookie
        }
        console.error(`[HybridWatcher:${this.config.serviceName}] Error explorando mes ${i + 1}:`, error);
      }
    }

    if (allAvailableSlots.length > 0) {
      const totalSlots = allAvailableSlots.reduce((sum, date) => sum + date.slots.reduce((slotSum: number, slot: any) => slotSum + slot.available, 0), 0);
      console.log(`🎉 [HybridWatcher:${this.config.serviceName}] ¡CITAS ENCONTRADAS! ${totalSlots} cupos en ${allAvailableSlots.length} día(s).`);
      await this.config.onSlotsFound({ serviceName: this.config.serviceName, totalDates: allAvailableSlots.length, totalSlots: totalSlots, dates: allAvailableSlots });
    } else {
      console.log(`⏳ [HybridWatcher:${this.config.serviceName}] Sin citas disponibles en los meses explorados.`);
    }
  }

  private invalidateSession() {
    this.sessionCookie = null;
    this.sessionTimestamp = null;
  }

  private isSessionExpired(): boolean {
    if (!this.sessionTimestamp) return true;
    const ttl = this.config.sessionTtlMs ?? 10 * 60 * 1000;
    return Date.now() - this.sessionTimestamp > ttl;
  }
}
