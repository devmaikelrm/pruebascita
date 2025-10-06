#!/usr/bin/env node

/**
 * TEST SOLO TURISMO - DETECTAR CITAS
 * Enfocado únicamente en Turismo donde sabemos que hay citas
 */

const { chromium } = require('playwright-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
const axios = require('axios')
const fs = require('fs')

chromium.use(StealthPlugin())

class TurismoTester {
  constructor() {
    this.browser = null
    this.context = null
    this.cookies = null
    this.intentos = 0
    this.maxIntentos = 50 // Muchos intentos hasta encontrar citas
  }

  async init() {
    console.log('✈️ INICIANDO TEST SOLO TURISMO - DETECTAR CITAS')
    console.log('🎯 Objetivo: NO PARAR hasta detectar citas de turismo')
    
    this.browser = await chromium.launch({
      headless: false, // Visible para debug
      devtools: false,
      slowMo: 100,
      args: [
        '--disable-blink-features=AutomationControlled',
        '--disable-web-security',
        '--no-sandbox',
        '--start-maximized'
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

  async obtenerCookiesFrescas() {
    console.log('🍪 Obteniendo cookies frescas para Turismo...')

    const page = await this.context.newPage()
    
    // Capturar TODAS las peticiones para debug
    page.on('request', request => {
      if (request.url().includes('citaconsular.es')) {
        console.log(`📡 REQUEST: ${request.method()} ${request.url()}`)
      }
    })

    page.on('response', async response => {
      if (response.url().includes('onlinebookings/datetime')) {
        console.log(`🎯 ¡RESPUESTA DISPONIBILIDAD! Status: ${response.status()}`)
        try {
          const body = await response.text()
          console.log(`📏 Tamaño: ${body.length} caracteres`)
          if (body.length > 0) {
            console.log(`🎉 ¡HAY DATOS EN LA RESPUESTA!`)
            this.analizarRespuesta(body, response.url())
          }
        } catch (e) {
          console.log(`Error leyendo respuesta: ${e.message}`)
        }
      }
    })
    
    try {
      // Ir directamente al widget de turismo
      const url = 'https://www.citaconsular.es/es/hosteds/widgetdefault/28db94e270580be60f6e00285a7d8141f/bkt873048#datetime'
      console.log(`🌐 Navegando a: ${url}`)
      
      await page.goto(url)
      await page.waitForLoadState('networkidle')
      
      // Esperar mucho tiempo para que cargue todo
      console.log('⏳ Esperando 30 segundos para carga completa...')
      await page.waitForTimeout(30000)

      const cookies = await page.context().cookies()
      this.cookies = cookies
      
      console.log(`✅ Cookies obtenidas: ${cookies.length} cookies`)
      
      // Intentar hacer clic en cualquier elemento para activar más peticiones
      try {
        console.log('👆 Intentando interactuar con la página...')
        await page.click('body')
        await page.waitForTimeout(5000)
        
        // Buscar si hay citas visibles
        const citasVisibles = await page.locator('a:has-text("Hueco libre")').count()
        if (citasVisibles > 0) {
          console.log(`🎉 ¡${citasVisibles} CITAS VISIBLES EN LA PÁGINA!`)
          
          // Hacer clic en una cita para activar más peticiones
          await page.locator('a:has-text("Hueco libre")').first().click()
          await page.waitForTimeout(3000)
        }
      } catch (e) {
        console.log(`Interacción: ${e.message}`)
      }
      
      return true
    } catch (error) {
      console.log(`❌ Error obteniendo cookies: ${error.message}`)
      return false
    } finally {
      await page.close()
    }
  }

  async testearDisponibilidad() {
    if (!this.cookies || this.cookies.length === 0) {
      console.log('⚠️ No hay cookies, obteniendo...')
      const success = await this.obtenerCookiesFrescas()
      if (!success) return false
    }

    this.intentos++
    console.log(`\n🔍 INTENTO ${this.intentos}/${this.maxIntentos} - Consultando disponibilidad Turismo...`)

    // Construir cookie string
    const cookieString = this.cookies
      .map(cookie => `${cookie.name}=${cookie.value}`)
      .join('; ')

    // Parámetros para turismo
    const now = new Date()
    const endDate = new Date(now.getTime() + (90 * 24 * 60 * 60 * 1000))
    
    const params = {
      callback: `jQuery${Math.random().toString().replace('.', '')}${Date.now()}`,
      publickey: '28db94e270580be60f6e00285a7d8141f',
      'services[]': 'bkt873048',
      start: now.toISOString().split('T')[0],
      end: endDate.toISOString().split('T')[0],
      _: Date.now()
    }

    const url = 'https://citaconsular.es/onlinebookings/datetime/?' + 
                new URLSearchParams(params).toString()

    console.log(`📍 URL: ${url}`)

    try {
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
      console.log(`📏 Tamaño respuesta: ${response.data.length} caracteres`)

      if (response.data.length === 0) {
        console.log('📭 Respuesta vacía - No hay citas en este momento')
        return false
      }

      console.log('🎉 ¡RESPUESTA CON DATOS! Analizando...')
      return this.analizarRespuesta(response.data, url)

    } catch (error) {
      if (error.response?.status === 403) {
        console.log('🔄 Error 403 - Cookies expiradas, renovando...')
        this.cookies = null
        return false
      }
      
      console.log(`❌ Error: ${error.message}`)
      return false
    }
  }

  analizarRespuesta(data, url) {
    console.log('🔬 ANALIZANDO RESPUESTA...')
    
    // Guardar respuesta cruda
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
    const filename = `turismo-response-${timestamp}.json`
    
    fs.writeFileSync(filename, JSON.stringify({
      timestamp: new Date().toISOString(),
      url: url,
      rawData: data,
      dataLength: data.length
    }, null, 2))
    
    console.log(`💾 Respuesta guardada en: ${filename}`)

    // Intentar parsear JSONP
    if (data.includes('jQuery') && data.includes('(')) {
      const jsonStart = data.indexOf('(') + 1
      const jsonEnd = data.lastIndexOf(')')
      
      if (jsonStart > 0 && jsonEnd > jsonStart) {
        try {
          const jsonData = data.substring(jsonStart, jsonEnd)
          const parsedData = JSON.parse(jsonData)
          
          console.log('✅ Datos JSONP parseados exitosamente')
          
          // Buscar citas
          const slots = this.extractSlots(parsedData)
          
          if (slots.length > 0) {
            console.log(`🎊 ¡${slots.length} CITAS ENCONTRADAS!`)
            
            slots.forEach(slot => {
              console.log(`   📅 ${slot.date} ${slot.time} (${slot.available} disponibles)`)
            })

            // Guardar citas encontradas
            const citasFile = `CITAS-TURISMO-ENCONTRADAS-${timestamp}.json`
            fs.writeFileSync(citasFile, JSON.stringify({
              timestamp: new Date().toISOString(),
              totalSlots: slots.length,
              slots: slots,
              rawData: parsedData
            }, null, 2))
            
            console.log(`🎊 ¡CITAS GUARDADAS EN: ${citasFile}!`)
            console.log('🏆 ¡MISIÓN CUMPLIDA - CITAS DETECTADAS!')
            
            return true
          } else {
            console.log('📭 No hay citas en los datos parseados')
            console.log('🔍 Estructura de datos:')
            console.log(JSON.stringify(parsedData, null, 2))
          }
          
        } catch (parseError) {
          console.log(`❌ Error parseando JSONP: ${parseError.message}`)
          console.log('📄 Datos crudos:')
          console.log(data.substring(0, 500) + '...')
        }
      }
    } else {
      console.log('📄 No es JSONP, datos crudos:')
      console.log(data.substring(0, 500) + '...')
    }
    
    return false
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

  async ejecutarPruebas() {
    await this.init()
    
    console.log(`🎯 Iniciando ${this.maxIntentos} intentos para detectar citas de turismo...`)
    
    while (this.intentos < this.maxIntentos) {
      try {
        const citasEncontradas = await this.testearDisponibilidad()
        
        if (citasEncontradas) {
          console.log('🏆 ¡ÉXITO! Citas detectadas')
          break
        }
        
        // Renovar cookies cada 10 intentos
        if (this.intentos % 10 === 0) {
          console.log('🔄 Renovando cookies...')
          this.cookies = null
        }
        
        // Esperar entre intentos
        const espera = 15000 + Math.random() * 10000 // 15-25 segundos
        console.log(`⏳ Esperando ${Math.round(espera/1000)} segundos antes del siguiente intento...`)
        await new Promise(resolve => setTimeout(resolve, espera))
        
      } catch (error) {
        console.error(`❌ Error en intento ${this.intentos}: ${error.message}`)
        await new Promise(resolve => setTimeout(resolve, 5000))
      }
    }
    
    if (this.intentos >= this.maxIntentos) {
      console.log('⚠️ Se alcanzó el máximo de intentos sin detectar citas')
    }
    
    await this.browser.close()
  }
}

// Ejecutar
const tester = new TurismoTester()
tester.ejecutarPruebas().catch(console.error)
