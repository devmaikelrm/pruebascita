import { chromium } from 'playwright'
import { mkdir, writeFile, rm } from 'node:fs/promises'
import { resolve, dirname } from 'node:path'

const START_URL = process.env.TARGET_URL || 'https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx'

async function ensureDir(p: string) {
  await mkdir(p, { recursive: true })
}

async function saveJSON(path: string, data: any) {
  await ensureDir(dirname(path))
  await writeFile(path, Buffer.from(JSON.stringify(data, null, 2)))
}

async function deepCapture() {
  const outDir = resolve('investigation_archive/deep_output')
  try { await rm(outDir, { recursive: true, force: true }) } catch {}
  await ensureDir(outDir)

  const headless = process.env.HEADLESS === '1'
  const persist = process.env.PERSIST === '1'
  const args = [
    '--no-sandbox',
    '--disable-dev-shm-usage',
    '--disable-blink-features=AutomationControlled',
    '--disable-features=ThirdPartyStoragePartitioning,BlockThirdPartyCookies'
  ]
  const commonContextOpts = {
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    recordVideo: { dir: 'videos/' },
    recordHar: { path: resolve(outDir, 'session.har'), content: 'embed', mode: 'full' as const },
    locale: 'es-ES',
    extraHTTPHeaders: { 'accept-language': 'es-ES,es;q=0.9' },
    viewport: { width: 1280, height: 800 },
  }

  let browser: any = null
  let context: any = null
  if (persist) {
    const userDataDir = resolve('investigation_archive/persist_profile')
    context = await chromium.launchPersistentContext(userDataDir, {
      headless,
      args,
      ...commonContextOpts,
    })
    browser = context.browser()
  } else {
    browser = await chromium.launch({ headless, slowMo: headless ? 0 : 100, args })
    context = await browser.newContext(commonContextOpts)
  }

  // Simple stealth: reduce obvious automation hints
  await context.addInitScript(() => {
    try {
      Object.defineProperty(navigator, 'webdriver', { get: () => false })
      ;(window as any).chrome = (window as any).chrome || { runtime: {} }
      Object.defineProperty(navigator, 'languages', { get: () => ['es-ES', 'es'] })
      Object.defineProperty(navigator, 'plugins', { get: () => [1, 2, 3] })
    } catch {}
  })

  await context.tracing.start({ screenshots: true, snapshots: true, sources: true })
  const page = await context.newPage()

  const consoleLines: string[] = []
  page.on('console', (msg) => { consoleLines.push(`[console:${msg.type()}] ${msg.text()}`) })
  const pageErrors: string[] = []
  page.on('pageerror', (err) => { pageErrors.push(String(err)) })

  let reqId = 0
  page.on('requestfinished', async (request) => {
    try {
      const response = await request.response()
      const dump: any = {
        url: request.url(),
        method: request.method(),
        resourceType: request.resourceType(),
        headers: request.headers(),
        postData: request.postData(),
        status: response?.status(),
        respHeaders: response ? await response.headers() : {},
      }
      if (response) {
        try { dump.body = await response.text() } catch {
          try { const buf = await response.body(); dump.body = `__base64__:${buf.toString('base64')}` } catch {}
        }
      }
      const file = resolve(outDir, `net_${String(++reqId).padStart(5,'0')}.json`)
      await saveJSON(file, dump)
    } catch {}
  })

  console.log('[DeepCapture] Step 1: goto')
  await page.goto(START_URL, { waitUntil: 'networkidle' })
  await page.screenshot({ path: resolve(outDir, 'step_01.png') })
  await writeFile(resolve(outDir, 'step_01.html'), await page.content())

  // Fill basic selects (using same labels as final_test)
  try { await page.getByLabel('Pa�ses y territorios').selectOption('Cuba') } catch {}
  try { await page.getByLabel('Categor�as servicios').selectOption('Certificados') } catch {}
  try { await page.getByLabel('Delegaciones').selectOption('166') } catch {}
  try { await page.getByLabel('Servicios consulares').selectOption('Certificado de nacimiento') } catch {}

  // Accept cookies if visible
  try {
    const acceptButton = page.getByRole('button', { name: 'Aceptar' })
    if (await acceptButton.isVisible({ timeout: 3000 })) { await acceptButton.click() }
  } catch {}

  await page.screenshot({ path: resolve(outDir, 'step_02.png') })
  await writeFile(resolve(outDir, 'step_02.html'), await page.content())

  console.log('[DeepCapture] Step 2: Buscar')
  try { await page.getByRole('button', { name: 'Buscar' }).click() } catch {}

  console.log('[DeepCapture] Step 3: abrir popup')
  await page.waitForLoadState('networkidle')
  let page1 = null
  try {
    const link = page.locator('a[href*="/hosteds/widgetdefault/"]').first()
    await link.waitFor({ state: 'visible', timeout: 15000 })
    const [popup] = await Promise.all([
      page.waitForEvent('popup', { timeout: 20000 }),
      link.click({ timeout: 10000 })
    ])
    page1 = popup
  } catch {
    // No popup detected via click
  }
  if (page1) {
    page1.on('requestfinished', async (request) => {
      try {
        const response = await request.response()
        const dump: any = {
          url: request.url(), method: request.method(), resourceType: request.resourceType(),
          headers: request.headers(), postData: request.postData(), status: response?.status(), respHeaders: response ? await response.headers() : {},
        }
        if (response) {
          try { dump.body = await response.text() } catch { try { const buf = await response.body(); dump.body = `__base64__:${buf.toString('base64')}` } catch {} }
        }
        const file = resolve(outDir, `popup_net_${String(++reqId).padStart(5,'0')}.json`)
        await saveJSON(file, dump)
      } catch {}
    })
    await page1.waitForLoadState('domcontentloaded')
    await page1.screenshot({ path: resolve(outDir, 'step_03_popup.png') })
    await writeFile(resolve(outDir, 'step_03_popup.html'), await page1.content())
    try { await page1.getByRole('button', { name: 'Continue / Continuar' }).click() } catch {}
    await page1.waitForTimeout(15000)
    await page1.screenshot({ path: resolve(outDir, 'step_04_popup.png') })
    await writeFile(resolve(outDir, 'step_04_popup.html'), await page1.content())
  }
  // Fallback: abrir el widget directamente en nueva pestaña con Referer correcto
  if (!page1) {
    try {
      const anchor = page.locator('a[href*="/hosteds/widgetdefault/"]').first()
      const href = await anchor.getAttribute('href')
      if (href) {
        const abs = new URL(href, await page.url()).href
        const p2 = await context.newPage()
        p2.on('requestfinished', async (request) => {
          try {
            const response = await request.response()
            const dump: any = {
              url: request.url(), method: request.method(), resourceType: request.resourceType(),
              headers: request.headers(), postData: request.postData(), status: response?.status(), respHeaders: response ? await response.headers() : {},
            }
            if (response) { try { dump.body = await response.text() } catch { try { const buf = await response.body(); dump.body = `__base64__:${buf.toString('base64')}` } catch {} } }
            const file = resolve(outDir, `popup_net_${String(++reqId).padStart(5,'0')}.json`)
            await saveJSON(file, dump)
          } catch {}
        })
        await p2.goto(abs, { referer: START_URL, waitUntil: 'domcontentloaded' })
        await p2.screenshot({ path: resolve(outDir, 'step_03_direct.png') })
        await writeFile(resolve(outDir, 'step_03_direct.html'), await p2.content())
        await p2.waitForTimeout(15000)
        await p2.screenshot({ path: resolve(outDir, 'step_04_direct.png') })
        await writeFile(resolve(outDir, 'step_04_direct.html'), await p2.content())
      }
    } catch {}
  }

  // Dump cookies and storages
  try {
    const cookies = await context.cookies()
    await saveJSON(resolve(outDir, 'cookies.json'), cookies)
    const ls = await page.evaluate(() => Object.fromEntries(Object.keys(localStorage).map(k => [k, localStorage.getItem(k)])))
    const ss = await page.evaluate(() => Object.fromEntries(Object.keys(sessionStorage).map(k => [k, sessionStorage.getItem(k)])))
    await saveJSON(resolve(outDir, 'localStorage.json'), ls)
    await saveJSON(resolve(outDir, 'sessionStorage.json'), ss)
  } catch {}

  // Attempt to record recaptcha-related assets
  try {
    const assets = await page.$$eval('iframe[src*="recaptcha"], script[src*="recaptcha"]', els => els.map(e => (e as HTMLIFrameElement).src))
    await saveJSON(resolve(outDir, 'recaptcha_assets.json'), assets)
  } catch {}

  await writeFile(resolve(outDir, 'console.log'), consoleLines.join('\n'))
  await writeFile(resolve(outDir, 'page_errors.log'), pageErrors.join('\n'))

  // Optional interactive pause before we stop tracing/close
  if (process.env.PAUSE === '1') {
    console.log('[DeepCapture] PAUSE enabled. Interact freely, then press Enter here to finish...')
    await new Promise<void>((resolvePause) => {
      process.stdin.resume()
      process.stdin.once('data', () => resolvePause())
    })
  }

  await context.tracing.stop({ path: resolve(outDir, 'trace.zip') })

  const extraWaitMs = Number(process.env.WAIT_MS || '0')
  if (extraWaitMs > 0) {
    console.log(`[DeepCapture] WAIT_MS set. Holding browser for ${extraWaitMs} ms...`)
    await new Promise((r) => setTimeout(r, extraWaitMs))
  }

  await context.close()
  await browser.close()
  console.log('[DeepCapture] Done. Output at', outDir)
}

deepCapture().catch((err) => { console.error(err); process.exit(1) })
