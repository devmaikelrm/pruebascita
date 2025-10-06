import { spawn } from 'node:child_process'
import { ReadBuffer, serializeMessage } from '@modelcontextprotocol/sdk/shared/stdio.js'
import { Client } from '@modelcontextprotocol/sdk/client/index.js'

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

function startOfficialServer() {
  const args = [
    '-y',
    'chrome-devtools-mcp@latest',
    '--headless', 'true',
    '--isolated'
  ]
  const cmd = process.platform === 'win32' ? 'npx.cmd' : 'npx'
  const child = spawn(cmd, args, { stdio: ['pipe', 'pipe', 'pipe'], shell: process.platform === 'win32' })
  child.stderr.on('data', (d) => process.stderr.write(d))
  return child
}

async function checkTurismoCitas() {
  const child = startOfficialServer()
  const transport = new StdioTransport(child.stdout, child.stdin)
  const client = new Client({ name: 'turismo-citas-checker', version: '0.0.1' }, { capabilities: { tools: {} } })
  await client.connect(transport)

  try {
    console.log('🚀 Iniciando captura de citas de turismo...')

    // Crear nueva página
    const newPageResult = await client.callTool({
      name: 'new_page',
      arguments: {}
    })
    console.log('✅ Nueva página creada')

    // Navegar a la página de servicios consulares
    await client.callTool({
      name: 'navigate_page',
      arguments: {
        url: 'https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx'
      }
    })
    console.log('✅ Navegando a servicios consulares...')

    // Esperar a que cargue la página
    await client.callTool({
      name: 'wait_for',
      arguments: {
        selector: 'select[aria-label="Países y territorios"]',
        timeout: 10000
      }
    })

    // Seleccionar Cuba
    await client.callTool({
      name: 'fill',
      arguments: {
        selector: 'select[aria-label="Países y territorios"]',
        value: 'Cuba'
      }
    })
    console.log('✅ País seleccionado: Cuba')

    // Seleccionar Visados
    await client.callTool({
      name: 'fill',
      arguments: {
        selector: 'select[aria-label="Categorías servicios"]',
        value: 'Visados'
      }
    })
    console.log('✅ Categoría seleccionada: Visados')

    // Seleccionar delegación (166)
    await client.callTool({
      name: 'fill',
      arguments: {
        selector: 'select[aria-label="Delegaciones"]',
        value: '166'
      }
    })
    console.log('✅ Delegación seleccionada')

    // Seleccionar Turismo/Schengen
    await client.callTool({
      name: 'fill',
      arguments: {
        selector: 'select[aria-label="Servicios consulares"]',
        value: 'Turismo/Schengen'
      }
    })
    console.log('✅ Servicio seleccionado: Turismo/Schengen')

    // Hacer clic en buscar
    await client.callTool({
      name: 'click',
      arguments: {
        selector: 'button[aria-label="Buscar"]'
      }
    })
    console.log('✅ Búsqueda iniciada...')

    // Esperar a que aparezca el enlace de reservar cita
    await client.callTool({
      name: 'wait_for',
      arguments: {
        selector: 'a[href*="citaconsular.es"]',
        timeout: 15000
      }
    })

    // Hacer clic en el enlace de reservar cita
    await client.callTool({
      name: 'click',
      arguments: {
        selector: 'a[href*="citaconsular.es"]'
      }
    })
    console.log('✅ Accediendo al sistema de citas...')

    // Esperar un poco para que se abra la nueva ventana/popup
    await new Promise(resolve => setTimeout(resolve, 3000))

    // Navegar directamente al widget de citas
    await client.callTool({
      name: 'navigate_page',
      arguments: {
        url: 'https://www.citaconsular.es/es/hosteds/widgetdefault/28db94e270580be60f6e00285a7d8141f/bkt873048#datetime'
      }
    })
    console.log('✅ Navegando al widget de citas...')

    // Esperar a que cargue el widget
    await new Promise(resolve => setTimeout(resolve, 5000))

    // Capturar todas las requests de red
    const networkRequests = await client.callTool({
      name: 'list_network_requests',
      arguments: {}
    })

    console.log('📡 Analizando requests de red...')

    // Buscar requests a onlinebookings/datetime
    const availabilityRequests = networkRequests.content.filter(req =>
      req.url && req.url.includes('onlinebookings/datetime')
    )

    if (availabilityRequests.length === 0) {
      console.log('⚠️  No se encontraron requests de disponibilidad')
      return { available: false, reason: 'No se pudo acceder a la API de disponibilidad' }
    }

    console.log(`📊 Encontradas ${availabilityRequests.length} requests de disponibilidad`)

    // Analizar cada request de disponibilidad
    for (const req of availabilityRequests) {
      console.log(`🔍 Analizando request: ${req.url}`)

      try {
        const requestDetails = await client.callTool({
          name: 'get_network_request',
          arguments: {
            requestId: req.requestId
          }
        })

        console.log(`📈 Status: ${requestDetails.content.status}`)
        console.log(`📏 Content Length: ${requestDetails.content.responseBody?.length || 0}`)

        if (requestDetails.content.responseBody && requestDetails.content.responseBody.length > 0) {
          console.log('📄 Respuesta con contenido encontrada')

          // Intentar parsear la respuesta JSONP
          const responseBody = requestDetails.content.responseBody
          if (responseBody.includes('jQuery') && responseBody.includes('(')) {
            // Es una respuesta JSONP, extraer el JSON
            const jsonStart = responseBody.indexOf('(') + 1
            const jsonEnd = responseBody.lastIndexOf(')')
            if (jsonStart > 0 && jsonEnd > jsonStart) {
              const jsonData = responseBody.substring(jsonStart, jsonEnd)
              try {
                const data = JSON.parse(jsonData)
                console.log('✅ Datos de disponibilidad parseados exitosamente')

                // Analizar disponibilidad
                const hasAvailability = analyzeAvailability(data)
                return {
                  available: hasAvailability.available,
                  reason: hasAvailability.reason,
                  data: data,
                  url: req.url
                }
              } catch (parseError) {
                console.log('❌ Error parseando JSON:', parseError.message)
              }
            }
          }
        } else {
          console.log('📭 Respuesta vacía (sin citas disponibles)')
        }
      } catch (error) {
        console.log(`❌ Error obteniendo detalles del request: ${error.message}`)
      }
    }

    return {
      available: false,
      reason: 'No se encontraron citas disponibles en el período consultado',
      requestsAnalyzed: availabilityRequests.length
    }

  } catch (error) {
    console.error('❌ Error durante la captura:', error)
    return { available: false, reason: `Error: ${error.message}` }
  } finally {
    await client.close()
    child.kill('SIGINT')
  }
}

