import { chromium, Page, BrowserContext } from 'playwright'
import { mkdir, writeFile, rm } from 'node:fs/promises'
import { resolve, dirname } from 'node:path'

const TARGET_URL = process.env.TARGET_URL || 'https://www.exteriores.gob.es/Consulados/lahabana/es/ServiciosConsulares/Paginas/index.aspx?scca=Visados&scco=Cuba&scd=166&scs=Visado+de+estancia+(visado+Schengen)'
const OUT_DIR = resolve('investigation_archive/turismo_output')

async function ensureDir(p: string) { await mkdir(p, { recursive: true }) }
async function save(path: string, data: string | Buffer) { await ensureDir(dirname(path)); await writeFile(path, typeof data === 'string' ? Buffer.from(data) : data) }

async function attachNetDump(page: Page, outDir: string) {
  let seq = 0
  page.on('requestfinished', async (req) => {
    try {
      const res = await req.response()
      const dump: any = {
        url: req.url(), method: req.method(), resourceType: req.resourceType(),
        headers: req.headers(), postData: req.postData(), status: res?.status(),
        respHeaders: res ? await res.headers() : {},
      }
      if (res) {
        try { dump.body = await res.text() } catch { try { const b = await res.body(); dump.body = `__base64__:${b.toString('base64')}` } catch {} }
      }
      const f = resolve(outDir, `net_${String(++seq).padStart(5,'0')}.json`)
      await save(f, JSON.stringify(dump, null, 2))
    } catch {}
  })
}

async function clickReservar(page: Page): Promise<'clicked'|'not-found'> {
  // Busca enlaces que contengan "Reservar" y "cita" (insensible a mayúsculas)
  const anchors = page.locator('a')
  const count = await anchors.count()
  for (let i=0;i<count;i++) {
    const a = anchors.nth(i)
    const txt = (await a.textContent()||'').toLowerCase()
    if (txt.includes('reservar') && txt.includes('cita')) {
      try { await a.scrollIntoViewIfNeeded(); await a.click({timeout: 5000}); return 'clicked' } catch {}
    }
  }
  return 'not-found'
}

async function run() {
  try { await rm(OUT_DIR, { recursive: true, force: true }) } catch {}
  await ensureDir(OUT_DIR)

  const headless = process.env.HEADLESS === '1'
  const persist = process.env.PERSIST === '1'
  const args = ['--no-sandbox','--disable-dev-shm-usage','--disable-blink-features=AutomationControlled','--disable-features=ThirdPartyStoragePartitioning,BlockThirdPartyCookies']
  const common = {
    recordHar: { path: resolve(OUT_DIR, 'session.har'), content: 'embed' as const, mode: 'full' as const },
    locale: 'es-ES', viewport: { width: 1280, height: 800 }, extraHTTPHeaders: { 'accept-language': 'es-ES,es;q=0.9' },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  }
  let context: BrowserContext
  if (persist) {
    context = await chromium.launchPersistentContext(resolve('investigation_archive/persist_profile'), { headless, args, ...common })
  } else {
    const browser = await chromium.launch({ headless, args })
    context = await browser.newContext(common)
  }

  // stealth mínimo
  await context.addInitScript(() => {
    try { Object.defineProperty(navigator, 'webdriver', { get: () => false }); (window as any).chrome = { runtime: {} } } catch {}
  })

  const page = await context.newPage()
  await attachNetDump(page, OUT_DIR)
  await page.goto(TARGET_URL, { waitUntil: 'domcontentloaded' })
  await save(resolve(OUT_DIR,'step_01.html'), await page.content()); await page.screenshot({ path: resolve(OUT_DIR,'step_01.png') })

  // Intento directo de click por texto
  const res = await clickReservar(page)
  if (res === 'not-found') {
    // Fallback: intenta localizar por href típico a hosteds/widgetdefault
    const link = page.locator('a[href*="/hosteds/widgetdefault/"]').first()
    if (await link.count()) { try { await link.scrollIntoViewIfNeeded(); await link.click({ timeout: 8000 }) } catch {} }
  }

  // popup o misma pestaña
  let child: Page | null = null
  try {
    const [p] = await Promise.race([
      Promise.all([page.waitForEvent('popup', { timeout: 8000 })]).then(([pp]) => [pp]),
      new Promise<Page[]>((resolve) => setTimeout(()=>resolve([]), 9000))
    ])
    child = p ?? null
  } catch {}

  if (child) {
    await attachNetDump(child, OUT_DIR)
    await child.waitForLoadState('domcontentloaded', { timeout: 15000 }).catch(()=>{})
    await save(resolve(OUT_DIR,'step_02_popup.html'), await child.content()); await child.screenshot({ path: resolve(OUT_DIR,'step_02_popup.png') })
    // botón de continuar si existe
    try { await child.getByRole('button', { name: /continuar/i }).click({ timeout: 5000 }) } catch {}
    await child.waitForTimeout(8000)
    await save(resolve(OUT_DIR,'step_03_popup.html'), await child.content()); await child.screenshot({ path: resolve(OUT_DIR,'step_03_popup.png') })
  } else {
    // Si no hubo popup, espera navegación in-page
    await page.waitForLoadState('networkidle', { timeout: 10000 }).catch(()=>{})
    await save(resolve(OUT_DIR,'step_02.html'), await page.content()); await page.screenshot({ path: resolve(OUT_DIR,'step_02.png') })
  }

  if (process.env.PAUSE === '1') {
    console.log('[TurismoCapture] PAUSE: interactúa y pulsa Enter aquí para terminar...')
    await new Promise<void>((resolve) => { process.stdin.resume(); process.stdin.once('data', () => resolve()) })
  }

  await context.close()
  console.log('[TurismoCapture] Done. Output at', OUT_DIR)
}

run().catch((e) => { console.error(e); process.exit(1) })

