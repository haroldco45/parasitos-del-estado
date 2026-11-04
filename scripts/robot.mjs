// Robot de Parásitos del Estado: trae noticias reales de Google News
// y deja las fotos del Capitolio guardadas en el repo. Lo corre GitHub Actions.
import { writeFile, mkdir, access } from 'node:fs/promises';

const UA = 'VibrasPositivasHM-robot/1.0 (https://parasitos-del-estado.netlify.app)';
const QUERIES = [
  'Saúl Cruz subsecretario Senado',
  'Saúl Cruz Bonilla salario',
  'salarios altos funcionarios públicos Colombia',
  'privilegios salariales Congreso Colombia',
  'Observatorio Fiscal Javeriana salarios Estado'
];
const FOTOS = {
  'img/capitolio.jpg':  'Capitalio_National_de_Colombia,_Bogotá.jpg',
  'img/capitolio2.jpg': 'El_Capitolio_Nacional_(Bogotá,_Colombia)_1.jpg',
  'img/lluvia.jpg':     'Capitolio_Nacional_en_la_lluvia_I.jpg'
};

const decode = s => s.replace(/<!\[CDATA\[|\]\]>/g, '').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").trim();
const tag = (xml, t) => { const m = xml.match(new RegExp(`<${t}[^>]*>([\\s\\S]*?)</${t}>`)); return m ? decode(m[1]) : ''; };

async function noticias() {
  const all = [];
  for (const q of QUERIES) {
    const url = 'https://news.google.com/rss/search?q=' + encodeURIComponent(q + ' when:60d') + '&hl=es-419&gl=CO&ceid=CO:es-419';
    try {
      const xml = await (await fetch(url, { headers: { 'User-Agent': UA } })).text();
      for (const it of xml.split('<item>').slice(1)) {
        const source = tag(it, 'source');
        let title = tag(it, 'title');
        if (source && title.endsWith(' - ' + source)) title = title.slice(0, -(source.length + 3));
        all.push({ title, link: tag(it, 'link'), source, date: tag(it, 'pubDate') });
      }
    } catch (e) { console.error('Falló', q, e.message); }
  }
  const seen = new Map();
  for (const n of all) { const k = n.title.toLowerCase().slice(0, 70); if (n.title && !seen.has(k)) seen.set(k, n); }
  return [...seen.values()].sort((a, b) => Date.parse(b.date) - Date.parse(a.date)).slice(0, 40);
}

async function fotos() {
  await mkdir('img', { recursive: true });
  for (const [dest, file] of Object.entries(FOTOS)) {
    try { await access(dest); continue; } catch {}
    const url = 'https://commons.wikimedia.org/wiki/Special:FilePath/' + encodeURIComponent(file) + '?width=1600';
    try {
      const r = await fetch(url, { headers: { 'User-Agent': UA }, redirect: 'follow' });
      if (!r.ok) throw new Error('HTTP ' + r.status);
      await writeFile(dest, Buffer.from(await r.arrayBuffer()));
      console.log('Foto guardada', dest);
    } catch (e) { console.error('No se pudo bajar', file, e.message); }
  }
}

await fotos();
const items = await noticias();
await mkdir('data', { recursive: true });
await writeFile('data/noticias.json', JSON.stringify({ updated: new Date().toISOString(), items }, null, 1));
console.log('Noticias:', items.length);
