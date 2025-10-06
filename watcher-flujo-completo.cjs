#!/usr/bin/env node

/**
 * WATCHER CON FLUJO COMPLETO
 * Hace el flujo tradicional completo para obtener sesión válida
 */

const { chromium } = require('playwright-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
const axios = require('axios')
const fs = require('fs')

chromium.use(StealthPlugin())

console.log('🏛️ WATCHER FLUJO COMPLETO - Sistema Web Tradicional')

class WatcherFlujoCompleto {
  constructor() {
    this.browser = null
    this.context = null
    this.cookies = null
    this.sessionValida = false
    this.ciclo = 0
    this.running = false
    
    // Parámetros confirmados
    this.config = {
      publicKey: '28db94e270580be60f6e00285a7d8141f',
      serviceId: 'bkt873048',
      agendaId: 'bkt307945'
    }
  }

  async init() {
    console.log('🚀 Inicializando browser para flujo tradicional...')
    
    this.browser = await chromium.launch({
      headless: false, // Visible para debug
      slowMo: 100,
      args: [
        '--disable-blink-features=AutomationControlled',
        '--no-sandbox',
        '--start-maximized'
      ]
    })

    this.context = await this.browser.newContext({
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      extraHTTPHeaders: {
        'Accept-Language': 'es-ES,es;q=0.9,en;q=0.8'
      }
    })

    console.log('✅ Browser inicializado')
  }

  async ejecutarFlujoTradicional() {
    console.log('🏛️ Ejecutando flujo tradicional completo...')

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
            console.log(`❌ Error: ${body}`)
          } else {
            console.log(`📭 Respuesta vacía`)
          }
        } catch (e) {
          console.log(`Error leyendo respuesta: ${e.message}`)
        }
      }
    })
    
    try {
      // PASO 1: Página principal
      console.log('📄 PASO 1: Navegando a servicios consulares...')
      await page.goto('https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx')
      await page.waitForLoadState('networkidle')
      await page.waitForTimeout(2000)
      
      // Aceptar cookies
      try {
        await page.getByRole('button', { name: 'Aceptar' }).click({ timeout: 5000 })
        console.log('✅ Cookies aceptadas')
        await page.waitForTimeout(1000)
      } catch (e) {
        console.log('ℹ️ No apareció banner de cookies')
      }
      
      // PASO 2: Llenar formulario
      console.log('📝 PASO 2: Llenando formulario...')
      
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
      
      // PASO 3: POST tradicional
      console.log('📮 PASO 3: Ejecutando POST tradicional...')
      await page.getByRole('button', { name: 'Buscar' }).click()
      await page.waitForLoadState('networkidle')
      await page.waitForTimeout(3000)
      
      // PASO 4: Abrir popup
      console.log('🎯 PASO 4: Abriendo popup...')
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
      
      // PASO 5: Continuar - BOTÓN ESPECÍFICO POR ID
      console.log('🔘 PASO 5: Buscando botón #idCaptchaButton...')
      try {
        // Esperar que aparezca el botón específico
        await popup.waitForSelector('#idCaptchaButton', { timeout: 15000 })
        console.log('✅ Botón #idCaptchaButton encontrado')

        // Hacer clic en el botón específico
        await popup.click('#idCaptchaButton')
        console.log('✅ Botón #idCaptchaButton clickeado')

        // Esperar que se procese
        await popup.waitForTimeout(5000)
        console.log('✅ Esperando procesamiento...')

      } catch (e) {
        console.log(`❌ Error con botón #idCaptchaButton: ${e.message}`)

        // Fallback: intentar por texto
        try {
          await popup.getByRole('button', { name: 'Continue / Continuar' }).click({ timeout: 5000 })
          console.log('✅ Botón continuar clickeado (fallback)')
          await popup.waitForTimeout(2000)
        } catch (e2) {
          console.log('❌ No se pudo encontrar ningún botón continuar')
        }
      }
      
      // PASO 6: Widget final
      console.log('🎭 PASO 6: Navegando al widget...')
      await popup.goto('https://www.citaconsular.es/es/hosteds/widgetdefault/28db94e270580be60f6e00285a7d8141f/bkt873048#datetime')
      await popup.waitForLoadState('networkidle')
      console.log(`✅ Widget cargado, URL: ${popup.url()}`)

      // PASO 7: Esperar carga y capturar datos
      console.log('⏳ PASO 7: Esperando datos de disponibilidad...')
      console.log('📡 Monitoreando peticiones de disponibilidad...')

      // Esperar en chunks para mostrar progreso
      for (let i = 1; i <= 6; i++) { // 60 segundos total
        console.log(`⏳ Esperando datos... ${i * 10}/60 segundos`)
        await popup.waitForTimeout(10000)

        // Verificar si hay elementos de citas visibles
        try {
          const huecos = await popup.locator('a:has-text("Hueco libre")').count()
          if (huecos > 0) {
            console.log(`🎉 ¡${huecos} huecos libres detectados visualmente!`)
            break
          }
        } catch (e) {
          // Continuar esperando
        }
      }
      
      // PASO 8: Obtener cookies válidas
      console.log('🍪 PASO 8: Obteniendo cookies de sesión válida...')
      this.cookies = await popup.context().cookies()
      this.sessionValida = true
      
      console.log(`✅ Sesión válida: ${this.cookies.length} cookies`)
      
      // PASO 9: Verificar citas visibles
      console.log('👀 PASO 9: Verificando huecos libres visibles...')
      try {
        const huecos = await popup.locator('a:has-text("Hueco libre")').count()
        if (huecos > 0) {
          console.log(`🎉 ¡${huecos} HUECOS LIBRES VISIBLES!`)
          
          // Obtener texto de los huecos
          const elementos = await popup.locator('a:has-text("Hueco libre")').all()
          for (let i = 0; i < Math.min(elementos.length, 5); i++) {
            try {
              const texto = await elementos[i].textContent()
              console.log(`   📅 Hueco ${i + 1}: ${texto}`)
            } catch (e) {
              console.log(`   📅 Hueco ${i + 1}: Error leyendo`)
            }
          }
        } else {
          console.log('📭 No hay huecos libres visibles')
        }
      } catch (e) {
        console.log(`Error verificando huecos: ${e.message}`)
      }
      
      return popup
      
    } catch (error) {
      console.log(`❌ Error en flujo: ${error.message}`)
      return null
    } finally {
      await page.close()
    }
  }

  procesarDisponibilidad(data) {
    console.log('🔬 PROCESANDO DATOS DE DISPONIBILIDAD...')
    
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
    const filename = `huecos-libres-${timestamp}.json`
    
    // Guardar datos crudos
    fs.writeFileSync(filename, JSON.stringify({
      timestamp: new Date().toISOString(),
      ciclo: this.ciclo,
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
        const huecosFile = `HUECOS-LIBRES-ENCONTRADOS-${timestamp}.json`
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

  async usarSesionParaConsultas(popup) {
    if (!this.sessionValida) return
    
    console.log('\n🔄 Usando sesión válida para consultas directas...')
    
    const cookieString = this.cookies.map(c => `${c.name}=${c.value}`).join('; ')
    
    for (let i = 1; i <= 5; i++) {
      console.log(`\n📡 CONSULTA DIRECTA ${i}/5 - ${new Date().toLocaleTimeString()}`)
      
      try {
        const now = new Date()
        const end = new Date(now.getTime() + (30 * 24 * 60 * 60 * 1000))
        
        const params = {
          callback: `jQuery${Date.now()}`,
          type: 'default',
          publickey: this.config.publicKey,
          lang: 'es',
          'services[]': this.config.serviceId,
          'agendas[]': this.config.agendaId,
          version: '5',
          src: 'https://www.citaconsular.es/es/hosteds/widgetdefault/28db94e270580be60f6e00285a7d8141f/bkt873048',
          srvsrc: 'https://citaconsular.es',
          start: now.toISOString().split('T')[0],
          end: end.toISOString().split('T')[0],
          selectedPeople: '1',
          _: Date.now()
        }

        const url = 'https://www.citaconsular.es/onlinebookings/datetime/?' + 
                    new URLSearchParams(params).toString()

        const response = await axios.get(url, {
          headers: {
            'Cookie': cookieString,
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
            'Accept': 'text/javascript, application/javascript, */*; q=0.01',
            'Referer': 'https://www.citaconsular.es/es/hosteds/widgetdefault/28db94e270580be60f6e00285a7d8141f/bkt873048'
          },
          timeout: 10000
        })

        console.log(`📥 Status: ${response.status}, Length: ${response.data.length}`)

        if (response.data.includes('Exception')) {
          console.log('❌ Error:', response.data.substring(0, 100))
        } else if (response.data.length > 0) {
          console.log('🎉 ¡DATOS OBTENIDOS CON SESIÓN VÁLIDA!')
          this.procesarDisponibilidad(response.data)
        } else {
          console.log('📭 Respuesta vacía')
        }

      } catch (error) {
        console.log(`❌ Error: ${error.message}`)
      }
      
      if (i < 5) {
        console.log('⏳ Esperando 15 segundos...')
        await new Promise(resolve => setTimeout(resolve, 15000))
      }
    }
  }

  async ejecutar() {
    await this.init()
    
    console.log('\n🎯 INICIANDO WATCHER CON FLUJO COMPLETO...')
    
    try {
      // Ejecutar flujo tradicional
      const popup = await this.ejecutarFlujoTradicional()
      
      if (popup && this.sessionValida) {
        // Usar sesión para consultas directas
        await this.usarSesionParaConsultas(popup)
      }
      
      console.log('\n🔍 Manteniendo browser abierto para inspección...')
      console.log('Presiona Ctrl+C para cerrar')
      
      // Mantener abierto
      await new Promise(() => {})
      
    } finally {
      // await this.browser.close()
    }
  }
}

// Ejecutar
const watcher = new WatcherFlujoCompleto()
watcher.ejecutar().catch(console.error)
