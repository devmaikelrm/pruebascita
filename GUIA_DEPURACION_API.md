
# Guía Práctica para Descubrir APIs Web

Resumen de técnicas para encontrar y analizar llamadas a API (como `datetime` o `onlinebookings`), incluso si no son visibles en "XHR/Fetch" o están en iframes.

## 1) En el Navegador (Método Rápido)

1.  **Abre la página** que carga el widget.
2.  **Abre DevTools** (F12).
3.  En la pestaña **Network**:
    *   Marca **Preserve log** (para que no se borre al navegar).
    *   Marca **Disable cache** (para forzar la carga de todos los recursos).
    *   En el **filtro de texto**, busca por palabras clave como `datetime`, `onlinebookings` o la `publickey` (`2f21...`).
    *   Si no aparece nada, cambia el filtro de `Fetch/XHR` a **All** o **Script**. Las peticiones JSONP a menudo se clasifican como `script`.
4.  **Si hay un `iframe`**:
    *   Haz clic derecho dentro del iframe en la página y selecciona **Inspeccionar**. Esto abre DevTools centrado en el contexto del iframe, y su pestaña Network mostrará solo las peticiones de ese marco.
5.  **Reproduce la acción** (clics) que dispara la carga de datos.
6.  **Observa la petición** en la lista (ej. `datetime/?callback=...`). Haz clic en ella y mira la pestaña **Response** para ver el texto crudo (ej. `jQuery...({...})`).

## 2) Abrir el `iframe` en su Propia Pestaña

Si el método anterior es confuso, puedes aislar el iframe:
1.  En la pestaña **Elements** de DevTools, busca la etiqueta `<iframe>`.
2.  Copia el valor de su atributo `src`.
3.  Pega esa URL en una nueva pestaña del navegador. Ahora la pestaña Network mostrará únicamente la carga de ese recurso.

## 3) Usar `curl` para Ver la Respuesta Cruda

Para verificar si una URL responde y qué devuelve exactamente, sin la interferencia del navegador:

```sh
# Usa -L para seguir redirecciones (como el código 302 que encontramos)
# Usa -v para ver detalles de la conexión y las cabeceras
curl -v -L "URL_DE_LA_API"
```

## 4) Usar Playwright para Capturar TODO (Recomendado)

Playwright es la herramienta más potente para esto, ya que ve todas las peticiones que hace el navegador, incluyendo las de iframes y scripts inyectados.

El siguiente script de ejemplo imprime todas las respuestas y su cuerpo si la URL contiene `datetime` o `onlinebookings`:

```typescript
// (Este es un ejemplo conceptual de la lógica que usamos)
import { chromium } from 'playwright';

async function captureRequests() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Escucha TODAS las respuestas
  page.on('response', async (response) => {
    const url = response.url();
    if (url.includes('datetime') || url.includes('onlinebookings')) {
      console.log('>> Petición interceptada:', url);
      try {
        console.log('>> Cuerpo de la respuesta:', await response.text());
      } catch (e) {
        console.log('>> No se pudo leer el cuerpo de la respuesta.');
      }
    }
  });

  await page.goto('URL_INICIAL');
  // ... realizar acciones de la UI aquí ...
  await browser.close();
}
```

## 5) Proxies / MitM (Avanzado)

Para un análisis exhaustivo de todo el tráfico HTTPS, especialmente desde dispositivos móviles o aplicaciones de escritorio, se pueden usar herramientas como **mitmproxy**, **Fiddler** o **Burp Suite**. Configuras el navegador o dispositivo para que use el proxy y podrás ver, modificar e interceptar todas las peticiones.

## Checklist Rápido

- [ ] Buscar por `datetime`, `onlinebookings` o `publickey` en Network.
- [ ] Filtrar por tipo **Script**, no solo XHR.
- [ ] Si hay `iframe`, inspeccionarlo directamente.
- [ ] Activar **Preserve log** y **Disable cache**.
- [ ] Probar la URL con `curl -v -L` para ver la respuesta cruda y redirecciones.
- [ ] Si la respuesta es JSONP, extraer el texto entre el primer `(` y el último `)` y hacer `JSON.parse`.
- [ ] Si una petición falla en `curl` pero funciona en el navegador, es probable que falten cabeceras. Añade `Referer` y `User-Agent` a tu petición para simular un navegador real.
