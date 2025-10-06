#!/usr/bin/env node

/**
 * TEST TURISMO COMPLETO
 * Incluye obtención de cookies y todos los parámetros necesarios
 */

const { chromium } = require('playwright-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
const axios = require('axios')
const fs = require('fs')

chromium.use(StealthPlugin())

console.log('✈️ TEST TURISMO COMPLETO - CON COOKIES Y PARÁMETROS')

class TurismoCompleto {
  constructor() {
    this.browser = null
    this.context = null
    this.cookies = null
    this.agendaId = null
  }

  async init() {
    console.log('🚀 Inicializando browser con stealth...')
    
    this.browser = await chromium.launch({
      headless: false,
      devtools: false,
      slowMo: 100,
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

  async obtenerCookiesYParametros() {
    console.log('🍪 Obteniendo cookies y parámetros del widget...')

    const page = await this.context.newPage()
    
    // Capturar peticiones para encontrar parámetros
    const peticiones = []
    
    page.on('request', request => {
      if (request.url().includes('citaconsular.es')) {
        peticiones.push({
          url: request.url(),
          method: request.method(),
          headers: request.headers(),
          postData: request.postData()
        })
        console.log(`📡 REQUEST: ${request.method()} ${request.url()}`)
      }
    })

    page.on('response', async response => {
      if (response.url().includes('onlinebookings')) {
        console.log(`📥 RESPONSE: ${response.status()} ${response.url()}`)
        
        if (response.url().includes('getwidgetconfigurations')) {
          try {
            const body = await response.text()
            console.log(`🔧 Widget config: ${body.length} chars`)
            
            // Buscar agenda ID en la configuración
            if (body.includes('agenda') || body.includes('bkt')) {
              console.log('🎯 Configuración del widget encontrada!')
              
              // Guardar configuración
              const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
              fs.writeFileSync(`widget-config-${timestamp}.json`, JSON.stringify({
                timestamp: new Date().toISOString(),
                url: response.url(),
                body: body
              }, null, 2))
              
              console.log(`💾 Configuración guardada en widget-config-${timestamp}.json`)
              
              // Intentar extraer agenda ID
              if (body.includes('(') && body.includes(')')) {
                try {
                  const jsonStart = body.indexOf('(') + 1
                  const jsonEnd = body.lastIndexOf(')')
                  const jsonData = body.substring(jsonStart, jsonEnd)
                  const config = JSON.parse(jsonData)
                  
                  console.log('✅ Configuración parseada')
                  console.log('🔍 Keys:', Object.keys(config))
                  
                  // Buscar agenda ID
                  const buscarAgenda = (obj, path = '') => {
                    for (const [key, value] of Object.entries(obj)) {
                      if (key.toLowerCase().includes('agenda') && typeof value === 'string' && value.startsWith('bkt')) {
                        console.log(`🎯 Agenda ID encontrada: ${value} en ${path}.${key}`)
                        this.agendaId = value
                        return value
                      }
                      if (typeof value === 'object' && value !== null) {
                        const found = buscarAgenda(value, `${path}.${key}`)
                        if (found) return found
                      }
                    }
                    return null
                  }
                  
                  buscarAgenda(config)
                  
                } catch (e) {
                  console.log(`❌ Error parseando config: ${e.message}`)
                }
              }
            }
          } catch (e) {
            console.log(`Error leyendo config: ${e.message}`)
          }
        }
      }
    })
    
    try {
      // Ir al widget de turismo
      const url = 'https://www.citaconsular.es/es/hosteds/widgetdefault/28db94e270580be60f6e00285a7d8141f/bkt873048#datetime'
      console.log(`🌐 Navegando a: ${url}`)
      
      await page.goto(url)
      await page.waitForLoadState('networkidle')
      
      // Esperar a que cargue completamente
      console.log('⏳ Esperando carga completa (20 segundos)...')
      await page.waitForTimeout(20000)

      // Obtener cookies
      const cookies = await page.context().cookies()
      this.cookies = cookies
      
      console.log(`✅ Cookies obtenidas: ${cookies.length} cookies`)
      
      // Guardar peticiones capturadas
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
      fs.writeFileSync(`peticiones-${timestamp}.json`, JSON.stringify(peticiones, null, 2))
      console.log(`📡 ${peticiones.length} peticiones guardadas en peticiones-${timestamp}.json`)
      
      return true
    } catch (error) {
      console.log(`❌ Error: ${error.message}`)
      return false
    } finally {
      await page.close()
    }
  }

  async testearConParametrosCompletos() {
    console.log('\n🔍 Testeando con parámetros completos...')
    
    if (!this.cookies || this.cookies.length === 0) {
      console.log('⚠️ No hay cookies, obteniendo...')
      const success = await this.obtenerCookiesYParametros()
      if (!success) return false
    }

    // Construir cookie string
    const cookieString = this.cookies
      .map(cookie => `${cookie.name}=${cookie.value}`)
      .join('; ')

    console.log(`🍪 Usando ${this.cookies.length} cookies`)
    if (this.agendaId) {
      console.log(`🎯 Agenda ID: ${this.agendaId}`)
    }

    let intento = 0
    const maxIntentos = 30
    
    while (intento < maxIntentos) {
      intento++
      console.log(`\n📡 INTENTO ${intento}/${maxIntentos} - ${new Date().toLocaleTimeString()}`)
      
      try {
        const now = new Date()
        const end = new Date(now.getTime() + (60 * 24 * 60 * 60 * 1000)) // 60 días
        
        const params = {
          callback: `jQuery${Math.random().toString().replace('.', '')}${Date.now()}`,
          publickey: '28db94e270580be60f6e00285a7d8141f',
          'services[]': 'bkt873048',
          start: now.toISOString().split('T')[0],
          end: end.toISOString().split('T')[0],
          _: Date.now()
        }
        
        // Añadir agenda si la tenemos
        if (this.agendaId) {
          params['agendas[]'] = this.agendaId
        }

        const url = 'https://citaconsular.es/onlinebookings/datetime/?' + 
                    new URLSearchParams(params).toString()

        console.log(`📍 URL: ${url.substring(0, 120)}...`)

        const response = await axios.get(url, {
          headers: {
            'Cookie': cookieString,
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Accept': 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript, */*; q=0.01',
            'Accept-Language': 'es-ES,es;q=0.9,en;q=0.8',
            'Referer': 'https://www.citaconsular.es/es/hosteds/widgetdefault/28db94e270580be60f6e00285a7d8141f/bkt873048',
            'X-Requested-With': 'XMLHttpRequest'
          },
          timeout: 15000
        })

        console.log(`📥 Status: ${response.status}`)
        console.log(`📏 Length: ${response.data.length}`)

        if (response.data.length === 0) {
          console.log('📭 Respuesta vacía')
        } else {
          console.log('🎉 ¡RESPUESTA CON DATOS!')
          
          // Guardar respuesta
          const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
          const filename = `turismo-completo-${timestamp}.json`
          
          fs.writeFileSync(filename, JSON.stringify({
            timestamp: new Date().toISOString(),
            intento: intento,
            url: url,
            status: response.status,
            headers: response.headers,
            data: response.data,
            dataLength: response.data.length,
            agendaUsada: this.agendaId
          }, null, 2))
          
          console.log(`💾 Guardado en: ${filename}`)
          
          // Analizar respuesta
          if (response.data.includes('Exception')) {
            console.log('❌ Error en respuesta:')
            console.log(response.data)
          } else if (response.data.includes('(') && response.data.includes(')')) {
            try {
              const jsonStart = response.data.indexOf('(') + 1
              const jsonEnd = response.data.lastIndexOf(')')
              const jsonData = response.data.substring(jsonStart, jsonEnd)
              const parsed = JSON.parse(jsonData)
              
              console.log('✅ JSON parseado exitosamente')
              console.log('🔍 Keys:', Object.keys(parsed))
              
              // Buscar fechas con citas
              const fechas = Object.keys(parsed).filter(key => /^\d{4}-\d{2}-\d{2}$/.test(key))
              if (fechas.length > 0) {
                console.log(`🎊 ¡${fechas.length} FECHAS CON POSIBLES CITAS!`)
                
                let totalCitas = 0
                fechas.forEach(fecha => {
                  const slots = parsed[fecha]
                  if (Array.isArray(slots) && slots.length > 0) {
                    console.log(`   📅 ${fecha}: ${slots.length} slots`)
                    slots.forEach(slot => {
                      if (slot && slot.time) {
                        totalCitas++
                        console.log(`      🕐 ${slot.time} (disponible: ${slot.available || 'sí'})`)
                      }
                    })
                  }
                })
                
                if (totalCitas > 0) {
                  console.log(`🏆 ¡${totalCitas} CITAS DETECTADAS!`)
                  
                  const citasFile = `CITAS-TURISMO-DETECTADAS-${timestamp}.json`
                  fs.writeFileSync(citasFile, JSON.stringify({
                    timestamp: new Date().toISOString(),
                    totalCitas: totalCitas,
                    fechas: fechas,
                    data: parsed
                  }, null, 2))
                  
                  console.log(`🎊 ¡CITAS GUARDADAS EN: ${citasFile}!`)
                  console.log('🎯 ¡MISIÓN CUMPLIDA - CITAS DETECTADAS!')
                  return true
                }
              } else {
                console.log('📭 No hay fechas con citas')
              }
              
            } catch (parseError) {
              console.log(`❌ Error parseando: ${parseError.message}`)
            }
          }
        }

      } catch (error) {
        console.log(`❌ Error: ${error.message}`)
        
        if (error.response?.status === 403) {
          console.log('🔄 Error 403 - Renovando cookies...')
          this.cookies = null
          await this.obtenerCookiesYParametros()
        }
      }
      
      // Esperar entre intentos
      const espera = 12000 + Math.random() * 8000 // 12-20 segundos
      console.log(`⏳ Esperando ${Math.round(espera/1000)} segundos...`)
      await new Promise(resolve => setTimeout(resolve, espera))
    }
    
    console.log('⚠️ Máximo de intentos alcanzado')
    return false
  }

  async ejecutar() {
    await this.init()
    
    try {
      await this.testearConParametrosCompletos()
    } finally {
      await this.browser.close()
    }
  }
}

// Ejecutar
const tester = new TurismoCompleto()
tester.ejecutar().catch(console.error)
