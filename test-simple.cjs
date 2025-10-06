console.log('✈️ INICIANDO TEST TURISMO SIMPLE')

const axios = require('axios')

async function test() {
  console.log('🔍 Probando API de turismo directamente...')
  
  let intento = 0
  
  while (intento < 20) {
    intento++
    console.log(`\n📡 INTENTO ${intento} - ${new Date().toLocaleTimeString()}`)
    
    try {
      const now = new Date()
      const end = new Date(now.getTime() + (30 * 24 * 60 * 60 * 1000)) // 30 días
      
      const url = `https://citaconsular.es/onlinebookings/datetime/?callback=test${Date.now()}&publickey=28db94e270580be60f6e00285a7d8141f&services[]=bkt873048&start=${now.toISOString().split('T')[0]}&end=${end.toISOString().split('T')[0]}&_=${Date.now()}`
      
      console.log('📍 URL:', url.substring(0, 120) + '...')
      
      const response = await axios.get(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript, */*; q=0.01',
          'Accept-Language': 'es-ES,es;q=0.9,en;q=0.8',
          'Referer': 'https://www.citaconsular.es/es/hosteds/widgetdefault/28db94e270580be60f6e00285a7d8141f/bkt873048'
        },
        timeout: 10000
      })
      
      console.log('📥 Status:', response.status)
      console.log('📏 Data length:', response.data.length)
      
      if (response.data.length === 0) {
        console.log('📭 Respuesta vacía - No hay citas')
      } else {
        console.log('🎉 ¡RESPUESTA CON DATOS!')
        console.log('📄 Primeros 300 caracteres:')
        console.log(response.data.substring(0, 300))
        
        // Guardar respuesta completa
        const fs = require('fs')
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
        const filename = `turismo-response-${timestamp}.json`
        
        fs.writeFileSync(filename, JSON.stringify({
          timestamp: new Date().toISOString(),
          intento: intento,
          url: url,
          status: response.status,
          data: response.data,
          dataLength: response.data.length
        }, null, 2))
        
        console.log(`💾 Respuesta completa guardada en: ${filename}`)
        
        // Si hay datos, analizar
        if (response.data.includes('(') && response.data.includes(')')) {
          try {
            const jsonStart = response.data.indexOf('(') + 1
            const jsonEnd = response.data.lastIndexOf(')')
            const jsonData = response.data.substring(jsonStart, jsonEnd)
            const parsed = JSON.parse(jsonData)
            
            console.log('✅ JSON parseado exitosamente')
            console.log('🔍 Keys:', Object.keys(parsed))
            
            // Buscar fechas
            const fechas = Object.keys(parsed).filter(key => /^\d{4}-\d{2}-\d{2}$/.test(key))
            if (fechas.length > 0) {
              console.log(`📅 Fechas encontradas: ${fechas.length}`)
              fechas.forEach(fecha => {
                console.log(`   ${fecha}: ${JSON.stringify(parsed[fecha])}`)
              })
              
              console.log('🎊 ¡POSIBLES CITAS DETECTADAS!')
              return true
            } else {
              console.log('📭 No hay fechas con citas')
            }
            
          } catch (parseError) {
            console.log('❌ Error parseando JSON:', parseError.message)
          }
        }
      }
      
    } catch (error) {
      console.log('❌ Error:', error.message)
      
      if (error.response) {
        console.log('📥 Status error:', error.response.status)
        console.log('📄 Error data:', error.response.data)
      }
    }
    
    // Esperar entre intentos
    console.log('⏳ Esperando 8 segundos...')
    await new Promise(resolve => setTimeout(resolve, 8000))
  }
  
  console.log('⚠️ Completados 20 intentos')
}

test().catch(console.error)
