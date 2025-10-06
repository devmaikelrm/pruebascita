#!/usr/bin/env node

/**
 * WATCHER HÍBRIDO - Browser para consultas
 * Usa browser headless para mantener contexto exacto
 */

const { chromium } = require('playwright-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
const fs = require('fs')

chromium.use(StealthPlugin())

console.log('🚀 WATCHER HÍBRIDO - Browser para Consultas')

class WatcherHibridoBrowser {
  constructor() {
    this.browser = null
    this.context = null
    this.page = null
    this.running = false
    this.ciclo = 0
    this.ultimasCitas = new Map()
    
    // Parámetros exactos del análisis exitoso
    this.config = {
      publicKey: '28db94e270580be60f6e00285a7d8141f',
      serviceId: 'bkt873048',
      agendaId: 'bkt307945',
      widgetUrl: 'https://www.citaconsular.es/es/hosteds/widgetdefault/28db94e270580be60f6e00285a7d8141f/bkt873048'
    }
  }

  async obtenerSesionCompleta() {
    console.log('🍪 OBTENIENDO SESIÓN COMPLETA CON BROWSER...')
    
    this.browser = await chromium.launch({
      headless: false, // Visible para primera sesión
      slowMo: 800,
      args: [
        '--disable-blink-features=AutomationControlled',
        '--disable-web-security',
        '--no-sandbox',
        '--disable-dev-shm-usage',
        '--start-maximized'
      ]
    })

    this.context = await this.browser.newContext({
      viewport: null,
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36',
      locale: 'es-ES',
      timezoneId: 'Europe/Madrid',
      extraHTTPHeaders: {
        'Accept-Language': 'es-ES,es;q=0.9,en;q=0.8',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'
      }
    })

    const page = await this.context.newPage()
    
    try {
      console.log('📄 1. Navegación...')
      await page.goto('https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx')
      await page.waitForLoadState('networkidle')
      await page.waitForTimeout(6000)
      
      // Cookies
      try {
        await page.getByRole('button', { name: 'Aceptar' }).click({ timeout: 5000 })
        await page.waitForTimeout(2000)
      } catch (e) {
        console.log('ℹ️ No cookies banner')
      }
      
      console.log('📝 2. Formulario...')
      await page.getByLabel('Países y territorios').selectOption('Cuba')
      await page.waitForTimeout(4000)
      await page.getByLabel('Categorías servicios').selectOption('Visados')
      await page.waitForTimeout(4000)
      await page.getByText('Delegaciones').click()
      await page.waitForTimeout(1000)
      await page.getByLabel('Delegaciones').selectOption('166')
      await page.waitForTimeout(4000)
      await page.getByLabel('Servicios consulares').selectOption('Visado de estancia (visado Schengen)')
      await page.waitForTimeout(4000)
      
      console.log('📮 3. POST...')
      await page.getByRole('button', { name: 'Buscar' }).click()
      await page.waitForLoadState('networkidle')
      await page.waitForTimeout(8000)
      
      console.log('🎯 4. Popup...')
      const [popup] = await Promise.all([
        this.context.waitForEvent('page'),
        page.getByRole('link', { name: 'Reservar cita de visado Schengen Se abre en ventana nueva' }).click()
      ])
      
      await popup.waitForLoadState('networkidle')
      await page.waitForTimeout(10000)
      
      console.log('🔘 5. Botón...')
      try {
        await popup.waitForSelector('#idCaptchaButton', { timeout: 20000 })
        await popup.click('#idCaptchaButton')
        console.log('✅ Botón clickeado')
      } catch (e) {
        console.log(`❌ Error botón: ${e.message}`)
      }
      
      await page.waitForTimeout(15000)
      
      console.log('🎭 6. Widget final...')
      await popup.goto(this.config.widgetUrl + '#datetime')
      await popup.waitForLoadState('networkidle')
      await page.waitForTimeout(12000)
      
      console.log('✅ Sesión completa obtenida')
      
      // Guardar página para consultas
      this.page = popup
      await page.close() // Cerrar página principal, mantener popup
      
      return true
      
    } catch (error) {
      console.log(`❌ Error: ${error.message}`)
      return false
    }
  }

  async consultarConBrowser() {
    if (!this.page) {
      console.log('❌ No hay página válida')
      return null
    }

    this.ciclo++
    console.log(`\n📡 CONSULTA BROWSER ${this.ciclo} - ${new Date().toLocaleTimeString()}`)

    try {
      // Interceptar respuestas de datetime
      let respuestaCapturada = null
      
      const responseHandler = (response) => {
        if (response.url().includes('onlinebookings/datetime')) {
          console.log(`📥 Respuesta datetime capturada: ${response.status()}`)
          response.text().then(text => {
            respuestaCapturada = text
            console.log(`📊 Length: ${text.length}`)
          }).catch(e => console.log('Error leyendo respuesta:', e.message))
        }
      }
      
      this.page.on('response', responseHandler)
      
      // Forzar recarga del widget para activar peticiones
      console.log('🔄 Recargando widget...')
      await this.page.goto(this.config.widgetUrl + '#datetime')
      await this.page.waitForLoadState('networkidle')
      
      // Esperar a que se capturen las respuestas
      await this.page.waitForTimeout(10000)
      
      this.page.off('response', responseHandler)
      
      if (respuestaCapturada && respuestaCapturada.length > 0) {
        console.log('✅ Respuesta capturada exitosamente')
        return this.procesarHuecos(respuestaCapturada)
      } else {
        console.log('📭 No se capturó respuesta válida')
        return { huecos: [] }
      }
      
    } catch (error) {
      console.log(`❌ Error en consulta: ${error.message}`)
      return null
    }
  }

  procesarHuecos(data) {
    try {
      const jsonStart = data.indexOf('(') + 1
      const jsonEnd = data.lastIndexOf(')')
      const jsonData = data.substring(jsonStart, jsonEnd)
      const parsed = JSON.parse(jsonData)

      const huecos = []

      if (parsed.Slots && Array.isArray(parsed.Slots)) {
        parsed.Slots.forEach(slot => {
          if (slot.times && typeof slot.times === 'object' && Object.keys(slot.times).length > 0) {
            Object.values(slot.times).forEach(time => {
              if (time.freeSlots && time.freeSlots > 0) {
                huecos.push({
                  fecha: slot.date,
                  hora: time.time,
                  huecos: time.freeSlots,
                  agenda: slot.agenda
                })
              }
            })
          }
        })
      }

      console.log(`🎯 ${huecos.length} huecos encontrados`)

      if (huecos.length > 0) {
        console.log('📋 HUECOS DISPONIBLES:')
        huecos.forEach(hueco => {
          console.log(`   📅 ${hueco.fecha} ${hueco.hora} (${hueco.huecos} libres)`)
        })
        
        // Detectar cambios
        const cambios = this.detectarCambios(huecos)
        if (cambios.nuevos.length > 0) {
          this.enviarAlertas(cambios.nuevos)
        }
        
        // Guardar resultado
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
        fs.writeFileSync(`huecos-browser-${timestamp}.json`, JSON.stringify({
          timestamp: new Date().toISOString(),
          ciclo: this.ciclo,
          totalHuecos: huecos.length,
          huecos: huecos
        }, null, 2))
      }

      return { huecos }

    } catch (error) {
      console.log(`❌ Error procesando: ${error.message}`)
      return null
    }
  }

  detectarCambios(huecosActuales) {
    const nuevos = []
    const eliminados = []
    
    const crearClave = (hueco) => `${hueco.fecha}-${hueco.hora}`
    
    // Detectar nuevos
    huecosActuales.forEach(hueco => {
      const clave = crearClave(hueco)
      if (!this.ultimasCitas.has(clave)) {
        nuevos.push(hueco)
      }
    })
    
    // Detectar eliminados
    this.ultimasCitas.forEach((huecoAnterior, clave) => {
      const existe = huecosActuales.some(hueco => crearClave(hueco) === clave)
      if (!existe) {
        eliminados.push(huecoAnterior)
      }
    })
    
    // Actualizar mapa
    this.ultimasCitas.clear()
    huecosActuales.forEach(hueco => {
      this.ultimasCitas.set(crearClave(hueco), hueco)
    })
    
    return { nuevos, eliminados }
  }

  enviarAlertas(huecosNuevos) {
    console.log(`\n🚨 ¡${huecosNuevos.length} NUEVOS HUECOS DETECTADOS!`)
    
    huecosNuevos.forEach(hueco => {
      console.log(`   🎯 NUEVO: ${hueco.fecha} a las ${hueco.hora} (${hueco.huecos} disponibles)`)
    })
    
    // Guardar alerta
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
    fs.writeFileSync(`ALERTA-BROWSER-${timestamp}.json`, JSON.stringify({
      timestamp: new Date().toISOString(),
      tipo: 'NUEVOS_HUECOS_BROWSER',
      cantidad: huecosNuevos.length,
      huecos: huecosNuevos
    }, null, 2))
    
    console.log(`🚨 Alerta guardada`)
  }

  async iniciarMonitoreoBrowser() {
    console.log('\n🔄 INICIANDO MONITOREO CON BROWSER...')
    console.log('📊 Consultas cada 60 segundos')
    console.log('🛑 Presiona Ctrl+C para detener\n')
    
    this.running = true
    
    while (this.running) {
      try {
        const resultado = await this.consultarConBrowser()
        
        if (!resultado) {
          console.log('⚠️ Error en consulta - Reintentando...')
          await new Promise(resolve => setTimeout(resolve, 10000))
          continue
        }
        
        const { huecos } = resultado
        
        if (huecos.length === 0) {
          console.log('📭 No hay huecos disponibles')
        }
        
        console.log('⏳ Esperando 60 segundos...')
        await new Promise(resolve => setTimeout(resolve, 60000))
        
      } catch (error) {
        console.error('❌ Error en monitoreo:', error.message)
        await new Promise(resolve => setTimeout(resolve, 10000))
      }
    }
  }

  async ejecutar() {
    console.log('🚀 WATCHER HÍBRIDO BROWSER - INICIANDO...')
    
    // Obtener sesión completa
    const sessionOk = await this.obtenerSesionCompleta()
    if (!sessionOk) {
      console.log('❌ No se pudo obtener sesión')
      return
    }
    
    // Iniciar monitoreo
    await this.iniciarMonitoreoBrowser()
  }

  stop() {
    this.running = false
    console.log('🛑 Watcher detenido')
  }

  async cleanup() {
    if (this.browser) {
      await this.browser.close()
    }
  }
}

// Ejecutar
const watcher = new WatcherHibridoBrowser()

process.on('SIGINT', async () => {
  console.log('\n🛑 Deteniendo watcher...')
  watcher.stop()
  await watcher.cleanup()
  process.exit(0)
})

console.log('🚀 Iniciando Watcher Híbrido Browser...')
console.log('🌐 Usa browser headless para mantener contexto exacto')
console.log('📊 Intercepta respuestas directamente del browser')
console.log('⚡ Consultas cada 60 segundos\n')

watcher.ejecutar().catch(console.error)
