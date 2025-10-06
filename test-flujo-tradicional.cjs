#!/usr/bin/env node

/**
 * TEST FLUJO TRADICIONAL
 * Simula el flujo completo de formularios POST como sistema web tradicional
 */

const { chromium } = require('playwright-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
const fs = require('fs')

chromium.use(StealthPlugin())

console.log('🏛️ TEST FLUJO TRADICIONAL - Sistema Web Clásico')

class FlujoTradicional {
  constructor() {
    this.browser = null
    this.context = null
    this.page = null
    this.citasDetectadas = false
  }

  async init() {
    console.log('🚀 Inicializando para flujo tradicional...')
    
    this.browser = await chromium.launch({
      headless: false,
      devtools: false,
      slowMo: 300, // Muy lento para parecer humano
      args: [
        '--disable-blink-features=AutomationControlled',
        '--disable-web-security',
        '--no-sandbox',
        '--start-maximized'
      ]
    })

    this.context = await this.browser.newContext({
      viewport: null,
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      extraHTTPHeaders: {
        'Accept-Language': 'es-ES,es;q=0.9,en;q=0.8',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'
      }
    })

    this.page = await this.context.newPage()
    
    // Capturar TODAS las peticiones para entender el flujo
    this.page.on('request', request => {
      const url = request.url()
      const method = request.method()
      
      if (url.includes('exteriores.gob.es') || url.includes('citaconsular.es')) {
        console.log(`📡 ${method} ${url}`)
        
        if (method === 'POST') {
          console.log(`📮 POST detectado:`)
          console.log(`   URL: ${url}`)
          console.log(`   Headers: ${JSON.stringify(request.headers(), null, 2)}`)
          if (request.postData()) {
            console.log(`   Data: ${request.postData()}`)
          }
        }
      }
    })

    this.page.on('response', async response => {
      const url = response.url()
      const status = response.status()
      
      if (url.includes('exteriores.gob.es') || url.includes('citaconsular.es')) {
        console.log(`📥 ${status} ${url}`)
        
        if (status === 302) {
          console.log(`🔄 REDIRECCIÓN 302 detectada:`)
          console.log(`   Location: ${response.headers()['location']}`)
        }
        
        // Capturar respuestas de disponibilidad
        if (url.includes('onlinebookings/datetime')) {
          console.log(`🎯 ¡RESPUESTA DE DISPONIBILIDAD!`)
          console.log(`📥 Status: ${status}`)
          
          try {
            const body = await response.text()
            console.log(`📏 Tamaño: ${body.length} caracteres`)
            
            if (body.length === 0) {
              console.log(`📭 Respuesta vacía - No hay citas`)
            } else if (body.includes('Exception')) {
              console.log(`❌ Error: ${body}`)
            } else {
              console.log(`🎉 ¡DATOS DE DISPONIBILIDAD!`)
              this.procesarDisponibilidad(body, url)
            }
          } catch (e) {
            console.log(`Error leyendo respuesta: ${e.message}`)
          }
        }
      }
    })
    
    console.log('✅ Browser configurado para capturar flujo completo')
  }

  procesarDisponibilidad(body, url) {
    console.log('🔬 PROCESANDO DATOS DE DISPONIBILIDAD...')
    
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
    const filename = `disponibilidad-${timestamp}.json`
    
    // Guardar datos crudos
    fs.writeFileSync(filename, JSON.stringify({
      timestamp: new Date().toISOString(),
      url: url,
      body: body,
      bodyLength: body.length
    }, null, 2))
    
    console.log(`💾 Datos guardados en: ${filename}`)
    
    // Analizar JSONP
    if (body.includes('(') && body.includes(')')) {
      try {
        const jsonStart = body.indexOf('(') + 1
        const jsonEnd = body.lastIndexOf(')')
        const jsonData = body.substring(jsonStart, jsonEnd)
        const parsed = JSON.parse(jsonData)
        
        console.log('✅ JSONP parseado exitosamente')
        console.log('🔍 Keys:', Object.keys(parsed))
        
        // Buscar fechas con citas
        const fechas = Object.keys(parsed).filter(key => /^\d{4}-\d{2}-\d{2}$/.test(key))
        
        if (fechas.length > 0) {
          console.log(`🎊 ¡${fechas.length} FECHAS CON DATOS!`)
          
          let totalCitas = 0
          const citasEncontradas = []
          
          fechas.forEach(fecha => {
            const slots = parsed[fecha]
            if (Array.isArray(slots) && slots.length > 0) {
              console.log(`   📅 ${fecha}: ${slots.length} slots`)
              
              slots.forEach(slot => {
                if (slot && slot.time) {
                  const disponible = slot.available !== false && slot.available !== 0
                  console.log(`      🕐 ${slot.time} - Disponible: ${disponible ? 'SÍ' : 'NO'}`)
                  
                  if (disponible) {
                    totalCitas++
                    citasEncontradas.push({
                      fecha: fecha,
                      hora: slot.time,
                      disponible: slot.available
                    })
                  }
                }
              })
            }
          })
          
          if (totalCitas > 0) {
            console.log(`🏆 ¡${totalCitas} CITAS DISPONIBLES DETECTADAS!`)
            
            citasEncontradas.forEach(cita => {
              console.log(`   🎯 ${cita.fecha} a las ${cita.hora}`)
            })
            
            // Guardar citas encontradas
            const citasFile = `CITAS-ENCONTRADAS-${timestamp}.json`
            fs.writeFileSync(citasFile, JSON.stringify({
              timestamp: new Date().toISOString(),
              totalCitas: totalCitas,
              citas: citasEncontradas,
              datosCompletos: parsed
            }, null, 2))
            
            console.log(`🎊 ¡CITAS GUARDADAS EN: ${citasFile}!`)
            console.log('🎯 ¡MISIÓN CUMPLIDA - CITAS DETECTADAS!')
            
            this.citasDetectadas = true
          } else {
            console.log('📭 No hay citas disponibles en las fechas')
          }
        } else {
          console.log('📭 No hay fechas en formato de citas')
          console.log('📄 Estructura recibida:')
          console.log(JSON.stringify(parsed, null, 2).substring(0, 300) + '...')
        }
        
      } catch (parseError) {
        console.log(`❌ Error parseando JSONP: ${parseError.message}`)
        console.log('📄 Datos crudos:')
        console.log(body.substring(0, 200) + '...')
      }
    }
  }

  async ejecutarFlujoCompleto() {
    console.log('\n🏛️ EJECUTANDO FLUJO TRADICIONAL COMPLETO...')
    
    try {
      // PASO 1: Navegar a página principal
      console.log('\n📄 PASO 1: Navegando a página principal...')
      await this.page.goto('https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx')
      await this.page.waitForLoadState('networkidle')
      await this.page.waitForTimeout(3000)
      
      // Aceptar cookies
      try {
        await this.page.getByRole('button', { name: 'Aceptar' }).click({ timeout: 5000 })
        console.log('✅ Cookies aceptadas')
        await this.page.waitForTimeout(2000)
      } catch (e) {
        console.log('ℹ️ No apareció banner de cookies')
      }
      
      // PASO 2: Llenar formulario (esto generará el POST tradicional)
      console.log('\n📝 PASO 2: Llenando formulario para POST tradicional...')
      
      await this.page.getByLabel('Países y territorios').selectOption('Cuba')
      await this.page.waitForTimeout(2000)
      console.log('✅ País: Cuba')
      
      await this.page.getByLabel('Categorías servicios').selectOption('Visados')
      await this.page.waitForTimeout(2000)
      console.log('✅ Categoría: Visados')
      
      await this.page.getByText('Delegaciones').click()
      await this.page.waitForTimeout(1000)
      await this.page.getByLabel('Delegaciones').selectOption('166')
      await this.page.waitForTimeout(2000)
      console.log('✅ Delegación: 166')
      
      await this.page.getByLabel('Servicios consulares').selectOption('Visado de estancia (visado Schengen)')
      await this.page.waitForTimeout(2000)
      console.log('✅ Servicio: Turismo/Schengen')
      
      // PASO 3: Ejecutar POST tradicional (clic en Buscar)
      console.log('\n📮 PASO 3: Ejecutando POST tradicional...')
      await this.page.getByRole('button', { name: 'Buscar' }).click()
      
      // Esperar la redirección 302 y la nueva página
      await this.page.waitForLoadState('networkidle')
      await this.page.waitForTimeout(5000)
      
      console.log(`✅ POST completado, URL actual: ${this.page.url()}`)
      
      // PASO 4: Abrir popup (esto generará POST al sitio citaconsular.es)
      console.log('\n🎯 PASO 4: Abriendo popup (POST a citaconsular.es)...')
      
      const [popup] = await Promise.all([
        this.context.waitForEvent('page'),
        this.page.getByRole('link', { name: 'Reservar cita de visado Schengen Se abre en ventana nueva' }).click()
      ])
      
      console.log('✅ Popup abierto')
      
      // Configurar listeners en el popup
      popup.on('request', request => {
        if (request.url().includes('citaconsular.es')) {
          console.log(`📡 POPUP ${request.method()} ${request.url()}`)
          
          if (request.method() === 'POST') {
            console.log(`📮 POPUP POST:`)
            console.log(`   URL: ${request.url()}`)
            if (request.postData()) {
              console.log(`   Data: ${request.postData()}`)
            }
          }
        }
      })
      
      popup.on('response', async response => {
        if (response.url().includes('onlinebookings/datetime')) {
          console.log(`🎯 POPUP - ¡RESPUESTA DE DISPONIBILIDAD!`)
          try {
            const body = await response.text()
            if (body.length > 0 && !body.includes('Exception')) {
              console.log(`🎉 POPUP - ¡DATOS VÁLIDOS!`)
              this.procesarDisponibilidad(body, response.url())
            }
          } catch (e) {
            console.log(`Error popup: ${e.message}`)
          }
        }
      })
      
      // PASO 5: Continuar en popup
      console.log('\n▶️ PASO 5: Continuando en popup...')
      try {
        await popup.getByRole('button', { name: 'Continue / Continuar' }).click({ timeout: 10000 })
        console.log('✅ Botón continuar clickeado')
        await popup.waitForTimeout(3000)
      } catch (e) {
        console.log('ℹ️ No apareció botón continuar')
      }
      
      // PASO 6: Navegar al widget final
      console.log('\n🎭 PASO 6: Navegando al widget final...')
      await popup.goto('https://www.citaconsular.es/es/hosteds/widgetdefault/28db94e270580be60f6e00285a7d8141f/bkt873048#datetime')
      
      // PASO 7: Esperar carga completa y peticiones de disponibilidad
      console.log('\n⏳ PASO 7: Esperando carga completa y peticiones de disponibilidad...')
      
      // Esperar en chunks para mostrar progreso
      for (let i = 1; i <= 12; i++) { // 60 segundos total
        console.log(`⏳ Esperando... ${i * 5}/60 segundos`)
        await popup.waitForTimeout(5000)
        
        if (this.citasDetectadas) {
          console.log('🎉 ¡Citas ya detectadas! Continuando monitoreo...')
          break
        }
      }
      
      // PASO 8: Verificar citas visibles en la página
      console.log('\n👀 PASO 8: Verificando citas visibles...')
      try {
        const citasVisibles = await popup.locator('a:has-text("Hueco libre")').count()
        if (citasVisibles > 0) {
          console.log(`🎉 ¡${citasVisibles} CITAS VISIBLES EN LA PÁGINA!`)
          
          // Obtener texto de las citas
          const citas = await popup.locator('a:has-text("Hueco libre")').all()
          for (let i = 0; i < Math.min(citas.length, 5); i++) {
            try {
              const texto = await citas[i].textContent()
              console.log(`   📅 Cita ${i + 1}: ${texto}`)
            } catch (e) {
              console.log(`   📅 Cita ${i + 1}: Error leyendo texto`)
            }
          }
          
          // Hacer clic en primera cita para activar más peticiones
          console.log('👆 Haciendo clic en primera cita...')
          await citas[0].click()
          await popup.waitForTimeout(5000)
          
          // Volver atrás
          try {
            await popup.locator('#idBktDefaultSignInContainer > .clsDivSubHeader > a > .clsDivSubHeaderBackButton').click()
            console.log('⬅️ Vuelto atrás')
          } catch (e) {
            console.log('ℹ️ No se pudo volver atrás')
          }
          
        } else {
          console.log('📭 No hay citas visibles en este momento')
        }
      } catch (e) {
        console.log(`Error verificando citas: ${e.message}`)
      }
      
      console.log('\n📊 RESUMEN DEL FLUJO TRADICIONAL:')
      console.log(`   ✅ Flujo POST tradicional completado`)
      console.log(`   ✅ Popup y widget cargados`)
      console.log(`   ${this.citasDetectadas ? '🎉' : '📭'} Citas detectadas: ${this.citasDetectadas ? 'SÍ' : 'NO'}`)
      
      if (!this.citasDetectadas) {
        console.log('\n🔄 Continuando monitoreo...')
        // Continuar monitoreando
        await this.monitorearContinuo(popup)
      }
      
    } catch (error) {
      console.log(`❌ Error en flujo: ${error.message}`)
    }
  }

  async monitorearContinuo(popup) {
    console.log('🔄 Iniciando monitoreo continuo...')
    
    let ciclo = 0
    while (ciclo < 20 && !this.citasDetectadas) {
      ciclo++
      console.log(`\n🔄 Ciclo ${ciclo}/20 - ${new Date().toLocaleTimeString()}`)
      
      try {
        // Refrescar página cada 5 ciclos
        if (ciclo % 5 === 0) {
          console.log('🔄 Refrescando página...')
          await popup.reload()
          await popup.waitForTimeout(10000)
        }
        
        // Verificar citas
        const citasVisibles = await popup.locator('a:has-text("Hueco libre")').count()
        if (citasVisibles > 0) {
          console.log(`🎉 ¡${citasVisibles} CITAS APARECIERON!`)
          this.citasDetectadas = true
          break
        }
        
        console.log('📭 No hay citas, esperando...')
        await popup.waitForTimeout(15000) // 15 segundos entre ciclos
        
      } catch (e) {
        console.log(`Error en ciclo: ${e.message}`)
      }
    }
  }

  async ejecutar() {
    await this.init()
    
    try {
      await this.ejecutarFlujoCompleto()
      
      // Mantener abierto para inspección
      console.log('\n🔍 Manteniendo browser abierto para inspección...')
      console.log('Presiona Ctrl+C para cerrar')
      
      await new Promise(() => {}) // Esperar indefinidamente
      
    } finally {
      // await this.browser.close()
    }
  }
}

// Ejecutar
const tester = new FlujoTradicional()
tester.ejecutar().catch(console.error)
