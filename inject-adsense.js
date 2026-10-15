// Injecte le script AdSense dans toutes les pages + met à jour ads.txt
const fs = require('fs');
const path = require('path');
const dir = __dirname;

const PUB = 'ca-pub-1087976242537233';
const SNIPPET = `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${PUB}" crossorigin="anonymous"></script>`;

const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));
let n = 0;
for (const f of files) {
  const p = path.join(dir, f);
  let h = fs.readFileSync(p, 'utf8');
  if (h.includes('adsbygoogle.js')) { console.log('déjà présent :', f); continue; }
  h = h.replace('</head>', SNIPPET + '\n</head>');
  fs.writeFileSync(p, h, 'utf8');
  n++;
  console.log('injecté :', f);
}
console.log('Total injecté :', n, '/', files.length);

fs.writeFileSync(path.join(dir, 'ads.txt'),
  `google.com, pub-1087976242537233, DIRECT, f08c47fec0942fa0\n`, 'utf8');
console.log('ads.txt mis à jour');
