#!/usr/bin/env node

/**
 * WATCHER TURISMO DEBUG
 * Versión con output inmediato para verificar funcionamiento
 */

const { chromium } = require('playwright-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
const axios = require('axios')
const fs = require('fs')

chromium.use(StealthPlugin())

console.log('🎯 WATCHER TURISMO DEBUG - INICIANDO...')

class WatcherDebug {
  constructor() {
    this.browser = null
    this.context = null
    this.cookies = null
    this.sessionValida = false
    this.ciclo = 0
    
    // Parámetros exactos confirmados
    this.config = {
      publicKey: '28db94e270580be60f6e00285a7d8141f',
      serviceId: 'bkt873048',
      agendaId: 'bkt307945',
      baseUrl: 'https://www.citaconsular.es/onlinebookings/datetime/',
      widgetUrl: 'https://www.citaconsular.es/es/hosteds/widgetdefault/28db94e270580be60f6e00285a7d8141f/bkt873048'
    }
  }

  async init() {
    console.log('🚀 Inicializando browser...')
    
    this.browser = await chromium.launch({
      headless: true,
      args: ['--disable-blink-features=AutomationControlled', '--no-sandbox']
    })

    this.context = await this.browser.newContext({
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    })

    console.log('✅ Browser inicializado')
  }

  async obtenerCookies() {
    console.log('🍪 Obteniendo cookies...')

    const page = await this.context.newPage()
    
    try {
      await page.goto(this.config.widgetUrl)
      await page.waitForLoadState('networkidle')
      await page.waitForTimeout(8000)

      this.cookies = await page.context().cookies()
      this.sessionValida = true
      
      console.log(`✅ ${this.cookies.length} cookies obtenidas`)
      return true
      
    } catch (error) {
      console.log(`❌ Error: ${error.message}`)
      return false
    } finally {
      await page.close()
    }
  }

  async consultarAPI() {
    console.log('📡 Consultando API...')
    
    if (!this.sessionValida) {
      const ok = await this.obtenerCookies()
      if (!ok) return null
    }

    const cookieString = this.cookies.map(c => `${c.name}=${c.value}`).join('; ')

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
      src: this.config.widgetUrl,
      srvsrc: 'https://citaconsular.es',
      start: now.toISOString().split('T')[0],
      end: end.toISOString().split('T')[0],
      selectedPeople: '1',
      _: Date.now()
    }

    const url = this.config.baseUrl + '?' + new URLSearchParams(params).toString()
    console.log(`📍 URL: ${url.substring(0, 100)}...`)

    try {
      const response = await axios.get(url, {
        headers: {
          'Cookie': cookieString,
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
          'Accept': 'text/javascript, application/javascript, */*; q=0.01',
          'Referer': this.config.widgetUrl
        },
        timeout: 10000
      })

      console.log(`📥 Status: ${response.status}`)
      console.log(`📏 Length: ${response.data.length}`)

      if (response.data.includes('Exception')) {
        console.log('❌ Error en respuesta:', response.data.substring(0, 200))
        this.sessionValida = false
        return null
      }

      if (response.data.length === 0) {
        console.log('📭 Respuesta vacía')
        return { citas: [] }
      }

      return this.procesarDatos(response.data)

    } catch (error) {
      console.log(`❌ Error API: ${error.message}`)
      if (error.response?.status === 403) {
        this.sessionValida = false
      }
      return null
    }
  }

  procesarDatos(data) {
    console.log('🔬 Procesando datos...')
    
    try {
      const jsonStart = data.indexOf('(') + 1
      const jsonEnd = data.lastIndexOf(')')
      const jsonData = data.substring(jsonStart, jsonEnd)
      const parsed = JSON.parse(jsonData)

      console.log('✅ JSON parseado')
      
      const citas = []

      if (parsed.Slots && Array.isArray(parsed.Slots)) {
        console.log(`📅 ${parsed.Slots.length} fechas analizadas`)
        
        parsed.Slots.forEach(slot => {
          if (slot.times && typeof slot.times === 'object') {
            const horarios = Object.keys(slot.times).length
            if (horarios > 0) {
              console.log(`   ${slot.date}: ${horarios} horarios`)
              
              Object.values(slot.times).forEach(time => {
                if (time.freeSlots && time.freeSlots > 0) {
                  citas.push({
                    fecha: slot.date,
                    hora: time.time,
                    disponibles: time.freeSlots
                  })
                }
              })
            }
          }
        })
      }

      console.log(`🎯 Total citas encontradas: ${citas.length}`)
      
      if (citas.length > 0) {
        console.log('📋 CITAS DISPONIBLES:')
        citas.forEach(cita => {
          console.log(`   📅 ${cita.fecha} ${cita.hora} (${cita.disponibles} libres)`)
        })
        
        // Guardar citas
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
        const filename = `citas-debug-${timestamp}.json`
        
        fs.writeFileSync(filename, JSON.stringify({
          timestamp: new Date().toISOString(),
          ciclo: this.ciclo,
          totalCitas: citas.length,
          citas: citas,
          datosCompletos: parsed
        }, null, 2))
        
        console.log(`💾 Guardado en: ${filename}`)
      }

      return { citas }

    } catch (error) {
      console.log(`❌ Error procesando: ${error.message}`)
      console.log('📄 Datos crudos:', data.substring(0, 200))
      return null
    }
  }

  async ejecutarCiclo() {
    this.ciclo++
    console.log(`\n🔄 CICLO ${this.ciclo} - ${new Date().toLocaleTimeString()}`)
    
    const resultado = await this.consultarAPI()
    
    if (resultado) {
      const { citas } = resultado
      
      if (citas.length > 0) {
        console.log(`🎉 ¡${citas.length} CITAS DETECTADAS!`)
      } else {
        console.log('📭 No hay citas disponibles')
      }
    } else {
      console.log('⚠️ No se pudieron obtener datos')
    }
  }

  async start() {
    await this.init()
    
    console.log('\n📋 CONFIGURACIÓN:')
    console.log(`   PublicKey: ${this.config.publicKey}`)
    console.log(`   Service: ${this.config.serviceId}`)
    console.log(`   Agenda: ${this.config.agendaId}`)
    console.log('\n🎯 INICIANDO MONITOREO...')
    
    // Ejecutar 10 ciclos de prueba
    for (let i = 0; i < 10; i++) {
      await this.ejecutarCiclo()
      
      if (i < 9) {
        console.log('⏳ Esperando 20 segundos...')
        await new Promise(resolve => setTimeout(resolve, 20000))
      }
    }
    
    console.log('\n✅ Test completado')
    await this.browser.close()
  }
}

// Ejecutar
const watcher = new WatcherDebug()
watcher.start().catch(console.error)
