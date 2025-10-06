import fs from 'node:fs/promises';
const har = JSON.parse(await fs.readFile('investigation_archive/final_test.har','utf8'));
const entries = har?.log?.entries || [];
const e = entries.find(e => /onlinebookings\/datetime\//.test(e?.request?.url||'') && (e?.response?.content?.text||'').length>0);
if (!e) { console.log('No entry with body found'); process.exit(0); }
let txt = e.response.content.text || '';
if (e.response.content.encoding === 'base64') txt = Buffer.from(txt,'base64').toString('utf8');
const m = txt.match(/^\s*[^\(]+\((.*)\)\s*;?\s*$/s);
const json = m ? m[1] : txt;
await fs.writeFile('investigation_archive/datetime_decoded.json', json);
console.log('decoded length', json.length);
