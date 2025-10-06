#!/usr/bin/env node

/**
 * Monitor con Playwright Inspector para navegación manual
 * 
 * Esto abre Playwright Inspector donde puedes navegar manualmente
 * mientras capturo todas las peticiones de red en tiempo real
 */

const { chromium } = require('playwright-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
const fs = require('fs')
const path = require('path')

// Configurar stealth
chromium.use(StealthPlugin())

class PlaywrightInspectorMonitor {
  constructor() {
    this.sessionId = `inspector-session-${Date.now()}`
    this.logDir = `logs/playwright-inspector/${this.sessionId}`
    this.networkRequests = []
    this.consoleLogs = []
    this.availabilityData = []
    
    // Crear directorio de logs
    fs.mkdirSync(this.logDir, { recursive: true })
    
    console.log(`🎭 Playwright Inspector Monitor iniciado`)
    console.log(`📁 Logs se guardarán en: ${this.logDir}`)
  }

  async start() {
    try {
      console.log('🚀 Iniciando Playwright con Inspector...')
      
      // Lanzar browser con inspector
      this.browser = await chromium.launch({
        headless: false,
        devtools: true, // Abrir DevTools
        slowMo: 100,
        args: [
          '--disable-blink-features=AutomationControlled',
          '--disable-web-security',
          '--disable-features=VizDisplayCompositor',
          '--start-maximized'
        ]
      })

      this.context = await this.browser.newContext({
        viewport: null,
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        extraHTTPHeaders: {
          'Accept-Language': 'es-ES,es;q=0.9,en;q=0.8'
        }
      })

      this.page = await this.context.newPage()
      
      // Configurar listeners para capturar todo
      await this.setupNetworkMonitoring()
      await this.setupConsoleMonitoring()
      
      // Navegar a la página inicial
      console.log('📄 Navegando a la página de servicios consulares...')
      await this.page.goto('https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx')
      
      console.log('\n' + '='.repeat(70))
      console.log('🎯 PLAYWRIGHT INSPECTOR ESTÁ LISTO')
      console.log('='.repeat(70))
      console.log('👆 Ahora navega manualmente en la ventana del browser:')
      console.log('1. Selecciona: Cuba > Visados > 166 > Turismo/Schengen')
      console.log('2. Haz clic en Buscar')
      console.log('3. Sigue el flujo hasta llegar a las citas')
      console.log('4. Yo estaré capturando TODO en tiempo real')
      console.log('5. Verás los logs aparecer aquí abajo')
      console.log('='.repeat(70))
      console.log('Presiona Ctrl+C cuando termines\n')
      
      // Mantener vivo y generar reportes periódicos
      await this.keepAliveAndMonitor()
      
    } catch (error) {
      console.error('❌ Error:', error)
      await this.cleanup()
      process.exit(1)
    }
  }

  async setupNetworkMonitoring() {
    // Interceptar todas las requests
    this.page.on('request', (request) => {
      const timestamp = new Date().toISOString()
      const requestData = {
        timestamp,
        url: request.url(),
        method: request.method(),
        resourceType: request.resourceType(),
        headers: request.headers(),
        postData: request.postData()
      }
      
      // Log inmediato para requests importantes
      if (request.url().includes('citaconsular.es')) {
        console.log(`\n📡 REQUEST [${new Date().toLocaleTimeString()}]:`)
        console.log(`   ${request.method()} ${request.url()}`)
        console.log(`   Type: ${request.resourceType()}`)
        
        if (request.url().includes('onlinebookings/datetime')) {
          console.log(`   🎯 ¡PETICIÓN DE DISPONIBILIDAD DETECTADA!`)
        }
      }
      
      this.networkRequests.push(requestData)
    })

    // Interceptar todas las responses
    this.page.on('response', async (response) => {
      const timestamp = new Date().toISOString()
      const request = response.request()
      
      try {
        const responseData = {
          timestamp,
          url: response.url(),
          status: response.status(),
          statusText: response.statusText(),
          headers: response.headers(),
          request: {
            method: request.method(),
            url: request.url(),
            resourceType: request.resourceType()
          }
        }

        // Capturar body para requests importantes
        if (response.url().includes('citaconsular.es')) {
          console.log(`\n📥 RESPONSE [${new Date().toLocaleTimeString()}]:`)
          console.log(`   Status: ${response.status()} ${response.statusText()}`)
          console.log(`   URL: ${response.url()}`)
          
          try {
            const contentType = response.headers()['content-type'] || ''
            
            if (response.url().includes('onlinebookings/datetime')) {
              console.log(`   🎯 ¡RESPUESTA DE DISPONIBILIDAD!`)
              
              const body = await response.text()
              responseData.body = body
              responseData.bodyLength = body.length
              
              console.log(`   📏 Tamaño: ${body.length} caracteres`)
              
              if (body.length === 0) {
                console.log(`   📭 Respuesta vacía - NO HAY CITAS`)
              } else {
                console.log(`   📄 Respuesta con contenido - ANALIZANDO...`)
                await this.analyzeAvailabilityResponse(body, response.url())
              }
            } else if (contentType.includes('text/html') || contentType.includes('application/json')) {
              const body = await response.text()
              responseData.body = body.substring(0, 1000) // Primeros 1000 chars
              responseData.bodyLength = body.length
            }
          } catch (bodyError) {
            console.log(`   ⚠️ No se pudo leer el body: ${bodyError.message}`)
            responseData.bodyError = bodyError.message
          }
        }
        
        // Agregar a la lista de requests
        const requestIndex = this.networkRequests.findIndex(req => 
          req.url === request.url() && req.method === request.method()
        )
        if (requestIndex >= 0) {
          this.networkRequests[requestIndex].response = responseData
        }
        
        // Guardar datos periódicamente
        this.saveNetworkData()
        
      } catch (error) {
        console.warn(`⚠️ Error procesando response: ${error.message}`)
      }
    })
  }

  async setupConsoleMonitoring() {
    this.page.on('console', (msg) => {
      const timestamp = new Date().toISOString()
      const logData = {
        timestamp,
        type: msg.type(),
        text: msg.text(),
        location: msg.location()
      }
      
      // Log inmediato para mensajes importantes
      if (msg.text().includes('cita') || msg.text().includes('disponib') || msg.text().includes('error')) {
        const emoji = this.getLogEmoji(msg.type())
        console.log(`\n💬 CONSOLE [${new Date().toLocaleTimeString()}]:`)
        console.log(`   ${emoji} ${msg.type().toUpperCase()}: ${msg.text()}`)
      }
      
      this.consoleLogs.push(logData)
      this.saveConsoleData()
    })
  }

  async analyzeAvailabilityResponse(body, url) {
    try {
      // Intentar parsear JSONP
      let data = null
      
      if (body.includes('jQuery') && body.includes('(')) {
        const jsonStart = body.indexOf('(') + 1
        const jsonEnd = body.lastIndexOf(')')
        
        if (jsonStart > 0 && jsonEnd > jsonStart) {
          const jsonData = body.substring(jsonStart, jsonEnd)
          data = JSON.parse(jsonData)
          console.log(`   ✅ Datos JSONP parseados exitosamente`)
        }
      } else if (body.startsWith('{') || body.startsWith('[')) {
        data = JSON.parse(body)
        console.log(`   ✅ Datos JSON parseados exitosamente`)
      }
      
      if (data) {
        const slots = this.extractSlots(data)
        
        if (slots.length > 0) {
          console.log(`   🎉 ¡${slots.length} CITAS ENCONTRADAS!`)
          slots.slice(0, 5).forEach(slot => {
            console.log(`      📅 ${slot.date} ${slot.time} (${slot.available} disponibles)`)
          })
          if (slots.length > 5) {
            console.log(`      ... y ${slots.length - 5} más`)
          }
          
          // Guardar datos de disponibilidad
          const availabilityRecord = {
            timestamp: new Date().toISOString(),
            url,
            rawData: data,
            extractedSlots: slots,
            summary: {
              totalSlots: slots.length,
              availableDates: [...new Set(slots.map(s => s.date))],
              hasAvailability: true
            }
          }
          
          this.availabilityData.push(availabilityRecord)
          this.saveAvailabilityData(availabilityRecord)
          
        } else {
          console.log(`   📭 No hay citas en los datos parseados`)
        }
      } else {
        console.log(`   ❌ No se pudo parsear la respuesta`)
        console.log(`   Preview: ${body.substring(0, 200)}...`)
      }
      
    } catch (error) {
      console.log(`   ❌ Error analizando respuesta: ${error.message}`)
    }
  }

  extractSlots(data) {
    const slots = []
    
    if (!data || typeof data !== 'object') return slots

    // Buscar en diferentes estructuras posibles
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
        // Buscar recursivamente en objetos
        else if (value && typeof value === 'object' && !Array.isArray(value)) {
          searchInObject(value, key)
        }
        // Buscar en arrays
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

  getLogEmoji(type) {
    const emojis = {
      error: '🔴',
      warning: '🟡',
      info: '🔵',
      log: '⚪',
      debug: '🔍'
    }
    return emojis[type] || '📝'
  }

  saveNetworkData() {
    const filePath = path.join(this.logDir, 'network-requests.json')
    fs.writeFileSync(filePath, JSON.stringify(this.networkRequests, null, 2))
  }

  saveConsoleData() {
    const filePath = path.join(this.logDir, 'console-logs.json')
    fs.writeFileSync(filePath, JSON.stringify(this.consoleLogs, null, 2))
  }

  saveAvailabilityData(record) {
    const timestamp = record.timestamp.replace(/[:.]/g, '-')
    const filePath = path.join(this.logDir, `availability-${timestamp}.json`)
    fs.writeFileSync(filePath, JSON.stringify(record, null, 2))
    
    console.log(`   💾 Datos de disponibilidad guardados en: ${filePath}`)
  }

  async keepAliveAndMonitor() {
    return new Promise((resolve) => {
      // Generar reporte cada 30 segundos
      const reportInterval = setInterval(() => {
        this.generatePeriodicReport()
      }, 30000)

      // Manejar Ctrl+C
      process.on('SIGINT', async () => {
        console.log('\n🛑 Cerrando monitor...')
        clearInterval(reportInterval)
        await this.cleanup()
        resolve()
      })
      
      process.on('SIGTERM', async () => {
        console.log('\n🛑 Terminando monitor...')
        clearInterval(reportInterval)
        await this.cleanup()
        resolve()
      })
    })
  }

  generatePeriodicReport() {
    const now = new Date().toLocaleTimeString()
    const totalRequests = this.networkRequests.length
    const citaRequests = this.networkRequests.filter(req => req.url.includes('citaconsular.es')).length
    const availabilityRequests = this.networkRequests.filter(req => req.url.includes('onlinebookings/datetime')).length
    
    console.log(`\n📊 REPORTE [${now}]:`)
    console.log(`   📡 Total requests: ${totalRequests}`)
    console.log(`   🔗 Requests a citaconsular: ${citaRequests}`)
    console.log(`   🎯 Requests de disponibilidad: ${availabilityRequests}`)
    console.log(`   🎉 Citas encontradas: ${this.availabilityData.length}`)
  }

  async cleanup() {
    console.log('🧹 Limpiando recursos...')
    
    try {
      if (this.page) await this.page.close()
      if (this.context) await this.context.close()
      if (this.browser) await this.browser.close()
    } catch (error) {
      console.warn('⚠️ Error en cleanup:', error.message)
    }
    
    // Generar reporte final
    this.generateFinalReport()
  }

  generateFinalReport() {
    const reportPath = path.join(this.logDir, 'final-report.json')
    const report = {
      sessionId: this.sessionId,
      timestamp: new Date().toISOString(),
      summary: {
        totalNetworkRequests: this.networkRequests.length,
        totalConsoleLogs: this.consoleLogs.length,
        availabilityRequests: this.networkRequests.filter(r => r.url.includes('onlinebookings/datetime')).length,
        citaConsularRequests: this.networkRequests.filter(r => r.url.includes('citaconsular.es')).length,
        citasEncontradas: this.availabilityData.length
      },
      networkRequests: this.networkRequests,
      consoleLogs: this.consoleLogs,
      availabilityData: this.availabilityData
    }
    
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2))
    
    console.log(`\n📊 REPORTE FINAL:`)
    console.log(`📁 Directorio: ${this.logDir}`)
    console.log(`📡 Peticiones de red: ${report.summary.totalNetworkRequests}`)
    console.log(`💬 Logs de consola: ${report.summary.totalConsoleLogs}`)
    console.log(`🎯 Peticiones de disponibilidad: ${report.summary.availabilityRequests}`)
    console.log(`🔗 Peticiones a citaconsular: ${report.summary.citaConsularRequests}`)
    console.log(`🎉 Citas encontradas: ${report.summary.citasEncontradas}`)
    console.log(`📄 Reporte completo: ${reportPath}`)
  }
}

// Ejecutar monitor
if (require.main === module) {
  const monitor = new PlaywrightInspectorMonitor()
  monitor.start().catch(error => {
    console.error('❌ Error fatal:', error)
    process.exit(1)
  })
}

module.exports = { PlaywrightInspectorMonitor }
