
# Herramienta de Depuración Interactiva con Playwright Inspector

Este documento explica cómo usar el script `debug_inspector.ts` para depurar interactivamente el flujo de navegación y encontrar selectores de Playwright.

## Propósito

Cuando los selectores de un script de Playwright fallan o necesitas entender cómo interactuar con una página compleja, este script es la mejor herramienta. Abre un navegador visible y el Inspector de Playwright, permitiéndote realizar acciones manualmente y obtener el código exacto para esas acciones.

## Pasos para Usarlo

1.  **Añadir el Script a `package.json`**

    Abre el archivo `package.json` en la carpeta `worker` y añade la siguiente línea a la sección `"scripts"`:

    ```json
    "debug": "tsx src/debug_inspector.ts"
    ```

2.  **Ejecutar el Script**

    En una terminal, navega a la carpeta `worker` y ejecuta el comando:

    ```sh
    npm run debug
    ```

3.  **Interactuar con el Inspector**

    *   Se abrirá una ventana del navegador y una ventana llamada **"Playwright Inspector"**.
    *   En el Inspector, pulsa el botón **"Record"**.
    *   En el navegador, realiza las acciones que quieres depurar (ej: cerrar un modal, hacer clic en un botón).
    *   El Inspector grabará tus acciones y te mostrará el código exacto.
    *   Copia los selectores o el código que necesites.
    *   Para terminar, cierra la ventana del navegador.

