#!/usr/bin/env node

/**
 * WATCHER HUMANO PERFECTO
 * Emulación humana avanzada + Anti-detección + Gestión de sesiones
 */

const { chromium } = require('playwright-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
const fs = require('fs')

chromium.use(StealthPlugin())

console.log('🤖 WATCHER HUMANO PERFECTO - Emulación Avanzada Anti-Detección')

class WatcherHumanoPerfecto {
  constructor() {
    this.browser = null
    this.context = null
    this.page = null
    this.running = false
    this.ciclo = 0
    this.ultimasCitas = new Map()
    this.sessionFile = 'session-humano-perfecto.json'
    
    this.config = {
      widgetUrl: 'https://www.citaconsular.es/es/hosteds/widgetdefault/28db94e270580be60f6e00285a7d8141f/bkt873048'
    }
  }

  async inicializarBrowserHumano() {
    console.log('🧠 Inicializando browser con emulación humana perfecta...')
    
    this.browser = await chromium.launch({
      headless: false, // Visible para debugging inicial
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
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36',
      locale: 'es-ES',
      timezoneId: 'Europe/Madrid',
      geolocation: { latitude: 40.4168, longitude: -3.7038 }, // Madrid
      permissions: ['geolocation'],
      viewport: { width: 1920, height: 1080 },
      deviceScaleFactor: 1,
      hasTouch: false,
      isMobile: false
    })

    // Cargar sesión guardada si existe
    await this.cargarSesionGuardada()

    this.page = await this.context.newPage()
    
    // Anti-detección avanzada
    await this.aplicarAntiDeteccion()
    
    // Configurar interceptación inteligente
    this.configurarInterceptacionInteligente()
    
    console.log('✅ Browser humano inicializado')
    return true
  }

  async aplicarAntiDeteccion() {
    console.log('🛡️ Aplicando anti-detección avanzada...')
    
    await this.page.addInitScript(() => {
      // Eliminar navigator.webdriver
      Object.defineProperty(navigator, 'webdriver', {
        get: () => undefined,
      })
      
      // Inyectar window.chrome
      window.chrome = {
        runtime: {},
        loadTimes: function() {},
        csi: function() {},
        app: {}
      }
      
      // Modificar plugins
      Object.defineProperty(navigator, 'plugins', {
        get: () => [1, 2, 3, 4, 5]
      })
      
      // Simular historial de navegación
      Object.defineProperty(window.history, 'length', {
        get: () => Math.floor(Math.random() * 50) + 10
      })
      
      // Permisos realistas
      const originalQuery = window.navigator.permissions.query
      window.navigator.permissions.query = (parameters) => (
        parameters.name === 'notifications' ?
          Promise.resolve({ state: Notification.permission }) :
          originalQuery(parameters)
      )
    })
  }

  async cargarSesionGuardada() {
    try {
      if (fs.existsSync(this.sessionFile)) {
        const sessionData = JSON.parse(fs.readFileSync(this.sessionFile, 'utf8'))
        
        // Verificar si la sesión no es muy vieja (máximo 4 horas)
        const sessionAge = Date.now() - new Date(sessionData.timestamp).getTime()
        if (sessionAge < 4 * 60 * 60 * 1000) {
          console.log('🍪 Cargando sesión guardada...')
          await this.context.addCookies(sessionData.cookies)
          if (sessionData.localStorage) {
            // Cargar localStorage si existe
            await this.page.addInitScript((data) => {
              Object.keys(data).forEach(key => {
                localStorage.setItem(key, data[key])
              })
            }, sessionData.localStorage)
          }
          return true
        }
      }
      console.log('🍪 No hay sesión válida guardada')
      return false
    } catch (e) {
      console.log('🍪 Error cargando sesión:', e.message)
      return false
    }
  }

  async guardarSesion() {
    try {
      const cookies = await this.context.cookies()
      const localStorage = await this.page.evaluate(() => {
        const data = {}
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i)
          data[key] = localStorage.getItem(key)
        }
        return data
      })
      
      const sessionData = {
        timestamp: new Date().toISOString(),
        cookies: cookies,
        localStorage: localStorage
      }
      
      fs.writeFileSync(this.sessionFile, JSON.stringify(sessionData, null, 2))
      console.log('💾 Sesión guardada exitosamente')
    } catch (e) {
      console.log('❌ Error guardando sesión:', e.message)
    }
  }

  configurarInterceptacionInteligente() {
    console.log('🎯 Configurando interceptación inteligente...')
    
    this.page.on('response', async (response) => {
      try {
        const url = response.url()
        
        if (url.includes('onlinebookings/datetime')) {
          console.log(`🎉 ¡RESPUESTA DATETIME INTERCEPTADA!`)
          console.log(`📊 Status: ${response.status()}`)
          
          if (response.status() === 200) {
            const text = await response.text()
            console.log(`📊 Length: ${text.length}`)
            
            if (text.length > 0 && !text.includes('Exception')) {
              console.log('✅ ¡DATOS VÁLIDOS CAPTURADOS!')
              this.procesarHuecosInteligente(text)
            } else {
              console.log('📭 Respuesta vacía o error')
            }
          }
        }
      } catch (error) {
        console.log(`❌ Error interceptando: ${error.message}`)
      }
    })
  }

  async movimientoCurvaBeizer(fromX, fromY, toX, toY) {
    // Generar curva Bézier natural
    const cp1x = fromX + (toX - fromX) * 0.25 + (Math.random() - 0.5) * 100
    const cp1y = fromY + (toY - fromY) * 0.25 + (Math.random() - 0.5) * 100
    const cp2x = fromX + (toX - fromX) * 0.75 + (Math.random() - 0.5) * 100
    const cp2y = fromY + (toY - fromY) * 0.75 + (Math.random() - 0.5) * 100
    
    const steps = Math.floor(Math.random() * 20) + 15 // 15-35 pasos
    
    for (let i = 0; i <= steps; i++) {
      const t = i / steps
      const x = Math.pow(1-t, 3) * fromX + 
                3 * Math.pow(1-t, 2) * t * cp1x + 
                3 * (1-t) * Math.pow(t, 2) * cp2x + 
                Math.pow(t, 3) * toX
      const y = Math.pow(1-t, 3) * fromY + 
                3 * Math.pow(1-t, 2) * t * cp1y + 
                3 * (1-t) * Math.pow(t, 2) * cp2y + 
                Math.pow(t, 3) * toY
      
      await this.page.mouse.move(x, y)
      await this.esperarHumano(10, 30) // Micro-delays
    }
  }

  async typingHumano(selector, text) {
    console.log(`⌨️ Typing humano: "${text}"`)
    await this.page.focus(selector)
    
    for (const char of text) {
      await this.page.keyboard.type(char)
      // Velocidad variable de typing (80-200ms)
      await this.esperarHumano(80, 200)
    }
  }

  async scrollHumano(distance) {
    console.log(`📜 Scroll humano: ${distance}px`)
    const steps = Math.floor(Math.abs(distance) / 50) + 1
    const stepSize = distance / steps
    
    for (let i = 0; i < steps; i++) {
      await this.page.mouse.wheel(0, stepSize)
      await this.esperarHumano(50, 150)
    }
  }

  async simulacionLectura() {
    console.log('👁️ Simulando lectura con movimientos oculares...')
    const viewport = this.page.viewportSize()
    
    // Movimientos de lectura (izquierda a derecha, arriba a abajo)
    for (let i = 0; i < 3; i++) {
      const startX = viewport.width * 0.1
      const endX = viewport.width * 0.9
      const y = viewport.height * (0.3 + i * 0.2)
      
      await this.movimientoCurvaBeizer(startX, y, endX, y)
      await this.esperarHumano(500, 1500)
    }
  }

  async esperarHumano(min, max) {
    const delay = Math.floor(Math.random() * (max - min + 1)) + min
    await new Promise(resolve => setTimeout(resolve, delay))
  }

  async navegarAlWidgetHumano() {
    this.ciclo++
    console.log(`\n🧠 NAVEGACIÓN HUMANA ${this.ciclo} - ${new Date().toLocaleTimeString()}`)

    try {
      console.log('🌐 Navegando al widget con comportamiento humano...')
      
      // Navegar con timing humano
      await this.page.goto(this.config.widgetUrl, { 
        waitUntil: 'networkidle',
        timeout: 60000 
      })
      
      // Simular lectura de la página
      await this.simulacionLectura()
      
      // Scroll humano para explorar
      await this.scrollHumano(200)
      await this.esperarHumano(2000, 4000)
      
      // Navegar a datetime con comportamiento humano
      console.log('📅 Navegando a datetime...')
      await this.page.goto(this.config.widgetUrl + '#datetime', {
        waitUntil: 'networkidle',
        timeout: 30000
      })
      
      // Esperar carga completa con timing humano
      await this.esperarHumano(8000, 15000)
      
      // Guardar sesión después de navegación exitosa
      await this.guardarSesion()
      
      return true
      
    } catch (error) {
      console.log(`❌ Error en navegación humana: ${error.message}`)
      return false
    }
  }

  procesarHuecosInteligente(data) {
    try {
      // Procesar JSONP correctamente
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
          this.enviarAlertasInteligentes(cambios.nuevos)
        }
        
        // Guardar resultado timestamped
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
        fs.writeFileSync(`huecos-humano-${timestamp}.json`, JSON.stringify({
          timestamp: new Date().toISOString(),
          ciclo: this.ciclo,
          totalHuecos: huecos.length,
          huecos: huecos,
          metadata: {
            userAgent: 'humano-perfecto',
            sessionValid: true,
            antiDetection: true
          }
        }, null, 2))
      } else {
        console.log('📭 No hay huecos disponibles')
      }

      return { huecos }

    } catch (error) {
      console.log(`❌ Error procesando inteligente: ${error.message}`)
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

  enviarAlertasInteligentes(huecosNuevos) {
    console.log(`\n🚨 ¡${huecosNuevos.length} NUEVOS HUECOS DETECTADOS!`)
    
    huecosNuevos.forEach(hueco => {
      console.log(`   🎯 NUEVO: ${hueco.fecha} a las ${hueco.hora} (${hueco.huecos} disponibles)`)
    })
    
    // Guardar alerta timestamped
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
    fs.writeFileSync(`ALERTA-HUMANO-${timestamp}.json`, JSON.stringify({
      timestamp: new Date().toISOString(),
      tipo: 'NUEVOS_HUECOS_HUMANO_PERFECTO',
      cantidad: huecosNuevos.length,
      huecos: huecosNuevos,
      metadata: {
        ciclo: this.ciclo,
        emulacionHumana: true,
        antiDeteccion: true
      }
    }, null, 2))
    
    console.log(`🚨 Alerta inteligente guardada`)
  }

  async iniciarMonitoreoHumano() {
    console.log('\n🧠 INICIANDO MONITOREO HUMANO PERFECTO...')
    console.log('📊 Consultas cada 60-120 segundos (timing humano)')
    console.log('🛑 Presiona Ctrl+C para detener\n')
    
    this.running = true
    
    while (this.running) {
      try {
        const resultado = await this.navegarAlWidgetHumano()
        
        if (!resultado) {
          console.log('⚠️ Error en navegación - Reintentando...')
          await this.esperarHumano(30000, 60000)
          continue
        }
        
        // Timing humano variable (60-120 segundos)
        const waitTime = Math.floor(Math.random() * 60000) + 60000
        console.log(`⏳ Esperando ${Math.floor(waitTime/1000)} segundos (timing humano)...`)
        await new Promise(resolve => setTimeout(resolve, waitTime))
        
      } catch (error) {
        console.error('❌ Error en monitoreo humano:', error.message)
        await this.esperarHumano(60000, 120000)
      }
    }
  }

  async ejecutar() {
    console.log('🤖 WATCHER HUMANO PERFECTO - INICIANDO...')
    
    // Inicializar browser humano
    const browserOk = await this.inicializarBrowserHumano()
    if (!browserOk) {
      console.log('❌ No se pudo inicializar browser humano')
      return
    }
    
    // Iniciar monitoreo humano
    await this.iniciarMonitoreoHumano()
  }

  stop() {
    this.running = false
    console.log('🛑 Watcher humano detenido')
  }

  async cleanup() {
    if (this.browser) {
      await this.browser.close()
    }
  }
}

// Ejecutar
const watcher = new WatcherHumanoPerfecto()

process.on('SIGINT', async () => {
  console.log('\n🛑 Deteniendo watcher humano...')
  watcher.stop()
  await watcher.cleanup()
  process.exit(0)
})

console.log('🤖 Iniciando Watcher Humano Perfecto...')
console.log('🧠 Emulación humana avanzada con anti-detección')
console.log('🎯 Interceptación inteligente + Gestión de sesiones')
console.log('⚡ Timing humano variable (60-120s)\n')

watcher.ejecutar().catch(console.error)
