import fs from 'node:fs';

const html = fs.readFileSync('index.html', 'utf8');
const css = fs.readFileSync('styles.css', 'utf8');
const fail = (msg) => { console.error('FAIL:', msg); process.exitCode = 1; };

if ((html.match(/<h1\b/g) || []).length !== 1) fail('Home must contain exactly one H1.');
if (!html.includes('name="viewport"')) fail('Missing viewport meta.');
if (!html.includes('noindex,nofollow')) fail('Demo must remain noindex/nofollow.');
if (!html.includes('class="skip-link"')) fail('Missing skip link.');
if ((html.match(/<section\b/g) || []).length !== 8) fail('Expected exactly eight Home sections.');
if ((html.match(/<img\b/g) || []).length !== 3) fail('Expected exactly three approved image assets.');
if (/<form\b|type=["'](?:email|tel|password)["']/i.test(html)) fail('Home must not collect personal data.');
if (/lorem ipsum/i.test(html)) fail('Placeholder copy detected.');
for (const token of ['#F4F0E8','#0E0E0D','#AD2E1C','#1238F0','#C7CCD6','#F5C98C']) {
  if (!css.includes(token)) fail(`Missing approved color token ${token}.`);
}
if (!process.exitCode) console.log('Static QA PASS');
