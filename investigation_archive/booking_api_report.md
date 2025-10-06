# Informe API de Reserva (POST)

HAR: `investigation_archive/final_test.har`
Total entradas: 636
Candidatas (métodos de escritura): 11

---

### 1. POST https://www.google-analytics.com/g/collect?v=2&tid=G-YHZBSPQRHE&gtm=45je59u1v9123577478za200zd9123577478&_p=1759409224521&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1256142397.1759409225&ul=es-es&sr=1280x720&uaa=x86&uab=64&uafvl=Not%253DA%253FBrand%3B24.0.0.0%7CChromium%3B140.0.7339.186&uamb=0&uam=&uap=Windows&uapv=10.0&uaw=0&are=1&frm=0&pscdl=noapi&_s=1&tag_exp=101509157~103116026~103200004~103233427~104527907~104528500~104684208~104684211~104948813~115480710~115616986&sid=1759409224&sct=1&seg=0&dl=https%3A%2F%2Fwww.exteriores.gob.es%2Fes%2FServiciosAlCiudadano%2FPaginas%2FServicios-consulares.aspx&dt=Servicios%20consulares&en=page_view&_fv=1&_nsi=1&_ss=1&_ee=1&tfd=9316
- Request Content-Type: 
- Response: 204 (text/plain)
- Dump JSON: C:\Users\Maikel\Desktop\CITAScONSULARES\CitaConsulares\investigation_archive\booking_posts\post_001.json
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
    "value": "/g/collect?v=2&tid=G-YHZBSPQRHE&gtm=45je59u1v9123577478za200zd9123577478&_p=1759409224521&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1256142397.1759409225&ul=es-es&sr=1280x720&uaa=x86&uab=64&uafvl=Not%253DA%253FBrand%3B24.0.0.0%7CChromium%3B140.0.7339.186&uamb=0&uam=&uap=Windows&uapv=10.0&uaw=0&are=1&frm=0&pscdl=noapi&_s=1&tag_exp=101509157~103116026~103200004~103233427~104527907~104528500~104684208~104684211~104948813~115480710~115616986&sid=1759409224&sct=1&seg=0&dl=https%3A%2F%2Fwww.exteriores.gob.es%2Fes%2FServiciosAlCiudadano%2FPaginas%2FServicios-consulares.aspx&dt=Servicios%20consulares&en=page_view&_fv=1&_nsi=1&_ss=1&_ee=1&tfd=9316"
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
    "value": "Thu, 02 Oct 2025 12:47:06 GMT"
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
- Repro (curl aproximado):

```bash
curl -i -X POST "https://www.google-analytics.com/g/collect?v=2&tid=G-YHZBSPQRHE&gtm=45je59u1v9123577478za200zd9123577478&_p=1759409224521&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1256142397.1759409225&ul=es-es&sr=1280x720&uaa=x86&uab=64&uafvl=Not%253DA%253FBrand%3B24.0.0.0%7CChromium%3B140.0.7339.186&uamb=0&uam=&uap=Windows&uapv=10.0&uaw=0&are=1&frm=0&pscdl=noapi&_s=1&tag_exp=101509157~103116026~103200004~103233427~104527907~104528500~104684208~104684211~104948813~115480710~115616986&sid=1759409224&sct=1&seg=0&dl=https%3A%2F%2Fwww.exteriores.gob.es%2Fes%2FServiciosAlCiudadano%2FPaginas%2FServicios-consulares.aspx&dt=Servicios%20consulares&en=page_view&_fv=1&_nsi=1&_ss=1&_ee=1&tfd=9316" \
+  -H ":authority: www.google-analytics.com" \
+  -H ":method: POST" \
+  -H ":path: /g/collect?v=2&tid=G-YHZBSPQRHE&gtm=45je59u1v9123577478za200zd9123577478&_p=1759409224521&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1256142397.1759409225&ul=es-es&sr=1280x720&uaa=x86&uab=64&uafvl=Not%253DA%253FBrand%3B24.0.0.0%7CChromium%3B140.0.7339.186&uamb=0&uam=&uap=Windows&uapv=10.0&uaw=0&are=1&frm=0&pscdl=noapi&_s=1&tag_exp=101509157~103116026~103200004~103233427~104527907~104528500~104684208~104684211~104948813~115480710~115616986&sid=1759409224&sct=1&seg=0&dl=https%3A%2F%2Fwww.exteriores.gob.es%2Fes%2FServiciosAlCiudadano%2FPaginas%2FServicios-consulares.aspx&dt=Servicios%20consulares&en=page_view&_fv=1&_nsi=1&_ss=1&_ee=1&tfd=9316" \
+  -H ":scheme: https" \
+  -H "accept: */*" \
+  -H "accept-encoding: gzip, deflate, br, zstd" \
+  -H "accept-language: es-ES,es;q=0.9" \
+  -H "content-length: 0" \
+  -H "origin: https://www.exteriores.gob.es" \
+  -H "priority: u=1, i" \
+  -H "referer: https://www.exteriores.gob.es/" \
+  -H "sec-ch-ua: \"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\"" \
+  -H "sec-ch-ua-mobile: ?0" \
+  -H "sec-ch-ua-platform: \"Windows\"" \
+  -H "sec-fetch-dest: empty" \
+  -H "sec-fetch-mode: no-cors" \
+  -H "sec-fetch-site: cross-site" \
+  -H "sec-fetch-storage-access: active" \
+  -H "user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
```

---

### 2. POST https://www.google-analytics.com/g/collect?v=2&tid=G-YHZBSPQRHE&gtm=45je59u1v9123577478za200zd9123577478&_p=1759409224521&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1256142397.1759409225&ul=es-es&sr=1280x720&uaa=x86&uab=64&uafvl=Not%253DA%253FBrand%3B24.0.0.0%7CChromium%3B140.0.7339.186&uamb=0&uam=&uap=Windows&uapv=10.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AAAAAAQ&_s=2&tag_exp=101509157~103116026~103200004~103233427~104527907~104528500~104684208~104684211~104948813~115480710~115616986&sid=1759409224&sct=1&seg=0&dl=https%3A%2F%2Fwww.exteriores.gob.es%2Fes%2FServiciosAlCiudadano%2FPaginas%2FServicios-consulares.aspx&dt=Servicios%20consulares&en=user_engagement&_et=5447&tfd=14763
- Request Content-Type: 
- Response: -1 ()
- Dump JSON: C:\Users\Maikel\Desktop\CITAScONSULARES\CitaConsulares\investigation_archive\booking_posts\post_002.json
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
- Repro (curl aproximado):

