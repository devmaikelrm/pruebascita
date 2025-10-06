import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

test('Capturar citas de turismo disponibles', async ({ page }) => {
  const sessionId = `citas-capture-${Date.now()}`;
  const logDir = `logs/citas-disponibles/${sessionId}`;
  
  // Crear directorio de logs
  fs.mkdirSync(logDir, { recursive: true });
  
  const networkRequests: any[] = [];
  const availabilityData: any[] = [];
  
  // Capturar todas las requests
  page.on('request', request => {
    const requestData = {
      timestamp: new Date().toISOString(),
      url: request.url(),
      method: request.method(),
      resourceType: request.resourceType(),
      headers: request.headers(),
      postData: request.postData()
    };
    
    networkRequests.push(requestData);
    
    if (request.url().includes('citaconsular.es')) {
      console.log(`📡 REQUEST: ${request.method()} ${request.url()}`);
      if (request.url().includes('onlinebookings/datetime')) {
        console.log(`🎯 ¡PETICIÓN DE DISPONIBILIDAD DETECTADA!`);
      }
    }
  });
  
  // Capturar todas las responses
  page.on('response', async response => {
    if (response.url().includes('onlinebookings/datetime')) {
      console.log(`📥 RESPONSE DISPONIBILIDAD: Status ${response.status()}`);
      
      try {
        const body = await response.text();
        console.log(`📏 Tamaño: ${body.length} caracteres`);
        
        if (body.length === 0) {
          console.log(`📭 NO HAY CITAS`);
        } else {
          console.log(`🎉 POSIBLES CITAS - Analizando...`);
          
          // Intentar parsear JSONP
          let data = null;
          if (body.includes('jQuery') && body.includes('(')) {
            const jsonStart = body.indexOf('(') + 1;
            const jsonEnd = body.lastIndexOf(')');
            if (jsonStart > 0 && jsonEnd > jsonStart) {
              try {
                const jsonData = body.substring(jsonStart, jsonEnd);
                data = JSON.parse(jsonData);
                
                // Buscar citas
                const slots = extractSlots(data);
                
                if (slots.length > 0) {
                  console.log(`🎉 ¡${slots.length} CITAS ENCONTRADAS!`);
                  slots.forEach(slot => {
                    console.log(`   📅 ${slot.date} ${slot.time} (${slot.available} disponibles)`);
                  });
                  
                  // Guardar datos de disponibilidad
                  const availabilityRecord = {
                    timestamp: new Date().toISOString(),
                    url: response.url(),
                    rawData: data,
                    extractedSlots: slots,
                    summary: {
                      totalSlots: slots.length,
                      availableDates: [...new Set(slots.map(s => s.date))],
                      hasAvailability: true
                    }
                  };
                  
                  availabilityData.push(availabilityRecord);
                  
                  // Guardar inmediatamente
                  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
                  fs.writeFileSync(
                    path.join(logDir, `citas-encontradas-${timestamp}.json`),
                    JSON.stringify(availabilityRecord, null, 2)
                  );
                  
                } else {
                  console.log(`📭 No hay citas en los datos parseados`);
                }
              } catch (e) {
                console.log(`❌ Error parseando: ${e.message}`);
              }
            }
          }
        }
      } catch (e) {
        console.log(`❌ Error leyendo response: ${e.message}`);
      }
    }
  });
  
  // Ejecutar el flujo exacto que tienes
  console.log('🚀 Iniciando flujo de captura de citas...');
  
  await page.goto('https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx');
  
  // Aceptar cookies si aparece
  try {
    await page.getByRole('button', { name: 'Aceptar' }).click({ timeout: 5000 });
    console.log('✅ Cookies aceptadas');
  } catch (e) {
    console.log('ℹ️ No apareció banner de cookies');
  }
  
  // Seleccionar opciones
  await page.getByLabel('Países y territorios').selectOption('Cuba');
  console.log('✅ País seleccionado: Cuba');
  
  await page.getByLabel('Categorías servicios').selectOption('Visados');
  console.log('✅ Categoría seleccionada: Visados');
  
  await page.getByText('Delegaciones').click();
  await page.getByLabel('Delegaciones').selectOption('166');
  console.log('✅ Delegación seleccionada: 166');
  
  await page.getByLabel('Servicios consulares').selectOption('Visado de estancia (visado Schengen)');
  console.log('✅ Servicio seleccionado: Turismo/Schengen');
  
  await page.getByRole('button', { name: 'Buscar' }).click();
  console.log('✅ Búsqueda ejecutada');
  
  // Esperar a que cargue la página de resultados
  await page.waitForLoadState('networkidle');
  
  // Abrir popup de citas
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Reservar cita de visado Schengen Se abre en ventana nueva' }).click();
  const page1 = await page1Promise;
  console.log('✅ Popup de citas abierto');
  
  // Configurar listeners para el popup también
  page1.on('request', request => {
    if (request.url().includes('citaconsular.es')) {
      console.log(`📡 POPUP REQUEST: ${request.method()} ${request.url()}`);
    }
  });
  
  page1.on('response', async response => {
    if (response.url().includes('onlinebookings/datetime')) {
      console.log(`📥 POPUP RESPONSE DISPONIBILIDAD: Status ${response.status()}`);
      // Mismo procesamiento que arriba...
    }
  });
  
  // Continuar en el popup
  try {
    await page1.getByRole('button', { name: 'Continue / Continuar' }).click({ timeout: 10000 });
    console.log('✅ Botón Continuar clickeado');
  } catch (e) {
    console.log('ℹ️ No apareció botón Continuar');
  }
  
  // Ir directamente al widget de citas
  await page1.goto('https://www.citaconsular.es/es/hosteds/widgetdefault/28db94e270580be60f6e00285a7d8141f/bkt873048#datetime');
  console.log('✅ Widget de citas cargado');
  
  // Esperar a que se carguen las citas
  await page1.waitForLoadState('networkidle');
  await page1.waitForTimeout(5000); // Esperar 5 segundos adicionales
  
  console.log('🔍 Buscando citas disponibles...');
  
  // Intentar hacer clic en una cita si está disponible
  try {
    // Buscar cualquier enlace que contenga "Hueco libre"
    const citaLink = page1.locator('a:has-text("Hueco libre")').first();
    
    if (await citaLink.isVisible({ timeout: 5000 })) {
      const citaText = await citaLink.textContent();
      console.log(`🎉 ¡CITA ENCONTRADA! ${citaText}`);
      
      await citaLink.click();
      console.log('✅ Cita clickeada');
      
      // Volver atrás para no completar la reserva
      await page1.locator('#idBktDefaultSignInContainer > .clsDivSubHeader > a > .clsDivSubHeaderBackButton').click();
      console.log('✅ Vuelto atrás');
      
    } else {
      console.log('📭 No se encontraron citas disponibles en este momento');
    }
  } catch (e) {
    console.log(`ℹ️ No hay citas disponibles: ${e.message}`);
  }
  
  // Guardar todos los datos capturados
  const finalReport = {
    sessionId,
    timestamp: new Date().toISOString(),
    summary: {
      totalNetworkRequests: networkRequests.length,
      availabilityRequests: networkRequests.filter(r => r.url.includes('onlinebookings/datetime')).length,
      citasEncontradas: availabilityData.length
    },
    networkRequests,
    availabilityData
  };
  
  fs.writeFileSync(
    path.join(logDir, 'final-report.json'),
    JSON.stringify(finalReport, null, 2)
  );
  
  console.log(`\n📊 REPORTE FINAL:`);
  console.log(`📁 Directorio: ${logDir}`);
  console.log(`📡 Total requests: ${finalReport.summary.totalNetworkRequests}`);
  console.log(`🎯 Requests de disponibilidad: ${finalReport.summary.availabilityRequests}`);
  console.log(`🎉 Citas encontradas: ${finalReport.summary.citasEncontradas}`);
  
  // El test siempre pasa - solo estamos capturando datos
  expect(true).toBe(true);
});

function extractSlots(data: any): any[] {
  const slots: any[] = [];
  
  if (!data || typeof data !== 'object') return slots;

  // Buscar en diferentes estructuras posibles
  const searchInObject = (obj: any, parentKey = '') => {
    for (const [key, value] of Object.entries(obj)) {
      // Fechas como claves (YYYY-MM-DD)
      if (/^\d{4}-\d{2}-\d{2}$/.test(key) && Array.isArray(value)) {
        for (const slot of value) {
          if (slot && typeof slot === 'object' && slot.time) {
            const available = slot.available || slot.count || slot.slots || 1;
            if (available > 0) {
              slots.push({
                date: key,
                time: slot.time,
                available: available,
                source: parentKey || 'root'
              });
            }
          }
        }
      }
      // Buscar recursivamente en objetos
      else if (value && typeof value === 'object' && !Array.isArray(value)) {
        searchInObject(value, key);
      }
      // Buscar en arrays
      else if (Array.isArray(value)) {
        value.forEach((item, index) => {
          if (item && typeof item === 'object') {
            searchInObject(item, `${key}[${index}]`);
          }
        });
      }
    }
  };

  searchInObject(data);
  return slots;
}
