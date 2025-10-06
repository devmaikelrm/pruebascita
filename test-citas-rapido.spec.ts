import { test, expect } from '@playwright/test';

test.setTimeout(300000); // 5 minutos

test.use({
  // Configuración stealth como HybridWatcher
  userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  viewport: { width: 1920, height: 1080 },
  extraHTTPHeaders: {
    'Accept-Language': 'es-ES,es;q=0.9,en;q=0.8',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'
  }
});

test('Capturar citas RÁPIDO', async ({ page, context }) => {
  console.log('🚀 Ejecutando tu flujo exacto...');
  
  // Capturar peticiones de disponibilidad
  page.on('response', async response => {
    if (response.url().includes('onlinebookings/datetime')) {
      console.log(`🎯 ¡PETICIÓN DE DISPONIBILIDAD! Status: ${response.status()}`);
      try {
        const body = await response.text();
        console.log(`📏 Tamaño: ${body.length} caracteres`);
        if (body.length > 0) {
          console.log(`🎉 ¡HAY DATOS! Guardando...`);
          const fs = require('fs');
          fs.writeFileSync(`citas-${Date.now()}.json`, JSON.stringify({
            url: response.url(),
            body,
            timestamp: new Date().toISOString()
          }, null, 2));
        }
      } catch (e) {
        console.log(`Error: ${e.message}`);
      }
    }
  });

  // Tu flujo exacto
  await page.goto('https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx');
  
  try {
    await page.getByRole('button', { name: 'Aceptar' }).click({ timeout: 5000 });
  } catch (e) {
    console.log('No hay banner de cookies');
  }
  
  await page.getByLabel('Países y territorios').selectOption('Cuba');
  await page.getByLabel('Categorías servicios').selectOption('Visados');
  await page.getByText('Delegaciones').click();
  await page.getByLabel('Delegaciones').selectOption('166');
  await page.getByLabel('Servicios consulares').selectOption('Visado de estancia (visado Schengen)');
  await page.getByRole('button', { name: 'Buscar' }).click();
  
  await page.goto('https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx?scco=Cuba&scd=166&scca=Visados&scs=Visado+de+estancia+(visado+Schengen)');
  
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Reservar cita de visado Schengen Se abre en ventana nueva' }).click();
  const page1 = await page1Promise;
  
  // Capturar también en el popup
  page1.on('response', async response => {
    if (response.url().includes('onlinebookings/datetime')) {
      console.log(`🎯 POPUP - ¡PETICIÓN DE DISPONIBILIDAD! Status: ${response.status()}`);
      try {
        const body = await response.text();
        console.log(`📏 POPUP - Tamaño: ${body.length} caracteres`);
        if (body.length > 0) {
          console.log(`🎉 POPUP - ¡HAY DATOS! Guardando...`);
          const fs = require('fs');
          fs.writeFileSync(`popup-citas-${Date.now()}.json`, JSON.stringify({
            url: response.url(),
            body,
            timestamp: new Date().toISOString()
          }, null, 2));
        }
      } catch (e) {
        console.log(`Error popup: ${e.message}`);
      }
    }
  });
  
  try {
    await page1.getByRole('button', { name: 'Continue / Continuar' }).click({ timeout: 10000 });
  } catch (e) {
    console.log('No hay botón continuar');
  }
  
  await page1.goto('https://www.citaconsular.es/es/hosteds/widgetdefault/28db94e270580be60f6e00285a7d8141f/bkt873048#datetime');
  
  console.log('⏳ Esperando que cargue el widget...');

  // Esperar como HybridWatcher - mucho más tiempo
  await page1.waitForTimeout(30000); // 30 segundos para que cargue todo

  console.log('🔍 Esperando peticiones de disponibilidad...');

  // Esperar específicamente a que se hagan las peticiones de disponibilidad
  let intentos = 0;
  const maxIntentos = 10;

  while (intentos < maxIntentos) {
    console.log(`🔄 Intento ${intentos + 1}/${maxIntentos} - Esperando citas...`);

    // Esperar 10 segundos más entre intentos
    await page1.waitForTimeout(10000);

    // Verificar si hay citas visibles
    const citasVisibles = await page1.locator('a:has-text("Hueco libre")').count();
    if (citasVisibles > 0) {
      console.log(`🎉 ¡${citasVisibles} citas encontradas!`);
      break;
    }

    // Forzar recarga del widget si no hay citas
    if (intentos === 3 || intentos === 6) {
      console.log('🔄 Refrescando widget...');
      await page1.reload();
      await page1.waitForTimeout(15000);
    }

    intentos++;
  }

  console.log('🔍 Análisis final de citas...');
  
  // Buscar exactamente lo que encontraste
  try {
    const citaLink = page1.getByRole('link', { name: '09:00 1 Hueco libre' });
    if (await citaLink.isVisible({ timeout: 5000 })) {
      console.log('🎉 ¡CITA 09:00 ENCONTRADA!');
      await citaLink.click();
      
      // Volver atrás
      await page1.locator('#idBktDefaultSignInContainer > .clsDivSubHeader > a > .clsDivSubHeaderBackButton').click();
      console.log('✅ Cita clickeada y vuelta atrás');
    } else {
      console.log('📭 No hay cita a las 09:00');
    }
  } catch (e) {
    console.log(`No se encontró cita específica: ${e.message}`);
  }
  
  // Buscar cualquier cita disponible
  try {
    const anyCita = page1.locator('a:has-text("Hueco libre")').first();
    if (await anyCita.isVisible({ timeout: 5000 })) {
      const texto = await anyCita.textContent();
      console.log(`🎉 ¡CITA ENCONTRADA! ${texto}`);
    } else {
      console.log('📭 No hay citas disponibles');
    }
  } catch (e) {
    console.log(`No hay citas: ${e.message}`);
  }
  
  expect(true).toBe(true);
});
