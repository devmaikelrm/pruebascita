#!/usr/bin/env node

/**
 * WATCHER DEFINITIVO OPTIMIZADO
 * Basado en el análisis exhaustivo exitoso
 */

const { chromium } = require('playwright-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
const axios = require('axios')
const fs = require('fs')

chromium.use(StealthPlugin())

console.log('🚀 WATCHER DEFINITIVO OPTIMIZADO - Basado en Análisis Exitoso')

class WatcherDefinitivoOptimizado {
  constructor() {
    this.browser = null
    this.context = null
    this.cookies = null
    this.sessionValida = false
    this.running = false
    this.ciclo = 0
    this.ultimasCitas = new Map()
    
    // Parámetros exactos del análisis exitoso
    this.config = {
      publicKey: '28db94e270580be60f6e00285a7d8141f',
      serviceId: 'bkt873048',
      agendaId: 'bkt307945', // Confirmado en análisis
      baseUrl: 'https://citaconsular.es/onlinebookings/datetime/', // SIN www como en análisis exitoso
      mainUrl: 'https://citaconsular.es/onlinebookings/main/', // SIN www también
      widgetUrl: 'https://www.citaconsular.es/es/hosteds/widgetdefault/28db94e270580be60f6e00285a7d8141f/bkt873048'
    }
    
    // Timing optimizado del análisis exitoso
    this.timing = {
      navegacion: 6000,
      formulario: 4000,
      post: 8000,
      popup: 10000,
      boton: 15000,
      widget: 12000
    }
  }

  async obtenerSesionOptimizada() {
    console.log('🍪 OBTENIENDO SESIÓN CON TIMING OPTIMIZADO...')
    
    this.browser = await chromium.launch({
      headless: false, // Visible para primera sesión
      slowMo: 800, // Timing probado exitoso
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
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      locale: 'es-ES',
      timezoneId: 'Europe/Madrid',
      extraHTTPHeaders: {
        'Accept-Language': 'es-ES,es;q=0.9,en;q=0.8',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'
      }
    })

    const page = await this.context.newPage()
    
    try {
      console.log('📄 1. Navegación optimizada...')
      await page.goto('https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx')
      await page.waitForLoadState('networkidle')
      await page.waitForTimeout(this.timing.navegacion)
      
      // Cookies
      try {
        await page.getByRole('button', { name: 'Aceptar' }).click({ timeout: 5000 })
        await page.waitForTimeout(2000)
      } catch (e) {
        console.log('ℹ️ No cookies banner')
      }
      
      console.log('📝 2. Formulario optimizado...')
      await page.getByLabel('Países y territorios').selectOption('Cuba')
      await page.waitForTimeout(this.timing.formulario)
      await page.getByLabel('Categorías servicios').selectOption('Visados')
      await page.waitForTimeout(this.timing.formulario)
      await page.getByText('Delegaciones').click()
      await page.waitForTimeout(1000)
      await page.getByLabel('Delegaciones').selectOption('166')
      await page.waitForTimeout(this.timing.formulario)
      await page.getByLabel('Servicios consulares').selectOption('Visado de estancia (visado Schengen)')
      await page.waitForTimeout(this.timing.formulario)
      
      console.log('📮 3. POST optimizado...')
      await page.getByRole('button', { name: 'Buscar' }).click()
      await page.waitForLoadState('networkidle')
      await page.waitForTimeout(this.timing.post)
      
      console.log('🎯 4. Popup optimizado...')
      const [popup] = await Promise.all([
        this.context.waitForEvent('page'),
        page.getByRole('link', { name: 'Reservar cita de visado Schengen Se abre en ventana nueva' }).click()
      ])
      
      await popup.waitForLoadState('networkidle')
      await page.waitForTimeout(this.timing.popup)
      
      console.log('🔘 5. Botón optimizado...')
      try {
        await popup.waitForSelector('#idCaptchaButton', { timeout: 20000 })
        await popup.click('#idCaptchaButton')
        console.log('✅ Botón clickeado')
      } catch (e) {
        console.log(`❌ Error botón: ${e.message}`)
      }
      
      await page.waitForTimeout(this.timing.boton)
      
      console.log('🎭 6. Widget final optimizado...')
      await popup.goto(this.config.widgetUrl + '#datetime')
      await popup.waitForLoadState('networkidle')
      await page.waitForTimeout(this.timing.widget)
      
      console.log('🍪 7. Extrayendo cookies...')
      this.cookies = await popup.context().cookies()
      this.sessionValida = true
      
      console.log(`✅ Sesión válida: ${this.cookies.length} cookies`)
      
      // Guardar cookies para reutilización
      fs.writeFileSync('cookies-optimizadas.json', JSON.stringify({
        timestamp: new Date().toISOString(),
        cookies: this.cookies,
        config: this.config
      }, null, 2))
      
      await popup.close()
      await page.close()
      await this.browser.close()
      
      return true
      
    } catch (error) {
      console.log(`❌ Error: ${error.message}`)
      return false
    }
  }

  async consultarRapido() {
    if (!this.sessionValida || !this.cookies) {
      console.log('❌ No hay sesión válida')
      return null
    }

    this.ciclo++
    console.log(`\n📡 CONSULTA RÁPIDA ${this.ciclo} - ${new Date().toLocaleTimeString()}`)

    // Headers exactos del análisis exitoso - SOLO cookies de citaconsular.es
    const citaconsularCookies = this.cookies.filter(c =>
      c.domain === 'www.citaconsular.es' ||
      c.domain === '.citaconsular.es' ||
      c.domain === 'citaconsular.es'
    )
    const cookieString = citaconsularCookies.map(c => `${c.name}=${c.value}`).join('; ')
    const timestamp = Date.now()

    console.log(`🍪 Usando ${citaconsularCookies.length} cookies de citaconsular.es`)
    console.log(`🔑 Cookies: ${cookieString.substring(0, 100)}...`)

    const headers = {
      'Cookie': cookieString,
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      'Accept-Language': 'es-ES,es;q=0.9,en;q=0.8',
      'Referer': 'https://www.citaconsular.es/',
      'sec-ch-ua': '"Chromium";v="140", " Not A;Brand";v="99", "Google Chrome";v="140"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"'
    }

    try {
      // PASO 1: Activar sesión con onlinebookings/main/
      console.log('🔑 1. Activando sesión con main...')
      const mainParams = {
        callback: `jQuery211003109131453968761_${timestamp}`,
        type: 'default',
        publickey: this.config.publicKey,
        lang: 'es',
        'services[]': this.config.serviceId,
        version: '5',
        src: this.config.widgetUrl,
        _: timestamp + 1
      }

      const mainUrl = this.config.mainUrl + '?' + new URLSearchParams(mainParams).toString()

      const mainResponse = await axios.get(mainUrl, { headers, timeout: 15000 })
      console.log(`📋 Main Status: ${mainResponse.status}, Length: ${mainResponse.data.length}`)

      if (mainResponse.data.includes('Exception')) {
        console.log('❌ Sesión expirada en main')
        this.sessionValida = false
        return null
      }

      // PASO 2: Obtener citas con onlinebookings/datetime/
      console.log('📅 2. Obteniendo citas con datetime...')
      const datetimeParams = {
        callback: `jQuery211003109131453968761_${timestamp}`,
        type: 'default',
        publickey: this.config.publicKey,
        lang: 'es',
        'services[]': this.config.serviceId,
        'agendas[]': this.config.agendaId,
        version: '5',
        src: this.config.widgetUrl,
        srvsrc: 'https://citaconsular.es',
        start: '2025-10-01',
        end: '2025-10-31',
        selectedPeople: '1',
        _: timestamp + 2
      }

      const datetimeUrl = this.config.baseUrl + '?' + new URLSearchParams(datetimeParams).toString()

      const response = await axios.get(datetimeUrl, { headers, timeout: 15000 })

      console.log(`📥 Datetime Status: ${response.status}, Length: ${response.data.length}`)

      if (response.data.includes('Exception')) {
        console.log('❌ Sesión expirada en datetime')
        this.sessionValida = false
        return null
      }

      if (response.data.length === 0) {
        console.log('📭 Respuesta vacía')
        return { huecos: [] }
      }

      return this.procesarHuecos(response.data)

    } catch (error) {
      console.log(`❌ Error: ${error.message}`)
      if (error.response?.status === 403) {
        this.sessionValida = false
      }
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
        fs.writeFileSync(`huecos-${timestamp}.json`, JSON.stringify({
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
    fs.writeFileSync(`ALERTA-NUEVOS-HUECOS-${timestamp}.json`, JSON.stringify({
      timestamp: new Date().toISOString(),
      tipo: 'NUEVOS_HUECOS',
      cantidad: huecosNuevos.length,
      huecos: huecosNuevos
    }, null, 2))
    
    console.log(`🚨 Alerta guardada`)
    
    // Aquí puedes añadir:
    // - Envío de email
    // - Webhook
    // - Telegram bot
    // - Notificación de escritorio
  }

  async iniciarMonitoreoRapido() {
    console.log('\n🔄 INICIANDO MONITOREO RÁPIDO...')
    console.log('📊 Consultas cada 30 segundos')
    console.log('🛑 Presiona Ctrl+C para detener\n')
    
    this.running = true
    
    while (this.running) {
      try {
        const resultado = await this.consultarRapido()
        
        if (!resultado) {
          console.log('⚠️ Sesión expirada - Renovando...')
          const renovado = await this.obtenerSesionOptimizada()
          if (!renovado) {
            console.log('❌ No se pudo renovar sesión')
            break
          }
          continue
        }
        
        const { huecos } = resultado
        
        if (huecos.length === 0) {
          console.log('📭 No hay huecos disponibles')
        }
        
        // Renovar sesión cada 50 ciclos (25 minutos)
        if (this.ciclo % 50 === 0) {
          console.log('🔄 Renovación preventiva de sesión...')
          await this.obtenerSesionOptimizada()
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
    console.log('🚀 WATCHER DEFINITIVO OPTIMIZADO - INICIANDO...')
    
    // Intentar cargar cookies existentes
    try {
      const cookiesFile = fs.readFileSync('cookies-optimizadas.json', 'utf8')
      const cookiesData = JSON.parse(cookiesFile)
      
      // Verificar si las cookies no son muy viejas (máximo 2 horas)
      const cookieAge = Date.now() - new Date(cookiesData.timestamp).getTime()
      if (cookieAge < 2 * 60 * 60 * 1000) {
        console.log('🍪 Usando cookies guardadas...')
        this.cookies = cookiesData.cookies
        this.sessionValida = true
        
        // Ir directo al monitoreo
        await this.iniciarMonitoreoRapido()
        return
      } else {
        console.log('🍪 Cookies expiradas, obteniendo nuevas...')
      }
    } catch (e) {
      console.log('🍪 No hay cookies guardadas, obteniendo nuevas...')
    }
    
    // Obtener nueva sesión
    const sessionOk = await this.obtenerSesionOptimizada()
    if (!sessionOk) {
      console.log('❌ No se pudo obtener sesión')
      return
    }
    
    // Iniciar monitoreo
    await this.iniciarMonitoreoRapido()
  }

  stop() {
    this.running = false
    console.log('🛑 Watcher detenido')
  }
}

// Ejecutar
const watcher = new WatcherDefinitivoOptimizado()

process.on('SIGINT', async () => {
  console.log('\n🛑 Deteniendo watcher...')
  watcher.stop()
  process.exit(0)
})

console.log('🚀 Iniciando Watcher Definitivo Optimizado...')
console.log('📋 Basado en análisis exhaustivo exitoso')
console.log('⚡ Sesión una vez + Consultas rápidas cada 30s')
console.log('🍪 Reutiliza cookies guardadas si están válidas\n')

watcher.ejecutar().catch(console.error)