```bash
curl -i -X POST "https://www.google-analytics.com/g/collect?v=2&tid=G-YHZBSPQRHE&gtm=45je59u1v9123577478za200zd9123577478&_p=1759409224521&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1256142397.1759409225&ul=es-es&sr=1280x720&uaa=x86&uab=64&uafvl=Not%253DA%253FBrand%3B24.0.0.0%7CChromium%3B140.0.7339.186&uamb=0&uam=&uap=Windows&uapv=10.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AAAAAAQ&_s=2&tag_exp=101509157~103116026~103200004~103233427~104527907~104528500~104684208~104684211~104948813~115480710~115616986&sid=1759409224&sct=1&seg=0&dl=https%3A%2F%2Fwww.exteriores.gob.es%2Fes%2FServiciosAlCiudadano%2FPaginas%2FServicios-consulares.aspx&dt=Servicios%20consulares&en=user_engagement&_et=5447&tfd=14763" \
+  -H "sec-ch-ua-platform: \"Windows\"" \
+  -H "Referer: https://www.exteriores.gob.es/" \
+  -H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" \
+  -H "sec-ch-ua: \"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\"" \
+  -H "sec-ch-ua-mobile: ?0"
```

---

### 3. POST https://www.google-analytics.com/g/collect?v=2&tid=G-YHZBSPQRHE&gtm=45je59u1v9123577478za200zd9123577478&_p=1759409231837&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1256142397.1759409225&ul=es-es&sr=1280x720&uaa=x86&uab=64&uafvl=Not%253DA%253FBrand%3B24.0.0.0%7CChromium%3B140.0.7339.186&uamb=0&uam=&uap=Windows&uapv=10.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AAAAAAQ&_s=1&tag_exp=101509157~103116026~103200004~103233427~104527907~104528500~104684208~104684211~104948813~115480710~115650524~115650526&sid=1759409224&sct=1&seg=1&dl=https%3A%2F%2Fwww.exteriores.gob.es%2Fes%2FServiciosAlCiudadano%2FPaginas%2FServicios-consulares.aspx%3Fscco%3DCuba%26scd%3D166%26scca%3DCertificados%26scs%3DCertificado%2Bde%2Bnacimiento&dr=https%3A%2F%2Fwww.exteriores.gob.es%2Fes%2FServiciosAlCiudadano%2FPaginas%2FServicios-consulares.aspx&dt=Servicios%20consulares&en=page_view&_ee=1&tfd=12509
- Request Content-Type: 
- Response: 204 (text/plain)
- Dump JSON: C:\Users\Maikel\Desktop\CITAScONSULARES\CitaConsulares\investigation_archive\booking_posts\post_003.json
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
    "value": "/g/collect?v=2&tid=G-YHZBSPQRHE&gtm=45je59u1v9123577478za200zd9123577478&_p=1759409231837&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1256142397.1759409225&ul=es-es&sr=1280x720&uaa=x86&uab=64&uafvl=Not%253DA%253FBrand%3B24.0.0.0%7CChromium%3B140.0.7339.186&uamb=0&uam=&uap=Windows&uapv=10.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AAAAAAQ&_s=1&tag_exp=101509157~103116026~103200004~103233427~104527907~104528500~104684208~104684211~104948813~115480710~115650524~115650526&sid=1759409224&sct=1&seg=1&dl=https%3A%2F%2Fwww.exteriores.gob.es%2Fes%2FServiciosAlCiudadano%2FPaginas%2FServicios-consulares.aspx%3Fscco%3DCuba%26scd%3D166%26scca%3DCertificados%26scs%3DCertificado%2Bde%2Bnacimiento&dr=https%3A%2F%2Fwww.exteriores.gob.es%2Fes%2FServiciosAlCiudadano%2FPaginas%2FServicios-consulares.aspx&dt=Servicios%20consulares&en=page_view&_ee=1&tfd=12509"
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
    "value": "Thu, 02 Oct 2025 12:47:17 GMT"
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
- Repro (curl aproximado):

```bash
curl -i -X POST "https://www.google-analytics.com/g/collect?v=2&tid=G-YHZBSPQRHE&gtm=45je59u1v9123577478za200zd9123577478&_p=1759409231837&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1256142397.1759409225&ul=es-es&sr=1280x720&uaa=x86&uab=64&uafvl=Not%253DA%253FBrand%3B24.0.0.0%7CChromium%3B140.0.7339.186&uamb=0&uam=&uap=Windows&uapv=10.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AAAAAAQ&_s=1&tag_exp=101509157~103116026~103200004~103233427~104527907~104528500~104684208~104684211~104948813~115480710~115650524~115650526&sid=1759409224&sct=1&seg=1&dl=https%3A%2F%2Fwww.exteriores.gob.es%2Fes%2FServiciosAlCiudadano%2FPaginas%2FServicios-consulares.aspx%3Fscco%3DCuba%26scd%3D166%26scca%3DCertificados%26scs%3DCertificado%2Bde%2Bnacimiento&dr=https%3A%2F%2Fwww.exteriores.gob.es%2Fes%2FServiciosAlCiudadano%2FPaginas%2FServicios-consulares.aspx&dt=Servicios%20consulares&en=page_view&_ee=1&tfd=12509" \
+  -H ":authority: www.google-analytics.com" \
+  -H ":method: POST" \
+  -H ":path: /g/collect?v=2&tid=G-YHZBSPQRHE&gtm=45je59u1v9123577478za200zd9123577478&_p=1759409231837&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1256142397.1759409225&ul=es-es&sr=1280x720&uaa=x86&uab=64&uafvl=Not%253DA%253FBrand%3B24.0.0.0%7CChromium%3B140.0.7339.186&uamb=0&uam=&uap=Windows&uapv=10.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AAAAAAQ&_s=1&tag_exp=101509157~103116026~103200004~103233427~104527907~104528500~104684208~104684211~104948813~115480710~115650524~115650526&sid=1759409224&sct=1&seg=1&dl=https%3A%2F%2Fwww.exteriores.gob.es%2Fes%2FServiciosAlCiudadano%2FPaginas%2FServicios-consulares.aspx%3Fscco%3DCuba%26scd%3D166%26scca%3DCertificados%26scs%3DCertificado%2Bde%2Bnacimiento&dr=https%3A%2F%2Fwww.exteriores.gob.es%2Fes%2FServiciosAlCiudadano%2FPaginas%2FServicios-consulares.aspx&dt=Servicios%20consulares&en=page_view&_ee=1&tfd=12509" \
+  -H ":scheme: https" \
+  -H "accept: */*" \
+  -H "accept-encoding: gzip, deflate, br, zstd" \
+  -H "accept-language: es-ES,es;q=0.9" \
+  -H "content-length: 0" \
+  -H "origin: https://www.exteriores.gob.es" \
+  -H "priority: u=1, i" \
+  -H "referer: https://www.exteriores.gob.es/" \
+  -H "sec-ch-ua: \"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\"" \
+  -H "sec-ch-ua-mobile: ?0" \
+  -H "sec-ch-ua-platform: \"Windows\"" \
+  -H "sec-fetch-dest: empty" \
+  -H "sec-fetch-mode: no-cors" \
+  -H "sec-fetch-site: cross-site" \
+  -H "sec-fetch-storage-access: active" \
+  -H "user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
```

