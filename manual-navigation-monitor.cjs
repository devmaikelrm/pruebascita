#!/usr/bin/env node

/**
 * Monitor manual de navegación con MCP Chrome DevTools
 * 
 * Este script abre Chrome en modo visible y monitorea en tiempo real:
 * - Todas las peticiones de red
 * - Logs de consola
 * - Cambios en la página
 * 
 * Tú haces la navegación manual, yo veo todo lo que pasa
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

class ManualNavigationMonitor {
  constructor() {
    this.mcpChild = null
    this.mcpClient = null
    this.mcpTransport = null
    this.sessionId = `manual-session-${Date.now()}`
    this.logDir = `logs/manual-navigation/${this.sessionId}`
    this.networkRequests = []
    this.consoleLogs = []
    this.lastNetworkCheck = 0
    this.monitoringInterval = null
    
    // Crear directorio de logs
    fs.mkdirSync(this.logDir, { recursive: true })
    
    console.log(`🔍 Monitor de navegación manual iniciado`)
    console.log(`📁 Logs se guardarán en: ${this.logDir}`)
  }

  async start() {
    try {
      console.log('🚀 Iniciando MCP Chrome DevTools...')
      await this.initializeMCP()
      
      console.log('📄 Abriendo página inicial...')
      await this.openInitialPage()
      
      console.log('👀 Iniciando monitoreo en tiempo real...')
      await this.startMonitoring()
      
      console.log('\n' + '='.repeat(60))
      console.log('🎯 CHROME ESTÁ ABIERTO Y LISTO')
      console.log('='.repeat(60))
      console.log('👆 Ahora haz la navegación manual:')
      console.log('1. Ve a https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx')
      console.log('2. Selecciona: Cuba > Visados > 166 > Turismo/Schengen')
      console.log('3. Haz clic en Buscar')
      console.log('4. Sigue el flujo hasta llegar a las citas')
      console.log('5. Yo estaré monitoreando todo en tiempo real')
      console.log('='.repeat(60))
      console.log('Presiona Ctrl+C cuando termines\n')
      
      // Mantener vivo y monitorear
      await this.keepAliveAndMonitor()
      
    } catch (error) {
      console.error('❌ Error:', error)
      await this.cleanup()
      process.exit(1)
    }
  }

  async initializeMCP() {
    const args = [
      '-y',
      'chrome-devtools-mcp@latest',
      '--headless', 'false', // VISIBLE para navegación manual
      '--isolated'
    ]
    const cmd = process.platform === 'win32' ? 'npx.cmd' : 'npx'
    this.mcpChild = spawn(cmd, args, { stdio: ['pipe', 'pipe', 'pipe'], shell: process.platform === 'win32' })
    
    this.mcpChild.stderr.on('data', (d) => {
      const errorText = d.toString()
      if (errorText.includes('ERROR') || errorText.includes('FATAL')) {
        console.error(`🔴 MCP Error:`, errorText)
      }
    })
    
    this.mcpTransport = new StdioTransport(this.mcpChild.stdout, this.mcpChild.stdin)
    this.mcpClient = new Client({ 
      name: 'manual-navigation-monitor', 
      version: '1.0.0' 
    }, { capabilities: { tools: {} } })
    
    await this.mcpClient.connect(this.mcpTransport)
  }

  async openInitialPage() {
    // Abrir página inicial
    await this.mcpClient.callTool({
      name: 'new_page',
      arguments: {
        url: 'https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx'
      }
    })
    
    await this.sleep(2000)
  }

  async startMonitoring() {
    // Iniciar monitoreo cada 2 segundos
    this.monitoringInterval = setInterval(async () => {
      try {
        await this.checkNetworkRequests()
        await this.checkConsoleLogs()
      } catch (error) {
        console.warn('⚠️ Error en monitoreo:', error.message)
      }
    }, 2000)
  }

  async checkNetworkRequests() {
    try {
      const networkResult = await this.mcpClient.callTool({
        name: 'list_network_requests',
        arguments: {}
      })
      
      if (networkResult.content) {
        const currentRequests = this.parseNetworkRequests(networkResult.content)
        const newRequests = currentRequests.slice(this.lastNetworkCheck)
        
        if (newRequests.length > 0) {
          console.log(`\n📡 NUEVAS PETICIONES DE RED (${newRequests.length}):`)
          console.log('-'.repeat(50))
          
          for (const req of newRequests) {
            const timestamp = new Date().toLocaleTimeString()
            console.log(`[${timestamp}] ${req.method} ${req.url}`)
            console.log(`   Status: ${req.status} | Type: ${req.type}`)
            
            // Si es una petición de disponibilidad, analizarla en detalle
            if (req.url.includes('onlinebookings/datetime')) {
              console.log(`   🎯 ¡PETICIÓN DE DISPONIBILIDAD DETECTADA!`)
              await this.analyzeAvailabilityRequest(req)
            }
            
            if (req.url.includes('citaconsular.es')) {
              console.log(`   🔗 Petición al sistema de citas`)
            }
            
            console.log('')
          }
          
          this.networkRequests.push(...newRequests)
          this.lastNetworkCheck = currentRequests.length
          
          // Guardar requests en archivo
          this.saveNetworkRequests()
        }
      }
    } catch (error) {
      // Silenciar errores de red para no spam
    }
  }

  async checkConsoleLogs() {
    try {
      const consoleResult = await this.mcpClient.callTool({
        name: 'list_console_messages',
        arguments: {}
      })
      
      if (consoleResult.content) {
        const currentLogs = this.parseConsoleLogs(consoleResult.content)
        const newLogs = currentLogs.slice(this.consoleLogs.length)
        
        if (newLogs.length > 0) {
          console.log(`\n💬 NUEVOS LOGS DE CONSOLA (${newLogs.length}):`)
          console.log('-'.repeat(50))
          
          for (const log of newLogs) {
            const timestamp = new Date().toLocaleTimeString()
            const emoji = this.getLogEmoji(log.level)
            console.log(`[${timestamp}] ${emoji} ${log.level.toUpperCase()}: ${log.text}`)
          }
          console.log('')
          
          this.consoleLogs.push(...newLogs)
          this.saveConsoleLogs()
        }
      }
    } catch (error) {
      // Silenciar errores de consola
    }
  }

  async analyzeAvailabilityRequest(request) {
    try {
      console.log(`   🔍 Analizando petición de disponibilidad...`)
      
      const details = await this.mcpClient.callTool({
        name: 'get_network_request',
        arguments: { url: request.url }
      })
      
      if (details.content && details.content.responseBody) {
        const responseBody = details.content.responseBody
        console.log(`   📏 Tamaño de respuesta: ${responseBody.length} caracteres`)
        
        if (responseBody.length === 0) {
          console.log(`   📭 Respuesta vacía - NO HAY CITAS`)
        } else {
          console.log(`   📄 Respuesta con contenido - POSIBLES CITAS`)
          
          // Intentar parsear JSONP
          if (responseBody.includes('jQuery') && responseBody.includes('(')) {
            const jsonStart = responseBody.indexOf('(') + 1
            const jsonEnd = responseBody.lastIndexOf(')')
            
            if (jsonStart > 0 && jsonEnd > jsonStart) {
              try {
                const jsonData = responseBody.substring(jsonStart, jsonEnd)
                const data = JSON.parse(jsonData)
                
                console.log(`   ✅ Datos parseados exitosamente`)
                const slots = this.extractSlots(data)
                
                if (slots.length > 0) {
                  console.log(`   🎉 ¡${slots.length} CITAS ENCONTRADAS!`)
                  slots.slice(0, 5).forEach(slot => {
                    console.log(`      📅 ${slot.date} ${slot.time} (${slot.available} disponibles)`)
                  })
                  if (slots.length > 5) {
                    console.log(`      ... y ${slots.length - 5} más`)
                  }
                } else {
                  console.log(`   📭 No hay citas en los datos`)
                }
                
                // Guardar datos de disponibilidad
                this.saveAvailabilityData(request.url, data, slots)
                
              } catch (parseError) {
                console.log(`   ❌ Error parseando JSON: ${parseError.message}`)
              }
            }
          } else {
            console.log(`   📄 Respuesta no es JSONP válido`)
            console.log(`   Preview: ${responseBody.substring(0, 200)}...`)
          }
        }
      }
    } catch (error) {
      console.log(`   ❌ Error analizando petición: ${error.message}`)
    }
  }

  extractSlots(data) {
    const slots = []
    
    if (!data || typeof data !== 'object') return slots

    // Buscar en diferentes estructuras
    for (const [key, value] of Object.entries(data)) {
      if (/^\d{4}-\d{2}-\d{2}$/.test(key) && Array.isArray(value)) {
        for (const slot of value) {
          if (slot.time && (slot.available > 0 || slot.count > 0 || slot.slots > 0)) {
            slots.push({
              date: key,
              time: slot.time,
              available: slot.available || slot.count || slot.slots || 1
            })
          }
        }
      }
    }

    return slots
  }

  parseNetworkRequests(content) {
    // Parsear el contenido de network requests
    const requests = []
    
    if (typeof content === 'string') {
      const lines = content.split('\n')
      for (const line of lines) {
        if (line.includes('GET') || line.includes('POST')) {
          const parts = line.trim().split(' ')
          if (parts.length >= 3) {
            requests.push({
              url: parts[0],
              method: parts[1],
              status: parts[2],
              type: 'unknown'
            })
          }
        }
      }
    }
    
    return requests
  }

  parseConsoleLogs(content) {
    // Parsear logs de consola
    const logs = []
    
    if (typeof content === 'string') {
      const lines = content.split('\n')
      for (const line of lines) {
        if (line.trim()) {
          logs.push({
            level: 'info',
            text: line.trim(),
            timestamp: new Date().toISOString()
          })
        }
      }
    }
    
    return logs
  }

  getLogEmoji(level) {
    const emojis = {
      error: '🔴',
      warn: '🟡',
      info: '🔵',
      debug: '⚪'
    }
    return emojis[level] || '📝'
  }

  saveNetworkRequests() {
    const filePath = path.join(this.logDir, 'network-requests.json')
    fs.writeFileSync(filePath, JSON.stringify(this.networkRequests, null, 2))
  }

  saveConsoleLogs() {
    const filePath = path.join(this.logDir, 'console-logs.json')
    fs.writeFileSync(filePath, JSON.stringify(this.consoleLogs, null, 2))
  }

  saveAvailabilityData(url, data, slots) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
    const filePath = path.join(this.logDir, `availability-${timestamp}.json`)
    
    fs.writeFileSync(filePath, JSON.stringify({
      timestamp: new Date().toISOString(),
      url,
      rawData: data,
      extractedSlots: slots,
      summary: {
        totalSlots: slots.length,
        availableDates: [...new Set(slots.map(s => s.date))],
        hasAvailability: slots.length > 0
      }
    }, null, 2))
    
    console.log(`   💾 Datos guardados en: ${filePath}`)
  }

  async keepAliveAndMonitor() {
    return new Promise((resolve) => {
      // Manejar Ctrl+C
      process.on('SIGINT', async () => {
        console.log('\n🛑 Cerrando monitor...')
        await this.cleanup()
        resolve()
      })
      
      process.on('SIGTERM', async () => {
        console.log('\n🛑 Terminando monitor...')
        await this.cleanup()
        resolve()
      })
    })
  }

  async cleanup() {
    console.log('🧹 Limpiando recursos...')
    
    if (this.monitoringInterval) {
      clearInterval(this.monitoringInterval)
    }
    
    try {
      if (this.mcpClient) {
        await this.mcpClient.close()
      }
      if (this.mcpChild) {
        this.mcpChild.kill('SIGINT')
      }
      if (this.mcpTransport) {
        await this.mcpTransport.close()
      }
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
        citaConsularRequests: this.networkRequests.filter(r => r.url.includes('citaconsular.es')).length
      },
      networkRequests: this.networkRequests,
      consoleLogs: this.consoleLogs
    }
    
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2))
    
    console.log(`\n📊 REPORTE FINAL:`)
    console.log(`📁 Directorio: ${this.logDir}`)
    console.log(`📡 Peticiones de red: ${report.summary.totalNetworkRequests}`)
    console.log(`💬 Logs de consola: ${report.summary.totalConsoleLogs}`)
    console.log(`🎯 Peticiones de disponibilidad: ${report.summary.availabilityRequests}`)
    console.log(`🔗 Peticiones a citaconsular: ${report.summary.citaConsularRequests}`)
    console.log(`📄 Reporte completo: ${reportPath}`)
  }

  async sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
}

// Ejecutar monitor
if (require.main === module) {
  const monitor = new ManualNavigationMonitor()
  monitor.start().catch(error => {
    console.error('❌ Error fatal:', error)
    process.exit(1)
  })
}

module.exports = { ManualNavigationMonitor }
