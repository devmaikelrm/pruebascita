#!/usr/bin/env node

/**
 * TEST ULTRA SIGILOSO
 * Máxima simulación humana para evitar detección
 */

const { chromium } = require('playwright-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
const fs = require('fs')

chromium.use(StealthPlugin())

console.log('🥷 TEST ULTRA SIGILOSO - Máxima Simulación Humana')

class TestUltraSigiloso {
  constructor() {
    this.browser = null
    this.context = null
  }

  async init() {
    console.log('🚀 Inicializando modo ultra sigiloso...')
    
    this.browser = await chromium.launch({
      headless: false,
      slowMo: 500, // MUY lento para parecer humano
      args: [
        '--disable-blink-features=AutomationControlled',
        '--disable-web-security',
        '--no-sandbox',
        '--disable-dev-shm-usage',
        '--disable-features=VizDisplayCompositor',
        '--start-maximized'
      ]
    })

    this.context = await this.browser.newContext({
      viewport: null, // Usar viewport real
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      locale: 'es-ES',
      timezoneId: 'Europe/Madrid',
      extraHTTPHeaders: {
        'Accept-Language': 'es-ES,es;q=0.9,en;q=0.8',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br',
        'Cache-Control': 'max-age=0',
        'Upgrade-Insecure-Requests': '1'
      }
    })

    console.log('✅ Browser ultra sigiloso configurado')
  }

  async esperarHumano(min = 2000, max = 5000) {
    const tiempo = Math.random() * (max - min) + min
    console.log(`⏳ Esperando ${Math.round(tiempo/1000)}s (simulando humano)...`)
    await new Promise(resolve => setTimeout(resolve, tiempo))
  }

  async moverMouseHumano(page) {
    // Simular movimientos de mouse aleatorios
    for (let i = 0; i < 3; i++) {
      const x = Math.random() * 800 + 100
      const y = Math.random() * 600 + 100
      await page.mouse.move(x, y, { steps: 10 })
      await this.esperarHumano(500, 1500)
    }
  }

  async ejecutarFlujoSigiloso() {
    console.log('\n🥷 EJECUTANDO FLUJO ULTRA SIGILOSO...')

    const page = await this.context.newPage()
    
    // Capturar respuestas de disponibilidad
    page.on('response', async response => {
      if (response.url().includes('onlinebookings/datetime')) {
        console.log(`🎯 ¡RESPUESTA DE DISPONIBILIDAD DETECTADA!`)
        
        try {
          const body = await response.text()
          console.log(`📏 Tamaño: ${body.length} caracteres`)
          
          if (body.length > 0 && !body.includes('Exception')) {
            console.log(`🎉 ¡DATOS VÁLIDOS CAPTURADOS!`)
            this.procesarDisponibilidad(body)
          } else if (body.includes('Exception')) {
            console.log(`❌ Error: ${body.substring(0, 100)}`)
          } else {
            console.log(`📭 Respuesta vacía`)
          }
        } catch (e) {
          console.log(`Error leyendo respuesta: ${e.message}`)
        }
      }
    })
    
    try {
      console.log('📄 1. Navegando como humano a servicios consulares...')
      await page.goto('https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx', {
        waitUntil: 'networkidle'
      })
      
      await this.esperarHumano(3000, 6000)
      await this.moverMouseHumano(page)
      
      // Aceptar cookies como humano
      try {
        console.log('🍪 Buscando banner de cookies...')
        const cookieButton = page.getByRole('button', { name: 'Aceptar' })
        await cookieButton.waitFor({ timeout: 10000 })
        
        await this.moverMouseHumano(page)
        await cookieButton.click()
        console.log('✅ Cookies aceptadas')
        await this.esperarHumano(2000, 4000)
      } catch (e) {
        console.log('ℹ️ No apareció banner de cookies')
      }
      
      console.log('📝 2. Llenando formulario muy lentamente...')
      
      // País
      console.log('🌍 Seleccionando país...')
      await this.moverMouseHumano(page)
      const paisSelect = page.getByLabel('Países y territorios')
      await paisSelect.click()
      await this.esperarHumano(1000, 2000)
      await paisSelect.selectOption('Cuba')
      await this.esperarHumano(2000, 4000)
      console.log('✅ País: Cuba')
      
      // Categoría
      console.log('📋 Seleccionando categoría...')
      await this.moverMouseHumano(page)
      const categoriaSelect = page.getByLabel('Categorías servicios')
      await categoriaSelect.click()
      await this.esperarHumano(1000, 2000)
      await categoriaSelect.selectOption('Visados')
      await this.esperarHumano(2000, 4000)
      console.log('✅ Categoría: Visados')
      
      // Delegación
      console.log('🏢 Seleccionando delegación...')
      await this.moverMouseHumano(page)
      await page.getByText('Delegaciones').click()
      await this.esperarHumano(1000, 2000)
      const delegacionSelect = page.getByLabel('Delegaciones')
      await delegacionSelect.click()
      await this.esperarHumano(1000, 2000)
      await delegacionSelect.selectOption('166')
      await this.esperarHumano(2000, 4000)
      console.log('✅ Delegación: 166')
      
      // Servicio
      console.log('🎫 Seleccionando servicio...')
      await this.moverMouseHumano(page)
      const servicioSelect = page.getByLabel('Servicios consulares')
      await servicioSelect.click()
      await this.esperarHumano(1000, 2000)
      await servicioSelect.selectOption('Visado de estancia (visado Schengen)')
      await this.esperarHumano(3000, 5000)
      console.log('✅ Servicio: Turismo/Schengen')
      
      console.log('📮 3. Haciendo clic en Buscar...')
      await this.moverMouseHumano(page)
      const buscarButton = page.getByRole('button', { name: 'Buscar' })
      await buscarButton.click()
      
      console.log('⏳ Esperando redirección...')
      await page.waitForLoadState('networkidle')
      await this.esperarHumano(5000, 8000)
      
      console.log(`✅ POST completado, URL: ${page.url()}`)
      
      console.log('🎯 4. Abriendo popup muy cuidadosamente...')
      await this.moverMouseHumano(page)
      
      const [popup] = await Promise.all([
        this.context.waitForEvent('page'),
        page.getByRole('link', { name: 'Reservar cita de visado Schengen Se abre en ventana nueva' }).click()
      ])
      
      console.log('✅ Popup abierto')
      
      // Configurar listeners en popup
      popup.on('response', async response => {
        if (response.url().includes('onlinebookings/datetime')) {
          console.log(`🎯 POPUP - ¡RESPUESTA DE DISPONIBILIDAD!`)
          try {
            const body = await response.text()
            if (body.length > 0 && !body.includes('Exception')) {
              console.log(`🎉 POPUP - ¡DATOS VÁLIDOS!`)
              this.procesarDisponibilidad(body)
            }
          } catch (e) {
            console.log(`Error popup: ${e.message}`)
          }
        }
      })
      
      console.log('⏳ Esperando que cargue el popup...')
      await popup.waitForLoadState('networkidle')
      await this.esperarHumano(5000, 8000)
      
      console.log('🔘 5. Buscando botón Continue/Continuar...')
      
      try {
        // Intentar múltiples estrategias para encontrar el botón
        console.log('🔍 Estrategia 1: Buscar por ID #idCaptchaButton...')
        await popup.waitForSelector('#idCaptchaButton', { timeout: 15000 })
        console.log('✅ Botón #idCaptchaButton encontrado')
        
        // Simular movimiento humano antes de hacer clic
        await this.moverMouseHumano(popup)
        await popup.click('#idCaptchaButton')
        console.log('✅ Botón #idCaptchaButton clickeado')
        
      } catch (e) {
        console.log(`❌ Estrategia 1 falló: ${e.message}`)
        
        try {
          console.log('🔍 Estrategia 2: Buscar por texto...')
          const continueButton = popup.getByRole('button', { name: /Continue|Continuar/i })
          await continueButton.waitFor({ timeout: 10000 })
          await this.moverMouseHumano(popup)
          await continueButton.click()
          console.log('✅ Botón Continue clickeado')
        } catch (e2) {
          console.log(`❌ Estrategia 2 falló: ${e2.message}`)
          
          try {
            console.log('🔍 Estrategia 3: Buscar cualquier botón...')
            const botones = await popup.locator('button').all()
            console.log(`Encontrados ${botones.length} botones`)
            
            for (let i = 0; i < botones.length; i++) {
              try {
                const texto = await botones[i].textContent()
                console.log(`   Botón ${i}: "${texto}"`)
                
                if (texto && (texto.includes('Continue') || texto.includes('Continuar'))) {
                  console.log(`✅ Clickeando botón: "${texto}"`)
                  await this.moverMouseHumano(popup)
                  await botones[i].click()
                  break
                }
              } catch (e3) {
                continue
              }
            }
          } catch (e3) {
            console.log(`❌ Estrategia 3 falló: ${e3.message}`)
          }
        }
      }
      
      console.log('⏳ Esperando procesamiento del botón...')
      await this.esperarHumano(8000, 12000)
      
      console.log('🎭 6. Navegando al widget final...')
      await popup.goto('https://www.citaconsular.es/es/hosteds/widgetdefault/28db94e270580be60f6e00285a7d8141f/bkt873048#datetime')
      await popup.waitForLoadState('networkidle')
      console.log(`✅ Widget cargado: ${popup.url()}`)
      
      console.log('⏳ 7. Esperando datos de disponibilidad...')
      
      // Esperar 2 minutos capturando datos
      for (let i = 1; i <= 24; i++) { // 2 minutos
        console.log(`⏳ Esperando datos... ${i * 5}/120 segundos`)
        await popup.waitForTimeout(5000)
        
        // Verificar huecos visibles
        try {
          const huecos = await popup.locator('a:has-text("Hueco libre")').count()
          if (huecos > 0) {
            console.log(`🎉 ¡${huecos} huecos libres visibles!`)
            
            // Obtener texto de algunos huecos
            const elementos = await popup.locator('a:has-text("Hueco libre")').all()
            for (let j = 0; j < Math.min(elementos.length, 5); j++) {
              try {
                const texto = await elementos[j].textContent()
                console.log(`   📅 Hueco ${j + 1}: ${texto}`)
              } catch (e) {
                console.log(`   📅 Hueco ${j + 1}: Error leyendo`)
              }
            }
            break
          }
        } catch (e) {
          // Continuar esperando
        }
      }
      
      console.log('\n🔍 Manteniendo browser abierto para inspección...')
      console.log('Presiona Ctrl+C para cerrar')
      
      // Mantener abierto
      await new Promise(() => {})
      
    } catch (error) {
      console.log(`❌ Error: ${error.message}`)
    } finally {
      await page.close()
    }
  }

  procesarDisponibilidad(data) {
    console.log('🔬 PROCESANDO DATOS DE DISPONIBILIDAD...')
    
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
    const filename = `huecos-sigiloso-${timestamp}.json`
    
    // Guardar datos crudos
    fs.writeFileSync(filename, JSON.stringify({
      timestamp: new Date().toISOString(),
      data: data,
      dataLength: data.length
    }, null, 2))
    
    console.log(`💾 Datos guardados: ${filename}`)
    
    try {
      // Parsear JSONP
      const jsonStart = data.indexOf('(') + 1
      const jsonEnd = data.lastIndexOf(')')
      const jsonData = data.substring(jsonStart, jsonEnd)
      const parsed = JSON.parse(jsonData)
      
      console.log('✅ JSONP parseado exitosamente')
      
      const huecos = []
      
      if (parsed.Slots && Array.isArray(parsed.Slots)) {
        console.log(`📅 Analizando ${parsed.Slots.length} fechas...`)
        
        parsed.Slots.forEach(slot => {
          if (slot.times && typeof slot.times === 'object' && Object.keys(slot.times).length > 0) {
            console.log(`   📅 ${slot.date}: ${Object.keys(slot.times).length} horarios`)
            
            Object.values(slot.times).forEach(time => {
              if (time.freeSlots && time.freeSlots > 0) {
                huecos.push({
                  fecha: slot.date,
                  hora: time.time,
                  huecos: time.freeSlots
                })
                console.log(`      🕐 ${time.time}: ${time.freeSlots} huecos libres`)
              }
            })
          }
        })
      }
      
      if (huecos.length > 0) {
        console.log(`🎊 ¡${huecos.length} HUECOS LIBRES DETECTADOS!`)
        
        // Guardar huecos encontrados
        const huecosFile = `HUECOS-SIGILOSO-${timestamp}.json`
        fs.writeFileSync(huecosFile, JSON.stringify({
          timestamp: new Date().toISOString(),
          totalHuecos: huecos.length,
          huecos: huecos,
          datosCompletos: parsed
        }, null, 2))
        
        console.log(`🎊 ¡HUECOS GUARDADOS EN: ${huecosFile}!`)
        
        return huecos
      } else {
        console.log('📭 No hay huecos libres disponibles')
        return []
      }
      
    } catch (parseError) {
      console.log(`❌ Error parseando: ${parseError.message}`)
      return []
    }
  }

  async ejecutar() {
    await this.init()
    await this.ejecutarFlujoSigiloso()
  }
}

// Ejecutar
const test = new TestUltraSigiloso()
test.ejecutar().catch(console.error)
