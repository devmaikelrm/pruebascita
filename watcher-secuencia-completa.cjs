#!/usr/bin/env node

/**
 * WATCHER SECUENCIA COMPLETA
 * Replica la secuencia exacta del análisis exitoso
 */

const axios = require('axios')
const fs = require('fs')

console.log('🚀 WATCHER SECUENCIA COMPLETA - Replica Análisis Exitoso')

class WatcherSecuenciaCompleta {
  constructor() {
    this.cookies = null
    this.sessionValida = false
    this.running = false
    this.ciclo = 0
    this.ultimasCitas = new Map()
    
    // Parámetros exactos del análisis exitoso
    this.config = {
      publicKey: '28db94e270580be60f6e00285a7d8141f',
      serviceId: 'bkt873048',
      agendaId: 'bkt307945',
      widgetUrl: 'https://www.citaconsular.es/es/hosteds/widgetdefault/28db94e270580be60f6e00285a7d8141f/bkt873048'
    }
  }

  async cargarCookies() {
    try {
      const cookiesFile = fs.readFileSync('cookies-optimizadas.json', 'utf8')
      const cookiesData = JSON.parse(cookiesFile)
      
      // Verificar si las cookies no son muy viejas (máximo 2 horas)
      const cookieAge = Date.now() - new Date(cookiesData.timestamp).getTime()
      if (cookieAge < 2 * 60 * 60 * 1000) {
        console.log('🍪 Usando cookies guardadas...')
        this.cookies = cookiesData.cookies.filter(c => 
          c.domain === 'www.citaconsular.es' || 
          c.domain === '.citaconsular.es' ||
          c.domain === 'citaconsular.es'
        )
        this.sessionValida = true
        return true
      } else {
        console.log('🍪 Cookies expiradas')
        return false
      }
    } catch (e) {
      console.log('🍪 No hay cookies guardadas')
      return false
    }
  }

