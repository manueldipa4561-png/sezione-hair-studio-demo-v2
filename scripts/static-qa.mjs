import fs from 'node:fs';

const home = fs.readFileSync('index.html', 'utf8');
const services = fs.readFileSync('servizi.html', 'utf8');
const css = fs.readFileSync('styles.css', 'utf8');
const servicesCss = fs.readFileSync('servizi.css', 'utf8');

const fail = (msg) => { console.error('FAIL:', msg); process.exitCode = 1; };

if ((home.match(/<h1\b/g) || []).length !== 1) fail('Home must contain exactly one H1.');
if (!home.includes('name="viewport"')) fail('Home missing viewport meta.');
if (!home.includes('noindex,nofollow')) fail('Home demo must remain noindex/nofollow.');
if (!home.includes('class="skip-link"')) fail('Home missing skip link.');
if ((home.match(/<section\b/g) || []).length !== 8) fail('Expected exactly eight Home sections.');
if ((home.match(/<img\b/g) || []).length !== 3) fail('Expected exactly three approved Home image assets.');
if (!home.includes('href="servizi.html"')) fail('Home must link to Services page.');

if ((services.match(/<h1\b/g) || []).length !== 1) fail('Services must contain exactly one H1.');
if (!services.includes('name="viewport"')) fail('Services missing viewport meta.');
if (!services.includes('noindex,nofollow')) fail('Services demo must remain noindex/nofollow.');
if (!services.includes('class="skip-link"')) fail('Services missing skip link.');
if ((services.match(/<section\b/g) || []).length !== 6) fail('Expected exactly six Services sections.');
if ((services.match(/<img\b/g) || []).length !== 2) fail('Expected exactly two approved reused Services image assets.');
if (!services.includes('aria-current="page"')) fail('Services navigation must expose current page.');
if (!services.includes('id="prima-visita"')) fail('Services must include First Visit decision-support section.');
if (!services.includes('id="prenota"')) fail('Services must include final booking section.');

for (const html of [home, services]) {
  if (/<form\b|type=["'](?:email|tel|password)["']/i.test(html)) fail('Demo pages must not collect personal data.');
  if (/lorem ipsum/i.test(html)) fail('Placeholder copy detected.');
}

for (const token of ['#F4F0E8','#0E0E0D','#AD2E1C','#1238F0','#C7CCD6','#F5C98C']) {
  if (!css.includes(token)) fail(`Missing approved color token ${token}.`);
}

if (!servicesCss.includes('.services-hero') || !servicesCss.includes('@media (max-width:900px)')) {
  fail('Services responsive stylesheet is incomplete.');
}

if (!process.exitCode) console.log('Static QA PASS — Home + Services');
