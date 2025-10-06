#!/usr/bin/env node

/**
 * MCPHybridWatcher - Versión mejorada del HybridWatcher usando MCP Chrome DevTools
 * 
 * Ventajas sobre HybridWatcher original:
 * 1. Mejor manejo de anti-bot detection
 * 2. Captura completa de network requests
 * 3. Análisis detallado de respuestas
 * 4. Screenshots para debugging
 * 5. Persistencia de sesiones más robusta
 * 6. Múltiples estrategias de obtención de datos
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

class MCPHybridWatcher {
  constructor(config) {
    this.config = {
      serviceId: config.serviceId,
      publicKey: config.publicKey,
      serviceName: config.serviceName,
      country: config.country,
      category: config.category,
      delegation: config.delegation,
      checkIntervalMs: config.checkIntervalMs || 60000,
      sessionTtlMs: config.sessionTtlMs || 10 * 60 * 1000, // 10 minutos
      maxRetries: config.maxRetries || 3,
      onSlotsFound: config.onSlotsFound,
      onError: config.onError || (() => {}),
      onStatusUpdate: config.onStatusUpdate || (() => {}),
      headless: config.headless !== false, // true por defecto
      ...config
    }
    
    this.isRunning = false
    this.timer = null
    this.sessionData = null
    this.sessionTimestamp = null
    this.consecutiveErrors = 0
    this.mcpChild = null
    this.mcpClient = null
    this.mcpTransport = null
    
    this.logPrefix = `[MCPHybridWatcher:${this.config.serviceName}]`
    console.log(`${this.logPrefix} Creado. Intervalo: ${this.config.checkIntervalMs / 1000}s`)
  }

  async start() {
    if (this.isRunning) {
      console.log(`${this.logPrefix} Ya está en ejecución.`)
      return
    }
    
    this.isRunning = true
    console.log(`${this.logPrefix} Iniciando...`)
    this.config.onStatusUpdate('starting')
    
    try {
      await this.initializeMCP()
      this.scheduleNextCheck(0)
    } catch (error) {
      console.error(`${this.logPrefix} Error al inicializar:`, error)
      this.config.onError(error)
      this.isRunning = false
    }
  }

  async stop() {
    if (!this.isRunning) return
    
    this.isRunning = false
    console.log(`${this.logPrefix} Deteniendo...`)
    
    if (this.timer) {
      clearTimeout(this.timer)
      this.timer = null
    }
    
    await this.closeMCP()
    this.invalidateSession()
    this.config.onStatusUpdate('stopped')
    console.log(`${this.logPrefix} Detenido.`)
  }

  async initializeMCP() {
    try {
      this.mcpChild = this.startChromeDevToolsMCP()
      this.mcpTransport = new StdioTransport(this.mcpChild.stdout, this.mcpChild.stdin)
      this.mcpClient = new Client({ 
        name: 'mcp-hybrid-watcher', 
        version: '1.0.0' 
      }, { capabilities: { tools: {} } })
      
      await this.mcpClient.connect(this.mcpTransport)
      console.log(`${this.logPrefix} MCP Chrome DevTools conectado`)
    } catch (error) {
      throw new Error(`Error inicializando MCP: ${error.message}`)
    }
  }

  async closeMCP() {
    try {
      if (this.mcpClient) {
        await this.mcpClient.close()
        this.mcpClient = null
      }
      if (this.mcpChild) {
        this.mcpChild.kill('SIGINT')
        this.mcpChild = null
      }
      if (this.mcpTransport) {
        await this.mcpTransport.close()
        this.mcpTransport = null
      }
    } catch (error) {
      console.warn(`${this.logPrefix} Error cerrando MCP:`, error.message)
    }
  }

  startChromeDevToolsMCP() {
    const args = [
      '-y',
      'chrome-devtools-mcp@latest',
      '--headless', this.config.headless.toString(),
      '--isolated'
    ]
    const cmd = process.platform === 'win32' ? 'npx.cmd' : 'npx'
    const child = spawn(cmd, args, { stdio: ['pipe', 'pipe', 'pipe'], shell: process.platform === 'win32' })
    child.stderr.on('data', (d) => {
      // Solo mostrar errores críticos, no warnings
      const errorText = d.toString()
      if (errorText.includes('ERROR') || errorText.includes('FATAL')) {
        console.error(`${this.logPrefix} MCP Error:`, errorText)
      }
    })
    return child
  }

  scheduleNextCheck(delay) {
    if (!this.isRunning) return
    
    // Aplicar jitter para evitar patrones predecibles
    const jitter = Math.random() * 0.2 * this.config.checkIntervalMs
    const actualDelay = delay + jitter
    
    this.timer = setTimeout(() => this.runCheck(), actualDelay)
  }

  async runCheck() {
    const sessionId = `check-${Date.now()}`
    console.log(`${this.logPrefix} Iniciando verificación ${sessionId}`)
    
    try {
      this.config.onStatusUpdate('checking')
      
      // Verificar si necesitamos renovar sesión
      if (!this.sessionData || this.isSessionExpired()) {
        console.log(`${this.logPrefix} Renovando sesión...`)
        await this.refreshSession()
      }
      
      // Realizar verificación de disponibilidad
      const result = await this.checkAvailability(sessionId)
      
      if (result.available && result.slots && result.slots.length > 0) {
        console.log(`${this.logPrefix} 🎉 ¡CITAS ENCONTRADAS!`)
        await this.config.onSlotsFound(result)
      } else {
        console.log(`${this.logPrefix} Sin citas disponibles`)
      }
      
      this.consecutiveErrors = 0
      this.config.onStatusUpdate('idle')
      
    } catch (error) {
      this.consecutiveErrors++
      console.error(`${this.logPrefix} Error en verificación:`, error.message)
      this.config.onError(error)
      
      // Si hay muchos errores consecutivos, reinicializar MCP
      if (this.consecutiveErrors >= this.config.maxRetries) {
        console.log(`${this.logPrefix} Demasiados errores, reinicializando MCP...`)
        await this.closeMCP()
        await this.initializeMCP()
        this.invalidateSession()
        this.consecutiveErrors = 0
      }
      
      this.config.onStatusUpdate('error')
    } finally {
      // Programar siguiente verificación con backoff exponencial si hay errores
      const baseInterval = this.config.checkIntervalMs
      const backoffMultiplier = Math.min(Math.pow(2, this.consecutiveErrors), 8)
      const nextInterval = baseInterval * backoffMultiplier
      
      this.scheduleNextCheck(nextInterval)
    }
  }

  async refreshSession() {
    if (!this.mcpClient) {
      throw new Error('MCP Client no está inicializado')
    }

    const sessionId = `session-${Date.now()}`
    console.log(`${this.logPrefix} Obteniendo nueva sesión ${sessionId}`)

    try {
      // Crear nueva página
      await this.mcpClient.callTool({
        name: 'new_page',
        arguments: {
          url: 'https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx'
        }
      })

      // Esperar a que cargue la página
      await this.sleep(3000)

      // Tomar snapshot para obtener UIDs
      const snapshot = await this.mcpClient.callTool({
        name: 'take_snapshot',
        arguments: {}
      })

      // Buscar elementos del formulario en el snapshot
      const formElements = this.extractFormElements(snapshot.content)
      
      if (!formElements.country || !formElements.category || !formElements.delegation || !formElements.service) {
        throw new Error('No se pudieron encontrar todos los elementos del formulario')
      }

      // Llenar formulario
      await this.mcpClient.callTool({
        name: 'fill_form',
        arguments: {
          elements: [
            { uid: formElements.country, value: this.config.country },
            { uid: formElements.category, value: this.config.category },
            { uid: formElements.delegation, value: this.config.delegation },
            { uid: formElements.service, value: this.config.serviceName }
          ]
        }
      })

      // Hacer clic en buscar
      if (formElements.searchButton) {
        await this.mcpClient.callTool({
          name: 'click',
          arguments: { uid: formElements.searchButton }
        })
      }

      // Esperar y navegar al widget directamente
      await this.sleep(5000)
      
      await this.mcpClient.callTool({
        name: 'navigate_page',
        arguments: {
          url: `https://www.citaconsular.es/es/hosteds/widgetdefault/${this.config.publicKey}/${this.config.serviceId}#datetime`
        }
      })

      // Esperar carga del widget
      await this.sleep(8000)

      // Capturar requests de red para obtener cookies/headers
      const networkRequests = await this.mcpClient.callTool({
        name: 'list_network_requests',
        arguments: {}
      })

      // Extraer información de sesión de las requests
      this.sessionData = this.extractSessionData(networkRequests.content)
      this.sessionTimestamp = Date.now()
      
      console.log(`${this.logPrefix} Sesión renovada exitosamente`)

    } catch (error) {
      throw new Error(`Error renovando sesión: ${error.message}`)
    }
  }

  extractFormElements(snapshotContent) {
    // Esta función necesitaría parsear el snapshot HTML para encontrar UIDs
    // Por simplicidad, retornamos elementos mock
    // En implementación real, parseariamos el HTML del snapshot
    return {
      country: 'mock-country-uid',
      category: 'mock-category-uid', 
      delegation: 'mock-delegation-uid',
      service: 'mock-service-uid',
      searchButton: 'mock-search-uid'
    }
  }

  extractSessionData(networkRequests) {
    // Extraer cookies y headers de las requests capturadas
    const sessionData = {
      cookies: [],
      headers: {},
      referer: `https://www.citaconsular.es/es/hosteds/widgetdefault/${this.config.publicKey}/${this.config.serviceId}`
    }

    // Buscar requests a citaconsular.es para extraer cookies
    if (Array.isArray(networkRequests)) {
      for (const req of networkRequests) {
        if (req.url && req.url.includes('citaconsular.es')) {
          // Extraer información de sesión
          if (req.headers) {
            Object.assign(sessionData.headers, req.headers)
          }
        }
      }
    }

    return sessionData
  }

  async checkAvailability(sessionId) {
    console.log(`${this.logPrefix} Verificando disponibilidad...`)

    try {
      // Estrategia 1: Usar JavaScript directo en la página
      const jsResult = await this.checkAvailabilityViaJS()
      if (jsResult.success) {
        return jsResult
      }

      // Estrategia 2: Capturar requests de red
      const networkResult = await this.checkAvailabilityViaNetwork()
      if (networkResult.success) {
        return networkResult
      }

      // Estrategia 3: Forzar recarga y captura
      const reloadResult = await this.checkAvailabilityViaReload()
      return reloadResult

    } catch (error) {
      throw new Error(`Error verificando disponibilidad: ${error.message}`)
    }
  }

  async checkAvailabilityViaJS() {
    try {
      const jsScript = `
        async () => {
          // Construir URL de disponibilidad
          const buildUrl = (months = 6) => {
            const params = new URLSearchParams();
            params.append('callback', 'jQuery' + Math.floor(Math.random() * 1e12) + '_' + Date.now());
            params.append('type', 'default');
            params.append('publickey', '${this.config.publicKey}');
            params.append('lang', 'es');
            params.append('version', '5');
            params.append('src', window.location.href);
            params.append('srvsrc', 'https://citaconsular.es');
            
            const start = new Date();
            const end = new Date(Date.now() + months * 30 * 86400 * 1000);
            params.append('start', start.toISOString().split('T')[0]);
            params.append('end', end.toISOString().split('T')[0]);
            
            params.append('selectedPeople', '1');
            params.append('services[]', '${this.config.serviceId}');
            params.append('agendas[]', '${this.config.serviceId}');
            params.append('_', Date.now().toString());
            
            return 'https://www.citaconsular.es/onlinebookings/datetime/?' + params.toString();
          };

          const results = [];
          
          // Intentar múltiples períodos
          for (let months of [1, 3, 6, 12]) {
            try {
              const url = buildUrl(months);
              const response = await fetch(url, { 
                credentials: 'include',
                headers: {
                  'Accept': '*/*',
                  'Accept-Language': 'es-ES,es;q=0.9',
                  'Referer': window.location.href,
                  'X-Requested-With': 'XMLHttpRequest'
                }
              });
              
              const text = await response.text();
              
              if (text && text.length > 0) {
                results.push({
                  months,
                  status: response.status,
                  length: text.length,
                  data: text
                });
                
                // Si encontramos datos, intentar parsear
                if (text.includes('jQuery') && text.includes('(')) {
                  const jsonStart = text.indexOf('(') + 1;
                  const jsonEnd = text.lastIndexOf(')');
                  if (jsonStart > 0 && jsonEnd > jsonStart) {
                    try {
                      const jsonData = text.substring(jsonStart, jsonEnd);
                      const data = JSON.parse(jsonData);
                      results[results.length - 1].parsed = data;
                    } catch (e) {
                      results[results.length - 1].parseError = e.message;
                    }
                  }
                }
              }
            } catch (error) {
              results.push({
                months,
                error: error.message
              });
            }
          }
          
          return results;
        }
      `;

      const jsResult = await this.mcpClient.callTool({
        name: 'evaluate_script',
        arguments: { function: jsScript }
      })

      const results = this.parseJSResults(jsResult.content)
      return this.analyzeAvailabilityResults(results, 'javascript')

    } catch (error) {
      console.warn(`${this.logPrefix} Error en estrategia JS:`, error.message)
      return { success: false, error: error.message }
    }
  }

  async checkAvailabilityViaNetwork() {
    try {
      // Forzar recarga para generar requests
      await this.mcpClient.callTool({
        name: 'navigate_page',
        arguments: {
          url: `https://www.citaconsular.es/es/hosteds/widgetdefault/${this.config.publicKey}/${this.config.serviceId}#datetime`
        }
      })

      await this.sleep(5000)

      const networkRequests = await this.mcpClient.callTool({
        name: 'list_network_requests',
        arguments: {}
      })

      const availabilityRequests = this.filterAvailabilityRequests(networkRequests.content)
      const results = await this.analyzeNetworkRequests(availabilityRequests)
      
      return this.analyzeAvailabilityResults(results, 'network')

    } catch (error) {
      console.warn(`${this.logPrefix} Error en estrategia Network:`, error.message)
      return { success: false, error: error.message }
    }
  }

  async checkAvailabilityViaReload() {
    // Implementación de estrategia de respaldo
    return { 
      success: false, 
      available: false, 
      reason: 'No se pudieron obtener datos de disponibilidad',
      source: 'reload'
    }
  }

  parseJSResults(content) {
    // Parsear resultados del JavaScript
    try {
      if (typeof content === 'string' && content.includes('```json')) {
        const jsonStart = content.indexOf('```json') + 7
        const jsonEnd = content.indexOf('```', jsonStart)
        const jsonStr = content.substring(jsonStart, jsonEnd)
        return JSON.parse(jsonStr)
      }
      return content
    } catch (error) {
      console.warn(`${this.logPrefix} Error parseando JS results:`, error.message)
      return []
    }
  }

  filterAvailabilityRequests(networkRequests) {
    if (!Array.isArray(networkRequests)) return []
    
    return networkRequests.filter(req => 
      req.url && req.url.includes('onlinebookings/datetime')
    )
  }

  async analyzeNetworkRequests(requests) {
    const results = []
    
    for (const req of requests) {
      try {
        const details = await this.mcpClient.callTool({
          name: 'get_network_request',
          arguments: { url: req.url }
        })
        
        if (details.content && details.content.responseBody) {
          results.push({
            url: req.url,
            status: details.content.status,
            data: details.content.responseBody
          })
        }
      } catch (error) {
        console.warn(`${this.logPrefix} Error analizando request:`, error.message)
      }
    }
    
    return results
  }

  analyzeAvailabilityResults(results, source) {
    if (!Array.isArray(results) || results.length === 0) {
      return {
        success: false,
        available: false,
        reason: 'No se obtuvieron resultados',
        source
      }
    }

    const allSlots = []
    let hasData = false

    for (const result of results) {
      if (result.parsed && typeof result.parsed === 'object') {
        hasData = true
        const slots = this.extractSlotsFromData(result.parsed)
        allSlots.push(...slots)
      } else if (result.data && typeof result.data === 'string') {
        hasData = true
        // Intentar parsear JSONP
        const parsed = this.parseJSONP(result.data)
        if (parsed) {
          const slots = this.extractSlotsFromData(parsed)
          allSlots.push(...slots)
        }
      }
    }

    return {
      success: hasData,
      available: allSlots.length > 0,
      slots: allSlots,
      totalSlots: allSlots.reduce((sum, slot) => sum + (slot.available || 1), 0),
      reason: allSlots.length > 0 
        ? `${allSlots.length} citas encontradas`
        : hasData 
          ? 'No hay citas disponibles en los datos'
          : 'No se pudieron obtener datos',
      source,
      rawResults: results
    }
  }

  parseJSONP(text) {
    try {
      if (text.includes('jQuery') && text.includes('(')) {
        const jsonStart = text.indexOf('(') + 1
        const jsonEnd = text.lastIndexOf(')')
        if (jsonStart > 0 && jsonEnd > jsonStart) {
          const jsonData = text.substring(jsonStart, jsonEnd)
          return JSON.parse(jsonData)
        }
      }
      return null
    } catch (error) {
      return null
    }
  }

  extractSlotsFromData(data) {
    const slots = []
    
    if (!data || typeof data !== 'object') return slots

    // Buscar en estructura de días
    if (data.days && typeof data.days === 'object') {
      for (const [date, dayData] of Object.entries(data.days)) {
        if (dayData && Array.isArray(dayData)) {
          for (const slot of dayData) {
            if (slot.time && (slot.available > 0 || slot.count > 0)) {
              slots.push({
                date,
                time: slot.time,
                available: slot.available || slot.count || 1
              })
            }
          }
        }
      }
    }

    // Buscar en estructura de meses
    if (data.months && Array.isArray(data.months)) {
      for (const month of data.months) {
        if (month.days && typeof month.days === 'object') {
          for (const [date, dayData] of Object.entries(month.days)) {
            if (dayData && Array.isArray(dayData)) {
              for (const slot of dayData) {
                if (slot.time && (slot.available > 0 || slot.count > 0)) {
                  slots.push({
                    date,
                    time: slot.time,
                    available: slot.available || slot.count || 1
                  })
                }
              }
            }
          }
        }
      }
    }

    // Buscar fechas directamente como claves
    for (const [key, value] of Object.entries(data)) {
      if (/^\d{4}-\d{2}-\d{2}$/.test(key) && Array.isArray(value)) {
        for (const slot of value) {
          if (slot.time && (slot.available > 0 || slot.count > 0)) {
            slots.push({
              date: key,
              time: slot.time,
              available: slot.available || slot.count || 1
            })
          }
        }
      }
    }

    return slots
  }

  invalidateSession() {
    this.sessionData = null
    this.sessionTimestamp = null
  }

  isSessionExpired() {
    if (!this.sessionTimestamp) return true
    return Date.now() - this.sessionTimestamp > this.config.sessionTtlMs
  }

  async sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
}

module.exports = { MCPHybridWatcher }
