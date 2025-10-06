#!/usr/bin/env node

/**
 * WATCHER SOLO COOKIES
 * Obtiene cookies una vez, luego consultas directas
 */

const { chromium } = require('playwright-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
const axios = require('axios')
const fs = require('fs')

chromium.use(StealthPlugin())

console.log('🍪 WATCHER SOLO COOKIES - Eficiencia Máxima')

class WatcherSoloCookies {
  constructor() {
    this.browser = null
    this.context = null
    this.cookies = null
    this.sessionValida = false
    this.ciclo = 0
    this.running = false
    
    // Parámetros confirmados
    this.config = {
      publicKey: '28db94e270580be60f6e00285a7d8141f',
      serviceId: 'bkt873048',
      agendaId: 'bkt307945',
      baseUrl: 'https://www.citaconsular.es/onlinebookings/datetime/',
      widgetUrl: 'https://www.citaconsular.es/es/hosteds/widgetdefault/28db94e270580be60f6e00285a7d8141f/bkt873048'
    }
  }

  async obtenerCookiesUnaVez() {
    console.log('🍪 OBTENIENDO COOKIES UNA SOLA VEZ...')
    
    this.browser = await chromium.launch({
      headless: false, // Visible para debug inicial
      args: ['--disable-blink-features=AutomationControlled', '--no-sandbox']
    })

    this.context = await this.browser.newContext({
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    })

    const page = await this.context.newPage()
    
    try {
      console.log('📄 1. Navegando a servicios consulares...')
      await page.goto('https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx')
      await page.waitForLoadState('networkidle')
      
      // Aceptar cookies
      try {
        await page.getByRole('button', { name: 'Aceptar' }).click({ timeout: 5000 })
        console.log('✅ Cookies aceptadas')
      } catch (e) {
        console.log('ℹ️ No apareció banner de cookies')
      }
      
      console.log('📝 2. Llenando formulario...')
      await page.getByLabel('Países y territorios').selectOption('Cuba')
      await page.waitForTimeout(1000)
      await page.getByLabel('Categorías servicios').selectOption('Visados')
      await page.waitForTimeout(1000)
      await page.getByText('Delegaciones').click()
      await page.waitForTimeout(500)
      await page.getByLabel('Delegaciones').selectOption('166')
      await page.waitForTimeout(1000)
      await page.getByLabel('Servicios consulares').selectOption('Visado de estancia (visado Schengen)')
      await page.waitForTimeout(1000)
      
      console.log('📮 3. POST tradicional...')
      await page.getByRole('button', { name: 'Buscar' }).click()
      await page.waitForLoadState('networkidle')
      await page.waitForTimeout(3000)
      
      console.log('🎯 4. Abriendo popup...')
      const [popup] = await Promise.all([
        this.context.waitForEvent('page'),
        page.getByRole('link', { name: 'Reservar cita de visado Schengen Se abre en ventana nueva' }).click()
      ])
      
      console.log('🔘 5. Clickeando botón #idCaptchaButton...')
      try {
        await popup.waitForSelector('#idCaptchaButton', { timeout: 15000 })
        await popup.click('#idCaptchaButton')
        console.log('✅ Botón clickeado')
        await popup.waitForTimeout(5000)
      } catch (e) {
        console.log(`❌ Error con botón: ${e.message}`)
      }
      
      console.log('🎭 6. Navegando al widget...')
      await popup.goto(this.config.widgetUrl + '#datetime')
      await popup.waitForLoadState('networkidle')
      await popup.waitForTimeout(10000) // Esperar que cargue completamente
      
      console.log('🍪 7. Extrayendo cookies...')
      this.cookies = await popup.context().cookies()
      this.sessionValida = true
      
      console.log(`✅ ${this.cookies.length} cookies obtenidas`)
      console.log('🎉 ¡SESIÓN VÁLIDA ESTABLECIDA!')
      
      // Guardar cookies para backup
      fs.writeFileSync('cookies-session.json', JSON.stringify({
        timestamp: new Date().toISOString(),
        cookies: this.cookies
      }, null, 2))
      
      console.log('💾 Cookies guardadas en cookies-session.json')
      
      await popup.close()
      await page.close()
      await this.browser.close()
      
      return true
      
    } catch (error) {
      console.log(`❌ Error obteniendo cookies: ${error.message}`)
      return false
    }
  }

  async consultarDirecto() {
    if (!this.sessionValida || !this.cookies) {
      console.log('❌ No hay sesión válida')
      return null
    }

    this.ciclo++
    console.log(`\n📡 CONSULTA DIRECTA ${this.ciclo} - ${new Date().toLocaleTimeString()}`)

    const cookieString = this.cookies.map(c => `${c.name}=${c.value}`).join('; ')

    const now = new Date()
    const end = new Date(now.getTime() + (60 * 24 * 60 * 60 * 1000)) // 60 días
    
    const params = {
      callback: `jQuery${Date.now()}${Math.random().toString().replace('.', '')}`,
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
      const response = await axios.get(url, {
        headers: {
          'Cookie': cookieString,
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
          'Accept': 'text/javascript, application/javascript, */*; q=0.01',
          'Accept-Language': 'es-ES,es;q=0.9,en;q=0.8',
          'Referer': this.config.widgetUrl,
          'X-Requested-With': 'XMLHttpRequest'
        },
        timeout: 15000
      })

      console.log(`📥 Status: ${response.status}, Length: ${response.data.length}`)

      if (response.data.includes('Exception')) {
        console.log('❌ Error en respuesta - Sesión expirada')
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
        console.log('🔄 Sesión expirada')
        this.sessionValida = false
      }
      return null
    }
  }

  procesarHuecos(data) {
    console.log('🔬 Procesando huecos libres...')
    
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
                  huecos: time.freeSlots
                })
              }
            })
          }
        })
      }

      console.log(`🎯 ${huecos.length} huecos libres encontrados`)

      if (huecos.length > 0) {
        console.log('📋 HUECOS DISPONIBLES:')
        huecos.forEach(hueco => {
          console.log(`   📅 ${hueco.fecha} ${hueco.hora} (${hueco.huecos} libres)`)
        })
        
        // Guardar resultado
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
        const filename = `huecos-${timestamp}.json`
        
        fs.writeFileSync(filename, JSON.stringify({
          timestamp: new Date().toISOString(),
          ciclo: this.ciclo,
          totalHuecos: huecos.length,
          huecos: huecos,
          datosCompletos: parsed
        }, null, 2))
        
        console.log(`💾 Guardado: ${filename}`)
      }

      return { huecos }

    } catch (error) {
      console.log(`❌ Error procesando: ${error.message}`)
      return null
    }
  }

  async iniciarMonitoreo() {
    console.log('\n🔄 INICIANDO MONITOREO CONTINUO...')
    console.log('📊 Consultando cada 30 segundos')
    console.log('🛑 Presiona Ctrl+C para detener\n')
    
    this.running = true
    
    while (this.running) {
      try {
        const resultado = await this.consultarDirecto()
        
        if (!resultado) {
          console.log('⚠️ Sesión expirada - Necesario renovar cookies')
          break
        }
        
        const { huecos } = resultado
        
        if (huecos.length > 0) {
          console.log(`🎉 ¡${huecos.length} HUECOS LIBRES DETECTADOS!`)
        } else {
          console.log('📭 No hay huecos libres disponibles')
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
    console.log('🎯 WATCHER SOLO COOKIES - INICIANDO...')
    
    // FASE 1: Obtener cookies una sola vez
    console.log('\n🍪 FASE 1: Obteniendo cookies...')
    const cookiesOk = await this.obtenerCookiesUnaVez()
    
    if (!cookiesOk) {
      console.log('❌ No se pudieron obtener cookies')
      return
    }
    
    // FASE 2: Monitoreo continuo con consultas directas
    console.log('\n📡 FASE 2: Monitoreo con consultas directas...')
    await this.iniciarMonitoreo()
  }

  stop() {
    this.running = false
    console.log('🛑 Watcher detenido')
  }
}

// Ejecutar
const watcher = new WatcherSoloCookies()

process.on('SIGINT', () => {
  console.log('\n🛑 Deteniendo...')
  watcher.stop()
  process.exit(0)
})

console.log('🍪 Iniciando Watcher Solo Cookies...')
console.log('📋 Estrategia: Cookies una vez + Consultas directas')
console.log('⚡ Mucho más eficiente que el flujo completo\n')

watcher.ejecutar().catch(console.error)
