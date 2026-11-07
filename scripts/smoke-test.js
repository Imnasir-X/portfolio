#!/usr/bin/env node
/*
 * Headless smoke test that mirrors GitHub Pages: the repository is served
 * under /portfolio/ and each page and project view is loaded on desktop and
 * phone viewports. Fails on script errors, failed same-origin requests or
 * horizontal overflow.
 *
 *   npx playwright install chromium   # once
 *   npm run test:smoke
 *
 * Set CHROMIUM_PATH to use an already-installed Chromium binary.
 */
'use strict';

const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require('playwright');

const ROOT = path.join(__dirname, '..');
const BASE_PATH = '/portfolio/';
const TYPES = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css',
  '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2', '.pdf': 'application/pdf', '.json': 'application/json',
};
const PROJECTS = ['kormoo', 'sujog', 'genz', 'pathshala', 'zephra', 'xai', 'voiceart', 'strawberry'];
const VIEWPORTS = [{ width: 1440, height: 900 }, { width: 390, height: 844 }];

function serve() {
  const server = http.createServer((req, res) => {
    const url = new URL(req.url, 'http://x');
    if (!url.pathname.startsWith(BASE_PATH)) { res.writeHead(404); res.end(); return; }
    let rel = decodeURIComponent(url.pathname.slice(BASE_PATH.length)) || 'index.html';
    if (rel.endsWith('/')) rel += 'index.html';
    const file = path.normalize(path.join(ROOT, rel));
    if (!file.startsWith(ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); res.end(); return; }
    res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream' });
    fs.createReadStream(file).pipe(res);
  });
  return new Promise((resolve) => server.listen(0, '127.0.0.1', () => resolve(server)));
}

(async () => {
  const server = await serve();
  const origin = 'http://127.0.0.1:' + server.address().port;
  const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
  const failures = [];
  const urls = ['', 'portfolio.html', ...PROJECTS.map((p) => '?project=' + p)];

  for (const viewport of VIEWPORTS) {
    for (const u of urls) {
      const page = await browser.newPage({ viewport });
      const label = `${viewport.width}px ${BASE_PATH}${u}`;
      page.on('pageerror', (e) => failures.push(`${label}: script error: ${e.message}`));
      page.on('response', (r) => { if (r.url().startsWith(origin) && r.status() >= 400) failures.push(`${label}: HTTP ${r.status()} ${r.url()}`); });
      page.on('requestfailed', (r) => { if (r.url().startsWith(origin)) failures.push(`${label}: request failed ${r.url()}`); });
      await page.goto(origin + BASE_PATH + u, { waitUntil: 'load' });
      // Scroll through so lazily built previews initialise.
      const height = await page.evaluate(() => document.documentElement.scrollHeight);
      for (let y = 0; y < height; y += viewport.height) { await page.evaluate((v) => window.scrollTo(0, v), y); await page.waitForTimeout(120); }
      await page.waitForTimeout(400);
      const { sw, cw } = await page.evaluate(() => ({ sw: document.documentElement.scrollWidth, cw: document.documentElement.clientWidth }));
      if (sw > cw) failures.push(`${label}: horizontal overflow (${sw}px > ${cw}px)`);
      if (u.startsWith('?project=')) {
        const open = await page.evaluate(() => document.getElementById('project-dialog')?.open === true);
        if (!open) failures.push(`${label}: project dialog did not open`);
      }
      if (u === 'portfolio.html' && !page.url().endsWith(BASE_PATH)) failures.push(`${label}: redirect landed on ${page.url()}`);
      await page.close();
    }
  }

  await browser.close();
  server.close();
  if (failures.length) { console.error([...new Set(failures)].join('\n')); process.exit(1); }
  console.log(`OK: ${urls.length * VIEWPORTS.length} page loads under ${BASE_PATH} with no errors or overflow.`);
})().catch((e) => { console.error(e); process.exit(1); });
