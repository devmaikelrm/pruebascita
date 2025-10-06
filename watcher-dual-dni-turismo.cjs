#!/usr/bin/env node

/**
 * WATCHER DUAL: DNI + TURISMO
 * Vigila ambos tipos de citas simultáneamente
 * Usa el mismo patrón de detección para ambos
 */

const { chromium } = require('playwright-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
const axios = require('axios')
const fs = require('fs')

chromium.use(StealthPlugin())

// Configuraciones para ambos tipos de citas
const CONFIGURACIONES = {
  dni: {
    nombre: 'DNI/Pasaporte',
    publicKey: '2f21cd9c0d8aa26725bf8930e4691d645',
    serviceId: 'bkt195382',
    agendaId: 'bkt307945', // Necesitamos confirmar este
    url: 'https://www.citaconsular.es/es/hosteds/widgetdefault/2f21cd9c0d8aa26725bf8930e4691d645/bkt195382',
    emoji: '🆔'
  },
  turismo: {
    nombre: 'Turismo/Schengen',
    publicKey: '28db94e270580be60f6e00285a7d8141f',
    serviceId: 'bkt873048',
    agendaId: 'bkt307945', // Usar el mismo por ahora, ajustaremos si es necesario
    url: 'https://www.citaconsular.es/es/hosteds/widgetdefault/28db94e270580be60f6e00285a7d8141f/bkt873048',
    emoji: '✈️'
  }
}

class DualWatcher {
  constructor() {
    this.browser = null
    this.context = null
    this.cookies = new Map() // Cookies por tipo
    this.lastCheck = new Map() // Último check por tipo
    this.running = false
  }

  async init() {
    console.log('🚀 Iniciando Watcher Dual (DNI + Turismo)...')
    
    this.browser = await chromium.launch({
      headless: true,
      args: [
        '--disable-blink-features=AutomationControlled',
        '--disable-web-security',
        '--no-sandbox'
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

  async obtenerCookies(tipo) {
    const config = CONFIGURACIONES[tipo]
    console.log(`${config.emoji} Obteniendo cookies para ${config.nombre}...`)

    const page = await this.context.newPage()
    
    try {
      await page.goto(config.url)
      await page.waitForLoadState('networkidle')
      await page.waitForTimeout(5000)

      const cookies = await page.context().cookies()
      this.cookies.set(tipo, cookies)
      
      console.log(`${config.emoji} ✅ Cookies obtenidas para ${config.nombre}: ${cookies.length} cookies`)
      return true
    } catch (error) {
      console.log(`${config.emoji} ❌ Error obteniendo cookies: ${error.message}`)
      return false
    } finally {
      await page.close()
    }
  }

  async checkDisponibilidad(tipo) {
    const config = CONFIGURACIONES[tipo]
    const cookies = this.cookies.get(tipo)
    
    if (!cookies || cookies.length === 0) {
      console.log(`${config.emoji} ⚠️ No hay cookies para ${config.nombre}, obteniendo...`)
      const success = await this.obtenerCookies(tipo)
      if (!success) return null
    }

    // Construir cookie string
    const cookieString = this.cookies.get(tipo)
      .map(cookie => `${cookie.name}=${cookie.value}`)
      .join('; ')

    // Parámetros para la consulta de disponibilidad
    const now = new Date()
    const endDate = new Date(now.getTime() + (90 * 24 * 60 * 60 * 1000)) // 90 días
    
    const params = {
      callback: `jQuery${Math.random().toString().replace('.', '')}${Date.now()}`,
      publickey: config.publicKey,
      'services[]': config.serviceId,
      'agendas[]': config.agendaId,
      start: now.toISOString().split('T')[0],
      end: endDate.toISOString().split('T')[0],
      _: Date.now()
    }

    const url = 'https://citaconsular.es/onlinebookings/datetime/?' + 
                new URLSearchParams(params).toString()

    try {
      console.log(`${config.emoji} 🔍 Consultando disponibilidad ${config.nombre}...`)
      
      const response = await axios.get(url, {
        headers: {
          'Cookie': cookieString,
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript, */*; q=0.01',
          'Accept-Language': 'es-ES,es;q=0.9,en;q=0.8',
          'Referer': config.url
        },
        timeout: 10000
      })

      if (response.data.length === 0) {
        console.log(`${config.emoji} 📭 No hay citas disponibles para ${config.nombre}`)
        return { tipo, disponible: false, citas: [] }
      }

      console.log(`${config.emoji} 🎉 ¡Respuesta con datos para ${config.nombre}! Analizando...`)
      
      // Parsear JSONP
      const jsonpData = response.data
      const jsonStart = jsonpData.indexOf('(') + 1
      const jsonEnd = jsonpData.lastIndexOf(')')
      
      if (jsonStart > 0 && jsonEnd > jsonStart) {
        const jsonData = jsonpData.substring(jsonStart, jsonEnd)
        const data = JSON.parse(jsonData)
        
        const slots = this.extractSlots(data)
        
        if (slots.length > 0) {
          console.log(`${config.emoji} 🎊 ¡${slots.length} CITAS ENCONTRADAS para ${config.nombre}!`)
          
          slots.forEach(slot => {
            console.log(`${config.emoji}    📅 ${slot.date} ${slot.time} (${slot.available} disponibles)`)
          })

          // Guardar citas encontradas
          const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
          const filename = `CITAS-${tipo.toUpperCase()}-${timestamp}.json`
          
          fs.writeFileSync(filename, JSON.stringify({
            timestamp: new Date().toISOString(),
            tipo: tipo,
            configuracion: config,
            totalSlots: slots.length,
            slots: slots,
            rawData: data
          }, null, 2))
          
          console.log(`${config.emoji} 💾 Citas guardadas en: ${filename}`)
          
          return { tipo, disponible: true, citas: slots, archivo: filename }
        }
      }

      return { tipo, disponible: false, citas: [] }

    } catch (error) {
      if (error.response?.status === 403) {
        console.log(`${config.emoji} 🔄 Cookies expiradas para ${config.nombre}, renovando...`)
        this.cookies.delete(tipo)
        return null
      }
      
      console.log(`${config.emoji} ❌ Error consultando ${config.nombre}: ${error.message}`)
      return null
    }
  }

  extractSlots(data) {
    const slots = []
    
    if (!data || typeof data !== 'object') return slots

    const searchInObject = (obj, parentKey = '') => {
      for (const [key, value] of Object.entries(obj)) {
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

  async cicloMonitoreo() {
    console.log('\n🔄 Iniciando ciclo de monitoreo dual...')
    
    const resultados = []
    
    // Verificar ambos tipos en paralelo
    const promesas = Object.keys(CONFIGURACIONES).map(async tipo => {
      try {
        const resultado = await this.checkDisponibilidad(tipo)
        if (resultado) {
          resultados.push(resultado)
          this.lastCheck.set(tipo, new Date())
        }
        return resultado
      } catch (error) {
        console.log(`❌ Error en ${tipo}: ${error.message}`)
        return null
      }
    })

    await Promise.all(promesas)

    // Resumen del ciclo
    const citasEncontradas = resultados.filter(r => r && r.disponible)
    
    if (citasEncontradas.length > 0) {
      console.log('\n🎉 ¡CITAS ENCONTRADAS EN ESTE CICLO!')
      citasEncontradas.forEach(resultado => {
        const config = CONFIGURACIONES[resultado.tipo]
        console.log(`${config.emoji} ${config.nombre}: ${resultado.citas.length} citas`)
      })
      
      // Aquí podrías añadir notificaciones (email, webhook, etc.)
      
    } else {
      console.log('\n📭 No hay citas disponibles en este ciclo')
    }

    // Mostrar estado
    console.log('\n📊 Estado actual:')
    Object.keys(CONFIGURACIONES).forEach(tipo => {
      const config = CONFIGURACIONES[tipo]
      const lastCheck = this.lastCheck.get(tipo)
      const cookiesCount = this.cookies.get(tipo)?.length || 0
      
      console.log(`${config.emoji} ${config.nombre}: ${cookiesCount} cookies, último check: ${lastCheck ? lastCheck.toLocaleTimeString() : 'nunca'}`)
    })
  }

  async start() {
    await this.init()
    
    // Obtener cookies iniciales para ambos tipos
    for (const tipo of Object.keys(CONFIGURACIONES)) {
      await this.obtenerCookies(tipo)
      await new Promise(resolve => setTimeout(resolve, 2000)) // Delay entre tipos
    }

    this.running = true
    console.log('\n🎯 Watcher Dual iniciado - Monitoreando DNI y Turismo...')
    
    while (this.running) {
      try {
        await this.cicloMonitoreo()
        
        // Esperar antes del siguiente ciclo (30 segundos)
        console.log('\n⏳ Esperando 30 segundos antes del siguiente ciclo...')
        await new Promise(resolve => setTimeout(resolve, 30000))
        
      } catch (error) {
        console.error('❌ Error en ciclo principal:', error.message)
        await new Promise(resolve => setTimeout(resolve, 10000)) // Esperar menos en caso de error
      }
    }
  }

  async stop() {
    this.running = false
    if (this.browser) {
      await this.browser.close()
    }
    console.log('🛑 Watcher Dual detenido')
  }
}

// Ejecutar
const watcher = new DualWatcher()

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
watcher.start().catch(console.error)