---

### 4. POST https://www.google-analytics.com/g/collect?v=2&tid=G-F3TYSDL945&gtm=45je59u1v9106061970z89106055348za200zb9106055348zd9106055348&_p=1759409237793&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1969907303.1759409239&ul=es-es&sr=1280x720&uaa=x86&uab=64&uafvl=Not%253DA%253FBrand%3B24.0.0.0%7CChromium%3B140.0.7339.186&uamb=0&uam=&uap=Windows&uapv=10.0&uaw=0&are=1&frm=0&pscdl=noapi&_s=1&tag_exp=101509157~103116026~103200004~103233427~104527906~104528500~104684208~104684211~104948813~115480709~115650527~115650529~115834633~115834635&sid=1759409238&sct=1&seg=0&dl=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&dr=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&dt=Consulado%20Gral.%20de%20Espa%C3%B1a%20en%20La%20Habana&en=page_view&_fv=1&_nsi=1&_ss=1&ep.RutaWidget=%7Bpage%3A%20%22%22%2F%22%22%20%2B%20Backbone.history.getFragment()%7D&ep.anonymizeIp=true&tfd=3130
- Request Content-Type: 
- Response: 204 (text/plain)
- Dump JSON: C:\Users\Maikel\Desktop\CITAScONSULARES\CitaConsulares\investigation_archive\booking_posts\post_004.json
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
    "value": "/g/collect?v=2&tid=G-F3TYSDL945&gtm=45je59u1v9106061970z89106055348za200zb9106055348zd9106055348&_p=1759409237793&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1969907303.1759409239&ul=es-es&sr=1280x720&uaa=x86&uab=64&uafvl=Not%253DA%253FBrand%3B24.0.0.0%7CChromium%3B140.0.7339.186&uamb=0&uam=&uap=Windows&uapv=10.0&uaw=0&are=1&frm=0&pscdl=noapi&_s=1&tag_exp=101509157~103116026~103200004~103233427~104527906~104528500~104684208~104684211~104948813~115480709~115650527~115650529~115834633~115834635&sid=1759409238&sct=1&seg=0&dl=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&dr=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&dt=Consulado%20Gral.%20de%20Espa%C3%B1a%20en%20La%20Habana&en=page_view&_fv=1&_nsi=1&_ss=1&ep.RutaWidget=%7Bpage%3A%20%22%22%2F%22%22%20%2B%20Backbone.history.getFragment()%7D&ep.anonymizeIp=true&tfd=3130"
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
    "value": "Thu, 02 Oct 2025 12:47:19 GMT"
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
- Repro (curl aproximado):

```bash
curl -i -X POST "https://www.google-analytics.com/g/collect?v=2&tid=G-F3TYSDL945&gtm=45je59u1v9106061970z89106055348za200zb9106055348zd9106055348&_p=1759409237793&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1969907303.1759409239&ul=es-es&sr=1280x720&uaa=x86&uab=64&uafvl=Not%253DA%253FBrand%3B24.0.0.0%7CChromium%3B140.0.7339.186&uamb=0&uam=&uap=Windows&uapv=10.0&uaw=0&are=1&frm=0&pscdl=noapi&_s=1&tag_exp=101509157~103116026~103200004~103233427~104527906~104528500~104684208~104684211~104948813~115480709~115650527~115650529~115834633~115834635&sid=1759409238&sct=1&seg=0&dl=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&dr=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&dt=Consulado%20Gral.%20de%20Espa%C3%B1a%20en%20La%20Habana&en=page_view&_fv=1&_nsi=1&_ss=1&ep.RutaWidget=%7Bpage%3A%20%22%22%2F%22%22%20%2B%20Backbone.history.getFragment()%7D&ep.anonymizeIp=true&tfd=3130" \
+  -H ":authority: www.google-analytics.com" \
+  -H ":method: POST" \
+  -H ":path: /g/collect?v=2&tid=G-F3TYSDL945&gtm=45je59u1v9106061970z89106055348za200zb9106055348zd9106055348&_p=1759409237793&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1969907303.1759409239&ul=es-es&sr=1280x720&uaa=x86&uab=64&uafvl=Not%253DA%253FBrand%3B24.0.0.0%7CChromium%3B140.0.7339.186&uamb=0&uam=&uap=Windows&uapv=10.0&uaw=0&are=1&frm=0&pscdl=noapi&_s=1&tag_exp=101509157~103116026~103200004~103233427~104527906~104528500~104684208~104684211~104948813~115480709~115650527~115650529~115834633~115834635&sid=1759409238&sct=1&seg=0&dl=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&dr=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&dt=Consulado%20Gral.%20de%20Espa%C3%B1a%20en%20La%20Habana&en=page_view&_fv=1&_nsi=1&_ss=1&ep.RutaWidget=%7Bpage%3A%20%22%22%2F%22%22%20%2B%20Backbone.history.getFragment()%7D&ep.anonymizeIp=true&tfd=3130" \
+  -H ":scheme: https" \
+  -H "accept: */*" \
+  -H "accept-encoding: gzip, deflate, br, zstd" \
+  -H "accept-language: es-ES,es;q=0.9" \
+  -H "content-length: 0" \
+  -H "origin: https://www.citaconsular.es" \
+  -H "priority: u=1, i" \
+  -H "referer: https://www.citaconsular.es/" \
+  -H "sec-ch-ua: \"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\"" \
+  -H "sec-ch-ua-mobile: ?0" \
+  -H "sec-ch-ua-platform: \"Windows\"" \
+  -H "sec-fetch-dest: empty" \
+  -H "sec-fetch-mode: no-cors" \
+  -H "sec-fetch-site: cross-site" \
+  -H "sec-fetch-storage-access: active" \
+  -H "user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
```

