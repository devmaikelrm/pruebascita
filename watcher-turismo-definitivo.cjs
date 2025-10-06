#!/usr/bin/env node

/**
 * WATCHER TURISMO DEFINITIVO
 * Usa los parámetros exactos descubiertos para monitorear citas automáticamente
 */

const { chromium } = require('playwright-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
const axios = require('axios')
const fs = require('fs')
const path = require('path')

chromium.use(StealthPlugin())

console.log('🎯 WATCHER TURISMO DEFINITIVO - PARÁMETROS CONFIRMADOS')

class WatcherTurismoDefinitivo {
  constructor() {
    this.browser = null
    this.context = null
    this.cookies = null
    this.sessionValida = false
    this.running = false
    this.ultimasCitas = new Map()
    this.contadorCiclos = 0
    
    // Parámetros exactos descubiertos
    this.config = {
      publicKey: '28db94e270580be60f6e00285a7d8141f',
      serviceId: 'bkt873048',
      agendaId: 'bkt307945', // ¡El parámetro clave!
      baseUrl: 'https://www.citaconsular.es/onlinebookings/datetime/',
      widgetUrl: 'https://www.citaconsular.es/es/hosteds/widgetdefault/28db94e270580be60f6e00285a7d8141f/bkt873048'
    }
    
    // Crear directorio de logs
    this.logDir = `logs/watcher-turismo/${new Date().toISOString().split('T')[0]}`
    fs.mkdirSync(this.logDir, { recursive: true })
  }

  async init() {
    console.log('🚀 Inicializando Watcher Definitivo...')
    
    this.browser = await chromium.launch({
      headless: true, // Modo headless para producción
      args: [
        '--disable-blink-features=AutomationControlled',
        '--disable-web-security',
        '--no-sandbox',
        '--disable-dev-shm-usage'
      ]
    })

    this.context = await this.browser.newContext({
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      extraHTTPHeaders: {
        'Accept-Language': 'es-ES,es;q=0.9,en;q=0.8',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'
      }
    })

    console.log('✅ Browser inicializado')
  }

  async obtenerSesionValida() {
    console.log('🍪 Obteniendo sesión válida...')

    const page = await this.context.newPage()
    
    try {
      // Navegar al widget para obtener cookies válidas
      await page.goto(this.config.widgetUrl)
      await page.waitForLoadState('networkidle')
      await page.waitForTimeout(10000) // Esperar que cargue completamente

      this.cookies = await page.context().cookies()
      this.sessionValida = true
      
      console.log(`✅ Sesión válida obtenida: ${this.cookies.length} cookies`)
      return true
      
    } catch (error) {
      console.log(`❌ Error obteniendo sesión: ${error.message}`)
      return false
    } finally {
      await page.close()
    }
  }

  async consultarDisponibilidad() {
    if (!this.sessionValida || !this.cookies) {
      console.log('⚠️ Renovando sesión...')
      const success = await this.obtenerSesionValida()
      if (!success) return null
    }

    const cookieString = this.cookies
      .map(cookie => `${cookie.name}=${cookie.value}`)
      .join('; ')

    // Consultar próximos 60 días
    const now = new Date()
    const end = new Date(now.getTime() + (60 * 24 * 60 * 60 * 1000))
    
    const params = {
      callback: `jQuery${Math.random().toString().replace('.', '')}${Date.now()}`,
      type: 'default',
      publickey: this.config.publicKey,
      lang: 'es',
      'services[]': this.config.serviceId,
      'agendas[]': this.config.agendaId,
      version: '5',
      src: this.config.widgetUrl,
      srvsrc: 'https://citaconsular.es',
      start: now.toISOString().split('T')[0],
      end: end.toISOString().split('T')[0],
      selectedPeople: '1',
      _: Date.now()
    }

    const url = this.config.baseUrl + '?' + new URLSearchParams(params).toString()

    try {
      console.log(`🔍 Consultando disponibilidad...`)
      
      const response = await axios.get(url, {
        headers: {
          'Cookie': cookieString,
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript, */*; q=0.01',
          'Accept-Language': 'es-ES,es;q=0.9,en;q=0.8',
          'Referer': this.config.widgetUrl,
          'X-Requested-With': 'XMLHttpRequest'
        },
        timeout: 15000
      })

      if (response.data.includes('Exception')) {
        console.log('❌ Error en respuesta, renovando sesión...')
        this.sessionValida = false
        return null
      }

      if (response.data.length === 0) {
        console.log('📭 Respuesta vacía')
        return { citas: [], fechasDisponibles: [] }
      }

      return this.procesarRespuesta(response.data)

    } catch (error) {
      if (error.response?.status === 403) {
        console.log('🔄 Error 403 - Renovando sesión...')
        this.sessionValida = false
      } else {
        console.log(`❌ Error: ${error.message}`)
      }
      return null
    }
  }

  procesarRespuesta(data) {
    try {
      // Extraer JSON del JSONP
      const jsonStart = data.indexOf('(') + 1
      const jsonEnd = data.lastIndexOf(')')
      const jsonData = data.substring(jsonStart, jsonEnd)
      const parsed = JSON.parse(jsonData)

      const citas = []
      const fechasDisponibles = []

      if (parsed.Slots && Array.isArray(parsed.Slots)) {
        parsed.Slots.forEach(slot => {
          if (slot.times && typeof slot.times === 'object' && Object.keys(slot.times).length > 0) {
            fechasDisponibles.push(slot.date)
            
            Object.values(slot.times).forEach(time => {
              if (time.freeSlots && time.freeSlots > 0) {
                citas.push({
                  fecha: slot.date,
                  hora: time.time,
                  disponibles: time.freeSlots,
                  agenda: slot.agenda
                })
              }
            })
          }
        })
      }

      // Guardar datos completos
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
      const filename = path.join(this.logDir, `consulta-${timestamp}.json`)
      
      fs.writeFileSync(filename, JSON.stringify({
        timestamp: new Date().toISOString(),
        ciclo: this.contadorCiclos,
        totalCitas: citas.length,
        fechasConCitas: fechasDisponibles.length,
        citas: citas,
        datosCompletos: parsed
      }, null, 2))

      return { citas, fechasDisponibles, datosCompletos: parsed }

    } catch (error) {
      console.log(`❌ Error procesando respuesta: ${error.message}`)
      return null
    }
  }

  detectarCambios(citasActuales) {
    const citasNuevas = []
    const citasEliminadas = []
    
    // Crear clave única para cada cita
    const crearClave = (cita) => `${cita.fecha}-${cita.hora}`
    
    // Detectar citas nuevas
    citasActuales.forEach(cita => {
      const clave = crearClave(cita)
      if (!this.ultimasCitas.has(clave)) {
        citasNuevas.push(cita)
      }
    })
    
    // Detectar citas eliminadas
    this.ultimasCitas.forEach((citaAnterior, clave) => {
      const existe = citasActuales.some(cita => crearClave(cita) === clave)
      if (!existe) {
        citasEliminadas.push(citaAnterior)
      }
    })
    
    // Actualizar mapa de últimas citas
    this.ultimasCitas.clear()
    citasActuales.forEach(cita => {
      this.ultimasCitas.set(crearClave(cita), cita)
    })
    
    return { citasNuevas, citasEliminadas }
  }

  async enviarAlertas(citasNuevas, citasEliminadas) {
    if (citasNuevas.length > 0) {
      console.log(`\n🎉 ¡${citasNuevas.length} NUEVAS CITAS DETECTADAS!`)
      
      citasNuevas.forEach(cita => {
        console.log(`   🎯 ${cita.fecha} a las ${cita.hora} (${cita.disponibles} disponibles)`)
      })
      
      // Guardar alerta
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
      const alertaFile = path.join(this.logDir, `ALERTA-NUEVAS-CITAS-${timestamp}.json`)
      
      fs.writeFileSync(alertaFile, JSON.stringify({
        timestamp: new Date().toISOString(),
        tipo: 'NUEVAS_CITAS',
        cantidad: citasNuevas.length,
        citas: citasNuevas
      }, null, 2))
      
      console.log(`🚨 Alerta guardada: ${alertaFile}`)
      
      // Aquí puedes añadir notificaciones adicionales:
      // - Enviar email
      // - Webhook
      // - Telegram bot
      // - etc.
    }
    
    if (citasEliminadas.length > 0) {
      console.log(`\n📭 ${citasEliminadas.length} citas ya no disponibles`)
    }
  }

  async cicloMonitoreo() {
    this.contadorCiclos++
    const timestamp = new Date().toLocaleTimeString()
    
    console.log(`\n🔄 CICLO ${this.contadorCiclos} - ${timestamp}`)
    
    try {
      const resultado = await this.consultarDisponibilidad()
      
      if (!resultado) {
        console.log('⚠️ No se pudo obtener datos, reintentando en el siguiente ciclo')
        return
      }
      
      const { citas, fechasDisponibles } = resultado
      
      console.log(`📊 Resultado: ${citas.length} citas en ${fechasDisponibles.length} fechas`)
      
      if (citas.length > 0) {
        console.log('📅 Fechas con citas:')
        fechasDisponibles.forEach(fecha => {
          const citasFecha = citas.filter(c => c.fecha === fecha)
          console.log(`   ${fecha}: ${citasFecha.length} horarios disponibles`)
        })
      }
      
      // Detectar cambios
      const { citasNuevas, citasEliminadas } = this.detectarCambios(citas)
      
      // Enviar alertas si hay cambios
      if (citasNuevas.length > 0 || citasEliminadas.length > 0) {
        await this.enviarAlertas(citasNuevas, citasEliminadas)
      }
      
    } catch (error) {
      console.log(`❌ Error en ciclo: ${error.message}`)
    }
  }

  async start() {
    await this.init()
    
    // Obtener sesión inicial
    const sessionOk = await this.obtenerSesionValida()
    if (!sessionOk) {
      console.log('❌ No se pudo obtener sesión inicial')
      return
    }
    
    this.running = true
    console.log('\n🎯 WATCHER TURISMO INICIADO')
    console.log(`📁 Logs en: ${this.logDir}`)
    console.log('🔄 Monitoreando cada 30 segundos...')
    
    while (this.running) {
      try {
        await this.cicloMonitoreo()
        
        // Renovar sesión cada 20 ciclos (10 minutos)
        if (this.contadorCiclos % 20 === 0) {
          console.log('🔄 Renovando sesión preventiva...')
          await this.obtenerSesionValida()
        }
        
        // Esperar 30 segundos
        console.log('⏳ Esperando 30 segundos...')
        await new Promise(resolve => setTimeout(resolve, 30000))
        
      } catch (error) {
        console.error('❌ Error en bucle principal:', error.message)
        await new Promise(resolve => setTimeout(resolve, 10000)) // Esperar menos en caso de error
      }
    }
  }

  async stop() {
    this.running = false
    if (this.browser) {
      await this.browser.close()
    }
    console.log('🛑 Watcher detenido')
  }
}

// Ejecutar
const watcher = new WatcherTurismoDefinitivo()

// Manejar señales de cierre
process.on('SIGINT', async () => {
  console.log('\n🛑 Recibida señal de cierre...')
  await watcher.stop()
  process.exit(0)
})

process.on('SIGTERM', async () => {
  console.log('\n🛑 Recibida señal de terminación...')
  await watcher.stop()
  process.exit(0)
})

// Iniciar
console.log('🎯 Iniciando Watcher Turismo Definitivo...')
console.log('📋 Configuración:')
console.log(`   PublicKey: ${watcher.config.publicKey}`)
console.log(`   Service: ${watcher.config.serviceId}`)
console.log(`   Agenda: ${watcher.config.agendaId}`)
console.log('   Intervalo: 30 segundos')
console.log('   Presiona Ctrl+C para detener\n')

watcher.start().catch(console.error)