  async consultarSecuenciaCompleta() {
    if (!this.sessionValida || !this.cookies) {
      console.log('❌ No hay sesión válida')
      return null
    }

    this.ciclo++
    console.log(`\n📡 CONSULTA SECUENCIA COMPLETA ${this.ciclo} - ${new Date().toLocaleTimeString()}`)

    // Headers exactos del análisis exitoso
    const cookieString = this.cookies.map(c => `${c.name}=${c.value}`).join('; ')
    const timestamp = Date.now()
    const callbackBase = `jQuery211003109131453968761_${timestamp}`

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
      // PASO 1: getwidgetconfigurations
      console.log('🔧 1. Widget configurations...')
      const configParams = {
        callback: callbackBase,
        type: 'default',
        publickey: this.config.publicKey,
        lang: 'es',
        'services[]': this.config.serviceId,
        version: '5',
        src: this.config.widgetUrl,
        srvsrc: 'https://citaconsular.es',
        _: timestamp + 1
      }

      const configUrl = 'https://citaconsular.es/onlinebookings/getwidgetconfigurations/?' + new URLSearchParams(configParams).toString()
      const configResponse = await axios.get(configUrl, { headers, timeout: 15000 })
      console.log(`📋 Config Status: ${configResponse.status}, Length: ${configResponse.data.length}`)

      if (configResponse.data.includes('Exception')) {
        console.log('❌ Sesión expirada en config')
        this.sessionValida = false
        return null
      }

      // PASO 2: getservices
      console.log('🛠️ 2. Services...')
      const servicesParams = {
        callback: callbackBase,
        type: 'default',
        publickey: this.config.publicKey,
        lang: 'es',
        'services[]': this.config.serviceId,
        version: '5',
        src: this.config.widgetUrl,
        srvsrc: 'https://citaconsular.es',
        _: timestamp + 2
      }

      const servicesUrl = 'https://citaconsular.es/onlinebookings/getservices/?' + new URLSearchParams(servicesParams).toString()
      const servicesResponse = await axios.get(servicesUrl, { headers, timeout: 15000 })
      console.log(`🛠️ Services Status: ${servicesResponse.status}, Length: ${servicesResponse.data.length}`)

      if (servicesResponse.data.includes('Exception')) {
        console.log('❌ Sesión expirada en services')
        this.sessionValida = false
        return null
      }

      // PASO 3: getagendas
      console.log('📅 3. Agendas...')
      const agendasParams = {
        callback: callbackBase,
        type: 'default',
        publickey: this.config.publicKey,
        lang: 'es',
        'services[]': this.config.serviceId,
        version: '5',
        src: this.config.widgetUrl,
        srvsrc: 'https://citaconsular.es',
        selectedPeople: '1',
        _: timestamp + 3
      }

      const agendasUrl = 'https://citaconsular.es/onlinebookings/getagendas/?' + new URLSearchParams(agendasParams).toString()
      const agendasResponse = await axios.get(agendasUrl, { headers, timeout: 15000 })
      console.log(`📅 Agendas Status: ${agendasResponse.status}, Length: ${agendasResponse.data.length}`)

      if (agendasResponse.data.includes('Exception')) {
        console.log('❌ Sesión expirada en agendas')
        this.sessionValida = false
        return null
      }

      // PASO 4: datetime (FINALMENTE!)
      console.log('🎯 4. DateTime (el momento de la verdad)...')
      const datetimeParams = {
        callback: callbackBase,
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
        _: timestamp + 4
      }

      const datetimeUrl = 'https://citaconsular.es/onlinebookings/datetime/?' + new URLSearchParams(datetimeParams).toString()
      const response = await axios.get(datetimeUrl, { headers, timeout: 15000 })

      console.log(`🎯 DateTime Status: ${response.status}, Length: ${response.data.length}`)

      if (response.data.includes('Exception')) {
        console.log('❌ Sesión expirada en datetime')
        this.sessionValida = false
        return null
      }

      if (response.data.length === 0) {
        console.log('📭 Respuesta vacía')
        return { huecos: [] }
      }

      console.log('🎉 ¡RESPUESTA CON DATOS!')
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
        fs.writeFileSync(`huecos-secuencia-${timestamp}.json`, JSON.stringify({
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
    fs.writeFileSync(`ALERTA-SECUENCIA-${timestamp}.json`, JSON.stringify({
      timestamp: new Date().toISOString(),
      tipo: 'NUEVOS_HUECOS_SECUENCIA',
      cantidad: huecosNuevos.length,
      huecos: huecosNuevos
    }, null, 2))
    
    console.log(`🚨 Alerta guardada`)
  }

  async iniciarMonitoreoSecuencia() {
    console.log('\n🔄 INICIANDO MONITOREO CON SECUENCIA COMPLETA...')
    console.log('📊 Consultas cada 30 segundos')
    console.log('🛑 Presiona Ctrl+C para detener\n')
    
    this.running = true
    
    while (this.running) {
      try {
        const resultado = await this.consultarSecuenciaCompleta()
        
        if (!resultado) {
          console.log('⚠️ Error en consulta - Reintentando...')
          await new Promise(resolve => setTimeout(resolve, 10000))
          continue
        }
        
        const { huecos } = resultado
        
        if (huecos.length === 0) {
          console.log('📭 No hay huecos disponibles')
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
    console.log('🚀 WATCHER SECUENCIA COMPLETA - INICIANDO...')
    
    // Cargar cookies existentes
    const cookiesOk = await this.cargarCookies()
    if (!cookiesOk) {
      console.log('❌ No hay cookies válidas')
      return
    }
    
    console.log(`🍪 Usando ${this.cookies.length} cookies de citaconsular.es`)
    
    // Iniciar monitoreo
    await this.iniciarMonitoreoSecuencia()
  }

  stop() {
    this.running = false
    console.log('🛑 Watcher detenido')
  }
}

// Ejecutar
const watcher = new WatcherSecuenciaCompleta()

process.on('SIGINT', async () => {
  console.log('\n🛑 Deteniendo watcher...')
  watcher.stop()
  process.exit(0)
})

console.log('🚀 Iniciando Watcher Secuencia Completa...')
console.log('🔄 Replica la secuencia exacta del análisis exitoso')
console.log('📋 1. getwidgetconfigurations → 2. getservices → 3. getagendas → 4. datetime')
console.log('⚡ Consultas cada 30 segundos\n')

watcher.ejecutar().catch(console.error)