---

### 5. POST https://www.google-analytics.com/g/collect?v=2&tid=G-F3TYSDL945&gtm=45je59u1v9106061970za200zb9106055348zd9106055348&_p=1759409237793&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1969907303.1759409239&ul=es-es&sr=1280x720&uaa=x86&uab=64&uafvl=Not%253DA%253FBrand%3B24.0.0.0%7CChromium%3B140.0.7339.186&uamb=0&uam=&uap=Windows&uapv=10.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AEAAAAQ&_s=2&tag_exp=101509157~103116026~103200004~103233427~104527906~104528500~104684208~104684211~104948813~115480709~115650527~115650529~115834633~115834635&sid=1759409238&sct=1&seg=0&dl=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&dr=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&dt=Consulado%20Gral.%20de%20Espa%C3%B1a%20en%20La%20Habana&en=scroll&ep.RutaWidget=%7Bpage%3A%20%22%22%2F%22%22%20%2B%20Backbone.history.getFragment()%7D&ep.anonymizeIp=true&epn.percent_scrolled=90&_et=7&tfd=8149
- Request Content-Type: 
- Response: 204 (text/plain)
- Dump JSON: C:\Users\Maikel\Desktop\CITAScONSULARES\CitaConsulares\investigation_archive\booking_posts\post_005.json
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
    "value": "/g/collect?v=2&tid=G-F3TYSDL945&gtm=45je59u1v9106061970za200zb9106055348zd9106055348&_p=1759409237793&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1969907303.1759409239&ul=es-es&sr=1280x720&uaa=x86&uab=64&uafvl=Not%253DA%253FBrand%3B24.0.0.0%7CChromium%3B140.0.7339.186&uamb=0&uam=&uap=Windows&uapv=10.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AEAAAAQ&_s=2&tag_exp=101509157~103116026~103200004~103233427~104527906~104528500~104684208~104684211~104948813~115480709~115650527~115650529~115834633~115834635&sid=1759409238&sct=1&seg=0&dl=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&dr=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&dt=Consulado%20Gral.%20de%20Espa%C3%B1a%20en%20La%20Habana&en=scroll&ep.RutaWidget=%7Bpage%3A%20%22%22%2F%22%22%20%2B%20Backbone.history.getFragment()%7D&ep.anonymizeIp=true&epn.percent_scrolled=90&_et=7&tfd=8149"
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
    "value": "Thu, 02 Oct 2025 12:47:24 GMT"
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
- Repro (curl aproximado):

```bash
curl -i -X POST "https://www.google-analytics.com/g/collect?v=2&tid=G-F3TYSDL945&gtm=45je59u1v9106061970za200zb9106055348zd9106055348&_p=1759409237793&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1969907303.1759409239&ul=es-es&sr=1280x720&uaa=x86&uab=64&uafvl=Not%253DA%253FBrand%3B24.0.0.0%7CChromium%3B140.0.7339.186&uamb=0&uam=&uap=Windows&uapv=10.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AEAAAAQ&_s=2&tag_exp=101509157~103116026~103200004~103233427~104527906~104528500~104684208~104684211~104948813~115480709~115650527~115650529~115834633~115834635&sid=1759409238&sct=1&seg=0&dl=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&dr=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&dt=Consulado%20Gral.%20de%20Espa%C3%B1a%20en%20La%20Habana&en=scroll&ep.RutaWidget=%7Bpage%3A%20%22%22%2F%22%22%20%2B%20Backbone.history.getFragment()%7D&ep.anonymizeIp=true&epn.percent_scrolled=90&_et=7&tfd=8149" \
+  -H ":authority: www.google-analytics.com" \
+  -H ":method: POST" \
+  -H ":path: /g/collect?v=2&tid=G-F3TYSDL945&gtm=45je59u1v9106061970za200zb9106055348zd9106055348&_p=1759409237793&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1969907303.1759409239&ul=es-es&sr=1280x720&uaa=x86&uab=64&uafvl=Not%253DA%253FBrand%3B24.0.0.0%7CChromium%3B140.0.7339.186&uamb=0&uam=&uap=Windows&uapv=10.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AEAAAAQ&_s=2&tag_exp=101509157~103116026~103200004~103233427~104527906~104528500~104684208~104684211~104948813~115480709~115650527~115650529~115834633~115834635&sid=1759409238&sct=1&seg=0&dl=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&dr=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&dt=Consulado%20Gral.%20de%20Espa%C3%B1a%20en%20La%20Habana&en=scroll&ep.RutaWidget=%7Bpage%3A%20%22%22%2F%22%22%20%2B%20Backbone.history.getFragment()%7D&ep.anonymizeIp=true&epn.percent_scrolled=90&_et=7&tfd=8149" \
+  -H ":scheme: https" \
+  -H "accept: */*" \
+  -H "accept-encoding: gzip, deflate, br, zstd" \
+  -H "accept-language: es-ES,es;q=0.9" \
+  -H "content-length: 0" \
+  -H "origin: https://www.citaconsular.es" \
+  -H "priority: u=1, i" \
+  -H "referer: https://www.citaconsular.es/" \
+  -H "sec-ch-ua: \"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\"" \
+  -H "sec-ch-ua-mobile: ?0" \
+  -H "sec-ch-ua-platform: \"Windows\"" \
+  -H "sec-fetch-dest: empty" \
+  -H "sec-fetch-mode: no-cors" \
+  -H "sec-fetch-site: cross-site" \
+  -H "sec-fetch-storage-access: active" \
+  -H "user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
```

