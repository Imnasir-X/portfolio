#!/usr/bin/env node
/*
 * Static-site check for GitHub Pages: every local file referenced from the
 * HTML, CSS and JS exists, no reference is root-absolute (the site is served
 * from /portfolio/, so "/assets/x" would 404), and .nojekyll is present.
 */
'use strict';

const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.join(__dirname, '..');
const SOURCES = fs.readdirSync(ROOT).filter((f) => /\.(html|css|js)$/.test(f) && f !== 'eslint.config.js');
const PATTERNS = [
  /(?:href|src|poster)=["']([^"']+)["']/g,
  /srcset=["']([^"']+)["']/g,
  /url\(\s*["']?([^)"']+)["']?\s*\)/g,
  /["'`]((?:\.\/)?assets\/[^"'`\s)]+)["'`]/g,
];
const SKIP = /^(?:https?:|mailto:|tel:|data:|blob:|javascript:|#|\?)|\$\{/;

const problems = new Set();
for (const file of SOURCES) {
  const text = fs.readFileSync(path.join(ROOT, file), 'utf8');
  for (const re of PATTERNS) {
    for (const match of text.matchAll(re)) {
      const candidates = re.source.startsWith('srcset')
        ? match[1].split(',').map((s) => s.trim().split(/\s+/)[0])
        : [match[1].trim()];
      for (const ref of candidates) {
        if (!ref || SKIP.test(ref)) continue;
        if (ref.startsWith('/')) { problems.add(`${file}: root-absolute path breaks under /portfolio/: ${ref}`); continue; }
        const clean = ref.split(/[?#]/)[0];
        if (!clean || clean === './') continue;
        if (!fs.existsSync(path.join(ROOT, clean))) problems.add(`${file}: missing file: ${ref}`);
      }
    }
  }
}
if (!fs.existsSync(path.join(ROOT, '.nojekyll'))) problems.add('.nojekyll is missing (GitHub Pages would run Jekyll)');
if (!fs.existsSync(path.join(ROOT, 'index.html'))) problems.add('index.html is missing');

if (problems.size) {
  console.error([...problems].join('\n'));
  process.exit(1);
}
console.log(`OK: checked ${SOURCES.length} files, all local references resolve.`);
