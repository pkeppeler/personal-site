#!/usr/bin/env node
// Build gate: the site ships no <script> except on the Markdown Viewer and on
// guide episode pages (prompt copy button). Run after `astro build`.
import { readdir, readFile } from 'node:fs/promises';
import { dirname, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = resolve(repoRoot, 'dist');

// rel is posix-style, relative to dist/.
const isAllowed = (rel) =>
  rel === 'tools/viewer/index.html' ||
  /^guides\/claude\/\d+-[^/]+\/index\.html$/.test(rel);

async function* htmlFiles(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* htmlFiles(path);
    else if (entry.name.endsWith('.html')) yield path;
  }
}

const offenders = [];
for await (const file of htmlFiles(dist)) {
  const rel = relative(dist, file).split(sep).join('/');
  if (isAllowed(rel)) continue;
  if ((await readFile(file, 'utf8')).includes('<script')) offenders.push(rel);
}

if (offenders.length > 0) {
  console.error('check-no-scripts: <script> found on pages that must ship none:');
  for (const rel of offenders) console.error(`  dist/${rel}`);
  console.error(
    'Only /tools/viewer/ and guide episode pages may ship a <script> (see CLAUDE.md).',
  );
  process.exit(1);
}
console.log('check-no-scripts: ok');