function analyzeAvailability(data) {
  // Analizar la estructura de datos de disponibilidad
  if (!data) {
    return { available: false, reason: 'No hay datos de disponibilidad' }
  }

  // Buscar slots disponibles en diferentes estructuras posibles
  if (data.days && Object.keys(data.days).length > 0) {
    const availableDays = Object.entries(data.days).filter(([date, dayData]) => {
      return dayData && (dayData.slots || dayData.available || dayData.times)
    })

    if (availableDays.length > 0) {
      return {
        available: true,
        reason: `${availableDays.length} días con citas disponibles`,
        availableDays: availableDays.map(([date]) => date)
      }
    }
  }

  if (data.months && Array.isArray(data.months)) {
    for (const month of data.months) {
      if (month.days && Object.keys(month.days).length > 0) {
        const availableDays = Object.entries(month.days).filter(([date, dayData]) => {
          return dayData && (dayData.slots || dayData.available || dayData.times)
        })

        if (availableDays.length > 0) {
          return {
            available: true,
            reason: `${availableDays.length} días con citas disponibles en ${month.range || 'mes'}`,
            availableDays: availableDays.map(([date]) => date)
          }
        }
      }
    }
  }

  // Buscar otras estructuras posibles
  if (data.available === true || data.hasSlots === true) {
    return { available: true, reason: 'Citas disponibles según flag de disponibilidad' }
  }

  if (data.slots && Array.isArray(data.slots) && data.slots.length > 0) {
    return {
      available: true,
      reason: `${data.slots.length} slots disponibles`,
      slots: data.slots
    }
  }

  return { available: false, reason: 'No se encontraron citas disponibles en los datos' }
}

async function main() {
  const child = startOfficialServer()
  const transport = new StdioTransport(child.stdout, child.stdin)
  const client = new Client({ name: 'cdtp-official-client', version: '0.0.1' }, { capabilities: { tools: {} } })
  await client.connect(transport)

  const tools = await client.listTools()
  console.log('Official MCP tools:', tools.tools.map(t => t.name))

  for (const t of tools.tools) {
    console.log(`\n== ${t.name} ==`)
    console.log(JSON.stringify(t.inputSchema, null, 2))
  }

  await client.close()
  child.kill('SIGINT')
}

main().catch((err) => { console.error(err); process.exit(1) })
