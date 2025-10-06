#!/usr/bin/env node

/**
 * TEST TURISMO DIRECTO - SIN PLAYWRIGHT
 * Prueba directa de la API de disponibilidad
 */

const axios = require('axios')
const fs = require('fs')

console.log('✈️ TEST TURISMO DIRECTO - DETECTAR CITAS')
console.log('🎯 Probando directamente la API sin browser')

async function testTurismoDirecto() {
  let intento = 0
  const maxIntentos = 100
  
  while (intento < maxIntentos) {
    intento++
    console.log(`\n🔍 INTENTO ${intento}/${maxIntentos} - ${new Date().toLocaleTimeString()}`)
    
    try {
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

      console.log(`📍 Consultando: ${url.substring(0, 100)}...`)

      const response = await axios.get(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript, */*; q=0.01',
          'Accept-Language': 'es-ES,es;q=0.9,en;q=0.8',
          'Referer': 'https://www.citaconsular.es/es/hosteds/widgetdefault/28db94e270580be60f6e00285a7d8141f/bkt873048'
        },
        timeout: 10000
      })

      console.log(`📥 Status: ${response.status}`)
      console.log(`📏 Tamaño: ${response.data.length} caracteres`)

      if (response.data.length === 0) {
        console.log('📭 Respuesta vacía - No hay citas')
      } else {
        console.log('🎉 ¡RESPUESTA CON DATOS!')
        
        // Guardar respuesta
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
        const filename = `turismo-directo-${timestamp}.json`
        
        fs.writeFileSync(filename, JSON.stringify({
          timestamp: new Date().toISOString(),
          intento: intento,
          url: url,
          status: response.status,
          headers: response.headers,
          data: response.data,
          dataLength: response.data.length
        }, null, 2))
        
        console.log(`💾 Respuesta guardada: ${filename}`)
        
        // Analizar datos
        if (response.data.includes('jQuery') && response.data.includes('(')) {
          const jsonStart = response.data.indexOf('(') + 1
          const jsonEnd = response.data.lastIndexOf(')')
          
          if (jsonStart > 0 && jsonEnd > jsonStart) {
            try {
              const jsonData = response.data.substring(jsonStart, jsonEnd)
              const parsedData = JSON.parse(jsonData)
              
              console.log('✅ Datos parseados exitosamente')
              console.log('🔍 Estructura:', Object.keys(parsedData))
              
              // Buscar citas
              const slots = extractSlots(parsedData)
              
              if (slots.length > 0) {
                console.log(`🎊 ¡${slots.length} CITAS ENCONTRADAS!`)
                
                slots.forEach(slot => {
                  console.log(`   📅 ${slot.date} ${slot.time} (${slot.available} disponibles)`)
                })

                const citasFile = `CITAS-TURISMO-DIRECTO-${timestamp}.json`
                fs.writeFileSync(citasFile, JSON.stringify({
                  timestamp: new Date().toISOString(),
                  intento: intento,
                  totalSlots: slots.length,
                  slots: slots,
                  rawData: parsedData
                }, null, 2))
                
                console.log(`🏆 ¡CITAS GUARDADAS EN: ${citasFile}!`)
                console.log('🎯 ¡MISIÓN CUMPLIDA!')
                return true
              } else {
                console.log('📭 No hay citas en los datos')
                console.log('📄 Muestra de datos:')
                console.log(JSON.stringify(parsedData, null, 2).substring(0, 300) + '...')
              }
              
            } catch (parseError) {
              console.log(`❌ Error parseando: ${parseError.message}`)
              console.log('📄 Datos crudos:')
              console.log(response.data.substring(0, 200) + '...')
            }
          }
        } else {
          console.log('📄 No es JSONP:')
          console.log(response.data.substring(0, 200) + '...')
        }
      }

    } catch (error) {
      console.log(`❌ Error: ${error.message}`)
      
      if (error.response) {
        console.log(`📥 Status: ${error.response.status}`)
        console.log(`📄 Data: ${error.response.data}`)
      }
    }
    
    // Esperar entre intentos
    const espera = 10000 + Math.random() * 5000 // 10-15 segundos
    console.log(`⏳ Esperando ${Math.round(espera/1000)} segundos...`)
    await new Promise(resolve => setTimeout(resolve, espera))
  }
  
  console.log('⚠️ Máximo de intentos alcanzado')
}

function extractSlots(data) {
  const slots = []
  
  if (!data || typeof data !== 'object') return slots

  const searchInObject = (obj, parentKey = '') => {
    for (const [key, value] of Object.entries(obj)) {
      // Fechas como claves (YYYY-MM-DD)
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
      // Buscar recursivamente
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

// Ejecutar
testTurismoDirecto().catch(console.error)
