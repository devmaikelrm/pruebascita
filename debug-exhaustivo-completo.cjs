#!/usr/bin/env node

/**
 * DEBUG EXHAUSTIVO COMPLETO
 * Análisis completo de TODO el flujo exitoso
 */

const { chromium } = require('playwright-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
const fs = require('fs')
const path = require('path')

chromium.use(StealthPlugin())

console.log('🔬 DEBUG EXHAUSTIVO COMPLETO - Análisis Total')

class DebugExhaustivoCompleto {
  constructor() {
    this.browser = null
    this.context = null
    this.todasLasPeticiones = []
    this.todasLasRespuestas = []
    this.cookiesEvolucion = []
    this.huecosDetectados = []
    this.tiemposEjecucion = {}
    this.erroresCapturados = []
    this.estadosDOM = []
    
    // Crear directorio de análisis
    this.dirAnalisis = `analisis-exhaustivo-${new Date().toISOString().split('T')[0]}`
    fs.mkdirSync(this.dirAnalisis, { recursive: true })
  }

  async init() {
    console.log('🚀 Inicializando debug exhaustivo...')
    
    this.browser = await chromium.launch({
      headless: false,
      slowMo: 800, // MUY LENTO para evitar detección
      args: [
        '--disable-blink-features=AutomationControlled',
        '--disable-web-security',
        '--no-sandbox',
        '--disable-dev-shm-usage',
        '--disable-features=VizDisplayCompositor',
        '--start-maximized'
      ]
    })

    this.context = await this.browser.newContext({
      viewport: null,
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      locale: 'es-ES',
      timezoneId: 'Europe/Madrid',
      extraHTTPHeaders: {
        'Accept-Language': 'es-ES,es;q=0.9,en;q=0.8',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'
      }
    })

    console.log('✅ Browser configurado para análisis exhaustivo')
  }

  capturarTodo(page, nombrePagina) {
    console.log(`📡 Configurando captura exhaustiva para: ${nombrePagina}`)
    
    // Capturar TODAS las peticiones
    page.on('request', request => {
      const peticion = {
        timestamp: new Date().toISOString(),
        pagina: nombrePagina,
        method: request.method(),
        url: request.url(),
        headers: request.headers(),
        postData: request.postData(),
        resourceType: request.resourceType()
      }
      
      this.todasLasPeticiones.push(peticion)
      
      if (request.url().includes('exteriores.gob.es') || request.url().includes('citaconsular.es')) {
        console.log(`📤 [${nombrePagina}] ${request.method()} ${request.url()}`)
        if (request.method() === 'POST' && request.postData()) {
          console.log(`   📮 Data: ${request.postData()}`)
        }
      }
    })

    // Capturar TODAS las respuestas
    page.on('response', async response => {
      try {
        const body = await response.text()
        
        const respuesta = {
          timestamp: new Date().toISOString(),
          pagina: nombrePagina,
          status: response.status(),
          url: response.url(),
          headers: response.headers(),
          body: body,
          bodyLength: body.length
        }
        
        this.todasLasRespuestas.push(respuesta)
        
        if (response.url().includes('exteriores.gob.es') || response.url().includes('citaconsular.es')) {
          console.log(`📥 [${nombrePagina}] ${response.status()} ${response.url()} (${body.length} chars)`)
          
          // Análisis especial para disponibilidad
          if (response.url().includes('onlinebookings/datetime')) {
            console.log(`🎯 ¡RESPUESTA DE DISPONIBILIDAD CAPTURADA!`)
            console.log(`   Status: ${response.status()}`)
            console.log(`   Length: ${body.length}`)
            
            if (body.length > 0 && !body.includes('Exception')) {
              console.log(`🎉 ¡DATOS VÁLIDOS DE DISPONIBILIDAD!`)
              this.analizarDisponibilidad(body, response.url())
            } else if (body.includes('Exception')) {
              console.log(`❌ Error en disponibilidad: ${body.substring(0, 200)}`)
            } else {
              console.log(`📭 Respuesta de disponibilidad vacía`)
            }
          }
          
          // Análisis especial para main
          if (response.url().includes('onlinebookings/main')) {
            console.log(`🔧 Respuesta MAIN capturada (${body.length} chars)`)
            this.guardarArchivoAnalisis(`main-response-${Date.now()}.json`, {
              url: response.url(),
              status: response.status(),
              headers: response.headers(),
              body: body
            })
          }
        }
        
      } catch (e) {
        console.log(`Error capturando respuesta: ${e.message}`)
      }
    })

    // Capturar errores
    page.on('pageerror', error => {
      console.log(`❌ [${nombrePagina}] Error de página: ${error.message}`)
      this.erroresCapturados.push({
        timestamp: new Date().toISOString(),
        pagina: nombrePagina,
        tipo: 'pageerror',
        mensaje: error.message,
        stack: error.stack
      })
    })

    page.on('console', msg => {
      if (msg.type() === 'error') {
        console.log(`❌ [${nombrePagina}] Console error: ${msg.text()}`)
        this.erroresCapturados.push({
          timestamp: new Date().toISOString(),
          pagina: nombrePagina,
          tipo: 'console-error',
          mensaje: msg.text()
        })
      }
    })
  }

  async capturarEstadoDOM(page, nombreEstado) {
    try {
      const estado = {
        timestamp: new Date().toISOString(),
        nombre: nombreEstado,
        url: page.url(),
        title: await page.title(),
        cookies: await page.context().cookies(),
        localStorage: await page.evaluate(() => {
          const storage = {}
          for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i)
            storage[key] = localStorage.getItem(key)
          }
          return storage
        }),
        sessionStorage: await page.evaluate(() => {
          const storage = {}
          for (let i = 0; i < sessionStorage.length; i++) {
            const key = sessionStorage.key(i)
            storage[key] = sessionStorage.getItem(key)
          }
          return storage
        }),
        botones: await page.locator('button').count(),
        enlaces: await page.locator('a').count(),
        formularios: await page.locator('form').count()
      }
      
      this.estadosDOM.push(estado)
      console.log(`📊 Estado DOM capturado: ${nombreEstado}`)
      
    } catch (e) {
      console.log(`Error capturando estado DOM: ${e.message}`)
    }
  }

  analizarDisponibilidad(data, url) {
    console.log('🔬 ANALIZANDO DISPONIBILIDAD EN DETALLE...')
    
    try {
      // Guardar datos crudos
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
      this.guardarArchivoAnalisis(`disponibilidad-cruda-${timestamp}.json`, {
        timestamp: new Date().toISOString(),
        url: url,
        data: data,
        dataLength: data.length
      })
      
      // Parsear JSONP
      const jsonStart = data.indexOf('(') + 1
      const jsonEnd = data.lastIndexOf(')')
      const jsonData = data.substring(jsonStart, jsonEnd)
      const parsed = JSON.parse(jsonData)
      
      console.log('✅ JSONP parseado exitosamente')
      console.log(`📊 Keys principales: ${Object.keys(parsed).join(', ')}`)
      
      const huecos = []
      let fechasConDatos = 0
      let totalSlots = 0
      
      if (parsed.Slots && Array.isArray(parsed.Slots)) {
        console.log(`📅 Analizando ${parsed.Slots.length} fechas...`)
        
        parsed.Slots.forEach(slot => {
          if (slot.times && typeof slot.times === 'object') {
            const slotsEnFecha = Object.keys(slot.times).length
            totalSlots += slotsEnFecha
            
            if (slotsEnFecha > 0) {
              fechasConDatos++
              console.log(`   📅 ${slot.date}: ${slotsEnFecha} horarios, state: ${slot.state}`)
              
              Object.values(slot.times).forEach(time => {
                if (time.freeSlots && time.freeSlots > 0) {
                  const hueco = {
                    fecha: slot.date,
                    hora: time.time,
                    huecos: time.freeSlots,
                    agenda: slot.agenda
                  }
                  huecos.push(hueco)
                  console.log(`      🕐 ${time.time}: ${time.freeSlots} huecos libres`)
                }
              })
            }
          }
        })
      }
      
      console.log(`📊 RESUMEN DISPONIBILIDAD:`)
      console.log(`   Total fechas: ${parsed.Slots?.length || 0}`)
      console.log(`   Fechas con datos: ${fechasConDatos}`)
      console.log(`   Total slots: ${totalSlots}`)
      console.log(`   Huecos libres: ${huecos.length}`)
      
      if (huecos.length > 0) {
        console.log(`🎊 ¡${huecos.length} HUECOS LIBRES DETECTADOS!`)
        this.huecosDetectados = huecos
        
        // Guardar análisis detallado
        this.guardarArchivoAnalisis(`huecos-detectados-${timestamp}.json`, {
          timestamp: new Date().toISOString(),
          totalHuecos: huecos.length,
          fechasConDatos: fechasConDatos,
          totalSlots: totalSlots,
          huecos: huecos,
          datosCompletos: parsed,
          analisisDetallado: {
            fechasPorEstado: this.analizarEstadosFechas(parsed.Slots),
            distribucionHorarios: this.analizarDistribucionHorarios(huecos),
            agendas: [...new Set(huecos.map(h => h.agenda))]
          }
        })
        
        console.log(`💾 Análisis detallado guardado`)
      }
      
      return huecos
      
    } catch (error) {
      console.log(`❌ Error analizando disponibilidad: ${error.message}`)
      this.erroresCapturados.push({
        timestamp: new Date().toISOString(),
        tipo: 'analisis-disponibilidad',
        mensaje: error.message,
        data: data.substring(0, 500)
      })
      return []
    }
  }

  analizarEstadosFechas(slots) {
    const estados = {}
    slots?.forEach(slot => {
      const estado = slot.state || 'undefined'
      if (!estados[estado]) estados[estado] = 0
      estados[estado]++
    })
    return estados
  }

  analizarDistribucionHorarios(huecos) {
    const distribucion = {}
    huecos.forEach(hueco => {
      const hora = hueco.hora
      if (!distribucion[hora]) distribucion[hora] = 0
      distribucion[hora] += hueco.huecos
    })
    return distribucion
  }

  guardarArchivoAnalisis(nombre, contenido) {
    const rutaCompleta = path.join(this.dirAnalisis, nombre)
    fs.writeFileSync(rutaCompleta, JSON.stringify(contenido, null, 2))
  }

  async esperarHumanoLento(min = 3000, max = 8000) {
    const tiempo = Math.random() * (max - min) + min
    console.log(`⏳ Esperando ${Math.round(tiempo/1000)}s (simulando humano lento)...`)
    await new Promise(resolve => setTimeout(resolve, tiempo))
  }

  async moverMouseHumano(page) {
    // Simular movimientos de mouse muy lentos
    for (let i = 0; i < 5; i++) {
      const x = Math.random() * 800 + 100
      const y = Math.random() * 600 + 100
      await page.mouse.move(x, y, { steps: 15 })
      await this.esperarHumanoLento(800, 2000)
    }
  }

  async ejecutarAnalisisCompleto() {
    console.log('\n🔬 EJECUTANDO ANÁLISIS EXHAUSTIVO ULTRA LENTO...')

    this.tiemposEjecucion.inicio = Date.now()

    const page = await this.context.newPage()
    this.capturarTodo(page, 'PAGINA_PRINCIPAL')

    try {
      console.log('📄 FASE 1: Navegación inicial MUY LENTA...')
      this.tiemposEjecucion.navegacionInicio = Date.now()

      await page.goto('https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx')
      await page.waitForLoadState('networkidle')
      await this.esperarHumanoLento(4000, 8000)
      await this.moverMouseHumano(page)
      await this.capturarEstadoDOM(page, 'PAGINA_INICIAL')

      // Cookies con movimiento humano
      try {
        console.log('🍪 Buscando cookies muy lentamente...')
        await this.moverMouseHumano(page)
        await page.getByRole('button', { name: 'Aceptar' }).click({ timeout: 10000 })
        console.log('✅ Cookies aceptadas')
        await this.esperarHumanoLento(3000, 6000)
      } catch (e) {
        console.log('ℹ️ No apareció banner de cookies')
      }
      
      console.log('📝 FASE 2: Llenado de formulario ULTRA LENTO...')
      this.tiemposEjecucion.formularioInicio = Date.now()

      // País con movimiento humano
      console.log('🌍 Seleccionando país muy lentamente...')
      await this.moverMouseHumano(page)
      const paisSelect = page.getByLabel('Países y territorios')
      await paisSelect.click()
      await this.esperarHumanoLento(2000, 4000)
      await paisSelect.selectOption('Cuba')
      await this.esperarHumanoLento(3000, 6000)
      console.log('✅ País: Cuba')

      // Categoría con movimiento humano
      console.log('📋 Seleccionando categoría muy lentamente...')
      await this.moverMouseHumano(page)
      const categoriaSelect = page.getByLabel('Categorías servicios')
      await categoriaSelect.click()
      await this.esperarHumanoLento(2000, 4000)
      await categoriaSelect.selectOption('Visados')
      await this.esperarHumanoLento(3000, 6000)
      console.log('✅ Categoría: Visados')

      // Delegación con movimiento humano
      console.log('🏢 Seleccionando delegación muy lentamente...')
      await this.moverMouseHumano(page)
      await page.getByText('Delegaciones').click()
      await this.esperarHumanoLento(2000, 4000)
      const delegacionSelect = page.getByLabel('Delegaciones')
      await delegacionSelect.click()
      await this.esperarHumanoLento(2000, 4000)
      await delegacionSelect.selectOption('166')
      await this.esperarHumanoLento(3000, 6000)
      console.log('✅ Delegación: 166')

      // Servicio con movimiento humano
      console.log('🎫 Seleccionando servicio muy lentamente...')
      await this.moverMouseHumano(page)
      const servicioSelect = page.getByLabel('Servicios consulares')
      await servicioSelect.click()
      await this.esperarHumanoLento(2000, 4000)
      await servicioSelect.selectOption('Visado de estancia (visado Schengen)')
      await this.esperarHumanoLento(4000, 8000)
      console.log('✅ Servicio: Turismo/Schengen')
      
      await this.capturarEstadoDOM(page, 'FORMULARIO_COMPLETO')
      
      console.log('📮 FASE 3: POST tradicional MUY LENTO...')
      this.tiemposEjecucion.postInicio = Date.now()

      await this.moverMouseHumano(page)
      const buscarButton = page.getByRole('button', { name: 'Buscar' })
      await buscarButton.click()
      console.log('⏳ Esperando redirección muy pacientemente...')
      await page.waitForLoadState('networkidle')
      await this.esperarHumanoLento(6000, 12000)
      
      await this.capturarEstadoDOM(page, 'POST_COMPLETADO')
      this.tiemposEjecucion.postFin = Date.now()
      
      console.log('🎯 FASE 4: Apertura de popup MUY CUIDADOSA...')
      this.tiemposEjecucion.popupInicio = Date.now()

      await this.moverMouseHumano(page)
      console.log('🔗 Haciendo clic en enlace de cita muy lentamente...')

      const [popup] = await Promise.all([
        this.context.waitForEvent('page'),
        page.getByRole('link', { name: 'Reservar cita de visado Schengen Se abre en ventana nueva' }).click()
      ])

      console.log('✅ Popup abierto, configurando captura...')
      this.capturarTodo(popup, 'POPUP')
      await popup.waitForLoadState('networkidle')
      await this.esperarHumanoLento(8000, 15000)
      await this.capturarEstadoDOM(popup, 'POPUP_INICIAL')
      
      console.log('🔘 FASE 5: Botón Continue ULTRA CUIDADOSO...')
      this.tiemposEjecucion.botonInicio = Date.now()

      try {
        console.log('🔍 Buscando botón #idCaptchaButton pacientemente...')
        await popup.waitForSelector('#idCaptchaButton', { timeout: 20000 })
        console.log('✅ Botón #idCaptchaButton encontrado')

        await this.moverMouseHumano(popup)
        await this.esperarHumanoLento(3000, 6000)
        await popup.click('#idCaptchaButton')
        console.log('✅ Botón #idCaptchaButton clickeado')

      } catch (e) {
        console.log(`❌ Error con botón: ${e.message}`)

        // Estrategias alternativas muy lentas
        try {
          console.log('🔍 Buscando por texto Continue/Continuar...')
          const continueButton = popup.getByRole('button', { name: /Continue|Continuar/i })
          await continueButton.waitFor({ timeout: 15000 })
          await this.moverMouseHumano(popup)
          await this.esperarHumanoLento(3000, 6000)
          await continueButton.click()
          console.log('✅ Botón Continue clickeado')
        } catch (e2) {
          console.log(`❌ También falló estrategia alternativa: ${e2.message}`)
        }
      }

      console.log('⏳ Esperando procesamiento del botón muy pacientemente...')
      await this.esperarHumanoLento(10000, 20000)
      await this.capturarEstadoDOM(popup, 'BOTON_CLICKEADO')
      this.tiemposEjecucion.botonFin = Date.now()
      
      console.log('🎭 FASE 6: Widget final...')
      this.tiemposEjecucion.widgetInicio = Date.now()
      
      await popup.goto('https://www.citaconsular.es/es/hosteds/widgetdefault/28db94e270580be60f6e00285a7d8141f/bkt873048#datetime')
      await popup.waitForLoadState('networkidle')
      await this.capturarEstadoDOM(popup, 'WIDGET_CARGADO')
      
      console.log('⏳ FASE 7: Captura de datos...')
      this.tiemposEjecucion.capturaInicio = Date.now()
      
      // Esperar 2 minutos capturando todo
      for (let i = 1; i <= 24; i++) {
        console.log(`⏳ Capturando datos... ${i * 5}/120 segundos`)
        await popup.waitForTimeout(5000)
        
        // Verificar huecos visibles
        try {
          const huecos = await popup.locator('a:has-text("Hueco libre")').count()
          if (huecos > 0) {
            console.log(`🎉 ¡${huecos} huecos libres visibles!`)
            await this.capturarEstadoDOM(popup, `HUECOS_VISIBLES_${i}`)
            
            // Capturar texto de huecos
            const elementos = await popup.locator('a:has-text("Hueco libre")').all()
            const textosHuecos = []
            for (let j = 0; j < Math.min(elementos.length, 10); j++) {
              try {
                const texto = await elementos[j].textContent()
                textosHuecos.push(texto)
                console.log(`   📅 Hueco ${j + 1}: ${texto}`)
              } catch (e) {
                console.log(`   📅 Hueco ${j + 1}: Error leyendo`)
              }
            }
            
            this.guardarArchivoAnalisis(`huecos-visibles-${Date.now()}.json`, {
              timestamp: new Date().toISOString(),
              ciclo: i,
              totalHuecos: huecos,
              textosHuecos: textosHuecos
            })
          }
        } catch (e) {
          // Continuar
        }
      }
      
      this.tiemposEjecucion.capturaFin = Date.now()
      this.tiemposEjecucion.fin = Date.now()
      
      // Generar reporte final
      await this.generarReporteFinal()
      
      console.log('\n🔍 Análisis completo. Manteniendo browser abierto...')
      console.log(`📁 Todos los archivos guardados en: ${this.dirAnalisis}`)
      console.log('Presiona Ctrl+C para cerrar')
      
      await new Promise(() => {})
      
    } catch (error) {
      console.log(`❌ Error en análisis: ${error.message}`)
      this.erroresCapturados.push({
        timestamp: new Date().toISOString(),
        tipo: 'error-principal',
        mensaje: error.message,
        stack: error.stack
      })
    } finally {
      await page.close()
    }
  }

  async generarReporteFinal() {
    console.log('📊 Generando reporte final exhaustivo...')
    
    const reporte = {
      timestamp: new Date().toISOString(),
      resumenEjecucion: {
        tiempoTotal: this.tiemposEjecucion.fin - this.tiemposEjecucion.inicio,
        fases: {
          navegacion: this.tiemposEjecucion.formularioInicio - this.tiemposEjecucion.navegacionInicio,
          formulario: this.tiemposEjecucion.postInicio - this.tiemposEjecucion.formularioInicio,
          post: this.tiemposEjecucion.postFin - this.tiemposEjecucion.postInicio,
          popup: this.tiemposEjecucion.botonInicio - this.tiemposEjecucion.popupInicio,
          boton: this.tiemposEjecucion.botonFin - this.tiemposEjecucion.botonInicio,
          widget: this.tiemposEjecucion.capturaInicio - this.tiemposEjecucion.widgetInicio,
          captura: this.tiemposEjecucion.capturaFin - this.tiemposEjecucion.capturaInicio
        }
      },
      estadisticas: {
        totalPeticiones: this.todasLasPeticiones.length,
        totalRespuestas: this.todasLasRespuestas.length,
        erroresCapturados: this.erroresCapturados.length,
        estadosDOM: this.estadosDOM.length,
        huecosDetectados: this.huecosDetectados.length
      },
      analisisDetallado: {
        peticionesPorTipo: this.analizarPeticionesPorTipo(),
        respuestasPorStatus: this.analizarRespuestasPorStatus(),
        peticionesDisponibilidad: this.filtrarPeticionesDisponibilidad(),
        evolucionCookies: this.analizarEvolucionCookies(),
        erroresPorTipo: this.agruparErroresPorTipo()
      },
      resultados: {
        huecosDetectados: this.huecosDetectados,
        exito: this.huecosDetectados.length > 0,
        problemas: this.erroresCapturados
      }
    }
    
    this.guardarArchivoAnalisis('REPORTE-FINAL-EXHAUSTIVO.json', reporte)
    
    // Guardar también datos crudos
    this.guardarArchivoAnalisis('peticiones-completas.json', this.todasLasPeticiones)
    this.guardarArchivoAnalisis('respuestas-completas.json', this.todasLasRespuestas)
    this.guardarArchivoAnalisis('estados-dom-completos.json', this.estadosDOM)
    
    console.log('✅ Reporte final exhaustivo generado')
    console.log(`📊 Resumen: ${this.huecosDetectados.length} huecos detectados, ${this.erroresCapturados.length} errores`)
  }

  analizarPeticionesPorTipo() {
    const tipos = {}
    this.todasLasPeticiones.forEach(p => {
      if (!tipos[p.method]) tipos[p.method] = 0
      tipos[p.method]++
    })
    return tipos
  }

  analizarRespuestasPorStatus() {
    const status = {}
    this.todasLasRespuestas.forEach(r => {
      if (!status[r.status]) status[r.status] = 0
      status[r.status]++
    })
    return status
  }

  filtrarPeticionesDisponibilidad() {
    return this.todasLasRespuestas.filter(r => 
      r.url.includes('onlinebookings/datetime') || r.url.includes('onlinebookings/main')
    )
  }

  analizarEvolucionCookies() {
    return this.estadosDOM.map(estado => ({
      momento: estado.nombre,
      totalCookies: estado.cookies.length,
      cookies: estado.cookies.map(c => c.name)
    }))
  }

  agruparErroresPorTipo() {
    const tipos = {}
    this.erroresCapturados.forEach(e => {
      if (!tipos[e.tipo]) tipos[e.tipo] = 0
      tipos[e.tipo]++
    })
    return tipos
  }

  async ejecutar() {
    await this.init()
    await this.ejecutarAnalisisCompleto()
  }
}

// Ejecutar
const debug = new DebugExhaustivoCompleto()
debug.ejecutar().catch(console.error)
