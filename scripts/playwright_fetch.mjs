import { chromium } from "playwright";

const profile = {
  label: "DNI",
  publicKey: "2f21cd9c0d8aa26725bf8930e4691d645",
  serviceId: "bkt195382",
  agendaId: "bkt93764",
  src: "https://www.citaconsular.es/es/hosteds/widgetdefault/2f21cd9c0d8aa26725bf8930e4691d645/bkt195382",
};

function buildUrl(start, end) {
  const callback = `jQuery${Math.floor(Math.random() * 1e12)}_${Date.now()}`;
  const params = new URLSearchParams({
    callback,
    type: "default",
    publickey: profile.publicKey,
    lang: "es",
    version: "5",
    src: profile.src,
    srvsrc: "https://citaconsular.es",
    start,
    end,
    selectedPeople: "1",
    _: Date.now().toString(),
  });
  params.append("services[]", profile.serviceId);
  params.append("agendas[]", profile.agendaId);
  return `https://www.citaconsular.es/onlinebookings/datetime/?${params.toString()}`;
}

const start = new Date().toISOString().slice(0, 10);
const end = new Date(Date.now() + 30 * 86400_000).toISOString().slice(0, 10);
const targetUrl = buildUrl(start, end);

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
  });
  const page = await context.newPage();

  page.on("response", async (response) => {
    const url = response.url();
    if (url.startsWith("https://www.citaconsular.es/onlinebookings/datetime/")) {
      const body = await response.text();
      console.log("Captured response length", body.length);
      console.log(body.slice(0, 200));
    }
  });

  await page.goto(targetUrl, { waitUntil: "networkidle" });
  await page.waitForTimeout(5000);
  await browser.close();
})();
