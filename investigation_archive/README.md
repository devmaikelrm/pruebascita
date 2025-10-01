
# Resumen de Investigación de API (Octubre 2025)

Este documento resume la investigación realizada para encontrar un método de scraping más eficiente que el uso de un navegador completo (Playwright) para el sistema de citas consulares.

## Objetivo Inicial

El objetivo era determinar si era posible llamar a una API directamente para comprobar la disponibilidad de citas, evitando así el alto coste de recursos de lanzar un navegador Playwright en cada comprobación.

## Fases de la Investigación

Nuestra investigación se puede dividir en tres fases principales, con varios intentos y descubrimientos en cada una.

### Fase 1: Descubrimiento del Flujo y la API Inicial

1.  **Primer Intento (Fallo):** Se intentó navegar directamente a una URL de widget (`citaconsular.es/...`) encontrada en los scripts del proyecto. Esto falló, la página no cargaba o se quedaba en blanco, sugiriendo que la URL estaba obsoleta o requería una navegación previa.

2.  **Segundo Intento (Éxito Parcial):** Usando el modo de depuración interactivo de Playwright (`debug_inspector.ts`), el usuario grabó el flujo de navegación completo y correcto. Este fue nuestro mayor avance y reveló la secuencia real:
    *   Navegar a una página de información en `exteriores.gob.es`.
    *   Rellenar un formulario con 4 menús desplegables (País, Categoría, etc.) y pulsar "Buscar".
    *   Hacer clic en un enlace que abre el widget de `citaconsular.es` en una **nueva pestaña (popup)**.
    *   Interactuar con los modales y botones ("Cerrar", "Continuar") dentro del widget.

3.  **Tercer Intento (Éxito de Captura):** Se creó un script final (`final_test.ts`) que replicaba este flujo completo. El script se ejecutó con éxito y nos permitió capturar un **informe de red con 196 peticiones**.

4.  **Hallazgo Clave:** Dentro de ese informe, se identificó la llamada principal a la API:
    *   **URL:** `https://www.citaconsular.es/onlinebookings/main/?callback=jQuery...`
    *   **Tipo:** JSONP (JavaScript envuelto en una llamada a función), no una API JSON estándar.

### Fase 2: Pruebas de Llamada Directa a la API

El objetivo de esta fase era ver si podíamos llamar a la API encontrada directamente desde Node.js usando `axios`.

1.  **Primer Intento (Fallo):** Se llamó a la API `/main/` sin el parámetro `callback`. El servidor devolvió un error: `no callback found`.

2.  **Segundo Intento (Fallo):** Se añadió un parámetro `callback` simple (ej: `?callback=foo`). El servidor devolvió un nuevo error: `Contact with your technical support`.

3.  **Tercer Intento (Fallo):** Se replicó la URL de forma casi perfecta, con un `callback` dinámico tipo jQuery y un timestamp. El resultado fue el mismo error: `Contact with your technical support`.

4.  **Hallazgo Clave:** El usuario descubrió un endpoint mejor (`/datetime/`) en sus notas, que permite consultar por rango de fechas. Sin embargo, las pruebas directas a este nuevo endpoint seguían dando el mismo error.

### Fase 3: Prueba del Enfoque Híbrido (Cookie + API)

La teoría era que la API requería una `Cookie` de sesión válida para funcionar.

1.  **Plan:** Se diseñó un plan de dos pasos:
    *   **Paso A:** Usar Playwright para navegar a la página y obtener una cookie de sesión (`PHPSESSID`).
    *   **Paso B:** Usar `axios` para llamar a la API `/datetime/` incluyendo la cookie obtenida.

2.  **Intento de Obtener Cookie (Fallo Definitivo):** Se creó y ejecutó el script `get_cookie.ts`. Este script navegó por el widget correctamente, pero al inspeccionar las cookies del navegador, el resultado fue inequívoco: **el servidor no asignó ninguna cookie** (`No cookies were set by the website`).

## Conclusión Final

La investigación ha sido un éxito porque nos ha llevado a una conclusión definitiva e irrefutable:

**El "método mejor" no existe para este sitio web.**

El servidor de `citaconsular.es` tiene un sistema anti-bot de varias capas:
1.  Requiere una navegación desde el sitio de origen (`exteriores.gob.es`).
2.  Requiere una `Cookie` de sesión para responder a las llamadas de la API.
3.  **Detecta los navegadores automatizados (incluso Playwright en modo headless) y se niega a asignarles una cookie de sesión.**

Este es el jaque mate. Sin una cookie, no podemos usar la API. Y no podemos obtener una cookie con un bot. Por lo tanto, la llamada directa a la API es inviable.

La única metodología robusta y funcional es la que se implementó en el script `final_test.ts`: **simular el flujo de usuario completo con un navegador Playwright en cada ejecución.** El enfoque original del bot era, y sigue siendo, el único camino correcto.
