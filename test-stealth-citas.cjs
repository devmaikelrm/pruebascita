#!/usr/bin/env node

/**
 * Test con Playwright-Extra y Stealth Plugin
 * Igual que HybridWatcher para evitar detección de bots
 */

const { chromium } = require('playwright-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
const fs = require('fs')

// Configurar stealth
chromium.use(StealthPlugin())

async function testCitasConStealth() {
  console.log('🥷 Iniciando test con stealth anti-detección...')
  
  const browser = await chromium.launch({
    headless: false,
    devtools: false,
    slowMo: 100,
    args: [
      '--disable-blink-features=AutomationControlled',
      '--disable-web-security',
      '--disable-features=VizDisplayCompositor',
      '--start-maximized',
      '--no-first-run',
      '--disable-extensions-except',
      '--disable-plugins-discovery',
      '--disable-default-apps'
    ]
  })

  const context = await browser.newContext({
    viewport: null,
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    extraHTTPHeaders: {
      'Accept-Language': 'es-ES,es;q=0.9,en;q=0.8',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'
    }
  })

  const page = await context.newPage()
  
  // Capturar peticiones de disponibilidad
  const availabilityData = []
  
  page.on('response', async response => {
    if (response.url().includes('onlinebookings/datetime')) {
      console.log(`🎯 ¡PETICIÓN DE DISPONIBILIDAD! Status: ${response.status()}`)
      console.log(`📍 URL: ${response.url()}`)
      
      try {
        const body = await response.text()
        console.log(`📏 Tamaño: ${body.length} caracteres`)
        
        if (body.length === 0) {
          console.log(`📭 Respuesta vacía - NO HAY CITAS`)
        } else {
          console.log(`🎉 ¡RESPUESTA CON DATOS! Analizando...`)
          
          // Guardar datos inmediatamente
          const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
          const filename = `citas-stealth-${timestamp}.json`
          
          const data = {
            timestamp: new Date().toISOString(),
            url: response.url(),
            status: response.status(),
            headers: response.headers(),
            body: body,
            bodyLength: body.length
          }
          
          fs.writeFileSync(filename, JSON.stringify(data, null, 2))
          console.log(`💾 Datos guardados en: ${filename}`)
          
          // Intentar parsear JSONP
          if (body.includes('jQuery') && body.includes('(')) {
            const jsonStart = body.indexOf('(') + 1
            const jsonEnd = body.lastIndexOf(')')
            
            if (jsonStart > 0 && jsonEnd > jsonStart) {
              try {
                const jsonData = body.substring(jsonStart, jsonEnd)
                const parsedData = JSON.parse(jsonData)
                
                console.log(`✅ Datos JSONP parseados exitosamente`)
                
                // Buscar citas
                const slots = extractSlots(parsedData)
                
                if (slots.length > 0) {
                  console.log(`🎉 ¡${slots.length} CITAS ENCONTRADAS!`)
                  slots.forEach(slot => {
                    console.log(`   📅 ${slot.date} ${slot.time} (${slot.available} disponibles)`)
                  })
                  
                  // Guardar citas encontradas
                  const citasFile = `CITAS-ENCONTRADAS-${timestamp}.json`
                  fs.writeFileSync(citasFile, JSON.stringify({
                    timestamp: new Date().toISOString(),
                    totalSlots: slots.length,
                    slots: slots,
                    rawData: parsedData
                  }, null, 2))
                  
                  console.log(`🎊 ¡CITAS GUARDADAS EN: ${citasFile}!`)
                  
                } else {
                  console.log(`📭 No hay citas en los datos parseados`)
                }
                
              } catch (parseError) {
                console.log(`❌ Error parseando JSONP: ${parseError.message}`)
              }
            }
          }
          
          availabilityData.push(data)
        }
      } catch (error) {
        console.log(`❌ Error leyendo response: ${error.message}`)
      }
    }
  })
  
  try {
    console.log('🌐 Navegando a servicios consulares...')
    await page.goto('https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx')
    
    // Aceptar cookies
    try {
      await page.click('button:has-text("Aceptar")', { timeout: 5000 })
      console.log('✅ Cookies aceptadas')
    } catch (e) {
      console.log('ℹ️ No apareció banner de cookies')
    }
    
    // Llenar formulario con selectores exactos que funcionaron
    console.log('📝 Llenando formulario...')

    await page.getByLabel('Países y territorios').selectOption('Cuba')
    console.log('✅ País: Cuba')

    await page.getByLabel('Categorías servicios').selectOption('Visados')
    console.log('✅ Categoría: Visados')

    await page.getByText('Delegaciones').click()
    await page.getByLabel('Delegaciones').selectOption('166')
    console.log('✅ Delegación: 166')

    await page.getByLabel('Servicios consulares').selectOption('Visado de estancia (visado Schengen)')
    console.log('✅ Servicio: Turismo/Schengen')

    console.log('🔍 Haciendo búsqueda...')
    await page.getByRole('button', { name: 'Buscar' }).click()
    
    // Esperar resultados
    await page.waitForLoadState('networkidle')
    
    console.log('🎯 Abriendo popup de citas...')
    const [popup] = await Promise.all([
      context.waitForEvent('page'),
      page.getByRole('link', { name: 'Reservar cita de visado Schengen Se abre en ventana nueva' }).click()
    ])
    
    // Configurar listeners en el popup también
    popup.on('response', async response => {
      if (response.url().includes('onlinebookings/datetime')) {
        console.log(`🎯 POPUP - ¡PETICIÓN DE DISPONIBILIDAD! Status: ${response.status()}`)
        // Mismo procesamiento que arriba...
      }
    })
    
    console.log('✅ Popup abierto')
    
    // Continuar en popup
    try {
      await popup.getByRole('button', { name: 'Continue / Continuar' }).click({ timeout: 10000 })
      console.log('✅ Botón continuar clickeado')
    } catch (e) {
      console.log('ℹ️ No apareció botón continuar')
    }
    
    console.log('🎭 Navegando al widget de citas...')
    await popup.goto('https://www.citaconsular.es/es/hosteds/widgetdefault/28db94e270580be60f6e00285a7d8141f/bkt873048#datetime')
    
    console.log('⏳ Esperando que cargue completamente el widget...')
    
    // Esperar mucho tiempo para que cargue todo
    await popup.waitForTimeout(45000) // 45 segundos
    
    console.log('🔍 Verificando si hay citas disponibles...')
    
    // Buscar citas múltiples veces
    for (let intento = 1; intento <= 5; intento++) {
      console.log(`🔄 Intento ${intento}/5 - Buscando citas...`)
      
      try {
        // Buscar cualquier enlace con "Hueco libre"
        const citas = await popup.locator('a:has-text("Hueco libre")').all()
        
        if (citas.length > 0) {
          console.log(`🎉 ¡${citas.length} CITAS ENCONTRADAS!`)
          
          for (let i = 0; i < Math.min(citas.length, 3); i++) {
            try {
              const texto = await citas[i].textContent()
              console.log(`   📅 Cita ${i + 1}: ${texto}`)
            } catch (e) {
              console.log(`   📅 Cita ${i + 1}: Error leyendo texto`)
            }
          }
          
          // Hacer clic en la primera cita para activar más peticiones
          try {
            console.log('👆 Haciendo clic en primera cita...')
            await citas[0].click()
            await popup.waitForTimeout(3000)
            
            // Volver atrás
            try {
              await popup.click('.clsDivSubHeaderBackButton, [class*="back"], [class*="Back"]')
              console.log('⬅️ Vuelto atrás')
            } catch (e) {
              console.log('ℹ️ No se pudo volver atrás')
            }
          } catch (e) {
            console.log(`❌ Error haciendo clic: ${e.message}`)
          }
          
          break
        } else {
          console.log(`📭 No hay citas en intento ${intento}`)
        }
      } catch (e) {
        console.log(`❌ Error buscando citas: ${e.message}`)
      }
      
      // Esperar entre intentos
      if (intento < 5) {
        console.log('⏳ Esperando 15 segundos antes del siguiente intento...')
        await popup.waitForTimeout(15000)
      }
    }
    
    console.log('📊 Resumen final:')
    console.log(`   📡 Peticiones de disponibilidad capturadas: ${availabilityData.length}`)
    console.log(`   🎉 Archivos generados: ${fs.readdirSync('.').filter(f => f.includes('citas-stealth') || f.includes('CITAS-ENCONTRADAS')).length}`)
    
  } catch (error) {
    console.error('❌ Error en el flujo:', error.message)
  } finally {
    console.log('🧹 Cerrando browser...')
    await browser.close()
  }
}

function extractSlots(data) {
  const slots = []
  
  if (!data || typeof data !== 'object') return slots

  const searchInObject = (obj, parentKey = '') => {
    for (const [key, value] of Object.entries(obj)) {
      // Fechas como claves (YYYY-MM-DD)
      if (/^\d{4}-\d{2}-\d{2}$/.test(key) && Array.isArray(value)) {
        for (const slot of value) {
          if (slot && typeof slot === 'object' && slot.time) {
            const available = slot.available || slot.count || slot.slots || 1
            if (available > 0) {
              slots.push({
                date: key,
                time: slot.time,
                available: available,
                source: parentKey || 'root'
              })
            }
          }
        }
      }
      // Buscar recursivamente
      else if (value && typeof value === 'object' && !Array.isArray(value)) {
        searchInObject(value, key)
      }
      else if (Array.isArray(value)) {
        value.forEach((item, index) => {
          if (item && typeof item === 'object') {
            searchInObject(item, `${key}[${index}]`)
          }
        })
      }
    }
  }

  searchInObject(data)
  return slots
}

// Ejecutar
testCitasConStealth().catch(console.error)
