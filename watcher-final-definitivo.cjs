#!/usr/bin/env node

/**
 * WATCHER FINAL DEFINITIVO
 * Browser en background + Interceptación automática
 */

const { chromium } = require('playwright-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
const fs = require('fs')

chromium.use(StealthPlugin())

console.log('🚀 WATCHER FINAL DEFINITIVO - Browser Background + Interceptación')

class WatcherFinalDefinitivo {
  constructor() {
    this.browser = null
    this.context = null
    this.page = null
    this.running = false
    this.ciclo = 0
    this.ultimasCitas = new Map()
    
    this.config = {
      widgetUrl: 'https://www.citaconsular.es/es/hosteds/widgetdefault/28db94e270580be60f6e00285a7d8141f/bkt873048'
    }
  }

  async inicializarBrowser() {
    console.log('🌐 Inicializando browser en background...')
    
    this.browser = await chromium.launch({
      headless: true, // Background
      args: [
        '--disable-blink-features=AutomationControlled',
        '--disable-web-security',
        '--no-sandbox',
        '--disable-dev-shm-usage'
      ]
    })

    this.context = await this.browser.newContext({
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36',
      locale: 'es-ES',
      timezoneId: 'Europe/Madrid'
    })

    // Cargar cookies si existen
    try {
      const cookiesFile = fs.readFileSync('cookies-optimizadas.json', 'utf8')
      const cookiesData = JSON.parse(cookiesFile)
      await this.context.addCookies(cookiesData.cookies)
      console.log('🍪 Cookies cargadas en browser')
    } catch (e) {
      console.log('🍪 No hay cookies guardadas')
    }

    this.page = await this.context.newPage()
    
    // Configurar interceptación
    this.configurarInterceptacion()
    
    console.log('✅ Browser inicializado')
    return true
  }

  configurarInterceptacion() {
    console.log('🔧 Configurando interceptación de respuestas...')

    this.page.on('response', async (response) => {
      try {
        const url = response.url()
        console.log(`📡 Respuesta interceptada: ${url}`)

        if (url.includes('onlinebookings')) {
          console.log(`🎯 Respuesta onlinebookings: ${url}`)
          console.log(`📊 Status: ${response.status()}`)

          if (url.includes('datetime')) {
            console.log(`🎉 ¡RESPUESTA DATETIME INTERCEPTADA!`)
            console.log(`📊 Status: ${response.status()}`)

            if (response.status() === 200) {
              const text = await response.text()
              console.log(`📊 Length: ${text.length}`)
              console.log(`📝 Primeros 200 chars: ${text.substring(0, 200)}...`)

              if (text.length > 0 && !text.includes('Exception')) {
                console.log('✅ ¡DATOS VÁLIDOS CAPTURADOS!')
                this.procesarHuecos(text)
              } else {
                console.log('📭 Respuesta vacía o error')
                if (text.includes('Exception')) {
                  console.log(`❌ Exception: ${text}`)
                }
              }
            }
          }
        }
      } catch (error) {
        console.log(`❌ Error interceptando: ${error.message}`)
      }
    })

    // También interceptar requests para debug
    this.page.on('request', (request) => {
      const url = request.url()
      if (url.includes('onlinebookings')) {
        console.log(`📤 Request onlinebookings: ${url}`)
      }
    })
  }

  async consultarWidget() {
    if (!this.page) {
      console.log('❌ No hay página válida')
      return false
    }

    this.ciclo++
    console.log(`\n📡 CONSULTA WIDGET ${this.ciclo} - ${new Date().toLocaleTimeString()}`)

    try {
      // Navegar al widget con #datetime para activar las peticiones
      console.log('🔄 Navegando al widget...')
      await this.page.goto(this.config.widgetUrl + '#datetime', { 
        waitUntil: 'networkidle',
        timeout: 30000 
      })
      
      // Esperar a que se carguen las peticiones
      console.log('⏳ Esperando peticiones...')
      await this.page.waitForTimeout(10000)
      
      return true
      
    } catch (error) {
      console.log(`❌ Error en consulta: ${error.message}`)
      return false
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
        fs.writeFileSync(`huecos-final-${timestamp}.json`, JSON.stringify({
          timestamp: new Date().toISOString(),
          ciclo: this.ciclo,
          totalHuecos: huecos.length,
          huecos: huecos
        }, null, 2))
      } else {
        console.log('📭 No hay huecos disponibles')
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
    fs.writeFileSync(`ALERTA-FINAL-${timestamp}.json`, JSON.stringify({
      timestamp: new Date().toISOString(),
      tipo: 'NUEVOS_HUECOS_FINAL',
      cantidad: huecosNuevos.length,
      huecos: huecosNuevos
    }, null, 2))
    
    console.log(`🚨 Alerta guardada`)
  }

  async iniciarMonitoreoFinal() {
    console.log('\n🔄 INICIANDO MONITOREO FINAL...')
    console.log('📊 Consultas cada 30 segundos')
    console.log('🛑 Presiona Ctrl+C para detener\n')
    
    this.running = true
    
    while (this.running) {
      try {
        const resultado = await this.consultarWidget()
        
        if (!resultado) {
          console.log('⚠️ Error en consulta - Reintentando...')
          await new Promise(resolve => setTimeout(resolve, 10000))
          continue
        }
        
        console.log('⏳ Esperando 30 segundos...')
        await new Promise(resolve => setTimeout(resolve, 30000))
        
      } catch (error) {
        console.error('❌ Error en monitoreo:', error.message)
        await new Promise(resolve => setTimeout(resolve, 10000))
      }
    }
  }

  async ejecutar() {
    console.log('🚀 WATCHER FINAL DEFINITIVO - INICIANDO...')
    
    // Inicializar browser
    const browserOk = await this.inicializarBrowser()
    if (!browserOk) {
      console.log('❌ No se pudo inicializar browser')
      return
    }
    
    // Iniciar monitoreo
    await this.iniciarMonitoreoFinal()
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
const watcher = new WatcherFinalDefinitivo()

process.on('SIGINT', async () => {
  console.log('\n🛑 Deteniendo watcher...')
  watcher.stop()
  await watcher.cleanup()
  process.exit(0)
})

console.log('🚀 Iniciando Watcher Final Definitivo...')
console.log('🌐 Browser en background con interceptación automática')
console.log('📡 Navega al widget cada 30 segundos')
console.log('🎯 Intercepta respuestas datetime automáticamente\n')

watcher.ejecutar().catch(console.error)
