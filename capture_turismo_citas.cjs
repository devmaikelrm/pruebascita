#!/usr/bin/env node

/**
 * Script para capturar información de citas de turismo usando MCP Chrome DevTools
 * 
 * Uso:
 *   node capture_turismo_citas.js
 * 
 * Este script:
 * 1. Usa Chrome DevTools MCP para navegar al sitio de citas
 * 2. Realiza el flujo completo de búsqueda de citas de turismo
 * 3. Captura las llamadas a la API de disponibilidad
 * 4. Analiza si hay citas disponibles
 * 5. Guarda los resultados en archivos JSON
 */

const { spawn } = require('node:child_process')
const { ReadBuffer, serializeMessage } = require('@modelcontextprotocol/sdk/shared/stdio.js')
const { Client } = require('@modelcontextprotocol/sdk/client/index.js')
const fs = require('fs')
const path = require('path')

class StdioTransport {
  constructor(input, output) {
    this.input = input
    this.output = output
    this.onclose = undefined
    this.onerror = undefined
    this.onmessage = undefined
    this._buffer = new ReadBuffer()
    this._onData = (chunk) => {
      this._buffer.append(chunk)
      let msg
      while ((msg = this._buffer.readMessage())) {
        try { this.onmessage?.(msg) } catch (e) { this.onerror?.(e) }
      }
    }
  }
  async start() { this.input.on('data', this._onData) }
  async send(message) { this.output.write(serializeMessage(message)) }
  async close() { this.input.off('data', this._onData); this.onclose?.() }
}

