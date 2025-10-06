#!/usr/bin/env node

/**
 * Script de prueba para MCPHybridWatcher
 * 
 * Uso: node run-mcp-hybrid.cjs
 * 
 * Este script demuestra las capacidades mejoradas del MCPHybridWatcher:
 * - Múltiples estrategias de obtención de datos
 * - Manejo robusto de errores
 * - Análisis detallado de disponibilidad
 * - Logging completo para debugging
 */

const { MCPHybridWatcher } = require('./mcpHybridWatcher.cjs')
const fs = require('fs')
const path = require('path')

// Configuración para Turismo/Schengen
const config = {
  serviceId: 'bkt873048',
  publicKey: '28db94e270580be60f6e00285a7d8141f',
  serviceName: 'Turismo/Schengen',
  country: 'Cuba',
  category: 'Visados',
  delegation: '166',
  checkIntervalMs: 30000, // 30 segundos para pruebas
  sessionTtlMs: 5 * 60 * 1000, // 5 minutos
  maxRetries: 3,
  headless: false, // Visible para debugging
  
  // Callbacks mejorados
  onSlotsFound: async (details) => {
    const timestamp = new Date().toISOString()
    console.log('\n🎉 ¡CITAS DETECTADAS! 🎉')
    console.log('========================')
    console.log(`Timestamp: ${timestamp}`)
    console.log(`Servicio: ${details.serviceName || config.serviceName}`)
    console.log(`Total slots: ${details.totalSlots}`)
    console.log(`Fuente: ${details.source}`)
    console.log(`Fechas disponibles: ${details.slots?.length || 0}`)
    
    if (details.slots && details.slots.length > 0) {
      console.log('\nDetalle de citas:')
      details.slots.slice(0, 10).forEach(slot => {
        console.log(`  📅 ${slot.date} ${slot.time} (${slot.available} disponibles)`)
      })
      
      if (details.slots.length > 10) {
        console.log(`  ... y ${details.slots.length - 10} más`)
      }
    }
    
    // Guardar resultado detallado
    const resultDir = 'logs/mcp-hybrid-results'
    fs.mkdirSync(resultDir, { recursive: true })
    
    const resultFile = path.join(resultDir, `citas-encontradas-${timestamp.replace(/[:.]/g, '-')}.json`)
    fs.writeFileSync(resultFile, JSON.stringify({
      timestamp,
      config: {
        serviceName: config.serviceName,
        serviceId: config.serviceId,
        publicKey: config.publicKey
      },
      result: details
    }, null, 2))
    
    console.log(`\n📁 Resultado guardado en: ${resultFile}`)
    console.log('========================\n')
  },
  
  onError: (error) => {
    const timestamp = new Date().toISOString()
    console.error(`\n❌ ERROR [${timestamp}]:`, error.message)
    
    // Guardar error para análisis
    const errorDir = 'logs/mcp-hybrid-errors'
    fs.mkdirSync(errorDir, { recursive: true })
    
    const errorFile = path.join(errorDir, `error-${timestamp.replace(/[:.]/g, '-')}.json`)
    fs.writeFileSync(errorFile, JSON.stringify({
      timestamp,
      error: {
        message: error.message,
        stack: error.stack,
        name: error.name
      },
      config: {
        serviceName: config.serviceName,
        serviceId: config.serviceId
      }
    }, null, 2))
  },
  
  onStatusUpdate: (status) => {
    const timestamp = new Date().toLocaleTimeString()
    const statusEmojis = {
      starting: '🚀',
      checking: '🔍',
      idle: '⏳',
      error: '❌',
      stopped: '🛑'
    }
    
    console.log(`[${timestamp}] ${statusEmojis[status] || '📊'} Estado: ${status}`)
  }
}

async function main() {
  console.log('🚀 Iniciando MCPHybridWatcher para Turismo/Schengen...')
  console.log('=====================================================')
  console.log(`Servicio: ${config.serviceName}`)
  console.log(`Intervalo: ${config.checkIntervalMs / 1000}s`)
  console.log(`TTL Sesión: ${config.sessionTtlMs / 1000}s`)
  console.log(`Modo: ${config.headless ? 'Headless' : 'Visible'}`)
  console.log('=====================================================\n')

  // Crear directorios de logs
  fs.mkdirSync('logs/mcp-hybrid-results', { recursive: true })
  fs.mkdirSync('logs/mcp-hybrid-errors', { recursive: true })
  fs.mkdirSync('logs/mcp-hybrid-sessions', { recursive: true })

  const watcher = new MCPHybridWatcher(config)
  
  // Manejo de señales para cierre limpio
  process.on('SIGINT', async () => {
    console.log('\n🛑 Recibida señal de interrupción, cerrando...')
    await watcher.stop()
    process.exit(0)
  })
  
  process.on('SIGTERM', async () => {
    console.log('\n🛑 Recibida señal de terminación, cerrando...')
    await watcher.stop()
    process.exit(0)
  })

  try {
    await watcher.start()
    
    // Mantener el proceso vivo
    console.log('✅ MCPHybridWatcher iniciado exitosamente')
    console.log('Presiona Ctrl+C para detener\n')
    
    // Mostrar estadísticas cada 5 minutos
    setInterval(() => {
      const uptime = process.uptime()
      const hours = Math.floor(uptime / 3600)
      const minutes = Math.floor((uptime % 3600) / 60)
      const seconds = Math.floor(uptime % 60)
      
      console.log(`📊 Estadísticas - Uptime: ${hours}h ${minutes}m ${seconds}s`)
    }, 5 * 60 * 1000)
    
  } catch (error) {
    console.error('❌ Error fatal iniciando MCPHybridWatcher:', error)
    process.exit(1)
  }
}

// Función para prueba única (sin loop continuo)
async function runSingleCheck() {
  console.log('🔍 Ejecutando verificación única...')
  
  const watcher = new MCPHybridWatcher({
    ...config,
    checkIntervalMs: 0, // No programar siguiente check
    onSlotsFound: async (details) => {
      console.log('🎉 Citas encontradas:', details)
      await watcher.stop()
      process.exit(0)
    },
    onError: async (error) => {
      console.error('❌ Error:', error.message)
      await watcher.stop()
      process.exit(1)
    }
  })
  
  try {
    await watcher.start()
    
    // Forzar una verificación inmediata
    setTimeout(async () => {
      console.log('⏳ Verificación completada, cerrando...')
      await watcher.stop()
      process.exit(0)
    }, 60000) // 1 minuto timeout
    
  } catch (error) {
    console.error('❌ Error en verificación única:', error)
    process.exit(1)
  }
}

// Determinar modo de ejecución
const args = process.argv.slice(2)
if (args.includes('--single') || args.includes('-s')) {
  runSingleCheck()
} else {
  main()
}
