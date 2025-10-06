#!/usr/bin/env node

/**
 * DEBUG PETICIONES COMPLETAS
 * Captura TODAS las peticiones para entender qué falta
 */

const { chromium } = require('playwright-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
const fs = require('fs')

chromium.use(StealthPlugin())

console.log('🔍 DEBUG PETICIONES COMPLETAS')

class DebugPeticiones {
  constructor() {
    this.browser = null
    this.context = null
    this.todasLasPeticiones = []
    this.todasLasRespuestas = []
  }

  async init() {
    this.browser = await chromium.launch({
      headless: false,
      slowMo: 200,
      args: ['--disable-blink-features=AutomationControlled', '--no-sandbox']
    })

    this.context = await this.browser.newContext({
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    })
  }

  capturarTodasLasPeticiones(page, nombre) {
    console.log(`📡 Capturando peticiones para: ${nombre}`)
    
    page.on('request', request => {
      const url = request.url()
      const method = request.method()
      
      if (url.includes('exteriores.gob.es') || url.includes('citaconsular.es')) {
        const peticion = {
          timestamp: new Date().toISOString(),
          pagina: nombre,
          method: method,
          url: url,
          headers: request.headers(),
          postData: request.postData()
        }
        
        this.todasLasPeticiones.push(peticion)
        
        console.log(`📤 ${method} ${url}`)
        if (method === 'POST' && request.postData()) {
          console.log(`   📮 Data: ${request.postData()}`)
        }
      }
    })

    page.on('response', async response => {
      const url = response.url()
      const status = response.status()
      
      if (url.includes('exteriores.gob.es') || url.includes('citaconsular.es')) {
        console.log(`📥 ${status} ${url}`)
        
        try {
          const body = await response.text()
          
          const respuesta = {
            timestamp: new Date().toISOString(),
            pagina: nombre,
            status: status,
            url: url,
            headers: response.headers(),
            body: body,
            bodyLength: body.length
          }
          
          this.todasLasRespuestas.push(respuesta)
          
          if (url.includes('onlinebookings/datetime')) {
            console.log(`🎯 RESPUESTA DISPONIBILIDAD:`)
            console.log(`   Status: ${status}`)
            console.log(`   Length: ${body.length}`)
            
            if (body.length > 0 && !body.includes('Exception')) {
              console.log(`🎉 ¡DATOS VÁLIDOS CAPTURADOS!`)
              console.log(`   Primeros 200 chars: ${body.substring(0, 200)}`)
            } else if (body.includes('Exception')) {
              console.log(`❌ Error: ${body}`)
            } else {
              console.log(`📭 Respuesta vacía`)
            }
          }
          
        } catch (e) {
          console.log(`Error leyendo respuesta: ${e.message}`)
        }
      }
    })
  }

  async ejecutarFlujoCompleto() {
    console.log('\n🏛️ EJECUTANDO FLUJO COMPLETO CON DEBUG...')

    const page = await this.context.newPage()
    this.capturarTodasLasPeticiones(page, 'PAGINA_PRINCIPAL')
    
    try {
      console.log('📄 1. Navegando a servicios consulares...')
      await page.goto('https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx')
      await page.waitForLoadState('networkidle')
      await page.waitForTimeout(3000)
      
      // Aceptar cookies
      try {
        await page.getByRole('button', { name: 'Aceptar' }).click({ timeout: 5000 })
        console.log('✅ Cookies aceptadas')
        await page.waitForTimeout(1000)
      } catch (e) {
        console.log('ℹ️ No apareció banner de cookies')
      }
      
      console.log('📝 2. Llenando formulario...')
      await page.getByLabel('Países y territorios').selectOption('Cuba')
      await page.waitForTimeout(1000)
      await page.getByLabel('Categorías servicios').selectOption('Visados')
      await page.waitForTimeout(1000)
      await page.getByText('Delegaciones').click()
      await page.waitForTimeout(500)
      await page.getByLabel('Delegaciones').selectOption('166')
      await page.waitForTimeout(1000)
      await page.getByLabel('Servicios consulares').selectOption('Visado de estancia (visado Schengen)')
      await page.waitForTimeout(1000)
      
      console.log('📮 3. POST tradicional...')
      await page.getByRole('button', { name: 'Buscar' }).click()
      await page.waitForLoadState('networkidle')
      await page.waitForTimeout(5000)
      
      console.log('🎯 4. Abriendo popup...')
      const [popup] = await Promise.all([
        this.context.waitForEvent('page'),
        page.getByRole('link', { name: 'Reservar cita de visado Schengen Se abre en ventana nueva' }).click()
      ])
      
      this.capturarTodasLasPeticiones(popup, 'POPUP')
      
      console.log('🔘 5. Esperando y clickeando botón...')
      try {
        // Esperar que aparezca la página
        await popup.waitForLoadState('networkidle')
        await popup.waitForTimeout(5000)
        
        // Buscar el botón por ID
        await popup.waitForSelector('#idCaptchaButton', { timeout: 15000 })
        console.log('✅ Botón #idCaptchaButton encontrado')
        
        await popup.click('#idCaptchaButton')
        console.log('✅ Botón clickeado')
        
        // Esperar procesamiento
        await popup.waitForTimeout(8000)
        
      } catch (e) {
        console.log(`❌ Error con botón: ${e.message}`)
        
        // Intentar buscar cualquier botón con "Continue" o "Continuar"
        try {
          const botones = await popup.locator('button').all()
          console.log(`🔍 Encontrados ${botones.length} botones`)
          
          for (let i = 0; i < botones.length; i++) {
            try {
              const texto = await botones[i].textContent()
              console.log(`   Botón ${i}: "${texto}"`)
              
              if (texto && (texto.includes('Continue') || texto.includes('Continuar'))) {
                console.log(`✅ Clickeando botón: "${texto}"`)
                await botones[i].click()
                await popup.waitForTimeout(5000)
                break
              }
            } catch (e2) {
              // Continuar con el siguiente botón
            }
          }
        } catch (e3) {
          console.log('❌ No se pudo encontrar ningún botón')
        }
      }
      
      console.log('🎭 6. Navegando al widget...')
      await popup.goto('https://www.citaconsular.es/es/hosteds/widgetdefault/28db94e270580be60f6e00285a7d8141f/bkt873048#datetime')
      await popup.waitForLoadState('networkidle')
      
      console.log('⏳ 7. Esperando datos de disponibilidad...')
      
      // Esperar 60 segundos capturando todo
      for (let i = 1; i <= 12; i++) {
        console.log(`⏳ Esperando... ${i * 5}/60 segundos`)
        await popup.waitForTimeout(5000)
        
        // Verificar huecos visibles
        try {
          const huecos = await popup.locator('a:has-text("Hueco libre")').count()
          if (huecos > 0) {
            console.log(`🎉 ¡${huecos} huecos libres visibles!`)
            
            // Obtener texto de algunos huecos
            const elementos = await popup.locator('a:has-text("Hueco libre")').all()
            for (let j = 0; j < Math.min(elementos.length, 3); j++) {
              try {
                const texto = await elementos[j].textContent()
                console.log(`   📅 Hueco ${j + 1}: ${texto}`)
              } catch (e) {
                console.log(`   📅 Hueco ${j + 1}: Error leyendo`)
              }
            }
            break
          }
        } catch (e) {
          // Continuar esperando
        }
      }
      
      console.log('🍪 8. Obteniendo cookies finales...')
      const cookies = await popup.context().cookies()
      console.log(`✅ ${cookies.length} cookies obtenidas`)
      
      // Guardar todo
      this.guardarTodo(cookies)
      
      console.log('\n🔍 Manteniendo browser abierto para inspección...')
      console.log('Presiona Ctrl+C para cerrar')
      
      // Mantener abierto
      await new Promise(() => {})
      
    } catch (error) {
      console.log(`❌ Error: ${error.message}`)
    } finally {
      await page.close()
    }
  }

  guardarTodo(cookies) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
    
    // Guardar peticiones
    fs.writeFileSync(`debug-peticiones-${timestamp}.json`, JSON.stringify({
      timestamp: new Date().toISOString(),
      totalPeticiones: this.todasLasPeticiones.length,
      totalRespuestas: this.todasLasRespuestas.length,
      peticiones: this.todasLasPeticiones,
      respuestas: this.todasLasRespuestas,
      cookies: cookies
    }, null, 2))
    
    console.log(`💾 Debug completo guardado: debug-peticiones-${timestamp}.json`)
    
    // Analizar peticiones de disponibilidad
    const peticionesDisponibilidad = this.todasLasRespuestas.filter(r => 
      r.url.includes('onlinebookings/datetime')
    )
    
    if (peticionesDisponibilidad.length > 0) {
      console.log(`\n🎯 ANÁLISIS PETICIONES DISPONIBILIDAD:`)
      console.log(`   Total peticiones: ${peticionesDisponibilidad.length}`)
      
      peticionesDisponibilidad.forEach((resp, i) => {
        console.log(`   ${i + 1}. Status: ${resp.status}, Length: ${resp.bodyLength}`)
        if (resp.bodyLength > 0 && !resp.body.includes('Exception')) {
          console.log(`      🎉 ¡Esta petición tiene datos!`)
        }
      })
    } else {
      console.log(`\n📭 No se capturaron peticiones de disponibilidad`)
    }
  }

  async ejecutar() {
    await this.init()
    await this.ejecutarFlujoCompleto()
  }
}

// Ejecutar
const debug = new DebugPeticiones()
debug.ejecutar().catch(console.error)
