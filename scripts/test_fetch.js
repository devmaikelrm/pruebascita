const profile = {
  label: 'DNI',
  publicKey: '2f21cd9c0d8aa26725bf8930e4691d645',
  serviceId: 'bkt195382',
  agendaId: 'bkt93764',
  src: 'https://www.citaconsular.es/es/hosteds/widgetdefault/2f21cd9c0d8aa26725bf8930e4691d645/bkt195382',
  srvsrc: 'https://citaconsular.es'
};
const start = new Date().toISOString().slice(0,10);
const endDate = new Date(Date.now()+30*24*60*60*1000).toISOString().slice(0,10);
const callback = `jQuery${Math.floor(Math.random()*1e12)}_${Date.now()}`;
const params = new URLSearchParams({
  callback,
  type: 'default',
  publickey: profile.publicKey,
  lang: 'es',
  version: '5',
  src: profile.src,
  srvsrc: profile.srvsrc,
  start,
  end: endDate,
  selectedPeople: '1',
  _: Date.now().toString()
});
params.append('services[]', profile.serviceId);
params.append('agendas[]', profile.agendaId);
const url = 'https://www.citaconsular.es/onlinebookings/datetime/?' + params.toString();

const headers = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
  'Accept': 'application/javascript, text/javascript, */*; q=0.1',
  'Referer': profile.src,
  'Origin': 'https://www.citaconsular.es',
  'Accept-Language': 'es-ES,es;q=0.9',
  'Sec-Fetch-Site': 'same-origin',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Dest': 'script',
  'Sec-Fetch-User': '?1'
};
const res = await fetch(url, { headers });
console.log('status', res.status);
console.log('headers', Object.fromEntries(res.headers.entries()));
const text = await res.text();
console.log('length', text.length);
console.log('snippet', text.slice(0,200));
