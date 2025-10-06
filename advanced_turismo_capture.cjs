#!/usr/bin/env node

/**
 * Script avanzado para capturar información de citas de turismo usando MCP Chrome DevTools
 * 
 * Este script:
 * 1. Navega al widget de citas
 * 2. Ejecuta JavaScript para forzar la carga de disponibilidad
 * 3. Captura las llamadas a la API de disponibilidad
 * 4. Analiza si hay citas disponibles
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
    '--headless', 'false',
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

async function advancedTurismoCapture() {
  const child = startChromeDevToolsMCP()
  const transport = new StdioTransport(child.stdout, child.stdin)
  const client = new Client({ name: 'advanced-turismo-capturer', version: '1.0.0' }, { capabilities: { tools: {} } })
  
  const sessionId = `advanced-turismo-${new Date().toISOString().replace(/[:.]/g, '-')}`
  const outputDir = `logs/turismo-captures/${sessionId}`
  
  // Crear directorio de salida
  fs.mkdirSync(outputDir, { recursive: true })
  
  const result = {
    sessionId,
    startedAt: new Date().toISOString(),
    steps: [],
    networkRequests: [],
    availability: null,
    error: null,
    jsResults: []
  }

  try {
    await client.connect(transport)
    console.log('🚀 Conectado al MCP Chrome DevTools')
    
    // Paso 1: Crear nueva página y navegar al widget
    console.log('📄 Creando nueva página y navegando al widget...')
    await client.callTool({
      name: 'new_page',
      arguments: {
        url: 'https://www.citaconsular.es/es/hosteds/widgetdefault/28db94e270580be60f6e00285a7d8141f/bkt873048#datetime'
      }
    })
    result.steps.push({ step: 'navigate_to_widget', timestamp: new Date().toISOString(), status: 'success' })

    // Paso 2: Esperar carga inicial
    console.log('⏳ Esperando carga inicial...')
    await sleep(8000)

    // Paso 3: Ejecutar JavaScript para forzar la carga de disponibilidad
    console.log('🔧 Ejecutando JavaScript para forzar carga de disponibilidad...')
    
    const jsScript = `
      async () => {
        const results = [];
        
        // Función para construir URL de disponibilidad
        function buildAvailabilityUrl() {
          const params = new URLSearchParams();
          params.append('callback', 'jQuery' + Math.floor(Math.random() * 1e12) + '_' + Date.now());
          params.append('type', 'default');
          params.append('publickey', '28db94e270580be60f6e00285a7d8141f');
          params.append('lang', 'es');
          params.append('version', '5');
          params.append('src', 'https://www.citaconsular.es/es/hosteds/widgetdefault/28db94e270580be60f6e00285a7d8141f/bkt873048');
          params.append('srvsrc', 'https://citaconsular.es');
          
          const start = new Date();
          const end = new Date(Date.now() + 30 * 86400 * 1000); // 30 días
          params.append('start', start.toISOString().split('T')[0]);
          params.append('end', end.toISOString().split('T')[0]);
          
          params.append('selectedPeople', '1');
          params.append('services[]', 'bkt873048');
          params.append('agendas[]', 'bkt873048');
          params.append('_', Date.now().toString());
          
          return 'https://www.citaconsular.es/onlinebookings/datetime/?' + params.toString();
        }
        
        // Intentar hacer fetch directo
        try {
          const url = buildAvailabilityUrl();
          results.push({ action: 'built_url', url: url });
          
          const response = await fetch(url, { 
            credentials: 'include',
            headers: {
              'Accept': '*/*',
              'Accept-Language': 'es-ES,es;q=0.9',
              'Referer': window.location.href
            }
          });
          
          const text = await response.text();
          results.push({ 
            action: 'fetch_response', 
            status: response.status, 
            length: text.length,
            preview: text.substring(0, 500)
          });
          
          // Intentar parsear JSONP si es posible
          if (text.includes('jQuery') && text.includes('(')) {
            const jsonStart = text.indexOf('(') + 1;
            const jsonEnd = text.lastIndexOf(')');
            if (jsonStart > 0 && jsonEnd > jsonStart) {
              try {
                const jsonData = text.substring(jsonStart, jsonEnd);
                const data = JSON.parse(jsonData);
                results.push({ action: 'parsed_data', data: data });
              } catch (parseError) {
                results.push({ action: 'parse_error', error: parseError.message });
              }
            }
          }
          
        } catch (fetchError) {
          results.push({ action: 'fetch_error', error: fetchError.message });
        }
        
        // Buscar elementos del widget en la página
        const widgetElements = [];
        const selectors = [
          '#idBktWidgetDefaultBodyContainer',
          '.bkt-widget',
          '[class*="widget"]',
          '[id*="widget"]',
          '[class*="calendar"]',
          '[id*="calendar"]'
        ];
        
        for (const selector of selectors) {
          const elements = document.querySelectorAll(selector);
          if (elements.length > 0) {
            widgetElements.push({ selector, count: elements.length });
          }
        }
        
        results.push({ action: 'widget_elements', elements: widgetElements });
        
        // Buscar scripts que puedan contener configuración
        const scripts = Array.from(document.scripts).map(script => ({
          src: script.src,
          hasContent: script.innerHTML.length > 0,
          contentPreview: script.innerHTML.substring(0, 200)
        }));
        
        results.push({ action: 'scripts_found', scripts: scripts });
        
        return results;
      }
    `;

    const jsResult = await client.callTool({
      name: 'evaluate_script',
      arguments: {
        function: jsScript
      }
    })

    result.jsResults = jsResult.content || []
    console.log('✅ JavaScript ejecutado, resultados:', result.jsResults.length)

    // Paso 4: Esperar un poco más para que se procesen las requests
    console.log('⏳ Esperando procesamiento de requests...')
    await sleep(5000)

    // Paso 5: Capturar todas las requests de red
    console.log('📡 Capturando requests de red...')
    const networkResult = await client.callTool({
      name: 'list_network_requests',
      arguments: {}
    })

    result.networkRequests = networkResult.content || []
    console.log(`📊 Capturadas ${Array.isArray(result.networkRequests) ? result.networkRequests.length : 'N/A'} requests de red`)

    // Paso 6: Analizar requests de disponibilidad
    console.log('🔍 Analizando disponibilidad...')
    const availabilityAnalysis = await analyzeAvailabilityRequests(client, result.networkRequests, result.jsResults)
    result.availability = availabilityAnalysis

    // Paso 7: Tomar screenshot final
    console.log('📸 Tomando screenshot final...')
    try {
      const screenshot = await client.callTool({
        name: 'take_screenshot',
        arguments: {
          format: 'png',
          fullPage: true
        }
      })
      
      if (screenshot.content && screenshot.content.data) {
        const screenshotPath = path.join(outputDir, 'final_screenshot.png')
        fs.writeFileSync(screenshotPath, Buffer.from(screenshot.content.data, 'base64'))
        result.screenshotPath = screenshotPath
        console.log(`📸 Screenshot guardado en: ${screenshotPath}`)
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

    const jsPath = path.join(outputDir, 'javascript_results.json')
    fs.writeFileSync(jsPath, JSON.stringify(result.jsResults, null, 2))

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
    result.error = error.message
    result.completedAt = new Date().toISOString()
    
    const errorPath = path.join(outputDir, 'error.json')
    fs.writeFileSync(errorPath, JSON.stringify(result, null, 2))
    
    return result
  } finally {
    try {
      await client.close()
      child.kill('SIGINT')
    } catch (cleanupError) {
      console.log('⚠️ Error en cleanup:', cleanupError.message)
    }
  }
}

async function analyzeAvailabilityRequests(client, networkRequests, jsResults) {
  // Primero revisar si JavaScript obtuvo datos directamente
  for (const jsResult of jsResults) {
    if (jsResult.action === 'parsed_data' && jsResult.data) {
      console.log('✅ Datos de disponibilidad obtenidos via JavaScript')
      const analysis = analyzeAvailabilityData(jsResult.data)
      analysis.source = 'javascript'
      return analysis
    }
  }

  // Luego revisar requests de red
  const availabilityRequests = Array.isArray(networkRequests) 
    ? networkRequests.filter(req => req.url && req.url.includes('onlinebookings/datetime'))
    : []

  if (availabilityRequests.length === 0) {
    return {
      available: false,
      reason: 'No se encontraron requests de disponibilidad',
      requestsFound: 0,
      jsResultsCount: jsResults.length
    }
  }

  console.log(`📊 Encontradas ${availabilityRequests.length} requests de disponibilidad`)

  for (const req of availabilityRequests) {
    try {
      console.log(`🔍 Analizando request: ${req.url}`)
      
      const requestDetails = await client.callTool({
        name: 'get_network_request',
        arguments: {
          url: req.url
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
              analysis.source = 'network'
              
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
    requestsFound: availabilityRequests.length,
    jsResultsCount: jsResults.length
  }
}

function analyzeAvailabilityData(data) {
  if (!data) {
    return { available: false, reason: 'No hay datos de disponibilidad' }
  }

  console.log('🔍 Analizando estructura de datos:', Object.keys(data))

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

  return { available: false, reason: 'No se encontraron citas disponibles en los datos' }
}

// Ejecutar si es llamado directamente
if (require.main === module) {
  advancedTurismoCapture()
    .then(result => {
      console.log('\n✅ Captura finalizada exitosamente')
      process.exit(0)
    })
    .catch(error => {
      console.error('\n❌ Error en captura:', error)
      process.exit(1)
    })
}

module.exports = { advancedTurismoCapture, analyzeAvailabilityData }