function startChromeDevToolsMCP() {
  const args = [
    '-y',
    'chrome-devtools-mcp@latest',
    '--headless', 'false', // Cambiar a false para ver el navegador
    '--isolated'
  ]
  const cmd = process.platform === 'win32' ? 'npx.cmd' : 'npx'
  const child = spawn(cmd, args, { stdio: ['pipe', 'pipe', 'pipe'], shell: process.platform === 'win32' })
  child.stderr.on('data', (d) => process.stderr.write(d))
  return child
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function captureTurismoCitas() {
  const child = startChromeDevToolsMCP()
  const transport = new StdioTransport(child.stdout, child.stdin)
  const client = new Client({ name: 'turismo-citas-capturer', version: '1.0.0' }, { capabilities: { tools: {} } })
  
  const sessionId = `turismo-capture-${new Date().toISOString().replace(/[:.]/g, '-')}`
  const outputDir = `logs/turismo-captures/${sessionId}`
  
  // Crear directorio de salida
  fs.mkdirSync(outputDir, { recursive: true })
  
  try {
    await client.connect(transport)
    console.log('🚀 Conectado al MCP Chrome DevTools')
    
    const result = {
      sessionId,
      startedAt: new Date().toISOString(),
      steps: [],
      networkRequests: [],
      availability: null,
      error: null
    }

    // Paso 1: Crear nueva página
    console.log('📄 Creando nueva página...')
    await client.callTool({
      name: 'new_page',
      arguments: {
        url: 'about:blank'
      }
    })
    result.steps.push({ step: 'new_page', timestamp: new Date().toISOString(), status: 'success' })

    // Paso 2: Navegar a servicios consulares
    console.log('🌐 Navegando a servicios consulares...')
    await client.callTool({
      name: 'navigate_page',
      arguments: {
        url: 'https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx'
      }
    })
    result.steps.push({ step: 'navigate_to_servicios', timestamp: new Date().toISOString(), status: 'success' })

    // Paso 3: Esperar y llenar formulario
    console.log('⏳ Esperando formulario...')
    await client.callTool({
      name: 'wait_for',
      arguments: {
        selector: 'select[aria-label="Países y territorios"]',
        timeout: 15000
      }
    })

    console.log('🇨🇺 Seleccionando Cuba...')
    await client.callTool({
      name: 'fill',
      arguments: {
        selector: 'select[aria-label="Países y territorios"]',
        value: 'Cuba'
      }
    })

    console.log('📋 Seleccionando Visados...')
    await client.callTool({
      name: 'fill',
      arguments: {
        selector: 'select[aria-label="Categorías servicios"]',
        value: 'Visados'
      }
    })

    console.log('🏢 Seleccionando delegación...')
    await client.callTool({
      name: 'fill',
      arguments: {
        selector: 'select[aria-label="Delegaciones"]',
        value: '166'
      }
    })

    console.log('🎯 Seleccionando Turismo/Schengen...')
    await client.callTool({
      name: 'fill',
      arguments: {
        selector: 'select[aria-label="Servicios consulares"]',
        value: 'Turismo/Schengen'
      }
    })

    result.steps.push({ step: 'form_filled', timestamp: new Date().toISOString(), status: 'success' })

    // Paso 4: Buscar
    console.log('🔍 Iniciando búsqueda...')
    await client.callTool({
      name: 'click',
      arguments: {
        selector: 'button[aria-label="Buscar"]'
      }
    })

    // Paso 5: Esperar enlace de citas
    console.log('⏳ Esperando enlace de citas...')
    await client.callTool({
      name: 'wait_for',
      arguments: {
        selector: 'a[href*="citaconsular.es"]',
        timeout: 20000
      }
    })

    // Paso 6: Hacer clic en enlace de citas
    console.log('🔗 Accediendo al sistema de citas...')
    await client.callTool({
      name: 'click',
      arguments: {
        selector: 'a[href*="citaconsular.es"]'
      }
    })

    result.steps.push({ step: 'clicked_citas_link', timestamp: new Date().toISOString(), status: 'success' })

    // Paso 7: Esperar y navegar al widget
    console.log('⏳ Esperando carga del sistema...')
    await sleep(5000)

    console.log('🎛️ Navegando al widget de citas...')
    await client.callTool({
      name: 'navigate_page',
      arguments: {
        url: 'https://www.citaconsular.es/es/hosteds/widgetdefault/28db94e270580be60f6e00285a7d8141f/bkt873048#datetime'
      }
    })

    result.steps.push({ step: 'navigate_to_widget', timestamp: new Date().toISOString(), status: 'success' })

    // Paso 8: Esperar carga del widget y capturar requests
    console.log('⏳ Esperando carga del widget...')
    await sleep(8000)

    console.log('📡 Capturando requests de red...')
    const networkResult = await client.callTool({
      name: 'list_network_requests',
      arguments: {}
    })

    result.networkRequests = networkResult.content || []
    result.steps.push({ step: 'captured_network', timestamp: new Date().toISOString(), status: 'success' })

    // Paso 9: Analizar requests de disponibilidad
    console.log('🔍 Analizando disponibilidad...')
    const availabilityAnalysis = await analyzeAvailabilityRequests(client, result.networkRequests)
    result.availability = availabilityAnalysis

    result.steps.push({ step: 'analyzed_availability', timestamp: new Date().toISOString(), status: 'success' })

    // Paso 10: Tomar screenshot
    console.log('📸 Tomando screenshot...')
    try {
      const screenshot = await client.callTool({
        name: 'take_screenshot',
        arguments: {}
      })
      
      if (screenshot.content && screenshot.content.data) {
        const screenshotPath = path.join(outputDir, 'screenshot.png')
        fs.writeFileSync(screenshotPath, Buffer.from(screenshot.content.data, 'base64'))
        result.screenshotPath = screenshotPath
      }
    } catch (screenshotError) {
      console.log('⚠️ No se pudo tomar screenshot:', screenshotError.message)
    }

    result.completedAt = new Date().toISOString()
    result.durationMs = new Date(result.completedAt) - new Date(result.startedAt)

    // Guardar resultados
    const resultPath = path.join(outputDir, 'result.json')
    fs.writeFileSync(resultPath, JSON.stringify(result, null, 2))

    const networkPath = path.join(outputDir, 'network.json')
    fs.writeFileSync(networkPath, JSON.stringify(result.networkRequests, null, 2))

    console.log('\n🎯 CAPTURA COMPLETADA')
    console.log('=====================')
    console.log(`📁 Resultados guardados en: ${outputDir}`)
    console.log(`⏱️ Duración: ${result.durationMs}ms`)
    
    if (result.availability) {
      console.log(`📊 Citas disponibles: ${result.availability.available ? '✅ SÍ' : '❌ NO'}`)
      console.log(`📝 Razón: ${result.availability.reason}`)
      
      if (result.availability.availableDays && result.availability.availableDays.length > 0) {
        console.log(`📅 Días disponibles: ${result.availability.availableDays.join(', ')}`)
      }
    }

    return result

  } catch (error) {
    console.error('❌ Error durante la captura:', error)
    const errorResult = {
      sessionId,
      startedAt: new Date().toISOString(),
      completedAt: new Date().toISOString(),
      error: error.message,
      steps: (typeof result !== 'undefined' && result.steps) ? result.steps : []
    }
    
    const errorPath = path.join(outputDir, 'error.json')
    fs.writeFileSync(errorPath, JSON.stringify(errorResult, null, 2))
    
    return errorResult
  } finally {
    try {
      await client.close()
      child.kill('SIGINT')
    } catch (cleanupError) {
      console.log('⚠️ Error en cleanup:', cleanupError.message)
    }
  }
}

async function analyzeAvailabilityRequests(client, networkRequests) {
  const availabilityRequests = networkRequests.filter(req => 
    req.url && req.url.includes('onlinebookings/datetime')
  )

  if (availabilityRequests.length === 0) {
    return {
      available: false,
      reason: 'No se encontraron requests de disponibilidad',
      requestsFound: 0
    }
  }

  console.log(`📊 Encontradas ${availabilityRequests.length} requests de disponibilidad`)

  for (const req of availabilityRequests) {
    try {
      const requestDetails = await client.callTool({
        name: 'get_network_request',
        arguments: {
          requestId: req.requestId
        }
      })

      if (requestDetails.content && requestDetails.content.responseBody) {
        const responseBody = requestDetails.content.responseBody
        
        if (responseBody.length === 0) {
          console.log('📭 Respuesta vacía (sin citas)')
          continue
        }

        // Intentar parsear respuesta JSONP
        if (responseBody.includes('jQuery') && responseBody.includes('(')) {
          const jsonStart = responseBody.indexOf('(') + 1
          const jsonEnd = responseBody.lastIndexOf(')')
          
          if (jsonStart > 0 && jsonEnd > jsonStart) {
            try {
              const jsonData = responseBody.substring(jsonStart, jsonEnd)
              const data = JSON.parse(jsonData)
              
              const analysis = analyzeAvailabilityData(data)
              analysis.url = req.url
              analysis.requestsFound = availabilityRequests.length
              analysis.rawData = data
              
              return analysis
            } catch (parseError) {
              console.log('❌ Error parseando JSON:', parseError.message)
            }
          }
        }
      }
    } catch (error) {
      console.log(`❌ Error obteniendo detalles del request: ${error.message}`)
    }
  }

  return {
    available: false,
    reason: 'No se pudieron analizar las respuestas de disponibilidad',
    requestsFound: availabilityRequests.length
  }
}

function analyzeAvailabilityData(data) {
  if (!data) {
    return { available: false, reason: 'No hay datos de disponibilidad' }
  }

  // Buscar días disponibles
  if (data.days && typeof data.days === 'object') {
    const availableDays = Object.entries(data.days).filter(([date, dayData]) => {
      return dayData && (
        dayData.slots || 
        dayData.available || 
        dayData.times ||
        (Array.isArray(dayData) && dayData.length > 0)
      )
    })
    
    if (availableDays.length > 0) {
      return { 
        available: true, 
        reason: `${availableDays.length} días con citas disponibles`,
        availableDays: availableDays.map(([date]) => date),
        dayDetails: Object.fromEntries(availableDays)
      }
    }
  }

  // Buscar en estructura de meses
  if (data.months && Array.isArray(data.months)) {
    for (const month of data.months) {
      if (month.days && typeof month.days === 'object') {
        const availableDays = Object.entries(month.days).filter(([date, dayData]) => {
          return dayData && (
            dayData.slots || 
            dayData.available || 
            dayData.times ||
            (Array.isArray(dayData) && dayData.length > 0)
          )
        })
        
        if (availableDays.length > 0) {
          return { 
            available: true, 
            reason: `${availableDays.length} días con citas disponibles en ${month.range || 'mes'}`,
            availableDays: availableDays.map(([date]) => date),
            monthRange: month.range,
            dayDetails: Object.fromEntries(availableDays)
          }
        }
      }
    }
  }

  // Buscar flags de disponibilidad
  if (data.available === true || data.hasSlots === true) {
    return { available: true, reason: 'Citas disponibles según flag de disponibilidad' }
  }

  // Buscar slots directos
  if (data.slots && Array.isArray(data.slots) && data.slots.length > 0) {
    return { 
      available: true, 
      reason: `${data.slots.length} slots disponibles`,
      slots: data.slots
    }
  }

  return { available: false, reason: 'No se encontraron citas disponibles en los datos' }
}

// Ejecutar si es llamado directamente
if (require.main === module) {
  captureTurismoCitas()
    .then(result => {
      console.log('\n✅ Captura finalizada exitosamente')
      process.exit(0)
    })
    .catch(error => {
      console.error('\n❌ Error en captura:', error)
      process.exit(1)
    })
}

module.exports = { captureTurismoCitas, analyzeAvailabilityData }
