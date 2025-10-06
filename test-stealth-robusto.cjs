#!/usr/bin/env node

/**
 * Test ROBUSTO con Playwright-Extra y Stealth Plugin
 * Maneja cierres inesperados y detecta citas
 */

const { chromium } = require('playwright-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
const fs = require('fs')

// Configurar stealth
chromium.use(StealthPlugin())

async function testCitasRobusto() {
  console.log('🥷 Iniciando test ROBUSTO con stealth...')
  
  const browser = await chromium.launch({
    headless: false,
    devtools: false,
    slowMo: 200, // Más lento para parecer humano
    args: [
      '--disable-blink-features=AutomationControlled',
      '--disable-web-security',
      '--disable-features=VizDisplayCompositor',
      '--start-maximized',
      '--no-first-run',
      '--disable-extensions-except',
      '--disable-plugins-discovery',
      '--disable-default-apps',
      '--disable-dev-shm-usage',
      '--no-sandbox'
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
  
  const handleAvailabilityResponse = async (response, source = 'main') => {
    if (response.url().includes('onlinebookings/datetime')) {
      console.log(`🎯 [${source}] ¡PETICIÓN DE DISPONIBILIDAD! Status: ${response.status()}`)
      console.log(`📍 [${source}] URL: ${response.url()}`)
      
      try {
        const body = await response.text()
        console.log(`📏 [${source}] Tamaño: ${body.length} caracteres`)
        
        if (body.length === 0) {
          console.log(`📭 [${source}] Respuesta vacía - NO HAY CITAS`)
        } else {
          console.log(`🎉 [${source}] ¡RESPUESTA CON DATOS! Analizando...`)
          
          // Guardar datos inmediatamente
          const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
          const filename = `citas-${source}-${timestamp}.json`
          
          const data = {
            timestamp: new Date().toISOString(),
            source: source,
            url: response.url(),
            status: response.status(),
            headers: response.headers(),
            body: body,
            bodyLength: body.length
          }
          
          fs.writeFileSync(filename, JSON.stringify(data, null, 2))
          console.log(`💾 [${source}] Datos guardados en: ${filename}`)
          
          // Intentar parsear JSONP
          if (body.includes('jQuery') && body.includes('(')) {
            const jsonStart = body.indexOf('(') + 1
            const jsonEnd = body.lastIndexOf(')')
            
            if (jsonStart > 0 && jsonEnd > jsonStart) {
              try {
                const jsonData = body.substring(jsonStart, jsonEnd)
                const parsedData = JSON.parse(jsonData)
                
                console.log(`✅ [${source}] Datos JSONP parseados exitosamente`)
                
                // Buscar citas
                const slots = extractSlots(parsedData)
                
                if (slots.length > 0) {
                  console.log(`🎉 [${source}] ¡${slots.length} CITAS ENCONTRADAS!`)
                  slots.forEach(slot => {
                    console.log(`   📅 ${slot.date} ${slot.time} (${slot.available} disponibles)`)
                  })
                  
                  // Guardar citas encontradas
                  const citasFile = `CITAS-ENCONTRADAS-${source}-${timestamp}.json`
                  fs.writeFileSync(citasFile, JSON.stringify({
                    timestamp: new Date().toISOString(),
                    source: source,
                    totalSlots: slots.length,
                    slots: slots,
                    rawData: parsedData
                  }, null, 2))
                  
                  console.log(`🎊 [${source}] ¡CITAS GUARDADAS EN: ${citasFile}!`)
                  
                } else {
                  console.log(`📭 [${source}] No hay citas en los datos parseados`)
                }
                
              } catch (parseError) {
                console.log(`❌ [${source}] Error parseando JSONP: ${parseError.message}`)
              }
            }
          }
          
          availabilityData.push(data)
        }
      } catch (error) {
        console.log(`❌ [${source}] Error leyendo response: ${error.message}`)
      }
    }
  }
  
  page.on('response', response => handleAvailabilityResponse(response, 'main'))
  
  try {
    console.log('🌐 Navegando a servicios consulares...')
    await page.goto('https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx')
    
    // Aceptar cookies
    try {
      await page.getByRole('button', { name: 'Aceptar' }).click({ timeout: 5000 })
      console.log('✅ Cookies aceptadas')
    } catch (e) {
      console.log('ℹ️ No apareció banner de cookies')
    }
    
    // Llenar formulario paso a paso con delays
    console.log('📝 Llenando formulario paso a paso...')
    
    await page.getByLabel('Países y territorios').selectOption('Cuba')
    await page.waitForTimeout(1000)
    console.log('✅ País: Cuba')
    
    await page.getByLabel('Categorías servicios').selectOption('Visados')
    await page.waitForTimeout(1000)
    console.log('✅ Categoría: Visados')
    
    await page.getByText('Delegaciones').click()
    await page.waitForTimeout(500)
    await page.getByLabel('Delegaciones').selectOption('166')
    await page.waitForTimeout(1000)
    console.log('✅ Delegación: 166')
    
    await page.getByLabel('Servicios consulares').selectOption('Visado de estancia (visado Schengen)')
    await page.waitForTimeout(1000)
    console.log('✅ Servicio: Turismo/Schengen')
    
    console.log('🔍 Haciendo búsqueda...')
    await page.getByRole('button', { name: 'Buscar' }).click()
    
    // Esperar resultados
    await page.waitForLoadState('networkidle')
    await page.waitForTimeout(3000)
    
    console.log('🎯 Abriendo popup de citas...')
    
    // Manejar popup de forma más robusta
    let popup = null
    try {
      const popupPromise = context.waitForEvent('page')
      await page.getByRole('link', { name: 'Reservar cita de visado Schengen Se abre en ventana nueva' }).click()
      popup = await popupPromise
      console.log('✅ Popup abierto')
      
      // Configurar listeners en el popup
      popup.on('response', response => handleAvailabilityResponse(response, 'popup'))
      
      // Manejar cierre inesperado del popup
      popup.on('close', () => {
        console.log('⚠️ Popup se cerró inesperadamente')
      })
      
    } catch (e) {
      console.log(`❌ Error abriendo popup: ${e.message}`)
      return
    }
    
    // Continuar en popup
    try {
      await popup.getByRole('button', { name: 'Continue / Continuar' }).click({ timeout: 10000 })
      console.log('✅ Botón continuar clickeado')
    } catch (e) {
      console.log('ℹ️ No apareció botón continuar')
    }
    
    console.log('🎭 Navegando al widget de citas...')
    
    // Verificar que el popup sigue abierto
    if (popup.isClosed()) {
      console.log('❌ Popup se cerró antes de navegar al widget')
      return
    }
    
    await popup.goto('https://www.citaconsular.es/es/hosteds/widgetdefault/28db94e270580be60f6e00285a7d8141f/bkt873048#datetime')
    
    console.log('⏳ Esperando que cargue el widget (60 segundos)...')
    
    // Esperar en chunks para verificar que no se cierre
    for (let i = 0; i < 12; i++) { // 12 x 5 = 60 segundos
      if (popup.isClosed()) {
        console.log(`❌ Popup se cerró después de ${i * 5} segundos`)
        return
      }
      
      console.log(`⏳ Esperando... ${(i + 1) * 5}/60 segundos`)
      await popup.waitForTimeout(5000)
    }
    
    console.log('🔍 Verificando si hay citas disponibles...')
    
    // Verificar múltiples veces
    for (let intento = 1; intento <= 3; intento++) {
      if (popup.isClosed()) {
        console.log('❌ Popup se cerró durante la búsqueda')
        return
      }
      
      console.log(`🔄 Intento ${intento}/3 - Buscando citas...`)
      
      try {
        // Buscar cualquier enlace con "Hueco libre"
        const citas = await popup.locator('a:has-text("Hueco libre")').all()
        
        if (citas.length > 0) {
          console.log(`🎉 ¡${citas.length} CITAS ENCONTRADAS!`)
          
          for (let i = 0; i < Math.min(citas.length, 5); i++) {
            try {
              const texto = await citas[i].textContent()
              console.log(`   📅 Cita ${i + 1}: ${texto}`)
            } catch (e) {
              console.log(`   📅 Cita ${i + 1}: Error leyendo texto`)
            }
          }
          
          // Hacer clic en la primera cita
          try {
            console.log('👆 Haciendo clic en primera cita para activar más peticiones...')
            await citas[0].click()
            await popup.waitForTimeout(5000)
            
            // Volver atrás
            try {
              await popup.locator('#idBktDefaultSignInContainer > .clsDivSubHeader > a > .clsDivSubHeaderBackButton').click()
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
      if (intento < 3) {
        console.log('⏳ Esperando 10 segundos antes del siguiente intento...')
        await popup.waitForTimeout(10000)
      }
    }
    
    console.log('📊 Resumen final:')
    console.log(`   📡 Peticiones de disponibilidad capturadas: ${availabilityData.length}`)
    
    const archivos = fs.readdirSync('.').filter(f => f.includes('citas-') || f.includes('CITAS-ENCONTRADAS'))
    console.log(`   🎉 Archivos generados: ${archivos.length}`)
    
    if (archivos.length > 0) {
      console.log('   📁 Archivos:')
      archivos.forEach(archivo => console.log(`      - ${archivo}`))
    }
    
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
testCitasRobusto().catch(console.error)
