const fs = require('fs');
const dir = __dirname;
for (const f of ['sitemap.xml', 'robots.txt']) {
  let s = fs.readFileSync(dir + '/' + f, 'utf8');
  s = s.split('https://littl-spip.github.io/calc-utile/').join('https://littl-spip.github.io/');
  fs.writeFileSync(dir + '/' + f, s, 'utf8');
  console.log('maj', f);
}
console.log(fs.readFileSync(dir + '/robots.txt', 'utf8'));
