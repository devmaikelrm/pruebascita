# Informe de Red (HAR)

Origen: `investigation_archive/final_test.har`
Total de entradas: 333

## Endpoints

- Endpoint: GET https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.exteriores.gob.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "priority",
    "value": "u=0, i"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "document"
  },
  {
    "name": "sec-fetch-mode",
    "value": "navigate"
  },
  {
    "name": "sec-fetch-site",
    "value": "none"
  },
  {
    "name": "sec-fetch-user",
    "value": "?1"
  },
  {
    "name": "upgrade-insecure-requests",
    "value": "1"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "age",
    "value": "0"
  },
  {
    "name": "cache-control",
    "value": "private, max-age=0"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-security-policy",
    "value": "frame-ancestors 'self' teams.microsoft.com *.teams.microsoft.com *.skype.com *.teams.microsoft.us local.teams.office.com *.powerapps.com *.yammer.com *.officeapps.live.com *.office.com *.stream.azure-test.net *.microsoftstream.com *.dynamics.com *.microsoft.com onedrive.live.com *.onedrive.live.com;"
  },
  {
    "name": "content-type",
    "value": "text/html; charset=utf-8"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:19 GMT"
  },
  {
    "name": "expires",
    "value": "Wed, 17 Sep 2025 12:24:17 GMT"
  },
  {
    "name": "last-modified",
    "value": "Thu, 02 Oct 2025 12:24:17 GMT"
  },
  {
    "name": "microsoftsharepointteamservices",
    "value": "16.0.0.5513"
  },
  {
    "name": "request-id",
    "value": "e370cba1-8782-20d8-e2ea-670585bb69f5"
  },
  {
    "name": "set-cookie",
    "value": "ApplicationGatewayAffinityCORS=de3d3e74fe6090e3024284440756cd7e; Path=/; SameSite=None; Secure"
  },
  {
    "name": "set-cookie",
    "value": "ApplicationGatewayAffinity=de3d3e74fe6090e3024284440756cd7e; Path=/"
  },
  {
    "name": "spiislatency",
    "value": "67"
  },
  {
    "name": "sprequestduration",
    "value": "1747"
  },
  {
    "name": "sprequestguid",
    "value": "e370cba1-8782-20d8-e2ea-670585bb69f5"
  },
  {
    "name": "tp-cache",
    "value": "miss"
  },
  {
    "name": "vary",
    "value": ", Accept-Encoding"
  },
  {
    "name": "x-aspnet-version",
    "value": "4.0.30319"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-frame-options",
    "value": "SAMEORIGIN"
  },
  {
    "name": "x-ms-invokeapp",
    "value": "1; RequireReadOnly"
  },
  {
    "name": "x-sharepointhealthscore",
    "value": "0"
  }
]
```
  - Response body (trunc):

```json
<!DOCTYPE html><html dir=ltr lang=es-ES><head><meta http-equiv=X-UA-Compatible content="IE=Edge"><meta name=viewport content="width=device-width, initial-scale=1.0"><meta charset=utf-8><meta name=google-site-verification content=euDKNaMjl2_9D647EUohNILOEErAyKX3c_TVLtYQBLE><link rel="shortcut icon" href=/Style%20Library/PC/Img/icons/Favicon.ico type=image/vnd.microsoft.icon id=favicon><title>Servicios consulares</title><script src="/_layouts/15/3082/initstrings.js?rev=VH27cqV0GG4Tm%2FLXObNlKQ%3D%3DTAG0"></script><script src="/_layouts/15/init.js?rev=RHfoRxFuwXZ%2BOo2JABCoHA%3D%3DTAG0"></script><script src="/ScriptResource.axd?d=xoGoRbHr3drhAlZTd7gaHfSwx-PzCURTnV6xtd_tk4Nfr0TxbtgSrkgskMxVvohtIiwFjEnqwQIjtjy0qU87cQ-0A6L-VXL1UJnY7ecG60zi7svunnDQUUmf8g0qKhtnHyKhhWMHFak-J756WI5Yzj_9TdDQNdnT789j3zK262evb6ZHsWHwCihIShVBZwXA0&amp;t=ffffffffc820c398"></script><script src="/_layouts/15/blank.js?rev=nBzPIm07cpYroIjvUHh4jw%3D%3DTAG0"></script><script src="/ScriptResource.axd?d=8Fpt0l5Lc8uwKEWGGysY9dCKZJKkwSg63FuwuL8OALExFdtYnKwiFJQ0cawhd-yUpRM82Oq7uONveA3ZuFwjLhZvU0jMWViM9JUtMoNB3GZEeMsaNQOzJuI1qPTGu-L3DR_UKS1PqaxJt4ZYBmPBr5QNmkB80ZeIHXt9ixPgqnlIXF6SXiSvhtYojUjDG1Ve0&amp;t=ffffffffc820c398"></script><script>RegisterSod("require.js","\u002f_layouts\u002f15\u002frequire.js?rev=4UhLIF\u00252FezOvmGnh\u00252Fs0LLpA\u00253D\u00253DTAG0");</script><script>RegisterSod("strings.js","\u002f_layouts\u002f15\u002f3082\u002fstrings.js?rev=L3YO7EIa1vDmCtORuAnTsQ\u00253D\u00253DTAG0");</script><script>RegisterSod("sp.res.resx","\u002f_layouts\u002f15\u002f3082\u002fsp.res.js?rev=J\u00252BxNHd1ikIXlPBl\u00252FKw\u00252FybQ\u00253D\u00253DTAG0");</script><script>RegisterSod("sp.runtime.js","\u002f_layouts\u002f15\u002fsp.runtime.js?rev=QZuY9EfO812\u00252FHP6vKipQPQ\u00253D\u00253DTAG0");RegisterSodDep("sp.runtime.js","sp.res.resx");</script><script>RegisterSod("sp.js","\u002f_layouts\u002f15\u002fsp.js?rev=IOhwsS2jiKK0lsxWx1LfFA\u00253D\u00253DTAG0");RegisterSodDep("sp.js","sp.runtime.js");RegisterSodDep("sp.js","sp.ui.dialog.js");RegisterSo
... [truncated]
```

- Endpoint: GET https://www.exteriores.gob.es/_layouts/15/3082/initstrings.js?rev=VH27cqV0GG4Tm%2FLXObNlKQ%3D%3DTAG0
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.exteriores.gob.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/_layouts/15/3082/initstrings.js?rev=VH27cqV0GG4Tm%2FLXObNlKQ%3D%3DTAG0"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "ApplicationGatewayAffinityCORS=de3d3e74fe6090e3024284440756cd7e; ApplicationGatewayAffinity=de3d3e74fe6090e3024284440756cd7e"
  },
  {
    "name": "priority",
    "value": "u=1"
  },
  {
    "name": "referer",
    "value": "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-origin"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "age",
    "value": "8556609"
  },
  {
    "name": "cache-control",
    "value": "max-age=86400, s-maxage=2592000"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "7216"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Wed, 25 Jun 2025 11:34:11 GMT"
  },
  {
    "name": "etag",
    "value": "\"0e9b4545463d11:0\""
  },
  {
    "name": "last-modified",
    "value": "Tue, 09 Feb 2016 16:10:02 GMT"
  },
  {
    "name": "microsoftsharepointteamservices",
    "value": "16.0.0.5448"
  },
  {
    "name": "tp-cache",
    "value": "hit"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-ms-invokeapp",
    "value": "1; RequireReadOnly"
  }
]
```
  - Response body (trunc):

```json
var Strings;  if (Strings === undefined) { Strings=new Object(); }Strings.STS=function(){};Strings.STS.L_NewTab="Nueva pestaña";Strings.STS.L_CalloutLastEditedNameAndDate="Modificado por ^1 el ^2";Strings.STS.L_CalloutSourceUrlHeader="Ubicación";Strings.STS.L_SPDiscBestUndo="Quitar mejor respuesta";Strings.STS.L_SPClientManage="administrar";Strings.STS.L_SPAddNewWiki="nueva página wiki";Strings.STS.L_SPCategorySortRecent="Recientes";Strings.STS.L_ViewSelectorTitle="Cambiar de vista";Strings.STS.L_SPDiscNumberOfLikes="A {0} personas les gusta||A {0} persona le gusta||A {0} personas les gusta";Strings.STS.L_Timeline_DfltViewName="Escala de tiempo";Strings.STS.L_TimelineToday="Hoy";Strings.STS.L_SPDiscNoPreviewAvailable="No hay vista previa para esta respuesta";Strings.STS.L_NODOCView="No hay documentos en esta vista.";Strings.STS.L_SPBlogPostAuthorCategories="por {0} en {1}";Strings.STS.L_SPBlogsNoItemsInCategory="No hay entradas en esta categoría.";Strings.STS.L_QRCodeDescription="Escanee este código QR con su teléfono o tableta para abrir {0}";Strings.STS.L_RelativeDateTime_Yesterday="Ayer";Strings.STS.L_SPSelected="Seleccionado";Strings.STS.L_Status_Text=" Estado";Strings.STS.L_SPBlogPostOn="publicada el {0} a las {1}.";Strings.STS.L_FieldType_File_OneNote="Bloc de notas de OneNote";Strings.STS.L_NewDocumentFolderImgAlt="Crear una nueva carpeta";Strings.STS.L_SPDiscSaveChangesButton="Guardar cambios";Strings.STS.L_SPDiscDeleteConfirm="¿Seguro que desea eliminar esta entrada?";Strings.STS.L_BusinessDataField_ActionMenuAltText="Menú de acciones";Strings.STS.L_SPMax="Máximo";Strings.STS.L_GSCallout="Las tareas de inicio están disponibles en cualquier momento en el menú Configuración.";Strings.STS.L_Timeline_BlankTLHelpfulText="Agregar tareas con fechas a la escala de tiempo";Strings.STS.L_UserFieldInlineMore="^1, ^2, ^3 y ^4^5 más^6";Strings.STS.L_SPStdev="Desviación estándar";Strings.STS.L_SPCalloutAction_ellipsis="Más acciones";Strings.STS.L_SPDiscNumberOfRepliesIntervals="0||1||2-";Strings.STS.L_SPDiscLastPostAd
... [truncated]
```

- Endpoint: GET https://www.exteriores.gob.es/_layouts/15/init.js?rev=RHfoRxFuwXZ%2BOo2JABCoHA%3D%3DTAG0
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.exteriores.gob.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/_layouts/15/init.js?rev=RHfoRxFuwXZ%2BOo2JABCoHA%3D%3DTAG0"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "ApplicationGatewayAffinityCORS=de3d3e74fe6090e3024284440756cd7e; ApplicationGatewayAffinity=de3d3e74fe6090e3024284440756cd7e"
  },
  {
    "name": "priority",
    "value": "u=1"
  },
  {
    "name": "referer",
    "value": "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-origin"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "age",
    "value": "6233393"
  },
  {
    "name": "cache-control",
    "value": "max-age=86400, s-maxage=2592000"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "76841"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Tue, 22 Jul 2025 08:54:26 GMT"
  },
  {
    "name": "etag",
    "value": "\"01d239940f9db1:0\""
  },
  {
    "name": "last-modified",
    "value": "Sun, 20 Jul 2025 06:36:18 GMT"
  },
  {
    "name": "microsoftsharepointteamservices",
    "value": "16.0.0.5508"
  },
  {
    "name": "tp-cache",
    "value": "hit"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-ms-invokeapp",
    "value": "1; RequireReadOnly"
  }
]
```
  - Response body (trunc):

```json
function $_global_init(){if("undefined"==typeof g_all_modules)g_all_modules={};g_all_modules["init.js"]={version:{rmj:16,rmm:0,rup:5513,rpr:1001}};if(-1!=navigator.userAgent.indexOf("ProfilerMark")&&"function"==typeof msWriteProfilerMark)spWriteProfilerMark=function(a){window.msWriteProfilerMark(a)};typeof spWriteProfilerMark=="function"&&spWriteProfilerMark("perfMarkBegin_init.js");if(typeof RuntimeErrors=="undefined"){RuntimeErrors={__namespace:true};RuntimeErrors_module_def()}if(typeof Verify=="undefined"){Verify={__namespace:true};Verify_module_def()}if(typeof Define=="undefined"){Define={__namespace:true};Define_module_def()}if(typeof BrowserDetection=="undefined"){BrowserDetection={__namespace:true};BrowserDetection_module_def()}(function(){b.prototype={firefox:undefined,firefox36up:undefined,firefox3up:undefined,firefox4up:undefined,ie:undefined,ie55up:undefined,ie5up:undefined,ie7down:undefined,ie8down:undefined,ie8standard:undefined,ie8standardUp:undefined,ie9down:undefined,ie9standardUp:undefined,ipad:undefined,windowsphone:undefined,chrome:undefined,chrome7up:undefined,chrome8up:undefined,chrome9up:undefined,chrome81up:undefined,iever:undefined,mac:undefined,major:undefined,msTouch:undefined,isTouch:undefined,nav:undefined,nav6:undefined,nav6up:undefined,nav7up:undefined,osver:undefined,safari:undefined,safari125up:undefined,safari3up:undefined,verIEFull:undefined,w3c:undefined,webKit:undefined,win:undefined,win8AppHost:undefined,win32:undefined,win64bit:undefined,winnt:undefined,armProcessor:undefined};a.prototype=b.prototype;a.prototype.ie10standardUp=undefined;a.prototype.ie11=undefined;a.prototype.ie11up=undefined;a.prototype.msEdge=undefined;function a(){var a=navigator.userAgent.toLowerCase(),b;this.osver=1;if(Boolean(a)){var m=a.substring(a.indexOf("windows ")+11);this.osver=parseFloat(m)}this.major=parseInt(navigator.appVersion);this.msEdge=a.indexOf("edge/")!=-1;var f=a.indexOf("msie"),k=a.indexOf("trident");this.ie=f!=-1||k!=-1;var d="0";if(this.ie)if(f!=-1)d=a.substring(f+5);else{var j=a.ind
... [truncated]
```

- Endpoint: GET https://www.exteriores.gob.es/ScriptResource.axd?d=xoGoRbHr3drhAlZTd7gaHfSwx-PzCURTnV6xtd_tk4Nfr0TxbtgSrkgskMxVvohtIiwFjEnqwQIjtjy0qU87cQ-0A6L-VXL1UJnY7ecG60zi7svunnDQUUmf8g0qKhtnHyKhhWMHFak-J756WI5Yzj_9TdDQNdnT789j3zK262evb6ZHsWHwCihIShVBZwXA0&t=ffffffffc820c398
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.exteriores.gob.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/ScriptResource.axd?d=xoGoRbHr3drhAlZTd7gaHfSwx-PzCURTnV6xtd_tk4Nfr0TxbtgSrkgskMxVvohtIiwFjEnqwQIjtjy0qU87cQ-0A6L-VXL1UJnY7ecG60zi7svunnDQUUmf8g0qKhtnHyKhhWMHFak-J756WI5Yzj_9TdDQNdnT789j3zK262evb6ZHsWHwCihIShVBZwXA0&t=ffffffffc820c398"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "ApplicationGatewayAffinityCORS=de3d3e74fe6090e3024284440756cd7e; ApplicationGatewayAffinity=de3d3e74fe6090e3024284440756cd7e"
  },
  {
    "name": "priority",
    "value": "u=1"
  },
  {
    "name": "referer",
    "value": "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-origin"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "age",
    "value": "1022100"
  },
  {
    "name": "cache-control",
    "value": "max-age=86400, s-maxage=2592000"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "25609"
  },
  {
    "name": "content-type",
    "value": "application/x-javascript"
  },
  {
    "name": "date",
    "value": "Sat, 20 Sep 2025 16:29:19 GMT"
  },
  {
    "name": "expires",
    "value": "Sun, 20 Sep 2026 15:07:18 GMT"
  },
  {
    "name": "last-modified",
    "value": "Sat, 20 Sep 2025 15:07:18 GMT"
  },
  {
    "name": "microsoftsharepointteamservices",
    "value": "16.0.0.5513"
  },
  {
    "name": "tp-cache",
    "value": "hit"
  },
  {
    "name": "vary",
    "value": ", Accept-Encoding"
  },
  {
    "name": "x-aspnet-version",
    "value": "4.0.30319"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-ms-invokeapp",
    "value": "1; RequireReadOnly"
  }
]
```
  - Response body (trunc):

```json
//----------------------------------------------------------
// Copyright (C) Microsoft Corporation. All rights reserved.
//----------------------------------------------------------
// MicrosoftAjax.js
Function.__typeName="Function";Function.__class=true;Function.createCallback=function(b,a){return function(){var e=arguments.length;if(e>0){var d=[];for(var c=0;c<e;c++)d[c]=arguments[c];d[e]=a;return b.apply(this,d)}return b.call(this,a)}};Function.createDelegate=function(a,b){return function(){return b.apply(a,arguments)}};Function.emptyFunction=Function.emptyMethod=function(){};Function.validateParameters=function(c,b,a){return Function._validateParams(c,b,a)};Function._validateParams=function(g,e,c){var a,d=e.length;c=c||typeof c==="undefined";a=Function._validateParameterCount(g,e,c);if(a){a.popStackFrame();return a}for(var b=0,i=g.length;b<i;b++){var f=e[Math.min(b,d-1)],h=f.name;if(f.parameterArray)h+="["+(b-d+1)+"]";else if(!c&&b>=d)break;a=Function._validateParameter(g[b],f,h);if(a){a.popStackFrame();return a}}return null};Function._validateParameterCount=function(j,d,i){var a,c,b=d.length,e=j.length;if(e<b){var f=b;for(a=0;a<b;a++){var g=d[a];if(g.optional||g.parameterArray)f--}if(e<f)c=true}else if(i&&e>b){c=true;for(a=0;a<b;a++)if(d[a].parameterArray){c=false;break}}if(c){var h=Error.parameterCount();h.popStackFrame();return h}return null};Function._validateParameter=function(c,a,h){var b,g=a.type,l=!!a.integer,k=!!a.domElement,m=!!a.mayBeNull;b=Function._validateParameterType(c,g,l,k,m,h);if(b){b.popStackFrame();return b}var e=a.elementType,f=!!a.elementMayBeNull;if(g===Array&&typeof c!=="undefined"&&c!==null&&(e||!f)){var j=!!a.elementInteger,i=!!a.elementDomElement;for(var d=0;d<c.length;d++){var n=c[d];b=Function._validateParameterType(n,e,j,i,f,h+"["+d+"]");if(b){b.popStackFrame();return b}}}return null};Function._validateParameterType=function(b,c,k,j,h,d){var a,g;if(typeof b==="undefined")if(h)return null;else{a=Error.argumentUndefined(d);a.popStackFrame();return a}if(b===null)if(h)return nu
... [truncated]
```

- Endpoint: GET https://www.exteriores.gob.es/_layouts/15/blank.js?rev=nBzPIm07cpYroIjvUHh4jw%3D%3DTAG0
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.exteriores.gob.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/_layouts/15/blank.js?rev=nBzPIm07cpYroIjvUHh4jw%3D%3DTAG0"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "ApplicationGatewayAffinityCORS=de3d3e74fe6090e3024284440756cd7e; ApplicationGatewayAffinity=de3d3e74fe6090e3024284440756cd7e"
  },
  {
    "name": "priority",
    "value": "u=1"
  },
  {
    "name": "referer",
    "value": "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-origin"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "age",
    "value": "6233394"
  },
  {
    "name": "cache-control",
    "value": "max-age=86400, s-maxage=2592000"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "383"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Tue, 22 Jul 2025 08:54:26 GMT"
  },
  {
    "name": "etag",
    "value": "\"0f0f19740f9db1:0\""
  },
  {
    "name": "last-modified",
    "value": "Sun, 20 Jul 2025 06:36:16 GMT"
  },
  {
    "name": "microsoftsharepointteamservices",
    "value": "16.0.0.5508"
  },
  {
    "name": "tp-cache",
    "value": "hit"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-ms-invokeapp",
    "value": "1; RequireReadOnly"
  }
]
```
  - Response body (trunc):

```json
function $_global_blank(){if("undefined"==typeof g_all_modules)g_all_modules={};g_all_modules["blank.js"]={version:{rmj:16,rmm:0,rup:5513,rpr:1001}};typeof spWriteProfilerMark=="function"&&spWriteProfilerMark("perfMarkBegin_blank.js");typeof spWriteProfilerMark=="function"&&spWriteProfilerMark("perfMarkEnd_blank.js")}function ULSaew(){var a={};a.ULSTeamName="Microsoft SharePoint Foundation";a.ULSFileName="blank.commentedjs";return a}$_global_blank();
```

- Endpoint: GET https://www.exteriores.gob.es/ScriptResource.axd?d=8Fpt0l5Lc8uwKEWGGysY9dCKZJKkwSg63FuwuL8OALExFdtYnKwiFJQ0cawhd-yUpRM82Oq7uONveA3ZuFwjLhZvU0jMWViM9JUtMoNB3GZEeMsaNQOzJuI1qPTGu-L3DR_UKS1PqaxJt4ZYBmPBr5QNmkB80ZeIHXt9ixPgqnlIXF6SXiSvhtYojUjDG1Ve0&t=ffffffffc820c398
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.exteriores.gob.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/ScriptResource.axd?d=8Fpt0l5Lc8uwKEWGGysY9dCKZJKkwSg63FuwuL8OALExFdtYnKwiFJQ0cawhd-yUpRM82Oq7uONveA3ZuFwjLhZvU0jMWViM9JUtMoNB3GZEeMsaNQOzJuI1qPTGu-L3DR_UKS1PqaxJt4ZYBmPBr5QNmkB80ZeIHXt9ixPgqnlIXF6SXiSvhtYojUjDG1Ve0&t=ffffffffc820c398"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "ApplicationGatewayAffinityCORS=de3d3e74fe6090e3024284440756cd7e; ApplicationGatewayAffinity=de3d3e74fe6090e3024284440756cd7e"
  },
  {
    "name": "priority",
    "value": "u=1"
  },
  {
    "name": "referer",
    "value": "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-origin"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "age",
    "value": "1022100"
  },
  {
    "name": "cache-control",
    "value": "max-age=86400, s-maxage=2592000"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "9984"
  },
  {
    "name": "content-type",
    "value": "application/x-javascript"
  },
  {
    "name": "date",
    "value": "Sat, 20 Sep 2025 16:29:19 GMT"
  },
  {
    "name": "expires",
    "value": "Sun, 20 Sep 2026 15:07:17 GMT"
  },
  {
    "name": "last-modified",
    "value": "Sat, 20 Sep 2025 15:07:17 GMT"
  },
  {
    "name": "microsoftsharepointteamservices",
    "value": "16.0.0.5513"
  },
  {
    "name": "tp-cache",
    "value": "hit"
  },
  {
    "name": "vary",
    "value": ", Accept-Encoding"
  },
  {
    "name": "x-aspnet-version",
    "value": "4.0.30319"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-ms-invokeapp",
    "value": "1; RequireReadOnly"
  }
]
```
  - Response body (trunc):

```json
//----------------------------------------------------------
// Copyright (C) Microsoft Corporation. All rights reserved.
//----------------------------------------------------------
// MicrosoftAjaxWebForms.js
Type._registerScript("MicrosoftAjaxWebForms.js",["MicrosoftAjaxCore.js","MicrosoftAjaxSerialization.js","MicrosoftAjaxNetwork.js","MicrosoftAjaxComponentModel.js"]);Type.registerNamespace("Sys.WebForms");Sys.WebForms.BeginRequestEventArgs=function(c,b,a){Sys.WebForms.BeginRequestEventArgs.initializeBase(this);this._request=c;this._postBackElement=b;this._updatePanelsToUpdate=a};Sys.WebForms.BeginRequestEventArgs.prototype={get_postBackElement:function(){return this._postBackElement},get_request:function(){return this._request},get_updatePanelsToUpdate:function(){return this._updatePanelsToUpdate?Array.clone(this._updatePanelsToUpdate):[]}};Sys.WebForms.BeginRequestEventArgs.registerClass("Sys.WebForms.BeginRequestEventArgs",Sys.EventArgs);Sys.WebForms.EndRequestEventArgs=function(c,a,b){Sys.WebForms.EndRequestEventArgs.initializeBase(this);this._errorHandled=false;this._error=c;this._dataItems=a||{};this._response=b};Sys.WebForms.EndRequestEventArgs.prototype={get_dataItems:function(){return this._dataItems},get_error:function(){return this._error},get_errorHandled:function(){return this._errorHandled},set_errorHandled:function(a){this._errorHandled=a},get_response:function(){return this._response}};Sys.WebForms.EndRequestEventArgs.registerClass("Sys.WebForms.EndRequestEventArgs",Sys.EventArgs);Sys.WebForms.InitializeRequestEventArgs=function(c,b,a){Sys.WebForms.InitializeRequestEventArgs.initializeBase(this);this._request=c;this._postBackElement=b;this._updatePanelsToUpdate=a};Sys.WebForms.InitializeRequestEventArgs.prototype={get_postBackElement:function(){return this._postBackElement},get_request:function(){return this._request},get_updatePanelsToUpdate:function(){return this._updatePanelsToUpdate?Array.clone(this._updatePanelsToUpdate):[]},set_updatePanelsToUpdate:function(a){this._updated=true;thi
... [truncated]
```

- Endpoint: GET https://www.exteriores.gob.es/Style%20Library/PC/Script/jquery-ui-1.12.1/jquery-ui.min.css
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.exteriores.gob.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/Style%20Library/PC/Script/jquery-ui-1.12.1/jquery-ui.min.css"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "text/css,*/*;q=0.1"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "ApplicationGatewayAffinityCORS=de3d3e74fe6090e3024284440756cd7e; ApplicationGatewayAffinity=de3d3e74fe6090e3024284440756cd7e"
  },
  {
    "name": "priority",
    "value": "u=0"
  },
  {
    "name": "referer",
    "value": "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "style"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-origin"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "age",
    "value": "8556609"
  },
  {
    "name": "cache-control",
    "value": "max-age=86400, s-maxage=2592000"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "9862"
  },
  {
    "name": "content-security-policy",
    "value": "frame-ancestors 'self' teams.microsoft.com *.teams.microsoft.com *.skype.com *.teams.microsoft.us local.teams.office.com *.powerapps.com *.yammer.com *.officeapps.live.com *.office.com *.stream.azure-test.net *.microsoftstream.com *.dynamics.com *.microsoft.com onedrive.live.com *.onedrive.live.com;"
  },
  {
    "name": "content-type",
    "value": "text/css"
  },
  {
    "name": "date",
    "value": "Wed, 25 Jun 2025 11:34:11 GMT"
  },
  {
    "name": "etag",
    "value": "\"{4A20CCC4-D3EB-49EB-BCCD-BAA58CBCA373},4pub\""
  },
  {
    "name": "last-modified",
    "value": "Mon, 06 Jun 2022 07:13:05 GMT"
  },
  {
    "name": "microsoftsharepointteamservices",
    "value": "16.0.0.5448"
  },
  {
    "name": "request-id",
    "value": "ac90aba1-6734-20d8-e2ea-6ac010e95fd9"
  },
  {
    "name": "sprequestguid",
    "value": "ac90aba1-6734-20d8-e2ea-6ac010e95fd9"
  },
  {
    "name": "tp-cache",
    "value": "hit"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding"
  },
  {
    "name": "x-aspnet-version",
    "value": "4.0.30319"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-frame-options",
    "value": "SAMEORIGIN"
  },
  {
    "name": "x-ms-invokeapp",
    "value": "1; RequireReadOnly"
  }
]
```
  - Response body (trunc):

```json
/*! jQuery UI - v1.13.1 - 2022-01-20
* http://jqueryui.com
* Includes: core.css, accordion.css, autocomplete.css, menu.css, button.css, controlgroup.css, checkboxradio.css, datepicker.css, dialog.css, draggable.css, resizable.css, progressbar.css, selectable.css, selectmenu.css, slider.css, sortable.css, spinner.css, tabs.css, tooltip.css, theme.css
* To view and modify this theme, visit http://jqueryui.com/themeroller/?bgShadowXPos=&bgOverlayXPos=&bgErrorXPos=&bgHighlightXPos=&bgContentXPos=&bgHeaderXPos=&bgActiveXPos=&bgHoverXPos=&bgDefaultXPos=&bgShadowYPos=&bgOverlayYPos=&bgErrorYPos=&bgHighlightYPos=&bgContentYPos=&bgHeaderYPos=&bgActiveYPos=&bgHoverYPos=&bgDefaultYPos=&bgShadowRepeat=&bgOverlayRepeat=&bgErrorRepeat=&bgHighlightRepeat=&bgContentRepeat=&bgHeaderRepeat=&bgActiveRepeat=&bgHoverRepeat=&bgDefaultRepeat=&iconsHover=url(%22images%2Fui-icons_555555_256x240.png%22)&iconsHighlight=url(%22images%2Fui-icons_777620_256x240.png%22)&iconsHeader=url(%22images%2Fui-icons_444444_256x240.png%22)&iconsError=url(%22images%2Fui-icons_cc0000_256x240.png%22)&iconsDefault=url(%22images%2Fui-icons_777777_256x240.png%22)&iconsContent=url(%22images%2Fui-icons_444444_256x240.png%22)&iconsActive=url(%22images%2Fui-icons_ffffff_256x240.png%22)&bgImgUrlShadow=&bgImgUrlOverlay=&bgImgUrlHover=&bgImgUrlHighlight=&bgImgUrlHeader=&bgImgUrlError=&bgImgUrlDefault=&bgImgUrlContent=&bgImgUrlActive=&opacityFilterShadow=Alpha(Opacity%3D30)&opacityFilterOverlay=Alpha(Opacity%3D30)&opacityShadowPerc=30&opacityOverlayPerc=30&iconColorHover=%23555555&iconColorHighlight=%23777620&iconColorHeader=%23444444&iconColorError=%23cc0000&iconColorDefault=%23777777&iconColorContent=%23444444&iconColorActive=%23ffffff&bgImgOpacityShadow=0&bgImgOpacityOverlay=0&bgImgOpacityError=95&bgImgOpacityHighlight=55&bgImgOpacityContent=75&bgImgOpacityHeader=75&bgImgOpacityActive=65&bgImgOpacityHover=75&bgImgOpacityDefault=75&bgTextureShadow=flat&bgTextureOverlay=flat&bgTextureError=flat&bgTextureHighlight=flat&bgTextureContent=flat&bgTextureHeader=flat&bgText
... [truncated]
```

- Endpoint: GET https://www.exteriores.gob.es/Style%20Library/PC/Script/owl-carousel-2.3.4/owl.carousel.min.css
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.exteriores.gob.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/Style%20Library/PC/Script/owl-carousel-2.3.4/owl.carousel.min.css"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "text/css,*/*;q=0.1"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "ApplicationGatewayAffinityCORS=de3d3e74fe6090e3024284440756cd7e; ApplicationGatewayAffinity=de3d3e74fe6090e3024284440756cd7e"
  },
  {
    "name": "priority",
    "value": "u=0"
  },
  {
    "name": "referer",
    "value": "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "style"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-origin"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "age",
    "value": "8556609"
  },
  {
    "name": "cache-control",
    "value": "max-age=86400, s-maxage=2592000"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "1310"
  },
  {
    "name": "content-security-policy",
    "value": "frame-ancestors 'self' teams.microsoft.com *.teams.microsoft.com *.skype.com *.teams.microsoft.us local.teams.office.com *.powerapps.com *.yammer.com *.officeapps.live.com *.office.com *.stream.azure-test.net *.microsoftstream.com *.dynamics.com *.microsoft.com onedrive.live.com *.onedrive.live.com;"
  },
  {
    "name": "content-type",
    "value": "text/css"
  },
  {
    "name": "date",
    "value": "Wed, 25 Jun 2025 11:34:11 GMT"
  },
  {
    "name": "etag",
    "value": "\"{39CE6D32-7CB6-4C5E-90EF-A74E9D03C2E8},2pub\""
  },
  {
    "name": "last-modified",
    "value": "Wed, 01 Jul 2020 13:11:16 GMT"
  },
  {
    "name": "microsoftsharepointteamservices",
    "value": "16.0.0.5448"
  },
  {
    "name": "request-id",
    "value": "ac90aba1-6734-20d8-e2ea-621c00818339"
  },
  {
    "name": "sprequestguid",
    "value": "ac90aba1-6734-20d8-e2ea-621c00818339"
  },
  {
    "name": "tp-cache",
    "value": "hit"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding"
  },
  {
    "name": "x-aspnet-version",
    "value": "4.0.30319"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-frame-options",
    "value": "SAMEORIGIN"
  },
  {
    "name": "x-ms-invokeapp",
    "value": "1; RequireReadOnly"
  }
]
```
  - Response body (trunc):

```json
/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
.owl-carousel,.owl-carousel .owl-item{-webkit-tap-highlight-color:transparent;position:relative}.owl-carousel{display:none;width:100%;z-index:1}.owl-carousel .owl-stage{position:relative;-ms-touch-action:pan-Y;touch-action:manipulation;-moz-backface-visibility:hidden}.owl-carousel .owl-stage:after{content:".";display:block;clear:both;visibility:hidden;line-height:0;height:0}.owl-carousel .owl-stage-outer{position:relative;overflow:hidden;-webkit-transform:translate3d(0,0,0)}.owl-carousel .owl-item,.owl-carousel .owl-wrapper{-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;-ms-backface-visibility:hidden;-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0)}.owl-carousel .owl-item{min-height:1px;float:left;-webkit-backface-visibility:hidden;-webkit-touch-callout:none}.owl-carousel .owl-item img{display:block;width:100%}.owl-carousel .owl-dots.disabled,.owl-carousel .owl-nav.disabled{display:none}.no-js .owl-carousel,.owl-carousel.owl-loaded{display:block}.owl-carousel .owl-dot,.owl-carousel .owl-nav .owl-next,.owl-carousel .owl-nav .owl-prev{cursor:pointer;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.owl-carousel .owl-nav button.owl-next,.owl-carousel .owl-nav button.owl-prev,.owl-carousel button.owl-dot{background:0 0;color:inherit;border:none;padding:0!important;font:inherit}.owl-carousel.owl-loading{opacity:0;display:block}.owl-carousel.owl-hidden{opacity:0}.owl-carousel.owl-refresh .owl-item{visibility:hidden}.owl-carousel.owl-drag .owl-item{-ms-touch-action:pan-y;touch-action:pan-y;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.owl-carousel.owl-grab{cursor:move;cursor:grab}.owl-carousel.owl-rtl{direction:rtl}.owl-carousel.owl-rtl .owl-item{float:right}.owl-carousel .animat
... [truncated]
```

- Endpoint: GET https://www.exteriores.gob.es/Style%20Library/PC/Script/owl-carousel-2.3.4/owl.theme.default.min.css
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.exteriores.gob.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/Style%20Library/PC/Script/owl-carousel-2.3.4/owl.theme.default.min.css"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "text/css,*/*;q=0.1"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "ApplicationGatewayAffinityCORS=de3d3e74fe6090e3024284440756cd7e; ApplicationGatewayAffinity=de3d3e74fe6090e3024284440756cd7e"
  },
  {
    "name": "priority",
    "value": "u=0"
  },
  {
    "name": "referer",
    "value": "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "style"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-origin"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "age",
    "value": "8556609"
  },
  {
    "name": "cache-control",
    "value": "max-age=86400, s-maxage=2592000"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "620"
  },
  {
    "name": "content-security-policy",
    "value": "frame-ancestors 'self' teams.microsoft.com *.teams.microsoft.com *.skype.com *.teams.microsoft.us local.teams.office.com *.powerapps.com *.yammer.com *.officeapps.live.com *.office.com *.stream.azure-test.net *.microsoftstream.com *.dynamics.com *.microsoft.com onedrive.live.com *.onedrive.live.com;"
  },
  {
    "name": "content-type",
    "value": "text/css"
  },
  {
    "name": "date",
    "value": "Wed, 25 Jun 2025 11:34:11 GMT"
  },
  {
    "name": "etag",
    "value": "\"{5F20A2C5-7141-4DCA-8619-334D7C5B3FA7},2pub\""
  },
  {
    "name": "last-modified",
    "value": "Wed, 01 Jul 2020 13:11:17 GMT"
  },
  {
    "name": "microsoftsharepointteamservices",
    "value": "16.0.0.5448"
  },
  {
    "name": "request-id",
    "value": "ac90aba1-1734-20d8-e2ea-6550fb18867b"
  },
  {
    "name": "sprequestguid",
    "value": "ac90aba1-1734-20d8-e2ea-6550fb18867b"
  },
  {
    "name": "tp-cache",
    "value": "hit"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding"
  },
  {
    "name": "x-aspnet-version",
    "value": "4.0.30319"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-frame-options",
    "value": "SAMEORIGIN"
  },
  {
    "name": "x-ms-invokeapp",
    "value": "1; RequireReadOnly"
  }
]
```
  - Response body (trunc):

```json
/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
.owl-theme .owl-dots,.owl-theme .owl-nav{text-align:center;-webkit-tap-highlight-color:transparent}.owl-theme .owl-nav{margin-top:10px}.owl-theme .owl-nav [class*=owl-]{color:#FFF;font-size:14px;margin:5px;padding:4px 7px;background:#D6D6D6;display:inline-block;cursor:pointer;border-radius:3px}.owl-theme .owl-nav [class*=owl-]:hover{background:#869791;color:#FFF;text-decoration:none}.owl-theme .owl-nav .disabled{opacity:.5;cursor:default}.owl-theme .owl-nav.disabled+.owl-dots{margin-top:10px}.owl-theme .owl-dots .owl-dot{display:inline-block;zoom:1}.owl-theme .owl-dots .owl-dot span{width:10px;height:10px;margin:5px 7px;background:#D6D6D6;display:block;-webkit-backface-visibility:visible;transition:opacity .2s ease;border-radius:30px}.owl-theme .owl-dots .owl-dot.active span,.owl-theme .owl-dots .owl-dot:hover span{background:#869791}
```

- Endpoint: GET https://www.exteriores.gob.es/Style%20Library/PC/css/bootstrap-grid-4.3.1/bootstrap-grid.min.css
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.exteriores.gob.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/Style%20Library/PC/css/bootstrap-grid-4.3.1/bootstrap-grid.min.css"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "text/css,*/*;q=0.1"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "ApplicationGatewayAffinityCORS=de3d3e74fe6090e3024284440756cd7e; ApplicationGatewayAffinity=de3d3e74fe6090e3024284440756cd7e"
  },
  {
    "name": "priority",
    "value": "u=0"
  },
  {
    "name": "referer",
    "value": "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "style"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-origin"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "age",
    "value": "8556609"
  },
  {
    "name": "cache-control",
    "value": "max-age=86400, s-maxage=2592000"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "10620"
  },
  {
    "name": "content-security-policy",
    "value": "frame-ancestors 'self' teams.microsoft.com *.teams.microsoft.com *.skype.com *.teams.microsoft.us local.teams.office.com *.powerapps.com *.yammer.com *.officeapps.live.com *.office.com *.stream.azure-test.net *.microsoftstream.com *.dynamics.com *.microsoft.com onedrive.live.com *.onedrive.live.com;"
  },
  {
    "name": "content-type",
    "value": "text/css"
  },
  {
    "name": "date",
    "value": "Wed, 25 Jun 2025 11:34:11 GMT"
  },
  {
    "name": "etag",
    "value": "\"{5E34610F-33DD-432C-B5B0-A3FE6207E87E},2pub\""
  },
  {
    "name": "last-modified",
    "value": "Wed, 01 Jul 2020 13:11:03 GMT"
  },
  {
    "name": "microsoftsharepointteamservices",
    "value": "16.0.0.5448"
  },
  {
    "name": "request-id",
    "value": "ac90aba1-6734-20d8-e2ea-6fc4bcb1e072"
  },
  {
    "name": "sprequestguid",
    "value": "ac90aba1-6734-20d8-e2ea-6fc4bcb1e072"
  },
  {
    "name": "tp-cache",
    "value": "hit"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding"
  },
  {
    "name": "x-aspnet-version",
    "value": "4.0.30319"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-frame-options",
    "value": "SAMEORIGIN"
  },
  {
    "name": "x-ms-invokeapp",
    "value": "1; RequireReadOnly"
  }
]
```
  - Response body (trunc):

```json
/*!
 * Bootstrap Grid v4.3.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 The Bootstrap Authors
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */html{box-sizing:border-box;-ms-overflow-style:scrollbar}*,::after,::before{box-sizing:inherit}.container{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width:576px){.container{max-width:540px}}@media (min-width:768px){.container{max-width:720px}}@media (min-width:992px){.container{max-width:960px}}@media (min-width:1200px){.container{max-width:1140px}}.container-fluid{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}.row{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}.no-gutters{margin-right:0;margin-left:0}.no-gutters>.col,.no-gutters>[class*=col-]{padding-right:0;padding-left:0}.col,.col-1,.col-10,.col-11,.col-12,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-auto,.col-lg,.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-auto,.col-md,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-auto,.col-sm,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-auto,.col-xl,.col-xl-1,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-auto{position:relative;width:100%;padding-right:15px;padding-left:15px}.col{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-auto{-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:100%}.col-1{-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.col-2{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-3{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.c
... [truncated]
```

- Endpoint: GET https://www.exteriores.gob.es/Style%20Library/PC/css/fontawesome-6.5.2/css/all.min.css
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.exteriores.gob.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/Style%20Library/PC/css/fontawesome-6.5.2/css/all.min.css"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "text/css,*/*;q=0.1"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "ApplicationGatewayAffinityCORS=de3d3e74fe6090e3024284440756cd7e; ApplicationGatewayAffinity=de3d3e74fe6090e3024284440756cd7e"
  },
  {
    "name": "priority",
    "value": "u=0"
  },
  {
    "name": "referer",
    "value": "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "style"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-origin"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "age",
    "value": "8556608"
  },
  {
    "name": "cache-control",
    "value": "max-age=86400, s-maxage=2592000"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "30211"
  },
  {
    "name": "content-security-policy",
    "value": "frame-ancestors 'self' teams.microsoft.com *.teams.microsoft.com *.skype.com *.teams.microsoft.us local.teams.office.com *.powerapps.com *.yammer.com *.officeapps.live.com *.office.com *.stream.azure-test.net *.microsoftstream.com *.dynamics.com *.microsoft.com onedrive.live.com *.onedrive.live.com;"
  },
  {
    "name": "content-type",
    "value": "text/css"
  },
  {
    "name": "date",
    "value": "Wed, 25 Jun 2025 11:34:11 GMT"
  },
  {
    "name": "etag",
    "value": "\"{701BB402-A3C4-44AD-89CB-798A51E26306},2pub\""
  },
  {
    "name": "last-modified",
    "value": "Tue, 30 Apr 2024 12:13:46 GMT"
  },
  {
    "name": "microsoftsharepointteamservices",
    "value": "16.0.0.5448"
  },
  {
    "name": "request-id",
    "value": "ac90aba1-6734-20d8-e2ea-6e9f3d5566c8"
  },
  {
    "name": "sprequestguid",
    "value": "ac90aba1-6734-20d8-e2ea-6e9f3d5566c8"
  },
  {
    "name": "tp-cache",
    "value": "hit"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding"
  },
  {
    "name": "x-aspnet-version",
    "value": "4.0.30319"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-frame-options",
    "value": "SAMEORIGIN"
  },
  {
    "name": "x-ms-invokeapp",
    "value": "1; RequireReadOnly"
  }
]
```
  - Response body (trunc):

```json
/*!
 * Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
.fa{font-family:var(--fa-style-family,"Font Awesome 6 Free");font-weight:var(--fa-style,900)}.fa,.fa-brands,.fa-classic,.fa-regular,.fa-sharp,.fa-solid,.fab,.far,.fas{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:var(--fa-display,inline-block);font-style:normal;font-variant:normal;line-height:1;text-rendering:auto}.fa-classic,.fa-regular,.fa-solid,.far,.fas{font-family:"Font Awesome 6 Free"}.fa-brands,.fab{font-family:"Font Awesome 6 Brands"}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-2xs{font-size:.625em;line-height:.1em;vertical-align:.225em}.fa-xs{font-size:.75em;line-height:.08333em;vertical-align:.125em}.fa-sm{font-size:.875em;line-height:.07143em;vertical-align:.05357em}.fa-lg{font-size:1.25em;line-height:.05em;vertical-align:-.075em}.fa-xl{font-size:1.5em;line-height:.04167em;vertical-align:-.125em}.fa-2xl{font-size:2em;line-height:.03125em;vertical-align:-.1875em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:var(--fa-li-margin,2.5em);padding-left:0}.fa-ul>li{position:relative}.fa-li{left:calc(var(--fa-li-width, 2em)*-1);position:absolute;text-align:center;width:var(--fa-li-width,2em);line-height:inherit}.fa-border{border-radius:var(--fa-border-radius,.1em);border:var(--fa-border-width,.08em) var(--fa-border-style,solid) var(--fa-border-color,#eee);padding:var(--fa-border-padding,.2em .25em .15em)}.fa-pull-left{float:left;margin-right:var(--fa-pull-margin,.3em)}.fa-pull-right{float:right;margin-left:var(--fa-pull-margin,.3em)}.fa-beat{-webkit-animation-name:fa-beat;animation-name:fa-beat;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(-
... [truncated]
```

- Endpoint: GET https://www.exteriores.gob.es/Style%20Library/PC/css/fontawesome-6.5.2/css/fontawesome.min.css
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.exteriores.gob.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/Style%20Library/PC/css/fontawesome-6.5.2/css/fontawesome.min.css"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "text/css,*/*;q=0.1"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "ApplicationGatewayAffinityCORS=de3d3e74fe6090e3024284440756cd7e; ApplicationGatewayAffinity=de3d3e74fe6090e3024284440756cd7e"
  },
  {
    "name": "priority",
    "value": "u=0"
  },
  {
    "name": "referer",
    "value": "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "style"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-origin"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "age",
    "value": "8556608"
  },
  {
    "name": "cache-control",
    "value": "max-age=86400, s-maxage=2592000"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "23607"
  },
  {
    "name": "content-security-policy",
    "value": "frame-ancestors 'self' teams.microsoft.com *.teams.microsoft.com *.skype.com *.teams.microsoft.us local.teams.office.com *.powerapps.com *.yammer.com *.officeapps.live.com *.office.com *.stream.azure-test.net *.microsoftstream.com *.dynamics.com *.microsoft.com onedrive.live.com *.onedrive.live.com;"
  },
  {
    "name": "content-type",
    "value": "text/css"
  },
  {
    "name": "date",
    "value": "Wed, 25 Jun 2025 11:34:11 GMT"
  },
  {
    "name": "etag",
    "value": "\"{1799FA71-1A78-4B70-8268-9B0A4568689D},4pub\""
  },
  {
    "name": "last-modified",
    "value": "Tue, 30 Apr 2024 11:41:07 GMT"
  },
  {
    "name": "microsoftsharepointteamservices",
    "value": "16.0.0.5448"
  },
  {
    "name": "request-id",
    "value": "ac90aba1-6734-20d8-e2ea-66909aeb2646"
  },
  {
    "name": "sprequestguid",
    "value": "ac90aba1-6734-20d8-e2ea-66909aeb2646"
  },
  {
    "name": "tp-cache",
    "value": "hit"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding"
  },
  {
    "name": "x-aspnet-version",
    "value": "4.0.30319"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-frame-options",
    "value": "SAMEORIGIN"
  },
  {
    "name": "x-ms-invokeapp",
    "value": "1; RequireReadOnly"
  }
]
```
  - Response body (trunc):

```json
/*!
 * Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
.fa{font-family:var(--fa-style-family,"Font Awesome 6 Free");font-weight:var(--fa-style,900)}.fa,.fa-brands,.fa-classic,.fa-regular,.fa-sharp,.fa-solid,.fab,.far,.fas{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:var(--fa-display,inline-block);font-style:normal;font-variant:normal;line-height:1;text-rendering:auto}.fa-classic,.fa-regular,.fa-solid,.far,.fas{font-family:"Font Awesome 6 Free"}.fa-brands,.fab{font-family:"Font Awesome 6 Brands"}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-2xs{font-size:.625em;line-height:.1em;vertical-align:.225em}.fa-xs{font-size:.75em;line-height:.08333em;vertical-align:.125em}.fa-sm{font-size:.875em;line-height:.07143em;vertical-align:.05357em}.fa-lg{font-size:1.25em;line-height:.05em;vertical-align:-.075em}.fa-xl{font-size:1.5em;line-height:.04167em;vertical-align:-.125em}.fa-2xl{font-size:2em;line-height:.03125em;vertical-align:-.1875em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:var(--fa-li-margin,2.5em);padding-left:0}.fa-ul>li{position:relative}.fa-li{left:calc(var(--fa-li-width, 2em)*-1);position:absolute;text-align:center;width:var(--fa-li-width,2em);line-height:inherit}.fa-border{border-radius:var(--fa-border-radius,.1em);border:var(--fa-border-width,.08em) var(--fa-border-style,solid) var(--fa-border-color,#eee);padding:var(--fa-border-padding,.2em .25em .15em)}.fa-pull-left{float:left;margin-right:var(--fa-pull-margin,.3em)}.fa-pull-right{float:right;margin-left:var(--fa-pull-margin,.3em)}.fa-beat{-webkit-animation-name:fa-beat;animation-name:fa-beat;-webkit-animation-delay:var(--fa-animation-delay,0s);animation-delay:var(-
... [truncated]
```

- Endpoint: GET https://www.exteriores.gob.es/Style%20Library/PC/Script/ol-map/ol.css
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.exteriores.gob.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/Style%20Library/PC/Script/ol-map/ol.css"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "text/css,*/*;q=0.1"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "ApplicationGatewayAffinityCORS=de3d3e74fe6090e3024284440756cd7e; ApplicationGatewayAffinity=de3d3e74fe6090e3024284440756cd7e"
  },
  {
    "name": "priority",
    "value": "u=0"
  },
  {
    "name": "referer",
    "value": "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "style"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-origin"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "age",
    "value": "8556609"
  },
  {
    "name": "cache-control",
    "value": "max-age=86400, s-maxage=2592000"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "1867"
  },
  {
    "name": "content-security-policy",
    "value": "frame-ancestors 'self' teams.microsoft.com *.teams.microsoft.com *.skype.com *.teams.microsoft.us local.teams.office.com *.powerapps.com *.yammer.com *.officeapps.live.com *.office.com *.stream.azure-test.net *.microsoftstream.com *.dynamics.com *.microsoft.com onedrive.live.com *.onedrive.live.com;"
  },
  {
    "name": "content-type",
    "value": "text/css"
  },
  {
    "name": "date",
    "value": "Wed, 25 Jun 2025 11:34:11 GMT"
  },
  {
    "name": "etag",
    "value": "\"{8BFF4A49-61D3-41EE-A083-625110F6F1F4},8pub\""
  },
  {
    "name": "last-modified",
    "value": "Tue, 31 Oct 2023 11:41:08 GMT"
  },
  {
    "name": "microsoftsharepointteamservices",
    "value": "16.0.0.5448"
  },
  {
    "name": "request-id",
    "value": "ac90aba1-6734-20d8-e2ea-6823055ddf8d"
  },
  {
    "name": "sprequestguid",
    "value": "ac90aba1-6734-20d8-e2ea-6823055ddf8d"
  },
  {
    "name": "tp-cache",
    "value": "hit"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding"
  },
  {
    "name": "x-aspnet-version",
    "value": "4.0.30319"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-frame-options",
    "value": "SAMEORIGIN"
  },
  {
    "name": "x-ms-invokeapp",
    "value": "1; RequireReadOnly"
  }
]
```
  - Response body (trunc):

```json
:root,
:host {
  --ol-background-color: white;
  --ol-accent-background-color: #F5F5F5;
  --ol-subtle-background-color: rgba(128, 128, 128, 0.25);
  --ol-partial-background-color: rgba(255, 255, 255, 0.75);
  --ol-foreground-color: #333333;
  --ol-subtle-foreground-color: #666666;
  --ol-brand-color: #00AAFF;
}

.ol-box {
  box-sizing: border-box;
  border-radius: 2px;
  border: 1.5px solid var(--ol-background-color);
  background-color: var(--ol-partial-background-color);
}

.ol-mouse-position {
  top: 8px;
  right: 8px;
  position: absolute;
}

.ol-scale-line {
  background: var(--ol-partial-background-color);
  border-radius: 4px;
  bottom: 8px;
  left: 8px;
  padding: 2px;
  position: absolute;
}

.ol-scale-line-inner {
  border: 1px solid var(--ol-subtle-foreground-color);
  border-top: none;
  color: var(--ol-foreground-color);
  font-size: 10px;
  text-align: center;
  margin: 1px;
  will-change: contents, width;
  transition: all 0.25s;
}

.ol-scale-bar {
  position: absolute;
  bottom: 8px;
  left: 8px;
}

.ol-scale-bar-inner {
  display: flex;
}

.ol-scale-step-marker {
  width: 1px;
  height: 15px;
  background-color: var(--ol-foreground-color);
  float: right;
  z-index: 10;
}

.ol-scale-step-text {
  position: absolute;
  bottom: -5px;
  font-size: 10px;
  z-index: 11;
  color: var(--ol-foreground-color);
  text-shadow: -1.5px 0 var(--ol-partial-background-color), 0 1.5px var(--ol-partial-background-color), 1.5px 0 var(--ol-partial-background-color), 0 -1.5px var(--ol-partial-background-color);
}

.ol-scale-text {
  position: absolute;
  font-size: 12px;
  text-align: center;
  bottom: 25px;
  color: var(--ol-foreground-color);
  text-shadow: -1.5px 0 var(--ol-partial-background-color), 0 1.5px var(--ol-partial-background-color), 1.5px 0 var(--ol-partial-background-color), 0 -1.5px var(--ol-partial-background-color);
}

.ol-scale-singlebar {
  position: relative;
  height: 10px;
  z-index: 9;
  box-sizing: border-box;
  border: 1px solid var(--ol-foreground-color);
}

.ol-scale-singlebar-even {
  bac
... [truncated]
```

- Endpoint: GET https://www.exteriores.gob.es/Style%20Library/PC/Script/ol-map/ol-popup.css
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.exteriores.gob.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/Style%20Library/PC/Script/ol-map/ol-popup.css"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "text/css,*/*;q=0.1"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "ApplicationGatewayAffinityCORS=de3d3e74fe6090e3024284440756cd7e; ApplicationGatewayAffinity=de3d3e74fe6090e3024284440756cd7e"
  },
  {
    "name": "priority",
    "value": "u=0"
  },
  {
    "name": "referer",
    "value": "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "style"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-origin"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "age",
    "value": "8556609"
  },
  {
    "name": "cache-control",
    "value": "max-age=86400, s-maxage=2592000"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "596"
  },
  {
    "name": "content-security-policy",
    "value": "frame-ancestors 'self' teams.microsoft.com *.teams.microsoft.com *.skype.com *.teams.microsoft.us local.teams.office.com *.powerapps.com *.yammer.com *.officeapps.live.com *.office.com *.stream.azure-test.net *.microsoftstream.com *.dynamics.com *.microsoft.com onedrive.live.com *.onedrive.live.com;"
  },
  {
    "name": "content-type",
    "value": "text/css"
  },
  {
    "name": "date",
    "value": "Wed, 25 Jun 2025 11:34:11 GMT"
  },
  {
    "name": "etag",
    "value": "\"{38E52ED5-D507-4047-B72E-3C9D2DFABE78},2pub\""
  },
  {
    "name": "last-modified",
    "value": "Wed, 01 Jul 2020 13:11:49 GMT"
  },
  {
    "name": "microsoftsharepointteamservices",
    "value": "16.0.0.5448"
  },
  {
    "name": "request-id",
    "value": "ac90aba1-6734-20d8-e2ea-69e391c9ed51"
  },
  {
    "name": "sprequestguid",
    "value": "ac90aba1-6734-20d8-e2ea-69e391c9ed51"
  },
  {
    "name": "tp-cache",
    "value": "hit"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding"
  },
  {
    "name": "x-aspnet-version",
    "value": "4.0.30319"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-frame-options",
    "value": "SAMEORIGIN"
  },
  {
    "name": "x-ms-invokeapp",
    "value": "1; RequireReadOnly"
  }
]
```
  - Response body (trunc):

```json
.ol-popup {
    display: none;
    position: absolute;
    background-color: white;
    padding: 15px 25px 15px 15px;
    border: 1px solid #cccccc;
    bottom: 12px;
    left: -50px;
    border-radius: 10px;
}

.ol-popup:after, .ol-popup:before {
    top: 100%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
}

.ol-popup:after {
    border-top-color: white;
    border-width: 10px;
    left: 48px;
    margin-left: -10px;
}

.ol-popup:before {
    border-top-color: #cccccc;
    border-width: 11px;
    left: 48px;
    margin-left: -11px;
}

.ol-popup-content {
    min-width: 170px;
    max-height: 500px;
    overflow-x: auto;
}

.ol-popup-closer {
    position: absolute;
    top: 2px;
    right: 2px;
    font-size: 150%;
    padding: 0 4px;
    color: gray;
    text-decoration: none;
}

.ol-popup-closer:after {
    content: "\2716";
    font-size: 16px;
    color: black;
}

.ol-popup div.infoResult {
    min-width: 130px;
}

.ol-popup div.infoResult p {
    padding: 0.1em;
    margin: 0;
}

.ol-popup-content h3 {
    margin: 0.25em 0;
}

.ol-popup.marker {
    margin-bottom: 30px;
}
```

- Endpoint: GET https://www.exteriores.gob.es/Style%20Library/PC/css/stylesPCMain.min.css
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.exteriores.gob.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/Style%20Library/PC/css/stylesPCMain.min.css"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "text/css,*/*;q=0.1"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "ApplicationGatewayAffinityCORS=de3d3e74fe6090e3024284440756cd7e; ApplicationGatewayAffinity=de3d3e74fe6090e3024284440756cd7e"
  },
  {
    "name": "priority",
    "value": "u=0"
  },
  {
    "name": "referer",
    "value": "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "style"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-origin"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "age",
    "value": "8556609"
  },
  {
    "name": "cache-control",
    "value": "max-age=86400, s-maxage=2592000"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "4590"
  },
  {
    "name": "content-security-policy",
    "value": "frame-ancestors 'self' teams.microsoft.com *.teams.microsoft.com *.skype.com *.teams.microsoft.us local.teams.office.com *.powerapps.com *.yammer.com *.officeapps.live.com *.office.com *.stream.azure-test.net *.microsoftstream.com *.dynamics.com *.microsoft.com onedrive.live.com *.onedrive.live.com;"
  },
  {
    "name": "content-type",
    "value": "text/css"
  },
  {
    "name": "date",
    "value": "Wed, 25 Jun 2025 11:34:11 GMT"
  },
  {
    "name": "etag",
    "value": "\"{FEB98219-7D49-4080-BC45-9182A3EFDB6C},22pub\""
  },
  {
    "name": "last-modified",
    "value": "Thu, 25 Jan 2024 12:30:10 GMT"
  },
  {
    "name": "microsoftsharepointteamservices",
    "value": "16.0.0.5448"
  },
  {
    "name": "request-id",
    "value": "ac90aba1-6734-20d8-e2ea-62d293224d4c"
  },
  {
    "name": "sprequestguid",
    "value": "ac90aba1-6734-20d8-e2ea-62d293224d4c"
  },
  {
    "name": "tp-cache",
    "value": "hit"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding"
  },
  {
    "name": "x-aspnet-version",
    "value": "4.0.30319"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-frame-options",
    "value": "SAMEORIGIN"
  },
  {
    "name": "x-ms-invokeapp",
    "value": "1; RequireReadOnly"
  }
]
```
  - Response body (trunc):

```json
html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,main,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block}body{line-height:1;overflow-x:hidden;overflow-y:auto}ul:not([type]){list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:"";content:none}table{border-collapse:collapse;border-spacing:0}a:hover{text-decoration:underline}a:visited,a:focus,a:active{color:#212b36}a:visited{text-decoration:none}a{text-decoration:none;color:#1d1d1b}em{font-style:oblique !important}strong{font-weight:bold !important}@font-face{font-family:'Open Sans';font-style:normal;font-weight:300;src:url("../fonts/open-sans-v16-cyrillic-ext_cyrillic_vietnamese_greek_latin-ext_latin_greek-ext-300.eot?");src:local("Open Sans Light"),local("OpenSans-Light"),url("../fonts/open-sans-v16-cyrillic-ext_cyrillic_vietnamese_greek_latin-ext_latin_greek-ext-300.eot?#iefix") format("embedded-opentype"),url("../fonts/open-sans-v16-cyrillic-ext_cyrillic_vietnamese_greek_latin-ext_latin_greek-ext-300.woff2") format("woff2"),url("../fonts/open-sans-v16-cyrillic-ext_cyrillic_vietnamese_greek_latin-ext_latin_greek-ext-300.woff") format("woff"),url("../fonts/open-sans-v16-cyrillic-ext_cyrillic_vietnamese_greek_latin-ext_latin_greek-ext-300.ttf") format("truetype"),url("../fonts/open-sans-v16-cyrillic-ext_cyrillic_vietnamese_greek_latin-ext_latin_greek-ext-300.svg#OpenSans") format("svg")}@font-face{font-family:'Open Sans';font-style:italic;font-weight:300;src:url("../fonts/open-sans-v16-cyrillic-ext_cyrillic_vietnamese_greek_latin-ext_latin
... [truncated]
```

- Endpoint: GET https://www.exteriores.gob.es/Style%20Library/PC/css/stylesPC.min.css
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.exteriores.gob.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/Style%20Library/PC/css/stylesPC.min.css"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "text/css,*/*;q=0.1"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "ApplicationGatewayAffinityCORS=de3d3e74fe6090e3024284440756cd7e; ApplicationGatewayAffinity=de3d3e74fe6090e3024284440756cd7e"
  },
  {
    "name": "priority",
    "value": "u=0"
  },
  {
    "name": "referer",
    "value": "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "style"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-origin"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "age",
    "value": "4915747"
  },
  {
    "name": "cache-control",
    "value": "max-age=86400, s-maxage=2592000"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "24911"
  },
  {
    "name": "content-security-policy",
    "value": "frame-ancestors 'self' teams.microsoft.com *.teams.microsoft.com *.skype.com *.teams.microsoft.us local.teams.office.com *.powerapps.com *.yammer.com *.officeapps.live.com *.office.com *.stream.azure-test.net *.microsoftstream.com *.dynamics.com *.microsoft.com onedrive.live.com *.onedrive.live.com;"
  },
  {
    "name": "content-type",
    "value": "text/css"
  },
  {
    "name": "date",
    "value": "Wed, 06 Aug 2025 14:55:12 GMT"
  },
  {
    "name": "etag",
    "value": "\"{C3086181-8FF8-4A44-8A93-2732BC72EC64},116pub\""
  },
  {
    "name": "last-modified",
    "value": "Wed, 06 Aug 2025 08:10:53 GMT"
  },
  {
    "name": "microsoftsharepointteamservices",
    "value": "16.0.0.5513"
  },
  {
    "name": "request-id",
    "value": "de20b9a1-d767-20d8-e2ea-69af9be8002c"
  },
  {
    "name": "sprequestguid",
    "value": "de20b9a1-d767-20d8-e2ea-69af9be8002c"
  },
  {
    "name": "tp-cache",
    "value": "hit"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding"
  },
  {
    "name": "x-aspnet-version",
    "value": "4.0.30319"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-frame-options",
    "value": "SAMEORIGIN"
  },
  {
    "name": "x-ms-invokeapp",
    "value": "1; RequireReadOnly"
  }
]
```
  - Response body (trunc):

```json
.container_3_col>ul{display:flex;align-content:space-between;flex-wrap:wrap}.container_3_col>ul>li{width:33.33%;display:inline-block;padding:10px}.gsc-control-wrapper-cse{visibility:visible !important}.gsc-search-box.gsc-search-box-tools{display:block !important}@media screen and (max-width:992px){.container_3_col>ul>li{width:50%}}@media screen and (max-width:576px){.container_3_col>ul>li{width:100%;padding:0;margin-bottom:25px}}.container_3_col_map{padding:65px 0 20px 0;display:none}@media screen and (max-width:720px){.container_3_col_map{padding:20px;display:none}}.container_3_col_map>ul{display:-webkit-box;align-content:space-between;flex-wrap:wrap}.container_3_col_map>ul>li{width:33.33%;padding:10px;overflow:hidden;margin-bottom:15px}@media screen and (max-width:720px){.container_3_col_map>ul>li{width:100%;padding:0;margin-bottom:25px}}.container_3_col_rel{background-color:#f5f6f6;padding:50px 65px}@media screen and (max-width:720px){.container_3_col_rel{padding:20px}}.container_3_col_rel>ul{display:flex;align-content:space-between;flex-wrap:wrap}.container_3_col_rel>ul>li{width:33.33%;display:inline-block;padding:10px}@media screen and (max-width:720px){.container_3_col_rel>ul>li{width:100%;padding:0;margin-bottom:25px}}.container_6_col>ul{display:flex;align-content:space-between;flex-wrap:wrap}.container_6_col>ul>li{width:16.66%;display:inline-block;padding:10px}@media screen and (max-width:992px){.container_6_col>ul>li{width:33.33%}}@media screen and (max-width:576px){.container_6_col>ul>li{width:50%}}@media screen and (max-width:400px){.container_6_col>ul>li{width:100%;padding:20px 0}.container_6_col>ul>li:first-child{padding-top:0}}.Disclaimer_cookies{position:fixed;bottom:0;width:100%;background-color:#aea8a6;height:200px}.alert__msg-Wrapper{align-content:center;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;text-align:center;background-color:#aea8a6;width:100%;padding-bottom:15px;padding-top:15px;z-index:100}.alert__msg-Wrapper .alert__content{display:-webkit
... [truncated]
```

- Endpoint: GET https://www.exteriores.gob.es/WebResource.axd?d=qBFtoO3OrTI0QgWJHEum_fYzR4uN6r09trXRn27J_oIsEjaA-UVtoLm1BOQ0oowa84sXY3eOpsF0tfs2O4EsOH4ddd1Gul9068wd0LW_jjs1&t=638568676745067788
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.exteriores.gob.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/WebResource.axd?d=qBFtoO3OrTI0QgWJHEum_fYzR4uN6r09trXRn27J_oIsEjaA-UVtoLm1BOQ0oowa84sXY3eOpsF0tfs2O4EsOH4ddd1Gul9068wd0LW_jjs1&t=638568676745067788"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "ApplicationGatewayAffinityCORS=de3d3e74fe6090e3024284440756cd7e; ApplicationGatewayAffinity=de3d3e74fe6090e3024284440756cd7e"
  },
  {
    "name": "priority",
    "value": "u=1"
  },
  {
    "name": "referer",
    "value": "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-origin"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "age",
    "value": "6206104"
  },
  {
    "name": "cache-control",
    "value": "max-age=86400, s-maxage=2592000"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "6007"
  },
  {
    "name": "content-type",
    "value": "application/x-javascript"
  },
  {
    "name": "date",
    "value": "Tue, 22 Jul 2025 16:29:15 GMT"
  },
  {
    "name": "expires",
    "value": "Wed, 22 Jul 2026 16:29:15 GMT"
  },
  {
    "name": "last-modified",
    "value": "Thu, 18 Jul 2024 00:47:54 GMT"
  },
  {
    "name": "microsoftsharepointteamservices",
    "value": "16.0.0.5513"
  },
  {
    "name": "tp-cache",
    "value": "hit"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding"
  },
  {
    "name": "x-aspnet-version",
    "value": "4.0.30319"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-ms-invokeapp",
    "value": "1; RequireReadOnly"
  }
]
```
  - Response body (trunc):

```json
function WebForm_PostBackOptions(eventTarget, eventArgument, validation, validationGroup, actionUrl, trackFocus, clientSubmit) {
    this.eventTarget = eventTarget;
    this.eventArgument = eventArgument;
    this.validation = validation;
    this.validationGroup = validationGroup;
    this.actionUrl = actionUrl;
    this.trackFocus = trackFocus;
    this.clientSubmit = clientSubmit;
}
function WebForm_DoPostBackWithOptions(options) {
    var validationResult = true;
    if (options.validation) {
        if (typeof(Page_ClientValidate) == 'function') {
            validationResult = Page_ClientValidate(options.validationGroup);
        }
    }
    if (validationResult) {
        if ((typeof(options.actionUrl) != "undefined") && (options.actionUrl != null) && (options.actionUrl.length > 0)) {
            theForm.action = options.actionUrl;
        }
        if (options.trackFocus) {
            var lastFocus = theForm.elements["__LASTFOCUS"];
            if ((typeof(lastFocus) != "undefined") && (lastFocus != null)) {
                if (typeof(document.activeElement) == "undefined") {
                    lastFocus.value = options.eventTarget;
                }
                else {
                    var active = document.activeElement;
                    if ((typeof(active) != "undefined") && (active != null)) {
                        if ((typeof(active.id) != "undefined") && (active.id != null) && (active.id.length > 0)) {
                            lastFocus.value = active.id;
                        }
                        else if (typeof(active.name) != "undefined") {
                            lastFocus.value = active.name;
                        }
                    }
                }
            }
        }
    }
    if (options.clientSubmit) {
        __doPostBack(options.eventTarget, options.eventArgument);
    }
}
var __pendingCallbacks = new Array();
var __synchronousCallBackIndex = -1;
function WebForm_DoCallback(eventTarget, eventArgument, eve
... [truncated]
```

- Endpoint: GET https://www.exteriores.gob.es/PublishingImages/Banners/logoMinisterio.svg
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.exteriores.gob.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/PublishingImages/Banners/logoMinisterio.svg"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "ApplicationGatewayAffinityCORS=de3d3e74fe6090e3024284440756cd7e; ApplicationGatewayAffinity=de3d3e74fe6090e3024284440756cd7e"
  },
  {
    "name": "priority",
    "value": "u=2, i"
  },
  {
    "name": "referer",
    "value": "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "image"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-origin"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "age",
    "value": "8556609"
  },
  {
    "name": "cache-control",
    "value": "max-age=86400, s-maxage=2592000"
  },
  {
    "name": "content-length",
    "value": "131402"
  },
  {
    "name": "content-security-policy",
    "value": "frame-ancestors 'self' teams.microsoft.com *.teams.microsoft.com *.skype.com *.teams.microsoft.us local.teams.office.com *.powerapps.com *.yammer.com *.officeapps.live.com *.office.com *.stream.azure-test.net *.microsoftstream.com *.dynamics.com *.microsoft.com onedrive.live.com *.onedrive.live.com;"
  },
  {
    "name": "content-type",
    "value": "image/svg+xml"
  },
  {
    "name": "date",
    "value": "Wed, 25 Jun 2025 11:34:11 GMT"
  },
  {
    "name": "etag",
    "value": "\"{A833AC7D-87D5-4D24-AB42-D4C6C9E94BD2},3pub\""
  },
  {
    "name": "last-modified",
    "value": "Wed, 29 Jun 2022 11:15:49 GMT"
  },
  {
    "name": "microsoftsharepointteamservices",
    "value": "16.0.0.5448"
  },
  {
    "name": "request-id",
    "value": "ac90aba1-6734-20d8-e2ea-6a4b84dfe87f"
  },
  {
    "name": "sprequestguid",
    "value": "ac90aba1-6734-20d8-e2ea-6a4b84dfe87f"
  },
  {
    "name": "tp-cache",
    "value": "hit"
  },
  {
    "name": "vary",
    "value": ""
  },
  {
    "name": "x-aspnet-version",
    "value": "4.0.30319"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-frame-options",
    "value": "SAMEORIGIN"
  },
  {
    "name": "x-ms-invokeapp",
    "value": "1; RequireReadOnly"
  }
]
```
  - Response body (trunc):

```json
<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 26.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="Primer_plano" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
	 y="0px" viewBox="0 0 360 81.45" style="enable-background:new 0 0 360 81.45;" xml:space="preserve">
<style type="text/css">
	.st0{fill:#211915;}
	.st1{fill-rule:evenodd;clip-rule:evenodd;fill:#B60027;stroke:#211915;stroke-width:0.116;stroke-miterlimit:3.8637;}
	.st2{fill-rule:evenodd;clip-rule:evenodd;fill:#A07E00;stroke:#211915;stroke-width:0.116;stroke-miterlimit:3.8637;}
	.st3{fill-rule:evenodd;clip-rule:evenodd;fill:#A07E00;}
	.st4{fill-rule:evenodd;clip-rule:evenodd;fill:#A07E00;stroke:#211915;stroke-width:0.1328;stroke-miterlimit:3.8637;}
	
		.st5{clip-path:url(#SVGID_00000010287029058948116720000016089648998652695987_);fill-rule:evenodd;clip-rule:evenodd;fill:#A07E00;stroke:#211915;stroke-width:0.1328;stroke-miterlimit:3.8637;}
	.st6{fill:none;}
	.st7{fill:none;stroke:#211915;stroke-width:0.116;stroke-miterlimit:3.8637;}
	.st8{fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;stroke:#211915;stroke-width:0.116;stroke-miterlimit:3.8637;}
	.st9{fill-rule:evenodd;clip-rule:evenodd;fill:#006F46;stroke:#211915;stroke-width:0.116;stroke-miterlimit:3.8637;}
	.st10{fill-rule:evenodd;clip-rule:evenodd;fill:#B60027;}
	.st11{clip-path:url(#SVGID_00000111889168258177895920000001781265470599138190_);}
	.st12{fill:none;stroke:#211915;stroke-width:0.145;stroke-miterlimit:3.8637;}
	.st13{fill:none;stroke:#211915;stroke-width:0.174;stroke-miterlimit:3.8637;}
	.st14{fill:none;stroke:#211915;stroke-width:0.203;stroke-miterlimit:3.8637;}
	.st15{fill:none;stroke:#211915;stroke-width:0.2273;stroke-miterlimit:3.8637;}
	.st16{fill:none;stroke:#211915;stroke-width:0.2558;stroke-miterlimit:3.8637;}
	.st17{fill:none;stroke:#211915;stroke-width:0.2842;stroke-miterlimit:3.8637;}
	.st18{fill:#A07E00;stroke:#211915;stroke-width:0.116;stroke-miterlimit:3.8637;}

... [truncated]
```

- Endpoint: GET https://www.exteriores.gob.es/Style%20Library/PC/Img/icons/icon-external-link.svg
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.exteriores.gob.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/Style%20Library/PC/Img/icons/icon-external-link.svg"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "ApplicationGatewayAffinityCORS=de3d3e74fe6090e3024284440756cd7e; ApplicationGatewayAffinity=de3d3e74fe6090e3024284440756cd7e"
  },
  {
    "name": "priority",
    "value": "u=2, i"
  },
  {
    "name": "referer",
    "value": "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "image"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-origin"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "age",
    "value": "8556609"
  },
  {
    "name": "cache-control",
    "value": "max-age=86400, s-maxage=2592000"
  },
  {
    "name": "content-length",
    "value": "593"
  },
  {
    "name": "content-security-policy",
    "value": "frame-ancestors 'self' teams.microsoft.com *.teams.microsoft.com *.skype.com *.teams.microsoft.us local.teams.office.com *.powerapps.com *.yammer.com *.officeapps.live.com *.office.com *.stream.azure-test.net *.microsoftstream.com *.dynamics.com *.microsoft.com onedrive.live.com *.onedrive.live.com;"
  },
  {
    "name": "content-type",
    "value": "image/svg+xml"
  },
  {
    "name": "date",
    "value": "Wed, 25 Jun 2025 11:34:11 GMT"
  },
  {
    "name": "etag",
    "value": "\"{DFA31E00-A01C-42BD-82B4-B24DC32BBAC3},2pub\""
  },
  {
    "name": "last-modified",
    "value": "Wed, 01 Jul 2020 13:10:30 GMT"
  },
  {
    "name": "microsoftsharepointteamservices",
    "value": "16.0.0.5448"
  },
  {
    "name": "request-id",
    "value": "ac90aba1-b734-20d8-e2ea-6f85a56eda61"
  },
  {
    "name": "sprequestguid",
    "value": "ac90aba1-b734-20d8-e2ea-6f85a56eda61"
  },
  {
    "name": "tp-cache",
    "value": "hit"
  },
  {
    "name": "vary",
    "value": ""
  },
  {
    "name": "x-aspnet-version",
    "value": "4.0.30319"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-frame-options",
    "value": "SAMEORIGIN"
  },
  {
    "name": "x-ms-invokeapp",
    "value": "1; RequireReadOnly"
  }
]
```
  - Response body (trunc):

```json
<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="external-link-alt" class="svg-inline--fa fa-external-link-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path fill="#4A4A4A" d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path></svg>
```

- Endpoint: GET https://www.exteriores.gob.es/style%20library/pc/script/jquery-ui-1.12.1/jquery.min.js
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.exteriores.gob.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/style%20library/pc/script/jquery-ui-1.12.1/jquery.min.js"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "ApplicationGatewayAffinityCORS=de3d3e74fe6090e3024284440756cd7e; ApplicationGatewayAffinity=de3d3e74fe6090e3024284440756cd7e"
  },
  {
    "name": "priority",
    "value": "u=2"
  },
  {
    "name": "referer",
    "value": "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-origin"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "age",
    "value": "8556608"
  },
  {
    "name": "cache-control",
    "value": "max-age=86400, s-maxage=2592000"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "39756"
  },
  {
    "name": "content-security-policy",
    "value": "frame-ancestors 'self' teams.microsoft.com *.teams.microsoft.com *.skype.com *.teams.microsoft.us local.teams.office.com *.powerapps.com *.yammer.com *.officeapps.live.com *.office.com *.stream.azure-test.net *.microsoftstream.com *.dynamics.com *.microsoft.com onedrive.live.com *.onedrive.live.com;"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Wed, 25 Jun 2025 11:34:12 GMT"
  },
  {
    "name": "etag",
    "value": "\"{316E456E-933B-44AF-968C-5AB8AFEB573F},4pub\""
  },
  {
    "name": "last-modified",
    "value": "Mon, 06 Jun 2022 07:13:22 GMT"
  },
  {
    "name": "microsoftsharepointteamservices",
    "value": "16.0.0.5448"
  },
  {
    "name": "request-id",
    "value": "ac90aba1-3782-20d8-e2ea-68aec56c8874"
  },
  {
    "name": "sprequestguid",
    "value": "ac90aba1-3782-20d8-e2ea-68aec56c8874"
  },
  {
    "name": "tp-cache",
    "value": "hit"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding"
  },
  {
    "name": "x-aspnet-version",
    "value": "4.0.30319"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-frame-options",
    "value": "SAMEORIGIN"
  },
  {
    "name": "x-ms-invokeapp",
    "value": "1; RequireReadOnly"
  }
]
```
  - Response body (trunc):

```json
/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.0",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?
... [truncated]
```

- Endpoint: GET https://www.exteriores.gob.es/style%20library/pc/script/SCScriptPC.min.js
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.exteriores.gob.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/style%20library/pc/script/SCScriptPC.min.js"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "ApplicationGatewayAffinityCORS=de3d3e74fe6090e3024284440756cd7e; ApplicationGatewayAffinity=de3d3e74fe6090e3024284440756cd7e"
  },
  {
    "name": "priority",
    "value": "u=2"
  },
  {
    "name": "referer",
    "value": "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-origin"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "age",
    "value": "8556471"
  },
  {
    "name": "cache-control",
    "value": "max-age=86400, s-maxage=2592000"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "1067"
  },
  {
    "name": "content-security-policy",
    "value": "frame-ancestors 'self' teams.microsoft.com *.teams.microsoft.com *.skype.com *.teams.microsoft.us local.teams.office.com *.powerapps.com *.yammer.com *.officeapps.live.com *.office.com *.stream.azure-test.net *.microsoftstream.com *.dynamics.com *.microsoft.com onedrive.live.com *.onedrive.live.com;"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Wed, 25 Jun 2025 11:36:29 GMT"
  },
  {
    "name": "etag",
    "value": "\"{36D31B8C-B19A-43C1-82AF-0D17BB9778D2},6pub\""
  },
  {
    "name": "last-modified",
    "value": "Wed, 21 Aug 2024 07:07:40 GMT"
  },
  {
    "name": "microsoftsharepointteamservices",
    "value": "16.0.0.5448"
  },
  {
    "name": "request-id",
    "value": "ce90aba1-a707-20d8-a8e3-7df41da4cdee"
  },
  {
    "name": "sprequestguid",
    "value": "ce90aba1-a707-20d8-a8e3-7df41da4cdee"
  },
  {
    "name": "tp-cache",
    "value": "hit"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding"
  },
  {
    "name": "x-aspnet-version",
    "value": "4.0.30319"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-frame-options",
    "value": "SAMEORIGIN"
  },
  {
    "name": "x-ms-invokeapp",
    "value": "1; RequireReadOnly"
  }
]
```
  - Response body (trunc):

```json
function initialSetUp(){selectOptionArray=$(".custom__select-Options"),rightHandSideSelects={allCategories:{},allServices:{}},selectID=[],delegationID="",consularSVID="";for(var e=0;e<selectOptionArray.length;e++)-1===selectOptionArray[e].id.indexOf("ddlCountries")&&-1===selectOptionArray[e].id.indexOf("ddlCategories")||selectID.push(selectOptionArray[e].id),-1!==selectOptionArray[e].id.indexOf("ddlDelegations")&&(delegationID=selectOptionArray[e].id),-1!==selectOptionArray[e].id.indexOf("ddlService")&&(consularSVID=selectOptionArray[e].id);for(var t=0;t<selectID.length;t++)-1!==selectID[t].indexOf("ddlCountries")&&(rightHandSideSelects.allCategories=$("#"+delegationID).find("option"),$("#"+delegationID).find("option:not(:first)").remove()),-1!==selectID[t].indexOf("ddlCategories")&&(rightHandSideSelects.allServices=$("#"+consularSVID).find("option"),$("#"+consularSVID).find("option:not(:first)").remove())}function setAllOnchangeActions(e){for(var t=0;t<selectID.length;t++)-1!==selectID[t].indexOf("ddlCountries")&&($("#"+selectID[t]).off("change"),$("#"+selectID[t]).on("change",function(t){$("#"+delegationID).find("option:not(:first)").remove();for(var n=e.allCategories,i=0;i<n.length;i++)$(n[i]).attr("paisdel")===$(t.target).val()&&(n[i].removeAttribute("style"),$("#"+delegationID).append(n[i]));$("#"+delegationID).prop("selectedIndex",0)})),-1!==selectID[t].indexOf("ddlCategories")&&($("#"+selectID[t]).off("change"),$("#"+selectID[t]).on("change",function(e){$("#"+consularSVID).find("option:not(:first)").remove();for(var t=rightHandSideSelects.allServices,n=0;n<t.length;n++)$(t[n]).attr("parentcategory")===$(e.target).val()&&"true"===$(t[n]).attr("visible")&&(t[n].removeAttribute("style"),$("#"+consularSVID).append(t[n]));$("#"+consularSVID).prop("selectedIndex",0)}))}function checkAndResetDropdowns(){const e=new URLSearchParams(window.location.search),t=Object.fromEntries(e.entries());for(var n=0;n<selectID.length;n++){if(-1!==selectID[n].indexOf("ddlCountries")){var i=[],l=$("#"+selectID[n]+" option:selected"
... [truncated]
```

- Endpoint: GET https://www.exteriores.gob.es/Style%20Library/PC/Img/icons/icon-refresh.svg
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.exteriores.gob.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/Style%20Library/PC/Img/icons/icon-refresh.svg"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "ApplicationGatewayAffinityCORS=de3d3e74fe6090e3024284440756cd7e; ApplicationGatewayAffinity=de3d3e74fe6090e3024284440756cd7e"
  },
  {
    "name": "priority",
    "value": "u=2, i"
  },
  {
    "name": "referer",
    "value": "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "image"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-origin"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "age",
    "value": "8556471"
  },
  {
    "name": "cache-control",
    "value": "max-age=86400, s-maxage=2592000"
  },
  {
    "name": "content-length",
    "value": "342"
  },
  {
    "name": "content-security-policy",
    "value": "frame-ancestors 'self' teams.microsoft.com *.teams.microsoft.com *.skype.com *.teams.microsoft.us local.teams.office.com *.powerapps.com *.yammer.com *.officeapps.live.com *.office.com *.stream.azure-test.net *.microsoftstream.com *.dynamics.com *.microsoft.com onedrive.live.com *.onedrive.live.com;"
  },
  {
    "name": "content-type",
    "value": "image/svg+xml"
  },
  {
    "name": "date",
    "value": "Wed, 25 Jun 2025 11:36:29 GMT"
  },
  {
    "name": "etag",
    "value": "\"{4477F07F-A948-4235-B62F-B44C78C1F11A},2pub\""
  },
  {
    "name": "last-modified",
    "value": "Wed, 01 Jul 2020 13:10:33 GMT"
  },
  {
    "name": "microsoftsharepointteamservices",
    "value": "16.0.0.5448"
  },
  {
    "name": "request-id",
    "value": "ce90aba1-a707-20d8-a8e3-7d43b67f6cb2"
  },
  {
    "name": "sprequestguid",
    "value": "ce90aba1-a707-20d8-a8e3-7d43b67f6cb2"
  },
  {
    "name": "tp-cache",
    "value": "hit"
  },
  {
    "name": "vary",
    "value": ""
  },
  {
    "name": "x-aspnet-version",
    "value": "4.0.30319"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-frame-options",
    "value": "SAMEORIGIN"
  },
  {
    "name": "x-ms-invokeapp",
    "value": "1; RequireReadOnly"
  }
]
```
  - Response body (trunc):

```json
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>
```

- Endpoint: GET https://www.exteriores.gob.es/style%20library/pc/script/jquery-ui-1.12.1/jquery-ui.min.js
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.exteriores.gob.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/style%20library/pc/script/jquery-ui-1.12.1/jquery-ui.min.js"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "ApplicationGatewayAffinityCORS=de3d3e74fe6090e3024284440756cd7e; ApplicationGatewayAffinity=de3d3e74fe6090e3024284440756cd7e"
  },
  {
    "name": "priority",
    "value": "u=2"
  },
  {
    "name": "referer",
    "value": "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-origin"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "age",
    "value": "8556608"
  },
  {
    "name": "cache-control",
    "value": "max-age=86400, s-maxage=2592000"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "91305"
  },
  {
    "name": "content-security-policy",
    "value": "frame-ancestors 'self' teams.microsoft.com *.teams.microsoft.com *.skype.com *.teams.microsoft.us local.teams.office.com *.powerapps.com *.yammer.com *.officeapps.live.com *.office.com *.stream.azure-test.net *.microsoftstream.com *.dynamics.com *.microsoft.com onedrive.live.com *.onedrive.live.com;"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Wed, 25 Jun 2025 11:34:12 GMT"
  },
  {
    "name": "etag",
    "value": "\"{FF8AE556-4099-4AAC-ADF5-66A735C3805A},4pub\""
  },
  {
    "name": "last-modified",
    "value": "Mon, 06 Jun 2022 07:13:44 GMT"
  },
  {
    "name": "microsoftsharepointteamservices",
    "value": "16.0.0.5448"
  },
  {
    "name": "request-id",
    "value": "ac90aba1-f799-20d8-e2ea-642f07edfe88"
  },
  {
    "name": "sprequestguid",
    "value": "ac90aba1-f799-20d8-e2ea-642f07edfe88"
  },
  {
    "name": "tp-cache",
    "value": "hit"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding"
  },
  {
    "name": "x-aspnet-version",
    "value": "4.0.30319"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-frame-options",
    "value": "SAMEORIGIN"
  },
  {
    "name": "x-ms-invokeapp",
    "value": "1; RequireReadOnly"
  }
]
```
  - Response body (trunc):

```json
/*! jQuery UI - v1.13.1 - 2022-01-20
* http://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-patch.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(V){"use strict";V.ui=V.ui||{};V.ui.version="1.13.1";var n,i=0,a=Array.prototype.hasOwnProperty,r=Array.prototype.slice;V.cleanData=(n=V.cleanData,function(t){for(var e,i,s=0;null!=(i=t[s]);s++)(e=V._data(i,"events"))&&e.remove&&V(i).triggerHandler("remove");n(t)}),V.widget=function(t,i,e){var s,n,o,a={},r=t.split(".")[0],l=r+"-"+(t=t.split(".")[1]);return e||(e=i,i=V.Widget),Array.isArray(e)&&(e=V.extend.apply(null,[{}].concat(e))),V.expr.pseudos[l.toLowerCase()]=function(t){return!!V.data(t,l)},V[r]=V[r]||{},s=V[r][t],n=V[r][t]=function(t,e){if(!this||!this._createWidget)return new n(t,e);arguments.length&&this._createWidget(t,e)},V.extend(n,s,{version:e.version,_proto:V.extend({},e),_childConstructors:[]}),(o=new i).options=V.widget.extend({},o.options),V.each(e,function(e,s){function n(){return
... [truncated]
```

- Endpoint: GET https://www.exteriores.gob.es/style%20library/pc/script/jquery-ui-1.12.1/jquery-ui-i18n.min.js
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.exteriores.gob.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/style%20library/pc/script/jquery-ui-1.12.1/jquery-ui-i18n.min.js"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "ApplicationGatewayAffinityCORS=de3d3e74fe6090e3024284440756cd7e; ApplicationGatewayAffinity=de3d3e74fe6090e3024284440756cd7e"
  },
  {
    "name": "priority",
    "value": "u=2"
  },
  {
    "name": "referer",
    "value": "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-origin"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "age",
    "value": "8556608"
  },
  {
    "name": "cache-control",
    "value": "max-age=86400, s-maxage=2592000"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "19345"
  },
  {
    "name": "content-security-policy",
    "value": "frame-ancestors 'self' teams.microsoft.com *.teams.microsoft.com *.skype.com *.teams.microsoft.us local.teams.office.com *.powerapps.com *.yammer.com *.officeapps.live.com *.office.com *.stream.azure-test.net *.microsoftstream.com *.dynamics.com *.microsoft.com onedrive.live.com *.onedrive.live.com;"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Wed, 25 Jun 2025 11:34:12 GMT"
  },
  {
    "name": "etag",
    "value": "\"{BA32DFB7-6DC8-4ADC-AD52-745B007B3179},4pub\""
  },
  {
    "name": "last-modified",
    "value": "Mon, 06 Jun 2022 07:14:26 GMT"
  },
  {
    "name": "microsoftsharepointteamservices",
    "value": "16.0.0.5448"
  },
  {
    "name": "request-id",
    "value": "ac90aba1-e79a-20d8-e2ea-6337b65ab3fd"
  },
  {
    "name": "sprequestguid",
    "value": "ac90aba1-e79a-20d8-e2ea-6337b65ab3fd"
  },
  {
    "name": "tp-cache",
    "value": "hit"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding"
  },
  {
    "name": "x-aspnet-version",
    "value": "4.0.30319"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-frame-options",
    "value": "SAMEORIGIN"
  },
  {
    "name": "x-ms-invokeapp",
    "value": "1; RequireReadOnly"
  }
]
```
  - Response body (trunc):

```json
/*! jQuery UI - v1.11.4 - 2015-03-11
* http://jqueryui.com
* Includes: datepicker-af.js, datepicker-ar-DZ.js, datepicker-ar.js, datepicker-az.js, datepicker-be.js, datepicker-bg.js, datepicker-bs.js, datepicker-ca.js, datepicker-cs.js, datepicker-cy-GB.js, datepicker-da.js, datepicker-de.js, datepicker-el.js, datepicker-en-AU.js, datepicker-en-GB.js, datepicker-en-NZ.js, datepicker-eo.js, datepicker-es.js, datepicker-et.js, datepicker-eu.js, datepicker-fa.js, datepicker-fi.js, datepicker-fo.js, datepicker-fr-CA.js, datepicker-fr-CH.js, datepicker-fr.js, datepicker-gl.js, datepicker-he.js, datepicker-hi.js, datepicker-hr.js, datepicker-hu.js, datepicker-hy.js, datepicker-id.js, datepicker-is.js, datepicker-it-CH.js, datepicker-it.js, datepicker-ja.js, datepicker-ka.js, datepicker-kk.js, datepicker-km.js, datepicker-ko.js, datepicker-ky.js, datepicker-lb.js, datepicker-lt.js, datepicker-lv.js, datepicker-mk.js, datepicker-ml.js, datepicker-ms.js, datepicker-nb.js, datepicker-nl-BE.js, datepicker-nl.js, datepicker-nn.js, datepicker-no.js, datepicker-pl.js, datepicker-pt-BR.js, datepicker-pt.js, datepicker-rm.js, datepicker-ro.js, datepicker-ru.js, datepicker-sk.js, datepicker-sl.js, datepicker-sq.js, datepicker-sr-SR.js, datepicker-sr.js, datepicker-sv.js, datepicker-ta.js, datepicker-th.js, datepicker-tj.js, datepicker-tr.js, datepicker-uk.js, datepicker-vi.js, datepicker-zh-CN.js, datepicker-zh-HK.js, datepicker-zh-TW.js
* Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */

(function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)})(function(e){var t=e.datepicker;t.regional.af={closeText:"Selekteer",prevText:"Vorige",nextText:"Volgende",currentText:"Vandag",monthNames:["Januarie","Februarie","Maart","April","Mei","Junie","Julie","Augustus","September","Oktober","November","Desember"],monthNamesShort:["Jan","Feb","Mrt","Apr","Mei","Jun","Jul","Aug","Sep","Okt","Nov","Des"],dayNames:["Sondag","Maandag","Dinsdag","Woensdag","Donderdag","Vrydag","Saterdag"],dayNamesShort:[
... [truncated]
```

- Endpoint: GET https://www.exteriores.gob.es/Style%20Library/PC/Script/owl-carousel-2.3.4/owl.carousel.min.js
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.exteriores.gob.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/Style%20Library/PC/Script/owl-carousel-2.3.4/owl.carousel.min.js"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "ApplicationGatewayAffinityCORS=de3d3e74fe6090e3024284440756cd7e; ApplicationGatewayAffinity=de3d3e74fe6090e3024284440756cd7e"
  },
  {
    "name": "priority",
    "value": "u=2"
  },
  {
    "name": "referer",
    "value": "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-origin"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "age",
    "value": "8556608"
  },
  {
    "name": "cache-control",
    "value": "max-age=86400, s-maxage=2592000"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "15056"
  },
  {
    "name": "content-security-policy",
    "value": "frame-ancestors 'self' teams.microsoft.com *.teams.microsoft.com *.skype.com *.teams.microsoft.us local.teams.office.com *.powerapps.com *.yammer.com *.officeapps.live.com *.office.com *.stream.azure-test.net *.microsoftstream.com *.dynamics.com *.microsoft.com onedrive.live.com *.onedrive.live.com;"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Wed, 25 Jun 2025 11:34:12 GMT"
  },
  {
    "name": "etag",
    "value": "\"{B744891C-66A7-462A-BA98-98B750A98990},2pub\""
  },
  {
    "name": "last-modified",
    "value": "Wed, 01 Jul 2020 13:11:14 GMT"
  },
  {
    "name": "microsoftsharepointteamservices",
    "value": "16.0.0.5448"
  },
  {
    "name": "request-id",
    "value": "ac90aba1-e79a-20d8-e2ea-6f6c741c57cb"
  },
  {
    "name": "sprequestguid",
    "value": "ac90aba1-e79a-20d8-e2ea-6f6c741c57cb"
  },
  {
    "name": "tp-cache",
    "value": "hit"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding"
  },
  {
    "name": "x-aspnet-version",
    "value": "4.0.30319"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-frame-options",
    "value": "SAMEORIGIN"
  },
  {
    "name": "x-ms-invokeapp",
    "value": "1; RequireReadOnly"
  }
]
```
  - Response body (trunc):

```json
/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
!function(a,b,c,d){function e(b,c){this.settings=null,this.options=a.extend({},e.Defaults,c),this.$element=a(b),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},a.each(["onResize","onThrottledResize"],a.proxy(function(b,c){this._handlers[c]=a.proxy(this[c],this)},this)),a.each(e.Plugins,a.proxy(function(a,b){this._plugins[a.charAt(0).toLowerCase()+a.slice(1)]=new b(this)},this)),a.each(e.Workers,a.proxy(function(b,c){this._pipe.push({filter:c.filter,run:a.proxy(c.run,this)})},this)),this.setup(),this.initialize()}e.Defaults={items:3,loop:!1,center:!1,rewind:!1,checkVisibility:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,fallbackEasing:"swing",slideTransition:"",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},e.Width={Default:"default",Inner:"inner",Outer:"outer"},e.Type={Event:"event",State:"state"},e.Plugins={},e.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(a){a.current=this._items&&this._items[this.relativ
... [truncated]
```

- Endpoint: GET https://www.exteriores.gob.es/Style%20Library/PC/Script/imageMapResizer/imageMapResizer.min.js
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.exteriores.gob.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/Style%20Library/PC/Script/imageMapResizer/imageMapResizer.min.js"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "ApplicationGatewayAffinityCORS=de3d3e74fe6090e3024284440756cd7e; ApplicationGatewayAffinity=de3d3e74fe6090e3024284440756cd7e"
  },
  {
    "name": "priority",
    "value": "u=2"
  },
  {
    "name": "referer",
    "value": "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-origin"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "age",
    "value": "8556608"
  },
  {
    "name": "cache-control",
    "value": "max-age=86400, s-maxage=2592000"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "1416"
  },
  {
    "name": "content-security-policy",
    "value": "frame-ancestors 'self' teams.microsoft.com *.teams.microsoft.com *.skype.com *.teams.microsoft.us local.teams.office.com *.powerapps.com *.yammer.com *.officeapps.live.com *.office.com *.stream.azure-test.net *.microsoftstream.com *.dynamics.com *.microsoft.com onedrive.live.com *.onedrive.live.com;"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Wed, 25 Jun 2025 11:34:12 GMT"
  },
  {
    "name": "etag",
    "value": "\"{F6CC7D71-CD92-418D-949A-F147629EEB58},2pub\""
  },
  {
    "name": "last-modified",
    "value": "Wed, 01 Jul 2020 13:11:42 GMT"
  },
  {
    "name": "microsoftsharepointteamservices",
    "value": "16.0.0.5448"
  },
  {
    "name": "request-id",
    "value": "ac90aba1-379b-20d8-e2ea-6796919b6600"
  },
  {
    "name": "sprequestguid",
    "value": "ac90aba1-379b-20d8-e2ea-6796919b6600"
  },
  {
    "name": "tp-cache",
    "value": "hit"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding"
  },
  {
    "name": "x-aspnet-version",
    "value": "4.0.30319"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-frame-options",
    "value": "SAMEORIGIN"
  },
  {
    "name": "x-ms-invokeapp",
    "value": "1; RequireReadOnly"
  }
]
```
  - Response body (trunc):

```json
/*! Image Map Resizer (imageMapResizer.min.js ) - v1.0.10 - 2019-04-10
 *  Desc: Resize HTML imageMap to scaled image.
 *  Copyright: (c) 2019 David J. Bradshaw - dave@bradshaw.net
 *  License: MIT
 */

!function () {
    "use strict";
    var naturalSize = {
        naturalWidth: 1,
        naturalHeight: 1
    }
    if (window.naturalSize) {
        naturalSize = window.naturalSize
    } else {
        window.naturalSize = naturalSize
    }

    function r() { function e() { var r = { width: u.width / (u.naturalWidth == 0 ? naturalSize.naturalWidth : u.naturalWidth), height: u.height / (u.naturalHeight == 0 ? naturalSize.naturalHeight : u.naturalHeight) }, a = { width: parseInt(window.getComputedStyle(u, null).getPropertyValue("padding-left"), 10), height: parseInt(window.getComputedStyle(u, null).getPropertyValue("padding-top"), 10) }; i.forEach(function (e, t) { var n = 0; o[t].coords = e.split(",").map(function (e) { var t = 1 == (n = 1 - n) ? "width" : "height"; return a[t] + Math.floor(Number(e) * r[t]) }).join(",") }) } function t(e) { return e.coords.replace(/ *, */g, ",").replace(/ +/g, ",") } function n() { clearTimeout(d), d = setTimeout(e, 250) } function r(e) { return document.querySelector('img[usemap="' + e + '"]') } var a = this, o = null, i = null, u = null, d = null; "function" != typeof a._resize ? (o = a.getElementsByTagName("area"), i = Array.prototype.map.call(o, t), u = r("#" + a.name) || r(a.name), a._resize = e, u.addEventListener("load", e, !1), window.addEventListener("focus", e, !1), window.addEventListener("resize", n, !1), window.addEventListener("readystatechange", e, !1), document.addEventListener("fullscreenchange", e, !1), u.width === u.naturalWidth && u.height === u.naturalHeight || e()) : a._resize() } function e() { function t(e) { e && (!function (e) { if (!e.tagName) throw new TypeError("Object is not a valid DOM element"); if ("MAP" !== e.tagName.toUpperCase()) throw new TypeError("Expected <MAP> tag, found <" + e.tagName + ">.") }(e), r.call(e), n.push(e
... [truncated]
```

- Endpoint: GET https://www.exteriores.gob.es/Style%20Library/PC/Script/ol-map/ol.js
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.exteriores.gob.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/Style%20Library/PC/Script/ol-map/ol.js"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "ApplicationGatewayAffinityCORS=de3d3e74fe6090e3024284440756cd7e; ApplicationGatewayAffinity=de3d3e74fe6090e3024284440756cd7e"
  },
  {
    "name": "priority",
    "value": "u=2"
  },
  {
    "name": "referer",
    "value": "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-origin"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "age",
    "value": "8556608"
  },
  {
    "name": "cache-control",
    "value": "max-age=86400, s-maxage=2592000"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "281079"
  },
  {
    "name": "content-security-policy",
    "value": "frame-ancestors 'self' teams.microsoft.com *.teams.microsoft.com *.skype.com *.teams.microsoft.us local.teams.office.com *.powerapps.com *.yammer.com *.officeapps.live.com *.office.com *.stream.azure-test.net *.microsoftstream.com *.dynamics.com *.microsoft.com onedrive.live.com *.onedrive.live.com;"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Wed, 25 Jun 2025 11:34:12 GMT"
  },
  {
    "name": "etag",
    "value": "\"{20FF4F8A-0972-454A-BA1E-ED0DE12DD62C},8pub\""
  },
  {
    "name": "last-modified",
    "value": "Tue, 31 Oct 2023 11:41:45 GMT"
  },
  {
    "name": "microsoftsharepointteamservices",
    "value": "16.0.0.5448"
  },
  {
    "name": "request-id",
    "value": "ac90aba1-479a-20d8-e2ea-62702cc6bc68"
  },
  {
    "name": "sprequestguid",
    "value": "ac90aba1-479a-20d8-e2ea-62702cc6bc68"
  },
  {
    "name": "tp-cache",
    "value": "hit"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding"
  },
  {
    "name": "x-aspnet-version",
    "value": "4.0.30319"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-frame-options",
    "value": "SAMEORIGIN"
  },
  {
    "name": "x-ms-invokeapp",
    "value": "1; RequireReadOnly"
  }
]
```
  - Response body (trunc):

```json
var ol=function(){"use strict";function t(t){t.stopPropagation()}var e=class{constructor(t){this.propagationStopped,this.defaultPrevented,this.type=t,this.target=null}preventDefault(){this.defaultPrevented=!0}stopPropagation(){this.propagationStopped=!0}},i="propertychange";var n=class{constructor(){this.disposed=!1}dispose(){this.disposed||(this.disposed=!0,this.disposeInternal())}disposeInternal(){}};function r(t,e,i){let n,r;i=i||s;let o=0,a=t.length,l=!1;for(;o<a;)n=o+(a-o>>1),r=+i(t[n],e),r<0?o=n+1:(a=n,l=!r);return l?o:~o}function s(t,e){return t>e?1:t<e?-1:0}function o(t,e){return t<e?1:t>e?-1:0}function a(t,e,i){if(t[0]<=e)return 0;const n=t.length;if(e<=t[n-1])return n-1;if("function"==typeof i){for(let r=1;r<n;++r){const n=t[r];if(n===e)return r;if(n<e)return i(e,t[r-1],n)>0?r-1:r}return n-1}if(i>0){for(let i=1;i<n;++i)if(t[i]<e)return i-1;return n-1}if(i<0){for(let i=1;i<n;++i)if(t[i]<=e)return i;return n-1}for(let i=1;i<n;++i){if(t[i]==e)return i;if(t[i]<e)return t[i-1]-e<e-t[i]?i-1:i}return n-1}function l(t,e,i){for(;e<i;){const n=t[e];t[e]=t[i],t[i]=n,++e,--i}}function h(t,e){const i=Array.isArray(e)?e:[e],n=i.length;for(let e=0;e<n;e++)t[t.length]=i[e]}function c(t,e){const i=t.length;if(i!==e.length)return!1;for(let n=0;n<i;n++)if(t[n]!==e[n])return!1;return!0}function u(t,e,i){const n=e||s;return t.every((function(e,r){if(0===r)return!0;const s=n(t[r-1],e);return!(s>0||i&&0===s)}))}function d(){return!0}function g(){return!1}function f(){}function p(t){let e,i,n,r=!1;return function(){const s=Array.prototype.slice.call(arguments);return r&&this===n&&c(s,i)||(r=!0,n=this,i=s,e=t.apply(this,arguments)),e}}function m(t){return function(){let e;try{e=t()}catch(t){return Promise.reject(t)}return e instanceof Promise?e:Promise.resolve(e)}()}function _(t){for(const e in t)delete t[e]}function y(t){let e;for(e in t)return!1;return!e}var x=class extends n{constructor(t){super(),this.eventTarget_=t,this.pendingRemovals_=null,this.dispatching_=null,this.listeners_=null}addEventListener(t,e){if(!t||!e)return
... [truncated]
```

- Endpoint: GET https://www.exteriores.gob.es/Style%20Library/PC/Script/ol-map/ol-popup.js
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.exteriores.gob.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/Style%20Library/PC/Script/ol-map/ol-popup.js"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "ApplicationGatewayAffinityCORS=de3d3e74fe6090e3024284440756cd7e; ApplicationGatewayAffinity=de3d3e74fe6090e3024284440756cd7e"
  },
  {
    "name": "priority",
    "value": "u=2"
  },
  {
    "name": "referer",
    "value": "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-origin"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "age",
    "value": "8556608"
  },
  {
    "name": "cache-control",
    "value": "max-age=86400, s-maxage=2592000"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "1654"
  },
  {
    "name": "content-security-policy",
    "value": "frame-ancestors 'self' teams.microsoft.com *.teams.microsoft.com *.skype.com *.teams.microsoft.us local.teams.office.com *.powerapps.com *.yammer.com *.officeapps.live.com *.office.com *.stream.azure-test.net *.microsoftstream.com *.dynamics.com *.microsoft.com onedrive.live.com *.onedrive.live.com;"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Wed, 25 Jun 2025 11:34:12 GMT"
  },
  {
    "name": "etag",
    "value": "\"{381A8B19-A558-4E01-9837-8ED10AE0CF0B},8pub\""
  },
  {
    "name": "last-modified",
    "value": "Tue, 31 Oct 2023 11:42:22 GMT"
  },
  {
    "name": "microsoftsharepointteamservices",
    "value": "16.0.0.5448"
  },
  {
    "name": "request-id",
    "value": "ac90aba1-c79c-20d8-e2ea-608c89afa785"
  },
  {
    "name": "sprequestguid",
    "value": "ac90aba1-c79c-20d8-e2ea-608c89afa785"
  },
  {
    "name": "tp-cache",
    "value": "hit"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding"
  },
  {
    "name": "x-aspnet-version",
    "value": "4.0.30319"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-frame-options",
    "value": "SAMEORIGIN"
  },
  {
    "name": "x-ms-invokeapp",
    "value": "1; RequireReadOnly"
  }
]
```
  - Response body (trunc):

```json
(function (root, factory) {
  if(typeof define === "function" && define.amd) {
    define(["openlayers"], factory);
  } else if(typeof module === "object" && module.exports) {
    module.exports = factory(require("openlayers"));
  } else {
    root.LayerSwitcher = factory(root.ol);
  }
}(this, function(ol) {
    /**
    * OpenLayers 3 Popup Overlay.
    * See [the examples](./examples) for usage. Styling can be done via CSS.
    * @constructor
    * @extends {ol.Overlay}
    * @param {Object} opt_options Overlay options
    */
    ol.inherits = function (child, parent) {
        child.prototype = Object.create(parent.prototype);
        child.prototype.constructor = child;
    }
    ol.Overlay.Popup = function(opt_options) {

        var options = opt_options || {};

        if (options.autoPan === undefined) {
            options.autoPan = true;
        }

        if (options.autoPanAnimation === undefined) {
            options.autoPanAnimation = {
                duration: 250
            };
        }
        var mainDiv = document.getElementById('main-container');
        this.container = document.createElement('div');
        this.container.className = 'ol-popup';

        this.closer = document.createElement('a');
        this.closer.className = 'ol-popup-closer';
        this.closer.href = '#';
        this.container.appendChild(this.closer);

        var that = this;
        this.closer.addEventListener('click', function(evt) {
            that.container.style.display = 'none';
            that.closer.blur();
            evt.preventDefault();
        }, false);

        this.content = document.createElement('div');
        this.content.className = 'ol-popup-content';
        this.container.appendChild(this.content);
        mainDiv.appendChild(this.container);
        // Apply workaround to enable scrolling of content div on touch devices
        ol.Overlay.Popup.enableTouchScroll_(this.content);

        options.element = this.container;
        //
... [truncated]
```

- Endpoint: GET https://www.exteriores.gob.es/style%20library/pc/script/scriptPC.min.js
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.exteriores.gob.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/style%20library/pc/script/scriptPC.min.js"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "ApplicationGatewayAffinityCORS=de3d3e74fe6090e3024284440756cd7e; ApplicationGatewayAffinity=de3d3e74fe6090e3024284440756cd7e"
  },
  {
    "name": "priority",
    "value": "u=2"
  },
  {
    "name": "referer",
    "value": "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-origin"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "age",
    "value": "8556608"
  },
  {
    "name": "cache-control",
    "value": "max-age=86400, s-maxage=2592000"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "10363"
  },
  {
    "name": "content-security-policy",
    "value": "frame-ancestors 'self' teams.microsoft.com *.teams.microsoft.com *.skype.com *.teams.microsoft.us local.teams.office.com *.powerapps.com *.yammer.com *.officeapps.live.com *.office.com *.stream.azure-test.net *.microsoftstream.com *.dynamics.com *.microsoft.com onedrive.live.com *.onedrive.live.com;"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Wed, 25 Jun 2025 11:34:12 GMT"
  },
  {
    "name": "etag",
    "value": "\"{C769F807-D994-4C1A-8E8C-71014E42DE59},61pub\""
  },
  {
    "name": "last-modified",
    "value": "Mon, 24 Feb 2025 16:48:58 GMT"
  },
  {
    "name": "microsoftsharepointteamservices",
    "value": "16.0.0.5448"
  },
  {
    "name": "request-id",
    "value": "ac90aba1-179d-20d8-e2ea-6251f160767b"
  },
  {
    "name": "sprequestguid",
    "value": "ac90aba1-179d-20d8-e2ea-6251f160767b"
  },
  {
    "name": "tp-cache",
    "value": "hit"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding"
  },
  {
    "name": "x-aspnet-version",
    "value": "4.0.30319"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-frame-options",
    "value": "SAMEORIGIN"
  },
  {
    "name": "x-ms-invokeapp",
    "value": "1; RequireReadOnly"
  }
]
```
  - Response body (trunc):

```json
$(document).ready(function(){HTMLDisplayInArabic.SettingHTMLDisplayInArabic();typeof settingsCarousel!="undefined"&&Carousel.SettingCarousel(settingsCarousel);typeof settingsCookies!="undefined"&&Cookies.SetSettingsCookies(settingsCookies);typeof settingsAccordion!="undefined"&&settingsAccordion&&Accordion.SettingAccordion();typeof settingsDatePicker!="undefined"&&DatePicker.SettingDatePicker(settingsDatePicker);typeof settingsDelegationCountries!="undefined"&&DelegationCountries.SettingDelegationCountries(settingsDelegationCountries);typeof settingsMultimediaGallery!="undefined"&&MultimediaGallery.SettingMultimediaGallery(settingsMultimediaGallery);typeof lazyLoadingSettings!="undefined"&&LazyLoading.SettingLazyLoading(lazyLoadingSettings);typeof settingConsularServicesClient!="undefined"&&ConsularServicesClient.SettingConsularServicesClient(settingConsularServicesClient);typeof settingsDelegationCountries!="undefined"&&MapPC.SettingMap(settingsDelegationCountries);typeof settingsDelegations!="undefined";HorizontalMenu.SettingHorizontalMenu();JSStyleSettings.SetStyleSettings();Twocolumns.SetTwocolumns();$(".ms-rteStyle-acordeon").each(function(){for(var u=$(this).html(),i=[],r=!1,t=$(this).parent().next(),n;!r;)t.find("span").hasClass("ms-rteStyle-acordeon-texto")?(i.push(t.find("> span").html()),t=t.next()):r=!0;n="";n+='<div class="accordion">';n+='<img src="/Style%20Library/PC/Img/common/flechaAcordeon.jpg">';n+="<span>"+u+"<\/span>";n+="<\/div>";n+='<div class="panel">';$.each(i,function(t,i){n+="<p>"+i+"<\/p>"});n+="<\/div>";$(this).parent().after(n)});$(".ms-rteStyle-acordeon").each(function(){$(this).parent().remove()});$(".ms-rteStyle-acordeon-texto").each(function(){$(this).parent().remove()});$(".accordion").each(function(){$(this).click(function(){$(this).next().slideToggle(200);$(this).find("img").hasClass("rotated")?$(this).find("img").removeClass("rotated"):$(this).find("img").addClass("rotated")})});EnlacesDinamicosFichasConsulares.SetEnlacesFichaNacionalidad();EnlacesDinamicosFichasConsulares.Set
... [truncated]
```

- Endpoint: GET https://www.exteriores.gob.es/style%20library/pc/script/scriptAnalytics.js
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.exteriores.gob.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/style%20library/pc/script/scriptAnalytics.js"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "ApplicationGatewayAffinityCORS=de3d3e74fe6090e3024284440756cd7e; ApplicationGatewayAffinity=de3d3e74fe6090e3024284440756cd7e"
  },
  {
    "name": "priority",
    "value": "u=2"
  },
  {
    "name": "referer",
    "value": "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-origin"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "age",
    "value": "8556608"
  },
  {
    "name": "cache-control",
    "value": "max-age=86400, s-maxage=2592000"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "384"
  },
  {
    "name": "content-security-policy",
    "value": "frame-ancestors 'self' teams.microsoft.com *.teams.microsoft.com *.skype.com *.teams.microsoft.us local.teams.office.com *.powerapps.com *.yammer.com *.officeapps.live.com *.office.com *.stream.azure-test.net *.microsoftstream.com *.dynamics.com *.microsoft.com onedrive.live.com *.onedrive.live.com;"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Wed, 25 Jun 2025 11:34:12 GMT"
  },
  {
    "name": "etag",
    "value": "\"{7F4133A4-0ED0-4FF5-AADA-00196DCE37E4},2pub\""
  },
  {
    "name": "last-modified",
    "value": "Mon, 25 Nov 2024 15:56:23 GMT"
  },
  {
    "name": "microsoftsharepointteamservices",
    "value": "16.0.0.5448"
  },
  {
    "name": "request-id",
    "value": "ac90aba1-d79b-20d8-e2ea-690b16f43f79"
  },
  {
    "name": "sprequestguid",
    "value": "ac90aba1-d79b-20d8-e2ea-690b16f43f79"
  },
  {
    "name": "tp-cache",
    "value": "hit"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding"
  },
  {
    "name": "x-aspnet-version",
    "value": "4.0.30319"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-frame-options",
    "value": "SAMEORIGIN"
  },
  {
    "name": "x-ms-invokeapp",
    "value": "1; RequireReadOnly"
  }
]
```
  - Response body (trunc):

```json
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a[href$=".pdf"]');
    
    links.forEach(function(link) {
      link.addEventListener('click', function() {
        const fileName = link.href.split('/').pop();
        
        // Envía el evento de descarga a GA4
        gtag('event', 'download', {
          'event_category': 'PDF',
          'event_label': fileName
        });
      });
    });
  });

```

- Endpoint: GET https://cse.google.com/cse.js?cx=008750461806166452304:wd9y-ncsxn0
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "cse.google.com"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/cse.js?cx=008750461806166452304:wd9y-ncsxn0"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "referer",
    "value": "https://www.exteriores.gob.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "cross-site"
  },
  {
    "name": "sec-fetch-storage-access",
    "value": "active"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ch",
    "value": "Downlink"
  },
  {
    "name": "accept-ch",
    "value": "RTT"
  },
  {
    "name": "accept-ch",
    "value": "Sec-CH-UA-Form-Factors"
  },
  {
    "name": "accept-ch",
    "value": "Sec-CH-UA-Platform"
  },
  {
    "name": "accept-ch",
    "value": "Sec-CH-UA-Platform-Version"
  },
  {
    "name": "accept-ch",
    "value": "Sec-CH-UA-Full-Version"
  },
  {
    "name": "accept-ch",
    "value": "Sec-CH-UA-Arch"
  },
  {
    "name": "accept-ch",
    "value": "Sec-CH-UA-Model"
  },
  {
    "name": "accept-ch",
    "value": "Sec-CH-UA-Bitness"
  },
  {
    "name": "accept-ch",
    "value": "Sec-CH-UA-Full-Version-List"
  },
  {
    "name": "accept-ch",
    "value": "Sec-CH-UA-WoW64"
  },
  {
    "name": "alt-svc",
    "value": "h3=\":443\"; ma=2592000,h3-29=\":443\"; ma=2592000"
  },
  {
    "name": "content-disposition",
    "value": "attachment; filename=\"f.txt\""
  },
  {
    "name": "content-encoding",
    "value": "br"
  },
  {
    "name": "content-length",
    "value": "3325"
  },
  {
    "name": "content-security-policy",
    "value": "object-src 'none';base-uri 'self';script-src 'nonce-5F_dC37Dj3ijIX7rcNCf4Q' 'strict-dynamic' 'report-sample' 'unsafe-eval' 'unsafe-inline' https: http:;report-uri https://csp.withgoogle.com/csp/gws/other"
  },
  {
    "name": "content-type",
    "value": "text/javascript; charset=UTF-8"
  },
  {
    "name": "cross-origin-opener-policy",
    "value": "same-origin-allow-popups; report-to=\"gws\""
  },
  {
    "name": "cross-origin-resource-policy",
    "value": "cross-origin"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:21 GMT"
  },
  {
    "name": "permissions-policy",
    "value": "unload=()"
  },
  {
    "name": "report-to",
    "value": "{\"group\":\"gws\",\"max_age\":2592000,\"endpoints\":[{\"url\":\"https://csp.withgoogle.com/csp/report-to/gws/other\"}]}"
  },
  {
    "name": "server",
    "value": "gws"
  },
  {
    "name": "x-frame-options",
    "value": "SAMEORIGIN"
  },
  {
    "name": "x-xss-protection",
    "value": "0"
  }
]
```
  - Response body (trunc):

```json
(function(opts_){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var f=this||self;function g(a){return a};var h;function k(a,b){this.h=a===l&&b||"";this.g=m}function n(a){return a instanceof k&&a.constructor===k&&a.g===m?a.h:"type_error:Const"}var m={},l={};function p(a,b){this.h=b===q?a:""}p.prototype.toString=function(){return this.h+""};function r(a){return a instanceof p&&a.constructor===p?a.h:"type_error:TrustedResourceUrl"}
function u(a,b){var c=n(a);if(!v.test(c))throw Error("Invalid TrustedResourceUrl format: "+c);a=c.replace(w,function(d,e){if(!Object.prototype.hasOwnProperty.call(b,e))throw Error('Found marker, "'+e+'", in format string, "'+c+'", but no valid label mapping found in args: '+JSON.stringify(b));d=b[e];return d instanceof k?n(d):encodeURIComponent(String(d))});return x(a)}var w=/%{(\w+)}/g,v=RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)","i"),y=/^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/;
function z(a){var b=A;a=u(B,a);a=y.exec(r(a).toString());var c=a[3]||"";return x(a[1]+C("?",a[2]||"",b)+C("#",c))}var q={};function x(a){if(void 0===h){var b=null;var c=f.trustedTypes;if(c&&c.createPolicy){try{b=c.createPolicy("goog#html",{createHTML:g,createScript:g,createScriptURL:g})}catch(d){f.console&&f.console.error(d.message)}h=b}else h=b}a=(b=h)?b.createScriptURL(a):a;return new p(a,q)}
function C(a,b,c){if(null==c)return b;if("string"===typeof c)return c?a+encodeURIComponent(c):"";for(var d in c)if(Object.prototype.hasOwnProperty.call(c,d)){var e=c[d];e=Array.isArray(e)?e:[e];for(var t=0;t<e.length;t++){var D=e[t];null!=D&&(b||(b=a),b+=(b.length>a.length?"&":"")+encodeURIComponent(d)+"="+encodeURIComponent(String(D)))}}return b};function E(a,b){this.g=b===F?a:""}E.prototype.toString=function(){return this.g.toString()};var F={};/*

 SPDX-License-Identifier: Apache-2.0
*/
var G;try{new URL("s://g"),G=!0}catch(a){G=!1}var H=G;var I="alternate author bookmark canonical cite help icon license next prefetch dns-prefetch
... [truncated]
```

- Endpoint: GET https://www.exteriores.gob.es/Style%20Library/PC/fonts/open-sans-v16-cyrillic-ext_cyrillic_vietnamese_greek_latin-ext_latin_greek-ext-regular.woff2
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.exteriores.gob.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/Style%20Library/PC/fonts/open-sans-v16-cyrillic-ext_cyrillic_vietnamese_greek_latin-ext_latin_greek-ext-regular.woff2"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "ApplicationGatewayAffinityCORS=de3d3e74fe6090e3024284440756cd7e; ApplicationGatewayAffinity=de3d3e74fe6090e3024284440756cd7e"
  },
  {
    "name": "origin",
    "value": "https://www.exteriores.gob.es"
  },
  {
    "name": "priority",
    "value": "u=0"
  },
  {
    "name": "referer",
    "value": "https://www.exteriores.gob.es/Style%20Library/PC/css/stylesPCMain.min.css"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "font"
  },
  {
    "name": "sec-fetch-mode",
    "value": "cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-origin"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "age",
    "value": "8556608"
  },
  {
    "name": "cache-control",
    "value": "max-age=86400, s-maxage=2592000"
  },
  {
    "name": "content-length",
    "value": "43236"
  },
  {
    "name": "content-security-policy",
    "value": "frame-ancestors 'self' teams.microsoft.com *.teams.microsoft.com *.skype.com *.teams.microsoft.us local.teams.office.com *.powerapps.com *.yammer.com *.officeapps.live.com *.office.com *.stream.azure-test.net *.microsoftstream.com *.dynamics.com *.microsoft.com onedrive.live.com *.onedrive.live.com;"
  },
  {
    "name": "content-type",
    "value": "application/font-woff2"
  },
  {
    "name": "date",
    "value": "Wed, 25 Jun 2025 11:34:12 GMT"
  },
  {
    "name": "etag",
    "value": "\"{AF4D2A73-934A-4E39-92E8-DCB6E1904BB9},2pub\""
  },
  {
    "name": "last-modified",
    "value": "Wed, 01 Jul 2020 13:12:32 GMT"
  },
  {
    "name": "microsoftsharepointteamservices",
    "value": "16.0.0.5448"
  },
  {
    "name": "request-id",
    "value": "ac90aba1-e79f-20d8-e2ea-6671be4f9d30"
  },
  {
    "name": "sprequestguid",
    "value": "ac90aba1-e79f-20d8-e2ea-6671be4f9d30"
  },
  {
    "name": "tp-cache",
    "value": "hit"
  },
  {
    "name": "vary",
    "value": ""
  },
  {
    "name": "x-aspnet-version",
    "value": "4.0.30319"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-frame-options",
    "value": "SAMEORIGIN"
  },
  {
    "name": "x-ms-invokeapp",
    "value": "1; RequireReadOnly"
  }
]
```
  - Response body (trunc):

```json
d09GMgABAAAAAKjkABEAAAABbtQAAKiBAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGi4bEByBVgZgAIcICIEiCY80ERAKhNUYhIhfC44OAAE2AiQDnAoEIAWDWge6NQyCCVtcQHEGa7ddyiWPzttG41NTT9i7gN3K426lQ0E41YqO4LBxgBno3lT4////NySLMebda/cgimmmItZqtUGWC0EcI7qAlDwiOfoBUcGRArISxpiSpAixWMbVjWm+Lfe8bkimZM4yJVNqMXLcUS7vmGck6uM0dek+IbU2qb2jUqE1ZKxxQ6pnQix0PkyN1i7bc+PaQm6wz7y1P/OZyY30hPO44KejiBdVj5yxlaFAV+u0NmspEAmjuyzxriZuKL8RkX6pQ6DFOF7IPBVb+HCF2yd0GaVi14fFKwtSw4N1IzkJG6nx0qMO8sZVpiSxoIfISWFzW6LHC0+4Cos9kcg/Tl/cIsRKtBvhiQNqKGO4wkXv93fvhqHizx5NyZStNl99sT7BCtWt9wUFO5rSv722vAyMXQYlosVYJ17499vv+/+ZZCW1HyCrO54i0oioWHgGRYgfu0+Vz8O76d/3eDyJJZZQMgi1QBKWC3HEGGJRQMERozhmPRHdFQ3B9621fGutGcumWduYZRcn31JPaofZfL/fY8b2ELOsXdMMBVY0aAvD6ZtsplYdgG2KjehMtAkVDDAoq2htxAazEBUzMXJWzGTWNhPn5lIXzk9XLiLdpot6E3gUPP0/NSt/oYACfDkABWcabckGhxjXe3fTvQ6c5nCXcpRfnZwPUm0uGwXnXCY3d35kXZAoVqh399w7wwZIWcAJpzFFc/wx1t2fq+f9r9u/4VEHqqP5LqJjIxV1xqVi83en/yY30nMKTmQO2l7bpIN1OI0xWIkXzDdanJj7T9LHnrcEQxjsJpJ7GQDOrFdLt7sprR3z3NOaQ216o6n/UDRCnoOu9MdlUAiDkkiwGYBtin5ezPxm9LZvxgqjFgxRb8asWLjNjKmAjQWIWEiJxZQyCkWsQt3QtfObLgthGwjrfI2Ci7UD97mSRufMhOxKNEBS9k5+mJv3ucSIxsYAi0Uf9wbO+RR7W4uO8CmyqHhF+on+a4fngYeWGPyaBUAqbrCHAAJujHHMQgeep7VUL9P8BbzjuRAZ+5K2wqkYWXgexuWJI/8ReEMoDtWpLLf5n6oKplUqky5I+bg/Ir1SBF3oTuUOcCXlRmVqfaywt+HB7lvWLFtdbbaUTNFYEiwYut2vlySfVw7NsiygqgAUfAON7h6zs7uznuRzeffO8OWGP3wjBYmCUEF+YaZUoSKlqY7/OfufoajMnCMS76utH8BIdk03iVu6wPygeVU3r/YKmHJL+/l5tmn4EiRgDD8Ma3nosLd1eStdPK0Oh2i+mJoyQLiSlvJwrRkwvdcULCbOBWFz0SQIBlsWyx/iCkBgcm3om6U00TZPVK4/7qkyfa8zr/9L+tCz4G1Kt1NxKk47u6bXw6VeM/P1/nt6SOILkGxWYO9YFi5yywi5ybDlv/fEjpBxqCnd2bRGWpe+zI4Qy46QXGSxBbOtVbZ1NvXU6/nUyzWH2ynHXDPx+VTt/XaGAJ5BP8kpVStnOcSikeyi9endlIM7MwBmAFBEoJYEqQQ+aRXfEbmJm2yCkn0ovfU5lJzkmH5I1XcnySnu7s+56H7n3/6mqX/RFt9KU22BW0Dhn6/4zsqVY1OoYwl3qkoJxPltAifO+EnH0OXcwa5CYuuiM0/sJ+vbveYlWRqG0mXTpB+GsGayVAnSyeK735ktVRPKr4Y3tHPgLAmkQQvCMtd/EUiCvNMYETFeaDW/nX726LbbQadaMZMNxjJTASEUEDI7BDs4e/b4elxe3ZNsVsMdWbWKA10oqVA0SGkETQ6o/A/httjcGNr/iEUt6Aky8ZF0CYu6WyT1CNWamNmlEWbEEU48JUJW1u/E/96Z2ff+u/+IGKsqKiqqalxRcUUFcWX3b+bF/yQFXLh5UzgoFAqFQCCwsBA40T/+R8MAFuWpcrCptgyCVLgBFQa7
... [truncated]
```

- Endpoint: GET https://www.exteriores.gob.es/Style%20Library/PC/css/fontawesome-6.5.2/webfonts/fa-solid-900.woff2
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.exteriores.gob.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/Style%20Library/PC/css/fontawesome-6.5.2/webfonts/fa-solid-900.woff2"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "ApplicationGatewayAffinityCORS=de3d3e74fe6090e3024284440756cd7e; ApplicationGatewayAffinity=de3d3e74fe6090e3024284440756cd7e"
  },
  {
    "name": "origin",
    "value": "https://www.exteriores.gob.es"
  },
  {
    "name": "priority",
    "value": "u=0"
  },
  {
    "name": "referer",
    "value": "https://www.exteriores.gob.es/Style%20Library/PC/css/fontawesome-6.5.2/css/all.min.css"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "font"
  },
  {
    "name": "sec-fetch-mode",
    "value": "cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-origin"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "age",
    "value": "8556608"
  },
  {
    "name": "cache-control",
    "value": "max-age=86400, s-maxage=2592000"
  },
  {
    "name": "content-length",
    "value": "156400"
  },
  {
    "name": "content-security-policy",
    "value": "frame-ancestors 'self' teams.microsoft.com *.teams.microsoft.com *.skype.com *.teams.microsoft.us local.teams.office.com *.powerapps.com *.yammer.com *.officeapps.live.com *.office.com *.stream.azure-test.net *.microsoftstream.com *.dynamics.com *.microsoft.com onedrive.live.com *.onedrive.live.com;"
  },
  {
    "name": "content-type",
    "value": "application/font-woff2"
  },
  {
    "name": "date",
    "value": "Wed, 25 Jun 2025 11:34:12 GMT"
  },
  {
    "name": "etag",
    "value": "\"{9028C668-FA66-4933-BE84-EAD9E3AE6A5E},2pub\""
  },
  {
    "name": "last-modified",
    "value": "Tue, 30 Apr 2024 12:14:36 GMT"
  },
  {
    "name": "microsoftsharepointteamservices",
    "value": "16.0.0.5448"
  },
  {
    "name": "request-id",
    "value": "ac90aba1-979f-20d8-e2ea-60887423dbb3"
  },
  {
    "name": "sprequestguid",
    "value": "ac90aba1-979f-20d8-e2ea-60887423dbb3"
  },
  {
    "name": "tp-cache",
    "value": "hit"
  },
  {
    "name": "vary",
    "value": ""
  },
  {
    "name": "x-aspnet-version",
    "value": "4.0.30319"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-frame-options",
    "value": "SAMEORIGIN"
  },
  {
    "name": "x-ms-invokeapp",
    "value": "1; RequireReadOnly"
  }
]
```
  - Response body (trunc):

```json
d09GMgABAAAAAmLwAAoAAAAGHDkAAmKlAwUFAAAAAAAAAAAAAAAAAAAAAAAAAAAAATYCJAQgBmADq0QAgZEqypbGHMurSAWHbQcgJRwOk4ey+wAAqsB5AADYqp+HESmaPTxF5KzXA6CqqqqqqpqXEHBc2/aqCgAg+NFPfvaLX/3md3/wR3/yZ3/xV3/zd//wT//yb//xX//zf/8pMBh3/0CYlu243B6vz2/4j1++O3d+fkrdhNYeXWP7RNFVlaDwUdihdSVR8c9BNwJhU3d/GQtt6Uh3BmDp5ZsNAFywAmaHyNgGgVqnS5kaAEx8LvoTpU9ITTc9cCbHR5PoyCshv67gIsnss/q8HJbqwOSg93EQJ3sTNWzSZm8SW2sUh03hTbKtDwR+An8ELbDDJrc7E/CFKq5eUsWKduTqoUog/MvTbH9y8wb3hXaHppjKFzdBTHh4ZKt8CacVs6mpCMzC9uo/NSMI4SLns1dKiAoiSLBaOeig9iqm24JDDWGg90moiczUDbYyB7FwYdLG10citDt5/AlVrX9vUAYDzAxAoowkSiJFiICqxRFIwJbthHbkLdWXTSva1r3JFWcrL7nYybU41yq31tyWzmvd1zqv/9+3NGd3wePJyvmvXofXr9/r1yHN5J7pnendPL2zM723l+byXtKt7qTTnXSSRtJJOgXECqGIhEaIICHCgggCEwZkjAQGnwlJIA1gAwYbn8E2wWmdcfyy/W1wYPb/J1X93n1T3rwpb0pDIYgBhsCABQSGQ2BAUWUkUc2VrippSLG+XBLDa62PHTlr+Htd/4lNbyJHTkWq5cRnl6l2yvlBWlda5++OtymlfZ+A/4fTqvolKJWgxJYhTkuRI0WhtiLbSux2r4OT7gxkIJvOTd6thzhLvXvsI84cYY44dzzQtz7i7BF6EY5I+Xl+pvnvXMD37gOSRtKIR5qRNaMneuMhyyGqqaa6Gyfp2s4CerNAE5fIdiFALrE3C+xOkgKB+wm9JZD/f1pq/bsPqOoVYHc1VWNJFrhLrVbbjpW0k3GUTGRHmXEcXG8nGeQ4rOHkJDvrIdYQe4g1xPk8w/6AS9m/wG345+Fds/vwjzKNoOKIHXufdHZDLBU72ZBuK9ixY+1jJ32yYTdzElshK3aMnCzWjp1YMUc7BEEXurNViG9DXWS58P/Bz+bh3wcE8Y/vLikFD+Ie3IN6aHdaTNJiapkWc4EPgPP1bbsrmJr+kCtltFPY8HzpzCfZexcA+CEyHnLRBEvT5iyDVqPdEBVlMozdpU0PWLRc1IDw/Lfs2/Hz/64kRTcU8R5W4TcIzfEx2n2vXonu6Sb0308Koao3Vc+umL/EoFJQYDcFxRCDCw6HU1iJ1KuRDoeXHIRwwP/3S0vuFAFL8VwbmptlSPY/tcNvSeD3jDcFbc6TWk6Ss2acIosZq2fWQc7fudmqjAZuce0ih4SwAaCGBhjZ/3+/N+0/n6So1yiz+lav2sYW1WVbTdd6Ve6aa21jn72PcRsY5wIwLoAwLoAwLoAwgEDsvc/BxTnnXoD3AkEmoiEzEGQqg41yRASpLJLSyz/GuwBijEJEcIxCRNAIkjKCoozsjMxq+iClVJGU8n2S0vtflFTji6nf5au+C1ZLveqyvPe+9Z73zD/KKr/pLbM8o0yza1YzFWn+QylLPG7R+xQKhtO/MHMsAp50VRmu7lVhxmpJy4suUchfqytONjFgIfmqIsvqvZ193hIohQCJLctKz0Sc+UNqHYfMopM6k7Gktvve81ZrrSJCgGQywSLmqvuYBNGVSUzoUF38Iuqvpw+4+wNutBlt7CQesrR9iEtd0nYEb3jHKDwg7RAzte46dfq4F0d8REkURQKD+TAP7pMg6PX7XPv37OzjpctbzNlfALj6/4Xvb/5tJjdy3T7qNzCNUS2k3IJ+5zpY5EZu2MeT+NfZ/TXud+iv6Sv7DpQywdz2hPV6r+iD7ugpcH29oS0O8QqMmR7Lp6jh11pWH927S3AyU4+r9JvbUn5OtKpvQAEF4LmhCnJmFaDIsSqNHESO5TmQ51iR
... [truncated]
```

- Endpoint: GET https://www.exteriores.gob.es/Style%20Library/PC/fonts/open-sans-v16-cyrillic-ext_cyrillic_vietnamese_greek_latin-ext_latin_greek-ext-700.woff2
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.exteriores.gob.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/Style%20Library/PC/fonts/open-sans-v16-cyrillic-ext_cyrillic_vietnamese_greek_latin-ext_latin_greek-ext-700.woff2"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "ApplicationGatewayAffinityCORS=de3d3e74fe6090e3024284440756cd7e; ApplicationGatewayAffinity=de3d3e74fe6090e3024284440756cd7e"
  },
  {
    "name": "origin",
    "value": "https://www.exteriores.gob.es"
  },
  {
    "name": "priority",
    "value": "u=0"
  },
  {
    "name": "referer",
    "value": "https://www.exteriores.gob.es/Style%20Library/PC/css/stylesPCMain.min.css"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "font"
  },
  {
    "name": "sec-fetch-mode",
    "value": "cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-origin"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "age",
    "value": "8556608"
  },
  {
    "name": "cache-control",
    "value": "max-age=86400, s-maxage=2592000"
  },
  {
    "name": "content-length",
    "value": "44988"
  },
  {
    "name": "content-security-policy",
    "value": "frame-ancestors 'self' teams.microsoft.com *.teams.microsoft.com *.skype.com *.teams.microsoft.us local.teams.office.com *.powerapps.com *.yammer.com *.officeapps.live.com *.office.com *.stream.azure-test.net *.microsoftstream.com *.dynamics.com *.microsoft.com onedrive.live.com *.onedrive.live.com;"
  },
  {
    "name": "content-type",
    "value": "application/font-woff2"
  },
  {
    "name": "date",
    "value": "Wed, 25 Jun 2025 11:34:12 GMT"
  },
  {
    "name": "etag",
    "value": "\"{453E2CE0-7EFE-485E-86D7-5A58DA313CA3},2pub\""
  },
  {
    "name": "last-modified",
    "value": "Wed, 01 Jul 2020 13:12:10 GMT"
  },
  {
    "name": "microsoftsharepointteamservices",
    "value": "16.0.0.5448"
  },
  {
    "name": "request-id",
    "value": "ac90aba1-37a0-20d8-e2ea-6cd45c59d5e6"
  },
  {
    "name": "sprequestguid",
    "value": "ac90aba1-37a0-20d8-e2ea-6cd45c59d5e6"
  },
  {
    "name": "tp-cache",
    "value": "hit"
  },
  {
    "name": "vary",
    "value": ""
  },
  {
    "name": "x-aspnet-version",
    "value": "4.0.30319"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-frame-options",
    "value": "SAMEORIGIN"
  },
  {
    "name": "x-ms-invokeapp",
    "value": "1; RequireReadOnly"
  }
]
```
  - Response body (trunc):

```json
d09GMgABAAAAAK+8ABEAAAABimwAAK9ZAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGi4bEByBVgZgAIcICIEqCY9gEQwKhYwshLlWC44OAAE2AiQDnAoEIAWDQge6NQyBeFvaWJED5cbupusRXBCQbkMgCw1XV+f/5ypQju0kqJ1S5Wij7bUBTLhL4DwA6XwvR8z+/////zckizFWs4vOLoBQ6GlWled9D5r0GFOUlkEjisPgkTGKqbaaYs1VTJdyjYiILEg9xZo9LGH2qWMZ4U/QKjYYLoXSgjuHStIk5U0hmW9ivzPexTznOqEpDyUHXuWKHdTbZsoTK6wrZshX6Y50dy9msOYNjDAY3Vj7vJhiyk1QWUDtJd/xo6YDDCvqS2yUB8N+n7DQ6QZDqcKUh3bAZENWSJ2n4Q7fGV9peSeRXkajJWdHjXBSrMxPSwydwt9jKUX+ScpdMvwpyybch8uxKqRGqmQ4qc1UO9xAfvB5ED/SZJankbiIE6drc9f7YPWCB3eUf33POTfkwUiVDP9dRRb+rZXnUfHVm8pwDpr/B9p4vmprTW4VaYTLDGqt8UAOyMHUOaTrfyq/NlqO13Sq5FhWgbHLZsSqOvHCf69/8L/PJLlPUm3o/6KlVMOlfFcy8+/mv5B7A4HYJUSJvhJzIKIXiZPkGeeXmjP3U1tNlqln92EU0WHvMHYAtg0fbwYV9BEQEARkFPFwwFmcmZxNM6fyPi/ULHPTsrM567XxMpu3X3jXfIeff/j9Ib/2OwjlhvuHXHETipevm5ILvSD5Lkpw4aQGCZILwY2bElzz90K4Re7oBX8JwTUIJYrE4saxcEyKCz8FIPB/Oss/M7YXSD4gXZJRJnbshSCONRpZPi2BFJSMchiV6vbpoChT1F8b8l6wxaLHMlsGuuOf93fn/jebWmWNqKRqNDgA93qLxqDt7sjem4ZkXi15Vs+fFUiB9BHRUIhikVCpNLE706UoVBfbcBDIIGN3r8+jPzXn/5+ZAZWZc0Di+7VvS1ttECxJN9HoLV3gbCD3r/TmrWptlNfqz1/qGQcoohWuFjlcuzXm+xlj2dxondAtvWgofCqIx7E23287cJGoTHCOs27RA7dRsUb4Ird+s1YIQP+wOcjU1R73WXmlFSmNUthqcqek/2um1Qc+nC0Uqnx7ekk94jhDnSP1tE2N2/RMkG0Q7qThBtGN6mXHWXmg/i/V9AODVmYG0zBoRCHBIglaYmU/pglp1Eam3K9JTpfkenC/ev02svsxNxseso63OC2AJAt+wIdTZ15F/O9UXvqUIsNm3Y7nzRM4wrVXSsn/zWxMoV2Bt033D7QkSHhfp0F89GVP5dQPc5aSfVTLKTLOjJaTXLaYJbAzz19/gByR7ULCOQBAsKhWCRAgAEZQlChtiH/3oXMqGlez5/W47H374bMywNZuzPhutSL4QYtLa/ud2ZdA6oRE+woRT2ID3348r79nngft7Q9WjGRCzZgJq2b0FIRCta1lOEQQ4UPphvhlWAou1g7c50qCsQmCVjt3cF7IeeaN/79XV23/tyyQgerBVAdPho6mI13nzJ4OIS1n12e28f/73v1P+kHhy8KyhMv2F0HINGXJ0BiZgv/+lxlZeM6AO6QEk6ItuygjwhgZKFegCkxFOuTkZhLVsaompFVez2yWs1tO1UxexsVu3Wd2c2Y1Z/5vaUpndvZbK91KLp1lje6YDZjkANQYmPkzo9VskW6LSkvRuTWlVclyK3swpaKEhYa1hv14AA8gjSAWQEn8T1VdQTzAhSBTSt9yGTZr04iR0yhR+Ecf8b+bqPS65Xy75TQoE5PJY9YlPLGfrP/di5dkaRhKl02TfhiipRiqBMMLqA6jAfmSBfimOf22N3tXIAnjmyiEzdr4Fp55f1d7f7X/25a9oLWxGmP4BPJDAtExue0R2i6UV5HqMOveebQzYkXE+m5f38eJb2av2YpGmiJcRERERIKEEEQuzf9sP/6WjiK9TsSRYBGiT5Jj9rdD1nRY0H7O/bbb7GMVfjUK8uW5S3IEtoUQBE1F
... [truncated]
```

- Endpoint: GET https://www.exteriores.gob.es/Style%20Library/PC/css/fontawesome-6.5.2/webfonts/fa-brands-400.woff2
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.exteriores.gob.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/Style%20Library/PC/css/fontawesome-6.5.2/webfonts/fa-brands-400.woff2"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "ApplicationGatewayAffinityCORS=de3d3e74fe6090e3024284440756cd7e; ApplicationGatewayAffinity=de3d3e74fe6090e3024284440756cd7e"
  },
  {
    "name": "origin",
    "value": "https://www.exteriores.gob.es"
  },
  {
    "name": "priority",
    "value": "u=0"
  },
  {
    "name": "referer",
    "value": "https://www.exteriores.gob.es/Style%20Library/PC/css/fontawesome-6.5.2/css/all.min.css"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "font"
  },
  {
    "name": "sec-fetch-mode",
    "value": "cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-origin"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "age",
    "value": "8556608"
  },
  {
    "name": "cache-control",
    "value": "max-age=86400, s-maxage=2592000"
  },
  {
    "name": "content-length",
    "value": "117852"
  },
  {
    "name": "content-security-policy",
    "value": "frame-ancestors 'self' teams.microsoft.com *.teams.microsoft.com *.skype.com *.teams.microsoft.us local.teams.office.com *.powerapps.com *.yammer.com *.officeapps.live.com *.office.com *.stream.azure-test.net *.microsoftstream.com *.dynamics.com *.microsoft.com onedrive.live.com *.onedrive.live.com;"
  },
  {
    "name": "content-type",
    "value": "application/font-woff2"
  },
  {
    "name": "date",
    "value": "Wed, 25 Jun 2025 11:34:13 GMT"
  },
  {
    "name": "etag",
    "value": "\"{7ABC6EB2-F499-45F1-8020-9ADE3193495E},2pub\""
  },
  {
    "name": "last-modified",
    "value": "Tue, 30 Apr 2024 12:15:10 GMT"
  },
  {
    "name": "microsoftsharepointteamservices",
    "value": "16.0.0.5448"
  },
  {
    "name": "request-id",
    "value": "ac90aba1-d7a0-20d8-e2ea-6ad113693ace"
  },
  {
    "name": "sprequestguid",
    "value": "ac90aba1-d7a0-20d8-e2ea-6ad113693ace"
  },
  {
    "name": "tp-cache",
    "value": "hit"
  },
  {
    "name": "vary",
    "value": ""
  },
  {
    "name": "x-aspnet-version",
    "value": "4.0.30319"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-frame-options",
    "value": "SAMEORIGIN"
  },
  {
    "name": "x-ms-invokeapp",
    "value": "1; RequireReadOnly"
  }
]
```
  - Response body (trunc):

```json
d09GMgABAAAAAcxcAAoAAAADGGUAAcwPAwUFAAAAAAAAAAAAAAAAAAAAAAAAAAAAATYCJAQgBmADkGwApjrKi944y5BwBYgdByAlMoxx7IDU4DwAANTWnwdlRE9aLR4AVVVVjwnB3av2AxB++uU3v/vDn/7yt3/86z//+8vA2B0Qy3Zczzf8/zeW3vezGyK0hSmzrCMQcop6hYyQBZJTguMrAV3CLf8l3DIPL9p7sRUmos5EzIt8J0aSK2UKDyCdXy/rIrMgT5K7H3NQk54A/9Q7fc9V+qyRJ1ZIsQocUIE2YBWQ7CL+MaiA+PegiLArr0vOT+/Mr69ToBJUyZalUhm627ZkS93ssmwp3SEn6exNhpILnNn0Ag7d5aGe9RBnib1A7CX4I+zHOGz/PL+vZvec68/0i7//36vy/769qq6u7mqxGe8ec2aGmQGfQSxpYDANJEEmNBIDEoguEAKNJWRjs2wgG3RisrvEiVDlhzlf/n1mRiPJMiaG5HKTNu69JatJ7AfEK1rRjj4irABgRbQEgPYnnFo/bzQzArTAssAoS3IcsmzLctKkTZPdlGD3sk17XaAsYy9HxP2/R9BDovT++VXqd1XdW3XpATfPTPdM9+Buv8YlrcBy1pZJMsTCWAEpwLITdqIQsXMIN8n/DjGP/kJV+327i10AC2BROkGCIEVCjRIhVtmWLTnVjuSW+qVcXFKafbXqmi/XetefS+77t94knueB/Vr3YRVnZSL6TzU2VmPPtIErZ50MdMIujMbGRg9rJ1b/9fzdNTASBJCz0hzxJCaJE0TA89/c551ktwD4SjT5wG7x+LINTOBDJiczy8rXuApdo2s0+d+XpfXtCZBfKIn/R+QIuW7WaLlVq9HrPuc+X9z3PMzmeUQuPCJz4ZGJhUcCC48EFp4APRJZtMgEWJYAWW0gi93DYte3Eq1ANvsbq2a0B0CzjgS+8ABoNpHkCE9wRIAckWz2glVlIKu+KGE2ZCtZ6ouyrlHVNUosv81iN6vd7MGqWrCqeuRiNfvdbFZSr8bGUIO0/bE1cSEcmN8qY4L3zCk+LKVJiiqytO2+ty1fCAGcWJY8lXDaI3RN0gAd2LLkmciyvGx7ufbPgnlDwNiyNBrZJOa+v7vfmk+QooiwZFMmk28STqy29wRpwA44hvWuYDTSXQuCvGyW87eerj1esWaFEvsPAMsfp17cePt2fMnvWU5vgUKs1Ve3HKO3fg/ssi/5nOVKih/+TmvpPWMtmX0MFLDlQM3LZ/RZObKg3ToBbMs/0QpNXAMjm9flearkw4gNxw7tIdHlLseS3rJrlFmijboJdIIiEHxJCRQoVgRF/69EpQII/6/gfxT8v6L/zWuoX0jjCG00loeV/yuB+ymK/qtf086lNuv00+gsG0510c77301ksyaL+nhrov8xKLU+1PoppiUGHUpkLeynzRZ9Rb44+d86HLOdNS4nGBQYlPa1qtSg0sZPDGbqtaP/bhO594fy27n0f8N/WqDXoKKOqScyxrWGzMOV5SstFjGZ2CfbpPlKFB6PL6NxjuL/LPRn5nHqNOjLzXOh3YEy934eB2OpIhkLVCj6v7paebyRN4bOb+18BbkSRTJ90radIqNs/hJtIiVdoZxz3FYtGV1h/hdV6LsZKyzcD7bVgQIl2jmQKdhcsKnMR+wels49MdznUSVSpUShBcoMzKBxzgYPLrRfNzUysa4blWWlXIkaueICizY7gkFGHhk3sFViwX/vD82PJbq9SQyKFJDsGxn6eKiB1Y1Rwn2cVZpTg3amjr47drTQoLqvglwvrVOBZsN/GZT0IX079adFxxvvx4MuRa64VKn9SoEF8uQbLrR1BwNr1MsKhv8exzb6C467X/p1FX5FXMDfjR7a/tfiEnGzMO8/bVIcw1mdGDvlj4wd+tA+Wm9DYj4ttEjtfN1sXfe+P52tp391tRgox63Y4iJK/tv2U6hcm06k1T4XaVKkUxFTDJEy7SwH9hA7Oo2ax6LIK/uuM/6Y42qYbnVSB/4XpAsJ6WdJOXc8pQUGdZh087r7
... [truncated]
```

- Endpoint: GET https://www.exteriores.gob.es/Style%20Library/PC/fonts/open-sans-v16-cyrillic-ext_cyrillic_vietnamese_greek_latin-ext_latin_greek-ext-300.woff2
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.exteriores.gob.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/Style%20Library/PC/fonts/open-sans-v16-cyrillic-ext_cyrillic_vietnamese_greek_latin-ext_latin_greek-ext-300.woff2"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "ApplicationGatewayAffinityCORS=de3d3e74fe6090e3024284440756cd7e; ApplicationGatewayAffinity=de3d3e74fe6090e3024284440756cd7e"
  },
  {
    "name": "origin",
    "value": "https://www.exteriores.gob.es"
  },
  {
    "name": "priority",
    "value": "u=0"
  },
  {
    "name": "referer",
    "value": "https://www.exteriores.gob.es/Style%20Library/PC/css/stylesPCMain.min.css"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "font"
  },
  {
    "name": "sec-fetch-mode",
    "value": "cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-origin"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "age",
    "value": "8556608"
  },
  {
    "name": "cache-control",
    "value": "max-age=86400, s-maxage=2592000"
  },
  {
    "name": "content-length",
    "value": "44352"
  },
  {
    "name": "content-security-policy",
    "value": "frame-ancestors 'self' teams.microsoft.com *.teams.microsoft.com *.skype.com *.teams.microsoft.us local.teams.office.com *.powerapps.com *.yammer.com *.officeapps.live.com *.office.com *.stream.azure-test.net *.microsoftstream.com *.dynamics.com *.microsoft.com onedrive.live.com *.onedrive.live.com;"
  },
  {
    "name": "content-type",
    "value": "application/font-woff2"
  },
  {
    "name": "date",
    "value": "Wed, 25 Jun 2025 11:34:12 GMT"
  },
  {
    "name": "etag",
    "value": "\"{DA9A448E-7EDA-4A46-8A1F-9315F847FE34},2pub\""
  },
  {
    "name": "last-modified",
    "value": "Wed, 01 Jul 2020 13:11:53 GMT"
  },
  {
    "name": "microsoftsharepointteamservices",
    "value": "16.0.0.5448"
  },
  {
    "name": "request-id",
    "value": "ac90aba1-479f-20d8-e2ea-643d2df9a4c4"
  },
  {
    "name": "sprequestguid",
    "value": "ac90aba1-479f-20d8-e2ea-643d2df9a4c4"
  },
  {
    "name": "tp-cache",
    "value": "hit"
  },
  {
    "name": "vary",
    "value": ""
  },
  {
    "name": "x-aspnet-version",
    "value": "4.0.30319"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-frame-options",
    "value": "SAMEORIGIN"
  },
  {
    "name": "x-ms-invokeapp",
    "value": "1; RequireReadOnly"
  }
]
```
  - Response body (trunc):

```json
d09GMgABAAAAAK1AABEAAAABgQgAAKzcAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGi4bEByBVgZgAIcICIEqCY80ERAKhPlohKwoC44KAAE2AiQDnAIEIAWDPAe6DQyCOlsQUpFA5Mbu51TBoNJNBsR7T+d3XRLLAuX2EW4HuWz2vaiAHXsEdAc4l1p1QOX/////3KQxxtoO2x1CiJrWR9lDlgSH2CGWBEX2oNlLuFgVs4ckQ0q4twbREr2v3TfMvlvupszQZI/9aIbDKUi878XPihnip1NlxQsNK+WUnTutKcfTFGTFZobwp5Y3obzbfXwKipX5S7PToAqft5Q8fTGXBzaXo0eHjOBVKREkv35LwflPBUHZ+D5wJA403uH2DN2G79i0sbiw4MpKeOPispFzxk7rmjxqEwT9WCRLVW5IxoDgEBzukCDq6E7hCHxoIYfTncQFjgtXPp0LOwkuM8xuloGXvvSutX84C2V0yjGrFWQq+dwo4zAioSac1Ix/eqRV221N6Ee+D8dxHp22BXmynq4JPk/zusnV+rbv50flhjMdRrmscLdeKY+pZjRrvDDTP4IuWsaR69OoW7bGFMNYBsYugxLRYsQ6L/zL+/fP/0gyk7UfhRJUR1T8ReNSrGide1YOSLearWCIGDDIYYQEaYlYqYdICwFCaRFCPf6lNOE4Psb+IsdhOQ85bJX+iLzSbi2N1jRix5aE1m1YQwbAbWIq4kfFj4/juaDieaDgAwRBQEREniAqCj68L98rb/bsW5rSufatzOys68rs2d1qnVVb87r1VnyYOjK3vvV1Q8TPAgQId5dgOdHvBmNrbitQoqWxvQTgtbMqC+cP58jCw1YYyFmWRBrIBh5BDbi/SLOxB3QEd8FBIU2N2F9maf3Lelmpq1JVVpbqru4eoUAMiCa4nFPdpxqNmcFhjz4Ca3jYMyzQ8HiGt2t4QprESYs49b99PMNbBJ2KMGOnx1+N5hTWTAhTIM49FXAoea3uiwh48G2WB2TzALDxm/AoyC/S7BZ1mjJtv7qJa6LNfPfCq/iqXCbQBMfgYMG4zneM8fifqgqkVSmTLkj5uD8yvVIEXehO5Q5wBeVGZfKU9LHC3oYHu29Zs2x1tR+2va1MGclLfiACAW99zS6HHVRXJUu2sTG25JDkJMsZA2Zgllk2wSbwDhfT/OfyUlHdF91+0X1Rhlx+rmJVPg/vZkLJ+UM71Mz0khl3qAr9/k+n3j8ZCGSQQqAQXEgmVADlANkpooowTN272VuBhqVdpr5ueZ3a1UemWlV12W4/PRgYghQorjO4ex89FUkQucble1GoMPwg/P/n9m9xMfD3NID21iw7xvFh5Kt9/K24wc5/gLZZLVzrqtrEJSYmyKNiZCFR2ogIHlaA1Yg2VmI0duwPc/rfyLLdeEaK4+Yv8okAZMtN+psC5wEn9lycdDF5XT4ikKHwCW57pRCAWrrIioh/iq5Pc3O+uVftfZHk+5wkKZ6oeC1Z7MnmuA/H0Dw9hSN6B7a1ep/P1LK0iugeNWdIabhy1MpCdkbGBgkp45JUSVL9qwrVVd0N02hwgAaxi2kQNOAYEJyRwJnVPjQI6YHc2fdISWecC8+TlDMmvdzZJL4gyy4IL4iT+3tTzXZBYKkVwxlypO7OsSIdpXHRSLLolDqPiyZ1efH27z5gCYAQSOlIUNKBoOSjIPNMggoQcJL3/w94gCXlEUk5SI6hiokEL4DhbkiA1PGgTMkpZAWHnLpUVa7KlCpXsW1cti66eLnUqKTVpZyslObPxN8bYBHLM0EjGMt7o5m73TTb3yv7ByQXJAfVL7zD5+FjbdW1vw88EQO1uZx4CReaSSN25kKDJ/aT9b978ZIsDUPp4tciDkRcKYZqaB5rSjkww5CCmhAWEAsES8rWe71u6LfV3wAy61Yhi0W05BDCEKNislf58XkfX8a99H9Djac3Vyj/9scukSAiIYi3cisdKx1ziG32bKCrz611v6kLo7ARg4lI1AV1d4g6h3KzGBqB+q7TrRhtBBpKEKtyqEdsJH7yP2ja
... [truncated]
```

- Endpoint: GET blob:https://www.exteriores.gob.es/01dade6f-931f-45b8-95d7-302eea1dbcbf
  - Status: 200
  - Request headers:

```json
[
  {
    "name": "Accept",
    "value": "*/*"
  },
  {
    "name": "User-Agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "Content-Type",
    "value": "application/javascript"
  },
  {
    "name": "Content-Length",
    "value": "10252"
  }
]
```
  - Response body (trunc):

```json
const e="GENERATE_POLYGON_BUFFERS",t="GENERATE_POINT_BUFFERS",n="GENERATE_LINE_STRING_BUFFERS";function r(e,t){const n=t[0],r=t[1];return t[0]=e[0]*n+e[2]*r+e[4],t[1]=e[1]*n+e[3]*r+e[5],t}function x(e,t){const n=(r=t)[0]*r[3]-r[1]*r[2];var r;!function(e,t){if(!e)throw new Error(t)}(0!==n,"Transformation matrix cannot be inverted");const x=t[0],i=t[1],u=t[2],o=t[3],f=t[4],s=t[5];return e[0]=o/n,e[1]=-i/n,e[2]=-u/n,e[3]=x/n,e[4]=(u*s-o*f)/n,e[5]=-(x*s-i*f)/n,e}function i(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}new Array(6);var u={exports:{}};function o(e,t,n){n=n||2;var r,x,i,u,o,s,l,v=t&&t.length,c=v?t[0]*n:e.length,h=f(e,0,c,n,!0),g=[];if(!h||h.next===h.prev)return g;if(v&&(h=function(e,t,n,r){var x,i,u,o=[];for(x=0,i=t.length;x<i;x++)(u=f(e,t[x]*r,x<i-1?t[x+1]*r:e.length,r,!1))===u.next&&(u.steiner=!0),o.push(d(u));for(o.sort(p),x=0;x<o.length;x++)n=y(o[x],n);return n}(e,t,h,n)),e.length>80*n){r=i=e[0],x=u=e[1];for(var b=n;b<c;b+=n)(o=e[b])<r&&(r=o),(s=e[b+1])<x&&(x=s),o>i&&(i=o),s>u&&(u=s);l=0!==(l=Math.max(i-r,u-x))?32767/l:0}return a(h,g,n,r,x,l,0),g}function f(e,t,n,r,x){var i,u;if(x===O(e,t,n,r)>0)for(i=t;i<n;i+=r)u=P(i,e[i],e[i+1],u);else for(i=n-r;i>=t;i-=r)u=P(i,e[i],e[i+1],u);return u&&m(u,u.next)&&(B(u),u=u.next),u}function s(e,t){if(!e)return e;t||(t=e);var n,r=e;do{if(n=!1,r.steiner||!m(r,r.next)&&0!==M(r.prev,r,r.next))r=r.next;else{if(B(r),(r=t=r.prev)===r.next)break;n=!0}}while(n||r!==t);return t}function a(e,t,n,r,x,i,u){if(e){!u&&i&&function(e,t,n,r){var x=e;do{0===x.z&&(x.z=b(x.x,x.y,t,n,r)),x.prevZ=x.prev,x.nextZ=x.next,x=x.next}while(x!==e);x.prevZ.nextZ=null,x.prevZ=null,function(e){var t,n,r,x,i,u,o,f,s=1;do{for(n=e,e=null,i=null,u=0;n;){for(u++,r=n,o=0,t=0;t<s&&(o++,r=r.nextZ);t++);for(f=s;o>0||f>0&&r;)0!==o&&(0===f||!r||n.z<=r.z)?(x=n,n=n.nextZ,o--):(x=r,r=r.nextZ,f--),i?i.nextZ=x:e=x,x.prevZ=i,i=x;n=r}i.nextZ=null,s*=2}while(u>1)}(x)}(e,r,x,i);for(var o,f,p=e;e.prev!==e.next;)if(o=e.prev,f=e.next,i?v(e,r,x,i):l(e))t.push(o.i/n|0),t.push(e.
... [truncated]
```

- Endpoint: GET https://www.google.com/cse/static/element/6467658b9628de43/cse_element__es.js?usqp=CAI%3D
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.google.com"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/cse/static/element/6467658b9628de43/cse_element__es.js?usqp=CAI%3D"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "referer",
    "value": "https://www.exteriores.gob.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "cross-site"
  },
  {
    "name": "sec-fetch-storage-access",
    "value": "active"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "alt-svc",
    "value": "h3=\":443\"; ma=2592000,h3-29=\":443\"; ma=2592000"
  },
  {
    "name": "cache-control",
    "value": "private, max-age=31536000"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "99004"
  },
  {
    "name": "content-security-policy-report-only",
    "value": "require-trusted-types-for 'script'; report-uri https://csp.withgoogle.com/csp/prose-team"
  },
  {
    "name": "content-type",
    "value": "text/javascript"
  },
  {
    "name": "cross-origin-opener-policy-report-only",
    "value": "same-origin; report-to=\"prose-team\""
  },
  {
    "name": "cross-origin-resource-policy",
    "value": "cross-origin"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:22 GMT"
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 12:24:22 GMT"
  },
  {
    "name": "last-modified",
    "value": "Fri, 22 Aug 2025 13:46:12 GMT"
  },
  {
    "name": "link",
    "value": "<https://www.adsensecustomsearchads.com>; rel=\"preconnect\""
  },
  {
    "name": "report-to",
    "value": "{\"group\":\"prose-team\",\"max_age\":2592000,\"endpoints\":[{\"url\":\"https://csp.withgoogle.com/csp/report-to/prose-team\"}]}"
  },
  {
    "name": "server",
    "value": "sffe"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-xss-protection",
    "value": "0"
  }
]
```
  - Response body (trunc):

```json
(function(){var f,aa=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},ba=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a},ea=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");
},ha=ea(this),ia=function(a,b){if(b)a:{var c=ha;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&b!=null&&ba(c,a,{configurable:!0,writable:!0,value:b})}};
ia("Symbol",function(a){if(a)return a;var b=function(g,h){this.pr=g;ba(this,"description",{configurable:!0,writable:!0,value:h})};b.prototype.toString=function(){return this.pr};var c="jscomp_symbol_"+(Math.random()*1E9>>>0)+"_",d=0,e=function(g){if(this instanceof e)throw new TypeError("Symbol is not a constructor");return new b(c+(g||"")+"_"+d++,g)};return e},"es6","es3");
ia("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=ha[b[c]];typeof d==="function"&&typeof d.prototype[a]!="function"&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return la(aa(this))}})}return a},"es6","es3");
var la=function(a){a={next:a};a[Symbol.iterator]=function(){return this};return a},na=typeof Object.create=="function"?Object.create:function(a){var b=function(){};b.prototype=a;return new b},pa;if(typeof Object.setPrototypeOf=="function")pa=Object.setPrototypeOf;else{var ta;a:{var xa={a:!0},ya={};try{ya.__proto__=xa;ta=ya.a;break a}catch(a){}ta=!1}pa=ta?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var za=pa,p=function(a,b){a.p
... [truncated]
```

- Endpoint: GET https://www.google.com/cse/static/element/6467658b9628de43/default+es.css
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.google.com"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/cse/static/element/6467658b9628de43/default+es.css"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "text/css,*/*;q=0.1"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "priority",
    "value": "u=0"
  },
  {
    "name": "referer",
    "value": "https://www.exteriores.gob.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "style"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "cross-site"
  },
  {
    "name": "sec-fetch-storage-access",
    "value": "active"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "alt-svc",
    "value": "h3=\":443\"; ma=2592000,h3-29=\":443\"; ma=2592000"
  },
  {
    "name": "cache-control",
    "value": "private, max-age=31536000"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "9068"
  },
  {
    "name": "content-security-policy-report-only",
    "value": "require-trusted-types-for 'script'; report-uri https://csp.withgoogle.com/csp/prose-team"
  },
  {
    "name": "content-type",
    "value": "text/css"
  },
  {
    "name": "cross-origin-opener-policy-report-only",
    "value": "same-origin; report-to=\"prose-team\""
  },
  {
    "name": "cross-origin-resource-policy",
    "value": "cross-origin"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:21 GMT"
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 12:24:21 GMT"
  },
  {
    "name": "last-modified",
    "value": "Fri, 22 Aug 2025 13:46:12 GMT"
  },
  {
    "name": "link",
    "value": "<https://www.adsensecustomsearchads.com>; rel=\"preconnect\""
  },
  {
    "name": "report-to",
    "value": "{\"group\":\"prose-team\",\"max_age\":2592000,\"endpoints\":[{\"url\":\"https://csp.withgoogle.com/csp/report-to/prose-team\"}]}"
  },
  {
    "name": "server",
    "value": "sffe"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-xss-protection",
    "value": "0"
  }
]
```
  - Response body (trunc):

```json
/** Copyright 2005 Google Inc. All rights reserved. */

/* the GSearchControl CSS Classes
 * .gsc-control: the primary class of the control
 */
.gsc-control {
  width: 300px;
}

.gsc-control div {
  position: static;
}

/* Slight reset to make the preview have ample padding. */
.gsc-control-cse {
  padding: 1em;
}

.gsc-control-cse,
.gsc-control-cse .gsc-table-result {
  width: auto;
  font-family: Arial, sans-serif;
  font-size: 13px;
}

.gsc-control-wrapper-cse {
  width: 100%;
}

/* control inputs
 * .gsc-search-box: the container that hosts the text input area
 * .gsc-input: the text input area
 * .gsc-keeper: the save link below savable results
 */
form.gsc-search-box {
  font-size: 13px;
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 4px;
  margin-left: 0;
  width: 100%;
}

/*
 * This table contains the input element as well as the search button
 * Note that the search button column is fixed width, designed to hold the
 * button div's background image
 */
table.gsc-search-box {
  border-style: none;
  border-width: 0;
  border-spacing: 0 0;
  width: 100%;
  margin-bottom: 2px;
}

table.gsc-search-box td {
  vertical-align: middle;
}

table.gsc-search-box td.gsc-input {
  padding-right: 12px;
}

.gsc-search-button {
  width: 1%;
}

.gsc-search-button-v2 svg {
  fill: #fff;
}

/* Firefox button fix */
button::-moz-focus-inner {
  padding: 0;
  border: 0;
}

.gsc-clear-button {
  width: 14px;
}

.gsc-branding,
.gcsc-branding {
  display: -ms-flexbox;
  display: flex;
  justify-content: flex-end;
  padding: 4px;
}

.gsc-branding-text,
.gcsc-branding-text {
  vertical-align: top;
  padding-bottom: 2px;
  text-align: right;
  font-size: 11px;
  margin-right: 2px;
  color: #666;
}

.gsc-branding-text:first-child,
.gcsc-branding-text:first-child {
  flex-grow: 1;
}

.gsc-branding-img-noclear,
.gcsc-branding-img-noclear {
  width: 51px;
  vertical-align: bottom;
}

.gsc-branding-img,
.gcsc-branding-img {
  width: 65px;
  vertical-align: bottom;
}

.gsc-branding-youtube .gsc-branding-img-noclear {
  width: 55px
... [truncated]
```

- Endpoint: GET https://www.google.com/cse/static/style/look/v4/default.css
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.google.com"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/cse/static/style/look/v4/default.css"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "text/css,*/*;q=0.1"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "priority",
    "value": "u=0"
  },
  {
    "name": "referer",
    "value": "https://www.exteriores.gob.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "style"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "cross-site"
  },
  {
    "name": "sec-fetch-storage-access",
    "value": "active"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "age",
    "value": "2092"
  },
  {
    "name": "alt-svc",
    "value": "h3=\":443\"; ma=2592000,h3-29=\":443\"; ma=2592000"
  },
  {
    "name": "cache-control",
    "value": "public, max-age=3000"
  },
  {
    "name": "content-encoding",
    "value": "br"
  },
  {
    "name": "content-length",
    "value": "1094"
  },
  {
    "name": "content-security-policy-report-only",
    "value": "require-trusted-types-for 'script'; report-uri https://csp.withgoogle.com/csp/prose-team"
  },
  {
    "name": "content-type",
    "value": "text/css"
  },
  {
    "name": "cross-origin-opener-policy-report-only",
    "value": "same-origin; report-to=\"prose-team\""
  },
  {
    "name": "cross-origin-resource-policy",
    "value": "cross-origin"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 11:49:29 GMT"
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 12:39:29 GMT"
  },
  {
    "name": "last-modified",
    "value": "Thu, 10 Jul 2025 15:30:00 GMT"
  },
  {
    "name": "report-to",
    "value": "{\"group\":\"prose-team\",\"max_age\":2592000,\"endpoints\":[{\"url\":\"https://csp.withgoogle.com/csp/report-to/prose-team\"}]}"
  },
  {
    "name": "server",
    "value": "sffe"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-xss-protection",
    "value": "0"
  }
]
```
  - Response body (trunc):

```json
/**
 * Default Theme, v4.
 *
 */

/* Selector for entire element. */
.gsc-control-cse {
  background-color: #fff;
  border: 1px solid #fff;
}

.gsc-control-cse .gsc-table-result {
  width: auto;
}

.gsc-resultsHeader {
  border: block;
}

/* Search input */
.gsc-input {
  font-size: 16px;
}

/* Hide clear input X added by MSIE. */
.gsc-input::-ms-clear {
  display: none;
  height: 0;
  width: 0;
}

.gsc-input-box {
  border: 1px solid #dfe1e5;
  background: #fff;
}

.gsc-search-box .gsc-input>input:focus,
.gsc-input-box-focus {
  border: 1px solid #4d90fe;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, .3);
  outline: none;
}

/* Search button */
.gsc-search-button-v2 {
  font-size: 0;
  padding: 6px 27px;
  width: auto;
  vertical-align: middle;

  border: 1px solid #666;
  border-radius: 2px;

  border-color: #3079ed;
  background-color: #4d90fe;
  background-image: linear-gradient(top, #4d90fe, #4787ed);
}

.gsc-search-button-v2:hover {
  border-color: #2f5bb7;
  background-color: #357ae8;
  background-image: linear-gradient(top, #4d90fe, #357ae8);
}

.gsc-search-button-v2 svg {
  fill: #fff;
}

/* Firefox button fix */
button::-moz-focus-inner {
  padding: 0;
  border: 0;
}

/* Inactive tab */
.gsc-tabHeader.gsc-tabhInactive {
  color: #666;
}

/* Active tab */
.gsc-tabHeader.gsc-tabhActive {
  border-bottom: 2px solid #1a73e8;
  color: #1a73e8;
}

.gsc-refinementHeader {
  text-decoration: none;
  color: #666;
  font-weight: bold;
  line-height: 27px;
  margin-right: 0;
}

.gsc-refinementHeader.gsc-refinementhActive {
  border-bottom: 2px solid #1a73e8;
  color: #1a73e8;
}

/* Inner wrapper for a result */
.gsc-webResult.gsc-result {
  border: 1px solid #fff;
}

/* Set link colors. */
.gs-result .gs-title *,
.gsc-cursor-page,
.gs-spelling a {
  color: #15c;
}

/* Snippet text color */
.gs-webResult .gs-snippet,
.gs-fileFormatType {
  color: #333;
}

/*Promotion Settings*/
/* The entire promo */
.gsc-webResult.gsc-result.gsc-promotion {
  background-color: #f6f6f6;
  border-color: #f6f6f6;
}

/* Promotion links 
... [truncated]
```

- Endpoint: GET https://www.exteriores.gob.es/_layouts/15/3082/strings.js?rev=L3YO7EIa1vDmCtORuAnTsQ%3D%3DTAG0
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.exteriores.gob.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/_layouts/15/3082/strings.js?rev=L3YO7EIa1vDmCtORuAnTsQ%3D%3DTAG0"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "ApplicationGatewayAffinityCORS=de3d3e74fe6090e3024284440756cd7e; ApplicationGatewayAffinity=de3d3e74fe6090e3024284440756cd7e"
  },
  {
    "name": "referer",
    "value": "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-origin"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "age",
    "value": "780598"
  },
  {
    "name": "cache-control",
    "value": "max-age=86400, s-maxage=2592000"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "53353"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Tue, 23 Sep 2025 11:34:23 GMT"
  },
  {
    "name": "etag",
    "value": "\"0d3e9cd61b8d61:0\""
  },
  {
    "name": "last-modified",
    "value": "Wed, 11 Nov 2020 19:35:26 GMT"
  },
  {
    "name": "microsoftsharepointteamservices",
    "value": "16.0.0.5513"
  },
  {
    "name": "tp-cache",
    "value": "hit"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-ms-invokeapp",
    "value": "1; RequireReadOnly"
  }
]
```
  - Response body (trunc):

```json
var Strings;  if (Strings === undefined) { Strings=new Object(); }Strings.CMS=function(){};Strings.CMS.L_SelectAllAltKey_TEXT="false";Strings.CMS.L_SpellCheckKey_VALUE="0x76";Strings.CMS.L_Callout_Usage_Count="vista de <p>{0}</p>||vistas de <p>{0}</p>";Strings.CMS.L_NoElementStylesWereRemoved_TEXT="La selección no contiene ninguna instancia de estilos de elemento que quitar.";Strings.CMS.L_DecWidthAltKey_TEXT="false";Strings.CMS.L_ExpandedTagNameH4="Título 4";Strings.CMS.L_DecWidthShiftKey_TEXT="true";Strings.CMS.L_EditImageRenditionsAction="Editar representaciones";Strings.CMS.L_TabBackKey_TEXT="N";Strings.CMS.L_SvrBusySpellchecker_TEXT="El servidor de revisión ortográfica está ocupado";Strings.CMS.L_RemoveLinkShiftKey_TEXT="false";Strings.CMS.L_Show_TEXT="Mostrar";Strings.CMS.L_Title_TEXT="Título:";Strings.CMS.L_ShowSpecific_TEXT="Mostrar el elemento seleccionado en la navegación";Strings.CMS.L_DecHeightShiftKey_TEXT="true";Strings.CMS.L_ChangeColumnWidthAndRowHeightKey_TEXT="W";Strings.CMS.L_UnlinkToolTip_TEXT="Quitar hipervínculo";Strings.CMS.L_ExpandedTagNameTABLE="Tabla";Strings.CMS.L_FilterDisabled_TEXT="No puede filtrarse este tipo de columna";Strings.CMS.slwpGroupDialogHeight="230px";Strings.CMS.L_NoItems_TEXT="No se encontraron elementos";Strings.CMS.L_HideSpecific_TEXT="Ocultar el elemento seleccionado en la navegación";Strings.CMS.L_SelectAllShiftKey_TEXT="false";Strings.CMS.L_Delete_TEXT="Eliminar";Strings.CMS.L_OpenLink_TEXT="Abrir";Strings.CMS.L_SpellGenErr_TEXT="La revisión ortográfica no se completó correctamente. Si este problema persiste, notifíqueselo al administrador.";Strings.CMS.L_ExpandedTagNameH6="Título 6";Strings.CMS.L_FormatKey_TEXT="F";Strings.CMS.L_NoSelectionLabel_TEXT="No hay nada seleccionado";Strings.CMS.L_SmtUnknownobjectError_TEXT="Operación no válida: el objeto seleccionado es desconocido";Strings.CMS.L_MergeCellLeftLabel_TEXT="Combinar con celda izquierda";Strings.CMS.L_PasteHtmlLabel_TEXT="Conservar estilos en línea";Strings.CMS.L_BackspaceKey_VALUE="0x08";Strings.CMS.L_Inva
... [truncated]
```

- Endpoint: GET https://www.exteriores.gob.es/_layouts/15/core.js?rev=9kCBQNkpbQYAoiVcZpdkJA%3D%3DTAG0
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.exteriores.gob.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/_layouts/15/core.js?rev=9kCBQNkpbQYAoiVcZpdkJA%3D%3DTAG0"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "ApplicationGatewayAffinityCORS=de3d3e74fe6090e3024284440756cd7e; ApplicationGatewayAffinity=de3d3e74fe6090e3024284440756cd7e"
  },
  {
    "name": "referer",
    "value": "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-origin"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "age",
    "value": "6233393"
  },
  {
    "name": "cache-control",
    "value": "max-age=86400, s-maxage=2592000"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "121620"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Tue, 22 Jul 2025 08:54:28 GMT"
  },
  {
    "name": "etag",
    "value": "\"01d239940f9db1:0\""
  },
  {
    "name": "last-modified",
    "value": "Sun, 20 Jul 2025 06:36:18 GMT"
  },
  {
    "name": "microsoftsharepointteamservices",
    "value": "16.0.0.5508"
  },
  {
    "name": "tp-cache",
    "value": "hit"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-ms-invokeapp",
    "value": "1; RequireReadOnly"
  }
]
```
  - Response body (trunc):

```json
function $_global_core(){if("undefined"==typeof g_all_modules)g_all_modules={};g_all_modules["core.js"]={version:{rmj:16,rmm:0,rup:5513,rpr:1001}};typeof spWriteProfilerMark=="function"&&spWriteProfilerMark("perfMarkBegin_core.js");SPAnimation={};SPAnimation.g_Curves=new Array(7);SPAnimation.g_Curves[0]=new SPCurve(0,0,0,0,0,0);SPAnimation.g_Curves[1]=new SPCurve(1,1,0,0,0,0);SPAnimation.g_Curves[2]=new SPCurve(2,2,0,0,0,0);SPAnimation.g_Curves[3]=new SPCurve(3,3,.1,.9,.2,1);SPAnimation.g_Curves[4]=new SPCurve(4,3,.42,0,1,1);SPAnimation.g_Curves[5]=new SPCurve(5,3,0,0,.58,1);SPAnimation.g_Curves[6]=new SPCurve(6,3,.42,0,.58,1);SPKeyFrame.prototype={type:0,curveID:0,startTime:0,endTime:0,startValue:0,endValue:0,relativeTo:0,operationType:0};SPAnimation.Attribute={PositionX:1,PositionY:2,Height:3,Width:4,Opacity:5};SPAnimation.ID={Basic_Show:0,Basic_SlowShow:1,Basic_Fade:2,Basic_Move:3,Basic_Size:4,Content_SlideInFadeInRight:5,Content_SlideInFadeInRightInc:6,Content_SlideOutFadeOutRight:7,Content_SlideInFadeInLeft:8,Content_SlideInFadeInLeftInc:9,SmallObject_SlideInFadeInTop:10,SmallObject_SlideInFadeInLeft:11,Test_Instant:12,Test_Hold:13,Basic_Opacity:14,Basic_QuickShow:15,Basic_QuickFade:16,Content_SlideInFadeInGeneric:17,Basic_StrikeThrough:18,SmallObject_SlideInFadeInBottom:19,SmallObject_SlideOutFadeOutBottom:20,Basic_QuickSize:21};SPAnimation.g_Animations=new Array(22);SPAnimation.g_Animations[SPAnimation.ID.Basic_Show]=new Animation(SPAnimation.ID.Basic_Show,[new SPKeyFrame(SPAnimation.Attribute.Opacity,2,0,367,0,1,1,0)]);SPAnimation.g_Animations[SPAnimation.ID.Basic_SlowShow]=new Animation(SPAnimation.ID.Basic_SlowShow,[new SPKeyFrame(SPAnimation.Attribute.Opacity,2,0,700,0,1,1,0)]);SPAnimation.g_Animations[SPAnimation.ID.Basic_QuickShow]=new Animation(SPAnimation.ID.Basic_QuickShow,[new SPKeyFrame(SPAnimation.Attribute.Opacity,2,0,167,0,1,1,0)]);SPAnimation.g_Animations[SPAnimation.ID.Basic_Fade]=new Animation(SPAnimation.ID.Basic_Fade,[new SPKeyFrame(SPAnimation.Attribute.Opacity,2,0,367,1,0,1,0)]);SPAnim
... [truncated]
```

- Endpoint: GET https://www.exteriores.gob.es/_layouts/15/mquery.js?rev=G0XIYJI9ofOrcdJaLkhB7Q%3D%3DTAG0
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.exteriores.gob.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/_layouts/15/mquery.js?rev=G0XIYJI9ofOrcdJaLkhB7Q%3D%3DTAG0"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "ApplicationGatewayAffinityCORS=de3d3e74fe6090e3024284440756cd7e; ApplicationGatewayAffinity=de3d3e74fe6090e3024284440756cd7e; WSS_FullScreenMode=false"
  },
  {
    "name": "referer",
    "value": "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-origin"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "age",
    "value": "6233393"
  },
  {
    "name": "cache-control",
    "value": "max-age=86400, s-maxage=2592000"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "6005"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Tue, 22 Jul 2025 08:54:30 GMT"
  },
  {
    "name": "etag",
    "value": "\"01d239940f9db1:0\""
  },
  {
    "name": "last-modified",
    "value": "Sun, 20 Jul 2025 06:36:18 GMT"
  },
  {
    "name": "microsoftsharepointteamservices",
    "value": "16.0.0.5508"
  },
  {
    "name": "tp-cache",
    "value": "hit"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-ms-invokeapp",
    "value": "1; RequireReadOnly"
  }
]
```
  - Response body (trunc):

```json
function $_global_mquery(){if("undefined"==typeof g_all_modules)g_all_modules={};g_all_modules["mquery.js"]={version:{rmj:16,rmm:0,rup:5513,rpr:1001}};typeof spWriteProfilerMark=="function"&&spWriteProfilerMark("perfMarkBegin_mquery.js");(function(){if(typeof m$!=="undefined")return;var a=function(){var b=function(b,d,c){var a;if(typeof b!=="undefined"){if(typeof b!=="number")throw TypeError("Starting index must be a number.");a=b}else a=d;if(a<0)a+=c;return a};return{indexOf:function(f,d){for(var c=this.length,e=b(d,0,c),a=e;a<c;++a)if(f===this[a])return a;return-1},lastIndexOf:function(f,d){for(var c=this.length,e=b(d,c-1,c),a=e;a>=0;--a)if(f===this[a])return a;return-1},filter:function(d,c){var b=[];a.forEach.call(this,function(a){d.apply(c,arguments)&&b.push(a)});return b},forEach:function(d,b){for(var c=this.length,a=0;a<c;++a)d.call(b,this[a],a,this)},every:function(d,b){for(var c=this.length,a=0;a<c;++a)if(!d.call(b,this[a],a,this))return false;return true},map:function(d,c){var b=[];a.forEach.call(this,function(){b.push(d.apply(c,arguments))});return b},some:function(d,b){for(var c=this.length,a=0;a<c;++a)if(d.call(b,this[a],a,this))return true;return false}}}(),g={filter:function(c,b){var a={};g.forEach.call(this,function(d,e){if(c.apply(b,arguments))a[d]=e});return a},forEach:function(c,b){for(var a in this)c.call(b,a,this[a],this)},every:function(c,b){for(var a in this)if(!c.call(b,a,this[a],this))return false;return true},map:function(d,c){var b={};for(var a in this)b[a]=d.call(c,a,this[a],this);return b},some:function(c,b){for(var a in this)if(c.call(b,a,this[a],this))return true;return false}};MQueryResultSet=function(){this.push.apply(this,arguments)};MQueryResultSet.prototype=[];MQueryResultSet.prototype.constructor=MQueryResultSet;MQueryResultSet.prototype.append=function(a){if(m$.isNode(a))return this.map(function(b){b.appendChild(a)});else if(m$.isMQueryResultSet(a)){a.forEach(function(a){this.append(a)},this);return this}else if(m$.isString(a))return this.map(function(b){if(typeof b.insertAdja
... [truncated]
```

- Endpoint: GET https://www.exteriores.gob.es/PublishingImages/Banners/COOPERACION_v2.jpeg
  - Status: 401
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.exteriores.gob.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/PublishingImages/Banners/COOPERACION_v2.jpeg"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "ApplicationGatewayAffinityCORS=de3d3e74fe6090e3024284440756cd7e; ApplicationGatewayAffinity=de3d3e74fe6090e3024284440756cd7e; WSS_FullScreenMode=false"
  },
  {
    "name": "priority",
    "value": "i"
  },
  {
    "name": "referer",
    "value": "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "image"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-origin"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "age",
    "value": "0"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "36"
  },
  {
    "name": "content-type",
    "value": "text/plain; charset=utf-8"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:24 GMT"
  },
  {
    "name": "microsoftsharepointteamservices",
    "value": "16.0.0.5513"
  },
  {
    "name": "request-id",
    "value": "e570cba1-d721-20d8-e2ea-6c157963e5bf"
  },
  {
    "name": "sprequestguid",
    "value": "e570cba1-d721-20d8-e2ea-6c157963e5bf"
  },
  {
    "name": "tp-cache",
    "value": "miss"
  },
  {
    "name": "vary",
    "value": ", Accept-Encoding"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-ms-invokeapp",
    "value": "1; RequireReadOnly"
  },
  {
    "name": "x-sharepointhealthscore",
    "value": "0"
  }
]
```
  - Response body (trunc):

```json
401 UNAUTHORIZED
```

- Endpoint: GET https://www.exteriores.gob.es/PublishingImages/Banners/CERVANTES.svg
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.exteriores.gob.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/PublishingImages/Banners/CERVANTES.svg"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "ApplicationGatewayAffinityCORS=de3d3e74fe6090e3024284440756cd7e; ApplicationGatewayAffinity=de3d3e74fe6090e3024284440756cd7e; WSS_FullScreenMode=false"
  },
  {
    "name": "priority",
    "value": "i"
  },
  {
    "name": "referer",
    "value": "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "image"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-origin"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "age",
    "value": "8556606"
  },
  {
    "name": "cache-control",
    "value": "max-age=86400, s-maxage=2592000"
  },
  {
    "name": "content-length",
    "value": "18326"
  },
  {
    "name": "content-security-policy",
    "value": "frame-ancestors 'self' teams.microsoft.com *.teams.microsoft.com *.skype.com *.teams.microsoft.us local.teams.office.com *.powerapps.com *.yammer.com *.officeapps.live.com *.office.com *.stream.azure-test.net *.microsoftstream.com *.dynamics.com *.microsoft.com onedrive.live.com *.onedrive.live.com;"
  },
  {
    "name": "content-type",
    "value": "image/svg+xml"
  },
  {
    "name": "date",
    "value": "Wed, 25 Jun 2025 11:34:17 GMT"
  },
  {
    "name": "etag",
    "value": "\"{533F07AB-2647-4CD6-B21C-795B0E344FDD},2pub\""
  },
  {
    "name": "last-modified",
    "value": "Wed, 01 Jul 2020 12:46:55 GMT"
  },
  {
    "name": "microsoftsharepointteamservices",
    "value": "16.0.0.5448"
  },
  {
    "name": "request-id",
    "value": "ad90aba1-37b3-20d8-e2ea-6522bf296c64"
  },
  {
    "name": "sprequestguid",
    "value": "ad90aba1-37b3-20d8-e2ea-6522bf296c64"
  },
  {
    "name": "tp-cache",
    "value": "hit"
  },
  {
    "name": "vary",
    "value": ""
  },
  {
    "name": "x-aspnet-version",
    "value": "4.0.30319"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-frame-options",
    "value": "SAMEORIGIN"
  },
  {
    "name": "x-ms-invokeapp",
    "value": "1; RequireReadOnly"
  }
]
```
  - Response body (trunc):

```json
<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 23.1.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 147 120" style="enable-background:new 0 0 147 120;" xml:space="preserve">
<g id="CERVANTES_1_">
	
		<image style="overflow:visible;" width="401" height="315" id="CERVANTES" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZEAAAE7CAYAAAAcprzfAAAACXBIWXMAABdgAAAXYAE8fGXsAAAA
GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAMcxJREFUeNrsnQmYHVWZv+vc252k
Q1b2PSyKIMwQkVGRdCdugI4iiwKGNMEVFIZ0AsI44iDj8oAiCUjmDwhMoBMEFAVGR1ZJ0iCLgCxu
YQmrJCEhkM6edN/z/86tut11656qOnV7uTfkfZ+nuqrrVp0651TV9zvf2crzAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgH1BkAQwEV97y0PANm7oOlM33yrKr1npH
WY8Nft4kD95qT6kVntaLZP33rq7uReecOqm73tJw+gmHreNuAiAiMAjMbF94oDxQx8nmp2R5v4hD
o4iE6+mdcnyHHH9fQetfzzhl4ku1Ssd/zr6rYbvRw2dLzMe0TWk+kTsLgIjAABrcbUc1GUM7TZZ/
qe4plMewUmyekP03iodyg3goywcrPZfMmT+6IZ+7RTaPCHYd09bacjt3GgARgX5m1tyOz4nxv0g2
963+CQwJiE1MlNos++5QSl2z8/Yj7z7xqPGFgUrPpdcv2DeXz/2vXO+A0O7XJQ4HiEfSyR0HQESg
H7h8XsfehYK+SjY/0WP8DUlVV3Zvo/KYUjil48vPe02W/5HlWvEOXu5XQWxfeFwQ9ijLz1fL9U7j
zgMgItB372OyGPUrZXNkhUBEhSLOy1Chx869zSSMOekeCednXV3dd5xz6qRN1aZnZvvC7SU2l8nm
5GR9Ux+ZNqV5Pk8AACICVXDJnPn5fD53sRjTsy1VTr0iEhWGJGFJfTpjzg1dR+KzvKD1DTkRFDHy
izJ4HmMlpH+TkGbIv6Mdrv28CNY/i2Ct52kAQEQgm/cxSgzqzz2/11W6GGQRivA5NgGyeSvx1Wd/
lOU2EZX7hg5p+OsZJx2+uvTDlbc81LhxU9c+8tuHRXiOkl3HyPlDnEQsWMvWj6a3tpzHEwGAiIC7
B7JDQz73Wy9Lz6u46i1Xj6MfPJRg/yrZ3iBrIxZjnTyi5LiYcSwfbGtteZwnAwARgRQum9uxi5Tc
75aS+0GxBrdktJOMst1rcKvqSu+9VXn9tIb+aj0l/zpPrVy17tD/OuPILp4QAM/LkQUQ44HsrLXu
ENN5UKIA2KqfwoSPif6e1nZiCytuX/g32zWjjfnR8FVKear3OgdvO3r4N3lCAPBEIF5Adsjnc78v
CoirV2HzCly9iCRPoZqqrqhYJMXXxZOK7BfPbKOsDs7SkA+AJwJbDQ353B3FKixjQG3eg3up3c2L
C
... [truncated]
```

- Endpoint: GET https://www.exteriores.gob.es/PublishingImages/Banners/PARTICIPACION_PUBLICA.svg
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.exteriores.gob.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/PublishingImages/Banners/PARTICIPACION_PUBLICA.svg"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "ApplicationGatewayAffinityCORS=de3d3e74fe6090e3024284440756cd7e; ApplicationGatewayAffinity=de3d3e74fe6090e3024284440756cd7e; WSS_FullScreenMode=false"
  },
  {
    "name": "priority",
    "value": "i"
  },
  {
    "name": "referer",
    "value": "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "image"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-origin"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "age",
    "value": "8556606"
  },
  {
    "name": "cache-control",
    "value": "max-age=86400, s-maxage=2592000"
  },
  {
    "name": "content-length",
    "value": "13039"
  },
  {
    "name": "content-security-policy",
    "value": "frame-ancestors 'self' teams.microsoft.com *.teams.microsoft.com *.skype.com *.teams.microsoft.us local.teams.office.com *.powerapps.com *.yammer.com *.officeapps.live.com *.office.com *.stream.azure-test.net *.microsoftstream.com *.dynamics.com *.microsoft.com onedrive.live.com *.onedrive.live.com;"
  },
  {
    "name": "content-type",
    "value": "image/svg+xml"
  },
  {
    "name": "date",
    "value": "Wed, 25 Jun 2025 11:34:17 GMT"
  },
  {
    "name": "etag",
    "value": "\"{AF0B45CA-C479-4651-97B5-AA57EB794A50},2pub\""
  },
  {
    "name": "last-modified",
    "value": "Wed, 01 Jul 2020 12:46:58 GMT"
  },
  {
    "name": "microsoftsharepointteamservices",
    "value": "16.0.0.5448"
  },
  {
    "name": "request-id",
    "value": "ad90aba1-57b1-20d8-e2ea-6cb0aed0d62a"
  },
  {
    "name": "sprequestguid",
    "value": "ad90aba1-57b1-20d8-e2ea-6cb0aed0d62a"
  },
  {
    "name": "tp-cache",
    "value": "hit"
  },
  {
    "name": "vary",
    "value": ""
  },
  {
    "name": "x-aspnet-version",
    "value": "4.0.30319"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-frame-options",
    "value": "SAMEORIGIN"
  },
  {
    "name": "x-ms-invokeapp",
    "value": "1; RequireReadOnly"
  }
]
```
  - Response body (trunc):

```json
<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 23.1.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 356 120" style="enable-background:new 0 0 356 120;" xml:space="preserve">
<g id="PARTICIPACION_PUBLICA_1_">
	
		<image style="overflow:visible;" width="580" height="224" id="PARTICIPACION_PUBLICA" xlink:href="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAdAB0AAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA
EAMCAwYAAAmVAAAS2gAAIwv/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX
Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa
JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIAOACRgMBIgACEQEDEQH/
xAC+AAEAAwEBAQEAAAAAAAAAAAAAAwQFAQIGBwEBAQEBAQAAAAAAAAAAAAAAAAECAwQQAAEEAgEC
BQQCAgMBAAAAAAEAAgMEEQUUEBIgITEyBjBQEzVAFWBBIiMzFhEAAQMBBAcFBgUEAwEBAAAAAQAC
AxEhMRIzQVGR0ROTBBAgYbFzMHEiMkKyUPCBUhRAYKEj4fFiwUMSAAIBAgUDBQEAAwAAAAAAAAAB
ESExECBRgQJBYYIwQFBxEpEiMkL/2gAMAwEAAhEDEQAAAPsJe2dSqtoqLYqLYqLYqLYqLYqLYqLY
qLYqLYqLYqLYqLYqLYqLYqLYqLYqLYqLYqLYqLYqLYqLYqLYqLYqLYq8tiry2KvLYqdtCp20Ki2K
i2Ki2KnbQoJVi1VtShKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABVGos1rMcZ+LqfVPlJLPqFC9
jXe87KAAAABwrlhRWXkUsrvOgAAAAAAAAAAAAAAAAAAAAAFUaizWtRyldL8p4+k+b7cuWayz6C78
lNjf1LAvYuj3nc6AA481q9wGsp/FqXp3N50AAAAAAAAAAAAAAAAAAAAAAKo1FqrajjqXnzX0uDvO
c9u3Pz7jsS2rsHOetftS3jY8R2Lz5s8cNQC578+sad50AAAAAAAAAAAAAAAAAAAAAAAqjUWqtqAl
5naMNmZr4e9qYTcy7Iq/vcp753ltHJFUPZIbPCX0kfi9VWx753Nd4OuDrg64OoqVmkz+VouM3rE1
dSZxm9cHXB1zJs1+VadazM0464l64OuDvGFZuqebW+i95vp89Y3nZVbONdcHXBWGotVbUBLx3hDM
A6ePTpx0c8+hW9yw2eLQqraA7HPlfpvj+uJtmjBqS1PdPWfpMWfXxrBjuatmbfwbJ5t3J86xLed5
3mW1byI0cv1U1PqMf3Zxqvzc+XreyId+KHirFqTasUubs4W78dnU1m3l7zJp/O3ku4O7m1428mWI
pJ82t7Jr/T5tCpbzq8/W/FfbZtYY0tVbUBKBx0AAAcISZka9gSlO5TvOxnfOfWc6Yyr95nXz9nXW
ZGp7ZuXHsKx7tsfN6Omsy/m/tqlmXsWWdfOy7qyvifRpcvmqM7N+jJVpa5cu9PyPHxX21Xcytqdm
/Pe95ZRzPoUuNPf9lKDU6Zub9Gsy6f0CMrVdlqilqragJec7Vqf3l6
... [truncated]
```

- Endpoint: GET https://www.exteriores.gob.es/PublishingImages/Banners/RED_DE_CASAS.svg
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.exteriores.gob.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/PublishingImages/Banners/RED_DE_CASAS.svg"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "ApplicationGatewayAffinityCORS=de3d3e74fe6090e3024284440756cd7e; ApplicationGatewayAffinity=de3d3e74fe6090e3024284440756cd7e; WSS_FullScreenMode=false"
  },
  {
    "name": "priority",
    "value": "i"
  },
  {
    "name": "referer",
    "value": "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "image"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-origin"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "age",
    "value": "8556606"
  },
  {
    "name": "cache-control",
    "value": "max-age=86400, s-maxage=2592000"
  },
  {
    "name": "content-length",
    "value": "125607"
  },
  {
    "name": "content-security-policy",
    "value": "frame-ancestors 'self' teams.microsoft.com *.teams.microsoft.com *.skype.com *.teams.microsoft.us local.teams.office.com *.powerapps.com *.yammer.com *.officeapps.live.com *.office.com *.stream.azure-test.net *.microsoftstream.com *.dynamics.com *.microsoft.com onedrive.live.com *.onedrive.live.com;"
  },
  {
    "name": "content-type",
    "value": "image/svg+xml"
  },
  {
    "name": "date",
    "value": "Wed, 25 Jun 2025 11:34:17 GMT"
  },
  {
    "name": "etag",
    "value": "\"{B06F4E33-4972-4EFA-B77B-862D4EC3877D},2pub\""
  },
  {
    "name": "last-modified",
    "value": "Wed, 01 Jul 2020 12:46:59 GMT"
  },
  {
    "name": "microsoftsharepointteamservices",
    "value": "16.0.0.5448"
  },
  {
    "name": "request-id",
    "value": "ad90aba1-77b4-20d8-e2ea-6be799395a27"
  },
  {
    "name": "sprequestguid",
    "value": "ad90aba1-77b4-20d8-e2ea-6be799395a27"
  },
  {
    "name": "tp-cache",
    "value": "hit"
  },
  {
    "name": "vary",
    "value": ""
  },
  {
    "name": "x-aspnet-version",
    "value": "4.0.30319"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-frame-options",
    "value": "SAMEORIGIN"
  },
  {
    "name": "x-ms-invokeapp",
    "value": "1; RequireReadOnly"
  }
]
```
  - Response body (trunc):

```json
<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 23.1.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 308 120" style="enable-background:new 0 0 308 120;" xml:space="preserve">
<g id="LOGO_RED_DE_CASAS_1_">
	
		<image style="overflow:visible;" width="1108" height="405" id="LOGO_RED_DE_CASAS" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABFMAAAGXCAYAAAB/ZR+UAAAACXBIWXMAACLoAAAi6AHlPkyUAAAA
GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAABY/1JREFUeNrsnQlgFEX2/6t7khDu
QxG8EUUuRRS5coEKiiCogAQCiC66IiLirvtT1z3cw1X37yqLqCiyiiSBIOCBKHIJJIRLBFEuRcQb
VA45cs50/b9vugd6enqOJHN05H1C0T09Mz2v+qz37VevhGAYhmEYhmEYhmEYhmEYhmEYhmEYhmEY
hmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEY
hmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEY
hmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEY
hmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEY
hmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEY
hmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEY
hmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEY
hmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEY
hmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEY
hmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEY
hmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhqkx
MxasT+Kt4EyG3D9T4a3AMAzDMAzjfLhBzTBM1FhSvCuptKxSllW4tex+naVT7Hpj+ad1KirdFYm2
qWDxlmRNyrPnLdn61fxnxsTdllkLPzxHCKU3Zn9AWe6EffPKmxuTb7+pa2Wifn/m2x+mVFZ6LpdS
XpCU5JqfKFuen7PmbKEo/RTcl/vOXfv6uGE9D54q141pc9cqlW7tNOyDy/AS54Xc3uK0hvuddA1h
GIZhGIaxwmIKw5wiLFq9oxmclA5wpivwcvuArPbHorFeOEDindU7zsFM9/IKd3tVVVLqpSZ/vGjV
9hX9s9ofUpTEPGgvWLxFTUpSL8ZsW03TtmH6RaK2/ez3Np+JrXAlttXl2B7rse
... [truncated]
```

- Endpoint: GET https://www.exteriores.gob.es/PublishingImages/Banners/TRANSPARENCIA.svg
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.exteriores.gob.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/PublishingImages/Banners/TRANSPARENCIA.svg"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "ApplicationGatewayAffinityCORS=de3d3e74fe6090e3024284440756cd7e; ApplicationGatewayAffinity=de3d3e74fe6090e3024284440756cd7e; WSS_FullScreenMode=false"
  },
  {
    "name": "priority",
    "value": "i"
  },
  {
    "name": "referer",
    "value": "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "image"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-origin"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "age",
    "value": "8556606"
  },
  {
    "name": "cache-control",
    "value": "max-age=86400, s-maxage=2592000"
  },
  {
    "name": "content-length",
    "value": "26244"
  },
  {
    "name": "content-security-policy",
    "value": "frame-ancestors 'self' teams.microsoft.com *.teams.microsoft.com *.skype.com *.teams.microsoft.us local.teams.office.com *.powerapps.com *.yammer.com *.officeapps.live.com *.office.com *.stream.azure-test.net *.microsoftstream.com *.dynamics.com *.microsoft.com onedrive.live.com *.onedrive.live.com;"
  },
  {
    "name": "content-type",
    "value": "image/svg+xml"
  },
  {
    "name": "date",
    "value": "Wed, 25 Jun 2025 11:34:17 GMT"
  },
  {
    "name": "etag",
    "value": "\"{F3C20620-8AD8-499A-8DA7-E88562E4425C},8pub\""
  },
  {
    "name": "last-modified",
    "value": "Fri, 26 Apr 2024 09:33:05 GMT"
  },
  {
    "name": "microsoftsharepointteamservices",
    "value": "16.0.0.5448"
  },
  {
    "name": "request-id",
    "value": "ad90aba1-77b4-20d8-e2ea-6626ae3c9d52"
  },
  {
    "name": "sprequestguid",
    "value": "ad90aba1-77b4-20d8-e2ea-6626ae3c9d52"
  },
  {
    "name": "tp-cache",
    "value": "hit"
  },
  {
    "name": "vary",
    "value": ""
  },
  {
    "name": "x-aspnet-version",
    "value": "4.0.30319"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-frame-options",
    "value": "SAMEORIGIN"
  },
  {
    "name": "x-ms-invokeapp",
    "value": "1; RequireReadOnly"
  }
]
```
  - Response body (trunc):

```json
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="389" height="131" viewBox="0 0 389 131">
  <image id="Capa_2" data-name="Capa 2" x="45" y="35" width="306" height="61" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAATIAAAA9CAYAAAAu5+WkAAAgAElEQVR4nOy9d9xlV1X///7sc+596vSZTHoCiZAeQkBKQOlNOsKXXkSpIghfRUQlCATQ/EABvxSRJghBUBBpghAETAihJYAEQhLSk+lPv+Xs9ftj73POPufe55kJxAaz5nXnufeUvdduq++19ZcfuAQAPGQdMd11eINhYdz/7kdyzKHrcQ5+eNVuPnvBdeR5Bh5WegWFBwGdjrF+poP3jsI8yysDzIdiDZHnwgBJ7Jnr0Rt6/MBz3NEbeeajbkd/GB8GnKDfN973z5exfqqDc9DtZDz03scy0ckA+NFVe/nYF68mz8EEu/b2GAwMvLFuXYcjtk7j8XQyx8PudTTrZybIsoxLf7SLL3ztGlzmAJGZAMgzcd3uFW7es4xzItw1kADDBPJUv13EtQivIwMstFUC5w3vAm54C+0CZMILDKMBTuBDb9UgJGGyVh3hHgGdVxjcE9njgN3Vqx7yjmPr+mmcDIfhpbTGu2B2DvBW4CNpneWopaD47o69y/QHnmZRADzNxFOzgucDP6jQcLFPMMxC31ho2UgBtwZ4D0dtm2XDdIY3w7swVgUK/SeL9bd6unXBivDXOSNF1SSsvGQK44uN9JrMN94BF+aTCcmHofZCrpwLou6pFkRcyNp9ZmFS+Tg3AXMlPgKBWTlfDUPhvgdnfrQe5+qSrWxNGClheIQszMcSE2GxfauDBUTCuzZSawuH+uu4mZgOk1oPJq8ehP9aUPl5EPAmHCfhFIjaKgvdHHHEPOAx2Z2Q3RfPRLwUPmbMTHSR6uGNa678HALcR6bb1nisDU5iarJTzvI2nCDTfbzYWCgQ+OI/h1YdhIMwFg4Ssv8ukELvO+4OvEDGUZlBVqxNVmQVAQRYAQzJkCg/Wd5haiLHEsmgBUWQ+GzgIsfeH3gzZiZzOlkGFnh1+c9B32SY5Cs8DsJB+C+EXPByg9uSSnHmcJVM24IRFYioQwVYmzI23hOwAPwlcEXjhlMQTMbDqcCzJD8Nzmit1bJ+Jf/X4kgDV3nZq4ErzaAoDNXobQaOAS4FjgB+PV7/LPDdMThNAA8G7g7sAv4Z+F5y/xDgMcDngOuAxwFXYbpWZkdbUENP98YOB9+KyHaB+wBnAZPA94HPgG6QqFTO0JLku4fZqRzJpYQsA06K5VzisKVSeGuBgDOAUwiq6leAvVUhEtMzHfbN92hMlwqF5jXgMOBewPHAPHAB8LUx/XcQDsLPBDnwBMHJ5oh6bCAFpSYcVOcgAWjEukBU0B1mDuc8hRHsB9X9+MeSd+OfSKxug7eHl5eVZywuLTO/OGD9dKeN772BDwNbvUFW2iuSFekjzkWb4KbErG7JO4ErC8B7j6vtHY9AvAvsfSYeAwzNsUFm55p4HcbLEpxONvFhoZOQDTHyIuN1wDtlvAC0gjjOi/8HfAg4Q6bbg/0dsGiOp8VyXm/isiLjBHlOlvh7sBNlWgTLMSYQuwz7LeAf8cF2ZWaVDcvMyLO8LY3dCXg3nlNiH1wJ/CPRbmS1Te94h73Pw93KFx3s9PB/gfdCLZUtLvYZemtKjsnwOkEBLzH0p8imMVYkmwxTQJ8GHucDE7vVwAGS7fe5g/DzCQ5YrH/GiSCfGKTrGbq6phLftlF5rLxiilTH1JLaNFnahjIn8kx8+Vs3sbA4wDXFsicAnwC2egIRC9iVeNZG9fpX+b4LpKt6J3x1WFGqViLap4LKV9pznyrTH8o4HDjGxCdl/IFHz/YITFuBT2I6zmSPy4xtJk4APoTpN4H
... [truncated]
```

- Endpoint: GET https://www.exteriores.gob.es/PublishingImages/Banners/LogoMinisterioBN.svg
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.exteriores.gob.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/PublishingImages/Banners/LogoMinisterioBN.svg"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "ApplicationGatewayAffinityCORS=de3d3e74fe6090e3024284440756cd7e; ApplicationGatewayAffinity=de3d3e74fe6090e3024284440756cd7e; WSS_FullScreenMode=false"
  },
  {
    "name": "priority",
    "value": "i"
  },
  {
    "name": "referer",
    "value": "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "image"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-origin"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "age",
    "value": "8556606"
  },
  {
    "name": "cache-control",
    "value": "max-age=86400, s-maxage=2592000"
  },
  {
    "name": "content-length",
    "value": "128560"
  },
  {
    "name": "content-security-policy",
    "value": "frame-ancestors 'self' teams.microsoft.com *.teams.microsoft.com *.skype.com *.teams.microsoft.us local.teams.office.com *.powerapps.com *.yammer.com *.officeapps.live.com *.office.com *.stream.azure-test.net *.microsoftstream.com *.dynamics.com *.microsoft.com onedrive.live.com *.onedrive.live.com;"
  },
  {
    "name": "content-type",
    "value": "image/svg+xml"
  },
  {
    "name": "date",
    "value": "Wed, 25 Jun 2025 11:34:17 GMT"
  },
  {
    "name": "etag",
    "value": "\"{76D7A949-BAC4-4358-8268-838FA13A9D4D},2pub\""
  },
  {
    "name": "last-modified",
    "value": "Wed, 13 Jul 2022 08:02:45 GMT"
  },
  {
    "name": "microsoftsharepointteamservices",
    "value": "16.0.0.5448"
  },
  {
    "name": "request-id",
    "value": "ad90aba1-77b4-20d8-e2ea-66aac303b669"
  },
  {
    "name": "sprequestguid",
    "value": "ad90aba1-77b4-20d8-e2ea-66aac303b669"
  },
  {
    "name": "tp-cache",
    "value": "hit"
  },
  {
    "name": "vary",
    "value": ""
  },
  {
    "name": "x-aspnet-version",
    "value": "4.0.30319"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-frame-options",
    "value": "SAMEORIGIN"
  },
  {
    "name": "x-ms-invokeapp",
    "value": "1; RequireReadOnly"
  }
]
```
  - Response body (trunc):

```json
<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 26.3.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 343.15 77.45" style="enable-background:new 0 0 343.15 77.45;" xml:space="preserve">
<style type="text/css">
	.st0{fill:none;stroke:#000000;stroke-miterlimit:3.8637;}
	.st1{fill:none;stroke:#000000;stroke-miterlimit:10;}
	.st2{fill:#211915;}
	.st3{fill-rule:evenodd;clip-rule:evenodd;fill:#211916;stroke:#211916;stroke-width:0.1081;stroke-miterlimit:3.8637;}
	.st4{fill-rule:evenodd;clip-rule:evenodd;fill:#EBEAE3;stroke:#211916;stroke-width:0.2174;stroke-miterlimit:3.8637;}
	.st5{fill-rule:evenodd;clip-rule:evenodd;fill:none;stroke:#211916;stroke-width:0.2174;stroke-miterlimit:3.8637;}
	.st6{fill-rule:evenodd;clip-rule:evenodd;fill:#211916;stroke:#211916;stroke-width:0.054;stroke-miterlimit:3.8637;}
	.st7{fill-rule:evenodd;clip-rule:evenodd;fill:#EBEAE3;stroke:#211916;stroke-width:0.1081;stroke-miterlimit:3.8637;}
	.st8{fill-rule:evenodd;clip-rule:evenodd;fill:#211916;}
	.st9{fill-rule:evenodd;clip-rule:evenodd;fill:#EBEAE3;stroke:#EBEAE3;stroke-width:0.1081;stroke-miterlimit:3.8637;}
	.st10{fill-rule:evenodd;clip-rule:evenodd;fill:#EBEAE3;}
	.st11{fill-rule:evenodd;clip-rule:evenodd;fill:#EBEAE3;stroke:#211916;stroke-width:0.1631;stroke-miterlimit:3.8637;}
	
		.st12{clip-path:url(#SVGID_00000008863196842261773980000006929565140693152914_);fill-rule:evenodd;clip-rule:evenodd;fill:#EBEAE3;stroke:#211916;stroke-width:0.1631;stroke-miterlimit:3.8637;}
	.st13{fill-rule:evenodd;clip-rule:evenodd;fill:none;}
	.st14{fill-rule:evenodd;clip-rule:evenodd;fill:none;stroke:#211916;stroke-width:0.1631;stroke-miterlimit:3.8637;}
	.st15{fill:#EBEAE3;stroke:#211916;stroke-width:0.1081;stroke-miterlimit:3.8637;}
	.st16{fill-rule:evenodd;clip-rule:evenodd;fill:#211916;stroke:#211916;stroke-width:0.2174;stroke-miterlimit:3.8637;}
	
		.st17{cli
... [truncated]
```

- Endpoint: GET https://www.exteriores.gob.es/Style%20Library/PC/Img/icons/icon-info.svg
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.exteriores.gob.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/Style%20Library/PC/Img/icons/icon-info.svg"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "ApplicationGatewayAffinityCORS=de3d3e74fe6090e3024284440756cd7e; ApplicationGatewayAffinity=de3d3e74fe6090e3024284440756cd7e; WSS_FullScreenMode=false"
  },
  {
    "name": "priority",
    "value": "i"
  },
  {
    "name": "referer",
    "value": "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "image"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-origin"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "age",
    "value": "8556606"
  },
  {
    "name": "cache-control",
    "value": "max-age=86400, s-maxage=2592000"
  },
  {
    "name": "content-length",
    "value": "2127"
  },
  {
    "name": "content-security-policy",
    "value": "frame-ancestors 'self' teams.microsoft.com *.teams.microsoft.com *.skype.com *.teams.microsoft.us local.teams.office.com *.powerapps.com *.yammer.com *.officeapps.live.com *.office.com *.stream.azure-test.net *.microsoftstream.com *.dynamics.com *.microsoft.com onedrive.live.com *.onedrive.live.com;"
  },
  {
    "name": "content-type",
    "value": "image/svg+xml"
  },
  {
    "name": "date",
    "value": "Wed, 25 Jun 2025 11:34:17 GMT"
  },
  {
    "name": "etag",
    "value": "\"{9E38DAFA-034C-4166-B356-03FFD3162484},2pub\""
  },
  {
    "name": "last-modified",
    "value": "Wed, 01 Jul 2020 13:10:34 GMT"
  },
  {
    "name": "microsoftsharepointteamservices",
    "value": "16.0.0.5448"
  },
  {
    "name": "request-id",
    "value": "ad90aba1-77b4-20d8-e2ea-6372459e7421"
  },
  {
    "name": "sprequestguid",
    "value": "ad90aba1-77b4-20d8-e2ea-6372459e7421"
  },
  {
    "name": "tp-cache",
    "value": "hit"
  },
  {
    "name": "vary",
    "value": ""
  },
  {
    "name": "x-aspnet-version",
    "value": "4.0.30319"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-frame-options",
    "value": "SAMEORIGIN"
  },
  {
    "name": "x-ms-invokeapp",
    "value": "1; RequireReadOnly"
  }
]
```
  - Response body (trunc):

```json
<?xml version="1.0" encoding="UTF-8"?>
<svg width="33px" height="33px" viewBox="0 0 33 33" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 64 (93537) - https://sketch.com -->
    <title>Atencion info</title>
    <desc>Created with Sketch.</desc>
    <defs>
        <circle id="path-1" cx="13" cy="13" r="13"></circle>
        <filter x="-26.9%" y="-19.2%" width="153.8%" height="153.8%" filterUnits="objectBoundingBox" id="filter-2">
            <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
    </defs>
    <g id="Atencion-info" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Group-5" transform="translate(4.000000, 2.000000)">
            <g id="Oval">
                <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>
                <use fill="#1071B8" fill-rule="evenodd" xlink:href="#path-1"></use>
            </g>
            <path d="M14.1143663,14.7327836 L11.4168837,14.7327836 L11,7 L14.53125,7 L14.1143663,14.7327836 Z M11.0326968,17.59375 C11.0326968,17.0978467 11.1798307,16.7123012 11.474103,16.4371021 C11.7683753,16.161903 12.1961536,16.0243056 12.7574508,16.0243056 C13.3132985,16.0243056 13.7342651,16.161903 14.0203631,16.4371021 C14.3064612,16.7123012 14.4495081,17.0978467 14.4495081,17.59375 C14.4495081,18.0842038 14.3010118,18.4670246 14.0040148,18.7422237 C13.7070177,19.0174228 13.2915005,19.1550203 12.7574508,19.1550203 C12.2179516,19.1550203 11.7956227,19.0174228 11.4904514,18.7422237 C11.1852801,18.4670246 11.0326968,18.0842038 11.0326968,17.59375 Z" id="!" fill="#FFFFFF" fill-rule="nonzero" transform="translate(12.765625, 13.077510) rotate(-180.0000
... [truncated]
```

- Endpoint: GET https://www.exteriores.gob.es/_layouts/15/sp.init.js?rev=v7C9ZcXmEYuhjJNLnCo66A%3D%3DTAG0
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.exteriores.gob.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/_layouts/15/sp.init.js?rev=v7C9ZcXmEYuhjJNLnCo66A%3D%3DTAG0"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "ApplicationGatewayAffinityCORS=de3d3e74fe6090e3024284440756cd7e; ApplicationGatewayAffinity=de3d3e74fe6090e3024284440756cd7e; WSS_FullScreenMode=false"
  },
  {
    "name": "referer",
    "value": "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-origin"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "age",
    "value": "6233393"
  },
  {
    "name": "cache-control",
    "value": "max-age=86400, s-maxage=2592000"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "8525"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Tue, 22 Jul 2025 08:54:30 GMT"
  },
  {
    "name": "etag",
    "value": "\"01d239940f9db1:0\""
  },
  {
    "name": "last-modified",
    "value": "Sun, 20 Jul 2025 06:36:18 GMT"
  },
  {
    "name": "microsoftsharepointteamservices",
    "value": "16.0.0.5508"
  },
  {
    "name": "tp-cache",
    "value": "hit"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-ms-invokeapp",
    "value": "1; RequireReadOnly"
  }
]
```
  - Response body (trunc):

```json
function ULSVCK(){var o=new Object;o.ULSTeamName="Microsoft SharePoint Foundation";o.ULSFileName="SP.Init.js";return o;}
if("undefined"==typeof g_all_modules)g_all_modules={};g_all_modules["sp.init.js"]={version:{rmj:16,rmm:0,rup:5513,rpr:1001}};typeof spWriteProfilerMark=="function"&&spWriteProfilerMark("perfMarkBegin_sp.init.js");Type.registerNamespace("SP");SP.ListLevelPermissionMask=function(){};SP.ListLevelPermissionMask.prototype={viewListItems:1,insertListItems:2,editListItems:4,deleteListItems:8,approveItems:16,openItems:32,viewVersions:64,deleteVersions:128,breakCheckout:256,managePersonalViews:512,manageLists:2048};SP.ListLevelPermissionMask.registerEnum("SP.ListLevelPermissionMask",false);SP.HtmlBuilder=function(){ULSVCK:;this.$B_0=[];this.$I_0=[];this.$0_0=[];this.$P_0=[]};SP.HtmlBuilder.prototype={$0_0:null,$I_0:null,$B_0:null,$P_0:null,addAttribute:function(b,a){ULSVCK:;this.$B_0[this.$B_0.length]=new SP.HtmlBuilder.Attribute(b,a)},addCssClass:function(a){ULSVCK:;Array.add(this.$I_0,a)},addCommunitiesCssClass:function(a){ULSVCK:;this.addCssClass("ms-comm-"+a)},renderBeginTag:function(b){ULSVCK:;this.$P_0.push(b);this.$0_0[this.$0_0.length]="<";this.$0_0[this.$0_0.length]=b;if(this.$I_0.length>0){this.addAttribute("class",this.$I_0.join(" "));this.$I_0=[]}for(var a=0;a<this.$B_0.length;a++){var c=this.$B_0[a];this.$0_0[this.$0_0.length]=" ";this.$0_0[this.$0_0.length]=c.name;this.$0_0[this.$0_0.length]='="';this.$0_0[this.$0_0.length]=c.value;this.$0_0[this.$0_0.length]='"'}Array.clear(this.$B_0);this.$0_0[this.$0_0.length]=">"},renderEndTag:function(){ULSVCK:;if(this.$P_0.length>0){var a=this.$P_0.pop();this.$0_0[this.$0_0.length]="</";this.$0_0[this.$0_0.length]=a;this.$0_0[this.$0_0.length]=">"}},write:function(a){ULSVCK:;this.$0_0[this.$0_0.length]=a},writeEncoded:function(a){ULSVCK:;this.$0_0[this.$0_0.length]=STSHtmlEncode(a)},toString:function(){ULSVCK:;return this.$0_0.join("")}};SP.HtmlBuilder.Attribute=function(b,a){ULSVCK:;this.name=b;this.value=a};SP.HtmlBuilder.Attribute.prototype={name
... [truncated]
```

- Endpoint: GET https://www.exteriores.gob.es/_layouts/15/sp.core.js?rev=bOK%2Bug%2FpfAotn0K8lTrAmw%3D%3DTAG0
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.exteriores.gob.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/_layouts/15/sp.core.js?rev=bOK%2Bug%2FpfAotn0K8lTrAmw%3D%3DTAG0"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "ApplicationGatewayAffinityCORS=de3d3e74fe6090e3024284440756cd7e; ApplicationGatewayAffinity=de3d3e74fe6090e3024284440756cd7e; WSS_FullScreenMode=false"
  },
  {
    "name": "referer",
    "value": "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-origin"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "age",
    "value": "6233392"
  },
  {
    "name": "cache-control",
    "value": "max-age=86400, s-maxage=2592000"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "21221"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Tue, 22 Jul 2025 08:54:32 GMT"
  },
  {
    "name": "etag",
    "value": "\"01d239940f9db1:0\""
  },
  {
    "name": "last-modified",
    "value": "Sun, 20 Jul 2025 06:36:18 GMT"
  },
  {
    "name": "microsoftsharepointteamservices",
    "value": "16.0.0.5508"
  },
  {
    "name": "tp-cache",
    "value": "hit"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-ms-invokeapp",
    "value": "1; RequireReadOnly"
  }
]
```
  - Response body (trunc):

```json
function ULSZvE(){var o=new Object;o.ULSTeamName="Microsoft SharePoint Foundation";o.ULSFileName="SP.Core.js";return o;}
if("undefined"==typeof g_all_modules)g_all_modules={};g_all_modules["sp.core.js"]={version:{rmj:16,rmm:0,rup:5513,rpr:1001}};typeof spWriteProfilerMark=="function"&&spWriteProfilerMark("perfMarkBegin_sp.core.js");Type.registerNamespace("SP");if(typeof IEnumerator=="undefined"){var IEnumerator=function(){};IEnumerator.prototype={get_current:null,moveNext:null,reset:null};IEnumerator.registerInterface("IEnumerator")}if(typeof IEnumerable=="undefined"){var IEnumerable=function(){};IEnumerable.prototype={getEnumerator:null};IEnumerable.registerInterface("IEnumerable")}if(typeof IDisposable=="undefined"){var IDisposable=function(){};IDisposable.prototype={dispose:null};IDisposable.registerInterface("IDisposable")}SP.EnumerableArray=function(a){ULSZvE:;if(a==null)a=[];this._m_array=a};SP.EnumerableArray.prototype={_m_array:null,getEnumerator:function(){ULSZvE:;return new SP._arrayEnumerator(this._m_array)},get_length:function(){ULSZvE:;return this._m_array.length},get_count:function(){ULSZvE:;return this._m_array.length},add:function(a){ULSZvE:;this._m_array.push(a)},addRange:function(a){ULSZvE:;Array.addRange(this._m_array,a)},clear:function(){ULSZvE:;this._m_array.length=0},contains:function(a){ULSZvE:;return Array.contains(this._m_array,a)},indexOf:function(b,a){ULSZvE:;return Array.indexOf(this._m_array,b,a)},insert:function(a,b){ULSZvE:;Array.insert(this._m_array,a,b)},remove:function(a){ULSZvE:;Array.remove(this._m_array,a)},removeAt:function(a){ULSZvE:;Array.removeAt(this._m_array,a)},toArray:function(){ULSZvE:;return this._m_array},toArrayList:function(){ULSZvE:;return this._m_array}};SP._arrayEnumerator=function(a){ULSZvE:;this._m_array=a;this._m_index=-1;this.current=null};SP._arrayEnumerator.prototype={_m_index:0,_m_array:null,get_current:function(){ULSZvE:;return this._m_array[this._m_index]},moveNext:function(){ULSZvE:;this._m_index++;this.current=this._m_array[this._m_index];return thi
... [truncated]
```

- Endpoint: GET https://www.exteriores.gob.es/Style%20Library/PC/Img/icons/Favicon.ico
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.exteriores.gob.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/Style%20Library/PC/Img/icons/Favicon.ico"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "ApplicationGatewayAffinityCORS=de3d3e74fe6090e3024284440756cd7e; ApplicationGatewayAffinity=de3d3e74fe6090e3024284440756cd7e; WSS_FullScreenMode=false"
  },
  {
    "name": "priority",
    "value": "u=1, i"
  },
  {
    "name": "referer",
    "value": "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "image"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-origin"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "age",
    "value": "8556604"
  },
  {
    "name": "cache-control",
    "value": "max-age=86400, s-maxage=2592000"
  },
  {
    "name": "content-length",
    "value": "1406"
  },
  {
    "name": "content-security-policy",
    "value": "frame-ancestors 'self' teams.microsoft.com *.teams.microsoft.com *.skype.com *.teams.microsoft.us local.teams.office.com *.powerapps.com *.yammer.com *.officeapps.live.com *.office.com *.stream.azure-test.net *.microsoftstream.com *.dynamics.com *.microsoft.com onedrive.live.com *.onedrive.live.com;"
  },
  {
    "name": "content-type",
    "value": "image/x-icon"
  },
  {
    "name": "date",
    "value": "Wed, 25 Jun 2025 11:34:21 GMT"
  },
  {
    "name": "etag",
    "value": "\"{48DD306B-C60A-4CA7-8136-ABB4E96AD3ED},2pub\""
  },
  {
    "name": "last-modified",
    "value": "Wed, 01 Jul 2020 13:10:29 GMT"
  },
  {
    "name": "microsoftsharepointteamservices",
    "value": "16.0.0.5448"
  },
  {
    "name": "request-id",
    "value": "ae90aba1-b7a0-20d8-e2ea-6447b958da97"
  },
  {
    "name": "sprequestguid",
    "value": "ae90aba1-b7a0-20d8-e2ea-6447b958da97"
  },
  {
    "name": "tp-cache",
    "value": "hit"
  },
  {
    "name": "vary",
    "value": ""
  },
  {
    "name": "x-aspnet-version",
    "value": "4.0.30319"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-frame-options",
    "value": "SAMEORIGIN"
  },
  {
    "name": "x-ms-invokeapp",
    "value": "1; RequireReadOnly"
  }
]
```
  - Response body (trunc):

```json
AAABAAEAEBAAAAEACABoBQAAFgAAACgAAAAQAAAAIAAAAAEACAAAAAAAAAEAAAAAAAAAAAAAAAEAAAABAAAAAAAASi5RAE80UQASRXQAZGhdABohjwAaJ4wAGSuJABoojQAWPIsAHieaABsgnQAVM5gALiSAAB4WpgAjBKgAIBeoACEesAAcLacAFjaoABg6rgAZPLAAFEGJABFKkQAVRJ4AD1qfACJLmgAOaIEAD2aLAAppjQAXYoAAH36XABZDowAaSqEAEF2hACZDqQAVdqQAF3qkAB9puQAqZ70AIGi5ACF6sQBQVpAAUGyIAHlihABLVqYATFKoAElfrABQXqoAWWivAFtvtQAqbMAAKHXGACh6ygCNf50AlmitAJd1qAAfgZsAHpa9ACCjvQBIj5UARpGZAFCZqQBRna4AdYOrAHSCrQB4p7cAeq6+ABmO1gAYn90AFKDRABev0AAWr9kAF7LTABay2QAxrNQAJbjXACa93AAxsdoAGZ/gABin4wAYrOUAM8HeABvF5wAfxOUAFcfsABjK7gAWyfEAFs3yABbO9AAYzfIAFdH2ACDD4gAmxeUANMfkAJGeqgCcn68AoJOmAKGcpACWo68AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1lWWVtZXV1ZW1lWWVtbW1tUBDxGGisqI0Q9BF1bW1tbWz9MIgwXEhMVTT5bW1tbW1FBUhkMCQoYFF5BUFtbW1tZMjQgCgECMC81MVlZW1tbTy4nEB4NLDhgMy1PW1tbW1tDSxEdDmE3Y05CW1tbW1tbOUcRBQ9iNl9JH1tbW1tbWyRIVRsDFhxVSiVbW1tbW1tbWiEFBwcHIVpbW1tbW1tbW1o6KSYmKTpaW1tbW1tbW1tbW1Q7O1RZW1tbW1tbW1tbW1tbWVlbW1tbW1tbW1tbW1tbW1tbW1tbW1tbWwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=
```

- Endpoint: GET https://www.googletagmanager.com/gtag/js?id=G-YHZBSPQRHE&_=1759407860569
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.googletagmanager.com"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/gtag/js?id=G-YHZBSPQRHE&_=1759407860569"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "referer",
    "value": "https://www.exteriores.gob.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "cross-site"
  },
  {
    "name": "sec-fetch-storage-access",
    "value": "active"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "access-control-allow-credentials",
    "value": "true"
  },
  {
    "name": "access-control-allow-headers",
    "value": "Cache-Control"
  },
  {
    "name": "access-control-allow-origin",
    "value": "*"
  },
  {
    "name": "alt-svc",
    "value": "h3=\":443\"; ma=2592000,h3-29=\":443\"; ma=2592000"
  },
  {
    "name": "cache-control",
    "value": "private, max-age=900"
  },
  {
    "name": "content-encoding",
    "value": "zstd"
  },
  {
    "name": "content-length",
    "value": "131275"
  },
  {
    "name": "content-type",
    "value": "application/javascript; charset=UTF-8"
  },
  {
    "name": "cross-origin-resource-policy",
    "value": "cross-origin"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:27 GMT"
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 12:24:27 GMT"
  },
  {
    "name": "server",
    "value": "Google Tag Manager"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=31536000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding"
  },
  {
    "name": "x-xss-protection",
    "value": "0"
  }
]
```

- Endpoint: POST https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx
  - Status: 302
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.exteriores.gob.es"
  },
  {
    "name": ":method",
    "value": "POST"
  },
  {
    "name": ":path",
    "value": "/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cache-control",
    "value": "max-age=0"
  },
  {
    "name": "content-length",
    "value": "32420"
  },
  {
    "name": "content-type",
    "value": "application/x-www-form-urlencoded"
  },
  {
    "name": "cookie",
    "value": "ApplicationGatewayAffinityCORS=de3d3e74fe6090e3024284440756cd7e; ApplicationGatewayAffinity=de3d3e74fe6090e3024284440756cd7e; WSS_FullScreenMode=false; cookiePortalCiudadano=True"
  },
  {
    "name": "origin",
    "value": "https://www.exteriores.gob.es"
  },
  {
    "name": "priority",
    "value": "u=0, i"
  },
  {
    "name": "referer",
    "value": "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "document"
  },
  {
    "name": "sec-fetch-mode",
    "value": "navigate"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-origin"
  },
  {
    "name": "sec-fetch-user",
    "value": "?1"
  },
  {
    "name": "upgrade-insecure-requests",
    "value": "1"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Request body:

```json
_wpcmWpid=&wpcmVal=&MSOWebPartPage_PostbackSource=&MSOTlPn_SelectedWpId=&MSOTlPn_View=0&MSOTlPn_ShowSettings=False&MSOGallery_SelectedLibrary=&MSOGallery_FilterString=&MSOTlPn_Button=none&__EVENTTARGET=&__EVENTARGUMENT=&__REQUESTDIGEST=noDigest&MSOSPWebPartManager_DisplayModeName=Browse&MSOSPWebPartManager_ExitingDesignMode=false&MSOWebPartPage_Shared=&MSOLayout_LayoutChanges=&MSOLayout_InDesignMode=&_wpSelected=&_wzSelected=&MSOSPWebPartManager_OldDisplayModeName=Browse&MSOSPWebPartManager_StartWebPartEditingName=false&MSOSPWebPartManager_EndWebPartEditing=false&__VIEWSTATE=%2FwEPDwUBMA9kFgJmD2QWAgIBD2QWCAIBD2QWBAIGD2QWAmYPZBYCAgEPFgIeE1ByZXZpb3VzQ29udHJvbE1vZGULKYgBTWljcm9zb2Z0LlNoYXJlUG9pbnQuV2ViQ29udHJvbHMuU1BDb250cm9sTW9kZSwgTWljcm9zb2Z0LlNoYXJlUG9pbnQsIFZlcnNpb249MTYuMC4wLjAsIEN1bHR1cmU9bmV1dHJhbCwgUHVibGljS2V5VG9rZW49NzFlOWJjZTExMWU5NDI5YwFkAg4PZBYEAgEPZBYCAgUPFgIfAAsrBAFkAgMPZBYCZg9kFgJmDzwrAAYAZAIDD2QWAgIBD2QWAgUmZ182OWIwZWMyY18yYWU2XzRjNzBfOGQxZl9iMzFmMjZmYWVmYjUPZBYCZg9kFhBmDxYCHgRUZXh0BTNGb3JtdWxhcmlvIGRlbCBidXNjYWRvciBkZSBsb3Mgc2VydmljaW9zIGNvbnN1bGFyZXNkAgEPZBYKZg8WAh8BBRVQYcOtc2VzIHkgdGVycml0b3Jpb3NkAgEPEA8WBh4NRGF0YVRleHRGaWVsZAUFVGl0bGUeDkRhdGFWYWx1ZUZpZWxkBQVUaXRsZR4LXyFEYXRhQm91bmRnZBAVeR5TZWxlY2Npb25hciBwYcOtcyBvIHRlcnJpdG9yaW8LQWZnYW5pc3TDoW4HQWxiYW5pYQhBbGVtYW5pYQdBbmRvcnJhBkFuZ29sYQ1BcmFiaWEgU2F1ZMOtB0FyZ2VsaWEJQXJnZW50aW5hCUF1c3RyYWxpYQdBdXN0cmlhCkJhbmdsYWRlc2gIQsOpbGdpY2EHQm9saXZpYRRCb3NuaWEgeSBIZXJ6ZWdvdmluYQZCcmFzaWwIQnVsZ2FyaWEKQ2FibyBWZXJkZQhDYW1lcsO6bgdDYW5hZMOhBUNhdGFyBUNoaWxlBUNoaW5hBkNoaXByZQhDb2xvbWJpYQVDb3JlYQ9Db3N0YSBkZSBNYXJmaWwKQ29zdGEgUmljYQdDcm9hY2lhBEN1YmEJRGluYW1hcmNhB0VjdWFkb3IGRWdpcHRvC0VsIFNhbHZhZG9yF0VtaXJhdG9zIMOBcmFiZXMgVW5pZG9zCkVzbG92YXF1aWEJRXNsb3ZlbmlhDkVzdGFkb3MgVW5pZG9zB0VzdG9uaWEIRXRpb3DDrWEJRmlsaXBpbmFzCUZpbmxhbmRpYQdGcmFuY2lhBkdhYsOzbgVHaGFuYQZHcmVjaWEJR3VhdGVtYWxhBkd1aW5lYRFHdWluZWEgRWN1YXRvcmlhbA1HdWluZWEtQmlzc2F1BkhhaXTDrQhIb25kdXJhcwhIdW5ncsOtYQVJbmRpYQlJbmRvbmVzaWEESXJhawVJcsOhbgdJcmxhbmRhBklzcmFlbAZJdGFsaWEHSmFtYWljYQZKYXDDs24ISm9yZGFuaWEKS2F6YWpzdMOh
... [truncated]
```
  - Response headers:

```json
[
  {
    "name": "age",
    "value": "0"
  },
  {
    "name": "cache-control",
    "value": "private"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-security-policy",
    "value": "frame-ancestors 'self' teams.microsoft.com *.teams.microsoft.com *.skype.com *.teams.microsoft.us local.teams.office.com *.powerapps.com *.yammer.com *.officeapps.live.com *.office.com *.stream.azure-test.net *.microsoftstream.com *.dynamics.com *.microsoft.com onedrive.live.com *.onedrive.live.com;"
  },
  {
    "name": "content-type",
    "value": "text/html; charset=utf-8"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:31 GMT"
  },
  {
    "name": "location",
    "value": "/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx?scco=Cuba&scd=166&scca=Certificados&scs=Certificado+de+nacimiento"
  },
  {
    "name": "microsoftsharepointteamservices",
    "value": "16.0.0.5513"
  },
  {
    "name": "request-id",
    "value": "e670cba1-4733-20d8-e2ea-64a1dac28c6e"
  },
  {
    "name": "spiislatency",
    "value": "157"
  },
  {
    "name": "sprequestduration",
    "value": "2064"
  },
  {
    "name": "sprequestguid",
    "value": "e670cba1-4733-20d8-e2ea-64a1dac28c6e"
  },
  {
    "name": "tp-cache",
    "value": "miss"
  },
  {
    "name": "vary",
    "value": ", Accept-Encoding"
  },
  {
    "name": "x-aspnet-version",
    "value": "4.0.30319"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-frame-options",
    "value": "SAMEORIGIN"
  },
  {
    "name": "x-ms-invokeapp",
    "value": "1; RequireReadOnly"
  },
  {
    "name": "x-sharepointhealthscore",
    "value": "0"
  }
]
```

- Endpoint: POST https://www.google-analytics.com/g/collect?v=2&tid=G-YHZBSPQRHE&gtm=45je59u1v9123577478za200zd9123577478&_p=1759407866061&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=514742666.1759407866&ul=es-es&sr=1280x720&uaa=x86&uab=64&uafvl=Not%253DA%253FBrand%3B24.0.0.0%7CChromium%3B140.0.7339.186&uamb=0&uam=&uap=Windows&uapv=10.0&uaw=0&are=1&frm=0&pscdl=noapi&_s=1&tag_exp=101509157~103116026~103200004~103233427~104527906~104528500~104684208~104684211~104948813~105424848~115480710&sid=1759407866&sct=1&seg=0&dl=https%3A%2F%2Fwww.exteriores.gob.es%2Fes%2FServiciosAlCiudadano%2FPaginas%2FServicios-consulares.aspx&dt=Servicios%20consulares&en=page_view&_fv=1&_nsi=1&_ss=1&_ee=1&tfd=11020
  - Status: 204
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.google-analytics.com"
  },
  {
    "name": ":method",
    "value": "POST"
  },
  {
    "name": ":path",
    "value": "/g/collect?v=2&tid=G-YHZBSPQRHE&gtm=45je59u1v9123577478za200zd9123577478&_p=1759407866061&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=514742666.1759407866&ul=es-es&sr=1280x720&uaa=x86&uab=64&uafvl=Not%253DA%253FBrand%3B24.0.0.0%7CChromium%3B140.0.7339.186&uamb=0&uam=&uap=Windows&uapv=10.0&uaw=0&are=1&frm=0&pscdl=noapi&_s=1&tag_exp=101509157~103116026~103200004~103233427~104527906~104528500~104684208~104684211~104948813~105424848~115480710&sid=1759407866&sct=1&seg=0&dl=https%3A%2F%2Fwww.exteriores.gob.es%2Fes%2FServiciosAlCiudadano%2FPaginas%2FServicios-consulares.aspx&dt=Servicios%20consulares&en=page_view&_fv=1&_nsi=1&_ss=1&_ee=1&tfd=11020"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "content-length",
    "value": "0"
  },
  {
    "name": "origin",
    "value": "https://www.exteriores.gob.es"
  },
  {
    "name": "priority",
    "value": "u=1, i"
  },
  {
    "name": "referer",
    "value": "https://www.exteriores.gob.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "empty"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "cross-site"
  },
  {
    "name": "sec-fetch-storage-access",
    "value": "active"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "access-control-allow-credentials",
    "value": "true"
  },
  {
    "name": "access-control-allow-origin",
    "value": "https://www.exteriores.gob.es"
  },
  {
    "name": "alt-svc",
    "value": "h3=\":443\"; ma=2592000,h3-29=\":443\"; ma=2592000"
  },
  {
    "name": "cache-control",
    "value": "no-cache, no-store, must-revalidate"
  },
  {
    "name": "content-length",
    "value": "0"
  },
  {
    "name": "content-security-policy-report-only",
    "value": "script-src 'none'; form-action 'none'; frame-src 'none'; report-uri https://csp.withgoogle.com/csp/scaffolding/ascnsrsggc:102:0"
  },
  {
    "name": "content-type",
    "value": "text/plain"
  },
  {
    "name": "cross-origin-opener-policy-report-only",
    "value": "same-origin; report-to=ascnsrsggc:102:0"
  },
  {
    "name": "cross-origin-resource-policy",
    "value": "cross-origin"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:27 GMT"
  },
  {
    "name": "expires",
    "value": "Fri, 01 Jan 1990 00:00:00 GMT"
  },
  {
    "name": "pragma",
    "value": "no-cache"
  },
  {
    "name": "report-to",
    "value": "{\"group\":\"ascnsrsggc:102:0\",\"max_age\":2592000,\"endpoints\":[{\"url\":\"https://csp.withgoogle.com/csp/report-to/scaffolding/ascnsrsggc:102:0\"}],}"
  },
  {
    "name": "server",
    "value": "Golfe2"
  }
]
```

- Endpoint: GET https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx?scco=Cuba&scd=166&scca=Certificados&scs=Certificado+de+nacimiento
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.exteriores.gob.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx?scco=Cuba&scd=166&scca=Certificados&scs=Certificado+de+nacimiento"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cache-control",
    "value": "max-age=0"
  },
  {
    "name": "cookie",
    "value": "ApplicationGatewayAffinityCORS=de3d3e74fe6090e3024284440756cd7e; ApplicationGatewayAffinity=de3d3e74fe6090e3024284440756cd7e; WSS_FullScreenMode=false; cookiePortalCiudadano=True; _ga_YHZBSPQRHE=GS2.1.s1759407866$o1$g0$t1759407866$j60$l0$h0; _ga=GA1.1.514742666.1759407866"
  },
  {
    "name": "priority",
    "value": "u=0, i"
  },
  {
    "name": "referer",
    "value": "https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Servicios-consulares.aspx"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "document"
  },
  {
    "name": "sec-fetch-mode",
    "value": "navigate"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-origin"
  },
  {
    "name": "sec-fetch-user",
    "value": "?1"
  },
  {
    "name": "upgrade-insecure-requests",
    "value": "1"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "age",
    "value": "0"
  },
  {
    "name": "cache-control",
    "value": "private, max-age=0"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-security-policy",
    "value": "frame-ancestors 'self' teams.microsoft.com *.teams.microsoft.com *.skype.com *.teams.microsoft.us local.teams.office.com *.powerapps.com *.yammer.com *.officeapps.live.com *.office.com *.stream.azure-test.net *.microsoftstream.com *.dynamics.com *.microsoft.com onedrive.live.com *.onedrive.live.com;"
  },
  {
    "name": "content-type",
    "value": "text/html; charset=utf-8"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:33 GMT"
  },
  {
    "name": "expires",
    "value": "Wed, 17 Sep 2025 12:24:31 GMT"
  },
  {
    "name": "last-modified",
    "value": "Thu, 02 Oct 2025 12:24:31 GMT"
  },
  {
    "name": "microsoftsharepointteamservices",
    "value": "16.0.0.5513"
  },
  {
    "name": "request-id",
    "value": "e670cba1-17ef-20d8-e2ea-655619a8bdb4"
  },
  {
    "name": "spiislatency",
    "value": "0"
  },
  {
    "name": "sprequestduration",
    "value": "1454"
  },
  {
    "name": "sprequestguid",
    "value": "e670cba1-17ef-20d8-e2ea-655619a8bdb4"
  },
  {
    "name": "tp-cache",
    "value": "miss"
  },
  {
    "name": "vary",
    "value": ", Accept-Encoding"
  },
  {
    "name": "x-aspnet-version",
    "value": "4.0.30319"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-frame-options",
    "value": "SAMEORIGIN"
  },
  {
    "name": "x-ms-invokeapp",
    "value": "1; RequireReadOnly"
  },
  {
    "name": "x-sharepointhealthscore",
    "value": "0"
  }
]
```
  - Response body (trunc):

```json
<!DOCTYPE html><html dir=ltr lang=es-ES><head><meta http-equiv=X-UA-Compatible content="IE=Edge"><meta name=viewport content="width=device-width, initial-scale=1.0"><meta charset=utf-8><meta name=google-site-verification content=euDKNaMjl2_9D647EUohNILOEErAyKX3c_TVLtYQBLE><link rel="shortcut icon" href=/Style%20Library/PC/Img/icons/Favicon.ico type=image/vnd.microsoft.icon id=favicon><title>Servicios consulares</title><script src="/_layouts/15/3082/initstrings.js?rev=VH27cqV0GG4Tm%2FLXObNlKQ%3D%3DTAG0"></script><script src="/_layouts/15/init.js?rev=RHfoRxFuwXZ%2BOo2JABCoHA%3D%3DTAG0"></script><script src="/ScriptResource.axd?d=xoGoRbHr3drhAlZTd7gaHfSwx-PzCURTnV6xtd_tk4Nfr0TxbtgSrkgskMxVvohtIiwFjEnqwQIjtjy0qU87cQ-0A6L-VXL1UJnY7ecG60zi7svunnDQUUmf8g0qKhtnHyKhhWMHFak-J756WI5Yzj_9TdDQNdnT789j3zK262evb6ZHsWHwCihIShVBZwXA0&amp;t=ffffffffc820c398"></script><script src="/_layouts/15/blank.js?rev=nBzPIm07cpYroIjvUHh4jw%3D%3DTAG0"></script><script src="/ScriptResource.axd?d=8Fpt0l5Lc8uwKEWGGysY9dCKZJKkwSg63FuwuL8OALExFdtYnKwiFJQ0cawhd-yUpRM82Oq7uONveA3ZuFwjLhZvU0jMWViM9JUtMoNB3GZEeMsaNQOzJuI1qPTGu-L3DR_UKS1PqaxJt4ZYBmPBr5QNmkB80ZeIHXt9ixPgqnlIXF6SXiSvhtYojUjDG1Ve0&amp;t=ffffffffc820c398"></script><script>RegisterSod("require.js","\u002f_layouts\u002f15\u002frequire.js?rev=4UhLIF\u00252FezOvmGnh\u00252Fs0LLpA\u00253D\u00253DTAG0");</script><script>RegisterSod("strings.js","\u002f_layouts\u002f15\u002f3082\u002fstrings.js?rev=L3YO7EIa1vDmCtORuAnTsQ\u00253D\u00253DTAG0");</script><script>RegisterSod("sp.res.resx","\u002f_layouts\u002f15\u002f3082\u002fsp.res.js?rev=J\u00252BxNHd1ikIXlPBl\u00252FKw\u00252FybQ\u00253D\u00253DTAG0");</script><script>RegisterSod("sp.runtime.js","\u002f_layouts\u002f15\u002fsp.runtime.js?rev=QZuY9EfO812\u00252FHP6vKipQPQ\u00253D\u00253DTAG0");RegisterSodDep("sp.runtime.js","sp.res.resx");</script><script>RegisterSod("sp.js","\u002f_layouts\u002f15\u002fsp.js?rev=IOhwsS2jiKK0lsxWx1LfFA\u00253D\u00253DTAG0");RegisterSodDep("sp.js","sp.runtime.js");RegisterSodDep("sp.js","sp.ui.dialog.js");RegisterSo
... [truncated]
```

- Endpoint: POST https://www.google-analytics.com/g/collect?v=2&tid=G-YHZBSPQRHE&gtm=45je59u1v9123577478za200zd9123577478&_p=1759407866061&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=514742666.1759407866&ul=es-es&sr=1280x720&uaa=x86&uab=64&uafvl=Not%253DA%253FBrand%3B24.0.0.0%7CChromium%3B140.0.7339.186&uamb=0&uam=&uap=Windows&uapv=10.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AAAAAAQ&_s=2&tag_exp=101509157~103116026~103200004~103233427~104527906~104528500~104684208~104684211~104948813~105424848~115480710&sid=1759407866&sct=1&seg=0&dl=https%3A%2F%2Fwww.exteriores.gob.es%2Fes%2FServiciosAlCiudadano%2FPaginas%2FServicios-consulares.aspx&dt=Servicios%20consulares&en=user_engagement&_et=6379&tfd=17401
  - Status: -1
  - Request headers:

```json
[
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "Referer",
    "value": "https://www.exteriores.gob.es/"
  },
  {
    "name": "User-Agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  }
]
```
  - Response headers:

```json
[]
```

- Endpoint: GET blob:https://www.exteriores.gob.es/276bbcc6-3012-413a-9048-072e39a7e9fb
  - Status: 200
  - Request headers:

```json
[
  {
    "name": "Accept",
    "value": "*/*"
  },
  {
    "name": "User-Agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "Content-Type",
    "value": "application/javascript"
  },
  {
    "name": "Content-Length",
    "value": "10252"
  }
]
```
  - Response body (trunc):

```json
const e="GENERATE_POLYGON_BUFFERS",t="GENERATE_POINT_BUFFERS",n="GENERATE_LINE_STRING_BUFFERS";function r(e,t){const n=t[0],r=t[1];return t[0]=e[0]*n+e[2]*r+e[4],t[1]=e[1]*n+e[3]*r+e[5],t}function x(e,t){const n=(r=t)[0]*r[3]-r[1]*r[2];var r;!function(e,t){if(!e)throw new Error(t)}(0!==n,"Transformation matrix cannot be inverted");const x=t[0],i=t[1],u=t[2],o=t[3],f=t[4],s=t[5];return e[0]=o/n,e[1]=-i/n,e[2]=-u/n,e[3]=x/n,e[4]=(u*s-o*f)/n,e[5]=-(x*s-i*f)/n,e}function i(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}new Array(6);var u={exports:{}};function o(e,t,n){n=n||2;var r,x,i,u,o,s,l,v=t&&t.length,c=v?t[0]*n:e.length,h=f(e,0,c,n,!0),g=[];if(!h||h.next===h.prev)return g;if(v&&(h=function(e,t,n,r){var x,i,u,o=[];for(x=0,i=t.length;x<i;x++)(u=f(e,t[x]*r,x<i-1?t[x+1]*r:e.length,r,!1))===u.next&&(u.steiner=!0),o.push(d(u));for(o.sort(p),x=0;x<o.length;x++)n=y(o[x],n);return n}(e,t,h,n)),e.length>80*n){r=i=e[0],x=u=e[1];for(var b=n;b<c;b+=n)(o=e[b])<r&&(r=o),(s=e[b+1])<x&&(x=s),o>i&&(i=o),s>u&&(u=s);l=0!==(l=Math.max(i-r,u-x))?32767/l:0}return a(h,g,n,r,x,l,0),g}function f(e,t,n,r,x){var i,u;if(x===O(e,t,n,r)>0)for(i=t;i<n;i+=r)u=P(i,e[i],e[i+1],u);else for(i=n-r;i>=t;i-=r)u=P(i,e[i],e[i+1],u);return u&&m(u,u.next)&&(B(u),u=u.next),u}function s(e,t){if(!e)return e;t||(t=e);var n,r=e;do{if(n=!1,r.steiner||!m(r,r.next)&&0!==M(r.prev,r,r.next))r=r.next;else{if(B(r),(r=t=r.prev)===r.next)break;n=!0}}while(n||r!==t);return t}function a(e,t,n,r,x,i,u){if(e){!u&&i&&function(e,t,n,r){var x=e;do{0===x.z&&(x.z=b(x.x,x.y,t,n,r)),x.prevZ=x.prev,x.nextZ=x.next,x=x.next}while(x!==e);x.prevZ.nextZ=null,x.prevZ=null,function(e){var t,n,r,x,i,u,o,f,s=1;do{for(n=e,e=null,i=null,u=0;n;){for(u++,r=n,o=0,t=0;t<s&&(o++,r=r.nextZ);t++);for(f=s;o>0||f>0&&r;)0!==o&&(0===f||!r||n.z<=r.z)?(x=n,n=n.nextZ,o--):(x=r,r=r.nextZ,f--),i?i.nextZ=x:e=x,x.prevZ=i,i=x;n=r}i.nextZ=null,s*=2}while(u>1)}(x)}(e,r,x,i);for(var o,f,p=e;e.prev!==e.next;)if(o=e.prev,f=e.next,i?v(e,r,x,i):l(e))t.push(o.i/n|0),t.push(e.
... [truncated]
```

- Endpoint: GET https://www.googletagmanager.com/gtag/js?id=G-YHZBSPQRHE&_=1759407873709
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.googletagmanager.com"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/gtag/js?id=G-YHZBSPQRHE&_=1759407873709"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "referer",
    "value": "https://www.exteriores.gob.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "cross-site"
  },
  {
    "name": "sec-fetch-storage-access",
    "value": "active"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "access-control-allow-credentials",
    "value": "true"
  },
  {
    "name": "access-control-allow-headers",
    "value": "Cache-Control"
  },
  {
    "name": "access-control-allow-origin",
    "value": "*"
  },
  {
    "name": "alt-svc",
    "value": "h3=\":443\"; ma=2592000,h3-29=\":443\"; ma=2592000"
  },
  {
    "name": "cache-control",
    "value": "private, max-age=900"
  },
  {
    "name": "content-encoding",
    "value": "zstd"
  },
  {
    "name": "content-length",
    "value": "131271"
  },
  {
    "name": "content-type",
    "value": "application/javascript; charset=UTF-8"
  },
  {
    "name": "cross-origin-resource-policy",
    "value": "cross-origin"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:35 GMT"
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 12:24:35 GMT"
  },
  {
    "name": "server",
    "value": "Google Tag Manager"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=31536000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding"
  },
  {
    "name": "x-xss-protection",
    "value": "0"
  }
]
```
  - Response body (trunc):

```json

// Copyright 2012 Google Inc. All rights reserved.
 
(function(){

var data = {
"resource": {
  "version":"2",
  
  "macros":[{"function":"__e"},{"function":"__c","vtp_value":"google.com.uy"},{"function":"__c","vtp_value":0}],
  "tags":[{"function":"__ogt_ga_send","priority":6,"vtp_value":true,"tag_id":9},{"function":"__ogt_session_timeout","priority":6,"vtp_sessionMinutes":30,"vtp_sessionHours":0,"tag_id":11},{"function":"__ogt_1p_data_v2","priority":6,"vtp_isAutoEnabled":true,"vtp_autoCollectExclusionSelectors":["list",["map","exclusionSelector",""]],"vtp_isEnabled":true,"vtp_cityType":"CSS_SELECTOR","vtp_manualEmailEnabled":false,"vtp_firstNameType":"CSS_SELECTOR","vtp_countryType":"CSS_SELECTOR","vtp_cityValue":"","vtp_emailType":"CSS_SELECTOR","vtp_regionType":"CSS_SELECTOR","vtp_autoEmailEnabled":true,"vtp_postalCodeValue":"","vtp_lastNameValue":"","vtp_phoneType":"CSS_SELECTOR","vtp_phoneValue":"","vtp_streetType":"CSS_SELECTOR","vtp_autoPhoneEnabled":false,"vtp_postalCodeType":"CSS_SELECTOR","vtp_emailValue":"","vtp_firstNameValue":"","vtp_streetValue":"","vtp_lastNameType":"CSS_SELECTOR","vtp_autoAddressEnabled":false,"vtp_regionValue":"","vtp_countryValue":"","vtp_isAutoCollectPiiEnabledFlag":false,"tag_id":12},{"function":"__ccd_ga_first","priority":5,"vtp_instanceDestinationId":"G-YHZBSPQRHE","tag_id":18},{"function":"__set_product_settings","priority":4,"vtp_instanceDestinationId":"G-YHZBSPQRHE","vtp_foreignTldMacroResult":["macro",1],"vtp_isChinaVipRegionMacroResult":["macro",2],"tag_id":17},{"function":"__ccd_ga_regscope","priority":3,"vtp_settingsTable":["list",["map","redactFieldGroup","DEVICE_AND_GEO","disallowAllRegions",false,"disallowedRegions",""],["map","redactFieldGroup","GOOGLE_SIGNALS","disallowAllRegions",true,"disallowedRegions",""]],"vtp_instanceDestinationId":"G-YHZBSPQRHE","tag_id":16},{"function":"__ccd_conversion_marking","priority":2,"vtp_conversionRules":["list",["map","matchingRules","{\"type\":5,\"args\":[{\"stringValue\":\"purchase\"},{\"contextValue\":{\"namespaceType\":1,\
... [truncated]
```

- Endpoint: GET https://www.citaconsular.es/es/hosteds/widgetdefault/2f21cd9c0d8aa26725bf8930e4691d645/bkt195382
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/es/hosteds/widgetdefault/2f21cd9c0d8aa26725bf8930e4691d645/bkt195382"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "priority",
    "value": "u=0, i"
  },
  {
    "name": "referer",
    "value": "https://www.exteriores.gob.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "document"
  },
  {
    "name": "sec-fetch-mode",
    "value": "navigate"
  },
  {
    "name": "sec-fetch-site",
    "value": "cross-site"
  },
  {
    "name": "sec-fetch-user",
    "value": "?1"
  },
  {
    "name": "upgrade-insecure-requests",
    "value": "1"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "cache-control",
    "value": "no-store, no-cache, must-revalidate"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "693"
  },
  {
    "name": "content-type",
    "value": "text/html; charset=UTF-8"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:38 GMT"
  },
  {
    "name": "expires",
    "value": "Thu, 19 Nov 1981 08:52:00 GMT"
  },
  {
    "name": "pragma",
    "value": "no-cache"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "set-cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; path=/; secure; HttpOnly;SameSite=none;Secure"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PHP/7.2.34"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="es-ES" lang="es-ES">
    <head>        
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        
        <title>Consulado Gral. de España en La Habana</title>
        
        <link href="/css/reset.css?v=5" rel="stylesheet" type="text/css" />
<link href="/css/hosted/captcha.css?v=5" rel="stylesheet" type="text/css" />
    </head>
    
    <body>
        <script>
    alert('Welcome / Bienvenido');
</script>

<div id="idCaptchaContainer">
    <div id="idCaptchaContent">
        <div id="idCaptchaText">
            To request an appointment, click on the continue button</br>
            Para solicitar cita pulse en el botón continuar
        </div>
        
        <form action="/es/hosteds/widgetdefault/2f21cd9c0d8aa26725bf8930e4691d645/bkt195382" method="POST">
            <input type="hidden" name="token" value="b755773c522300a47581f9e22a036fc2d8db">
            
            <button id="idCaptchaButton">
                Continue / Continuar
            </button>
        </form>
    </div>    
</div>    </body>
</html>
```

- Endpoint: GET https://www.citaconsular.es/css/reset.css?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/css/reset.css?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "text/css,*/*;q=0.1"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh"
  },
  {
    "name": "priority",
    "value": "u=0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/es/hosteds/widgetdefault/2f21cd9c0d8aa26725bf8930e4691d645/bkt195382"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "style"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-origin"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "628"
  },
  {
    "name": "content-type",
    "value": "text/css"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:38 GMT"
  },
  {
    "name": "etag",
    "value": "\"48d-5d89b4b92ddc0-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:38 GMT"
  },
  {
    "name": "last-modified",
    "value": "Tue, 22 Feb 2022 13:26:23 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
/**
* Eric Meyer's Reset CSS v2.0 (http://meyerweb.com/eric/tools/css/reset/)
* http://cssreset.com
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video{
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section{
    display: block;
}

body{
    line-height: 1;
}

ol, ul{
    list-style: none;
}

blockquote, q{
    quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after{
    content: '';
    content: none;
}

table{
    border-collapse: collapse;
    border-spacing: 0;
}

a{
    text-decoration: none;
}
```

- Endpoint: GET https://www.citaconsular.es/css/hosted/captcha.css?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/css/hosted/captcha.css?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "text/css,*/*;q=0.1"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh"
  },
  {
    "name": "priority",
    "value": "u=0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/es/hosteds/widgetdefault/2f21cd9c0d8aa26725bf8930e4691d645/bkt195382"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "style"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-origin"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "317"
  },
  {
    "name": "content-type",
    "value": "text/css"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:38 GMT"
  },
  {
    "name": "etag",
    "value": "\"253-5d89b4b92ddc0-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:38 GMT"
  },
  {
    "name": "last-modified",
    "value": "Tue, 22 Feb 2022 13:26:23 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
html, 
body{
    height: 100%;
    width: 100%;
    font-family: Arial, Helvetica, Sans-serif;
    font-size: 15px;    
    color: #424F5e;
}

#idCaptchaContainer{
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;    
}

#idCaptchaContent{
    text-align: center;
}

#idCaptchaText{
    font-size: 1.600em;
    line-height: 1.200em;
}

#idCaptchaButton{
    background: #81C04D;
    color: #FFF;
    display: inline-block;
    padding: 15px 30px;
    cursor: pointer;    
    font-size: 1.333em;
    margin-top: 25px;
    border: none;
}
```

- Endpoint: POST https://www.citaconsular.es/es/hosteds/widgetdefault/2f21cd9c0d8aa26725bf8930e4691d645/bkt195382
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "POST"
  },
  {
    "name": ":path",
    "value": "/es/hosteds/widgetdefault/2f21cd9c0d8aa26725bf8930e4691d645/bkt195382"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cache-control",
    "value": "max-age=0"
  },
  {
    "name": "content-length",
    "value": "42"
  },
  {
    "name": "content-type",
    "value": "application/x-www-form-urlencoded"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh"
  },
  {
    "name": "origin",
    "value": "https://www.citaconsular.es"
  },
  {
    "name": "priority",
    "value": "u=0, i"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/es/hosteds/widgetdefault/2f21cd9c0d8aa26725bf8930e4691d645/bkt195382"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "document"
  },
  {
    "name": "sec-fetch-mode",
    "value": "navigate"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-origin"
  },
  {
    "name": "sec-fetch-user",
    "value": "?1"
  },
  {
    "name": "upgrade-insecure-requests",
    "value": "1"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Request body:

```json
token=b755773c522300a47581f9e22a036fc2d8db
```
  - Response headers:

```json
[
  {
    "name": "cache-control",
    "value": "no-store, no-cache, must-revalidate"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "663"
  },
  {
    "name": "content-type",
    "value": "text/html; charset=UTF-8"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:38 GMT"
  },
  {
    "name": "expires",
    "value": "Thu, 19 Nov 1981 08:52:00 GMT"
  },
  {
    "name": "pragma",
    "value": "no-cache"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PHP/7.2.34"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="es-ES" lang="es-ES">
    <head>        
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        
        <title>Consulado Gral. de España en La Habana</title>
        
            </head>
    
    <body>
        <div id="idBktWidgetBody"></div>

<script type="text/javascript">
    var bkt_init_widget = {
        type: 'default', 
        srvsrc: 'https://citaconsular.es', 
        publickey: '2f21cd9c0d8aa26725bf8930e4691d645', 
        lang: 'es', 
        services: ['bkt195382'], 
        agendas: [],
        dates: []
    };       
    
    var oScriptHtmlElement = document.createElement('script');

    oScriptHtmlElement.setAttribute('type', 'text/javascript');
    oScriptHtmlElement.setAttribute('src', bkt_init_widget.srvsrc+'/js/widgets/loadermaec.js?v='+5);
    (document.getElementsByTagName('head')[0] || document.documentElement).appendChild(oScriptHtmlElement);           
</script>    </body>
</html>
```

- Endpoint: GET https://citaconsular.es/js/widgets/loadermaec.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/loadermaec.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:40 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/widgets/loadermaec.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: POST https://www.google-analytics.com/g/collect?v=2&tid=G-YHZBSPQRHE&gtm=45je59u1v9123577478za200zd9123577478&_p=1759407874179&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=514742666.1759407866&ul=es-es&sr=1280x720&uaa=x86&uab=64&uafvl=Not%253DA%253FBrand%3B24.0.0.0%7CChromium%3B140.0.7339.186&uamb=0&uam=&uap=Windows&uapv=10.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AAAAAAQ&_s=1&tag_exp=101509157~102015666~103116026~103200004~103233427~104527906~104528500~104684208~104684211~104948813~115480710~115616985&sid=1759407866&sct=1&seg=1&dl=https%3A%2F%2Fwww.exteriores.gob.es%2Fes%2FServiciosAlCiudadano%2FPaginas%2FServicios-consulares.aspx%3Fscco%3DCuba%26scd%3D166%26scca%3DCertificados%26scs%3DCertificado%2Bde%2Bnacimiento&dr=https%3A%2F%2Fwww.exteriores.gob.es%2Fes%2FServiciosAlCiudadano%2FPaginas%2FServicios-consulares.aspx&dt=Servicios%20consulares&en=page_view&_ee=1&tfd=13564
  - Status: 204
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.google-analytics.com"
  },
  {
    "name": ":method",
    "value": "POST"
  },
  {
    "name": ":path",
    "value": "/g/collect?v=2&tid=G-YHZBSPQRHE&gtm=45je59u1v9123577478za200zd9123577478&_p=1759407874179&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=514742666.1759407866&ul=es-es&sr=1280x720&uaa=x86&uab=64&uafvl=Not%253DA%253FBrand%3B24.0.0.0%7CChromium%3B140.0.7339.186&uamb=0&uam=&uap=Windows&uapv=10.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AAAAAAQ&_s=1&tag_exp=101509157~102015666~103116026~103200004~103233427~104527906~104528500~104684208~104684211~104948813~115480710~115616985&sid=1759407866&sct=1&seg=1&dl=https%3A%2F%2Fwww.exteriores.gob.es%2Fes%2FServiciosAlCiudadano%2FPaginas%2FServicios-consulares.aspx%3Fscco%3DCuba%26scd%3D166%26scca%3DCertificados%26scs%3DCertificado%2Bde%2Bnacimiento&dr=https%3A%2F%2Fwww.exteriores.gob.es%2Fes%2FServiciosAlCiudadano%2FPaginas%2FServicios-consulares.aspx&dt=Servicios%20consulares&en=page_view&_ee=1&tfd=13564"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "content-length",
    "value": "0"
  },
  {
    "name": "origin",
    "value": "https://www.exteriores.gob.es"
  },
  {
    "name": "priority",
    "value": "u=1, i"
  },
  {
    "name": "referer",
    "value": "https://www.exteriores.gob.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "empty"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "cross-site"
  },
  {
    "name": "sec-fetch-storage-access",
    "value": "active"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "access-control-allow-credentials",
    "value": "true"
  },
  {
    "name": "access-control-allow-origin",
    "value": "https://www.exteriores.gob.es"
  },
  {
    "name": "alt-svc",
    "value": "h3=\":443\"; ma=2592000,h3-29=\":443\"; ma=2592000"
  },
  {
    "name": "cache-control",
    "value": "no-cache, no-store, must-revalidate"
  },
  {
    "name": "content-length",
    "value": "0"
  },
  {
    "name": "content-security-policy-report-only",
    "value": "script-src 'none'; form-action 'none'; frame-src 'none'; report-uri https://csp.withgoogle.com/csp/scaffolding/ascnsrsggc:102:0"
  },
  {
    "name": "content-type",
    "value": "text/plain"
  },
  {
    "name": "cross-origin-opener-policy-report-only",
    "value": "same-origin; report-to=ascnsrsggc:102:0"
  },
  {
    "name": "cross-origin-resource-policy",
    "value": "cross-origin"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:40 GMT"
  },
  {
    "name": "expires",
    "value": "Fri, 01 Jan 1990 00:00:00 GMT"
  },
  {
    "name": "pragma",
    "value": "no-cache"
  },
  {
    "name": "report-to",
    "value": "{\"group\":\"ascnsrsggc:102:0\",\"max_age\":2592000,\"endpoints\":[{\"url\":\"https://csp.withgoogle.com/csp/report-to/scaffolding/ascnsrsggc:102:0\"}],}"
  },
  {
    "name": "server",
    "value": "Golfe2"
  }
]
```

- Endpoint: GET https://www.citaconsular.es/js/widgets/loadermaec.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/loadermaec.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "1477"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:40 GMT"
  },
  {
    "name": "etag",
    "value": "\"1910-61aaea2e0b757-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:40 GMT"
  },
  {
    "name": "last-modified",
    "value": "Wed, 12 Jun 2024 10:13:39 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
(function(){
    var sVersion = (inIframe()) ? '276' : '5';
    
    var sSrc = bkt_init_widget.srvsrc;    
    var sServerUrl = sSrc.split("/js/")[0];
    
    var sJqueryUrl = sServerUrl + '/js/jquery/jquery-2.1.1.min.js';
    var sRequireUrl = sServerUrl + '/js/require/require-2.1.14.js';
    
    var sMainUrl = sServerUrl + '/onlinebookings/main';
    var sMainJsUrl = sServerUrl + '/js/widgets/mainv1.js?v=' + sVersion;
    
    var sMainContainer = '#idBktWidgetBody';
    
//    var jQueryBkt;
                 
    function start(){
        bkt_init_widget.version = sVersion;
        
        bkt_init_widget.src = document.location.href;
        
        if(bkt_init_widget.src.indexOf("#redsysok") >= 0){
            var src = bkt_init_widget.src.split("#redsysok");
            bkt_init_widget.src = src[0];
        }
        
        if(bkt_init_widget.src.indexOf("#redsysko") >= 0){
            var src = bkt_init_widget.src.split("#redsysko");
            bkt_init_widget.src = src[0];
        }        
        
        if(typeof bkt_init_widget.lang === 'undefined'){ bkt_init_widget.lang = 'es'; }
        
        var someUrlPieces = location.href.split("#dochangelanguage/");
        if(someUrlPieces.length > 1){ bkt_init_widget.lang = someUrlPieces[1]; }
        
        loadJquery();
    }
    
    function loadJquery(){
        if(window.jQuery === undefined){
            var oScriptHtmlElement = document.createElement('script');
            oScriptHtmlElement.setAttribute("type","text/javascript");
            oScriptHtmlElement.setAttribute("src", sJqueryUrl);
            (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(oScriptHtmlElement);
            
            if(oScriptHtmlElement.attachEvent){ //it is IE                
                oScriptHtmlElement.onreadystatechange = function() { // for IE
                    if(this.readyState == 'complete' || this.readyState == 'loaded'){
                        this.onreadystatechange = null;
                        scr
... [truncated]
```

- Endpoint: GET https://citaconsular.es/js/jquery/jquery-2.1.1.min.js
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/jquery/jquery-2.1.1.min.js"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:40 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/jquery/jquery-2.1.1.min.js"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://www.citaconsular.es/js/jquery/jquery-2.1.1.min.js
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/jquery/jquery-2.1.1.min.js"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "29497"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:40 GMT"
  },
  {
    "name": "etag",
    "value": "\"14915-5d89b4b92ddc0-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:40 GMT"
  },
  {
    "name": "last-modified",
    "value": "Tue, 22 Feb 2022 13:26:23 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
/*! jQuery v2.1.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.1",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a
... [truncated]
```

- Endpoint: GET https://citaconsular.es/onlinebookings/main/?callback=jQuery2110376749665247451_1759407880176&type=default&publickey=2f21cd9c0d8aa26725bf8930e4691d645&lang=es&services%5B%5D=bkt195382&version=5&src=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&_=1759407880177
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/onlinebookings/main/?callback=jQuery2110376749665247451_1759407880176&type=default&publickey=2f21cd9c0d8aa26725bf8930e4691d645&lang=es&services%5B%5D=bkt195382&version=5&src=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&_=1759407880177"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:41 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/onlinebookings/main/?callback=jQuery2110376749665247451_1759407880176&type=default&publickey=2f21cd9c0d8aa26725bf8930e4691d645&lang=es&services%5B%5D=bkt195382&version=5&src=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&_=1759407880177"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://citaconsular.es/images/widgets/default/loading/loading.gif
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/images/widgets/default/loading/loading.gif"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "priority",
    "value": "i"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "image"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:41 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/images/widgets/default/loading/loading.gif"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://www.citaconsular.es/onlinebookings/main/?callback=jQuery2110376749665247451_1759407880176&type=default&publickey=2f21cd9c0d8aa26725bf8930e4691d645&lang=es&services%5B%5D=bkt195382&version=5&src=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&_=1759407880177
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/onlinebookings/main/?callback=jQuery2110376749665247451_1759407880176&type=default&publickey=2f21cd9c0d8aa26725bf8930e4691d645&lang=es&services%5B%5D=bkt195382&version=5&src=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&_=1759407880177"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "cache-control",
    "value": "no-store, no-cache, must-revalidate"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "17897"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:41 GMT"
  },
  {
    "name": "expires",
    "value": "Thu, 19 Nov 1981 08:52:00 GMT"
  },
  {
    "name": "pragma",
    "value": "no-cache"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PHP/7.2.34"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
callback=jQuery2110376749665247451_1759407880176("        \r\n<!-- Global site tag (gtag.js) - Google Analytics -->\r\n<!--\r\n<script async src=\"https:\/\/www.googletagmanager.com\/gtag\/js?id=G-6XR9R9RBSH\"><\/script>\r\n<script>\r\n  window.dataLayer = window.dataLayer || [];\r\n  function gtag(){dataLayer.push(arguments);}\r\n  gtag('js', new Date());\r\n\r\n  gtag('config', 'G-6XR9R9RBSH');\r\n<\/script>      \r\n-->\r\n\r\n\r\n    <!-- Google Tag Manager PONER EN EL HEAD-->\r\n    <script>\r\n        (function(w,d,s,l,i){\r\n            w[l]=w[l]||[];\r\n            w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});\r\n            var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';\r\n            j.async=true;\r\n            j.src='https:\/\/www.googletagmanager.com\/gtm.js?id='+i+dl;\r\n            f.parentNode.insertBefore(j,f); \r\n        })(window,document,'script','dataLayer', 'GTM-K4N8R5C');\r\n    <\/script>\r\n    <!-- End Google Tag Manager -->\r\n\r\n    <!-- Google Tag Manager (noscript) PONER EN EL BODY-->\r\n    <noscript>\r\n        <iframe src='https:\/\/www.googletagmanager.com\/ns.html?id=GTM-K4N8R5C' height='0' width='0' style='display:none;visibility:hidden'><\/iframe>\r\n    <\/noscript>\r\n    <!-- End Google Tag Manager (noscript) -->        \r\n\r\n    <script type=\"text\/javascript\">\r\n        sBktWidgetGoogleAnalyticsId = \"G-F3TYSDL945\";\r\n    <\/script>\r\n        \r\n    <script src='https:\/\/www.google.com\/recaptcha\/api.js'><\/script>\r\n    \r\n    <script type=\"text\/javascript\">\r\n        var widgetBktReCaptchaSignUp;\r\n        var widgetBktReCaptchaSignIn;\r\n        \r\n        var onLoadBktReCaptchaSignUp = function(){\r\n            if(jQuery('#idDivReCaptchaSignUp').length){\r\n                widgetBktReCaptchaSignUp = grecaptcha.render('idDivReCaptchaSignUp', {\r\n                    'sitekey' : '6Le7usYfAAAAAHX3Bv0eWXNtEf9D5aV4BtPR2SoQ',\r\n                    'callback' : onReCaptchaSubmitedSignUp\r\n        
... [truncated]
```

- Endpoint: GET https://www.citaconsular.es/images/widgets/default/loading/loading.gif
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/images/widgets/default/loading/loading.gif"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh"
  },
  {
    "name": "priority",
    "value": "u=1, i"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "image"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-length",
    "value": "2989"
  },
  {
    "name": "content-type",
    "value": "image/gif"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:41 GMT"
  },
  {
    "name": "etag",
    "value": "\"bad-5d89b4b92ddc0\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:41 GMT"
  },
  {
    "name": "last-modified",
    "value": "Tue, 22 Feb 2022 13:26:23 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
R0lGODlhGAAYAMQAAO/v7+bm5t7e3tbW1szMzMXFxb29vbW1ta2traWlpZmZmYyMjISEhHt7e3Nzc2ZmZmZmZlpaWkpKSkJCQjMzMykpKSEhIRkZGRAQEAgICAAAAP///wAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJBwAbACwAAAAAGAAYAAAF3uAmjmJgOM/jGANAvuSxIEVkR7XlBPAoLAzGYnOLACqXS8XQ2ySCwUDD1igkkxJY4OCEFgwKhWFxlQQo3BEiwU0sCi/AwmKmaDC8TSHB57p6A2cagw8ifIdNIwMZgxoZAAAGawkDiSMMgxgSBAE8AZWWIgBVGwABXwYFeaGlAwQEAwayLKwiAq+vs7S1t7ioqrWtr4F5q6F5phsDBczGTQG4AiLM1Ky4r7bUoJaur9IiBAWVrs4b0OPYIwDorwEAAgKmuOOA18rDG9fbMPb9uKG34l17R+BbrU/Dyo0IAQAh+QQJBwAbACwAAAAAGAAYAAAF2OAmjiJAKMuiEALpukViDEzNDEukAO8YIIkEYmNjbB6RyIPQ2xyCwYCiphgkk42XyQkdEA4HAuLaCEgMJIOhwB28xmXJpRIQDdTrpihgvvgdInhqenYWfhcWPAR4LYQbC34VEQMBPACNjgALBT8rBQWUjiMKFBoaFQSfBZiOEaYaGKmfrISuprGfoaIbpKZ0PBt1u3UACAobAgTKwoQByiwiz8qi0kzIz26OXsqYym5ezD4E39Mk5MuXAgDO3hvZLtvT227S7y/SG/j4hMnq0pfQdgWbF85FCAAh+QQJBwAbACwAAAAAGAAYAAAF2eAmjuNwIMgxBGTbDgYhJHQiIMvhkoDhG5taYrNgMBaC3YbwMwAOtEPAaBy2AINN4ScQFApe6rBBIBEK2W2yVViMIw+AyPvNKjfyRmSvEH3/dyIBe4QiA38sgRsIew9IAXIbiYqLA08JAwQEK5QiCRIWFxOammuUDhepFaQynRuoqpmbk4qfoROQgp0ADQUBUBsCpLRKDBoaGBJlrGWBAxnHGhlywpp2dwAU0Q8j1huZxJKb2ci0WbIEkF0AAaSWFDovrN/erNcu8/mkisICAKwA+rmSJIuTkhAAIfkECQcAGwAsAAAAABgAGAAABdngJo5jUBhGEQBk2wrFEKDonBQuCRBFv9GGDSKRQARym0HPd0oFiMRDbpBcBgID2QAqTQhIBAJVeWxtu4zFSBAWI0kJhly6aYffIsBCnhaxw2V4BXILRisigXgbKosGA2EDLIoiBg0REQ52X5MbCpcRD5qcnZ8Pj2KSk5WXDocbiW96BQAnG38EsDkLFxcVEVR2BIoDFrwXFiy3VG8yEsYOI5BJuC0ADBkUAc4ViWNtKwICAA0a5dkSQWZ202IF5eZv6+sY5Rh0SGzidgASGQ+5SLBACkAgFYkQACH5BAkHABsALAAAAAAYABgAAAXQ4CaOY0CcRECurEAIQCEXAGEM7IoS21xshqABkNsMdkbZACA08Fi44ykQEAiqwt9BNTpFUy2DNoEYubxF0iHB/m12z/SGTRedwXIjGzEMEDdceUYqR1JLgiIECgwMCjsCiBsHjAwLj5GTjAuGf4KKjAp+IoF5CF8bd6RFCBERDwuQcHkBrbV2KDhpAwENtQpdBF+qAAsWEryunUZGKAEKrQoLF9PHDXEjUicbFBoaFAXT1Gk7AN3dARXTFQZyLgII5hqsFg6qaQoVGBgVCocsIQAh+QQJBwAbACwAAAAAGAAYAAAF3uAmjmMwEMQQkGwrEAKAosBQCC07E9u+FUACILc5zYqowQ9YULaURkIgIBBMmUohKYlcsQLNn8EwenGJo8LY4Nzx0KL1WGSWwulrXmC48d43MYADRgN8fwIHCQkHOzh/P4oJCI2PkIoIhIZ3iIoHeyJ+dwUrAkp1oUQFDAwLCCtudwALq6x0M4VOLSsJtAcjSQAUGQyaGwgRDRu8CyyFFBrQDQkODpIR18kJjiTP0BoFEhcXEgPX2EQHGNAYARbiFgAP1w9vOQEPGRIH
... [truncated]
```

- Endpoint: GET https://pocpaymentserve.s3.amazonaws.com/payform.min.css
  - Status: 200
  - Request headers:

```json
[
  {
    "name": "Accept",
    "value": "text/css,*/*;q=0.1"
  },
  {
    "name": "Accept-Encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "Accept-Language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "Connection",
    "value": "keep-alive"
  },
  {
    "name": "Host",
    "value": "pocpaymentserve.s3.amazonaws.com"
  },
  {
    "name": "Referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "Sec-Fetch-Dest",
    "value": "style"
  },
  {
    "name": "Sec-Fetch-Mode",
    "value": "no-cors"
  },
  {
    "name": "Sec-Fetch-Site",
    "value": "cross-site"
  },
  {
    "name": "Sec-Fetch-Storage-Access",
    "value": "active"
  },
  {
    "name": "User-Agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  }
]
```
  - Response headers:

```json
[
  {
    "name": "Accept-Ranges",
    "value": "bytes"
  },
  {
    "name": "Content-Length",
    "value": "22570"
  },
  {
    "name": "Content-Type",
    "value": "text/css"
  },
  {
    "name": "Date",
    "value": "Thu, 02 Oct 2025 12:24:43 GMT"
  },
  {
    "name": "ETag",
    "value": "\"4dbd78071e8e2e9961b5290ec0a39fd4\""
  },
  {
    "name": "Last-Modified",
    "value": "Mon, 24 Oct 2022 19:45:47 GMT"
  },
  {
    "name": "Server",
    "value": "AmazonS3"
  },
  {
    "name": "x-amz-id-2",
    "value": "MSrafUQQrrEvLGw2nDVnMVu7yb1Wz3iq/5kaJOjNZyBglzy4lF2lkZIC7L+Bmupc/ueKyaFMroo="
  },
  {
    "name": "x-amz-request-id",
    "value": "AJD2ZBB3SMTBWND8"
  },
  {
    "name": "x-amz-server-side-encryption",
    "value": "AES256"
  }
]
```
  - Response body (trunc):

```json
*{-webkit-box-sizing:border-box;box-sizing:border-box}blockquote,body,button,dd,dl,figure,h1,h2,h3,h4,h5,h6,ol,p,pre,ul{margin:0;padding:0}ol,ul{list-style:none}a{text-decoration:none}button,select{border:none;outline:0;background:0 0;font-family:inherit}a,button,input,select,textarea{-webkit-tap-highlight-color:transparent}:root{overflow-x:hidden;height:100%}body{background:#fff;min-height:100%;display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;font-size:62.5%;font-family:Roboto,Open Sans,Segoe UI,sans-serif;font-weight:400;font-style:normal;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;-webkit-font-feature-settings:"pnum";font-feature-settings:"pnum";font-variant-numeric:proportional-nums}.globalContent{-ms-flex-positive:1;-webkit-box-flex:1;flex-grow:1}@font-face{font-family:StripeIcons;src:url(data:application/octet-stream;base64,d09GRk9UVE8AAAZUAAoAAAAAB6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABDRkYgAAADKAAAAx8AAAOKkWuAp0dTVUIAAAZIAAAACgAAAAoAAQAAT1MvMgAAAXAAAABJAAAAYGcdjVZjbWFwAAACvAAAAFYAAACUKEhKfWhlYWQAAAD8AAAAMAAAADYJAklYaGhlYQAAAVAAAAAgAAAAJAYoAa5obXR4AAABLAAAACQAAAAoEOAAWW1heHAAAAD0AAAABgAAAAYAClAAbmFtZQAAAbwAAAD%2FAAABuXejDuxwb3N0AAADFAAAABMAAAAg%2F7gAMgAAUAAACgAAeNpjYGRgYABifeaSpHh%2Bm68MzMwHgCIMl08yqyDo%2F95Mkcy8QC4zAxNIFAD8tAiweNpjfMAQyfiAgYEpgoGBcQmQlmFgYPgAZOtAcQZEDgCHaQVGeNpjYGRgYD7z34eBgSmCgeH%2Ff6ZIBqAICuACAHpYBNp42mNgZtzAOIGBlYGDqYDJgYGBwQNCMwYwGDEcA%2FKBUthBqHe4H4MDg4L6Imae%2Fz4MB5jPMGwBCjOC5Bi9mKYAKQUGBgAFHgteAAAAeNplkMFqwkAURU9itBVKF6XLLrLsxiGKMYH0B4IgoqjdRokajAmNUfolhX5Df7IvZhBt5zHMeffduQwDPPCFQbWM81mzyZ3uocEz95qtK0%2BTN140t2jzLk7DaotiEmk2eWSlucErH5otnvjW3OSTH82tSg8n8eaYRkVXOY4TzIaLURB2tDaPi0OSZ3Y9G09tx6lxm5erPDtVA%2BX7wT7axXm5Vmmy7ClXDfqe515CCJkQs%2BFIKk8t6KJwzhUwY8iCkVBI54%2FvvzKXruBAQk6GfZM0ZipKxdfqVpylfErlP11uKHypgL2k7iSz8qxFTSV5SU%2FIlT2gjyfl%2FgKN9EDsAHjaY2BgYGaA4DAGRgYQkAHyGMF8NgYrIM3JIAHEEACj8QNOBh
... [truncated]
```

- Endpoint: GET https://www.googletagmanager.com/gtm.js?id=GTM-K4N8R5C
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.googletagmanager.com"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/gtm.js?id=GTM-K4N8R5C"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "cross-site"
  },
  {
    "name": "sec-fetch-storage-access",
    "value": "active"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "access-control-allow-credentials",
    "value": "true"
  },
  {
    "name": "access-control-allow-headers",
    "value": "Cache-Control"
  },
  {
    "name": "access-control-allow-origin",
    "value": "*"
  },
  {
    "name": "alt-svc",
    "value": "h3=\":443\"; ma=2592000,h3-29=\":443\"; ma=2592000"
  },
  {
    "name": "cache-control",
    "value": "private, max-age=900"
  },
  {
    "name": "content-encoding",
    "value": "zstd"
  },
  {
    "name": "content-length",
    "value": "107572"
  },
  {
    "name": "content-type",
    "value": "application/javascript; charset=UTF-8"
  },
  {
    "name": "cross-origin-resource-policy",
    "value": "cross-origin"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:42 GMT"
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 12:24:42 GMT"
  },
  {
    "name": "last-modified",
    "value": "Thu, 02 Oct 2025 12:00:00 GMT"
  },
  {
    "name": "server",
    "value": "Google Tag Manager"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=31536000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding"
  },
  {
    "name": "x-xss-protection",
    "value": "0"
  }
]
```
  - Response body (trunc):

```json

// Copyright 2012 Google Inc. All rights reserved.
 
 (function(w,g){w[g]=w[g]||{};
 w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');
 
(function(){

var data = {
"resource": {
  "version":"5",
  
  "macros":[{"function":"__e"},{"function":"__v","vtp_name":"gtm.historyChangeSource","vtp_dataLayerVersion":1},{"function":"__e"},{"function":"__v","vtp_name":"gtm.newUrlFragment","vtp_dataLayerVersion":1},{"function":"__u","vtp_component":"PATH","vtp_enableMultiQueryKeys":false,"vtp_enableIgnoreEmptyQueryParam":false},{"function":"__jsm","vtp_javascript":["template","(function(){return\"gtm.historyChange\"===",["escape",["macro",2],8,16],"\u0026\u0026",["escape",["macro",3],8,16],"?",["escape",["macro",4],8,16],"+\"#\"+",["escape",["macro",3],8,16],":void 0})();"]},{"function":"__u","vtp_component":"URL","vtp_enableMultiQueryKeys":false,"vtp_enableIgnoreEmptyQueryParam":false},{"function":"__u","vtp_component":"HOST","vtp_enableMultiQueryKeys":false,"vtp_enableIgnoreEmptyQueryParam":false},{"function":"__f","vtp_component":"URL"}],
  "tags":[{"function":"__googtag","metadata":["map"],"once_per_event":true,"vtp_tagId":"G-F3TYSDL945","vtp_configSettingsTable":["list",["map","parameter","RutaWidget","parameterValue","{page: \"\"\/\"\" + Backbone.history.getFragment()}"],["map","parameter","anonymizeIp","parameterValue","true"],["map","parameter","send_page_view","parameterValue","true"]],"tag_id":3},{"function":"__hl","tag_id":4}],
  "predicates":[{"function":"_eq","arg0":["macro",0],"arg1":"gtm.js"},{"function":"_eq","arg0":["macro",0],"arg1":"gtm.init_consent"},{"function":"_eq","arg0":["macro",0],"arg1":"gtm.init"},{"function":"_eq","arg0":["macro",1],"arg1":"popstate"},{"function":"_eq","arg0":["macro",0],"arg1":"gtm.historyChange"}],
  "rules":[[["if",0],["add",0,1]],[["if",1],["add",0]],[["if",2],["add",0]],[["if",3,4],["add",0]]]
},
"runtime":[ [50,"__e",[46,"a"],[36,[13,[41,"$0"],[3,"$0",["require","internal.getEventData"]],["$0","event"]]]]
 ,[50,"__f",[46,"a"],[52,"b",["require","copyFromDa
... [truncated]
```

- Endpoint: GET https://www.google.com/recaptcha/api.js?_=1759407880178
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.google.com"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/recaptcha/api.js?_=1759407880178"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "cross-site"
  },
  {
    "name": "sec-fetch-storage-access",
    "value": "active"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "alt-svc",
    "value": "h3=\":443\"; ma=2592000,h3-29=\":443\"; ma=2592000"
  },
  {
    "name": "cache-control",
    "value": "private, max-age=300"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-type",
    "value": "text/javascript; charset=utf-8"
  },
  {
    "name": "cross-origin-opener-policy-report-only",
    "value": "same-origin; report-to=\"coop_38fac9d5b82543fc4729580d18ff2d3d\""
  },
  {
    "name": "cross-origin-resource-policy",
    "value": "cross-origin"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:42 GMT"
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 12:24:42 GMT"
  },
  {
    "name": "report-to",
    "value": "{\"group\":\"coop_38fac9d5b82543fc4729580d18ff2d3d\",\"max_age\":2592000,\"endpoints\":[{\"url\":\"https://csp.withgoogle.com/csp/report-to/38fac9d5b82543fc4729580d18ff2d3d\"}]}"
  },
  {
    "name": "server",
    "value": "ESF"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-frame-options",
    "value": "SAMEORIGIN"
  },
  {
    "name": "x-xss-protection",
    "value": "0"
  }
]
```
  - Response body (trunc):

```json
/* PLEASE DO NOT COPY AND PASTE THIS CODE. */(function(){var w=window,C='___grecaptcha_cfg',cfg=w[C]=w[C]||{},N='grecaptcha';var gr=w[N]=w[N]||{};gr.ready=gr.ready||function(f){(cfg['fns']=cfg['fns']||[]).push(f);};w['__recaptcha_api']='https://www.google.com/recaptcha/api2/';(cfg['render']=cfg['render']||[]).push('onload');(cfg['clr']=cfg['clr']||[]).push('true');(cfg['anchor-ms']=cfg['anchor-ms']||[]).push(20000);(cfg['execute-ms']=cfg['execute-ms']||[]).push(15000);w['__google_recaptcha_client']=true;var d=document,po=d.createElement('script');po.type='text/javascript';po.async=true; po.charset='utf-8';var v=w.navigator,m=d.createElement('meta');m.httpEquiv='origin-trial';m.content='A7vZI3v+Gz7JfuRolKNM4Aff6zaGuT7X0mf3wtoZTnKv6497cVMnhy03KDqX7kBz/q/iidW7srW31oQbBt4VhgoAAACUeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGUuY29tOjQ0MyIsImZlYXR1cmUiOiJEaXNhYmxlVGhpcmRQYXJ0eVN0b3JhZ2VQYXJ0aXRpb25pbmczIiwiZXhwaXJ5IjoxNzU3OTgwODAwLCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==';if(v&&v.cookieDeprecationLabel){v.cookieDeprecationLabel.getValue().then(function(l){if(l!=='treatment_1.1'&&l!=='treatment_1.2'&&l!=='control_1.1'){d.head.prepend(m);}});}else{d.head.prepend(m);}po.src='https://www.gstatic.com/recaptcha/releases/Jv8jlA-BQE5JD6rA-h_iqNH2/recaptcha__es.js';po.crossOrigin='anonymous';po.integrity='sha384-6u/6Aj+Qe0myNfBKThAIfoUseOJLNN2PwjTi7eZfRAmEny5OplsypE0VpD2RkAq6';var e=d.querySelector('script[nonce]'),n=e&&(e['nonce']||e.getAttribute('nonce'));if(n){po.setAttribute('nonce',n);}var s=d.getElementsByTagName('script')[0];s.parentNode.insertBefore(po, s);})();
```

- Endpoint: GET https://www.google.com/recaptcha/api.js?render=6LdqftIZAAAAADcngqKaM97DRGXV47ca0Xk8spwH&_=1759407880179
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.google.com"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/recaptcha/api.js?render=6LdqftIZAAAAADcngqKaM97DRGXV47ca0Xk8spwH&_=1759407880179"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "cross-site"
  },
  {
    "name": "sec-fetch-storage-access",
    "value": "active"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "alt-svc",
    "value": "h3=\":443\"; ma=2592000,h3-29=\":443\"; ma=2592000"
  },
  {
    "name": "cache-control",
    "value": "private, max-age=300"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-type",
    "value": "text/javascript; charset=utf-8"
  },
  {
    "name": "cross-origin-opener-policy-report-only",
    "value": "same-origin; report-to=\"coop_38fac9d5b82543fc4729580d18ff2d3d\""
  },
  {
    "name": "cross-origin-resource-policy",
    "value": "cross-origin"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:42 GMT"
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 12:24:42 GMT"
  },
  {
    "name": "report-to",
    "value": "{\"group\":\"coop_38fac9d5b82543fc4729580d18ff2d3d\",\"max_age\":2592000,\"endpoints\":[{\"url\":\"https://csp.withgoogle.com/csp/report-to/38fac9d5b82543fc4729580d18ff2d3d\"}]}"
  },
  {
    "name": "server",
    "value": "ESF"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-frame-options",
    "value": "SAMEORIGIN"
  },
  {
    "name": "x-xss-protection",
    "value": "0"
  }
]
```
  - Response body (trunc):

```json
/* PLEASE DO NOT COPY AND PASTE THIS CODE. */(function(){var w=window,C='___grecaptcha_cfg',cfg=w[C]=w[C]||{},N='grecaptcha';var gr=w[N]=w[N]||{};gr.ready=gr.ready||function(f){(cfg['fns']=cfg['fns']||[]).push(f);};w['__recaptcha_api']='https://www.google.com/recaptcha/api2/';(cfg['render']=cfg['render']||[]).push('6LdqftIZAAAAADcngqKaM97DRGXV47ca0Xk8spwH');(cfg['clr']=cfg['clr']||[]).push('true');(cfg['anchor-ms']=cfg['anchor-ms']||[]).push(20000);(cfg['execute-ms']=cfg['execute-ms']||[]).push(15000);w['__google_recaptcha_client']=true;var d=document,po=d.createElement('script');po.type='text/javascript';po.async=true; po.charset='utf-8';var v=w.navigator,m=d.createElement('meta');m.httpEquiv='origin-trial';m.content='A7vZI3v+Gz7JfuRolKNM4Aff6zaGuT7X0mf3wtoZTnKv6497cVMnhy03KDqX7kBz/q/iidW7srW31oQbBt4VhgoAAACUeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGUuY29tOjQ0MyIsImZlYXR1cmUiOiJEaXNhYmxlVGhpcmRQYXJ0eVN0b3JhZ2VQYXJ0aXRpb25pbmczIiwiZXhwaXJ5IjoxNzU3OTgwODAwLCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==';if(v&&v.cookieDeprecationLabel){v.cookieDeprecationLabel.getValue().then(function(l){if(l!=='treatment_1.1'&&l!=='treatment_1.2'&&l!=='control_1.1'){d.head.prepend(m);}});}else{d.head.prepend(m);}po.src='https://www.gstatic.com/recaptcha/releases/Jv8jlA-BQE5JD6rA-h_iqNH2/recaptcha__es.js';po.crossOrigin='anonymous';po.integrity='sha384-6u/6Aj+Qe0myNfBKThAIfoUseOJLNN2PwjTi7eZfRAmEny5OplsypE0VpD2RkAq6';var e=d.querySelector('script[nonce]'),n=e&&(e['nonce']||e.getAttribute('nonce'));if(n){po.setAttribute('nonce',n);}var s=d.getElementsByTagName('script')[0];s.parentNode.insertBefore(po, s);})();
```

- Endpoint: GET https://www.google.com/recaptcha/api.js?onload=onLoadBktReCaptchaSignUp&render=explicit&_=1759407880180
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.google.com"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/recaptcha/api.js?onload=onLoadBktReCaptchaSignUp&render=explicit&_=1759407880180"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "cross-site"
  },
  {
    "name": "sec-fetch-storage-access",
    "value": "active"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "alt-svc",
    "value": "h3=\":443\"; ma=2592000,h3-29=\":443\"; ma=2592000"
  },
  {
    "name": "cache-control",
    "value": "private, max-age=300"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-type",
    "value": "text/javascript; charset=utf-8"
  },
  {
    "name": "cross-origin-opener-policy-report-only",
    "value": "same-origin; report-to=\"coop_38fac9d5b82543fc4729580d18ff2d3d\""
  },
  {
    "name": "cross-origin-resource-policy",
    "value": "cross-origin"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:42 GMT"
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 12:24:42 GMT"
  },
  {
    "name": "report-to",
    "value": "{\"group\":\"coop_38fac9d5b82543fc4729580d18ff2d3d\",\"max_age\":2592000,\"endpoints\":[{\"url\":\"https://csp.withgoogle.com/csp/report-to/38fac9d5b82543fc4729580d18ff2d3d\"}]}"
  },
  {
    "name": "server",
    "value": "ESF"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-frame-options",
    "value": "SAMEORIGIN"
  },
  {
    "name": "x-xss-protection",
    "value": "0"
  }
]
```
  - Response body (trunc):

```json
/* PLEASE DO NOT COPY AND PASTE THIS CODE. */(function(){var w=window,C='___grecaptcha_cfg',cfg=w[C]=w[C]||{},N='grecaptcha';var gr=w[N]=w[N]||{};gr.ready=gr.ready||function(f){(cfg['fns']=cfg['fns']||[]).push(f);};w['__recaptcha_api']='https://www.google.com/recaptcha/api2/';(cfg['render']=cfg['render']||[]).push('explicit');(cfg['onload']=cfg['onload']||[]).push('onLoadBktReCaptchaSignUp');(cfg['clr']=cfg['clr']||[]).push('true');(cfg['anchor-ms']=cfg['anchor-ms']||[]).push(20000);(cfg['execute-ms']=cfg['execute-ms']||[]).push(15000);w['__google_recaptcha_client']=true;var d=document,po=d.createElement('script');po.type='text/javascript';po.async=true; po.charset='utf-8';var v=w.navigator,m=d.createElement('meta');m.httpEquiv='origin-trial';m.content='A7vZI3v+Gz7JfuRolKNM4Aff6zaGuT7X0mf3wtoZTnKv6497cVMnhy03KDqX7kBz/q/iidW7srW31oQbBt4VhgoAAACUeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGUuY29tOjQ0MyIsImZlYXR1cmUiOiJEaXNhYmxlVGhpcmRQYXJ0eVN0b3JhZ2VQYXJ0aXRpb25pbmczIiwiZXhwaXJ5IjoxNzU3OTgwODAwLCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==';if(v&&v.cookieDeprecationLabel){v.cookieDeprecationLabel.getValue().then(function(l){if(l!=='treatment_1.1'&&l!=='treatment_1.2'&&l!=='control_1.1'){d.head.prepend(m);}});}else{d.head.prepend(m);}po.src='https://www.gstatic.com/recaptcha/releases/Jv8jlA-BQE5JD6rA-h_iqNH2/recaptcha__es.js';po.crossOrigin='anonymous';po.integrity='sha384-6u/6Aj+Qe0myNfBKThAIfoUseOJLNN2PwjTi7eZfRAmEny5OplsypE0VpD2RkAq6';var e=d.querySelector('script[nonce]'),n=e&&(e['nonce']||e.getAttribute('nonce'));if(n){po.setAttribute('nonce',n);}var s=d.getElementsByTagName('script')[0];s.parentNode.insertBefore(po, s);})();
```

- Endpoint: GET https://www.google.com/recaptcha/api.js?onload=onLoadBktReCaptchaSignIn&render=explicit&_=1759407880181
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.google.com"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/recaptcha/api.js?onload=onLoadBktReCaptchaSignIn&render=explicit&_=1759407880181"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "cross-site"
  },
  {
    "name": "sec-fetch-storage-access",
    "value": "active"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "alt-svc",
    "value": "h3=\":443\"; ma=2592000,h3-29=\":443\"; ma=2592000"
  },
  {
    "name": "cache-control",
    "value": "private, max-age=300"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-type",
    "value": "text/javascript; charset=utf-8"
  },
  {
    "name": "cross-origin-opener-policy-report-only",
    "value": "same-origin; report-to=\"coop_38fac9d5b82543fc4729580d18ff2d3d\""
  },
  {
    "name": "cross-origin-resource-policy",
    "value": "cross-origin"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:42 GMT"
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 12:24:42 GMT"
  },
  {
    "name": "report-to",
    "value": "{\"group\":\"coop_38fac9d5b82543fc4729580d18ff2d3d\",\"max_age\":2592000,\"endpoints\":[{\"url\":\"https://csp.withgoogle.com/csp/report-to/38fac9d5b82543fc4729580d18ff2d3d\"}]}"
  },
  {
    "name": "server",
    "value": "ESF"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-frame-options",
    "value": "SAMEORIGIN"
  },
  {
    "name": "x-xss-protection",
    "value": "0"
  }
]
```
  - Response body (trunc):

```json
/* PLEASE DO NOT COPY AND PASTE THIS CODE. */(function(){var w=window,C='___grecaptcha_cfg',cfg=w[C]=w[C]||{},N='grecaptcha';var gr=w[N]=w[N]||{};gr.ready=gr.ready||function(f){(cfg['fns']=cfg['fns']||[]).push(f);};w['__recaptcha_api']='https://www.google.com/recaptcha/api2/';(cfg['render']=cfg['render']||[]).push('explicit');(cfg['onload']=cfg['onload']||[]).push('onLoadBktReCaptchaSignIn');(cfg['clr']=cfg['clr']||[]).push('true');(cfg['anchor-ms']=cfg['anchor-ms']||[]).push(20000);(cfg['execute-ms']=cfg['execute-ms']||[]).push(15000);w['__google_recaptcha_client']=true;var d=document,po=d.createElement('script');po.type='text/javascript';po.async=true; po.charset='utf-8';var v=w.navigator,m=d.createElement('meta');m.httpEquiv='origin-trial';m.content='A7vZI3v+Gz7JfuRolKNM4Aff6zaGuT7X0mf3wtoZTnKv6497cVMnhy03KDqX7kBz/q/iidW7srW31oQbBt4VhgoAAACUeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGUuY29tOjQ0MyIsImZlYXR1cmUiOiJEaXNhYmxlVGhpcmRQYXJ0eVN0b3JhZ2VQYXJ0aXRpb25pbmczIiwiZXhwaXJ5IjoxNzU3OTgwODAwLCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==';if(v&&v.cookieDeprecationLabel){v.cookieDeprecationLabel.getValue().then(function(l){if(l!=='treatment_1.1'&&l!=='treatment_1.2'&&l!=='control_1.1'){d.head.prepend(m);}});}else{d.head.prepend(m);}po.src='https://www.gstatic.com/recaptcha/releases/Jv8jlA-BQE5JD6rA-h_iqNH2/recaptcha__es.js';po.crossOrigin='anonymous';po.integrity='sha384-6u/6Aj+Qe0myNfBKThAIfoUseOJLNN2PwjTi7eZfRAmEny5OplsypE0VpD2RkAq6';var e=d.querySelector('script[nonce]'),n=e&&(e['nonce']||e.getAttribute('nonce'));if(n){po.setAttribute('nonce',n);}var s=d.getElementsByTagName('script')[0];s.parentNode.insertBefore(po, s);})();
```

- Endpoint: GET https://citaconsular.es/css/widgets/maec.css?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/css/widgets/maec.css?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "text/css,*/*;q=0.1"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "priority",
    "value": "u=0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "style"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:41 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/css/widgets/maec.css?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://citaconsular.es/js/require/require-2.1.14.js
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/require/require-2.1.14.js"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:42 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/require/require-2.1.14.js"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://citaconsular.es/images/widgets/default/creditcard/close.png
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/images/widgets/default/creditcard/close.png"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "priority",
    "value": "i"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "image"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:42 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/images/widgets/default/creditcard/close.png"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://citaconsular.es/images/widgets/default/creditcard/card.png
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/images/widgets/default/creditcard/card.png"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "priority",
    "value": "i"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "image"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:42 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/images/widgets/default/creditcard/card.png"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://citaconsular.es/images/widgets/default/ticket/band.png
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/images/widgets/default/ticket/band.png"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "priority",
    "value": "i"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "image"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:42 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/images/widgets/default/ticket/band.png"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://citaconsular.es/images/widgets/default/ticket/logo.png
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/images/widgets/default/ticket/logo.png"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "priority",
    "value": "i"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "image"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:42 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/images/widgets/default/ticket/logo.png"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://www.citaconsular.es/css/widgets/maec.css?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/css/widgets/maec.css?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "text/css,*/*;q=0.1"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh"
  },
  {
    "name": "priority",
    "value": "u=0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "style"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "9547"
  },
  {
    "name": "content-type",
    "value": "text/css"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:42 GMT"
  },
  {
    "name": "etag",
    "value": "\"155aa-6003609624236-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:42 GMT"
  },
  {
    "name": "last-modified",
    "value": "Tue, 11 Jul 2023 13:25:45 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
/*common.css*/#idBktWidgetBody{width:100%;font-size:15px;line-height:15px}#idBktWidgetBody *,#idBktWidgetBody ::after,#idBktWidgetBody ::before{-webkit-box-sizing:unset;-moz-box-sizing:unset;box-sizing:unset}#idBktWidgetBody #idBktWidgetDefaultBodyContainer{width:546px;margin:0 auto;position:relative}#idBktWidgetBody #idBktWidgetDefaultBodyContainer .clsOrangeText,#idBktWidgetBody #idBktWidgetDefaultBodyContainer .clsTextOrange{color:#e7522d}#idBktWidgetBody #idBktWidgetDefaultBodyContainer .clsTextGreen{color:#81c04d}#idBktWidgetBody #idBktWidgetDefaultBodyContainer .clsTextBold{font-weight:700!important}#idBktWidgetBody #idBktWidgetDefaultBodyContainer .clsTextRight{text-align:right!important}#idBktWidgetBody #idBktWidgetDefaultBodyContainer .clsTextCenter{text-align:center!important}#idBktWidgetBody #idBktWidgetDefaultBodyContainer .clsCB{clear:both}#idBktWidgetBody #idBktWidgetDefaultBodyContainer .clsHP{float:left}#idBktWidgetBody #idBktWidgetDefaultBodyContainer .clsHPR{float:right}#idBktWidgetBody #idBktWidgetDefaultBodyContainer #idDivBktButtonContinueContainer{margin-top:30px}#idBktWidgetBody #idBktWidgetDefaultBodyContainer .clsDivBackButton,#idBktWidgetBody #idBktWidgetDefaultBodyContainer .clsDivConfirmButton input[type=submit],#idBktWidgetBody #idBktWidgetDefaultBodyContainer .clsDivContinueButton{background:#81c04d;color:#fff;display:inline-block;padding:10px 30px;cursor:pointer}#idBktWidgetBody #idBktWidgetDefaultBodyContainer .clsDivCancelButton{background:#b7c3d2;color:#fff;display:inline-block;padding:10px 30px;cursor:pointer}#idBktWidgetBody #idBktWidgetDefaultBodyContainer .clsDivBackErrorButton,#idBktWidgetBody #idDivBktCCCStrBody{margin-top:15px}#idBktWidgetBody #idBktWidgetDefaultBodyContainer #idBktWidgetDefaultHeader{background-color:#494949;color:#fff;height:40px;width:100%}#idBktWidgetBody #idBktWidgetDefaultBodyContainer #idBktWidgetDefaultHeader #idBktWidgetDefaultHeaderCenterName{float:left;height:40px;line-height:40px;width:100%}#idBktWidgetBody #idBktWidgetDefaultBodyContainer #idB
... [truncated]
```

- Endpoint: GET https://www.gstatic.com/recaptcha/releases/Jv8jlA-BQE5JD6rA-h_iqNH2/recaptcha__es.js
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.gstatic.com"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/recaptcha/releases/Jv8jlA-BQE5JD6rA-h_iqNH2/recaptcha__es.js"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "origin",
    "value": "https://www.citaconsular.es"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "cross-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "access-control-allow-origin",
    "value": "*"
  },
  {
    "name": "age",
    "value": "169825"
  },
  {
    "name": "alt-svc",
    "value": "h3=\":443\"; ma=2592000,h3-29=\":443\"; ma=2592000"
  },
  {
    "name": "cache-control",
    "value": "public, max-age=31536000"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "350767"
  },
  {
    "name": "content-security-policy-report-only",
    "value": "require-trusted-types-for 'script'; report-uri https://csp.withgoogle.com/csp/recaptcha-scs"
  },
  {
    "name": "content-type",
    "value": "text/javascript"
  },
  {
    "name": "cross-origin-opener-policy",
    "value": "same-origin-allow-popups; report-to=\"recaptcha-scs\""
  },
  {
    "name": "cross-origin-resource-policy",
    "value": "cross-origin"
  },
  {
    "name": "date",
    "value": "Tue, 30 Sep 2025 13:14:18 GMT"
  },
  {
    "name": "expires",
    "value": "Wed, 30 Sep 2026 13:14:18 GMT"
  },
  {
    "name": "last-modified",
    "value": "Mon, 29 Sep 2025 12:04:53 GMT"
  },
  {
    "name": "report-to",
    "value": "{\"group\":\"recaptcha-scs\",\"max_age\":2592000,\"endpoints\":[{\"url\":\"https://csp.withgoogle.com/csp/report-to/recaptcha-scs\"}]}"
  },
  {
    "name": "server",
    "value": "sffe"
  },
  {
    "name": "timing-allow-origin",
    "value": "*"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-xss-protection",
    "value": "0"
  }
]
```
  - Response body (trunc):

```json
(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
/*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
/*

 Copyright 2018 Google Inc
 SPDX-License-Identifier: Apache-2.0
*/
/*
 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
/*


 Copyright (c) 2015-2018 Google, Inc., Netflix, Inc., Microsoft Corp. and contributors
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
     http://www.apache.org/licenses/LICENSE-2.0
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright 2005, 2007 Bob Ippolito. All Rights Reserved.
 Copyright The Closure Library Authors.
 SPDX-License-Identifier: MIT
*/
var T=function(){return[function(k,U,D,z,g,t,F,N,n,c,v,C,d,Y,W,V,u){if((k+3&73)>=(((V=[26,"isArray","join"],k)|7)>>4||(W=[],C=[],(Array[V[1]](t)?2:1)==U?(W=[F,N],U8(C,function(P){W.push(P)}),u=Q[13](19,W[V[2]](gJ()))):(Y=[],n=[],U8(t,function(P){(n.push(P[D]),Y).push(P[z])}),v=Fc((new Date).getTime()/1E3),W=Y.length==0?[v,F,N]:[Y[V[2]](YD()),v,F,N],U8(C,function(P){W.push(P)}),d=Q[13](20,W[V[2]](gJ())),c=[v,d],n.length==0||c.push(n[V[2]](g)),u=c[V[2]](i2()))),k)&&(k+2&62)<k){for(z in g=[],D)m[23](2,
U,g,z,D[z]);u=g[V[2]](p3())}return k-((((k|24)==k&&(this.W=D[VP.Symbol.iterator](),this.j=U),k)|80)==k&&(g=new Set(Array.from(z(U(),9)).map(function(P){return P&&P.hasAttribute&&P.hasAttribute(u2())?(new O8(P.getAttribute(u2()))).W:i2()})),u=Array.from(g).slice(0,25)[V[2]](K3())),8)>>4||(t=T[V[0]](3),F=p[24](22).split(U).slice(D,3).map(function(P){return t.call(P,D)}),encodeURIComponent(z).split(U).forEach(function(P,q,x){F[x=["call",28,"push"],x[2]](Q[x[1]](17,t
... [truncated]
```

- Endpoint: GET https://www.googletagmanager.com/gtag/js?id=G-F3TYSDL945&cx=c&gtm=4e59u1
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.googletagmanager.com"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/gtag/js?id=G-F3TYSDL945&cx=c&gtm=4e59u1"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "cross-site"
  },
  {
    "name": "sec-fetch-storage-access",
    "value": "active"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "access-control-allow-credentials",
    "value": "true"
  },
  {
    "name": "access-control-allow-headers",
    "value": "Cache-Control"
  },
  {
    "name": "access-control-allow-origin",
    "value": "*"
  },
  {
    "name": "alt-svc",
    "value": "h3=\":443\"; ma=2592000,h3-29=\":443\"; ma=2592000"
  },
  {
    "name": "cache-control",
    "value": "private, max-age=900"
  },
  {
    "name": "content-encoding",
    "value": "zstd"
  },
  {
    "name": "content-length",
    "value": "142139"
  },
  {
    "name": "content-type",
    "value": "application/javascript; charset=UTF-8"
  },
  {
    "name": "cross-origin-resource-policy",
    "value": "cross-origin"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:42 GMT"
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 12:24:42 GMT"
  },
  {
    "name": "server",
    "value": "Google Tag Manager"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=31536000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding"
  },
  {
    "name": "x-xss-protection",
    "value": "0"
  }
]
```
  - Response body (trunc):

```json

// Copyright 2012 Google Inc. All rights reserved.
 
(function(){

var data = {
"resource": {
  "version":"1",
  
  "macros":[{"function":"__e"},{"function":"__c","vtp_value":"google.com.uy"},{"function":"__c","vtp_value":0}],
  "tags":[{"function":"__ogt_1p_data_v2","priority":12,"vtp_isAutoEnabled":true,"vtp_autoCollectExclusionSelectors":["list",["map","exclusionSelector",""]],"vtp_isEnabled":true,"vtp_cityType":"CSS_SELECTOR","vtp_manualEmailEnabled":false,"vtp_firstNameType":"CSS_SELECTOR","vtp_countryType":"CSS_SELECTOR","vtp_cityValue":"","vtp_emailType":"CSS_SELECTOR","vtp_regionType":"CSS_SELECTOR","vtp_autoEmailEnabled":true,"vtp_postalCodeValue":"","vtp_lastNameValue":"","vtp_phoneType":"CSS_SELECTOR","vtp_phoneValue":"","vtp_streetType":"CSS_SELECTOR","vtp_autoPhoneEnabled":false,"vtp_postalCodeType":"CSS_SELECTOR","vtp_emailValue":"","vtp_firstNameValue":"","vtp_streetValue":"","vtp_lastNameType":"CSS_SELECTOR","vtp_autoAddressEnabled":false,"vtp_regionValue":"","vtp_countryValue":"","vtp_isAutoCollectPiiEnabledFlag":false,"tag_id":4},{"function":"__ccd_ga_first","priority":11,"vtp_instanceDestinationId":"G-F3TYSDL945","tag_id":17},{"function":"__set_product_settings","priority":10,"vtp_instanceDestinationId":"G-F3TYSDL945","vtp_foreignTldMacroResult":["macro",1],"vtp_isChinaVipRegionMacroResult":["macro",2],"tag_id":16},{"function":"__ccd_ga_regscope","priority":9,"vtp_settingsTable":["list",["map","redactFieldGroup","DEVICE_AND_GEO","disallowAllRegions",false,"disallowedRegions",""],["map","redactFieldGroup","GOOGLE_SIGNALS","disallowAllRegions",true,"disallowedRegions",""]],"vtp_instanceDestinationId":"G-F3TYSDL945","tag_id":15},{"function":"__ccd_em_download","priority":8,"vtp_includeParams":true,"vtp_instanceDestinationId":"G-F3TYSDL945","tag_id":14},{"function":"__ccd_em_form","priority":7,"vtp_includeParams":true,"vtp_instanceDestinationId":"G-F3TYSDL945","tag_id":13},{"function":"__ccd_em_outbound_click","priority":6,"vtp_includeParams":true,"vtp_instanceDestinationId":"G-F3TYSDL945","tag_id
... [truncated]
```

- Endpoint: GET https://www.citaconsular.es/js/require/require-2.1.14.js
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/require/require-2.1.14.js"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "6230"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:42 GMT"
  },
  {
    "name": "etag",
    "value": "\"3b73-5d89b4b92ddc0-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:42 GMT"
  },
  {
    "name": "last-modified",
    "value": "Tue, 22 Feb 2022 13:26:23 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
/*
 RequireJS 2.1.14 Copyright (c) 2010-2014, The Dojo Foundation All Rights Reserved.
 Available via the MIT or new BSD license.
 see: http://github.com/jrburke/requirejs for details
*/
var requirejs,require,define;
(function(ba){function G(b){return"[object Function]"===K.call(b)}function H(b){return"[object Array]"===K.call(b)}function v(b,c){if(b){var d;for(d=0;d<b.length&&(!b[d]||!c(b[d],d,b));d+=1);}}function T(b,c){if(b){var d;for(d=b.length-1;-1<d&&(!b[d]||!c(b[d],d,b));d-=1);}}function t(b,c){return fa.call(b,c)}function m(b,c){return t(b,c)&&b[c]}function B(b,c){for(var d in b)if(t(b,d)&&c(b[d],d))break}function U(b,c,d,e){c&&B(c,function(c,g){if(d||!t(b,g))e&&"object"===typeof c&&c&&!H(c)&&!G(c)&&!(c instanceof
RegExp)?(b[g]||(b[g]={}),U(b[g],c,d,e)):b[g]=c});return b}function u(b,c){return function(){return c.apply(b,arguments)}}function ca(b){throw b;}function da(b){if(!b)return b;var c=ba;v(b.split("."),function(b){c=c[b]});return c}function C(b,c,d,e){c=Error(c+"\nhttp://requirejs.org/docs/errors.html#"+b);c.requireType=b;c.requireModules=e;d&&(c.originalError=d);return c}function ga(b){function c(a,k,b){var f,l,c,d,e,g,i,p,k=k&&k.split("/"),h=j.map,n=h&&h["*"];if(a){a=a.split("/");l=a.length-1;j.nodeIdCompat&&
Q.test(a[l])&&(a[l]=a[l].replace(Q,""));"."===a[0].charAt(0)&&k&&(l=k.slice(0,k.length-1),a=l.concat(a));l=a;for(c=0;c<l.length;c++)if(d=l[c],"."===d)l.splice(c,1),c-=1;else if(".."===d&&!(0===c||1==c&&".."===l[2]||".."===l[c-1])&&0<c)l.splice(c-1,2),c-=2;a=a.join("/")}if(b&&h&&(k||n)){l=a.split("/");c=l.length;a:for(;0<c;c-=1){e=l.slice(0,c).join("/");if(k)for(d=k.length;0<d;d-=1)if(b=m(h,k.slice(0,d).join("/")))if(b=m(b,e)){f=b;g=c;break a}!i&&(n&&m(n,e))&&(i=m(n,e),p=c)}!f&&i&&(f=i,g=p);f&&(l.splice(0,
g,f),a=l.join("/"))}return(f=m(j.pkgs,a))?f:a}function d(a){z&&v(document.getElementsByTagName("script"),function(k){if(k.getAttribute("data-requiremodule")===a&&k.getAttribute("data-requirecontext")===i.contextName)return k.parentNode.removeChild(k),!0})}function e(a){var k=m(j.paths,a);if
... [truncated]
```

- Endpoint: GET https://www.citaconsular.es/images/widgets/default/creditcard/close.png
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/images/widgets/default/creditcard/close.png"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh"
  },
  {
    "name": "priority",
    "value": "i"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "image"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-length",
    "value": "1803"
  },
  {
    "name": "content-type",
    "value": "image/png"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:42 GMT"
  },
  {
    "name": "etag",
    "value": "\"70b-5d89b4b92ddc0\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:42 GMT"
  },
  {
    "name": "last-modified",
    "value": "Tue, 22 Feb 2022 13:26:23 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABippVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczpJcHRjNHhtcENvcmU9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBDb3JlLzEuMC94bWxucy8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMTgwMTE3NDA3MjA2ODExOTEwOUYzMDU2NDZFQjU3RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGRkNDMjNBNkY2RjIxMUU0OERCMkY2RDBGM0M2QjM3NSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGRkNDMjNBNUY2RjIxMUU0OERCMkY2RDBGM0M2QjM3NSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIiBwaG90b3Nob3A6QXV0aG9yc1Bvc2l0aW9uPSJQYXJ0bmVyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Mjg3OTYzMjQ0QTIwNjgxMTgyMkFFQzU4RjI4QjM5QTgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDE4MDExNzQwNzIwNjgxMTkxMDlGMzA1NjQ2RUI1N0QiLz4gPGRjOmNyZWF0b3I+IDxyZGY6U2VxPiA8cmRmOmxpPkdlb2ZmIFRlZWhhbjwvcmRmOmxpPiA8L3JkZjpTZXE+IDwvZGM6Y3JlYXRvcj4gPGRjOnRpdGxlPiA8cmRmOkFsdD4gPHJkZjpsaSB4bWw6bGFuZz0ieC1kZWZhdWx0Ij5pUGhvbmUgUmV0aW5hIEdVSSBQU0Q8L3JkZjpsaT4gPC9yZGY6QWx0PiA8L2RjOnRpdGxlPiA8SXB0YzR4bXBDb3JlOkNyZWF0b3JDb250YWN0SW5mbyBJcHRjNHhtcENvcmU6Q2lBZHJFeHRhZHI9IjEwOSBBdGxhbnRpYyBBdmUiIElwdGM0eG1wQ29yZTpDaUFkckNpdHk9IlRvcm9udG8iIElwdGM0eG1wQ29yZTpDaUFkclJlZ2lvbj0iT04iIElwdGM0eG1wQ29yZTpDaUFkckN0cnk9IkNhbmFkYSIgSXB0YzR4bXBDb3JlOkNpVGVsV29yaz0iNDE2IDM0MCA4NjY2IiBJcHRjNHhtcENvcmU6Q2lFbWFpbFdvcms9Imdlb2ZmQHRlZWhhbmxheC5jb20iIElwdGM0eG1wQ29y
... [truncated]
```

- Endpoint: GET https://www.citaconsular.es/images/widgets/default/creditcard/card.png
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/images/widgets/default/creditcard/card.png"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh"
  },
  {
    "name": "priority",
    "value": "i"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "image"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-length",
    "value": "3425"
  },
  {
    "name": "content-type",
    "value": "image/png"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:42 GMT"
  },
  {
    "name": "etag",
    "value": "\"d61-5d89b4b92ddc0\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:42 GMT"
  },
  {
    "name": "last-modified",
    "value": "Tue, 22 Feb 2022 13:26:23 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
iVBORw0KGgoAAAANSUhEUgAAAEsAAAAwCAYAAABZq4foAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABippVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczpJcHRjNHhtcENvcmU9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBDb3JlLzEuMC94bWxucy8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMTgwMTE3NDA3MjA2ODExOTEwOUYzMDU2NDZFQjU3RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGRkNDMjNBQUY2RjIxMUU0OERCMkY2RDBGM0M2QjM3NSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGRkNDMjNBOUY2RjIxMUU0OERCMkY2RDBGM0M2QjM3NSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIiBwaG90b3Nob3A6QXV0aG9yc1Bvc2l0aW9uPSJQYXJ0bmVyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Mjg3OTYzMjQ0QTIwNjgxMTgyMkFFQzU4RjI4QjM5QTgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDE4MDExNzQwNzIwNjgxMTkxMDlGMzA1NjQ2RUI1N0QiLz4gPGRjOmNyZWF0b3I+IDxyZGY6U2VxPiA8cmRmOmxpPkdlb2ZmIFRlZWhhbjwvcmRmOmxpPiA8L3JkZjpTZXE+IDwvZGM6Y3JlYXRvcj4gPGRjOnRpdGxlPiA8cmRmOkFsdD4gPHJkZjpsaSB4bWw6bGFuZz0ieC1kZWZhdWx0Ij5pUGhvbmUgUmV0aW5hIEdVSSBQU0Q8L3JkZjpsaT4gPC9yZGY6QWx0PiA8L2RjOnRpdGxlPiA8SXB0YzR4bXBDb3JlOkNyZWF0b3JDb250YWN0SW5mbyBJcHRjNHhtcENvcmU6Q2lBZHJFeHRhZHI9IjEwOSBBdGxhbnRpYyBBdmUiIElwdGM0eG1wQ29yZTpDaUFkckNpdHk9IlRvcm9udG8iIElwdGM0eG1wQ29yZTpDaUFkclJlZ2lvbj0iT04iIElwdGM0eG1wQ29yZTpDaUFkckN0cnk9IkNhbmFkYSIgSXB0YzR4bXBDb3JlOkNpVGVsV29yaz0iNDE2IDM0MCA4NjY2IiBJcHRjNHhtcENvcmU6Q2lFbWFpbFdvcms9Imdlb2ZmQHRlZWhhbmxheC5jb20iIElwdGM0eG1wQ29y
... [truncated]
```

- Endpoint: GET https://www.citaconsular.es/images/widgets/default/ticket/band.png
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/images/widgets/default/ticket/band.png"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh"
  },
  {
    "name": "priority",
    "value": "i"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "image"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-length",
    "value": "2991"
  },
  {
    "name": "content-type",
    "value": "image/png"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:42 GMT"
  },
  {
    "name": "etag",
    "value": "\"baf-5d89b4b92ddc0\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:42 GMT"
  },
  {
    "name": "last-modified",
    "value": "Tue, 22 Feb 2022 13:26:23 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
iVBORw0KGgoAAAANSUhEUgAAAGYAAAAiCAYAAACtFqwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABippVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczpJcHRjNHhtcENvcmU9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBDb3JlLzEuMC94bWxucy8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMTgwMTE3NDA3MjA2ODExOTEwOUYzMDU2NDZFQjU3RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxNEM1RURGRUIzNTcxMUU0QjRDREYwNUQ5N0E1NkQxOCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxNEM1RURGREIzNTcxMUU0QjRDREYwNUQ5N0E1NkQxOCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIiBwaG90b3Nob3A6QXV0aG9yc1Bvc2l0aW9uPSJQYXJ0bmVyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QUUxNzE3REIxNjIwNjgxMTgzRDFDM0M2Q0RDMzM4N0UiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDE4MDExNzQwNzIwNjgxMTkxMDlGMzA1NjQ2RUI1N0QiLz4gPGRjOmNyZWF0b3I+IDxyZGY6U2VxPiA8cmRmOmxpPkdlb2ZmIFRlZWhhbjwvcmRmOmxpPiA8L3JkZjpTZXE+IDwvZGM6Y3JlYXRvcj4gPGRjOnRpdGxlPiA8cmRmOkFsdD4gPHJkZjpsaSB4bWw6bGFuZz0ieC1kZWZhdWx0Ij5pUGhvbmUgUmV0aW5hIEdVSSBQU0Q8L3JkZjpsaT4gPC9yZGY6QWx0PiA8L2RjOnRpdGxlPiA8SXB0YzR4bXBDb3JlOkNyZWF0b3JDb250YWN0SW5mbyBJcHRjNHhtcENvcmU6Q2lBZHJFeHRhZHI9IjEwOSBBdGxhbnRpYyBBdmUiIElwdGM0eG1wQ29yZTpDaUFkckNpdHk9IlRvcm9udG8iIElwdGM0eG1wQ29yZTpDaUFkclJlZ2lvbj0iT04iIElwdGM0eG1wQ29yZTpDaUFkckN0cnk9IkNhbmFkYSIgSXB0YzR4bXBDb3JlOkNpVGVsV29yaz0iNDE2IDM0MCA4NjY2IiBJcHRjNHhtcENvcmU6Q2lFbWFpbFdvcms9Imdlb2ZmQHRlZWhhbmxheC5jb20iIElwdGM0eG1wQ29y
... [truncated]
```

- Endpoint: GET https://www.citaconsular.es/images/widgets/default/ticket/logo.png
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/images/widgets/default/ticket/logo.png"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh"
  },
  {
    "name": "priority",
    "value": "i"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "image"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-length",
    "value": "2928"
  },
  {
    "name": "content-type",
    "value": "image/png"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:42 GMT"
  },
  {
    "name": "etag",
    "value": "\"b70-5d89b4b92ddc0\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:42 GMT"
  },
  {
    "name": "last-modified",
    "value": "Tue, 22 Feb 2022 13:26:23 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
iVBORw0KGgoAAAANSUhEUgAAAFUAAAASCAYAAAAqqJKOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABippVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczpJcHRjNHhtcENvcmU9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBDb3JlLzEuMC94bWxucy8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMTgwMTE3NDA3MjA2ODExOTEwOUYzMDU2NDZFQjU3RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEMUYxNTFBNUIzNTcxMUU0QjRDREYwNUQ5N0E1NkQxOCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEMUYxNTFBNEIzNTcxMUU0QjRDREYwNUQ5N0E1NkQxOCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIiBwaG90b3Nob3A6QXV0aG9yc1Bvc2l0aW9uPSJQYXJ0bmVyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QUUxNzE3REIxNjIwNjgxMTgzRDFDM0M2Q0RDMzM4N0UiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDE4MDExNzQwNzIwNjgxMTkxMDlGMzA1NjQ2RUI1N0QiLz4gPGRjOmNyZWF0b3I+IDxyZGY6U2VxPiA8cmRmOmxpPkdlb2ZmIFRlZWhhbjwvcmRmOmxpPiA8L3JkZjpTZXE+IDwvZGM6Y3JlYXRvcj4gPGRjOnRpdGxlPiA8cmRmOkFsdD4gPHJkZjpsaSB4bWw6bGFuZz0ieC1kZWZhdWx0Ij5pUGhvbmUgUmV0aW5hIEdVSSBQU0Q8L3JkZjpsaT4gPC9yZGY6QWx0PiA8L2RjOnRpdGxlPiA8SXB0YzR4bXBDb3JlOkNyZWF0b3JDb250YWN0SW5mbyBJcHRjNHhtcENvcmU6Q2lBZHJFeHRhZHI9IjEwOSBBdGxhbnRpYyBBdmUiIElwdGM0eG1wQ29yZTpDaUFkckNpdHk9IlRvcm9udG8iIElwdGM0eG1wQ29yZTpDaUFkclJlZ2lvbj0iT04iIElwdGM0eG1wQ29yZTpDaUFkckN0cnk9IkNhbmFkYSIgSXB0YzR4bXBDb3JlOkNpVGVsV29yaz0iNDE2IDM0MCA4NjY2IiBJcHRjNHhtcENvcmU6Q2lFbWFpbFdvcms9Imdlb2ZmQHRlZWhhbmxheC5jb20iIElwdGM0eG1wQ29y
... [truncated]
```

- Endpoint: GET https://citaconsular.es/js/widgets/mainv1.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/mainv1.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:42 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/widgets/mainv1.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: POST https://www.google-analytics.com/g/collect?v=2&tid=G-F3TYSDL945&gtm=45je59u1v9106061970z89106055348za200zb9106055348zd9106055348&_p=1759407881015&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=401161725.1759407882&ul=es-es&sr=1280x720&uaa=x86&uab=64&uafvl=Not%253DA%253FBrand%3B24.0.0.0%7CChromium%3B140.0.7339.186&uamb=0&uam=&uap=Windows&uapv=10.0&uaw=0&are=1&frm=0&pscdl=noapi&_s=1&tag_exp=101509157~103116026~103200004~103233427~104527907~104528500~104684208~104684211~104948813~115480710~115650527~115650529~115834636~115834638&sid=1759407881&sct=1&seg=0&dl=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&dr=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&dt=Consulado%20Gral.%20de%20Espa%C3%B1a%20en%20La%20Habana&en=page_view&_fv=1&_nsi=1&_ss=1&ep.RutaWidget=%7Bpage%3A%20%22%22%2F%22%22%20%2B%20Backbone.history.getFragment()%7D&ep.anonymizeIp=true&tfd=3979
  - Status: 204
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.google-analytics.com"
  },
  {
    "name": ":method",
    "value": "POST"
  },
  {
    "name": ":path",
    "value": "/g/collect?v=2&tid=G-F3TYSDL945&gtm=45je59u1v9106061970z89106055348za200zb9106055348zd9106055348&_p=1759407881015&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=401161725.1759407882&ul=es-es&sr=1280x720&uaa=x86&uab=64&uafvl=Not%253DA%253FBrand%3B24.0.0.0%7CChromium%3B140.0.7339.186&uamb=0&uam=&uap=Windows&uapv=10.0&uaw=0&are=1&frm=0&pscdl=noapi&_s=1&tag_exp=101509157~103116026~103200004~103233427~104527907~104528500~104684208~104684211~104948813~115480710~115650527~115650529~115834636~115834638&sid=1759407881&sct=1&seg=0&dl=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&dr=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&dt=Consulado%20Gral.%20de%20Espa%C3%B1a%20en%20La%20Habana&en=page_view&_fv=1&_nsi=1&_ss=1&ep.RutaWidget=%7Bpage%3A%20%22%22%2F%22%22%20%2B%20Backbone.history.getFragment()%7D&ep.anonymizeIp=true&tfd=3979"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "content-length",
    "value": "0"
  },
  {
    "name": "origin",
    "value": "https://www.citaconsular.es"
  },
  {
    "name": "priority",
    "value": "u=1, i"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "empty"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "cross-site"
  },
  {
    "name": "sec-fetch-storage-access",
    "value": "active"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "access-control-allow-credentials",
    "value": "true"
  },
  {
    "name": "access-control-allow-origin",
    "value": "https://www.citaconsular.es"
  },
  {
    "name": "alt-svc",
    "value": "h3=\":443\"; ma=2592000,h3-29=\":443\"; ma=2592000"
  },
  {
    "name": "cache-control",
    "value": "no-cache, no-store, must-revalidate"
  },
  {
    "name": "content-length",
    "value": "0"
  },
  {
    "name": "content-security-policy-report-only",
    "value": "script-src 'none'; form-action 'none'; frame-src 'none'; report-uri https://csp.withgoogle.com/csp/scaffolding/ascnsrsggc:102:0"
  },
  {
    "name": "content-type",
    "value": "text/plain"
  },
  {
    "name": "cross-origin-opener-policy-report-only",
    "value": "same-origin; report-to=ascnsrsggc:102:0"
  },
  {
    "name": "cross-origin-resource-policy",
    "value": "cross-origin"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:43 GMT"
  },
  {
    "name": "expires",
    "value": "Fri, 01 Jan 1990 00:00:00 GMT"
  },
  {
    "name": "pragma",
    "value": "no-cache"
  },
  {
    "name": "report-to",
    "value": "{\"group\":\"ascnsrsggc:102:0\",\"max_age\":2592000,\"endpoints\":[{\"url\":\"https://csp.withgoogle.com/csp/report-to/scaffolding/ascnsrsggc:102:0\"}],}"
  },
  {
    "name": "server",
    "value": "Golfe2"
  }
]
```

- Endpoint: GET https://www.citaconsular.es/js/widgets/mainv1.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/mainv1.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "447"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:42 GMT"
  },
  {
    "name": "etag",
    "value": "\"516-5d89b4b92ddc0-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:42 GMT"
  },
  {
    "name": "last-modified",
    "value": "Tue, 22 Feb 2022 13:26:23 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
require.config({
    baseUrl: bkt_init_widget.srvsrc+'/js/',
    urlArgs: "v="+bkt_init_widget.version,
    paths: {        
        jquery: 'jquery/jquery-2.1.1.min',
        noconflict: 'jquery/noconflict',
        underscore: 'backbone/underscore',        
        backbone: 'backbone/backbone',        
        views: 'widgets/default/views',        
        models: 'widgets/default/models',
        collections: 'widgets/default/collections',  
        jqueryui: 'widgets/default/ui/jquery-ui.min'
    },
    map: {
        "*": {
            "jquery": 'noconflict'
        },
        "noconflict": {
            "jquery": "jquery"
        }
    },
    shim: {
        jquery: {
            exports: '$'
        },
        jqueryui:{
            deps: ['jquery']
        },
        underscore: {
            exports: '_'
        },
        backbone: {
            exports: 'Backbone',
            deps: ['jquery', 'underscore']
        }
    }
});

if(bkt_init_widget.type === 'button'){
    require(['widgets/button/app'], function(App){                        
        this.Backbone.$ = jQueryBkt;
        App.initialize();
    }); 
}
else{
    require(['widgets/default/app'], function(App){                      
        this.Backbone.$ = jQueryBkt;
        App.initialize();
    });     
} 

```

- Endpoint: GET https://citaconsular.es/js/widgets/default/app.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/app.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:43 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/widgets/default/app.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://www.citaconsular.es/js/widgets/default/app.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/app.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "736"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:43 GMT"
  },
  {
    "name": "etag",
    "value": "\"d48-5d89b4b92ddc0-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:43 GMT"
  },
  {
    "name": "last-modified",
    "value": "Tue, 22 Feb 2022 13:26:23 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
define([
'jquery',
'underscore',
'backbone',
'widgets/default/router',
'widgets/default/collections/widgetconfigurations',
'widgets/default/models/widgetconfiguration',
'widgets/default/models/widgetlabel',
'widgets/utils',
'widgets/default/views/footer',
], function($, _, Backbone, AppRouter, WidgetConfigurations, WidgetConfiguration, WidgetLabel, Utils, Footer){  
    
    var initialize = function(){
        this.footer = new Footer();
        this.widgetconfigurations = new WidgetConfigurations();
        var that = this;

        this.widgetconfigurations.listenTo(this.widgetconfigurations, "reset", function(){
            oClientValues_248295.widgetconfiguration = new WidgetConfiguration();
            oClientValues_248295.widgetlabel = new WidgetLabel();
            
            oClientValues_248295.widgetconfiguration.setDefaultValues();
            oClientValues_248295.widgetlabel.setDefaultValues();
            
            if(typeof that.widgetconfigurations.models[0].attributes.WidgetConfiguration !== 'undefined' && $.isEmptyObject(that.widgetconfigurations.models[0].attributes.WidgetConfiguration) === false){
                oClientValues_248295.widgetconfiguration = that.widgetconfigurations.models[0].attributes.WidgetConfiguration;
            }
            
            if(typeof that.widgetconfigurations.models[0].attributes.WidgetLabel !== 'undefined' && $.isEmptyObject(that.widgetconfigurations.models[0].attributes.WidgetLabel) === false){
                oClientValues_248295.widgetlabel = that.widgetconfigurations.models[0].attributes.WidgetLabel;
            }
            
            if(typeof that.widgetconfigurations.models[0].attributes.WidgetCustom !== 'undefined' && $.isEmptyObject(that.widgetconfigurations.models[0].attributes.WidgetCustom) === false){
                oClientValues_248295.widgetcustom = that.widgetconfigurations.models[0].attributes.WidgetCustom;
            }
            
            if(typeof that.widgetconfigurations.models[0].attributes.bktToken !== 'undefined' && $
... [truncated]
```

- Endpoint: GET https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LdqftIZAAAAADcngqKaM97DRGXV47ca0Xk8spwH&co=aHR0cHM6Ly93d3cuY2l0YWNvbnN1bGFyLmVzOjQ0Mw..&hl=es&v=Jv8jlA-BQE5JD6rA-h_iqNH2&size=invisible&anchor-ms=20000&execute-ms=15000&cb=h9kel0y6gke7
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.google.com"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/recaptcha/api2/anchor?ar=1&k=6LdqftIZAAAAADcngqKaM97DRGXV47ca0Xk8spwH&co=aHR0cHM6Ly93d3cuY2l0YWNvbnN1bGFyLmVzOjQ0Mw..&hl=es&v=Jv8jlA-BQE5JD6rA-h_iqNH2&size=invisible&anchor-ms=20000&execute-ms=15000&cb=h9kel0y6gke7"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "priority",
    "value": "u=0, i"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "iframe"
  },
  {
    "name": "sec-fetch-mode",
    "value": "navigate"
  },
  {
    "name": "sec-fetch-site",
    "value": "cross-site"
  },
  {
    "name": "sec-fetch-storage-access",
    "value": "active"
  },
  {
    "name": "sec-fetch-user",
    "value": "?1"
  },
  {
    "name": "upgrade-insecure-requests",
    "value": "1"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "alt-svc",
    "value": "h3=\":443\"; ma=2592000,h3-29=\":443\"; ma=2592000"
  },
  {
    "name": "cache-control",
    "value": "no-cache, no-store, max-age=0, must-revalidate"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-security-policy",
    "value": "script-src 'report-sample' 'nonce-zEg9Cwkoh0VgEHLuHxfJUA' 'unsafe-inline' 'strict-dynamic' https: http: 'unsafe-eval';object-src 'none';base-uri 'self';report-uri https://csp.withgoogle.com/csp/recaptcha/1"
  },
  {
    "name": "content-type",
    "value": "text/html; charset=utf-8"
  },
  {
    "name": "cross-origin-embedder-policy",
    "value": "require-corp"
  },
  {
    "name": "cross-origin-opener-policy-report-only",
    "value": "same-origin; report-to=\"coop_38fac9d5b82543fc4729580d18ff2d3d\""
  },
  {
    "name": "cross-origin-resource-policy",
    "value": "cross-origin"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:43 GMT"
  },
  {
    "name": "expires",
    "value": "Mon, 01 Jan 1990 00:00:00 GMT"
  },
  {
    "name": "pragma",
    "value": "no-cache"
  },
  {
    "name": "report-to",
    "value": "{\"group\":\"recaptcha\",\"max_age\":2592000,\"endpoints\":[{\"url\":\"https://csp.withgoogle.com/csp/report-to/recaptcha\"}]}"
  },
  {
    "name": "report-to",
    "value": "{\"group\":\"coop_38fac9d5b82543fc4729580d18ff2d3d\",\"max_age\":2592000,\"endpoints\":[{\"url\":\"https://csp.withgoogle.com/csp/report-to/38fac9d5b82543fc4729580d18ff2d3d\"}]}"
  },
  {
    "name": "server",
    "value": "ESF"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-xss-protection",
    "value": "0"
  }
]
```
  - Response body (trunc):

```json
<!DOCTYPE HTML><html dir="ltr" lang="es"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>reCAPTCHA</title>
<style type="text/css">
/* cyrillic-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url(//fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu72xKOzY.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url(//fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu5mxKOzY.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url(//fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu7mxKOzY.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url(//fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4WxKOzY.woff2) format('woff2');
  unicode-range: U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url(//fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu7WxKOzY.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url(//fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu7GxKOzY.woff2) format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {

... [truncated]
```

- Endpoint: GET https://www.google.com/recaptcha/api2/anchor?ar=1&k=6Le7usYfAAAAAHX3Bv0eWXNtEf9D5aV4BtPR2SoQ&co=aHR0cHM6Ly93d3cuY2l0YWNvbnN1bGFyLmVzOjQ0Mw..&hl=es&v=Jv8jlA-BQE5JD6rA-h_iqNH2&size=normal&anchor-ms=20000&execute-ms=15000&cb=a2teapq2ctjv
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.google.com"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/recaptcha/api2/anchor?ar=1&k=6Le7usYfAAAAAHX3Bv0eWXNtEf9D5aV4BtPR2SoQ&co=aHR0cHM6Ly93d3cuY2l0YWNvbnN1bGFyLmVzOjQ0Mw..&hl=es&v=Jv8jlA-BQE5JD6rA-h_iqNH2&size=normal&anchor-ms=20000&execute-ms=15000&cb=a2teapq2ctjv"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "priority",
    "value": "u=0, i"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "iframe"
  },
  {
    "name": "sec-fetch-mode",
    "value": "navigate"
  },
  {
    "name": "sec-fetch-site",
    "value": "cross-site"
  },
  {
    "name": "sec-fetch-storage-access",
    "value": "active"
  },
  {
    "name": "sec-fetch-user",
    "value": "?1"
  },
  {
    "name": "upgrade-insecure-requests",
    "value": "1"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "alt-svc",
    "value": "h3=\":443\"; ma=2592000,h3-29=\":443\"; ma=2592000"
  },
  {
    "name": "cache-control",
    "value": "no-cache, no-store, max-age=0, must-revalidate"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-security-policy",
    "value": "script-src 'report-sample' 'nonce-wDLXAOXEA8GJzc6nfz3miQ' 'unsafe-inline' 'strict-dynamic' https: http: 'unsafe-eval';object-src 'none';base-uri 'self';report-uri https://csp.withgoogle.com/csp/recaptcha/1"
  },
  {
    "name": "content-type",
    "value": "text/html; charset=utf-8"
  },
  {
    "name": "cross-origin-embedder-policy",
    "value": "require-corp"
  },
  {
    "name": "cross-origin-opener-policy-report-only",
    "value": "same-origin; report-to=\"coop_38fac9d5b82543fc4729580d18ff2d3d\""
  },
  {
    "name": "cross-origin-resource-policy",
    "value": "cross-origin"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:43 GMT"
  },
  {
    "name": "expires",
    "value": "Mon, 01 Jan 1990 00:00:00 GMT"
  },
  {
    "name": "pragma",
    "value": "no-cache"
  },
  {
    "name": "report-to",
    "value": "{\"group\":\"recaptcha\",\"max_age\":2592000,\"endpoints\":[{\"url\":\"https://csp.withgoogle.com/csp/report-to/recaptcha\"}]}"
  },
  {
    "name": "report-to",
    "value": "{\"group\":\"coop_38fac9d5b82543fc4729580d18ff2d3d\",\"max_age\":2592000,\"endpoints\":[{\"url\":\"https://csp.withgoogle.com/csp/report-to/38fac9d5b82543fc4729580d18ff2d3d\"}]}"
  },
  {
    "name": "server",
    "value": "ESF"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-xss-protection",
    "value": "0"
  }
]
```
  - Response body (trunc):

```json
<!DOCTYPE HTML><html dir="ltr" lang="es"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>reCAPTCHA</title>
<style type="text/css">
/* cyrillic-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url(//fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu72xKOzY.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url(//fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu5mxKOzY.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url(//fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu7mxKOzY.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url(//fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4WxKOzY.woff2) format('woff2');
  unicode-range: U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url(//fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu7WxKOzY.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url(//fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu7GxKOzY.woff2) format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {

... [truncated]
```

- Endpoint: GET https://www.google.com/recaptcha/api2/anchor?ar=1&k=6Le7usYfAAAAAHX3Bv0eWXNtEf9D5aV4BtPR2SoQ&co=aHR0cHM6Ly93d3cuY2l0YWNvbnN1bGFyLmVzOjQ0Mw..&hl=es&v=Jv8jlA-BQE5JD6rA-h_iqNH2&size=normal&anchor-ms=20000&execute-ms=15000&cb=vwhrslnlnf95
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.google.com"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/recaptcha/api2/anchor?ar=1&k=6Le7usYfAAAAAHX3Bv0eWXNtEf9D5aV4BtPR2SoQ&co=aHR0cHM6Ly93d3cuY2l0YWNvbnN1bGFyLmVzOjQ0Mw..&hl=es&v=Jv8jlA-BQE5JD6rA-h_iqNH2&size=normal&anchor-ms=20000&execute-ms=15000&cb=vwhrslnlnf95"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "priority",
    "value": "u=0, i"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "iframe"
  },
  {
    "name": "sec-fetch-mode",
    "value": "navigate"
  },
  {
    "name": "sec-fetch-site",
    "value": "cross-site"
  },
  {
    "name": "sec-fetch-storage-access",
    "value": "active"
  },
  {
    "name": "sec-fetch-user",
    "value": "?1"
  },
  {
    "name": "upgrade-insecure-requests",
    "value": "1"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "alt-svc",
    "value": "h3=\":443\"; ma=2592000,h3-29=\":443\"; ma=2592000"
  },
  {
    "name": "cache-control",
    "value": "no-cache, no-store, max-age=0, must-revalidate"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-security-policy",
    "value": "script-src 'report-sample' 'nonce-htGgPhOHIIyK7RfgKzX5Gg' 'unsafe-inline' 'strict-dynamic' https: http: 'unsafe-eval';object-src 'none';base-uri 'self';report-uri https://csp.withgoogle.com/csp/recaptcha/1"
  },
  {
    "name": "content-type",
    "value": "text/html; charset=utf-8"
  },
  {
    "name": "cross-origin-embedder-policy",
    "value": "require-corp"
  },
  {
    "name": "cross-origin-opener-policy-report-only",
    "value": "same-origin; report-to=\"coop_38fac9d5b82543fc4729580d18ff2d3d\""
  },
  {
    "name": "cross-origin-resource-policy",
    "value": "cross-origin"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:43 GMT"
  },
  {
    "name": "expires",
    "value": "Mon, 01 Jan 1990 00:00:00 GMT"
  },
  {
    "name": "pragma",
    "value": "no-cache"
  },
  {
    "name": "report-to",
    "value": "{\"group\":\"recaptcha\",\"max_age\":2592000,\"endpoints\":[{\"url\":\"https://csp.withgoogle.com/csp/report-to/recaptcha\"}]}"
  },
  {
    "name": "report-to",
    "value": "{\"group\":\"coop_38fac9d5b82543fc4729580d18ff2d3d\",\"max_age\":2592000,\"endpoints\":[{\"url\":\"https://csp.withgoogle.com/csp/report-to/38fac9d5b82543fc4729580d18ff2d3d\"}]}"
  },
  {
    "name": "server",
    "value": "ESF"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-xss-protection",
    "value": "0"
  }
]
```
  - Response body (trunc):

```json
<!DOCTYPE HTML><html dir="ltr" lang="es"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>reCAPTCHA</title>
<style type="text/css">
/* cyrillic-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url(//fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu72xKOzY.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url(//fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu5mxKOzY.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url(//fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu7mxKOzY.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url(//fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4WxKOzY.woff2) format('woff2');
  unicode-range: U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url(//fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu7WxKOzY.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url(//fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu7GxKOzY.woff2) format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {

... [truncated]
```

- Endpoint: GET https://citaconsular.es/js/jquery/noconflict.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/jquery/noconflict.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:43 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/jquery/noconflict.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://citaconsular.es/js/widgets/default/router.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/router.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:43 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/widgets/default/router.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://citaconsular.es/js/widgets/default/collections/widgetconfigurations.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/collections/widgetconfigurations.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:43 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/widgets/default/collections/widgetconfigurations.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://citaconsular.es/js/widgets/default/models/widgetconfiguration.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/models/widgetconfiguration.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:43 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/widgets/default/models/widgetconfiguration.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://citaconsular.es/js/widgets/default/models/widgetlabel.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/models/widgetlabel.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:43 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/widgets/default/models/widgetlabel.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://citaconsular.es/js/widgets/utils.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/utils.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:43 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/widgets/utils.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://citaconsular.es/js/widgets/default/views/footer.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/footer.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:43 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/widgets/default/views/footer.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://citaconsular.es/js/backbone/underscore.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/backbone/underscore.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:43 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/backbone/underscore.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://www.citaconsular.es/js/jquery/noconflict.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/jquery/noconflict.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "137"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:43 GMT"
  },
  {
    "name": "etag",
    "value": "\"8a-5d89b4b92ddc0-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:43 GMT"
  },
  {
    "name": "last-modified",
    "value": "Tue, 22 Feb 2022 13:26:23 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
define(["jquery"], function($) {
    //drop the `true` if you want jQuery (but not $) to remain global
    return $.noConflict(true); 
});
```

- Endpoint: GET https://www.citaconsular.es/js/widgets/default/router.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/router.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "3382"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:43 GMT"
  },
  {
    "name": "etag",
    "value": "\"5686-6075db91b88b1-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:43 GMT"
  },
  {
    "name": "last-modified",
    "value": "Tue, 10 Oct 2023 14:42:59 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
define([
'jquery',
'underscore',
'backbone',
'widgets/default/views/custom',
'widgets/default/views/services',
'widgets/default/views/agendas',
'widgets/default/views/datetime',
'widgets/default/views/signup',
'widgets/default/views/summary',
'widgets/default/views/signin',
'widgets/default/views/signupfirstappointment',
'widgets/default/views/signupsecondappointment',
'widgets/default/models/widgetconfiguration',
'widgets/default/views/creditcardcapture',
'widgets/default/views/accountlogin',
'widgets/default/views/recoverpassword',
'widgets/default/views/history',
'widgets/default/views/footer',
'widgets/default/views/changepassword',
'widgets/default/views/signedin',
'widgets/default/views/confirmclient',
'widgets/default/views/redsys',
'widgets/default/views/waitinglistsummary'
], function($, _, Backbone, CustomView, ServicesView, AgendasView, DateView, SignUpView, SummaryView, SignInView, SignUpFirstAppointmentView, SignUpSecondAppointmentView, WidgetConfiguration, CreditCardCapture, 
        SignInAccountView, RecoverPasswordView, HistoryView, Footer, ChangePasswordView, SignedInView, ConfirmClientView, RedsysView, WaitingListSummaryView){
    var AppRouter = Backbone.Router.extend({
        routes:{
            ''                                  : 'custom',
            'custom'                            : 'custom',
            'selectlanguage/:lang'              : 'selectlanguage',
            'services'                          : 'services',            
            'dochangelanguage/:lang'            : 'services',
            'selectservice/:id'                 : 'selectservice',
            'selectservices'                    : 'selectservices',
            'agendas'                           : 'agendas',
            'selectagenda/:id'                  : 'selectagenda',
            'datetime'                          : 'datetime',
            'selecttime/:date/:time/:agenda'    : 'selecttime',
            'error/:error'                      : 'error',
           
... [truncated]
```

- Endpoint: GET https://www.citaconsular.es/js/widgets/default/collections/widgetconfigurations.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/collections/widgetconfigurations.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "375"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:43 GMT"
  },
  {
    "name": "etag",
    "value": "\"31a-5d89b4b92ddc0-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:43 GMT"
  },
  {
    "name": "last-modified",
    "value": "Tue, 22 Feb 2022 13:26:23 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
 define(['jquery', 'underscore', 'backbone', 'widgets/utils', 'widgets/default/models/widgetconfiguration'],
 function($,_,Backbone, Utils, WidgetConfiguration){
    var WidgetConfigurations = Backbone.Collection.extend({
        url: Utils.get_server_url(),
        model: WidgetConfiguration,
        initialize:function(){
            this.url += "getwidgetconfigurations/";
        },
        // Overwrite the sync method to pass over the Same Origin Policy
        sync: function(method, model, options){
            //options.timeout = 10000;  
            options.dataType = "jsonp";
            return Backbone.sync(method, model, options);  
        },  
        parse: function(response){
            return response;
        }   
    });
       
    return WidgetConfigurations;
 });
```

- Endpoint: GET https://www.citaconsular.es/js/widgets/default/models/widgetconfiguration.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/models/widgetconfiguration.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "300"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:43 GMT"
  },
  {
    "name": "etag",
    "value": "\"248-5d89b4b92ddc0-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:43 GMT"
  },
  {
    "name": "last-modified",
    "value": "Tue, 22 Feb 2022 13:26:23 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
define(['jquery', 'underscore', 'backbone'], 
function ($, _, Backbone){
    var WidgetConfiguration = Backbone.Model.extend({
        iAnyAgendaShowAgendas: 0,
        iAnyAgendaShowAgendasAndAuto: 1,
        iAnyAgendaShowAuto: 2,
        iAnyAgendaShowAnyway: 3,
        iFirstAppointment: 1,
        iSecondAppointment: 2,
        iShowSignInStep: 3,
	parse: function(response, options){
            this.attributes = response;            
        },
        setDefaultValues: function(){
            this.any_agenda = 0;
        }
    });
    
    return WidgetConfiguration;
});
```

- Endpoint: GET https://www.citaconsular.es/js/widgets/default/models/widgetlabel.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/models/widgetlabel.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "338"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:43 GMT"
  },
  {
    "name": "etag",
    "value": "\"2cd-5d89b4b92ddc0-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:43 GMT"
  },
  {
    "name": "last-modified",
    "value": "Tue, 22 Feb 2022 13:26:23 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
define(['jquery', 'underscore', 'backbone'], 
function ($, _, Backbone){
    var WidgetLabel = Backbone.Model.extend({
        iShowExtraInfo: 1,
        iShowatBeforeAccountDetails: 2,
        iShowatBeforeAppointmentSummary: 1,
        iShowatAfterAppointmentSummary: 0,
        iShowWhenFirstAppointment: 1,
        iShowWhenSecondAppointment: 2,
	parse: function(response, options){
            this.attributes = response;            
        },
        setDefaultValues: function() {
            this.show_extra_info = 0;
            this.show_at = 0;
            this.show_when = 0;
            this.extra_info = '';
            this.label_users_comments = '';
        }
    });
    
    return WidgetLabel;
});
```

- Endpoint: GET https://www.citaconsular.es/js/widgets/utils.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/utils.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "2868"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:43 GMT"
  },
  {
    "name": "etag",
    "value": "\"28c4-6073ac25e7eb4-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:43 GMT"
  },
  {
    "name": "last-modified",
    "value": "Sun, 08 Oct 2023 21:00:10 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
define(['jquery', 'underscore', 'backbone'], function ($, _, Backbone) {
    var get_server_url = {};     

    return {
        get_server_url: function () { 
                        var sSrc = require.toUrl('');
                        var sServerUrl = sSrc.split("/js/")[0];        
                        return sServerUrl+"/onlinebookings/";                        
        },
        dataToUri: function(obj, prefix) {
            var str = [];
            for(var property in obj) {
              if (obj.hasOwnProperty(property)) {
                var k = prefix ? prefix + "[" + property + "]" : property, v = obj[property];
                str.push(typeof v === "object" ? dataToUri(v, k) : encodeURIComponent(k) + "=" + encodeURIComponent(v));
              }
            }
            return str.join("&");
        },
        dateJsToPlain: function(date){
            if (typeof date === 'undefined') date = new Date(); 
            
            var year = date.getFullYear();
            var month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
            var day = (date.getDate()) < 10 ? '0' + date.getDate() : date.getDate();
            
            return year + '-' + month + '-' + day;            
        },
        plainDateToObject: function(p_sDate){
            var sDate = p_sDate;
            var splits = sDate.split("-"); 
            
            var date = new Date(splits[0], (parseInt(splits[1])-1), splits[2]);
//            date.setTime(date.getTime() + date.getTimezoneOffset()*60*1000);
            
            return date;
        },
        getFirstMonthDay: function(p_sDate){
            var oDate = this.plainDateToObject(p_sDate);             
            var firstDay = new Date(oDate.getFullYear(), oDate.getMonth(), 1);
            var sFirstDay = this.dateJsToPlain(firstDay);
            
            return sFirstDay;
        },
        getLastMonthDay: function(p_sDate) {      
            var oDate = this.plainDateToObject(p_sDate);             
          
... [truncated]
```

- Endpoint: GET https://www.gstatic.com/recaptcha/releases/Jv8jlA-BQE5JD6rA-h_iqNH2/styles__ltr.css
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.gstatic.com"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/recaptcha/releases/Jv8jlA-BQE5JD6rA-h_iqNH2/styles__ltr.css"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "text/css,*/*;q=0.1"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "priority",
    "value": "u=0"
  },
  {
    "name": "referer",
    "value": "https://www.google.com/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "style"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "cross-site"
  },
  {
    "name": "sec-fetch-storage-access",
    "value": "active"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "age",
    "value": "169825"
  },
  {
    "name": "alt-svc",
    "value": "h3=\":443\"; ma=2592000,h3-29=\":443\"; ma=2592000"
  },
  {
    "name": "cache-control",
    "value": "public, max-age=31536000"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "42483"
  },
  {
    "name": "content-security-policy-report-only",
    "value": "require-trusted-types-for 'script'; report-uri https://csp.withgoogle.com/csp/recaptcha-scs"
  },
  {
    "name": "content-type",
    "value": "text/css"
  },
  {
    "name": "cross-origin-opener-policy",
    "value": "same-origin-allow-popups; report-to=\"recaptcha-scs\""
  },
  {
    "name": "cross-origin-resource-policy",
    "value": "cross-origin"
  },
  {
    "name": "date",
    "value": "Tue, 30 Sep 2025 13:14:18 GMT"
  },
  {
    "name": "expires",
    "value": "Wed, 30 Sep 2026 13:14:18 GMT"
  },
  {
    "name": "last-modified",
    "value": "Mon, 29 Sep 2025 12:04:53 GMT"
  },
  {
    "name": "report-to",
    "value": "{\"group\":\"recaptcha-scs\",\"max_age\":2592000,\"endpoints\":[{\"url\":\"https://csp.withgoogle.com/csp/report-to/recaptcha-scs\"}]}"
  },
  {
    "name": "server",
    "value": "sffe"
  },
  {
    "name": "timing-allow-origin",
    "value": "*"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-xss-protection",
    "value": "0"
  }
]
```
  - Response body (trunc):

```json
.goog-inline-block{position:relative;display:-moz-inline-box;display:inline-block}* html .goog-inline-block{display:inline}*:first-child+html .goog-inline-block{display:inline}.recaptcha-checkbox{border:none;font-size:1px;height:28px;margin:4px;width:28px;overflow:visible;outline:0;vertical-align:text-bottom}.recaptcha-checkbox-border{border-radius:2px;background-color:#fff;border:2px solid #444746;font-size:1px;height:24px;position:absolute;width:24px;z-index:1}.recaptcha-checkbox-borderAnimation{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAANICAYAAABZl8i8AAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAGYktHRAD/AP8A/6C9p5MAAHq9SURBVHja7Z15fFTl9f/fd9ZM9n1PgCyEXSSRNYKCgAuiIipuVSuudavV1tq6W/WrtnWrrZbWDZUqUqUoCoIEQhBI2JesELKvM9mTWe7c3x83d5xAlkky8fv92ft5vfKC19znOWfuZ571POc5B1SoUKFChQoVKlSoUKFChQoVKlSoUKFChQoVKlSoUKFChQoVKlSoUKFChQoVKlSoUKFChQoVKlSoUKHifwGCRqsTNFrdj6VPq9XqtNofT9+wvutQyEyad8t9IaPPntFUdnAvkuQcaTKvvPLK+yZMmDAjPz9/rzTC+jSgWQkr0yH9AByQQBpMfZ3a385oYdpwCFf+7wSn2uWHiQAICIAAtXmpUKFChQoVKlSoUKFChQoVKlSoUKFChQoVKlSoUKFChQoVPwGYQmISTCExCT+WvsjIyITIyMgfTV8QBAVB0FDqaodC5qjZ190enDA5vb2htNjR1dYy0mReeumlt6elpaVXVlYWt7e3j6i+KIi6D+6bBbOOw/F2aB9MfY3a33rCH/w1oNGAxh/81S7vBUyBKVNgitq8VKhQoUKFChUqVKhQoUKFChUqVKhQoUKFChUqVKhQoUKFiv9bEAZbwRQcHR89edFlADWHN33R2VRTMZJfMCIiIj4zM/MygOzs7C/q6+tHVF8YhC2GxQDfwDeN0DiY+oP2bUo4Z9mNppCYBL0pIMgnMCqmqezg3pF8wcWLF98YGRmZ4OfnFxQWFhaTn58/ovpugBvGw/goiIqG6H2wbzD1Vd+m0+ALvr39f8RaqLWlttonMCrG0dXWUnN40xcj7X3X2NhYHRYWFtPe3t6SnZ39RUdHx4jqs4AlFVJtYPsCvhhsl1ehQoUKFSpUqFChQoUKFSpUqFChQoUKFSpUqFChQoUKFSrcMGhXnMDYtMmhY9JnA5hP5uW0VBUcHskvmJSUNHnSpEmzAY4cOZJz4sSJEdWXCIkzYAbAbthdBmUjRmhgbNrkxFkrVrp/VrZrzaqRIjUpKWnykiVLeujbsGHDqpEiNRmS74F7NN0eNU5wvgFvlECJpzIG5YqjtMyxUUbGRhl7fDYSUFpmQEAAAQEBPT4bCZwP52tAw4QJMGECGtCcD+cPRobq2+QGPegBiImR/9w/GwlCzSfzcgAKa60U1lp7fDYSOHLkSA5Aa2srra2tPT4bCeyH/QBs2SL/uX/mIQblLGZtbazraq6p1OqNPrY2c33N4c1fjOSkZLFY6urr6ysNBoNPU1NTfXZ29hcjOSlVQEUndIZASBu0bYJNO2Gn2ndVqFChQoUKFSpUqFChQoUKFSpUqFChQoUKFSpU/K9Dq/cxafU+ph9Ln9FoNBmNRtP/D9wMynPEPyp5XNy0S1
... [truncated]
```

- Endpoint: GET https://citaconsular.es/js/jquery/jquery-2.1.1.min.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/jquery/jquery-2.1.1.min.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:43 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/jquery/jquery-2.1.1.min.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://citaconsular.es/js/widgets/default/views/custom.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/custom.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:43 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/widgets/default/views/custom.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://citaconsular.es/js/widgets/default/views/services.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/services.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:43 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/widgets/default/views/services.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://citaconsular.es/js/widgets/default/views/agendas.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/agendas.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:43 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/widgets/default/views/agendas.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://citaconsular.es/js/widgets/default/views/datetime.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/datetime.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:44 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/widgets/default/views/datetime.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://citaconsular.es/js/widgets/default/views/signup.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/signup.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:44 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/widgets/default/views/signup.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://citaconsular.es/js/widgets/default/views/summary.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/summary.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:44 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/widgets/default/views/summary.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://citaconsular.es/js/widgets/default/views/signin.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/signin.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:44 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/widgets/default/views/signin.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://citaconsular.es/js/widgets/default/views/signupfirstappointment.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/signupfirstappointment.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:44 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/widgets/default/views/signupfirstappointment.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://citaconsular.es/js/widgets/default/views/signupsecondappointment.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/signupsecondappointment.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:44 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/widgets/default/views/signupsecondappointment.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://citaconsular.es/js/widgets/default/views/creditcardcapture.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/creditcardcapture.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:44 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/widgets/default/views/creditcardcapture.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://citaconsular.es/js/widgets/default/views/accountlogin.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/accountlogin.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:44 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/widgets/default/views/accountlogin.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://citaconsular.es/js/widgets/default/views/recoverpassword.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/recoverpassword.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:44 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/widgets/default/views/recoverpassword.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://citaconsular.es/js/widgets/default/views/history.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/history.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:44 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/widgets/default/views/history.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://citaconsular.es/js/widgets/default/views/changepassword.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/changepassword.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:44 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/widgets/default/views/changepassword.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://citaconsular.es/js/widgets/default/views/signedin.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/signedin.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:44 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/widgets/default/views/signedin.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://citaconsular.es/js/widgets/default/views/confirmclient.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/confirmclient.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:44 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/widgets/default/views/confirmclient.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://citaconsular.es/js/widgets/default/views/redsys.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/redsys.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:44 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/widgets/default/views/redsys.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://citaconsular.es/js/widgets/default/views/waitinglistsummary.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/waitinglistsummary.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:44 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/widgets/default/views/waitinglistsummary.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://www.citaconsular.es/js/widgets/default/views/footer.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/footer.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "794"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:44 GMT"
  },
  {
    "name": "etag",
    "value": "\"a7c-5d89b4b92ddc0-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:44 GMT"
  },
  {
    "name": "last-modified",
    "value": "Tue, 22 Feb 2022 13:26:23 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
define(['jquery', 'underscore', 'backbone', 'widgets/default/models/client', 'widgets/utils', 'widgets/default/models/widgetconfiguration'],
function($, _, Backbone, Client, Utils, WidgetConfiguration){
    var AccountContainer = Backbone.View.extend({
        el: $("#idBktWidgetDefaultFooterAccount"),
        events: {
            'click #idBktWidgetDefaultFooterAccountSignOutAccount': 'doSignOutAccount'
        },
        initialize: function(){
            $(this.el).off();
            this.identifier = new Date().getTime();
        }, 
        signInAccountShow: function(){
            $('#idBktWidgetDefaultFooterAccountSignInAccountContainer').hide();
            $('#idBktWidgetDefaultFooterAccountSignOutAccountContainer').show();
            
//            var sName = $.trim(oClientValues_248295.signedInData.name);
//            
//            $('#idBktWidgetDefaultFooterAccountSignOutAccountName').html(sName);
        },
        signOutAccountShow: function(){
            $('#idBktWidgetDefaultFooterAccountSignOutAccountContainer').hide();
            $('#idBktWidgetDefaultFooterAccountSignInAccountContainer').show();
        },
        doSignOutAccount: function(){
            this.client = new Client();
            
            this.client.url = Utils.get_server_url()+"signoutaccount/";
            
            var data = $.extend(true, {}, bkt_init_widget);
            data.bktToken = oClientValues_248295.bktToken;
            
            this.client.fetch({
                data: data
            });   
            
//            Utils.deleteCookie();
            this.signOutAccountClientData();
            
            Backbone.history.navigate('signinaccount', {trigger: true, replace: true}); 
        },
        signOutAccountClientData: function(){
            delete oClientValues_248295.signedInData;
            delete oClientValues_248295.bktToken;
            
            this.signOutAccountShow();
        },
        checkSignedIn: function(){
            if(typeof oClientValues_248295.signedInDa
... [truncated]
```

- Endpoint: GET https://www.citaconsular.es/js/backbone/underscore.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/backbone/underscore.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "11589"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:44 GMT"
  },
  {
    "name": "etag",
    "value": "\"a1c9-5d89b4b92ddc0-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:44 GMT"
  },
  {
    "name": "last-modified",
    "value": "Tue, 22 Feb 2022 13:26:23 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
//     Underscore.js 1.4.4
//     http://underscorejs.org
//     (c) 2009-2013 Jeremy Ashkenas, DocumentCloud Inc.
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `global` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Establish the object that gets returned to break out of a loop iteration.
  var breaker = {};

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var push             = ArrayProto.push,
      slice            = ArrayProto.slice,
      concat           = ArrayProto.concat,
      toString         = ObjProto.toString,
      hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeForEach      = ArrayProto.forEach,
    nativeMap          = ArrayProto.map,
    nativeReduce       = ArrayProto.reduce,
    nativeReduceRight  = ArrayProto.reduceRight,
    nativeFilter       = ArrayProto.filter,
    nativeEvery        = ArrayProto.every,
    nativeSome         = ArrayProto.some,
    nativeIndexOf      = ArrayProto.indexOf,
    nativeLastIndexOf  = ArrayProto.lastIndexOf,
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind;

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object via a string identifier,
  // for Closure Compile
... [truncated]
```

- Endpoint: GET https://www.citaconsular.es/js/jquery/jquery-2.1.1.min.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/jquery/jquery-2.1.1.min.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "29497"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:44 GMT"
  },
  {
    "name": "etag",
    "value": "\"14915-5d89b4b92ddc0-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:44 GMT"
  },
  {
    "name": "last-modified",
    "value": "Tue, 22 Feb 2022 13:26:23 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
/*! jQuery v2.1.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.1",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a
... [truncated]
```

- Endpoint: GET https://www.citaconsular.es/js/widgets/default/views/custom.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/custom.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "1086"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:44 GMT"
  },
  {
    "name": "etag",
    "value": "\"ff3-5d89b4b92ddc0-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:44 GMT"
  },
  {
    "name": "last-modified",
    "value": "Tue, 22 Feb 2022 13:26:23 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
define(['jquery', 'underscore', 'backbone'],
function($, _, Backbone){
    var CustomMainContainer = Backbone.View.extend({
        el: $("#idBktDefaultCustomContainer"),         
        events: {
            'click #idDivBktCustomContinueButton': 'goToServices'
        },
        initialize: function(){
            this.identifier = new Date().getTime();
        },   
        start: function(){
            this.resetData();
            oClientValues_248295.selectedPeople = 1;
            oClientValues_248295.customData = {};
            
            $('#idDivBktDefaultCustomFieldsContent').empty();
            
            $('.clsBktWidgetDefaultLoading').remove();
            $('#idBktWidgetDefaultBodyContainer').show();    
            $('.clsDivBktWidgetDefaultLoadingContainer').remove();
            
            this.showLoading();
            this.loadFields();
            this.show();
        },
        loadFields: function(){
            for(var i = 0 ; i < oClientValues_248295.widgetcustom.length ; i++){
                if(oClientValues_248295.widgetcustom[i].type === 'select-numeric'){
                    this.drawSelectNumeric(oClientValues_248295.widgetcustom[i]);
                }
            }            
        },
        drawSelectNumeric: function(p_someAttributes){
            var parameters = { attributes: p_someAttributes };
            var template = _.template($("#idTemFieldCustomSelect").html(), parameters);
            this.$('#idDivBktDefaultCustomFieldsContent').append(template);
        },
        show: function(){
            $(".clsBktDefaultWindow").hide();  
            
            this.$el.show();
            this.hideLoading();
        },
        showLoading: function(){
            $('#idBktWidgetDefaultBodyContainer').prepend('<div class="clsDivBktWidgetDefaultLoadingContainer clsDivBktLoadingContainer'+ this.identifier +'"><div class="clsDivBktWidgetDefaultLoading"></div></div>');
        },
        hideLoading: function(){
            $('.clsDivBktLoadingContainer' + this.i
... [truncated]
```

- Endpoint: GET https://www.citaconsular.es/js/widgets/default/views/services.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/services.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "1804"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:44 GMT"
  },
  {
    "name": "etag",
    "value": "\"2009-5dc769f27f180-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:44 GMT"
  },
  {
    "name": "last-modified",
    "value": "Tue, 12 Apr 2022 15:21:58 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
define(['jquery', 'underscore', 'backbone', 'widgets/default/views/serviceslist', 'widgets/default/views/servicespeople', 
    'widgets/default/views/servicesbuttoncontinue', 'widgets/default/views/languages', 'widgets/default/models/service', 'widgets/utils'],
function($, _, Backbone, ServicesList, ServicesPeople, ServicesButtonContinue, LanguagesSelector, Event, Utils){
    var ServicesMainContainer = Backbone.View.extend({
        el: $("#idBktDefaultServicesContainer"),         
        initialize: function(){
            this.identifier = new Date().getTime();
        },   
        start: function(){
            this.checkTempEvent();
            
            this.resetData();
            oClientValues_248295.selectedPeople = (oClientValues_248295.hasOwnProperty('customData') && oClientValues_248295.customData.hasOwnProperty('customSelectedPeople')) ? oClientValues_248295.customData.customSelectedPeople : 1;
            
            $('.clsBktWidgetDefaultLoading').remove();
            $('#idBktWidgetDefaultBodyContainer').show();    
            $('.clsDivBktWidgetDefaultLoadingContainer').remove();
            
            $('#idBktServicesBackToCustomContainer').remove();
            
            this.showLoading();
            this.loadServices();
        },
        loadServices: function(){
            if(this.services_list){ delete this.services_list; }
            this.services_list = new ServicesList({parentView: this});     
            this.services_list.start();     
            
            this.listenTo(this.services_list.services, "reset", function(){
                this.checkSkipServices();
            });
        },
        checkSkipServices: function(){
            var bAreServicesPreSelected = (typeof oClientValues_248295.selectedServices !== 'undefined') ? true : false;
//            var bSkipServices = (typeof oClientValues_248295.widgetconfiguration.skip_services !== 'undefined') ? true : false;
            var bIsRestaurant = (typeof oClientValues_24
... [truncated]
```

- Endpoint: GET https://www.citaconsular.es/js/widgets/default/views/agendas.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/agendas.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "1228"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:44 GMT"
  },
  {
    "name": "etag",
    "value": "\"13d0-5d89b4b92ddc0-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:44 GMT"
  },
  {
    "name": "last-modified",
    "value": "Tue, 22 Feb 2022 13:26:23 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
define(['jquery', 'underscore', 'backbone', 'widgets/default/views/agendaslist', 'widgets/default/views/breadcrumb', 'widgets/default/views/languages'],
function($, _, Backbone, AgendasList, BreadCrumb, LanguagesSelector){
    var AgendasMainContainer = Backbone.View.extend({
        el: $("#idBktDefaultAgendasContainer"),
        initialize: function(){        
            this.identifier = new Date().getTime();
        },
        start: function(){
            oClientValues_248295.selectedAgendas = [];
            $('.clsDivBktWidgetDefaultLoadingContainer').remove();
            
            this.showLoading();
            this.loadAgendas();
        },
        loadAgendas: function(){
            if(this.agendas_list){ delete this.agendas_list; }
            this.agendas_list = new AgendasList({parentView: this});
            this.agendas_list.start();
            
            this.listenTo(this.agendas_list.agendas, "reset", function(){
                this.checkSkipAgendas();
            });
        },
        checkSkipAgendas: function(){
            var bAreServicesPreSelected = (typeof oClientValues_248295.selectedServices !== 'undefined') ? true : false;
            var bAreAgendasPreSelected = (typeof oClientValues_248295.selectedAgendas !== 'undefined') ? true : false;
            
            var bArePreselected = (bAreServicesPreSelected && bAreAgendasPreSelected && oClientValues_248295.selectedAgendas.length > 0) ? true : false;
            
            var bShownCustom = (oClientValues_248295.hasOwnProperty('customData') && oClientValues_248295.customData.hasOwnProperty('customSelectedPeople') && oClientValues_248295.customData.backToCustom === true) ? true : false;
            
            if((typeof oClientValues_248295.backToServices !== 'undefined' && oClientValues_248295.backToServices === true) || bShownCustom){
                var elmnt = document.getElementById("idBktWidgetBody");
                elmnt.scrollIntoView();
            }
            
            if(bArePreselected){
          
... [truncated]
```

- Endpoint: GET https://citaconsular.es/js/widgets/default/models/client.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/models/client.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:45 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/widgets/default/models/client.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://citaconsular.es/js/widgets/default/views/agendaslist.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/agendaslist.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:45 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/widgets/default/views/agendaslist.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://citaconsular.es/js/widgets/default/views/breadcrumb.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/breadcrumb.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:45 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/widgets/default/views/breadcrumb.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://citaconsular.es/js/widgets/default/views/languages.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/languages.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:45 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/widgets/default/views/languages.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://citaconsular.es/js/widgets/default/views/serviceslist.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/serviceslist.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:45 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/widgets/default/views/serviceslist.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://citaconsular.es/js/widgets/default/views/servicespeople.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/servicespeople.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:45 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/widgets/default/views/servicespeople.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://citaconsular.es/js/widgets/default/views/servicesbuttoncontinue.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/servicesbuttoncontinue.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:45 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/widgets/default/views/servicesbuttoncontinue.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://citaconsular.es/js/widgets/default/models/service.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/models/service.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:45 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/widgets/default/models/service.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://www.google.com/recaptcha/api2/webworker.js?hl=es&v=Jv8jlA-BQE5JD6rA-h_iqNH2
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.google.com"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/recaptcha/api2/webworker.js?hl=es&v=Jv8jlA-BQE5JD6rA-h_iqNH2"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "priority",
    "value": "u=4, i"
  },
  {
    "name": "referer",
    "value": "https://www.google.com/recaptcha/api2/anchor?ar=1&k=6Le7usYfAAAAAHX3Bv0eWXNtEf9D5aV4BtPR2SoQ&co=aHR0cHM6Ly93d3cuY2l0YWNvbnN1bGFyLmVzOjQ0Mw..&hl=es&v=Jv8jlA-BQE5JD6rA-h_iqNH2&size=normal&anchor-ms=20000&execute-ms=15000&cb=a2teapq2ctjv"
  },
  {
    "name": "sec-fetch-dest",
    "value": "worker"
  },
  {
    "name": "sec-fetch-mode",
    "value": "same-origin"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-origin"
  },
  {
    "name": "sec-fetch-storage-access",
    "value": "active"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "alt-svc",
    "value": "h3=\":443\"; ma=2592000,h3-29=\":443\"; ma=2592000"
  },
  {
    "name": "cache-control",
    "value": "private, max-age=300"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-type",
    "value": "text/javascript; charset=utf-8"
  },
  {
    "name": "cross-origin-embedder-policy",
    "value": "require-corp"
  },
  {
    "name": "cross-origin-opener-policy-report-only",
    "value": "same-origin; report-to=\"coop_38fac9d5b82543fc4729580d18ff2d3d\""
  },
  {
    "name": "cross-origin-resource-policy",
    "value": "same-site"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:44 GMT"
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 12:24:44 GMT"
  },
  {
    "name": "report-to",
    "value": "{\"group\":\"recaptcha\",\"max_age\":2592000,\"endpoints\":[{\"url\":\"https://csp.withgoogle.com/csp/report-to/recaptcha\"}]}"
  },
  {
    "name": "report-to",
    "value": "{\"group\":\"coop_38fac9d5b82543fc4729580d18ff2d3d\",\"max_age\":2592000,\"endpoints\":[{\"url\":\"https://csp.withgoogle.com/csp/report-to/38fac9d5b82543fc4729580d18ff2d3d\"}]}"
  },
  {
    "name": "server",
    "value": "ESF"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-frame-options",
    "value": "SAMEORIGIN"
  },
  {
    "name": "x-xss-protection",
    "value": "0"
  }
]
```
  - Response body (trunc):

```json
importScripts('https://www.gstatic.com/recaptcha/releases/Jv8jlA-BQE5JD6rA-h_iqNH2/recaptcha__es.js');
```

- Endpoint: GET https://citaconsular.es/js/backbone/backbone.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/backbone/backbone.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:45 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/backbone/backbone.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://www.gstatic.com/recaptcha/api2/logo_48.png
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.gstatic.com"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/recaptcha/api2/logo_48.png"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "priority",
    "value": "i"
  },
  {
    "name": "referer",
    "value": "https://www.gstatic.com/recaptcha/releases/Jv8jlA-BQE5JD6rA-h_iqNH2/styles__ltr.css"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "image"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "cross-site"
  },
  {
    "name": "sec-fetch-storage-access",
    "value": "active"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "age",
    "value": "33558"
  },
  {
    "name": "alt-svc",
    "value": "h3=\":443\"; ma=2592000,h3-29=\":443\"; ma=2592000"
  },
  {
    "name": "cache-control",
    "value": "public, max-age=604800"
  },
  {
    "name": "content-length",
    "value": "2228"
  },
  {
    "name": "content-security-policy-report-only",
    "value": "require-trusted-types-for 'script'; report-uri https://csp.withgoogle.com/csp/recaptcha-scs"
  },
  {
    "name": "content-type",
    "value": "image/png"
  },
  {
    "name": "cross-origin-opener-policy",
    "value": "same-origin-allow-popups; report-to=\"recaptcha-scs\""
  },
  {
    "name": "cross-origin-resource-policy",
    "value": "cross-origin"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 03:05:26 GMT"
  },
  {
    "name": "expires",
    "value": "Thu, 09 Oct 2025 03:05:26 GMT"
  },
  {
    "name": "last-modified",
    "value": "Tue, 03 Mar 2020 20:15:00 GMT"
  },
  {
    "name": "report-to",
    "value": "{\"group\":\"recaptcha-scs\",\"max_age\":2592000,\"endpoints\":[{\"url\":\"https://csp.withgoogle.com/csp/report-to/recaptcha-scs\"}]}"
  },
  {
    "name": "server",
    "value": "sffe"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-xss-protection",
    "value": "0"
  }
]
```
  - Response body (trunc):

```json
iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAIGElEQVRo3t2ZC1AU9x3HPeEOOB6KhOCUTnicIAeCUGxQOA64O+S4QxAxaUwjNpiaDirYWgKVIdqgghDACsgzgHBvIIpvzUyaaZxJk+YxZmzajM40sbF1akwmNiS148z299/977G3t7v34NCZ7sx3uJ27/e/n83/tf/8sWvR/eoggfhCxj+KPg8pcjMtfuEOxZUvQlo6bZ5/tnSXI9FDZgvNMN5Wf0Dk2l6dxnvodlUztyIP0Dca7azYY38sqmxgseHr8+V/stayqqKgNwkILIiMJiIxMKG68+mbF0VliE50uKuU4GzuplNHpmEspToq6h0gpHCXkhUYiSWOFTEKmiNSiydmsjZb252pH5bh1RL7uQsGS8PBUbeMHf/BUoJQpoEECfUSyZoyQMwRWqqftydBPvrn5hZF0X7eIXaJ433tvs+HdEdjwKggU9gB4PyFXDxPJaqOTQKIKRz1FZJZYRquqmpa5kBDV149K3BVFPwoRL12aoT9w4wZX7bsSSAaBZDUlIFdBK6jNnAIJqikyco3tK93WoSdxazjx6PUvSFPWW6y427l1iH968J2XUBcq97D/ky2gQQJ9AP4aBAmME0kg4VD7DIEVBVPQGtOEsny8kgUp0um2S1M0ppOxykkCzqXuwPtXtv/1QLmrrsNT+3MC/XMCGiRggFg54enI8qcIRdl4DT3AdboqaUqh6RSCxwKhruD9nmv9uIYP3p3aJ7uQmiGgYQoYiZUqK6cAgqejKBvempNTFppcaJqJy6PgsUCYEPzi7a+8peLr867guQWGSYEk9QQloDKBgAkEbLwC8QCMzmHcfITg3RUQVe3uiNrYee8eG9qp23QKw5c4CZygBFRGDG8CcBQrr0A8BmfCx+baBAXEFS2fTbqE7xDuOrRAiuYowPfNCagMpECig4AZwK0+ERA9u29mbRlXTXsBjwJl5gYsidBEy3K2ydKquxOUA3cSHQTMVApMAG9zgvdUQFJ25NY7noLrDn85q9730TU2PBZ4HM8YEZAYyJqYlK2NMtVr3zHhE/LNZGT5VuHaFxAQbfyleTUbki80fNHL165H/nClVhwUlqWqu/I2E76kfZa+kQivQtGUGAz5wZLH4zWy7OOfJqrMdvgVeVRk+TbB2ucT8C9t/kuvu+Ao2t9cux4UEZUF14ajAiXB4amql959i4ZnCLCf7khkaVBYxJNx2d2fMAVk8Dc+zwSx2uHdEkhSKEL1bV//RwjYAb7t7nfRstUFuKDF9rUTSOTX/fH3AgL2qRp9Fx6ZqIhTnJil4SkBFItdgt19uARExbuHM0oFgNkDNbPiUCNctwyDOC4AQ8JXIQm9sAD5sExISItemTf4IRs+DkVJSbDhYxTOAn7afVdedAJ+9VsyG9odU3To8zsBAQEyngUVlli2Kr/hg0toMcj3vCkv/3loWtHYDA0vy7fgmqfgUWLJvzaXApKipk9GacCStntUjnzDmeyfjXThmUUktBQPXLo8FpXN9f2mTTsA/sQpIXjUCrFKKxlSAsNzCQRpD978EMHpj3xN6FvvUmn5koyOleS8qmL8rutqKS7mkLTDryhwho/nhIfkonN+geD1r9z+SgfQusP/IooP/YPQoRy8xZmoxLQ4Vt93+yWpvNwZHs39bPi4PBZ8rhXA6TgLhOpb/vlAd/g2Bdn8OaH97Q1Ce+A6oX35UzJFjMDvH+PZfRB8JczJeSYobf3w6YT8cZgyUSYgBkKmhOQaiPjcCZBAMQA0OocoJog4hYFMbA6VGAh7OR12+fJlwpNcunTJKUaj8d2SkhKhFw00Hp6AZEDQ82OtF0HXrUbd3kHgwoULhLc5f/48MTAwcDUkJETOM2iZ40KCbz6fBLJbOsxb
... [truncated]
```

- Endpoint: GET https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxK.woff2
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "fonts.gstatic.com"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxK.woff2"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "origin",
    "value": "https://www.google.com"
  },
  {
    "name": "priority",
    "value": "u=0"
  },
  {
    "name": "referer",
    "value": "https://www.google.com/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "font"
  },
  {
    "name": "sec-fetch-mode",
    "value": "cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "cross-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "access-control-allow-origin",
    "value": "*"
  },
  {
    "name": "age",
    "value": "35043"
  },
  {
    "name": "alt-svc",
    "value": "h3=\":443\"; ma=2592000,h3-29=\":443\"; ma=2592000"
  },
  {
    "name": "cache-control",
    "value": "public, max-age=31536000"
  },
  {
    "name": "content-length",
    "value": "15344"
  },
  {
    "name": "content-security-policy-report-only",
    "value": "require-trusted-types-for 'script'; report-uri https://csp.withgoogle.com/csp/apps-themes"
  },
  {
    "name": "content-type",
    "value": "font/woff2"
  },
  {
    "name": "cross-origin-opener-policy",
    "value": "same-origin; report-to=\"apps-themes\""
  },
  {
    "name": "cross-origin-resource-policy",
    "value": "cross-origin"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 02:40:42 GMT"
  },
  {
    "name": "expires",
    "value": "Fri, 02 Oct 2026 02:40:42 GMT"
  },
  {
    "name": "last-modified",
    "value": "Mon, 16 Oct 2017 17:32:55 GMT"
  },
  {
    "name": "report-to",
    "value": "{\"group\":\"apps-themes\",\"max_age\":2592000,\"endpoints\":[{\"url\":\"https://csp.withgoogle.com/csp/report-to/apps-themes\"}]}"
  },
  {
    "name": "server",
    "value": "sffe"
  },
  {
    "name": "timing-allow-origin",
    "value": "*"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-xss-protection",
    "value": "0"
  }
]
```
  - Response body (trunc):

```json
d09GMgABAAAAADvwABIAAAAAi0gAADuNAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGmQbmUAcg0oGYACGTAhUCYM8EQwKgdZ4gb8uC4NeABKBeAE2AiQDhzYEIAWCdAcgDIJJG2h8FWybhrPbQQCpv+xiNqKCjQMSDPvSoijbpKfJ/v+WQGXIul3TDuAqOgqNLZcwkctyqCnLxWhTrJNo79WE5k6GKatE1o3SvaK4sJDXpoT6YtFd+/Lw8PmX7l4XzrN0P/Fte+rwEB4iODSGD805y529C6/iCWPdCO0/3QxyM2+f7giNfZLLw1Ndj38uqnpiTwCu4i96BdB74/UQze1+Y2P02JDIgYJJpIDQI6VHtkSOrrEBIypl0ptBlKJigaLQYmBhNVDkNPWlFNmf0gsKDU0QfwrudjS20mZJI1j0eiyTLBMd9z1hdnn+EUYfYQZcOfBQfH9b+QiRFnKsUUBNEEnv7l+XObPonZFWhgBRxe1dFaCv/xfsWyB7dYARTECyg5JdBrBLn+rSE5TaXUPCr8/h0mwkjVrZWuy98/pac740xALgA/qABcAgeAAGwAD4/r/3+kaSP7s3TrGKXYF8pndiXPDN7dRaezFMI43IdNH0Fs8wq2RNpgmPJEpWubsVe7cAb1jZAZhpAKDw9zbTdt9+6dD0DwzdKXzqVHRBUCYp3aVLUe2+XXm1/wvoEu+d4ciwJ5PABDoZZIWAKxSEZIfOFyJD5aRoiLpw6TIITZu2ZSzKKlVQheNAgXEEhzcEFESAQP/L1Cz9r7EAl+BC3G75IHImyBoYGbKo0EYh8AGwh9Nch4GkO1LGuz8tg2msG+AsN8EZY2Lv4osvSRXEF0VntpixIVjFKTUKQWo3/7vfT2sH0Ww3yZZqmkFAQmAio329d79tGc5SfznTCVShWIJYu2QBhtP1U//6YFhJ0gIx4A6SIAEkQwZIliyQXLkg+fJBKApBWrSDmfAeBAID7A7YGwQIkAQQYFdytDBdebWZLRC8SwIxBAjeg+gXDATv6xUdBgQxAXRCc93nbsQwgALkOZNGW2LtM3i52Mq/KiSqv/rjVKjXUE3VWi2HTsJyUz9Jzjw4ZVInvTO6tjI3C5o/O4/CT0xmKqlSatGyQINv9VeqDOe1GqqfquXytd3aan5BVEHqq4IJEht2WJJOOuW0M2RNAXIUKVGmQpW6CzRp0WbClBlL1mwQ2HPkzIUbD2XKVaoygY7hqmuuu2HSlEdPnn368u3HLxMnhIQlJKWkZWSVKqAnqq1xUMfjAgxNvB5qE4INBxMdLwx6Jpk9mfnpcTwM2uLtLZ8CPwRBAiW/2kuTvTHVa7PK8by3ruJVDbU2evYYcBWuwXW4YXvUFggIMBCgNtZbHASEIAxJSEEaMpC15XojDwUo2kq9Vo5auTS9QMrdHUecMmqCoNqqgfYN9s5wm0zSHQLQ9PcF3F+593kwtUZtlEuLVmdCcqdkZC63Ivm1YMKBhy7uieieRVgALmCHt5zT8MwvuMj0Qf8R/uAfdDAad0JCY1P1xGIY9ZoP4IcgKKhXL0zmBbRygkqosj3tNQ4CQhBu3MCod3zghyAocA4MOAgIQbi0nSkujhS44IZEKPUkIAVpyEC2sRO6bBiogGqoRZfgHbyDdxJAB6NxAzM4lmCVn1A6h4q5YPP8ru8DXsBLeMWhvTPCHW/WRIdZZdszc/TSeF/1CtPGtA+S+YZVRifajLU9vFo4u4eZbiqbamsmEmIVG9plyd2dfAM1y23acVPuesSqPBqIKQ6wdUNMAOKWgTB+y2qMDY6et2/Hcms6ehuNfNHqov5NB+5a15fF/AaOvkaExssdllarlz0HSOd8FTjq0e//9OH9CDze5OJZHtxRddbz/iXc4eL8eskCeDRl/7S176+LZvsmhcju208s+5et7J9zNU3ptXCuZHMrsGIW3bnkl+120ItKPLRHa0J8ipmTPW8t9u5prY33rmbcMC2010d2rnmgLelSvyPHgqOG9ivTt9zSlahNAAANXUFzlWsO40pKR/lDAwtXtOi2u986
... [truncated]
```

- Endpoint: GET https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fBBc4.woff2
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "fonts.gstatic.com"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fBBc4.woff2"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "origin",
    "value": "https://www.google.com"
  },
  {
    "name": "priority",
    "value": "u=0"
  },
  {
    "name": "referer",
    "value": "https://www.google.com/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "font"
  },
  {
    "name": "sec-fetch-mode",
    "value": "cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "cross-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "access-control-allow-origin",
    "value": "*"
  },
  {
    "name": "age",
    "value": "224822"
  },
  {
    "name": "alt-svc",
    "value": "h3=\":443\"; ma=2592000,h3-29=\":443\"; ma=2592000"
  },
  {
    "name": "cache-control",
    "value": "public, max-age=31536000"
  },
  {
    "name": "content-length",
    "value": "15552"
  },
  {
    "name": "content-security-policy-report-only",
    "value": "require-trusted-types-for 'script'; report-uri https://csp.withgoogle.com/csp/apps-themes"
  },
  {
    "name": "content-type",
    "value": "font/woff2"
  },
  {
    "name": "cross-origin-opener-policy",
    "value": "same-origin; report-to=\"apps-themes\""
  },
  {
    "name": "cross-origin-resource-policy",
    "value": "cross-origin"
  },
  {
    "name": "date",
    "value": "Mon, 29 Sep 2025 21:57:43 GMT"
  },
  {
    "name": "expires",
    "value": "Tue, 29 Sep 2026 21:57:43 GMT"
  },
  {
    "name": "last-modified",
    "value": "Mon, 16 Oct 2017 17:33:02 GMT"
  },
  {
    "name": "report-to",
    "value": "{\"group\":\"apps-themes\",\"max_age\":2592000,\"endpoints\":[{\"url\":\"https://csp.withgoogle.com/csp/report-to/apps-themes\"}]}"
  },
  {
    "name": "server",
    "value": "sffe"
  },
  {
    "name": "timing-allow-origin",
    "value": "*"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-xss-protection",
    "value": "0"
  }
]
```
  - Response body (trunc):

```json
d09GMgABAAAAADzAABIAAAAAi+QAADxaAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGmQbmXocg0oGYACGTAhcCYM8EQwKgdc8gcAGC4NeABKBeAE2AiQDhzYEIAWDAAcgDIJTGxh9JdPNEc/tAKZ86g0chXgcgFtqGEXNopySZP//LUGzAYNdPXNqZiRYf2/KNbGN0toNrVbs5KKf3t2jaT991lztFt62O+Xv+1adsoWgGow17a/VbU89LFvFoUKrymQn2uuvPZqLTccu6o5xj+LtOOryVSef2U7990cB+dBboIg4BhSIEkpwDAR4UMaO0NgnuT/Pz+3Pfe8tkjFG2EOithHprPklerARI6qMBFHEGYV+7H6i/zMbqxGTDKvwB/L8r6m2cpRYa7XmdvEqpTd0wytidxS8/2aTHGKlA9hx/lfVxCdFlf8B0bqkT6W2YawASEm26S7butJZ/kLKG2kPS9owtjrflGQLRblMd/f2BABR/RJ+/TbcfUIWhsJiVAxGhCw8Ci8RHg/CUXXDA/yxfBersEialg6TRmugKi2q4kjQ2XA0yiS4/gO0zQ574Ya6MtYu0sLCIpRUJ4rNFKOwGQgWohJWYeQ2K4Y5dXbO+L2LUle6kFUkOBsAynCGwZXzF66bqgaCpEg1C5LcQsGNTun4VqfP73uGMeMW3K6rNX1w/3E2k/FUlAsBVaNQuE6NqfJVwAsHIbh36n8/0ozUbUnuseM4cdp9pRQAHyA+i1q7S/vhFbAFdHEHpH3EPjxPa6ndd//mIPwTdpmW5QpXhJATexDYm9sCb4m3gOiqIisjKyygBHZkdIWvrHCyV0tLOqNwMcOTnf8zYJEgM5eZAZrt3b3dmVHYXemCVpckfZD0+cKHvKcPOt29U5CNYmIhSfqcoWOEb2YUMnVxA24ATWFK6LgBQ2YGzP6Xqdr+dwgkwTlDuwqpc2rqPcCBkD29Wjcd+AFoz3cgTR9EjYZBCXQImYsVx7hdBwRHVnBMnezSVSjduivduSltsdqYZSmjuEihfWnhb/ZMsJOKUwtyENJtmgtLb5/ppx3Dad2W7U3biaZKHPw4NKE9FRDGf/jzgx22xZnjtQrzU6ioQJWVqKoKrVqFVq9F+w5iuo+AMAAugMABQGg+ALAdziIkuj8NDIOx388vzoWxPxen5cDYP5JK82EsAgB8FLpk+sfifGACbTWC0GLY8UxXY7bf60zulvcPP9ZH3l39aej4yFEUhjEJOsbHTEpWikqu0uFiVZUyqDpc32t0AsX5qpb0jNF0rLHF3dJrxrYMHe9C66ceaRx6K5fwLtoPw9OUmPrfEkHpHK6BhZW1ja29g7OLq5uHfOr0GTP9/AOVoSp1hCY6Ji5hc83WP3UXLl66fOXqtYbrN27ef/BQih95rEmLVm3a9ejVp9+AQR98hHhkBEFOZCpL0xlpYgQxiAwHgucT4f3dLAIjizoPIl55wifv+Ar8CEBN+NMjsikqb0XntTiRrM17WyS14XbYC1G4yCUuc4Wr9nkdXvCSV7zmjW3uvRZaaaOdXvroZ4BBO9Q7b3nHe/uhIR8PIjEZzL91BkaDr+L5gMYjT8mzbmq2TM9jTQiJBHPhdsDCj23ERIQREekXk0V5CbAoQSoyW1VOWpV9CDwis+g3HHwhiQHQg8s7x3d8/gY6Wd6b4nnCUxp5NrUInQCnTHO8kE9e8wV+BBBepA3XzslmAjXEVv60zQ1poZU22p+O1KQWh0+2+Ar8CCCctTTTQitttD+f4E9Ew0kMffKEQZ0Xa2yiV4Z9kn4GGJyaRhAOIVuoZXsxQLbY4kMAGnk2tQGf5PPFj4BEnRDh8vzIHBGDY+0eNhMttNJGu+2tUB/9DDDokPG748xyhyYfxOQpHC9smpXPkoIE45/3qeQtpKJwkI8dXrC7iR/mGQ7900lEHtDMRWaPz0uTRZltfP5eVbluVRpsy3MmXcNWqtnwV/zxYHkhCEC7v/kwnolFrdAE6mV9FlXfWupdsaW+l3nb296O8Mw1JifV2I/8xNRzfa667Ig7DRM8/z+8
... [truncated]
```

- Endpoint: GET https://www.citaconsular.es/js/widgets/default/views/datetime.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/datetime.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "1739"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:44 GMT"
  },
  {
    "name": "etag",
    "value": "\"1caa-6073aba305d0c-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:44 GMT"
  },
  {
    "name": "last-modified",
    "value": "Sun, 08 Oct 2023 20:57:53 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
define(['jquery', 'underscore', 'backbone', 'widgets/utils', 
    'widgets/default/views/datetimelist', 'widgets/default/views/datetimedatepicker', 'widgets/default/views/datetimeslidedate',
    'widgets/default/collections/slots', 'widgets/default/views/breadcrumb', 'widgets/default/views/languages'],
function($, _, Backbone, Utils, DateTimeList, DateTimeDatePicker, DateTimeSlideDate, Slots, BreadCrumb, LanguagesSelector){
    var DateMainContainer = Backbone.View.extend({
        el: $("#idBktDefaultDatetimeContainer"), 
        initialize: function(){
            this.selectedDate = Utils.dateJsToPlain(new Date());
            this.firstAvailableDate = Utils.dateJsToPlain(new Date());
            this.slots = new Slots();
            this.datetimeslidedate = new DateTimeSlideDate({parentView: this});
            this.datetimedatepicker = new DateTimeDatePicker({parentView: this});
            this.languagesselector = new LanguagesSelector();
            
            if($('#idDivBktWidgetTimezoneSelectorContainer').length){
//                this.lastSelectedTimezone = $('#idDivBktWidgetTimezoneSelector').attr('data-timezone');
                this.selectedTimezone = false;
            }
            
            this.render();
        },        
        events: {
            'change #idSelNumberOfPeopleDatime': 'refreshSlots',
            'change #idDivBktWidgetTimezoneSelector': 'timezoneChange'
        },
        render: function(p_sError){ 
            this.cleanViews();      
            this.selectedDate = Utils.dateJsToPlain(new Date());
            this.datetimelist = new DateTimeList({parentView: this});
            this.show(p_sError);
        },
        refreshSlots: function(){
            var iSelectedPeople = parseInt($('#idSelNumberOfPeopleDatime').val());
            oClientValues_248295.selectedPeople = iSelectedPeople;
            this.datetimelist = new DateTimeList({parentView: this});
        },
        cleanViews: function(){
            if (this.datetim
... [truncated]
```

- Endpoint: GET https://www.citaconsular.es/js/widgets/default/views/signup.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/signup.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "3269"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:44 GMT"
  },
  {
    "name": "etag",
    "value": "\"4081-61ac5b5921a95-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:44 GMT"
  },
  {
    "name": "last-modified",
    "value": "Thu, 13 Jun 2024 13:45:17 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
define(['jquery', 'underscore', 'backbone', 'widgets/default/views/signupfieldslist', 'widgets/default/models/client', 
    'widgets/default/models/field', 'widgets/utils', 'widgets/default/views/breadcrumb', 'widgets/default/views/languages', 'widgets/default/models/widgetconfiguration',
'widgets/default/models/service'],
function($, _, Backbone, SignupFieldsList, Client, Field, Utils, BreadCrumb, LanguagesSelector, WidgetConfiguration, Event){
     var SignUpContainer = Backbone.View.extend({        
        el: $("#idBktDefaultSignUpContainer"),
        initialize: function(){     
            this.iMaxTextareaChars = 500;            
            
            this.field = new Field();      
//            this.bReCaptcha = false;
        },
        events: {
            'click #idIptBktAcceptCondtions': 'removeAcceptContiditionsError',
            'click #idBktDefaultSignUpAcceptText': 'showLegalNotice',
            'click #idDivBktSignUpSubHeaderAccount': 'showSignIn',
            'click #idBktDefaultSignUpConfirmButton': 'handleSubmit',
            'click #idDivReCaptchaSignUp': 'captchaSubmited'
        },
        start: function(){
            this.render();
            this.show();
        },
        checkTempEvent: function() {
            if (typeof oClientValues_248295.clientData !== 'undefined' && typeof oClientValues_248295.clientData.attributes !== 'undefined' && oClientValues_248295.clientData.attributes.event_created === true) {
                var oTempEvent = new Event();                
                oTempEvent.url = Utils.get_server_url()+"freetempevent/";         
            
                var data = {
                    bktToken: oClientValues_248295.bktToken
                };
                
                oTempEvent.fetch({
                    data: data
                });
            }            
        },
        render: function(){
            if(this.signup_fields){
                delete this.signup_fields;
                delete this
... [truncated]
```

- Endpoint: GET https://www.citaconsular.es/js/widgets/default/views/summary.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/summary.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "4096"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:44 GMT"
  },
  {
    "name": "etag",
    "value": "\"5813-6073abe9f963c-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:44 GMT"
  },
  {
    "name": "last-modified",
    "value": "Sun, 08 Oct 2023 20:59:07 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
define(['jquery', 'underscore', 'backbone', 'widgets/default/models/event', 'widgets/utils', 'widgets/default/views/ticket', 
    'widgets/default/models/widgetlabel', 'widgets/default/views/languages', 'widgets/default/models/widgetconfiguration', 'widgets/default/collections/services',
    'widgets/default/views/footer'],
function($, _, Backbone, Event, Utils, TicketView, WidgetLabel, LanguagesSelector, WidgetConfiguration, Services, Footer){
    var SummaryContainer = Backbone.View.extend({  
        el: $("#idBktDefaultSummaryContainer"),
        initialize: function(){
            this.oServices = new Services();
            this.footer = new Footer();
            this.render();
        },
        events: {
            'click #idDivBktSummaryBackButton': 'goToBegin'
//            'click #idSpanBktSummaryCancelAppointment': 'showCancelAppointment'
        },
        render: function(){
            this.languagesselector = new LanguagesSelector();
            this.widgetconfiguration = new WidgetConfiguration();
            $('#idDivBktSummaryPayment').hide();

            if(typeof oClientValues_248295.priceData !== 'undefined'){ 
                var online = String(parseFloat(oClientValues_248295.priceData.online).toFixed(2)).replace('.', ',');
                var offline = String((parseFloat(oClientValues_248295.priceData.offline) - parseFloat(oClientValues_248295.priceData.online)).toFixed(2)).replace('.', ',');
                var total = String(parseFloat(oClientValues_248295.priceData.offline).toFixed(2)).replace('.', ',');
                var currency = String(oClientValues_248295.priceData.currency);         
                
//                $('#idDivBktSummaryPaymentContentTotalAmount').text(total + currency);
//                $('#idDivBktSummaryPaymentContentPaidAmount').text(online + currency);
//                $('#idDivBktSummaryPaymentContentPendingAmount').text(offline + currency);
                $('#idDivBktSummaryPaymentContentTotalAmount').text(oClientValues_248295.priceData.totalString)
... [truncated]
```

- Endpoint: GET https://www.citaconsular.es/js/widgets/default/views/signin.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/signin.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "3237"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:44 GMT"
  },
  {
    "name": "etag",
    "value": "\"4076-61ac5b338e855-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:44 GMT"
  },
  {
    "name": "last-modified",
    "value": "Thu, 13 Jun 2024 13:44:37 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
define(['jquery', 'underscore', 'backbone', 'widgets/default/views/signinfieldslist','widgets/default/views/breadcrumb', 'widgets/default/models/client',
    'widgets/default/models/field', 'widgets/utils', 'widgets/default/views/languages', 'widgets/default/models/widgetconfiguration', 'widgets/default/models/service', 
    'widgets/default/views/footer'],
function($, _, Backbone, SigninFieldsList, BreadCrumb, Client, Field, Utils, LanguagesSelector, WidgetConfiguration, Event, Footer){
    var SignInContainer = Backbone.View.extend({        
        el: $("#idBktDefaultSignInContainer"),
        initialize: function(){
            $(this.el).off();
            
            this.iMaxTextareaChars = 200;
            
            this.oField = new Field();
            
            this.identifier = new Date().getTime();
            this.footer = new Footer();
        },     
        start: function(){
            this.render();
            this.show();
        },
        render: function(){                
            this.checkTempEvent();
            
            this.languagesselector = new LanguagesSelector();
            this.widgetconfiguration = new WidgetConfiguration();
            this.footer = new Footer();
            this.signin_fields = new SigninFieldsList();
            
            this.bindTextareaMaxChars();
            this.setCommnetsField();   
            
            $('#idTxaSignInUserComments').removeClass('clsDivBktDefaultInputError');
            $('#idTxaSignInUserCommentsError').hide();            
            
            $('#idBktDefaultSignInCommentsField').show();
            
            if(typeof oClientValues_248295.waitingListData !== 'undefined'){
                $('#idBktDefaultSignInCommentsField').hide();
            }
            
            this.showSubHeaderExtra();
        },      
        showSubHeaderExtra: function(){
            $('#idBktDefaultSignInContainer .clsDivBktSubHeaderExtra').show();
            $('#idBktDefau
... [truncated]
```

- Endpoint: GET https://www.citaconsular.es/js/widgets/default/views/signupfirstappointment.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/signupfirstappointment.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "810"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:44 GMT"
  },
  {
    "name": "etag",
    "value": "\"aad-61ac5b7d5a1f5-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:44 GMT"
  },
  {
    "name": "last-modified",
    "value": "Thu, 13 Jun 2024 13:45:55 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
define(['jquery', 'underscore', 'backbone', 'widgets/default/views/signup', 'widgets/utils', 'widgets/default/models/widgetconfiguration'],
function($, _, Backbone, SignUpContainer, Utils, WidgetConfiguration){
    var SignUpFirstAppointmentContainer = SignUpContainer.extend({
        initialize: function(){     
            this.widgetconfiguration = new WidgetConfiguration();
            this.checkFirstAppointment();
            
            SignUpFirstAppointmentContainer.__super__.initialize();
        },
        checkFirstAppointment: function(){
            if(typeof oClientValues_248295.widgetconfiguration.registration_type !== 'undefined' && parseInt(oClientValues_248295.widgetconfiguration.registration_type) === this.widgetconfiguration.iFirstAppointment){
                $('#idDivBktSignUpSubHeader').remove();
            }
        },
        handleSubmit: function(event){
            if(this.checkAndSetClientListenTo(event) === true){
                this.submit(event);
            }
        },
        submit: function(event){
            var that = this;
            
            var data = this.getDataToFetch(event);

            if(data === false){ return false; }
            
            this.client.url = Utils.get_server_url()+"signupfirstappointment/";

            if($('#idDivReCaptchaSignUp.clsBktReCaptchaSignUp').length){
                grecaptcha.ready(function(){
                    grecaptcha.execute('6LdqftIZAAAAADcngqKaM97DRGXV47ca0Xk8spwH', {action: 'submit'}).then(function(token){
                        data.gctoken = token;
                        
                        that.client.fetch({
                            data: data,
                            error: (function(){
                                that.showLoadDataError();
                            })
                        });
                    });
                });
            }
            else{
                if($('#idDivReCaptcha').length && this.bReCaptcha === false){
                    this.bReCaptcha = tru
... [truncated]
```

- Endpoint: GET https://www.citaconsular.es/js/widgets/default/views/signupsecondappointment.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/signupsecondappointment.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "390"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:44 GMT"
  },
  {
    "name": "etag",
    "value": "\"39a-5d89b4b92ddc0-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:44 GMT"
  },
  {
    "name": "last-modified",
    "value": "Tue, 22 Feb 2022 13:26:23 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
define(['jquery', 'underscore', 'backbone', 'widgets/default/views/signin', 'widgets/utils', 'widgets/default/models/widgetconfiguration'],
function($, _, Backbone, SignInContainer, Utils, WidgetConfiguration){
    var SignUpSecondAppointmentContainer = SignInContainer.extend({
        initialize: function(){     
            this.widgetconfiguration = new WidgetConfiguration();
            this.checkSecondAppointment();
            
            SignUpSecondAppointmentContainer.__super__.initialize();
        },
        checkSecondAppointment: function(){
            if(typeof oClientValues_248295.widgetconfiguration.registration_type !== 'undefined' && parseInt(oClientValues_248295.widgetconfiguration.registration_type) === this.widgetconfiguration.iSecondAppointment){
                $('#idDivBktSignInSubHeader').remove();
            }
        }
    });
    
    return SignUpSecondAppointmentContainer;
});
```

- Endpoint: GET https://citaconsular.es/js/widgets/default/views/datetimelist.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/datetimelist.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:45 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/widgets/default/views/datetimelist.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://citaconsular.es/js/widgets/default/views/datetimedatepicker.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/datetimedatepicker.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:45 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/widgets/default/views/datetimedatepicker.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://citaconsular.es/js/widgets/default/views/datetimeslidedate.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/datetimeslidedate.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:45 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/widgets/default/views/datetimeslidedate.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://citaconsular.es/js/widgets/default/collections/slots.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/collections/slots.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:45 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/widgets/default/collections/slots.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://citaconsular.es/js/widgets/default/views/signupfieldslist.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/signupfieldslist.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:45 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/widgets/default/views/signupfieldslist.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://citaconsular.es/js/widgets/default/models/field.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/models/field.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:45 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/widgets/default/models/field.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://citaconsular.es/js/widgets/default/models/event.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/models/event.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:46 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/widgets/default/models/event.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://citaconsular.es/js/widgets/default/views/ticket.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/ticket.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:46 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/widgets/default/views/ticket.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://citaconsular.es/js/widgets/default/collections/services.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/collections/services.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:46 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/widgets/default/collections/services.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://citaconsular.es/js/widgets/default/views/signinfieldslist.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/signinfieldslist.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:46 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/widgets/default/views/signinfieldslist.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://www.citaconsular.es/js/widgets/default/views/creditcardcapture.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/creditcardcapture.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "4863"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:44 GMT"
  },
  {
    "name": "etag",
    "value": "\"732b-6081316560acb-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:44 GMT"
  },
  {
    "name": "last-modified",
    "value": "Thu, 19 Oct 2023 15:05:32 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
define(['jquery', 'underscore', 'backbone', 'widgets/default/views/creditcardcapturestr', 'widgets/default/collections/services', 'widgets/utils', 'widgets/default/views/breadcrumb', 'widgets/default/models/redsys','widgets/default/models/niubiz'],
function($, _, Backbone, CreditCardCaptureStr, Services, Utils, BreadCrumb, Redsys, Niubiz){
    var CreditCardCapture = Backbone.View.extend({
        el: $("#idBktDefaultCCCStrContainer"),
        initialize: function(){
            if(!this.isWaitingList()){ return; }
            
            this.identifier = new Date().getTime();
            this.oServices = new Services();
            
            this.oCreditCardCapture = new CreditCardCaptureStr();
            this.oRedsys = new Redsys();
            this.oNiubiz = new Niubiz();
            
            this.bStripeActive = oClientValues_248295.widgetconfiguration.payments_gateways.stripe;
            this.bPaypalActive = oClientValues_248295.widgetconfiguration.payments_gateways.paypal;
            this.bRedsysActive = oClientValues_248295.widgetconfiguration.payments_gateways.redsys;
            this.bNiubizActive = oClientValues_248295.widgetconfiguration.payments_gateways.niubiz;

            this.iCountActivegateways = 0;
            
            if(this.bStripeActive === true){ this.iCountActivegateways++; }
            if(this.bPaypalActive === true){ this.iCountActivegateways++; }
            if(this.bRedsysActive === true){ this.iCountActivegateways++; }
            if(this.bNiubizActive === true){ this.iCountActivegateways++; }
            
            if(!this.arePaymentServices()){ return; }
        },
        events: {
            'click #idBktDefaultCCCBackButton': 'backButton',
            'click #idDivBktPaymentsGatewaysStripe': 'usePaymentGatewayStripe',
            'click #idDivBktPaymentsGatewaysPaypal': 'usePaymentGatewayPaypal',
            'click #idDivBktPaymentsGatewaysRedsys': 'usePaymentGatewayRedsys',
            'click #idDivBktPaymentsGatewaysNiubiz': 'usePaymentGatewayNiubiz',
    
... [truncated]
```

- Endpoint: GET https://www.citaconsular.es/js/widgets/default/views/accountlogin.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/accountlogin.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "1576"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:44 GMT"
  },
  {
    "name": "etag",
    "value": "\"19dc-5f02f200def92-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:44 GMT"
  },
  {
    "name": "last-modified",
    "value": "Mon, 19 Dec 2022 14:27:55 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
define(['jquery', 'underscore', 'backbone', 'widgets/default/views/accountloginfieldslist', 'widgets/default/models/client', 'widgets/utils', 'widgets/default/views/footer'],
function($, _, Backbone, AccountLoginFieldsList, Client, Utils, Footer){
    var AccountLoginContainer = Backbone.View.extend({
        el: $("#idBktDefaultAccountLoginContainer"),     
        events: {
            'click #idBktDefaultAccountLoginConfirmButton': 'handleSubmit'
        },
        initialize: function(){
            this.identifier = new Date().getTime();
            this.footer = new Footer();
        },   
        start: function(){
            $('.clsBktWidgetDefaultLoading').remove();
            $('#idBktWidgetDefaultBodyContainer').show();    
            $('.clsDivBktWidgetDefaultLoadingContainer').remove();
            
            this.showLoading();
            this.loadFields();
        },
        loadFields: function(){
            if(this.fields_list){ delete this.fields_list; }
            this.fields_list = new AccountLoginFieldsList({parentView: this});
            this.fields_list.start();
            
            this.listenTo(this.fields_list.fields, "reset", function(){
                if(this.fields_list.loaded){
                    this.render();
                    this.show();
                }

                this.hideLoading();
            });
        },        
        render: function(){
            
        },        
        show: function(){
            $(".clsDivBktWidgetDefaultLoadingContainer").hide();
            $(".clsBktDefaultErrorContainer").hide();
            $(".clsBktDefaultWindow").hide();  
            $(".clsDivBktDefaultFieldError").hide();
            
            $("#idDivBktAccountLoginContent").show();
            $("#idDivBktAccountLoginContainer").show();
            this.$el.show();
        },
        showLoading: function(){
            $('#idBktWidgetDefaultBodyContainer').prepend('<div class="clsDivBktWidgetDefaultLoadingContainer clsDivBktLoadingContainer'+ this.iden
... [truncated]
```

- Endpoint: GET https://www.citaconsular.es/js/widgets/default/views/recoverpassword.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/recoverpassword.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "1569"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:44 GMT"
  },
  {
    "name": "etag",
    "value": "\"1ed7-5d89b4b92ddc0-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:44 GMT"
  },
  {
    "name": "last-modified",
    "value": "Tue, 22 Feb 2022 13:26:23 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
define(['jquery', 'underscore', 'backbone', 'widgets/default/models/client', 'widgets/utils'],
function($, _, Backbone, Client, Utils){
    var RecoverPasswordContainer = Backbone.View.extend({
        el: $("#idBktDefaultRecoverPasswordContainer"), 
        events: {
            'click #idBktDefaultRecoverPasswordConfirmButton': 'handleSubmit',
            'click input': 'hideFieldError',
            'focus input': 'hideFieldError',
            'change #idSelBktRecoverPasswordField': 'changeRecoverField'
        },
        initialize: function(){
            this.identifier = new Date().getTime();
        },   
        start: function(){
            $('.clsBktWidgetDefaultLoading').remove();
            $('#idBktWidgetDefaultBodyContainer').show();    
            $('.clsDivBktWidgetDefaultLoadingContainer').remove();
            
            this.render();
            this.show();
        },
        render: function(){
            this.emptyFields();
            this.changeRecoverField();
        },        
        show: function(){
            $(".clsDivBktWidgetDefaultLoadingContainer").hide();
            $(".clsBktDefaultErrorContainer").hide();
            $(".clsBktDefaultOkContainer").hide();
            $(".clsBktDefaultWindow").hide();  
            
            $("#idDivBktRecoverPasswordContent").show();
            $("#idDivBktRecoverPasswordContainer").show();
            this.$el.show();
        },
        showLoading: function(){
            $('#idBktWidgetDefaultBodyContainer').prepend('<div class="clsDivBktWidgetDefaultLoadingContainer clsDivBktLoadingContainer'+ this.identifier +'"><div class="clsDivBktWidgetDefaultLoading"></div></div>');
        },
        hideLoading: function(){
            $('.clsDivBktLoadingContainer' + this.identifier).remove();
        },
        handleSubmit: function(event){
            this.showLoading();
            
            event.preventDefault();
            event.stopPropagation();  
            
            this.client = new Client();
            var clien
... [truncated]
```

- Endpoint: GET https://www.citaconsular.es/js/widgets/default/views/history.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/history.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "702"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:44 GMT"
  },
  {
    "name": "etag",
    "value": "\"944-5d89b4b92ddc0-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:44 GMT"
  },
  {
    "name": "last-modified",
    "value": "Tue, 22 Feb 2022 13:26:23 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
define(['jquery', 'underscore', 'backbone', 'widgets/default/views/historyappointmentslist'],
function($, _, Backbone, HistoryAppointmentsList){
    var HistoryContainer = Backbone.View.extend({
        events: {            
            'click #idDivBktAccountHistorySubHeaderChangePassword': 'showChangePassword'
        },
        el: $("#idBktDefaultAccountHistoryContainer"),    
        initialize: function(){
            this.identifier = new Date().getTime();
        },   
        start: function(){
            $('.clsBktWidgetDefaultLoading').remove();
            $('#idBktWidgetDefaultBodyContainer').show();    
            $('.clsDivBktWidgetDefaultLoadingContainer').remove();
            
            this.showLoading();
            this.loadAppointments();
        },
        loadAppointments: function(){
            if(this.appointments_list){ 
                $(this.appointments_list.el).off();
                delete this.appointments_list; 
            }                        
            this.appointments_list = new HistoryAppointmentsList({parentView: this});
            this.appointments_list.start();
            
            this.listenTo(this.appointments_list.events, "reset", function(){
                if(this.appointments_list.loaded){
                    this.render();
                    this.show();
                }

                this.hideLoading();
            });
        },        
        render: function(){
            
        },        
        showChangePassword: function() {
            Backbone.history.navigate('changepassword', {trigger: true, replace: true});     
        },
        show: function(){
            $(".clsDivBktWidgetDefaultLoadingContainer").hide();
            $(".clsBktDefaultErrorContainer").hide();
            $(".clsBktDefaultWindow").hide();  
            
            $(".clsDivBktSubHeaderExtra").show();  
            
            this.$el.show();
        },
        showLoading: function(){
            $('#idBktWidgetDefaultBodyContainer').prepend('<div c
... [truncated]
```

- Endpoint: GET https://www.citaconsular.es/js/widgets/default/views/changepassword.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/changepassword.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "1240"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:44 GMT"
  },
  {
    "name": "etag",
    "value": "\"137b-6073ab7930195-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:44 GMT"
  },
  {
    "name": "last-modified",
    "value": "Sun, 08 Oct 2023 20:57:09 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
define(['jquery', 'underscore', 'backbone',  'widgets/default/models/client', 'widgets/utils'],
function($, _, Backbone, Client, Utils){
    var ChangePassword = Backbone.View.extend({
        el: $("#idBktDefaultChangePasswordContainer"),
        events: {
            'click #idBktChangePasswordSubmit': 'handleSubmit',
            'click #idDivBktAccountSubHeaderChangePasswordEvents': 'showHistory'
        },
        initialize: function() {
            this.identifier = new Date().getTime();
        },
        render: function() {
    
        },
        show: function() {                      
           this.$el.show();
        },
        showHistory: function() {
           Backbone.history.navigate('history', {trigger: true, replace: true});     
        },
        start: function() {     
            $('.clsBktWidgetDefaultLoading').remove();
            $('#idBktWidgetDefaultBodyContainer').show();    
            $('.clsDivBktWidgetDefaultLoadingContainer').remove();
            
            this.hideMessages();
            $(".clsBktDefaultWindow").hide();  
            this.emptyFields();
            this.show();
        },
        emptyFields: function() {
            this.$('#idIptBktChangePasswordNew').val('');
            this.$('#idIptBktChangePasswordNew').removeClass('clsDivBktDefaultInputError');
            this.$('#idIptBktChangePasswordRepeat').val('');
            this.$('#idIptBktChangePasswordRepeat').removeClass('clsDivBktDefaultInputError');
        },
        showLoading: function(){
            $('#idBktWidgetDefaultBodyContainer').prepend('<div class="clsDivBktWidgetDefaultLoadingContainer clsDivBktLoadingContainer'+ this.identifier +'"><div class="clsDivBktWidgetDefaultLoading"></div></div>');
        },
        hideLoading: function(){
            $('.clsDivBktLoadingContainer' + this.identifier).remove();
        },
        handleSubmit: function(event) {
            this.hideMessages();
            this.showLoading();
            
            event.preventDefault();
            e
... [truncated]
```

- Endpoint: GET https://www.citaconsular.es/js/widgets/default/views/signedin.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/signedin.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "1809"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:44 GMT"
  },
  {
    "name": "etag",
    "value": "\"1da1-5de44e5236dc0-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:44 GMT"
  },
  {
    "name": "last-modified",
    "value": "Thu, 05 May 2022 14:52:47 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
define(['jquery', 'underscore', 'backbone', 'widgets/default/models/client', 'widgets/utils', 'widgets/default/views/signin'],
function($, _, Backbone, Client, Utils , SignInContainer){
    var SignedInContainer = SignInContainer.extend({   
        render: function(){                
            SignedInContainer.__super__.render();
            this.removeElements();
            
            this.manageShowAttachFile();

            if(typeof oClientValues_248295.waitingListData !== "undefined"){
                $('#idBktDefaultSignInConfirmButton').click();
            }
        },      
        manageShowAttachFile: function(){
            if($("#idIptBktSignedInAttachFile").length > 0){
                $('#idBktDefaultSignInContainer #idBktDefaultSignedInAttachFileContainer').show();
                $('#idBktDefaultSignInContainer #idIptBktSignedInAttachFile').val('');

                $('#idBktDefaultSignInContainer #idIptBktSignedInAttachFile').removeClass('clsDivBktDefaultInputError');
                $('#idDivBktFieldErrorattach').hide();                
            }
        },
        removeElements: function(){
            $('#idBktDefaultSignInContainer .clsDivBktSubHeaderExtra').hide();
            $('#idBktDefaultSignInContainer #idBktDefaultSignInClientFields').hide();
            $('#idBktDefaultSignInContainer #idBktDefaultSignInRecoveryPasswordContainer').hide();
        },
        getFieldsData: function(){
            this.client = new Client({EventFields: this.signin_fields.EventFields});            
            var clientFormData = {};

            var that = this;

            _.each(this.signin_fields.EventFields, function(field){
                clientFormData[field.input_text] = that.getInputValue(field);
            });
            
            if($("#idIptBktSignInvoucher").is(':visible')){
                clientFormData['voucher'] = $.trim($("#idIptBktSignInvoucher").val());
            }
            
            clientFormData['comments'] = th
... [truncated]
```

- Endpoint: GET https://www.google.com/recaptcha/api2/bframe?hl=es&v=Jv8jlA-BQE5JD6rA-h_iqNH2&k=6Le7usYfAAAAAHX3Bv0eWXNtEf9D5aV4BtPR2SoQ&bft=0dAFcWeA4_RXCySFaynJQSZ68RvbVMUSs9gAfiz59Jn0pALZINHCVMaVwijaQ7rBCi_ZYVd090iYNnEDnK-9qzYGKvLQ6BS3b2gA
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.google.com"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/recaptcha/api2/bframe?hl=es&v=Jv8jlA-BQE5JD6rA-h_iqNH2&k=6Le7usYfAAAAAHX3Bv0eWXNtEf9D5aV4BtPR2SoQ&bft=0dAFcWeA4_RXCySFaynJQSZ68RvbVMUSs9gAfiz59Jn0pALZINHCVMaVwijaQ7rBCi_ZYVd090iYNnEDnK-9qzYGKvLQ6BS3b2gA"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "priority",
    "value": "u=0, i"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "iframe"
  },
  {
    "name": "sec-fetch-mode",
    "value": "navigate"
  },
  {
    "name": "sec-fetch-site",
    "value": "cross-site"
  },
  {
    "name": "sec-fetch-storage-access",
    "value": "active"
  },
  {
    "name": "sec-fetch-user",
    "value": "?1"
  },
  {
    "name": "upgrade-insecure-requests",
    "value": "1"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "alt-svc",
    "value": "h3=\":443\"; ma=2592000,h3-29=\":443\"; ma=2592000"
  },
  {
    "name": "cache-control",
    "value": "no-cache, no-store, max-age=0, must-revalidate"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-security-policy",
    "value": "script-src 'report-sample' 'nonce-jfpkXrkALniCXufH8yMZtw' 'unsafe-inline' 'strict-dynamic' https: http: 'unsafe-eval';object-src 'none';base-uri 'self';report-uri https://csp.withgoogle.com/csp/recaptcha/1"
  },
  {
    "name": "content-type",
    "value": "text/html; charset=utf-8"
  },
  {
    "name": "cross-origin-embedder-policy",
    "value": "require-corp"
  },
  {
    "name": "cross-origin-opener-policy-report-only",
    "value": "same-origin; report-to=\"coop_38fac9d5b82543fc4729580d18ff2d3d\""
  },
  {
    "name": "cross-origin-resource-policy",
    "value": "cross-origin"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:45 GMT"
  },
  {
    "name": "expires",
    "value": "Mon, 01 Jan 1990 00:00:00 GMT"
  },
  {
    "name": "pragma",
    "value": "no-cache"
  },
  {
    "name": "report-to",
    "value": "{\"group\":\"recaptcha\",\"max_age\":2592000,\"endpoints\":[{\"url\":\"https://csp.withgoogle.com/csp/report-to/recaptcha\"}]}"
  },
  {
    "name": "report-to",
    "value": "{\"group\":\"coop_38fac9d5b82543fc4729580d18ff2d3d\",\"max_age\":2592000,\"endpoints\":[{\"url\":\"https://csp.withgoogle.com/csp/report-to/38fac9d5b82543fc4729580d18ff2d3d\"}]}"
  },
  {
    "name": "server",
    "value": "ESF"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-xss-protection",
    "value": "0"
  }
]
```
  - Response body (trunc):

```json
<!DOCTYPE HTML><html dir="ltr" lang="es"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">

<title>reCAPTCHA</title>
<style type="text/css">
/* cyrillic-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url(//fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu72xKOzY.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url(//fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu5mxKOzY.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url(//fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu7mxKOzY.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url(//fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4WxKOzY.woff2) format('woff2');
  unicode-range: U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url(//fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu7WxKOzY.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url(//fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu7GxKOzY.woff2) format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
... [truncated]
```

- Endpoint: GET https://www.google.com/recaptcha/api2/bframe?hl=es&v=Jv8jlA-BQE5JD6rA-h_iqNH2&k=6Le7usYfAAAAAHX3Bv0eWXNtEf9D5aV4BtPR2SoQ&bft=0dAFcWeA4LAUhmy65P7_Tx0H4fWQHovqEo1HEXcosVtEl2sXiF6Vmk0KSg3ZjHfuYvWMxTuWiphVvOqIjaeRe6UcEsD4jKb2Seqg
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.google.com"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/recaptcha/api2/bframe?hl=es&v=Jv8jlA-BQE5JD6rA-h_iqNH2&k=6Le7usYfAAAAAHX3Bv0eWXNtEf9D5aV4BtPR2SoQ&bft=0dAFcWeA4LAUhmy65P7_Tx0H4fWQHovqEo1HEXcosVtEl2sXiF6Vmk0KSg3ZjHfuYvWMxTuWiphVvOqIjaeRe6UcEsD4jKb2Seqg"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "priority",
    "value": "u=0, i"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "iframe"
  },
  {
    "name": "sec-fetch-mode",
    "value": "navigate"
  },
  {
    "name": "sec-fetch-site",
    "value": "cross-site"
  },
  {
    "name": "sec-fetch-storage-access",
    "value": "active"
  },
  {
    "name": "sec-fetch-user",
    "value": "?1"
  },
  {
    "name": "upgrade-insecure-requests",
    "value": "1"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "alt-svc",
    "value": "h3=\":443\"; ma=2592000,h3-29=\":443\"; ma=2592000"
  },
  {
    "name": "cache-control",
    "value": "no-cache, no-store, max-age=0, must-revalidate"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-security-policy",
    "value": "script-src 'report-sample' 'nonce-JAqn5osWLR9adkFEQ0I4aQ' 'unsafe-inline' 'strict-dynamic' https: http: 'unsafe-eval';object-src 'none';base-uri 'self';report-uri https://csp.withgoogle.com/csp/recaptcha/1"
  },
  {
    "name": "content-type",
    "value": "text/html; charset=utf-8"
  },
  {
    "name": "cross-origin-embedder-policy",
    "value": "require-corp"
  },
  {
    "name": "cross-origin-opener-policy-report-only",
    "value": "same-origin; report-to=\"coop_38fac9d5b82543fc4729580d18ff2d3d\""
  },
  {
    "name": "cross-origin-resource-policy",
    "value": "cross-origin"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:45 GMT"
  },
  {
    "name": "expires",
    "value": "Mon, 01 Jan 1990 00:00:00 GMT"
  },
  {
    "name": "pragma",
    "value": "no-cache"
  },
  {
    "name": "report-to",
    "value": "{\"group\":\"recaptcha\",\"max_age\":2592000,\"endpoints\":[{\"url\":\"https://csp.withgoogle.com/csp/report-to/recaptcha\"}]}"
  },
  {
    "name": "report-to",
    "value": "{\"group\":\"coop_38fac9d5b82543fc4729580d18ff2d3d\",\"max_age\":2592000,\"endpoints\":[{\"url\":\"https://csp.withgoogle.com/csp/report-to/38fac9d5b82543fc4729580d18ff2d3d\"}]}"
  },
  {
    "name": "server",
    "value": "ESF"
  },
  {
    "name": "x-content-type-options",
    "value": "nosniff"
  },
  {
    "name": "x-xss-protection",
    "value": "0"
  }
]
```
  - Response body (trunc):

```json
<!DOCTYPE HTML><html dir="ltr" lang="es"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">

<title>reCAPTCHA</title>
<style type="text/css">
/* cyrillic-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url(//fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu72xKOzY.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url(//fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu5mxKOzY.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url(//fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu7mxKOzY.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url(//fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4WxKOzY.woff2) format('woff2');
  unicode-range: U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url(//fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu7WxKOzY.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url(//fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu7GxKOzY.woff2) format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
... [truncated]
```

- Endpoint: GET https://citaconsular.es/js/widgets/default/views/accountloginfieldslist.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/accountloginfieldslist.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:46 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/widgets/default/views/accountloginfieldslist.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://citaconsular.es/js/widgets/default/views/creditcardcapturestr.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/creditcardcapturestr.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:46 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/widgets/default/views/creditcardcapturestr.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://citaconsular.es/js/widgets/default/models/redsys.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/models/redsys.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:46 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/widgets/default/models/redsys.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://citaconsular.es/js/widgets/default/models/niubiz.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/models/niubiz.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:46 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/widgets/default/models/niubiz.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://citaconsular.es/js/widgets/default/views/historyappointmentslist.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/historyappointmentslist.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:46 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/widgets/default/views/historyappointmentslist.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://www.citaconsular.es/js/widgets/default/views/confirmclient.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/confirmclient.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "1199"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:45 GMT"
  },
  {
    "name": "etag",
    "value": "\"1447-5d89b4b92ddc0-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:45 GMT"
  },
  {
    "name": "last-modified",
    "value": "Tue, 22 Feb 2022 13:26:23 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
define(['jquery', 'underscore', 'backbone', 'widgets/default/views/breadcrumb', 'widgets/default/models/validate'],
function($, _, Backbone, BreadCrumb, ValidateModel){
    var ConfirmClientView = Backbone.View.extend({
        el: $("#idBktDefaultConfirmClientContainer"), 
        initialize: function(){
            this.identifier = new Date().getTime();
            
            this.validateModel = new ValidateModel();

//            if(!this.isValidateRequired()){ return; }
        },
        events: {
            'click #idBktDefaultConfirmClientBackButton': 'backButton',
            'keyup #idIptBktValidateCode': 'onlynumbers',
            'click #idDivBktConfirmClientValidateButton .clsDivContinueButton': 'validate'
        },
        start: function(){           
            if(!this.isValidateRequired()){ return; }
        },
        render: function(){
            $(".clsBktDefaultWindow").hide();       
            $('#idDivBktValidateCodeError').hide();
            $('#idDivBktConfirmClientInfoSms').hide();
            $('#idDivBktConfirmClientInfoEmail').hide();
            
            $('#idIptBktValidateCode').val('');
            
            var breadCrumb = new BreadCrumb();
            breadCrumb.show('#idBktDefaultConfirmClientContainer .clsDivSubHeaderBreadcrumbsText');
            
                $('#idDivBktConfirmClientInfoSms').show();
            
            if(typeof oClientValues_248295.clientData.attributes.validateBy !== 'undefined' && oClientValues_248295.clientData.attributes.validateBy === 0){
                $('#idDivBktConfirmClientInfoSms').hide();
                $('#idDivBktConfirmClientInfoEmail').show();
            }

            if(typeof oClientValues_248295.clientData.attributes.validateBy !== 'undefined' && oClientValues_248295.clientData.attributes.validateBy === 1){
                $('#idDivBktConfirmClientInfoEmail').hide();                    
                $('#idDivBktConfirmClientInfoSms').show();
            }
        },
        show: function(){
          
... [truncated]
```

- Endpoint: GET https://www.citaconsular.es/js/widgets/default/views/redsys.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/redsys.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "813"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:45 GMT"
  },
  {
    "name": "etag",
    "value": "\"da0-5d89b4b92ddc0-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:45 GMT"
  },
  {
    "name": "last-modified",
    "value": "Tue, 22 Feb 2022 13:26:23 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
define(['jquery', 'underscore', 'backbone', 'widgets/utils', 'widgets/default/models/redsys'],
function($, _, Backbone, Utils, Redsys){
    var RedsysContainer = Backbone.View.extend({     
        el: $("#idBktDefaultRedsysContainer"),
        initialize: function(){
            this.identifier = new Date().getTime();
            this.oRedsys = new Redsys();
        },                
        show: function(){
          
        },
        ko: function(){
            $(".clsBktDefaultErrorContainer").hide();
            $(".clsBktDefaultWindow").hide(); 
            
            $('#idDivBktDefaultRedsysErrorContainer').show();
            this.$el.show();
            
            $('.clsBktWidgetDefaultLoading').remove();
            $('#idBktWidgetDefaultBodyContainer').show();    
            $('.clsDivBktWidgetDefaultLoadingContainer').remove();
        },
        ok: function(p_sToken){
            $(".clsBktDefaultErrorContainer").hide();
            $(".clsBktDefaultWindow").hide(); 
            
            $('#idDivBktDefaultRedsysOkContainer').show();
            this.$el.show();
            
            $('.clsBktWidgetDefaultLoading').remove();
            $('#idBktWidgetDefaultBodyContainer').show();    
            $('.clsDivBktWidgetDefaultLoadingContainer').remove();            
            
            var that = this;
            
            this.oRedsys.executed();
            this.listenTo(this.oRedsys, "change", function(response){
                if(typeof this.oRedsys.attributes.clientData !== 'undefined'){ oClientValues_248295.clientData = this.oRedsys.attributes.clientData; }
                if(typeof this.oRedsys.attributes.priceData !== 'undefined'){ oClientValues_248295.priceData = this.oRedsys.attributes.priceData; }
                if(typeof this.oRedsys.attributes.selectedAgendas !== 'undefined'){ oClientValues_248295.selectedAgendas = this.oRedsys.attributes.selectedAgendas; }
                if(typeof this.oRedsys.attributes.selectedDate !== 'undefined'){ oClientValues_248295.se
... [truncated]
```

- Endpoint: GET https://www.citaconsular.es/js/widgets/default/views/waitinglistsummary.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/waitinglistsummary.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "1038"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:45 GMT"
  },
  {
    "name": "etag",
    "value": "\"fec-5d89b4b92ddc0-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:45 GMT"
  },
  {
    "name": "last-modified",
    "value": "Tue, 22 Feb 2022 13:26:23 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
define(['jquery', 'underscore', 'backbone', 'widgets/default/models/waitinglist', 'widgets/utils', 'widgets/default/views/ticket', 
    'widgets/default/models/widgetlabel', 'widgets/default/views/languages', 'widgets/default/models/widgetconfiguration', 'widgets/default/collections/services',
    'widgets/default/views/footer'],
function($, _, Backbone, WaitingList, Utils, TicketView, WidgetLabel, LanguagesSelector, WidgetConfiguration, Services, Footer){
    var WaitingListSummaryContainer = Backbone.View.extend({  
        el: $("#idBktDefaultWaitingListSummaryContainer"),
        initialize: function(){
//            this.footer = new Footer();
            this.render();
        },
        events: {
            'click #idDivBktWaitingListSummaryBackButton': 'goToBegin'
        },
        start: function(){
            $("#idDivBktDefaultWaitingListSummaryErrorContainer").hide();
            $("#idDivBktWaitingListSummaryContent").hide();
                    
            this.createWaitingList();
        },
        goToBegin: function(){
            this.resetData();
            Backbone.history.navigate('services', {trigger: true, replace: true});
        },       
        showLoading: function(p_iIdentifier){
            $('#idBktWidgetDefaultBodyContainer').prepend('<div class="clsDivBktWidgetDefaultLoadingContainer clsDivBktLoadingContainer'+ p_iIdentifier +'"><div class="clsDivBktWidgetDefaultLoading"></div></div>');
        },
        hideLoading: function(p_iIdentifier){
            $('.clsDivBktLoadingContainer' + p_iIdentifier).remove();
        },
        resetData: function(){
            delete oClientValues_248295.clientData;
            delete oClientValues_248295.selectedAgendas;
            delete oClientValues_248295.selectedDate;
            delete oClientValues_248295.selectedServices;
            delete oClientValues_248295.selectedExtras;
            delete oClientValues_248295.selectedTime;
            
            if(typeof oClientValues_248295.waitingListData !== 'undefined'){
         
... [truncated]
```

- Endpoint: GET https://www.citaconsular.es/js/widgets/default/models/client.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/models/client.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "3919"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:45 GMT"
  },
  {
    "name": "etag",
    "value": "\"4734-5d89b4b92ddc0-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:45 GMT"
  },
  {
    "name": "last-modified",
    "value": "Tue, 22 Feb 2022 13:26:23 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
define(['jquery', 'underscore', 'backbone', 'widgets/utils', 'widgets/default/models/field', 'widgets/default/models/widgetconfiguration'], 
function ($, _, Backbone, Utils, Field, WidgetConfiguration){
    var Client = Backbone.Model.extend({
        url: Utils.get_server_url(),	
        initialize:function(attributes){
            this.field = new Field();
            
            if(typeof attributes !== 'undefined'){
                this.ClientFields = attributes.ClientFields;        
                this.EventFields = attributes.EventFields;
            }
            
            this.widgetconfiguration = new WidgetConfiguration();
            
            this.url += "signup/";	              
        },
        validate: function(attrs, options){            
            this.someErrors = [];
            this.attrs = attrs;  
            
            if(options && options.screen && options.screen === 'signin'){
                this.checkSignInFields();  
                if(this.someErrors.length > 0){ return this.someErrors; }  
                return;
            }
            
            if(options && options.screen && options.screen === 'signedin'){
                this.checkSignedInFields();  
                if(this.someErrors.length > 0){ return this.someErrors; }  
                return;
            }
            
            if(options && options.screen && options.screen === 'recoverpassword'){
                this.checkRecoverPassswordFields();  
                if(this.someErrors.length > 0){ return this.someErrors; }  
                return;
            }
            
            if(options && options.screen && options.screen === 'accountlogin'){
                this.checkAccountLoginFields();  
                if(this.someErrors.length > 0){ return this.someErrors; }  
                return;
            }
            
            if(options && options.screen && options.screen === 'changepassword'){
                this.checkChangePasswordFields();  
                if(this.someErrors.length 
... [truncated]
```

- Endpoint: GET https://www.citaconsular.es/js/widgets/default/views/agendaslist.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/agendaslist.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "1898"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:45 GMT"
  },
  {
    "name": "etag",
    "value": "\"203d-6073ab5ba74ed-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:45 GMT"
  },
  {
    "name": "last-modified",
    "value": "Sun, 08 Oct 2023 20:56:38 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
define(['jquery', 'underscore', 'backbone', 'widgets/default/collections/agendas', 'widgets/utils', 'widgets/default/models/widgetconfiguration'],
function($, _, Backbone, Agendas, Utils, WidgetConfiguration) {
    var AgendasList = Backbone.View.extend({
        el: $("#idListAgendas"), 
        template: _.template($("#idTemSelectAgendas").html()),
        loaded: true,
        initialize: function(options){  
            this.parentView = options.parentView;            
            this.identifier = new Date().getTime();
            this.oWidgetConfiguration = new WidgetConfiguration();
        },        
        start: function(){
            this.showLoading();  
            this.loadAgendas();
        },
        loadAgendas: function(){
            this.$el.empty(); 
            
            this.agendas = new Agendas();
            that = this;
            
            this.listenTo(this.agendas, "reset", function(){
                oClientValues_248295.someAgendas = that.agendas.models;
                
                this.doRender();
            });            
            
            var dataToSend = $.extend({}, bkt_init_widget);
            dataToSend.services = Utils.obtainObjectsIds(oClientValues_248295.selectedServices);
            dataToSend.selectedPeople = oClientValues_248295.selectedPeople;
            
            this.agendas.fetch({
                data: dataToSend,
                error: (function(){
                    that.showLoadDataError();
                })
            });
        },
        doRender: function(){
            if(this.checkEmptyAgendas() === true){ 
                this.showLoadDataError();
            }
            else if(this.checkSetSelected() === true){
                oClientValues_248295.backToAgendas = false;
            }
            else{
                oClientValues_248295.backToAgendas = true;
                this.render(); 
            }
        },
        render: function(){
            var sAgendasIds = "";
                
            for(var i = 0
... [truncated]
```

- Endpoint: GET https://www.citaconsular.es/js/widgets/default/views/breadcrumb.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/breadcrumb.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "887"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:45 GMT"
  },
  {
    "name": "etag",
    "value": "\"d88-6073ab6a27b5d-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:45 GMT"
  },
  {
    "name": "last-modified",
    "value": "Sun, 08 Oct 2023 20:56:53 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
define(['jquery', 'underscore', 'backbone', 'widgets/utils'],
function($, _, Backbone, Utils){
     var BreadCrumbContainer = Backbone.View.extend({                
        initialize: function(){
            
        },                
        show: function(p_sSelector){
            var sBreadCrumb = "";            
            
            if(oClientValues_248295.selectedDate && (p_sSelector.indexOf('idBktDefaultSignUpContainer') >= 0 || p_sSelector.indexOf('idBktDefaultSignInContainer') >= 0 || 
                    p_sSelector.indexOf('idBktDefaultCCCStrContainer') >= 0 || p_sSelector.indexOf('idBktDefaultConfirmClientContainer') >= 0)){
                var sFormatDate = Utils.formatDate(oClientValues_248295.selectedDate, bkt_init_widget.lang);
                
                var time = oClientValues_248295.selectedTime + "h";
                        
                if(typeof oClientValues_248295.widgetconfiguration.am_pm_format !== 'undefined' && oClientValues_248295.widgetconfiguration.am_pm_format === true){
                    time = Utils.timeToAmPm(time);
                }
                
                sBreadCrumb += sFormatDate + "<span class='clsDivBreadcrumbTime'> - " + time + "</span>";
                
                sBreadCrumb += " · " ;
            }
            
            if(oClientValues_248295.selectedAgendas && oClientValues_248295.selectedAgendas.length === 1 && p_sSelector.indexOf('idBktDefaultAgendasContainer') < 0){
                for(var i = 0; i < oClientValues_248295.selectedAgendas.length; i++){
                    var agendaName = oClientValues_248295.selectedAgendas[i].name.replace(/<br\s*[\/]?>/gi, "");
                    
                    sBreadCrumb += agendaName + ", ";
                }

                sBreadCrumb = sBreadCrumb.substr(0, (sBreadCrumb.length - 2));
                
                sBreadCrumb += " · ";
            }
            
            if(oClientValues_248295.selectedServices && oClientValues_248295.selectedServices.length > 0 ){
            
... [truncated]
```

- Endpoint: GET https://citaconsular.es/js/widgets/default/models/validate.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/models/validate.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:46 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/widgets/default/models/validate.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://citaconsular.es/js/widgets/default/models/waitinglist.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/models/waitinglist.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:46 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/widgets/default/models/waitinglist.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://citaconsular.es/js/widgets/default/collections/agendas.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/collections/agendas.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:46 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/widgets/default/collections/agendas.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://www.citaconsular.es/js/widgets/default/views/languages.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/languages.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "348"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:45 GMT"
  },
  {
    "name": "etag",
    "value": "\"2aa-5d89b4b92ddc0-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:45 GMT"
  },
  {
    "name": "last-modified",
    "value": "Tue, 22 Feb 2022 13:26:23 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
define(['jquery', 'underscore', 'backbone'],
function($, _, Backbone){
     var LanguageContainer = Backbone.View.extend({     
        el: $("#idBktWidgetDefaultLanguageSel"),
        events: {
            'change': 'selectLanguage'        
        },
        initialize: function(){            
            this.$el.find("option[value='" + bkt_init_widget.lang + "']").attr("selected", "selected");
        },                        
        selectLanguage: function() {
            Backbone.history.navigate('selectlanguage/' + $('#idBktWidgetDefaultLanguageSel').val(), {trigger: true, replace: true});                
        }
     });
     
     return LanguageContainer;
});
```

- Endpoint: GET https://www.citaconsular.es/js/widgets/default/views/serviceslist.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/serviceslist.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "3269"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:45 GMT"
  },
  {
    "name": "etag",
    "value": "\"4a58-5f446a6148711-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:45 GMT"
  },
  {
    "name": "last-modified",
    "value": "Thu, 09 Feb 2023 16:12:34 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
define(['jquery', 'underscore', 'backbone', 'widgets/default/collections/services', 'widgets/default/views/extraservices'],
function($, _, Backbone, Services, ExtraServices){
    var ServicesList = Backbone.View.extend({
        el: $("#idListServices"),
        template: _.template($("#idTemSelectServices").html()),
        loaded: true,
        events: {
//            'click input[type="checkbox"]': 'refreshServices',
//            'click .clsBktServiceDataContainer': 'serviceClicked'
            'click a.clsBktServiceHasExtraService': 'showExtraServices'
        },
        initialize: function(options){
            this.parentView = options.parentView;            
            this.identifier = new Date().getTime();       
            this.extraservices = new ExtraServices(); 
        },
        start: function(){
            this.showLoading();  
            this.loadServices();
        },
        loadServices: function(){
            this.$el.empty();
            
            this.services = new Services();
            var that = this;
            
            this.listenTo(this.services, "reset", function(){
                if(typeof oClientValues_248295.someAllowAppointment !== 'undefined' && oClientValues_248295.someAllowAppointment === false){
                    this.hideLoading();
                    
                    return true;
                }
                
                this.filterVisibleServices(that.services.models);
                
                $('#idListServices input[type="checkbox"]').click(function(event){
                    that.refreshServices(event);
                }); 
            
                $('#idListServices .clsBktServiceDataContainer').click(function(event){
                    that.serviceClicked(event);
                });             
                
                $('#idListServices a').click(function(event){
                    if($(this).hasClass('clsBktServiceDisabled')){
                        event.preventD
... [truncated]
```

- Endpoint: GET https://www.citaconsular.es/js/widgets/default/views/servicespeople.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/servicespeople.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "415"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:45 GMT"
  },
  {
    "name": "etag",
    "value": "\"3dc-5d89b4b92ddc0-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:45 GMT"
  },
  {
    "name": "last-modified",
    "value": "Tue, 22 Feb 2022 13:26:23 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
define(['jquery', 'underscore', 'backbone', 'widgets/default/views/servicesselectpeople'],
function($, _, Backbone, SelectPeople){
    var ServicesPeople = Backbone.View.extend({
        el: $("#idDivBktNumberOfPeopleContainer"),
        initialize: function(options){
            this.services = options;
            this.render();           
        },       
        render: function(){            
            this.select_people = new SelectPeople(this.services);
            this.showOrHide();
        },
        showOrHide: function(){
            for(var i = 0 ; i < this.services.length ; i++){
                if(parseInt(this.services.models[i].get('multiservice')) > 0 && parseInt(this.services.models[i].get('multiservice_number')) > 1){
                    this.$el.show();
                    return "show";
                }               
            }
           
            this.$el.hide();
            return "hide";
        }
    });
  
    return ServicesPeople;
});
```

- Endpoint: GET https://www.citaconsular.es/js/widgets/default/views/servicesbuttoncontinue.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/servicesbuttoncontinue.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "395"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:45 GMT"
  },
  {
    "name": "etag",
    "value": "\"3d0-5f446a492a201-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:45 GMT"
  },
  {
    "name": "last-modified",
    "value": "Thu, 09 Feb 2023 16:12:09 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
define(['jquery', 'underscore', 'backbone'],
function($, _, Backbone){
    var ServicesButtonContinue = Backbone.View.extend({
        el: $("#idDivBktButtonContinueContainer"),
        initialize: function(services){           
            this.services = services;
            this.render();           
        },
        template: _.template($("#idTemContinue").html()),
        render: function(){
            this.showOrHide();
        },
        showOrHide: function(){
            this.$el.empty();
           
            for(var i = 0 ; i < this.services.length ; i++){
                if(parseInt(this.services.models[i].get('multiselect')) > 0){
                    this.$el.append(this.template());	
                    
                    this.$el.show();
                    return "show";
                }               
            }
        
            this.$el.hide();
            return "hide";
        }
    });
  
    return ServicesButtonContinue;
});
```

- Endpoint: GET https://www.citaconsular.es/js/widgets/default/models/service.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/models/service.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "182"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:45 GMT"
  },
  {
    "name": "etag",
    "value": "\"f2-5d89b4b92ddc0-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:45 GMT"
  },
  {
    "name": "last-modified",
    "value": "Tue, 22 Feb 2022 13:26:23 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
define(['jquery', 'underscore', 'backbone'], 
function ($, _, Backbone) {
    var Service = Backbone.Model.extend({	
	parse: function(response, options){
            this.attributes = response;            
	}
    });
    return Service;
});


```

- Endpoint: GET https://www.citaconsular.es/js/backbone/backbone.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/backbone/backbone.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "15584"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:45 GMT"
  },
  {
    "name": "etag",
    "value": "\"d9f4-5d89b4b92ddc0-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:45 GMT"
  },
  {
    "name": "last-modified",
    "value": "Tue, 22 Feb 2022 13:26:23 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
//     Backbone.js 0.9.10

//     (c) 2010-2012 Jeremy Ashkenas, DocumentCloud Inc.
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org

(function(){

  // Initial Setup
  // -------------

  // Save a reference to the global object (`window` in the browser, `exports`
  // on the server).
  var root = this;

  // Save the previous value of the `Backbone` variable, so that it can be
  // restored later on, if `noConflict` is used.
  var previousBackbone = root.Backbone;

  // Create a local reference to array methods.
  var array = [];
  var push = array.push;
  var slice = array.slice;
  var splice = array.splice;

  // The top-level namespace. All public Backbone classes and modules will
  // be attached to this. Exported for both CommonJS and the browser.
  var Backbone;
  if (typeof exports !== 'undefined') {
    Backbone = exports;
  } else {
    Backbone = root.Backbone = {};
  }

  // Current version of the library. Keep in sync with `package.json`.
  Backbone.VERSION = '0.9.10';

  // Require Underscore, if we're on the server, and it's not already present.
  var _ = root._;
  if (!_ && (typeof require !== 'undefined')) _ = require('underscore');

  // For Backbone's purposes, jQuery, Zepto, or Ender owns the `$` variable.
  Backbone.$ = root.jQuery || root.Zepto || root.ender;

  // Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
  // to its previous owner. Returns a reference to this Backbone object.
  Backbone.noConflict = function() {
    root.Backbone = previousBackbone;
    return this;
  };

  // Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option
  // will fake `"PUT"` and `"DELETE"` requests via the `_method` parameter and
  // set a `X-Http-Method-Override` header.
  Backbone.emulateHTTP = false;

  // Turn on `emulateJSON` to support legacy servers that can't deal with direct
  // `application/json` requests ... will encode the body as
  // `application/x-www-form-ur
... [truncated]
```

- Endpoint: GET https://citaconsular.es/js/widgets/default/views/extraservices.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/extraservices.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:46 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/widgets/default/views/extraservices.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://citaconsular.es/js/widgets/default/views/servicesselectpeople.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/servicesselectpeople.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:46 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/widgets/default/views/servicesselectpeople.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://www.citaconsular.es/js/widgets/default/views/datetimelist.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/datetimelist.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "4042"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:45 GMT"
  },
  {
    "name": "etag",
    "value": "\"5df3-61671e364c503-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:45 GMT"
  },
  {
    "name": "last-modified",
    "value": "Fri, 19 Apr 2024 12:04:22 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
define(['jquery', 'underscore', 'backbone', 'widgets/default/collections/slots', 'widgets/utils'],
function($, _, Backbone, Slots, Utils) {
    var DateTimeList = Backbone.View.extend({
        el: $("#idTimeListTable"), 
        template: _.template($("#idTemAvailableTime").html()),
        initialize: function(options){
            this.parentView = options.parentView;
            this.iMaxSlotsColumns = 5;
            this.iMinSlotsPerColumn = 10;
            this.iMaxAvailableDayMonthsIterations = 9;
            
//            if(bkt_init_widget.publickey === '28330379fc95acafd31ee9e8938c278ff'){
//                this.iMaxAvailableDayMonthsIterations = 2;
//            }            
            
            this.render();
        },
        events: {
            'click #idDivWaitingListSubmit': 'waitingListSubmit',
            'click #idSpanWaitingListOtherTime': 'showTimeList',
            'click .clsDivDatetimeSlotWaitingList': 'showWaitingList'
        },        
        render: function(){
            $('.clsDivBktWidgetDefaultLoadingContainer').remove();
            
            if($('#idDivBktWidgetTimezoneSelectorContainer').length > 0){
                $('#idDivBktWidgetTimezoneSelectorContainer').hide();
                
                if(typeof Intl == 'object' && typeof Intl.NumberFormat == 'function'){
                    $('#idDivBktWidgetTimezoneSelectorContainer').show();
                }
            }              
            
            this.firstLoad(this.parentView.selectedDate);
        },
        firstLoad: function(date){
            this.iAvaiblableDayMonthCount = 1;
            var identifier = new Date().getTime();
            var bAvailableDay = false;
            
            this.showLoading(identifier);
            
            this.parentView.slots = new Slots();
            
            var slotsAux = '';
            
            this.listenTo(this.parentView.slots, "reset", function(){
                if(this.iAvaiblableDayMon
... [truncated]
```

- Endpoint: GET https://www.citaconsular.es/js/widgets/default/views/datetimedatepicker.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/datetimedatepicker.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "3513"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:45 GMT"
  },
  {
    "name": "etag",
    "value": "\"3c47-5dc770265d3c0-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:45 GMT"
  },
  {
    "name": "last-modified",
    "value": "Tue, 12 Apr 2022 15:49:43 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
define(['jquery', 'underscore', 'backbone', 'widgets/utils', 'jqueryui'],
function($, _, Backbone, Utils){
   var DateTimeDatePicker = Backbone.View.extend({
        el: $("#idDivBktDatetimeDatepickerContainer"),
        initialize: function(options){
            this.parentView = options.parentView;
            this.monthAvailableDays = {};
        },
        events: {
            'click #idDivBktDatetimeDatePickerContent': 'showOrHideDatepicker',
            'click #idDivBktDatetimeDatePicker': 'stopPropagation',
            'click': 'stopPropagation'
        },
        drawDatepicker: function(){
            this.prepareMonthDaysSlots();
            
            var minDate = this.parentView.selectedDate;

//            if(typeof oClientValues_248295.widgetconfiguration.waiting_list !== 'undefined' && parseInt(oClientValues_248295.widgetconfiguration.waiting_list) === 1){
////                minDate = Utils.dateJsToPlain(new Date());
//
//                $.each(this.monthAvailableDays, function(key, value){
//                    var oCurrentDate = new Date();
//                    var oPlainDate = Utils.plainDateToObject(key);
//                    
//                    if(oPlainDate >= oCurrentDate){
//                        minDate = Utils.dateJsToPlain(oPlainDate);
//                        return false;
//                    }
//                });
//            }                      
            
            if($('#idDivBktDatetimeDatePicker').hasClass('hasDatepicker')){
                $('#idDivBktDatetimeDatePicker').datepicker('option', 'minDate', minDate);
                $('#idDivBktDatetimeDatePicker').datepicker('option', 'maxDate', oClientValues_248295.max);
                $('#idDivBktDatetimeDatePicker').datepicker('refresh');
            }
            else{
                var that = this;

                var monthNames = this.getMonthNames();            
                var dayNames = this.getDayNames();
                var dayNamesMin = this.getDa
... [truncated]
```

- Endpoint: GET https://www.citaconsular.es/js/widgets/default/views/datetimeslidedate.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/datetimeslidedate.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "834"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:45 GMT"
  },
  {
    "name": "etag",
    "value": "\"c5f-5d89b4b92ddc0-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:45 GMT"
  },
  {
    "name": "last-modified",
    "value": "Tue, 22 Feb 2022 13:26:23 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
define(['jquery', 'underscore', 'backbone', 'widgets/utils'],
function($, _, Backbone, Utils){
   var DateTimeSlideDate = Backbone.View.extend({
        el: $("#idDivBktDatetimeSelectedDateContainer"),
        initialize: function(options){
            this.parentView = options.parentView;
        },
        events: {
            'click #idDivBktDatetimeSelectedDateLeft': 'slideDateLeft',
            'click #idDivBktDatetimeSelectedDateRight': 'slideDateRight'
        },
        slideDateLeft: function(){
            var prevDate = Utils.plainDateToObject(this.parentView.selectedDate);
            prevDate.setDate(prevDate.getDate() - 1);

            var plainDate = Utils.dateJsToPlain(prevDate);

            this.checkDateAndDiplaySlots(plainDate);
            
            $('.clsBktDefaultPopupOverlay').hide();
            this.parentView.datetimedatepicker.hideDatepicker();
        },
        slideDateRight: function(){
            var nextDate = Utils.plainDateToObject(this.parentView.selectedDate);
            nextDate.setDate(nextDate.getDate() + 1);

            var plainDate = Utils.dateJsToPlain(nextDate);

            this.checkDateAndDiplaySlots(plainDate);
            
            $('.clsBktDefaultPopupOverlay').hide();
            this.parentView.datetimedatepicker.hideDatepicker();
        },
        displayDateText: function(){
            this.$('#idDivBktDatetimeSelectedDate').html(Utils.formatDate(this.parentView.selectedDate, bkt_init_widget.lang));
        },
        checkDateAndDiplaySlots: function(date){
            var newDate = Utils.plainDateToObject(date);
            var firstAvailableDate = Utils.plainDateToObject(this.parentView.firstAvailableDate);
            var lastAvailableDate = Utils.plainDateToObject(oClientValues_248295.max);
            
            if(newDate < firstAvailableDate){
                return false;
            }
            else if(newDate > lastAvailableDate){
                return false;
            }
//            else if(typeof oClientValues_248295.widge
... [truncated]
```

- Endpoint: GET https://www.citaconsular.es/js/widgets/default/collections/slots.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/collections/slots.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "449"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:45 GMT"
  },
  {
    "name": "etag",
    "value": "\"3d1-5d89b4b92ddc0-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:45 GMT"
  },
  {
    "name": "last-modified",
    "value": "Tue, 22 Feb 2022 13:26:23 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
define(['jquery', 'underscore', 'backbone', 'widgets/utils', 'widgets/default/models/slot'],
function($,_,Backbone, Utils, Slot){
    var Slots = Backbone.Collection.extend({
        url: Utils.get_server_url(),        
        model: Slot,
        initialize:function(){	               
            this.url += "datetime/";
        },
        // Overwrite the sync method to pass over the Same Origin Policy
        sync: function(method, model, options){
            //options.timeout = 10000;  
            options.dataType = "jsonp";                  
            return Backbone.sync(method, model, options);  
        },  
        parse: function(response){ 
            if(typeof response.Exception !== 'undefined'){
                return response.Exception;
            }
            else{
                oClientValues_248295.max = response.maxDays;
                
                return response.Slots;
            }
        }
    });
       
    return Slots;
});
```

- Endpoint: GET https://www.citaconsular.es/js/widgets/default/views/signupfieldslist.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/signupfieldslist.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "3230"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:45 GMT"
  },
  {
    "name": "etag",
    "value": "\"42b1-6075db6fd30d9-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:45 GMT"
  },
  {
    "name": "last-modified",
    "value": "Tue, 10 Oct 2023 14:42:23 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
define(['jquery', 'underscore', 'backbone', 'widgets/default/collections/signupfields', 'widgets/default/models/field', 'widgets/default/models/widgetconfiguration', 'widgets/utils', 'widgets/default/models/widgetconfiguration'],
function($, _, Backbone, SignupFields, Field, WidgetConfiguration, Utils, Widgetconfiguration){
    var SignupFieldsList = Backbone.View.extend({
        el: $("#idBktDefaultSignUpContainerFields"), 
        initialize: function(){
            this.iMaxHalvedClientFields = 4;
            this.iMaxHalvedClientFieldsPerRow = 2;
            
            this.field = new Field();
            this.widgetconfiguration = new Widgetconfiguration();
            
            this.render();            
        },
        events: {
            'click input': 'hideFieldError',
            'focus input': 'hideFieldError',
            'click select': 'hideFieldError',
            'focus select': 'hideFieldError',
            'keyup #idIptBktcellphone': 'onlynumbers'
        },
        template: _.template($("#idTemSignupInputFieldsRowContainer").html()),
        render: function(){
            var identifier = new Date().getTime();
            
            this.showLoading(identifier);
            
            this.iTotalFieldsToShowWidget = 0;
            this.iShowedClientFieldsCount = 0;
            this.iShowedEventFieldsCount = 0;
            this.iRowsCount = 0;
            
            this.signup_fields = new SignupFields();
            var that = this;
            
            this.listenTo(this.signup_fields, "reset", function(){
                this.$el.empty(); 
                
                var someSignupFields = that.signup_fields.models;

                if(someSignupFields.length <= 0){
                    that.showLoadDataError();
                    return false;                    
                }

                for(var i = 0 ; i < someSignupFields.length ; i++){
                    if(typeof someSignupFields[i].attributes.errors !== 'undefined'){
                        that.
... [truncated]
```

- Endpoint: GET https://www.citaconsular.es/js/widgets/default/models/field.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/models/field.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "228"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:46 GMT"
  },
  {
    "name": "etag",
    "value": "\"15d-5d89b4b92ddc0-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:46 GMT"
  },
  {
    "name": "last-modified",
    "value": "Tue, 22 Feb 2022 13:26:23 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
define(['jquery', 'underscore', 'backbone'], 
function ($, _, Backbone) {
    var Field = Backbone.Model.extend({	
        iTypeText: 1,
        iTypeCheckbox: 2,
        iTypeDrop: 3,
        iTypeDropAndText: 4,    
	parse: function(response, options){
            this.attributes = response;            
	}
    });
    return Field;
});

        
```

- Endpoint: GET https://citaconsular.es/js/widgets/default/ui/jquery-ui.min.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/ui/jquery-ui.min.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:46 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/widgets/default/ui/jquery-ui.min.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://citaconsular.es/js/widgets/default/models/slot.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/models/slot.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:46 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/widgets/default/models/slot.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://citaconsular.es/js/widgets/default/collections/signupfields.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/collections/signupfields.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:46 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/widgets/default/collections/signupfields.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://www.citaconsular.es/js/widgets/default/models/event.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/models/event.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "339"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:46 GMT"
  },
  {
    "name": "etag",
    "value": "\"2dc-5d89b4b92ddc0-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:46 GMT"
  },
  {
    "name": "last-modified",
    "value": "Tue, 22 Feb 2022 13:26:23 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
define(['jquery', 'underscore', 'backbone', 'widgets/utils'], 
function ($, _, Backbone, Utils) {
    var Event = Backbone.Model.extend({	
        url: Utils.get_server_url(),	
        initialize:function(attributes, options) {
            this.url += "summary/";	              
        },
        parse: function(response){
            if(typeof response.Exception !== 'undefined'){
                return response.Exception;
            }
            else{
                return response.Event;
            }
        },
        sync: function(method, model, options) {    
            options.dataType = "jsonp";                  
            return Backbone.sync(method, model, options);
        }
    });
    return Event;
});

```

- Endpoint: GET https://www.citaconsular.es/js/widgets/default/views/ticket.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/ticket.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "2680"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:46 GMT"
  },
  {
    "name": "etag",
    "value": "\"3f3d-6073abf921844-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:46 GMT"
  },
  {
    "name": "last-modified",
    "value": "Sun, 08 Oct 2023 20:59:23 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
define(['jquery', 'underscore', 'backbone', 'widgets/utils', 'widgets/default/models/widgetconfiguration'],
function($, _, Backbone, Utils, WidgetConfiguration){
    var TicketContainer = Backbone.View.extend({  
        el: $("#idBktDefaultTicketContainer"),
        initialize: function(p_oEvent, p_oServices){
            this.event = p_oEvent;            
            this.oServices = p_oServices;
            this.render();
        },
        render: function(){
            this.widgetconfiguration = new WidgetConfiguration();
            
            if(this.oServices){
                if(typeof this.event.attributes.Appointment !== 'undefined'){
                    this.fillSummaryTicketClientData(this.event.attributes);
                    this.fillSummaryTicketAppointmentData(this.event.attributes);                    
                }
                else{
                    this.fillClientData();
                    this.fillTicketData();
                }
            }
            else{
                this.fillSummaryTicketClientData(this.event.models[0].attributes);
                this.fillSummaryTicketAppointmentData(this.event.models[0].attributes);
            }
            
            this.fillInfoData();
            this.printCreatedTime();
            
            if(bkt_init_widget.publickey === '23d9b76923b741cb4165cb7fadba48129'){
                $("#idDivBktDefaultTicketData > table > tbody > tr:nth-child(1)").hide();
                
                if(oClientValues_248295.selectedServices[0].id === 'bkt291456' || 
                        oClientValues_248295.selectedServices[0].id === 'bkt277420' || 
                        oClientValues_248295.selectedServices[0].id === 'bkt348084' || 
                        oClientValues_248295.selectedServices[0].id === 'bkt414700' ||
                        oClientValues_248295.selectedServices[0].id === 'bkt351571'){
                    $("#idDivBktDefaultTicketData > table > tbody > tr:nth-child(1)").show();
                }     
            }
  
... [truncated]
```

- Endpoint: GET https://www.citaconsular.es/js/widgets/default/collections/services.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/collections/services.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "980"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:46 GMT"
  },
  {
    "name": "etag",
    "value": "\"fba-6073ab236479d-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:46 GMT"
  },
  {
    "name": "last-modified",
    "value": "Sun, 08 Oct 2023 20:55:39 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
define(['jquery', 'underscore', 'backbone', 'widgets/utils', 'widgets/default/models/service'],
function($,_,Backbone, Utils, Service){
    var Services = Backbone.Collection.extend({
        url: Utils.get_server_url(),
        model: Service,
        initialize:function(){
            this.url += "getservices/";
        },
        // Overwrite the sync method to pass over the Same Origin Policy
        sync: function(method, model, options){
            //options.timeout = 10000;
            options.dataType = "jsonp";
            return Backbone.sync(method, model, options);
        },
        parse: function(response){
            if(typeof response.Exception !== 'undefined'){
                return response.Exception;
            }
            else{
                oClientValues_248295.someAgendaServices = response.Agendas;
                oClientValues_248295.someExtraServices = response.ExtraServices;
                
                if(typeof response.AllowAppointment !== 'undefined'){
                    oClientValues_248295.someAllowAppointment = response.AllowAppointment;
                }
                
                return response.Services;
            }
        },
        arePaymentServices: function(){
            var asd = 1;

            for(var i = 0 ; i < oClientValues_248295.selectedServices.length ; i++ ){
                for(var j = 0 ; j < oClientValues_248295.someServices.length ; j++){
                    if(this.isServiceSelected(i, j) && this.isPaymentService(j)){
                        return true;
                    }
                }

                if(typeof oClientValues_248295.selectedExtras[oClientValues_248295.selectedServices[i].id] !== 'undefined'){
                    var bIsPaymentExtraService = false;

                    $.each(oClientValues_248295.selectedExtras[oClientValues_248295.selectedServices[i].id], function(index, value){
                        var sIsPrepay = oClientValues_248295.someExtraServices[oClientValues_248295.selectedServices[i].id][index]['pr
... [truncated]
```

- Endpoint: GET https://www.citaconsular.es/js/widgets/default/views/signinfieldslist.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/signinfieldslist.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "1940"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:46 GMT"
  },
  {
    "name": "etag",
    "value": "\"239d-5d89b4b92ddc0-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:46 GMT"
  },
  {
    "name": "last-modified",
    "value": "Tue, 22 Feb 2022 13:26:23 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
define(['jquery', 'underscore', 'backbone', 'widgets/default/collections/signinfields', 'widgets/default/models/field', 'widgets/utils'],
function($, _, Backbone, SignInFields, Field, Utils){
    var SignInFieldsList = Backbone.View.extend({
        el: $("#idFormSignInContainer"), 
        initialize: function(){
            this.field = new Field();            
            this.render();            
        },
        events: {
            'click input': 'hideFieldError',
            'focus input': 'hideFieldError',
            'click select': 'hideFieldError',
            'focus select': 'hideFieldError'
        },
        template: "",
        render: function(){
            var identifier = new Date().getTime();
            
            this.showLoading(identifier);
            
            this.signin_fields = new SignInFields();
            var that = this;            
            this.emptyFields();
            this.listenTo(this.signin_fields, "reset", function(){
                that.$('#idSelBktSignInLoginType').empty();
                that.$('#idBktDefaultSignInEventFields').empty();
                
                var someSigninFields = that.signin_fields.models;

                for(var i = 0 ; i < someSigninFields.length ; i++){
                    if(typeof someSigninFields[i].attributes.errors !== 'undefined'){
                        that.showLoadDataError();
                        return false;
                    }
                    else{
                        that.ClientFields = someSigninFields[i].attributes.Clients;
                        that.EventFields = someSigninFields[i].attributes.Events;
                        that.CountriesData = someSigninFields[i].attributes.Countries;
                        that.SelectOptions = someSigninFields[i].attributes.SelectOptions;
                        that.VoucherFields = someSigninFields[i].attributes.Voucher;
                    }
                }
                
                _.each(that.ClientFields, function(field){
               
... [truncated]
```

- Endpoint: GET https://www.citaconsular.es/js/widgets/default/views/accountloginfieldslist.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/accountloginfieldslist.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "1226"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:46 GMT"
  },
  {
    "name": "etag",
    "value": "\"11ee-5d89b4b92ddc0-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:46 GMT"
  },
  {
    "name": "last-modified",
    "value": "Tue, 22 Feb 2022 13:26:23 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
define(['jquery', 'underscore', 'backbone', 'widgets/default/collections/signinaccountfields'],
function($, _, Backbone, SignInAccountFields){
    var AccountLoginFieldsList = Backbone.View.extend({
        el: $("#idDivBktAccountLoginContent"), 
        loaded: true,
        initialize: function(options){  
            this.parentView = options.parentView;   
            this.identifier = new Date().getTime();
        },
        start: function(){
            this.showLoading();  
            this.loadFields();
        },
        loadFields: function(){
            var that = this;
            this.fields = new SignInAccountFields();
            
            this.listenTo(this.fields, "reset", function(){
                this.$('#idSelBktAccountLoginType').empty();
                this.doRender();
            });            

            this.fields.fetch({
                data: bkt_init_widget,
                error: (function(){
                    that.showLoadDataError();
                })
            });
        },
        doRender: function(){
            if(this.checkEmptyFields() === true){ 
                this.showLoadDataError();
            }
            else{
                this.render(); 
            }
        },
        checkEmptyFields: function(){
            if(this.fields.models.length <= 0){
                return true;
            }

            if(typeof this.fields.models[0].attributes.errors !== 'undefined'){
                return true;
            }
            
            return false;
        },
        events: {
            'change #idSelBktAccountLoginType': 'changeLoginType',
            'click input': 'hideFieldError',
            'focus input': 'hideFieldError'
        },
        render: function(){
            this.emptyFields();
            
            var someSiginAccountFields = this.fields.models[0].attributes.Clients;

            for(var i = 0 ; i < someSiginAccountFields.length ; i++){
                this.drawClientInputField(someSiginAccountFields[i]);
            }
... [truncated]
```

- Endpoint: GET https://www.citaconsular.es/js/widgets/default/views/creditcardcapturestr.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/creditcardcapturestr.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "2102"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:46 GMT"
  },
  {
    "name": "etag",
    "value": "\"275f-5d89b4b92ddc0-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:46 GMT"
  },
  {
    "name": "last-modified",
    "value": "Tue, 22 Feb 2022 13:26:23 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
define(['jquery', 'underscore', 'backbone', 'widgets/default/views/breadcrumb', 'widgets/default/models/creditcard'],
function($, _, Backbone, BreadCrumb, CreditCard){
    var CreditCardCaptureStr = Backbone.View.extend({
        el: $("#idDivBktPaymentGatewayStripeContainer"),         
        events: {
           'click #idBktDefaultCCCStrSubmitButton': 'sendCreditCardDataV3',
           'click #idDivBktCCCStrWhatsThis': 'showWhatsThis',
           'click #idDivBktCCCStrCardClose': 'closeWhatsThis',
           'click #idDivBktCCCStrErrorClose': 'closeError'
        },
        initialize: function(){    
            $(this.el).off();
            this.publickey = this.$el.find("#idBktDefaultCCCStrKey").text();
            this.errorMessage = this.$el.find("#idDivBktCCCStrError").text();
            this.identifier = new Date().getTime();
        },
        show: function(){  

        }, 
        start: function(){
            this.emptyContainers();
            
            if(!$('#idStripeCreditCardContainer').hasClass('StripeElement')){
                var that = this;
                
                that.showLoading();
                
                require(['https://js.stripe.com/v3/'], function(Str){
                    oStripe = Stripe(that.publickey);
                    var elements = oStripe.elements();

                    var elementStyles = {
                        base: {
                            color: '#666666',
                            fontFamily: 'Arial,Helvetica,Verdana',
                            fontSize: '1em',
                            '::placeholder': {
                                color: '#B7ADAD',
                                fontSize: '1em',
                            },
                        },
                    };

                    cardNumber = elements.create('cardNumber', {
                        style: elementStyles,
                    });
                    cardNumber.mount('#idStripeCreditCardContainer');

                    cardExpiry = elements.c
... [truncated]
```

- Endpoint: GET https://citaconsular.es/js/widgets/default/collections/signinfields.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/collections/signinfields.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:46 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/widgets/default/collections/signinfields.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://citaconsular.es/js/widgets/default/collections/signinaccountfields.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/collections/signinaccountfields.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:47 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/widgets/default/collections/signinaccountfields.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://citaconsular.es/js/widgets/default/models/creditcard.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/models/creditcard.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:47 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/widgets/default/models/creditcard.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://www.citaconsular.es/js/widgets/default/models/redsys.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/models/redsys.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "353"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:46 GMT"
  },
  {
    "name": "etag",
    "value": "\"372-5d89b4b92ddc0-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:46 GMT"
  },
  {
    "name": "last-modified",
    "value": "Tue, 22 Feb 2022 13:26:23 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
define(['jquery', 'underscore', 'backbone', 'widgets/utils'], 
function ($, _, Backbone, Utils){
    var Redsys = Backbone.Model.extend({
        url: Utils.get_server_url(),
        initialize:function(){      
            
        },
        create:function(){      
            this.url += "redsyscreatepayment/";
        },
        executed:function(){      
            this.url += "redsysexecutedpayment/";
        },
        sync: function(method, model, options){
            options.dataType = "jsonp";                  
            return Backbone.sync(method, model, options);
        },
        parse: function(response){  
            if(typeof response.Exception !== 'undefined'){
                return response.Exception;
            }
            else {
                return response.Redsys;
            }            
        }
    });
    
    return Redsys;
});
```

- Endpoint: GET https://www.citaconsular.es/js/widgets/default/models/niubiz.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/models/niubiz.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "361"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:46 GMT"
  },
  {
    "name": "etag",
    "value": "\"3a6-6073ab3cbd3ed-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:46 GMT"
  },
  {
    "name": "last-modified",
    "value": "Sun, 08 Oct 2023 20:56:06 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
define(['jquery', 'underscore', 'backbone', 'widgets/utils'], 
function ($, _, Backbone, Utils){
    var Niubiz = Backbone.Model.extend({
        url: Utils.get_server_url(),
        initialize:function(){      
            
        },
        create:function(){      
                this.url = Utils.get_server_url() + "niubizcreatepayment/";
        },
        executed:function(){      
            this.url = Utils.get_server_url() + "niubizexecutedpayment/";
        },
        sync: function(method, model, options){
            options.dataType = "jsonp";                  
            return Backbone.sync(method, model, options);
        },
        parse: function(response){  
            if(typeof response.Exception !== 'undefined'){
                return response.Exception;
            }
            else {
                return response.Niubiz;
            }            
        }
    });
    
    return Niubiz;
});
```

- Endpoint: GET https://www.citaconsular.es/js/widgets/default/views/historyappointmentslist.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/historyappointmentslist.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "2991"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:46 GMT"
  },
  {
    "name": "etag",
    "value": "\"3f2f-6073abc8f2114-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:46 GMT"
  },
  {
    "name": "last-modified",
    "value": "Sun, 08 Oct 2023 20:58:33 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
define(['jquery', 'underscore', 'backbone', 'widgets/default/collections/events', 'widgets/utils', 'widgets/default/views/footer', 'widgets/default/models/eventhistory',
        'widgets/default/views/ticket'],
function($, _, Backbone, Events, Utils, Footer, EventHistory, TicketView){
    var HistoryAppointmentsList = Backbone.View.extend({
        el: $("#idDivBktAccountHistoryContent"), 
        template: _.template($("#idTemEventData").html()),
        loaded: true,
        events: {
            'click .clsDivBktAccountHistoryContentDataPrintIcon': 'printTicket',
            'click .clsDivBktAccountHistoryContentDataDeleteIcon': 'confirmEvent',
            'click .clsDivCancelButton': 'cancelEvent',
            'click .clsDivBackButton': 'cancelEvent',
            'click .clsDivContinueButton': 'deleteEvent',
            'click': 'stopPropagation'
        },
        initialize: function(options){  
            this.parentView = options.parentView;   
            this.identifier = new Date().getTime();
            this.footer = new Footer();
            this.eventHistory = new EventHistory();
        },
        start: function(){
            $("#idDivBktAccountHistoryContentNoEvents").hide();
            $('#idDivBktAccountHistoryCancelAppointmentContainer').hide();
            $('#idDivBktAccountHistoryCancelAppointmentConfirmContainer').hide();
            $('#idDivBktAccountHistoryCancelAppointmentErrorContainer').hide();
            
            this.showLoading();  
            this.loadEvents();
        },
        loadEvents: function(){
            $('.clsDivBktAccountHistoryContainerDataRow').remove();
            
            var that = this;
            this.events = new Events();
            
            this.listenTo(this.events, "reset", function(){
                this.doRender();
            });            
            
            var data = $.extend(true, {}, bkt_init_widget);
            data.signedin = oClientValues_248295.signedInData.signedin;
            data.bktToken = oClientValues_24829
... [truncated]
```

- Endpoint: GET https://www.citaconsular.es/js/widgets/default/models/validate.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/models/validate.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "336"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:46 GMT"
  },
  {
    "name": "etag",
    "value": "\"2d7-5d89b4b92ddc0-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:46 GMT"
  },
  {
    "name": "last-modified",
    "value": "Tue, 22 Feb 2022 13:26:23 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
define(['jquery', 'underscore', 'backbone', 'widgets/utils'], 
function ($, _, Backbone, Utils){
    var Validate = Backbone.Model.extend({	
        url: Utils.get_server_url(),
        initialize:function(){
            this.url = Utils.get_server_url() + "confirmclient/";
        },
        sync: function(method, model, options){
            options.dataType = "jsonp";
            return Backbone.sync(method, model, options);
        },
        parse: function(response){  
            if(typeof response.Exception !== 'undefined'){
                return response.Exception;
            }
            else {
                return response.Valid;
            }            
        }
    });
    
    return Validate;
});
```

- Endpoint: GET https://www.citaconsular.es/js/widgets/default/models/waitinglist.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/models/waitinglist.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "342"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:46 GMT"
  },
  {
    "name": "etag",
    "value": "\"2e0-5d89b4b92ddc0-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:46 GMT"
  },
  {
    "name": "last-modified",
    "value": "Tue, 22 Feb 2022 13:26:23 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
define(['jquery', 'underscore', 'backbone', 'widgets/utils'], 
function ($, _, Backbone, Utils) {
    var Event = Backbone.Model.extend({	
        url: Utils.get_server_url(),	
        initialize:function(attributes, options) {
            this.url += "waitinglist/";	              
        },
        parse: function(response){
            if(typeof response.Exception !== 'undefined'){
                return response.Exception;
            }
            else{
                return response.Event;
            }
        },
        sync: function(method, model, options) {    
            options.dataType = "jsonp";                  
            return Backbone.sync(method, model, options);
        }
    });
    return Event;
});

```

- Endpoint: GET https://www.citaconsular.es/js/widgets/default/collections/agendas.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/collections/agendas.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "410"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:46 GMT"
  },
  {
    "name": "etag",
    "value": "\"391-5d89b4b92ddc0-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:46 GMT"
  },
  {
    "name": "last-modified",
    "value": "Tue, 22 Feb 2022 13:26:23 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
define(['jquery', 'underscore', 'backbone', 'widgets/utils', 'widgets/default/models/agenda'],
function($,_,Backbone, Utils, Agenda){
    var Agendas = Backbone.Collection.extend({
        url: Utils.get_server_url(),        
        model: Agenda,
        initialize:function(){	               
            this.url += "getagendas/";
        },
        // Overwrite the sync method to pass over the Same Origin Policy
        sync: function(method, model, options){
            //options.timeout = 10000;  
            options.dataType = "jsonp";                  
            return Backbone.sync(method, model, options);  
        },   
        parse: function(response){
            if(typeof response.Exception !== 'undefined'){
                return response.Exception;
            }
            else{
                return response.Agendas;
            }
        }
    });
       
    return Agendas;
});
```

- Endpoint: GET https://citaconsular.es/js/widgets/default/collections/events.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/collections/events.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:47 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/widgets/default/collections/events.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://citaconsular.es/js/widgets/default/models/eventhistory.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/models/eventhistory.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:47 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/widgets/default/models/eventhistory.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://citaconsular.es/js/widgets/default/models/agenda.js?v=5
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/models/agenda.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:47 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/js/widgets/default/models/agenda.js?v=5"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://www.citaconsular.es/js/widgets/default/views/extraservices.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/extraservices.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "1877"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:46 GMT"
  },
  {
    "name": "etag",
    "value": "\"2d11-5f446a1af44a9-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:46 GMT"
  },
  {
    "name": "last-modified",
    "value": "Thu, 09 Feb 2023 16:11:21 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
define(['jquery', 'underscore', 'backbone'],
function($, _, Backbone){
    var ExtraServicesMainContainer = Backbone.View.extend({
        el: $("#idBktDefaultExtraServicesContainer"),    
        template: _.template($("#idTemSelectExtraServices").html()),
        initialize: function(){
            this.identifier = new Date().getTime();
        },   
        events: {
            'click #idBktExtraServicesBackButtonContainer': 'backToServices',
            'click #idBktExtraServicesContinueButton': 'nextStep'
        },        
        start: function(){
            this.clear();

            this.render();            
        },
        clear: function(){
            this.$('#idBktExtraServiceSelectedServiceInfo').empty();
            
            this.$('#idBktExtraServiceSelectedExtraInfo').empty();
            this.$('#idBktExtraServiceSelectedExtrasContainer').hide();
            
            this.$('#idBktExtraServiceSelectedTotal').empty();
            this.$('#idBktExtraServicesTotalContainer').hide();
            
            this.$('#idListExtraServices').empty();        
        },
        render: function(){
            this.showLoading();
            
            this.renderExtraServicesList();
            this.renderSummary();

            this.show();
            
            this.hideLoading();
        },        
        renderExtraServicesList: function(){
            var that = this;
            
            for(var j = 0 ; j < oClientValues_248295.selectedServices.length ; j++){
                var service = oClientValues_248295.selectedServices[j].id;
                
                $.each(oClientValues_248295.someExtraServices[service], function(index, value){
                    var parameters = {attributes: value};
                    
                    parameters.attributes['service'] = service;
                    
                    var template = _.template($("#idTemSelectExtraServices").html(), parameters);
                    th
... [truncated]
```

- Endpoint: GET https://www.citaconsular.es/js/widgets/default/views/servicesselectpeople.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/views/servicesselectpeople.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "1575"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:46 GMT"
  },
  {
    "name": "etag",
    "value": "\"1fe7-6073abd96251c-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:46 GMT"
  },
  {
    "name": "last-modified",
    "value": "Sun, 08 Oct 2023 20:58:50 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
define(['jquery', 'underscore', 'backbone'],
function($, _, Backbone){
    var SelectPeople = Backbone.View.extend({
        el: $("#idSelNumberOfPeople"),
        events: {
            'change': 'refreshServices'
        },
        initialize: function(options){
            this.services = options;
            this.render();           
        },
        template: _.template($("#idTemSelectPeople").html()),
        render: function(){
//            var people = this.getOptions();                  
            var max = this.getMax();
            var min = this.getMin(max);
           
            $('#idSelNumberOfPeople').empty();
            $('#idSelNumberOfPeopleDatime').empty();
            
//            for(var i = 0 ; i < people.length ; i++){
//                this.$el.append(this.template(people[i]));
//                $('#idSelNumberOfPeopleDatime').append(this.template(people[i]));
//            }           
            
            for(var i = min ; i <= max ; i++){
                this.$el.append(this.template({value: i, people: i}));
                $('#idSelNumberOfPeopleDatime').append(this.template({value: i, people: i}));
            }
            
            var iSelectedPeople = parseInt($(this.$el).val());
            oClientValues_248295.selectedPeople = iSelectedPeople;   
            
            this.refreshServices();
        },
        getMax: function(){
            var iMax = 1;                   
            
            for(var i = 0 ; i < this.services.length ; i++){                                
                if(this.services.models[i].get('multiservice_number') > iMax){
                    iMax = parseInt(this.services.models[i].get('multiservice_number'));
                }
            }            
            
            return iMax;                    
        },
        getMin: function(max){
            var iMin = max;                   
            
            for(var i = 0 ; i < this.services.length ; i++){         
... [truncated]
```

- Endpoint: GET https://www.citaconsular.es/js/widgets/default/ui/jquery-ui.min.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/ui/jquery-ui.min.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "20838"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:47 GMT"
  },
  {
    "name": "etag",
    "value": "\"112f5-5d89b4b92ddc0-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:46 GMT"
  },
  {
    "name": "last-modified",
    "value": "Tue, 22 Feb 2022 13:26:23 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
/*! jQuery UI - v1.12.1 - 2016-10-24
* http://jqueryui.com
* Includes: widget.js, position.js, form-reset-mixin.js, keycode.js, labels.js, unique-id.js, widgets/datepicker.js, widgets/menu.js, widgets/selectmenu.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

(function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)})(function(t){function e(t){for(var e,i;t.length&&t[0]!==document;){if(e=t.css("position"),("absolute"===e||"relative"===e||"fixed"===e)&&(i=parseInt(t.css("zIndex"),10),!isNaN(i)&&0!==i))return i;t=t.parent()}return 0}function i(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,sho
... [truncated]
```

- Endpoint: GET https://www.citaconsular.es/js/widgets/default/models/slot.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/models/slot.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "180"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:47 GMT"
  },
  {
    "name": "etag",
    "value": "\"ec-5d89b4b92ddc0-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:47 GMT"
  },
  {
    "name": "last-modified",
    "value": "Tue, 22 Feb 2022 13:26:23 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
define(['jquery', 'underscore', 'backbone'], 
function ($, _, Backbone) {
    var Slot = Backbone.Model.extend({	
	parse: function(response, options){
            this.attributes = response;            
	}
    });
    return Slot;
});


```

- Endpoint: GET https://www.citaconsular.es/js/widgets/default/collections/signupfields.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/collections/signupfields.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "417"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:47 GMT"
  },
  {
    "name": "etag",
    "value": "\"38f-5d89b4b92ddc0-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:47 GMT"
  },
  {
    "name": "last-modified",
    "value": "Tue, 22 Feb 2022 13:26:23 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
define(['jquery', 'underscore', 'backbone', 'widgets/utils', 'widgets/default/models/field'],
function($,_,Backbone, Utils, Field){
    var SignupFields = Backbone.Collection.extend({
        url: Utils.get_server_url(),        
        model: Field,
        initialize:function(){
            this.url += "getsignupfields/";
        },
        // Overwrite the sync method to pass over the Same Origin Policy
        sync: function(method, model, options){
            //options.timeout = 10000;  
            options.dataType = "jsonp";                  
            return Backbone.sync(method, model, options);  
        },
        parse: function(response){
            if(typeof response.Exception !== 'undefined'){
                return response.Exception;
            }
            else{
                return response.CustomFields;
            }
        }
    });
       
    return SignupFields;
});
```

- Endpoint: GET https://www.citaconsular.es/js/widgets/default/collections/signinfields.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/collections/signinfields.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "418"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:47 GMT"
  },
  {
    "name": "etag",
    "value": "\"38f-5d89b4b92ddc0-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:47 GMT"
  },
  {
    "name": "last-modified",
    "value": "Tue, 22 Feb 2022 13:26:23 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
define(['jquery', 'underscore', 'backbone', 'widgets/utils', 'widgets/default/models/field'],
function($,_,Backbone, Utils, Field){
    var SignupFields = Backbone.Collection.extend({
        url: Utils.get_server_url(),        
        model: Field,
        initialize:function(){
            this.url += "getsigninfields/";
        },
        // Overwrite the sync method to pass over the Same Origin Policy
        sync: function(method, model, options){
            //options.timeout = 10000;  
            options.dataType = "jsonp";                  
            return Backbone.sync(method, model, options);  
        },
        parse: function(response){
            if(typeof response.Exception !== 'undefined'){
                return response.Exception;
            }
            else{
                return response.CustomFields;
            }
        }
    });
       
    return SignupFields;
});
```

- Endpoint: GET https://www.citaconsular.es/js/widgets/default/collections/signinaccountfields.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/collections/signinaccountfields.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "431"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:47 GMT"
  },
  {
    "name": "etag",
    "value": "\"3a4-5d89b4b92ddc0-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:47 GMT"
  },
  {
    "name": "last-modified",
    "value": "Tue, 22 Feb 2022 13:26:23 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
define(['jquery', 'underscore', 'backbone', 'widgets/utils', 'widgets/default/models/field'],
function($,_,Backbone, Utils, Field){
    var SignInAccountFields = Backbone.Collection.extend({
        url: Utils.get_server_url(),        
        model: Field,
        initialize:function(){
            this.url += "getsigninaccountfields/";
        },
        // Overwrite the sync method to pass over the Same Origin Policy
        sync: function(method, model, options){
            //options.timeout = 10000;  
            options.dataType = "jsonp";                  
            return Backbone.sync(method, model, options);  
        },
        parse: function(response){
            if(typeof response.Exception !== 'undefined'){
                return response.Exception;
            }
            else{
                return response.CustomFields;
            }
        }
    });
       
    return SignInAccountFields;
});
```

- Endpoint: GET https://www.citaconsular.es/js/widgets/default/models/creditcard.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/models/creditcard.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "509"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:47 GMT"
  },
  {
    "name": "etag",
    "value": "\"504-5d89b4b92ddc0-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:47 GMT"
  },
  {
    "name": "last-modified",
    "value": "Tue, 22 Feb 2022 13:26:23 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
define(['jquery', 'underscore', 'backbone', 'widgets/utils'], 
function ($, _, Backbone, Utils){
    var CreditCard = Backbone.Model.extend({        
        url: Utils.get_server_url(),
        initialize:function(){      
            this.url += "creditcardcapture/";
        },
        sync: function(method, model, options){
            options.dataType = "jsonp";                  
            return Backbone.sync(method, model, options);
        },
        parse: function(response){  
            if(typeof response.Exception !== 'undefined'){
                return response.Exception;
            }
            else {
                return response.CreditCard;
            }            
        },
        getEmptyFields: function(attrs, options){     
//            var someFields = ['#idInpHolderName', '#idInpCreditCard', '#idInpExpiryMonth', '#idInpExpiryYear', '#idInpCvc'];
            var someFields = ['#idInpHolderName'];
            var someResult = [];
            for (var i=0; i<someFields.length; i++) {
                if ($(someFields[i]).val().trim().length === 0) {
                    someResult.push(someFields[i]);
                }
            }
            
            return someResult;
        }
       
        
    });
    return CreditCard;
});
```

- Endpoint: GET https://www.citaconsular.es/js/widgets/default/collections/events.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/collections/events.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "485"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:47 GMT"
  },
  {
    "name": "etag",
    "value": "\"4a0-5d89b4b92ddc0-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:47 GMT"
  },
  {
    "name": "last-modified",
    "value": "Tue, 22 Feb 2022 13:26:23 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
define(['jquery', 'underscore', 'backbone', 'widgets/utils', 'widgets/default/models/eventhistory'],
function($,_,Backbone, Utils, EventHistory){
    var Events = Backbone.Collection.extend({
        url: Utils.get_server_url(),        
        model: EventHistory,
        initialize:function(){
            this.url += "gethistory/";
        },
        // Overwrite the sync method to pass over the Same Origin Policy
        sync: function(method, model, options){
            //options.timeout = 10000;  
            options.dataType = "jsonp";                  
            return Backbone.sync(method, model, options);  
        },
        parse: function(response){
            if(typeof response.Exception !== 'undefined'){
                return response.Exception;
            }
            else{
                if(typeof response.Customer !== 'undefined'){
                    oClientValues_248295.signedInData.name = response.Customer.name;
                    oClientValues_248295.signedInData.document = response.Customer.document;
                }
                
                return response.Events;
            }
        }
    });
       
    return Events;
});
```

- Endpoint: GET https://www.citaconsular.es/js/widgets/default/models/eventhistory.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/models/eventhistory.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "246"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:47 GMT"
  },
  {
    "name": "etag",
    "value": "\"185-5d89b4b92ddc0-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:47 GMT"
  },
  {
    "name": "last-modified",
    "value": "Tue, 22 Feb 2022 13:26:23 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
define(['jquery', 'underscore', 'backbone', 'widgets/utils'], 
function ($, _, Backbone, Utils) {
    var EventHistory = Backbone.Model.extend({	
        iStateCanceled: 0,
        iStateCompleted: 1,
        iStatePending: 2,
        iStateRejected: 4,   
        parse: function(response){  
            this.attributes = response;        
        }
    });
    return EventHistory;
});

```

- Endpoint: GET https://www.citaconsular.es/js/widgets/default/models/agenda.js?v=5
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/js/widgets/default/models/agenda.js?v=5"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "181"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:47 GMT"
  },
  {
    "name": "etag",
    "value": "\"f0-5d89b4b92ddc0-gzip\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:47 GMT"
  },
  {
    "name": "last-modified",
    "value": "Tue, 22 Feb 2022 13:26:23 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
define(['jquery', 'underscore', 'backbone'], 
function ($, _, Backbone) {
    var Agenda = Backbone.Model.extend({	
	parse: function(response, options){
            this.attributes = response;            
	}
    });
    return Agenda;
});


```

- Endpoint: GET https://citaconsular.es/onlinebookings/getwidgetconfigurations/?callback=jQuery2110376749665247451_1759407880176&type=default&publickey=2f21cd9c0d8aa26725bf8930e4691d645&lang=es&services%5B%5D=bkt195382&version=5&src=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&srvsrc=https%3A%2F%2Fcitaconsular.es&_=1759407880182
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/onlinebookings/getwidgetconfigurations/?callback=jQuery2110376749665247451_1759407880176&type=default&publickey=2f21cd9c0d8aa26725bf8930e4691d645&lang=es&services%5B%5D=bkt195382&version=5&src=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&srvsrc=https%3A%2F%2Fcitaconsular.es&_=1759407880182"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:47 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/onlinebookings/getwidgetconfigurations/?callback=jQuery2110376749665247451_1759407880176&type=default&publickey=2f21cd9c0d8aa26725bf8930e4691d645&lang=es&services%5B%5D=bkt195382&version=5&src=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&srvsrc=https%3A%2F%2Fcitaconsular.es&_=1759407880182"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://www.citaconsular.es/onlinebookings/getwidgetconfigurations/?callback=jQuery2110376749665247451_1759407880176&type=default&publickey=2f21cd9c0d8aa26725bf8930e4691d645&lang=es&services%5B%5D=bkt195382&version=5&src=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&srvsrc=https%3A%2F%2Fcitaconsular.es&_=1759407880182
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/onlinebookings/getwidgetconfigurations/?callback=jQuery2110376749665247451_1759407880176&type=default&publickey=2f21cd9c0d8aa26725bf8930e4691d645&lang=es&services%5B%5D=bkt195382&version=5&src=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&srvsrc=https%3A%2F%2Fcitaconsular.es&_=1759407880182"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "cache-control",
    "value": "no-store, no-cache, must-revalidate"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "564"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:48 GMT"
  },
  {
    "name": "expires",
    "value": "Thu, 19 Nov 1981 08:52:00 GMT"
  },
  {
    "name": "pragma",
    "value": "no-cache"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PHP/7.2.34"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
callback=jQuery2110376749665247451_1759407880176({"WidgetConfiguration":{"any_agenda":"0","registration_type":"0","waiting_list":"0","show_comments":"1","mandatory_comments":"0","min_service_to_enable_dropdown":"0","template":"0","captcha":"0","payment_enable":false,"payments_gateways":{"stripe":false,"paypal":false,"redsys":false,"niubiz":false}},"WidgetLabel":{"languages_id":"7","label_users_comments":"(1) Para citas de 'Visado' marcar con una X.Para citas de 'Inscripci\u00f3n de matrimonio espa\u00f1ol' poner: Nombres completo y CI del c\u00f3nyuge cubano; Lugar de nacimiento de ambos c\u00f3nyuges; y cuantos hijos tienen en com\u00fan.","show_extra_info":"1","show_at":"1","show_when":"3","extra_info":"Esta es la Confirmaci\u00f3n de su cita. Tambi\u00e9n, se le ha enviado un correo con la informaci\u00f3n de su cita. \r\n<script>\r\ndocument.getElementById('idDivBktSummaryPrinterContainer').innerHTML='';\r\n<\/script>"}});
```

- Endpoint: POST https://www.google-analytics.com/g/collect?v=2&tid=G-F3TYSDL945&gtm=45je59u1v9106061970za200zb9106055348zd9106055348&_p=1759407881015&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=401161725.1759407882&ul=es-es&sr=1280x720&uaa=x86&uab=64&uafvl=Not%253DA%253FBrand%3B24.0.0.0%7CChromium%3B140.0.7339.186&uamb=0&uam=&uap=Windows&uapv=10.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AEAAAAQ&_s=2&tag_exp=101509157~103116026~103200004~103233427~104527907~104528500~104684208~104684211~104948813~115480710~115650527~115650529~115834636~115834638&sid=1759407881&sct=1&seg=0&dl=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&dr=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&dt=Consulado%20Gral.%20de%20Espa%C3%B1a%20en%20La%20Habana&en=scroll&ep.RutaWidget=%7Bpage%3A%20%22%22%2F%22%22%20%2B%20Backbone.history.getFragment()%7D&ep.anonymizeIp=true&epn.percent_scrolled=90&_et=5&tfd=8987
  - Status: 204
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.google-analytics.com"
  },
  {
    "name": ":method",
    "value": "POST"
  },
  {
    "name": ":path",
    "value": "/g/collect?v=2&tid=G-F3TYSDL945&gtm=45je59u1v9106061970za200zb9106055348zd9106055348&_p=1759407881015&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=401161725.1759407882&ul=es-es&sr=1280x720&uaa=x86&uab=64&uafvl=Not%253DA%253FBrand%3B24.0.0.0%7CChromium%3B140.0.7339.186&uamb=0&uam=&uap=Windows&uapv=10.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AEAAAAQ&_s=2&tag_exp=101509157~103116026~103200004~103233427~104527907~104528500~104684208~104684211~104948813~115480710~115650527~115650529~115834636~115834638&sid=1759407881&sct=1&seg=0&dl=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&dr=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&dt=Consulado%20Gral.%20de%20Espa%C3%B1a%20en%20La%20Habana&en=scroll&ep.RutaWidget=%7Bpage%3A%20%22%22%2F%22%22%20%2B%20Backbone.history.getFragment()%7D&ep.anonymizeIp=true&epn.percent_scrolled=90&_et=5&tfd=8987"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "content-length",
    "value": "0"
  },
  {
    "name": "origin",
    "value": "https://www.citaconsular.es"
  },
  {
    "name": "priority",
    "value": "u=1, i"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "empty"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "cross-site"
  },
  {
    "name": "sec-fetch-storage-access",
    "value": "active"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "access-control-allow-credentials",
    "value": "true"
  },
  {
    "name": "access-control-allow-origin",
    "value": "https://www.citaconsular.es"
  },
  {
    "name": "alt-svc",
    "value": "h3=\":443\"; ma=2592000,h3-29=\":443\"; ma=2592000"
  },
  {
    "name": "cache-control",
    "value": "no-cache, no-store, must-revalidate"
  },
  {
    "name": "content-length",
    "value": "0"
  },
  {
    "name": "content-security-policy-report-only",
    "value": "script-src 'none'; form-action 'none'; frame-src 'none'; report-uri https://csp.withgoogle.com/csp/scaffolding/ascnsrsggc:102:0"
  },
  {
    "name": "content-type",
    "value": "text/plain"
  },
  {
    "name": "cross-origin-opener-policy-report-only",
    "value": "same-origin; report-to=ascnsrsggc:102:0"
  },
  {
    "name": "cross-origin-resource-policy",
    "value": "cross-origin"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:48 GMT"
  },
  {
    "name": "expires",
    "value": "Fri, 01 Jan 1990 00:00:00 GMT"
  },
  {
    "name": "pragma",
    "value": "no-cache"
  },
  {
    "name": "report-to",
    "value": "{\"group\":\"ascnsrsggc:102:0\",\"max_age\":2592000,\"endpoints\":[{\"url\":\"https://csp.withgoogle.com/csp/report-to/scaffolding/ascnsrsggc:102:0\"}],}"
  },
  {
    "name": "server",
    "value": "Golfe2"
  }
]
```

- Endpoint: GET https://www.citaconsular.es/images/widgets/default/footer/powered.png
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/images/widgets/default/footer/powered.png"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "priority",
    "value": "i"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/css/widgets/maec.css?v=5"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "image"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-origin"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-length",
    "value": "3136"
  },
  {
    "name": "content-type",
    "value": "image/png"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:48 GMT"
  },
  {
    "name": "etag",
    "value": "\"c40-5d89b4b92ddc0\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:48 GMT"
  },
  {
    "name": "last-modified",
    "value": "Tue, 22 Feb 2022 13:26:23 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
iVBORw0KGgoAAAANSUhEUgAAAH8AAAARCAYAAAD0Q3M5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABippVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczpJcHRjNHhtcENvcmU9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBDb3JlLzEuMC94bWxucy8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMTgwMTE3NDA3MjA2ODExOTEwOUYzMDU2NDZFQjU3RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxQUI3NjJCQjcyMzkxMUU0ODNCMTlFNjBGRkIxQzc1OSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxQUI3NjJCQTcyMzkxMUU0ODNCMTlFNjBGRkIxQzc1OSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIiBwaG90b3Nob3A6QXV0aG9yc1Bvc2l0aW9uPSJQYXJ0bmVyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDQ4MDExNzQwNzIwNjgxMTgyMkFGN0NBREM3RTk2QUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDE4MDExNzQwNzIwNjgxMTkxMDlGMzA1NjQ2RUI1N0QiLz4gPGRjOmNyZWF0b3I+IDxyZGY6U2VxPiA8cmRmOmxpPkdlb2ZmIFRlZWhhbjwvcmRmOmxpPiA8L3JkZjpTZXE+IDwvZGM6Y3JlYXRvcj4gPGRjOnRpdGxlPiA8cmRmOkFsdD4gPHJkZjpsaSB4bWw6bGFuZz0ieC1kZWZhdWx0Ij5pUGhvbmUgUmV0aW5hIEdVSSBQU0Q8L3JkZjpsaT4gPC9yZGY6QWx0PiA8L2RjOnRpdGxlPiA8SXB0YzR4bXBDb3JlOkNyZWF0b3JDb250YWN0SW5mbyBJcHRjNHhtcENvcmU6Q2lBZHJFeHRhZHI9IjEwOSBBdGxhbnRpYyBBdmUiIElwdGM0eG1wQ29yZTpDaUFkckNpdHk9IlRvcm9udG8iIElwdGM0eG1wQ29yZTpDaUFkclJlZ2lvbj0iT04iIElwdGM0eG1wQ29yZTpDaUFkckN0cnk9IkNhbmFkYSIgSXB0YzR4bXBDb3JlOkNpVGVsV29yaz0iNDE2IDM0MCA4NjY2IiBJcHRjNHhtcENvcmU6Q2lFbWFpbFdvcms9Imdlb2ZmQHRlZWhhbmxheC5jb20iIElwdGM0eG1wQ29y
... [truncated]
```

- Endpoint: GET https://citaconsular.es/onlinebookings/getservices/?callback=jQuery2110376749665247451_1759407880176&type=default&publickey=2f21cd9c0d8aa26725bf8930e4691d645&lang=es&services%5B%5D=bkt195382&version=5&src=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&srvsrc=https%3A%2F%2Fcitaconsular.es&_=1759407880183
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/onlinebookings/getservices/?callback=jQuery2110376749665247451_1759407880176&type=default&publickey=2f21cd9c0d8aa26725bf8930e4691d645&lang=es&services%5B%5D=bkt195382&version=5&src=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&srvsrc=https%3A%2F%2Fcitaconsular.es&_=1759407880183"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:48 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/onlinebookings/getservices/?callback=jQuery2110376749665247451_1759407880176&type=default&publickey=2f21cd9c0d8aa26725bf8930e4691d645&lang=es&services%5B%5D=bkt195382&version=5&src=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&srvsrc=https%3A%2F%2Fcitaconsular.es&_=1759407880183"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://www.citaconsular.es/onlinebookings/getservices/?callback=jQuery2110376749665247451_1759407880176&type=default&publickey=2f21cd9c0d8aa26725bf8930e4691d645&lang=es&services%5B%5D=bkt195382&version=5&src=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&srvsrc=https%3A%2F%2Fcitaconsular.es&_=1759407880183
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/onlinebookings/getservices/?callback=jQuery2110376749665247451_1759407880176&type=default&publickey=2f21cd9c0d8aa26725bf8930e4691d645&lang=es&services%5B%5D=bkt195382&version=5&src=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&srvsrc=https%3A%2F%2Fcitaconsular.es&_=1759407880183"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "cache-control",
    "value": "no-store, no-cache, must-revalidate"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "309"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:48 GMT"
  },
  {
    "name": "expires",
    "value": "Thu, 19 Nov 1981 08:52:00 GMT"
  },
  {
    "name": "pragma",
    "value": "no-cache"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PHP/7.2.34"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
callback=jQuery2110376749665247451_1759407880176({"Services":[{"id":"bkt195382","groups_id":"bkt45144","name":"Certificaci\u00f3n de Nacimiento para obtenci\u00f3n del DNI","price":null,"prepay":"0","price_no_prepay":null,"public_price":"0","multiservice":"2","multiservice_number":"1","multiservice_number_min":"1","multiselect":"0","price_conf_type":"1","min_price":null,"description":null,"video_call":"0","groupname":"Copias de Certificaciones","symbol":"\u20ac"}],"Agendas":[],"ExtraServices":[]});
```

- Endpoint: GET https://citaconsular.es/onlinebookings/getagendas/?callback=jQuery2110376749665247451_1759407880176&type=default&publickey=2f21cd9c0d8aa26725bf8930e4691d645&lang=es&services%5B%5D=bkt195382&version=5&src=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&srvsrc=https%3A%2F%2Fcitaconsular.es&selectedPeople=1&_=1759407880184
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/onlinebookings/getagendas/?callback=jQuery2110376749665247451_1759407880176&type=default&publickey=2f21cd9c0d8aa26725bf8930e4691d645&lang=es&services%5B%5D=bkt195382&version=5&src=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&srvsrc=https%3A%2F%2Fcitaconsular.es&selectedPeople=1&_=1759407880184"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:49 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/onlinebookings/getagendas/?callback=jQuery2110376749665247451_1759407880176&type=default&publickey=2f21cd9c0d8aa26725bf8930e4691d645&lang=es&services%5B%5D=bkt195382&version=5&src=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&srvsrc=https%3A%2F%2Fcitaconsular.es&selectedPeople=1&_=1759407880184"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://www.citaconsular.es/onlinebookings/getagendas/?callback=jQuery2110376749665247451_1759407880176&type=default&publickey=2f21cd9c0d8aa26725bf8930e4691d645&lang=es&services%5B%5D=bkt195382&version=5&src=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&srvsrc=https%3A%2F%2Fcitaconsular.es&selectedPeople=1&_=1759407880184
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/onlinebookings/getagendas/?callback=jQuery2110376749665247451_1759407880176&type=default&publickey=2f21cd9c0d8aa26725bf8930e4691d645&lang=es&services%5B%5D=bkt195382&version=5&src=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&srvsrc=https%3A%2F%2Fcitaconsular.es&selectedPeople=1&_=1759407880184"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "cache-control",
    "value": "no-store, no-cache, must-revalidate"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "206"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:49 GMT"
  },
  {
    "name": "expires",
    "value": "Thu, 19 Nov 1981 08:52:00 GMT"
  },
  {
    "name": "pragma",
    "value": "no-cache"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PHP/7.2.34"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
callback=jQuery2110376749665247451_1759407880176({"Agendas":[{"id":"bkt93764","name":"Certificaciones \u00fanicas","photo":"https:\/\/citaconsular.es\/images\/uploads\/agendas\/VDNQNF0-UzcPaAUw-certificaciones-unicas.gif"}]});
```

- Endpoint: GET https://citaconsular.es/onlinebookings/datetime/?callback=jQuery2110376749665247451_1759407880176&type=default&publickey=2f21cd9c0d8aa26725bf8930e4691d645&lang=es&services%5B%5D=bkt195382&agendas%5B%5D=bkt93764&version=5&src=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&srvsrc=https%3A%2F%2Fcitaconsular.es&start=2025-10-01&end=2025-10-31&selectedPeople=1&_=1759407880185
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/onlinebookings/datetime/?callback=jQuery2110376749665247451_1759407880176&type=default&publickey=2f21cd9c0d8aa26725bf8930e4691d645&lang=es&services%5B%5D=bkt195382&agendas%5B%5D=bkt93764&version=5&src=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&srvsrc=https%3A%2F%2Fcitaconsular.es&start=2025-10-01&end=2025-10-31&selectedPeople=1&_=1759407880185"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:49 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/onlinebookings/datetime/?callback=jQuery2110376749665247451_1759407880176&type=default&publickey=2f21cd9c0d8aa26725bf8930e4691d645&lang=es&services%5B%5D=bkt195382&agendas%5B%5D=bkt93764&version=5&src=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&srvsrc=https%3A%2F%2Fcitaconsular.es&start=2025-10-01&end=2025-10-31&selectedPeople=1&_=1759407880185"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://www.citaconsular.es/images/widgets/default/datetime/cal.png
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/images/widgets/default/datetime/cal.png"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "priority",
    "value": "i"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/css/widgets/maec.css?v=5"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "image"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-origin"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-length",
    "value": "1803"
  },
  {
    "name": "content-type",
    "value": "image/png"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:49 GMT"
  },
  {
    "name": "etag",
    "value": "\"70b-5d89b4b92ddc0\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:49 GMT"
  },
  {
    "name": "last-modified",
    "value": "Tue, 22 Feb 2022 13:26:23 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABippVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczpJcHRjNHhtcENvcmU9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBDb3JlLzEuMC94bWxucy8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMTgwMTE3NDA3MjA2ODExOTEwOUYzMDU2NDZFQjU3RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpENjg3Q0E0MUEwOTExMUU0QTc3NEU2RDA4M0E5NTE3RiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpENjg3Q0E0MEEwOTExMUU0QTc3NEU2RDA4M0E5NTE3RiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIiBwaG90b3Nob3A6QXV0aG9yc1Bvc2l0aW9uPSJQYXJ0bmVyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDQ4MDExNzQwNzIwNjgxMTgyMkFGN0NBREM3RTk2QUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDE4MDExNzQwNzIwNjgxMTkxMDlGMzA1NjQ2RUI1N0QiLz4gPGRjOmNyZWF0b3I+IDxyZGY6U2VxPiA8cmRmOmxpPkdlb2ZmIFRlZWhhbjwvcmRmOmxpPiA8L3JkZjpTZXE+IDwvZGM6Y3JlYXRvcj4gPGRjOnRpdGxlPiA8cmRmOkFsdD4gPHJkZjpsaSB4bWw6bGFuZz0ieC1kZWZhdWx0Ij5pUGhvbmUgUmV0aW5hIEdVSSBQU0Q8L3JkZjpsaT4gPC9yZGY6QWx0PiA8L2RjOnRpdGxlPiA8SXB0YzR4bXBDb3JlOkNyZWF0b3JDb250YWN0SW5mbyBJcHRjNHhtcENvcmU6Q2lBZHJFeHRhZHI9IjEwOSBBdGxhbnRpYyBBdmUiIElwdGM0eG1wQ29yZTpDaUFkckNpdHk9IlRvcm9udG8iIElwdGM0eG1wQ29yZTpDaUFkclJlZ2lvbj0iT04iIElwdGM0eG1wQ29yZTpDaUFkckN0cnk9IkNhbmFkYSIgSXB0YzR4bXBDb3JlOkNpVGVsV29yaz0iNDE2IDM0MCA4NjY2IiBJcHRjNHhtcENvcmU6Q2lFbWFpbFdvcms9Imdlb2ZmQHRlZWhhbmxheC5jb20iIElwdGM0eG1wQ29y
... [truncated]
```

- Endpoint: GET https://www.citaconsular.es/images/widgets/default/datetime/der.png
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/images/widgets/default/datetime/der.png"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "priority",
    "value": "i"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/css/widgets/maec.css?v=5"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "image"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-origin"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-length",
    "value": "1806"
  },
  {
    "name": "content-type",
    "value": "image/png"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:49 GMT"
  },
  {
    "name": "etag",
    "value": "\"70e-5d89b4b92ddc0\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:49 GMT"
  },
  {
    "name": "last-modified",
    "value": "Tue, 22 Feb 2022 13:26:23 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
iVBORw0KGgoAAAANSUhEUgAAAAcAAAALCAYAAACzkJeoAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABippVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczpJcHRjNHhtcENvcmU9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBDb3JlLzEuMC94bWxucy8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMTgwMTE3NDA3MjA2ODExOTEwOUYzMDU2NDZFQjU3RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpENjg3Q0EzREEwOTExMUU0QTc3NEU2RDA4M0E5NTE3RiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpENjg3Q0EzQ0EwOTExMUU0QTc3NEU2RDA4M0E5NTE3RiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIiBwaG90b3Nob3A6QXV0aG9yc1Bvc2l0aW9uPSJQYXJ0bmVyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDQ4MDExNzQwNzIwNjgxMTgyMkFGN0NBREM3RTk2QUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDE4MDExNzQwNzIwNjgxMTkxMDlGMzA1NjQ2RUI1N0QiLz4gPGRjOmNyZWF0b3I+IDxyZGY6U2VxPiA8cmRmOmxpPkdlb2ZmIFRlZWhhbjwvcmRmOmxpPiA8L3JkZjpTZXE+IDwvZGM6Y3JlYXRvcj4gPGRjOnRpdGxlPiA8cmRmOkFsdD4gPHJkZjpsaSB4bWw6bGFuZz0ieC1kZWZhdWx0Ij5pUGhvbmUgUmV0aW5hIEdVSSBQU0Q8L3JkZjpsaT4gPC9yZGY6QWx0PiA8L2RjOnRpdGxlPiA8SXB0YzR4bXBDb3JlOkNyZWF0b3JDb250YWN0SW5mbyBJcHRjNHhtcENvcmU6Q2lBZHJFeHRhZHI9IjEwOSBBdGxhbnRpYyBBdmUiIElwdGM0eG1wQ29yZTpDaUFkckNpdHk9IlRvcm9udG8iIElwdGM0eG1wQ29yZTpDaUFkclJlZ2lvbj0iT04iIElwdGM0eG1wQ29yZTpDaUFkckN0cnk9IkNhbmFkYSIgSXB0YzR4bXBDb3JlOkNpVGVsV29yaz0iNDE2IDM0MCA4NjY2IiBJcHRjNHhtcENvcmU6Q2lFbWFpbFdvcms9Imdlb2ZmQHRlZWhhbmxheC5jb20iIElwdGM0eG1wQ29y
... [truncated]
```

- Endpoint: GET https://www.citaconsular.es/images/widgets/default/datetime/izq.png
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/images/widgets/default/datetime/izq.png"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "priority",
    "value": "i"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/css/widgets/maec.css?v=5"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "image"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-origin"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "accept-ranges",
    "value": "bytes"
  },
  {
    "name": "cache-control",
    "value": "max-age=3600"
  },
  {
    "name": "content-length",
    "value": "1798"
  },
  {
    "name": "content-type",
    "value": "image/png"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:49 GMT"
  },
  {
    "name": "etag",
    "value": "\"706-5d89b4b92ddc0\""
  },
  {
    "name": "expires",
    "value": "Thu, 02 Oct 2025 13:24:49 GMT"
  },
  {
    "name": "last-modified",
    "value": "Tue, 22 Feb 2022 13:26:23 GMT"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
iVBORw0KGgoAAAANSUhEUgAAAAcAAAALCAYAAACzkJeoAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABippVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczpJcHRjNHhtcENvcmU9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBDb3JlLzEuMC94bWxucy8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMTgwMTE3NDA3MjA2ODExOTEwOUYzMDU2NDZFQjU3RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowMjIzMDY3RUEwODIxMUU0QTc3NEU2RDA4M0E5NTE3RiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowMjIzMDY3REEwODIxMUU0QTc3NEU2RDA4M0E5NTE3RiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIiBwaG90b3Nob3A6QXV0aG9yc1Bvc2l0aW9uPSJQYXJ0bmVyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDQ4MDExNzQwNzIwNjgxMTgyMkFGN0NBREM3RTk2QUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDE4MDExNzQwNzIwNjgxMTkxMDlGMzA1NjQ2RUI1N0QiLz4gPGRjOmNyZWF0b3I+IDxyZGY6U2VxPiA8cmRmOmxpPkdlb2ZmIFRlZWhhbjwvcmRmOmxpPiA8L3JkZjpTZXE+IDwvZGM6Y3JlYXRvcj4gPGRjOnRpdGxlPiA8cmRmOkFsdD4gPHJkZjpsaSB4bWw6bGFuZz0ieC1kZWZhdWx0Ij5pUGhvbmUgUmV0aW5hIEdVSSBQU0Q8L3JkZjpsaT4gPC9yZGY6QWx0PiA8L2RjOnRpdGxlPiA8SXB0YzR4bXBDb3JlOkNyZWF0b3JDb250YWN0SW5mbyBJcHRjNHhtcENvcmU6Q2lBZHJFeHRhZHI9IjEwOSBBdGxhbnRpYyBBdmUiIElwdGM0eG1wQ29yZTpDaUFkckNpdHk9IlRvcm9udG8iIElwdGM0eG1wQ29yZTpDaUFkclJlZ2lvbj0iT04iIElwdGM0eG1wQ29yZTpDaUFkckN0cnk9IkNhbmFkYSIgSXB0YzR4bXBDb3JlOkNpVGVsV29yaz0iNDE2IDM0MCA4NjY2IiBJcHRjNHhtcENvcmU6Q2lFbWFpbFdvcms9Imdlb2ZmQHRlZWhhbmxheC5jb20iIElwdGM0eG1wQ29y
... [truncated]
```

- Endpoint: GET https://www.citaconsular.es/onlinebookings/datetime/?callback=jQuery2110376749665247451_1759407880176&type=default&publickey=2f21cd9c0d8aa26725bf8930e4691d645&lang=es&services%5B%5D=bkt195382&agendas%5B%5D=bkt93764&version=5&src=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&srvsrc=https%3A%2F%2Fcitaconsular.es&start=2025-10-01&end=2025-10-31&selectedPeople=1&_=1759407880185
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/onlinebookings/datetime/?callback=jQuery2110376749665247451_1759407880176&type=default&publickey=2f21cd9c0d8aa26725bf8930e4691d645&lang=es&services%5B%5D=bkt195382&agendas%5B%5D=bkt93764&version=5&src=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&srvsrc=https%3A%2F%2Fcitaconsular.es&start=2025-10-01&end=2025-10-31&selectedPeople=1&_=1759407880185"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "cache-control",
    "value": "no-store, no-cache, must-revalidate"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "104"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:50 GMT"
  },
  {
    "name": "expires",
    "value": "Thu, 19 Nov 1981 08:52:00 GMT"
  },
  {
    "name": "pragma",
    "value": "no-cache"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PHP/7.2.34"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
callback=jQuery2110376749665247451_1759407880176({"Slots":[],"maxDays":"2025-10-02"});
```

- Endpoint: GET https://citaconsular.es/onlinebookings/datetime/?callback=jQuery2110376749665247451_1759407880176&type=default&publickey=2f21cd9c0d8aa26725bf8930e4691d645&lang=es&services%5B%5D=bkt195382&agendas%5B%5D=bkt93764&version=5&src=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&srvsrc=https%3A%2F%2Fcitaconsular.es&start=2025-11-01&end=2025-11-30&selectedPeople=1&_=1759407880186
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/onlinebookings/datetime/?callback=jQuery2110376749665247451_1759407880176&type=default&publickey=2f21cd9c0d8aa26725bf8930e4691d645&lang=es&services%5B%5D=bkt195382&agendas%5B%5D=bkt93764&version=5&src=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&srvsrc=https%3A%2F%2Fcitaconsular.es&start=2025-11-01&end=2025-11-30&selectedPeople=1&_=1759407880186"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:50 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/onlinebookings/datetime/?callback=jQuery2110376749665247451_1759407880176&type=default&publickey=2f21cd9c0d8aa26725bf8930e4691d645&lang=es&services%5B%5D=bkt195382&agendas%5B%5D=bkt93764&version=5&src=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&srvsrc=https%3A%2F%2Fcitaconsular.es&start=2025-11-01&end=2025-11-30&selectedPeople=1&_=1759407880186"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://www.citaconsular.es/onlinebookings/datetime/?callback=jQuery2110376749665247451_1759407880176&type=default&publickey=2f21cd9c0d8aa26725bf8930e4691d645&lang=es&services%5B%5D=bkt195382&agendas%5B%5D=bkt93764&version=5&src=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&srvsrc=https%3A%2F%2Fcitaconsular.es&start=2025-11-01&end=2025-11-30&selectedPeople=1&_=1759407880186
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/onlinebookings/datetime/?callback=jQuery2110376749665247451_1759407880176&type=default&publickey=2f21cd9c0d8aa26725bf8930e4691d645&lang=es&services%5B%5D=bkt195382&agendas%5B%5D=bkt93764&version=5&src=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&srvsrc=https%3A%2F%2Fcitaconsular.es&start=2025-11-01&end=2025-11-30&selectedPeople=1&_=1759407880186"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "cache-control",
    "value": "no-store, no-cache, must-revalidate"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "104"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:51 GMT"
  },
  {
    "name": "expires",
    "value": "Thu, 19 Nov 1981 08:52:00 GMT"
  },
  {
    "name": "pragma",
    "value": "no-cache"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PHP/7.2.34"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
callback=jQuery2110376749665247451_1759407880176({"Slots":[],"maxDays":"2025-10-02"});
```

- Endpoint: GET https://citaconsular.es/onlinebookings/datetime/?callback=jQuery2110376749665247451_1759407880176&type=default&publickey=2f21cd9c0d8aa26725bf8930e4691d645&lang=es&services%5B%5D=bkt195382&agendas%5B%5D=bkt93764&version=5&src=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&srvsrc=https%3A%2F%2Fcitaconsular.es&start=2025-12-01&end=2025-12-31&selectedPeople=1&_=1759407880187
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/onlinebookings/datetime/?callback=jQuery2110376749665247451_1759407880176&type=default&publickey=2f21cd9c0d8aa26725bf8930e4691d645&lang=es&services%5B%5D=bkt195382&agendas%5B%5D=bkt93764&version=5&src=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&srvsrc=https%3A%2F%2Fcitaconsular.es&start=2025-12-01&end=2025-12-31&selectedPeople=1&_=1759407880187"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:51 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/onlinebookings/datetime/?callback=jQuery2110376749665247451_1759407880176&type=default&publickey=2f21cd9c0d8aa26725bf8930e4691d645&lang=es&services%5B%5D=bkt195382&agendas%5B%5D=bkt93764&version=5&src=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&srvsrc=https%3A%2F%2Fcitaconsular.es&start=2025-12-01&end=2025-12-31&selectedPeople=1&_=1759407880187"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://www.citaconsular.es/onlinebookings/datetime/?callback=jQuery2110376749665247451_1759407880176&type=default&publickey=2f21cd9c0d8aa26725bf8930e4691d645&lang=es&services%5B%5D=bkt195382&agendas%5B%5D=bkt93764&version=5&src=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&srvsrc=https%3A%2F%2Fcitaconsular.es&start=2025-12-01&end=2025-12-31&selectedPeople=1&_=1759407880187
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/onlinebookings/datetime/?callback=jQuery2110376749665247451_1759407880176&type=default&publickey=2f21cd9c0d8aa26725bf8930e4691d645&lang=es&services%5B%5D=bkt195382&agendas%5B%5D=bkt93764&version=5&src=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&srvsrc=https%3A%2F%2Fcitaconsular.es&start=2025-12-01&end=2025-12-31&selectedPeople=1&_=1759407880187"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "cache-control",
    "value": "no-store, no-cache, must-revalidate"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "104"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:52 GMT"
  },
  {
    "name": "expires",
    "value": "Thu, 19 Nov 1981 08:52:00 GMT"
  },
  {
    "name": "pragma",
    "value": "no-cache"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PHP/7.2.34"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
callback=jQuery2110376749665247451_1759407880176({"Slots":[],"maxDays":"2025-10-02"});
```

- Endpoint: GET https://citaconsular.es/onlinebookings/datetime/?callback=jQuery2110376749665247451_1759407880176&type=default&publickey=2f21cd9c0d8aa26725bf8930e4691d645&lang=es&services%5B%5D=bkt195382&agendas%5B%5D=bkt93764&version=5&src=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&srvsrc=https%3A%2F%2Fcitaconsular.es&start=2026-01-01&end=2026-01-31&selectedPeople=1&_=1759407880188
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/onlinebookings/datetime/?callback=jQuery2110376749665247451_1759407880176&type=default&publickey=2f21cd9c0d8aa26725bf8930e4691d645&lang=es&services%5B%5D=bkt195382&agendas%5B%5D=bkt93764&version=5&src=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&srvsrc=https%3A%2F%2Fcitaconsular.es&start=2026-01-01&end=2026-01-31&selectedPeople=1&_=1759407880188"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:52 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/onlinebookings/datetime/?callback=jQuery2110376749665247451_1759407880176&type=default&publickey=2f21cd9c0d8aa26725bf8930e4691d645&lang=es&services%5B%5D=bkt195382&agendas%5B%5D=bkt93764&version=5&src=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&srvsrc=https%3A%2F%2Fcitaconsular.es&start=2026-01-01&end=2026-01-31&selectedPeople=1&_=1759407880188"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://www.citaconsular.es/onlinebookings/datetime/?callback=jQuery2110376749665247451_1759407880176&type=default&publickey=2f21cd9c0d8aa26725bf8930e4691d645&lang=es&services%5B%5D=bkt195382&agendas%5B%5D=bkt93764&version=5&src=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&srvsrc=https%3A%2F%2Fcitaconsular.es&start=2026-01-01&end=2026-01-31&selectedPeople=1&_=1759407880188
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/onlinebookings/datetime/?callback=jQuery2110376749665247451_1759407880176&type=default&publickey=2f21cd9c0d8aa26725bf8930e4691d645&lang=es&services%5B%5D=bkt195382&agendas%5B%5D=bkt93764&version=5&src=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&srvsrc=https%3A%2F%2Fcitaconsular.es&start=2026-01-01&end=2026-01-31&selectedPeople=1&_=1759407880188"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "cache-control",
    "value": "no-store, no-cache, must-revalidate"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "104"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:52 GMT"
  },
  {
    "name": "expires",
    "value": "Thu, 19 Nov 1981 08:52:00 GMT"
  },
  {
    "name": "pragma",
    "value": "no-cache"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PHP/7.2.34"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
callback=jQuery2110376749665247451_1759407880176({"Slots":[],"maxDays":"2025-10-02"});
```

- Endpoint: GET https://citaconsular.es/onlinebookings/datetime/?callback=jQuery2110376749665247451_1759407880176&type=default&publickey=2f21cd9c0d8aa26725bf8930e4691d645&lang=es&services%5B%5D=bkt195382&agendas%5B%5D=bkt93764&version=5&src=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&srvsrc=https%3A%2F%2Fcitaconsular.es&start=2026-02-01&end=2026-02-28&selectedPeople=1&_=1759407880189
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/onlinebookings/datetime/?callback=jQuery2110376749665247451_1759407880176&type=default&publickey=2f21cd9c0d8aa26725bf8930e4691d645&lang=es&services%5B%5D=bkt195382&agendas%5B%5D=bkt93764&version=5&src=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&srvsrc=https%3A%2F%2Fcitaconsular.es&start=2026-02-01&end=2026-02-28&selectedPeople=1&_=1759407880189"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:52 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/onlinebookings/datetime/?callback=jQuery2110376749665247451_1759407880176&type=default&publickey=2f21cd9c0d8aa26725bf8930e4691d645&lang=es&services%5B%5D=bkt195382&agendas%5B%5D=bkt93764&version=5&src=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&srvsrc=https%3A%2F%2Fcitaconsular.es&start=2026-02-01&end=2026-02-28&selectedPeople=1&_=1759407880189"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://www.citaconsular.es/onlinebookings/datetime/?callback=jQuery2110376749665247451_1759407880176&type=default&publickey=2f21cd9c0d8aa26725bf8930e4691d645&lang=es&services%5B%5D=bkt195382&agendas%5B%5D=bkt93764&version=5&src=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&srvsrc=https%3A%2F%2Fcitaconsular.es&start=2026-02-01&end=2026-02-28&selectedPeople=1&_=1759407880189
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/onlinebookings/datetime/?callback=jQuery2110376749665247451_1759407880176&type=default&publickey=2f21cd9c0d8aa26725bf8930e4691d645&lang=es&services%5B%5D=bkt195382&agendas%5B%5D=bkt93764&version=5&src=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&srvsrc=https%3A%2F%2Fcitaconsular.es&start=2026-02-01&end=2026-02-28&selectedPeople=1&_=1759407880189"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "cache-control",
    "value": "no-store, no-cache, must-revalidate"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "104"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:53 GMT"
  },
  {
    "name": "expires",
    "value": "Thu, 19 Nov 1981 08:52:00 GMT"
  },
  {
    "name": "pragma",
    "value": "no-cache"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PHP/7.2.34"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
callback=jQuery2110376749665247451_1759407880176({"Slots":[],"maxDays":"2025-10-02"});
```

- Endpoint: GET https://citaconsular.es/onlinebookings/datetime/?callback=jQuery2110376749665247451_1759407880176&type=default&publickey=2f21cd9c0d8aa26725bf8930e4691d645&lang=es&services%5B%5D=bkt195382&agendas%5B%5D=bkt93764&version=5&src=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&srvsrc=https%3A%2F%2Fcitaconsular.es&start=2026-03-01&end=2026-03-31&selectedPeople=1&_=1759407880190
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/onlinebookings/datetime/?callback=jQuery2110376749665247451_1759407880176&type=default&publickey=2f21cd9c0d8aa26725bf8930e4691d645&lang=es&services%5B%5D=bkt195382&agendas%5B%5D=bkt93764&version=5&src=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&srvsrc=https%3A%2F%2Fcitaconsular.es&start=2026-03-01&end=2026-03-31&selectedPeople=1&_=1759407880190"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:53 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/onlinebookings/datetime/?callback=jQuery2110376749665247451_1759407880176&type=default&publickey=2f21cd9c0d8aa26725bf8930e4691d645&lang=es&services%5B%5D=bkt195382&agendas%5B%5D=bkt93764&version=5&src=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&srvsrc=https%3A%2F%2Fcitaconsular.es&start=2026-03-01&end=2026-03-31&selectedPeople=1&_=1759407880190"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://www.citaconsular.es/onlinebookings/datetime/?callback=jQuery2110376749665247451_1759407880176&type=default&publickey=2f21cd9c0d8aa26725bf8930e4691d645&lang=es&services%5B%5D=bkt195382&agendas%5B%5D=bkt93764&version=5&src=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&srvsrc=https%3A%2F%2Fcitaconsular.es&start=2026-03-01&end=2026-03-31&selectedPeople=1&_=1759407880190
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/onlinebookings/datetime/?callback=jQuery2110376749665247451_1759407880176&type=default&publickey=2f21cd9c0d8aa26725bf8930e4691d645&lang=es&services%5B%5D=bkt195382&agendas%5B%5D=bkt93764&version=5&src=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&srvsrc=https%3A%2F%2Fcitaconsular.es&start=2026-03-01&end=2026-03-31&selectedPeople=1&_=1759407880190"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "cache-control",
    "value": "no-store, no-cache, must-revalidate"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "104"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:54 GMT"
  },
  {
    "name": "expires",
    "value": "Thu, 19 Nov 1981 08:52:00 GMT"
  },
  {
    "name": "pragma",
    "value": "no-cache"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PHP/7.2.34"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
callback=jQuery2110376749665247451_1759407880176({"Slots":[],"maxDays":"2025-10-02"});
```

- Endpoint: GET https://citaconsular.es/onlinebookings/datetime/?callback=jQuery2110376749665247451_1759407880176&type=default&publickey=2f21cd9c0d8aa26725bf8930e4691d645&lang=es&services%5B%5D=bkt195382&agendas%5B%5D=bkt93764&version=5&src=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&srvsrc=https%3A%2F%2Fcitaconsular.es&start=2026-04-01&end=2026-04-30&selectedPeople=1&_=1759407880191
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/onlinebookings/datetime/?callback=jQuery2110376749665247451_1759407880176&type=default&publickey=2f21cd9c0d8aa26725bf8930e4691d645&lang=es&services%5B%5D=bkt195382&agendas%5B%5D=bkt93764&version=5&src=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&srvsrc=https%3A%2F%2Fcitaconsular.es&start=2026-04-01&end=2026-04-30&selectedPeople=1&_=1759407880191"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:54 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/onlinebookings/datetime/?callback=jQuery2110376749665247451_1759407880176&type=default&publickey=2f21cd9c0d8aa26725bf8930e4691d645&lang=es&services%5B%5D=bkt195382&agendas%5B%5D=bkt93764&version=5&src=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&srvsrc=https%3A%2F%2Fcitaconsular.es&start=2026-04-01&end=2026-04-30&selectedPeople=1&_=1759407880191"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://www.citaconsular.es/onlinebookings/datetime/?callback=jQuery2110376749665247451_1759407880176&type=default&publickey=2f21cd9c0d8aa26725bf8930e4691d645&lang=es&services%5B%5D=bkt195382&agendas%5B%5D=bkt93764&version=5&src=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&srvsrc=https%3A%2F%2Fcitaconsular.es&start=2026-04-01&end=2026-04-30&selectedPeople=1&_=1759407880191
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/onlinebookings/datetime/?callback=jQuery2110376749665247451_1759407880176&type=default&publickey=2f21cd9c0d8aa26725bf8930e4691d645&lang=es&services%5B%5D=bkt195382&agendas%5B%5D=bkt93764&version=5&src=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&srvsrc=https%3A%2F%2Fcitaconsular.es&start=2026-04-01&end=2026-04-30&selectedPeople=1&_=1759407880191"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "cache-control",
    "value": "no-store, no-cache, must-revalidate"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "104"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:54 GMT"
  },
  {
    "name": "expires",
    "value": "Thu, 19 Nov 1981 08:52:00 GMT"
  },
  {
    "name": "pragma",
    "value": "no-cache"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PHP/7.2.34"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
callback=jQuery2110376749665247451_1759407880176({"Slots":[],"maxDays":"2025-10-02"});
```

- Endpoint: GET https://citaconsular.es/onlinebookings/datetime/?callback=jQuery2110376749665247451_1759407880176&type=default&publickey=2f21cd9c0d8aa26725bf8930e4691d645&lang=es&services%5B%5D=bkt195382&agendas%5B%5D=bkt93764&version=5&src=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&srvsrc=https%3A%2F%2Fcitaconsular.es&start=2026-05-01&end=2026-05-31&selectedPeople=1&_=1759407880192
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/onlinebookings/datetime/?callback=jQuery2110376749665247451_1759407880176&type=default&publickey=2f21cd9c0d8aa26725bf8930e4691d645&lang=es&services%5B%5D=bkt195382&agendas%5B%5D=bkt93764&version=5&src=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&srvsrc=https%3A%2F%2Fcitaconsular.es&start=2026-05-01&end=2026-05-31&selectedPeople=1&_=1759407880192"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:55 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/onlinebookings/datetime/?callback=jQuery2110376749665247451_1759407880176&type=default&publickey=2f21cd9c0d8aa26725bf8930e4691d645&lang=es&services%5B%5D=bkt195382&agendas%5B%5D=bkt93764&version=5&src=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&srvsrc=https%3A%2F%2Fcitaconsular.es&start=2026-05-01&end=2026-05-31&selectedPeople=1&_=1759407880192"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://www.citaconsular.es/onlinebookings/datetime/?callback=jQuery2110376749665247451_1759407880176&type=default&publickey=2f21cd9c0d8aa26725bf8930e4691d645&lang=es&services%5B%5D=bkt195382&agendas%5B%5D=bkt93764&version=5&src=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&srvsrc=https%3A%2F%2Fcitaconsular.es&start=2026-05-01&end=2026-05-31&selectedPeople=1&_=1759407880192
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/onlinebookings/datetime/?callback=jQuery2110376749665247451_1759407880176&type=default&publickey=2f21cd9c0d8aa26725bf8930e4691d645&lang=es&services%5B%5D=bkt195382&agendas%5B%5D=bkt93764&version=5&src=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&srvsrc=https%3A%2F%2Fcitaconsular.es&start=2026-05-01&end=2026-05-31&selectedPeople=1&_=1759407880192"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "cache-control",
    "value": "no-store, no-cache, must-revalidate"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "104"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:55 GMT"
  },
  {
    "name": "expires",
    "value": "Thu, 19 Nov 1981 08:52:00 GMT"
  },
  {
    "name": "pragma",
    "value": "no-cache"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PHP/7.2.34"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
callback=jQuery2110376749665247451_1759407880176({"Slots":[],"maxDays":"2025-10-02"});
```

- Endpoint: GET https://citaconsular.es/onlinebookings/datetime/?callback=jQuery2110376749665247451_1759407880176&type=default&publickey=2f21cd9c0d8aa26725bf8930e4691d645&lang=es&services%5B%5D=bkt195382&agendas%5B%5D=bkt93764&version=5&src=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&srvsrc=https%3A%2F%2Fcitaconsular.es&start=2026-06-01&end=2026-06-30&selectedPeople=1&_=1759407880193
  - Status: 301
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/onlinebookings/datetime/?callback=jQuery2110376749665247451_1759407880176&type=default&publickey=2f21cd9c0d8aa26725bf8930e4691d645&lang=es&services%5B%5D=bkt195382&agendas%5B%5D=bkt93764&version=5&src=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&srvsrc=https%3A%2F%2Fcitaconsular.es&start=2026-06-01&end=2026-06-30&selectedPeople=1&_=1759407880193"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "_ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "content-length",
    "value": "162"
  },
  {
    "name": "content-type",
    "value": "text/html"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:55 GMT"
  },
  {
    "name": "location",
    "value": "https://www.citaconsular.es/onlinebookings/datetime/?callback=jQuery2110376749665247451_1759407880176&type=default&publickey=2f21cd9c0d8aa26725bf8930e4691d645&lang=es&services%5B%5D=bkt195382&agendas%5B%5D=bkt93764&version=5&src=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&srvsrc=https%3A%2F%2Fcitaconsular.es&start=2026-06-01&end=2026-06-30&selectedPeople=1&_=1759407880193"
  },
  {
    "name": "server",
    "value": "nginx"
  }
]
```

- Endpoint: GET https://www.citaconsular.es/onlinebookings/datetime/?callback=jQuery2110376749665247451_1759407880176&type=default&publickey=2f21cd9c0d8aa26725bf8930e4691d645&lang=es&services%5B%5D=bkt195382&agendas%5B%5D=bkt93764&version=5&src=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&srvsrc=https%3A%2F%2Fcitaconsular.es&start=2026-06-01&end=2026-06-30&selectedPeople=1&_=1759407880193
  - Status: 200
  - Request headers:

```json
[
  {
    "name": ":authority",
    "value": "www.citaconsular.es"
  },
  {
    "name": ":method",
    "value": "GET"
  },
  {
    "name": ":path",
    "value": "/onlinebookings/datetime/?callback=jQuery2110376749665247451_1759407880176&type=default&publickey=2f21cd9c0d8aa26725bf8930e4691d645&lang=es&services%5B%5D=bkt195382&agendas%5B%5D=bkt93764&version=5&src=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&srvsrc=https%3A%2F%2Fcitaconsular.es&start=2026-06-01&end=2026-06-30&selectedPeople=1&_=1759407880193"
  },
  {
    "name": ":scheme",
    "value": "https"
  },
  {
    "name": "accept",
    "value": "*/*"
  },
  {
    "name": "accept-encoding",
    "value": "gzip, deflate, br, zstd"
  },
  {
    "name": "accept-language",
    "value": "es-ES,es;q=0.9"
  },
  {
    "name": "cookie",
    "value": "PHPSESSID=0HL2jGyUbQTGltEZuLgim5Zh; _ga=GA1.1.401161725.1759407882; _ga_F3TYSDL945=GS2.1.s1759407881$o1$g0$t1759407881$j60$l0$h0"
  },
  {
    "name": "referer",
    "value": "https://www.citaconsular.es/"
  },
  {
    "name": "sec-ch-ua",
    "value": "\"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\""
  },
  {
    "name": "sec-ch-ua-mobile",
    "value": "?0"
  },
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "sec-fetch-dest",
    "value": "script"
  },
  {
    "name": "sec-fetch-mode",
    "value": "no-cors"
  },
  {
    "name": "sec-fetch-site",
    "value": "same-site"
  },
  {
    "name": "user-agent",
    "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
]
```
  - Response headers:

```json
[
  {
    "name": "cache-control",
    "value": "no-store, no-cache, must-revalidate"
  },
  {
    "name": "content-encoding",
    "value": "gzip"
  },
  {
    "name": "content-length",
    "value": "104"
  },
  {
    "name": "content-type",
    "value": "application/javascript"
  },
  {
    "name": "date",
    "value": "Thu, 02 Oct 2025 12:24:56 GMT"
  },
  {
    "name": "expires",
    "value": "Thu, 19 Nov 1981 08:52:00 GMT"
  },
  {
    "name": "pragma",
    "value": "no-cache"
  },
  {
    "name": "server",
    "value": "nginx"
  },
  {
    "name": "strict-transport-security",
    "value": "max-age=15768000; includeSubDomains"
  },
  {
    "name": "vary",
    "value": "Accept-Encoding,User-Agent"
  },
  {
    "name": "x-frame-options",
    "value": "DENY"
  },
  {
    "name": "x-powered-by",
    "value": "PHP/7.2.34"
  },
  {
    "name": "x-powered-by",
    "value": "PleskLin"
  }
]
```
  - Response body (trunc):

```json
callback=jQuery2110376749665247451_1759407880176({"Slots":[],"maxDays":"2025-10-02"});
```