---

### 6. POST https://www.google-analytics.com/g/collect?v=2&tid=G-F3TYSDL945&gtm=45je59u1v9106061970za200zb9106055348zd9106055348&_p=1759409237793&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1969907303.1759409239&ul=es-es&sr=1280x720&uaa=x86&uab=64&uafvl=Not%253DA%253FBrand%3B24.0.0.0%7CChromium%3B140.0.7339.186&uamb=0&uam=&uap=Windows&uapv=10.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AAAAAAQ&_s=3&tag_exp=101509157~103116026~103200004~103233427~104527906~104528500~104684208~104684211~104948813~115480709~115650527~115650529~115834633~115834635&sid=1759409238&sct=1&seg=1&dl=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&dr=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&dt=Consulado%20Gral.%20de%20Espa%C3%B1a%20en%20La%20Habana&en=user_engagement&ep.RutaWidget=%7Bpage%3A%20%22%22%2F%22%22%20%2B%20Backbone.history.getFragment()%7D&ep.anonymizeIp=true&_et=56370&tfd=59513
- Request Content-Type: 
- Response: -1 ()
- Dump JSON: C:\Users\Maikel\Desktop\CITAScONSULARES\CitaConsulares\investigation_archive\booking_posts\post_006.json
- Request headers:

```json
[
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "Referer",
    "value": "https://www.citaconsular.es/"
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
- Repro (curl aproximado):

```bash
curl -i -X POST "https://www.google-analytics.com/g/collect?v=2&tid=G-F3TYSDL945&gtm=45je59u1v9106061970za200zb9106055348zd9106055348&_p=1759409237793&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1969907303.1759409239&ul=es-es&sr=1280x720&uaa=x86&uab=64&uafvl=Not%253DA%253FBrand%3B24.0.0.0%7CChromium%3B140.0.7339.186&uamb=0&uam=&uap=Windows&uapv=10.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AAAAAAQ&_s=3&tag_exp=101509157~103116026~103200004~103233427~104527906~104528500~104684208~104684211~104948813~115480709~115650527~115650529~115834633~115834635&sid=1759409238&sct=1&seg=1&dl=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&dr=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&dt=Consulado%20Gral.%20de%20Espa%C3%B1a%20en%20La%20Habana&en=user_engagement&ep.RutaWidget=%7Bpage%3A%20%22%22%2F%22%22%20%2B%20Backbone.history.getFragment()%7D&ep.anonymizeIp=true&_et=56370&tfd=59513" \
+  -H "sec-ch-ua-platform: \"Windows\"" \
+  -H "Referer: https://www.citaconsular.es/" \
+  -H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" \
+  -H "sec-ch-ua: \"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\"" \
+  -H "sec-ch-ua-mobile: ?0"
```

---

### 7. POST https://www.google-analytics.com/g/collect?v=2&tid=G-F3TYSDL945&gtm=45je59u1v9106061970z89106055348za200zb9106055348zd9106055348&_p=1759409301754&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1969907303.1759409239&ul=es-es&sr=1280x720&uaa=x86&uab=64&uafvl=Not%253DA%253FBrand%3B24.0.0.0%7CChromium%3B140.0.7339.186&uamb=0&uam=&uap=Windows&uapv=10.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AAAAAAQ&_s=1&tag_exp=101509157~103116026~103200004~103233427~104527906~104528501~104684208~104684211~104948813~115480710~115650527~115650529~115834633~115834635&sid=1759409238&sct=1&seg=1&dl=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&dr=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&dt=Consulado%20Gral.%20de%20Espa%C3%B1a%20en%20La%20Habana&en=page_view&ep.RutaWidget=%7Bpage%3A%20%22%22%2F%22%22%20%2B%20Backbone.history.getFragment()%7D&ep.anonymizeIp=true&tfd=1427
- Request Content-Type: 
- Response: 204 (text/plain)
- Dump JSON: C:\Users\Maikel\Desktop\CITAScONSULARES\CitaConsulares\investigation_archive\booking_posts\post_007.json
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
    "value": "/g/collect?v=2&tid=G-F3TYSDL945&gtm=45je59u1v9106061970z89106055348za200zb9106055348zd9106055348&_p=1759409301754&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1969907303.1759409239&ul=es-es&sr=1280x720&uaa=x86&uab=64&uafvl=Not%253DA%253FBrand%3B24.0.0.0%7CChromium%3B140.0.7339.186&uamb=0&uam=&uap=Windows&uapv=10.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AAAAAAQ&_s=1&tag_exp=101509157~103116026~103200004~103233427~104527906~104528501~104684208~104684211~104948813~115480710~115650527~115650529~115834633~115834635&sid=1759409238&sct=1&seg=1&dl=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&dr=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&dt=Consulado%20Gral.%20de%20Espa%C3%B1a%20en%20La%20Habana&en=page_view&ep.RutaWidget=%7Bpage%3A%20%22%22%2F%22%22%20%2B%20Backbone.history.getFragment()%7D&ep.anonymizeIp=true&tfd=1427"
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
    "value": "Thu, 02 Oct 2025 12:48:23 GMT"
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
- Repro (curl aproximado):

```bash
curl -i -X POST "https://www.google-analytics.com/g/collect?v=2&tid=G-F3TYSDL945&gtm=45je59u1v9106061970z89106055348za200zb9106055348zd9106055348&_p=1759409301754&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1969907303.1759409239&ul=es-es&sr=1280x720&uaa=x86&uab=64&uafvl=Not%253DA%253FBrand%3B24.0.0.0%7CChromium%3B140.0.7339.186&uamb=0&uam=&uap=Windows&uapv=10.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AAAAAAQ&_s=1&tag_exp=101509157~103116026~103200004~103233427~104527906~104528501~104684208~104684211~104948813~115480710~115650527~115650529~115834633~115834635&sid=1759409238&sct=1&seg=1&dl=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&dr=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&dt=Consulado%20Gral.%20de%20Espa%C3%B1a%20en%20La%20Habana&en=page_view&ep.RutaWidget=%7Bpage%3A%20%22%22%2F%22%22%20%2B%20Backbone.history.getFragment()%7D&ep.anonymizeIp=true&tfd=1427" \
+  -H ":authority: www.google-analytics.com" \
+  -H ":method: POST" \
+  -H ":path: /g/collect?v=2&tid=G-F3TYSDL945&gtm=45je59u1v9106061970z89106055348za200zb9106055348zd9106055348&_p=1759409301754&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1969907303.1759409239&ul=es-es&sr=1280x720&uaa=x86&uab=64&uafvl=Not%253DA%253FBrand%3B24.0.0.0%7CChromium%3B140.0.7339.186&uamb=0&uam=&uap=Windows&uapv=10.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AAAAAAQ&_s=1&tag_exp=101509157~103116026~103200004~103233427~104527906~104528501~104684208~104684211~104948813~115480710~115650527~115650529~115834633~115834635&sid=1759409238&sct=1&seg=1&dl=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&dr=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&dt=Consulado%20Gral.%20de%20Espa%C3%B1a%20en%20La%20Habana&en=page_view&ep.RutaWidget=%7Bpage%3A%20%22%22%2F%22%22%20%2B%20Backbone.history.getFragment()%7D&ep.anonymizeIp=true&tfd=1427" \
+  -H ":scheme: https" \
+  -H "accept: */*" \
+  -H "accept-encoding: gzip, deflate, br, zstd" \
+  -H "accept-language: es-ES,es;q=0.9" \
+  -H "content-length: 0" \
+  -H "origin: https://www.citaconsular.es" \
+  -H "priority: u=1, i" \
+  -H "referer: https://www.citaconsular.es/" \
+  -H "sec-ch-ua: \"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\"" \
+  -H "sec-ch-ua-mobile: ?0" \
+  -H "sec-ch-ua-platform: \"Windows\"" \
+  -H "sec-fetch-dest: empty" \
+  -H "sec-fetch-mode: no-cors" \
+  -H "sec-fetch-site: cross-site" \
+  -H "sec-fetch-storage-access: active" \
+  -H "user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
```

---

### 8. POST https://www.google-analytics.com/g/collect?v=2&tid=G-F3TYSDL945&gtm=45je59u1v9106061970za200zb9106055348zd9106055348&_p=1759409301754&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1969907303.1759409239&ul=es-es&sr=1280x720&uaa=x86&uab=64&uafvl=Not%253DA%253FBrand%3B24.0.0.0%7CChromium%3B140.0.7339.186&uamb=0&uam=&uap=Windows&uapv=10.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AEAAAAQ&_s=2&tag_exp=101509157~103116026~103200004~103233427~104527906~104528501~104684208~104684211~104948813~115480710~115650527~115650529~115834633~115834635&sid=1759409238&sct=1&seg=1&dl=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&dr=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&dt=Consulado%20Gral.%20de%20Espa%C3%B1a%20en%20La%20Habana&en=scroll&ep.RutaWidget=%7Bpage%3A%20%22%22%2F%22%22%20%2B%20Backbone.history.getFragment()%7D&ep.anonymizeIp=true&epn.percent_scrolled=90&_et=4&tfd=6444
- Request Content-Type: 
- Response: 204 (text/plain)
- Dump JSON: C:\Users\Maikel\Desktop\CITAScONSULARES\CitaConsulares\investigation_archive\booking_posts\post_008.json
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
    "value": "/g/collect?v=2&tid=G-F3TYSDL945&gtm=45je59u1v9106061970za200zb9106055348zd9106055348&_p=1759409301754&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1969907303.1759409239&ul=es-es&sr=1280x720&uaa=x86&uab=64&uafvl=Not%253DA%253FBrand%3B24.0.0.0%7CChromium%3B140.0.7339.186&uamb=0&uam=&uap=Windows&uapv=10.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AEAAAAQ&_s=2&tag_exp=101509157~103116026~103200004~103233427~104527906~104528501~104684208~104684211~104948813~115480710~115650527~115650529~115834633~115834635&sid=1759409238&sct=1&seg=1&dl=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&dr=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&dt=Consulado%20Gral.%20de%20Espa%C3%B1a%20en%20La%20Habana&en=scroll&ep.RutaWidget=%7Bpage%3A%20%22%22%2F%22%22%20%2B%20Backbone.history.getFragment()%7D&ep.anonymizeIp=true&epn.percent_scrolled=90&_et=4&tfd=6444"
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
    "value": "Thu, 02 Oct 2025 12:48:28 GMT"
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
- Repro (curl aproximado):

```bash
curl -i -X POST "https://www.google-analytics.com/g/collect?v=2&tid=G-F3TYSDL945&gtm=45je59u1v9106061970za200zb9106055348zd9106055348&_p=1759409301754&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1969907303.1759409239&ul=es-es&sr=1280x720&uaa=x86&uab=64&uafvl=Not%253DA%253FBrand%3B24.0.0.0%7CChromium%3B140.0.7339.186&uamb=0&uam=&uap=Windows&uapv=10.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AEAAAAQ&_s=2&tag_exp=101509157~103116026~103200004~103233427~104527906~104528501~104684208~104684211~104948813~115480710~115650527~115650529~115834633~115834635&sid=1759409238&sct=1&seg=1&dl=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&dr=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&dt=Consulado%20Gral.%20de%20Espa%C3%B1a%20en%20La%20Habana&en=scroll&ep.RutaWidget=%7Bpage%3A%20%22%22%2F%22%22%20%2B%20Backbone.history.getFragment()%7D&ep.anonymizeIp=true&epn.percent_scrolled=90&_et=4&tfd=6444" \
+  -H ":authority: www.google-analytics.com" \
+  -H ":method: POST" \
+  -H ":path: /g/collect?v=2&tid=G-F3TYSDL945&gtm=45je59u1v9106061970za200zb9106055348zd9106055348&_p=1759409301754&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1969907303.1759409239&ul=es-es&sr=1280x720&uaa=x86&uab=64&uafvl=Not%253DA%253FBrand%3B24.0.0.0%7CChromium%3B140.0.7339.186&uamb=0&uam=&uap=Windows&uapv=10.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AEAAAAQ&_s=2&tag_exp=101509157~103116026~103200004~103233427~104527906~104528501~104684208~104684211~104948813~115480710~115650527~115650529~115834633~115834635&sid=1759409238&sct=1&seg=1&dl=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&dr=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&dt=Consulado%20Gral.%20de%20Espa%C3%B1a%20en%20La%20Habana&en=scroll&ep.RutaWidget=%7Bpage%3A%20%22%22%2F%22%22%20%2B%20Backbone.history.getFragment()%7D&ep.anonymizeIp=true&epn.percent_scrolled=90&_et=4&tfd=6444" \
+  -H ":scheme: https" \
+  -H "accept: */*" \
+  -H "accept-encoding: gzip, deflate, br, zstd" \
+  -H "accept-language: es-ES,es;q=0.9" \
+  -H "content-length: 0" \
+  -H "origin: https://www.citaconsular.es" \
+  -H "priority: u=1, i" \
+  -H "referer: https://www.citaconsular.es/" \
+  -H "sec-ch-ua: \"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\"" \
+  -H "sec-ch-ua-mobile: ?0" \
+  -H "sec-ch-ua-platform: \"Windows\"" \
+  -H "sec-fetch-dest: empty" \
+  -H "sec-fetch-mode: no-cors" \
+  -H "sec-fetch-site: cross-site" \
+  -H "sec-fetch-storage-access: active" \
+  -H "user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
```

---

### 9. POST https://www.google-analytics.com/g/collect?v=2&tid=G-F3TYSDL945&gtm=45je59u1v9106061970za200zb9106055348zd9106055348&_p=1759409301754&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1969907303.1759409239&ul=es-es&sr=1280x720&uaa=x86&uab=64&uafvl=Not%253DA%253FBrand%3B24.0.0.0%7CChromium%3B140.0.7339.186&uamb=0&uam=&uap=Windows&uapv=10.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AAAAAAQ&_s=3&tag_exp=101509157~103116026~103200004~103233427~104527906~104528501~104684208~104684211~104948813~115480710~115650527~115650529~115834633~115834635&sid=1759409238&sct=1&seg=1&dl=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&dr=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&dt=Consulado%20Gral.%20de%20Espa%C3%B1a%20en%20La%20Habana&en=user_engagement&ep.RutaWidget=%7Bpage%3A%20%22%22%2F%22%22%20%2B%20Backbone.history.getFragment()%7D&ep.anonymizeIp=true&_et=15109&tfd=28152
- Request Content-Type: 
- Response: -1 ()
- Dump JSON: C:\Users\Maikel\Desktop\CITAScONSULARES\CitaConsulares\investigation_archive\booking_posts\post_009.json
- Request headers:

```json
[
  {
    "name": "sec-ch-ua-platform",
    "value": "\"Windows\""
  },
  {
    "name": "Referer",
    "value": "https://www.citaconsular.es/"
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
- Repro (curl aproximado):

```bash
curl -i -X POST "https://www.google-analytics.com/g/collect?v=2&tid=G-F3TYSDL945&gtm=45je59u1v9106061970za200zb9106055348zd9106055348&_p=1759409301754&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1969907303.1759409239&ul=es-es&sr=1280x720&uaa=x86&uab=64&uafvl=Not%253DA%253FBrand%3B24.0.0.0%7CChromium%3B140.0.7339.186&uamb=0&uam=&uap=Windows&uapv=10.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AAAAAAQ&_s=3&tag_exp=101509157~103116026~103200004~103233427~104527906~104528501~104684208~104684211~104948813~115480710~115650527~115650529~115834633~115834635&sid=1759409238&sct=1&seg=1&dl=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&dr=https%3A%2F%2Fwww.citaconsular.es%2Fes%2Fhosteds%2Fwidgetdefault%2F2f21cd9c0d8aa26725bf8930e4691d645%2Fbkt195382&dt=Consulado%20Gral.%20de%20Espa%C3%B1a%20en%20La%20Habana&en=user_engagement&ep.RutaWidget=%7Bpage%3A%20%22%22%2F%22%22%20%2B%20Backbone.history.getFragment()%7D&ep.anonymizeIp=true&_et=15109&tfd=28152" \
+  -H "sec-ch-ua-platform: \"Windows\"" \
+  -H "Referer: https://www.citaconsular.es/" \
+  -H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" \
+  -H "sec-ch-ua: \"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\"" \
+  -H "sec-ch-ua-mobile: ?0"
```

---

### 10. POST https://www.google-analytics.com/g/collect?v=2&tid=G-YHZBSPQRHE&gtm=45je59u1v9123577478za200zd9123577478&_p=1759409231837&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1256142397.1759409225&ul=es-es&sr=1280x720&uaa=x86&uab=64&uafvl=Not%253DA%253FBrand%3B24.0.0.0%7CChromium%3B140.0.7339.186&uamb=0&uam=&uap=Windows&uapv=10.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AAAAAAQ&_s=2&tag_exp=101509157~103116026~103200004~103233427~104527907~104528500~104684208~104684211~104948813~115480710~115650524~115650526&sid=1759409224&sct=1&seg=1&dl=https%3A%2F%2Fwww.exteriores.gob.es%2Fes%2FServiciosAlCiudadano%2FPaginas%2FServicios-consulares.aspx%3Fscco%3DCuba%26scd%3D166%26scca%3DCertificados%26scs%3DCertificado%2Bde%2Bnacimiento&dr=https%3A%2F%2Fwww.exteriores.gob.es%2Fes%2FServiciosAlCiudadano%2FPaginas%2FServicios-consulares.aspx&dt=Servicios%20consulares&en=user_engagement&_et=126519&tfd=134034
- Request Content-Type: 
- Response: -1 ()
- Dump JSON: C:\Users\Maikel\Desktop\CITAScONSULARES\CitaConsulares\investigation_archive\booking_posts\post_010.json
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
- Repro (curl aproximado):

```bash
curl -i -X POST "https://www.google-analytics.com/g/collect?v=2&tid=G-YHZBSPQRHE&gtm=45je59u1v9123577478za200zd9123577478&_p=1759409231837&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1256142397.1759409225&ul=es-es&sr=1280x720&uaa=x86&uab=64&uafvl=Not%253DA%253FBrand%3B24.0.0.0%7CChromium%3B140.0.7339.186&uamb=0&uam=&uap=Windows&uapv=10.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AAAAAAQ&_s=2&tag_exp=101509157~103116026~103200004~103233427~104527907~104528500~104684208~104684211~104948813~115480710~115650524~115650526&sid=1759409224&sct=1&seg=1&dl=https%3A%2F%2Fwww.exteriores.gob.es%2Fes%2FServiciosAlCiudadano%2FPaginas%2FServicios-consulares.aspx%3Fscco%3DCuba%26scd%3D166%26scca%3DCertificados%26scs%3DCertificado%2Bde%2Bnacimiento&dr=https%3A%2F%2Fwww.exteriores.gob.es%2Fes%2FServiciosAlCiudadano%2FPaginas%2FServicios-consulares.aspx&dt=Servicios%20consulares&en=user_engagement&_et=126519&tfd=134034" \
+  -H "sec-ch-ua-platform: \"Windows\"" \
+  -H "Referer: https://www.exteriores.gob.es/" \
+  -H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" \
+  -H "sec-ch-ua: \"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\"" \
+  -H "sec-ch-ua-mobile: ?0"
```

---

### 11. POST https://www.google-analytics.com/g/collect?v=2&tid=G-YHZBSPQRHE&gtm=45je59u1v9123577478za200zd9123577478&_p=1759409360560&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1256142397.1759409225&ul=es-es&sr=1280x720&uaa=x86&uab=64&uafvl=Not%253DA%253FBrand%3B24.0.0.0%7CChromium%3B140.0.7339.186&uamb=0&uam=&uap=Windows&uapv=10.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AAAAAAQ&_s=1&tag_exp=101509157~103116026~103200004~103233427~104527906~104528500~104684208~104684211~104948813~115480709~115650527~115650529&sid=1759409224&sct=1&seg=1&dl=https%3A%2F%2Fwww.exteriores.gob.es%2Fes%2FServiciosAlCiudadano%2FPaginas%2FServicios-consulares.aspx&dt=Servicios%20consulares&en=page_view&_ee=1&tfd=10885
- Request Content-Type: 
- Response: 204 (text/plain)
- Dump JSON: C:\Users\Maikel\Desktop\CITAScONSULARES\CitaConsulares\investigation_archive\booking_posts\post_011.json
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
    "value": "/g/collect?v=2&tid=G-YHZBSPQRHE&gtm=45je59u1v9123577478za200zd9123577478&_p=1759409360560&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1256142397.1759409225&ul=es-es&sr=1280x720&uaa=x86&uab=64&uafvl=Not%253DA%253FBrand%3B24.0.0.0%7CChromium%3B140.0.7339.186&uamb=0&uam=&uap=Windows&uapv=10.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AAAAAAQ&_s=1&tag_exp=101509157~103116026~103200004~103233427~104527906~104528500~104684208~104684211~104948813~115480709~115650527~115650529&sid=1759409224&sct=1&seg=1&dl=https%3A%2F%2Fwww.exteriores.gob.es%2Fes%2FServiciosAlCiudadano%2FPaginas%2FServicios-consulares.aspx&dt=Servicios%20consulares&en=page_view&_ee=1&tfd=10885"
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
    "value": "Thu, 02 Oct 2025 12:49:26 GMT"
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
- Repro (curl aproximado):

```bash
curl -i -X POST "https://www.google-analytics.com/g/collect?v=2&tid=G-YHZBSPQRHE&gtm=45je59u1v9123577478za200zd9123577478&_p=1759409360560&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1256142397.1759409225&ul=es-es&sr=1280x720&uaa=x86&uab=64&uafvl=Not%253DA%253FBrand%3B24.0.0.0%7CChromium%3B140.0.7339.186&uamb=0&uam=&uap=Windows&uapv=10.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AAAAAAQ&_s=1&tag_exp=101509157~103116026~103200004~103233427~104527906~104528500~104684208~104684211~104948813~115480709~115650527~115650529&sid=1759409224&sct=1&seg=1&dl=https%3A%2F%2Fwww.exteriores.gob.es%2Fes%2FServiciosAlCiudadano%2FPaginas%2FServicios-consulares.aspx&dt=Servicios%20consulares&en=page_view&_ee=1&tfd=10885" \
+  -H ":authority: www.google-analytics.com" \
+  -H ":method: POST" \
+  -H ":path: /g/collect?v=2&tid=G-YHZBSPQRHE&gtm=45je59u1v9123577478za200zd9123577478&_p=1759409360560&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1256142397.1759409225&ul=es-es&sr=1280x720&uaa=x86&uab=64&uafvl=Not%253DA%253FBrand%3B24.0.0.0%7CChromium%3B140.0.7339.186&uamb=0&uam=&uap=Windows&uapv=10.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AAAAAAQ&_s=1&tag_exp=101509157~103116026~103200004~103233427~104527906~104528500~104684208~104684211~104948813~115480709~115650527~115650529&sid=1759409224&sct=1&seg=1&dl=https%3A%2F%2Fwww.exteriores.gob.es%2Fes%2FServiciosAlCiudadano%2FPaginas%2FServicios-consulares.aspx&dt=Servicios%20consulares&en=page_view&_ee=1&tfd=10885" \
+  -H ":scheme: https" \
+  -H "accept: */*" \
+  -H "accept-encoding: gzip, deflate, br, zstd" \
+  -H "accept-language: es-ES,es;q=0.9" \
+  -H "content-length: 0" \
+  -H "origin: https://www.exteriores.gob.es" \
+  -H "priority: u=1, i" \
+  -H "referer: https://www.exteriores.gob.es/" \
+  -H "sec-ch-ua: \"Not=A?Brand\";v=\"24\", \"Chromium\";v=\"140\"" \
+  -H "sec-ch-ua-mobile: ?0" \
+  -H "sec-ch-ua-platform: \"Windows\"" \
+  -H "sec-fetch-dest: empty" \
+  -H "sec-fetch-mode: no-cors" \
+  -H "sec-fetch-site: cross-site" \
+  -H "sec-fetch-storage-access: active" \
+  -H "user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
```