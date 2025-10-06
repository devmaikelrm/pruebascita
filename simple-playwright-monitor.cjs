#!/usr/bin/env node

const { chromium } = require('playwright')
const fs = require('fs')

async function startMonitor() {
  console.log('🎭 Iniciando Playwright Monitor...')
  
  const browser = await chromium.launch({
    headless: false,
    devtools: true,
    slowMo: 100,
    args: ['--start-maximized']
  })
  
  const context = await browser.newContext({
    viewport: null
  })
  const page = await context.newPage()

  // Pausar para abrir inspector
  await page.pause()
  
  // Capturar requests
  page.on('request', request => {
    if (request.url().includes('citaconsular.es')) {
      console.log(`📡 REQUEST: ${request.method()} ${request.url()}`)
      if (request.url().includes('onlinebookings/datetime')) {
        console.log(`🎯 ¡PETICIÓN DE DISPONIBILIDAD!`)
      }
    }
  })
  
  // Capturar responses
  page.on('response', async response => {
    if (response.url().includes('onlinebookings/datetime')) {
      console.log(`📥 RESPONSE DISPONIBILIDAD: Status ${response.status()}`)
      try {
        const body = await response.text()
        console.log(`📏 Tamaño: ${body.length} caracteres`)
        
        if (body.length === 0) {
          console.log(`📭 NO HAY CITAS`)
        } else {
          console.log(`🎉 POSIBLES CITAS - Analizando...`)
          
          // Intentar parsear JSONP
          if (body.includes('jQuery') && body.includes('(')) {
            const jsonStart = body.indexOf('(') + 1
            const jsonEnd = body.lastIndexOf(')')
            if (jsonStart > 0 && jsonEnd > jsonStart) {
              try {
                const jsonData = body.substring(jsonStart, jsonEnd)
                const data = JSON.parse(jsonData)
                
                // Buscar citas
                let slots = []
                for (const [key, value] of Object.entries(data)) {
                  if (/^\d{4}-\d{2}-\d{2}$/.test(key) && Array.isArray(value)) {
                    for (const slot of value) {
                      if (slot.time && (slot.available > 0 || slot.count > 0)) {
                        slots.push({
                          date: key,
                          time: slot.time,
                          available: slot.available || slot.count
                        })
                      }
                    }
                  }
                }
                
                if (slots.length > 0) {
                  console.log(`🎉 ¡${slots.length} CITAS ENCONTRADAS!`)
                  slots.forEach(slot => {
                    console.log(`   📅 ${slot.date} ${slot.time} (${slot.available} disponibles)`)
                  })
                  
                  // Guardar datos
                  const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
                  fs.writeFileSync(`citas-encontradas-${timestamp}.json`, JSON.stringify({
                    timestamp: new Date().toISOString(),
                    slots,
                    rawData: data
                  }, null, 2))
                  
                } else {
                  console.log(`📭 No hay citas en los datos`)
                }
              } catch (e) {
                console.log(`❌ Error parseando: ${e.message}`)
              }
            }
          }
        }
      } catch (e) {
        console.log(`❌ Error leyendo response: ${e.message}`)
      }
    }
  })
  
  // Ir a la página inicial
  await page.goto('https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx')
  
  console.log('\n🎯 PLAYWRIGHT ESTÁ LISTO')
  console.log('👆 Navega manualmente en la ventana del browser')
  console.log('Presiona Ctrl+C para terminar\n')
  
  // Mantener vivo
  process.on('SIGINT', async () => {
    console.log('\n🛑 Cerrando...')
    await browser.close()
    process.exit(0)
  })
}

startMonitor().catch(console.error)
