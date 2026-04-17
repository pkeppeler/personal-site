#!/usr/bin/env node
import { mkdir, readFile, writeFile, access } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, '..');

const slug = process.argv[2];
if (!slug) {
  console.error('Usage: node scripts/generate-tool-icons.mjs <slug> [svg-path]');
  process.exit(1);
}

const svgPath = resolve(repoRoot, process.argv[3] ?? 'public/favicon.svg');
const outDir = resolve(repoRoot, 'public/tools', slug);
const manifestPath = resolve(outDir, 'manifest.webmanifest');

async function readManifestBackground() {
  try {
    await access(manifestPath);
    const raw = await readFile(manifestPath, 'utf8');
    const parsed = JSON.parse(raw);
    if (typeof parsed.background_color === 'string') return parsed.background_color;
  } catch {
    // fall through to default
  }
  return '#fdfdfd';
}

await mkdir(outDir, { recursive: true });

const svg = await readFile(svgPath);
const background = await readManifestBackground();

const icon192Path = resolve(outDir, 'icon-192.png');
await sharp(svg, { density: 384 })
  .resize(192, 192, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toFile(icon192Path);
console.log(`wrote ${icon192Path}`);

const icon512Path = resolve(outDir, 'icon-512.png');
await sharp(svg, { density: 1024 })
  .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toFile(icon512Path);
console.log(`wrote ${icon512Path}`);

const innerSize = 410;
const innerBuffer = await sharp(svg, { density: 1024 })
  .resize(innerSize, innerSize, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toBuffer();

const maskablePath = resolve(outDir, 'icon-512-maskable.png');
await sharp({
  create: {
    width: 512,
    height: 512,
    channels: 4,
    background,
  },
})
  .composite([
    {
      input: innerBuffer,
      top: Math.round((512 - innerSize) / 2),
      left: Math.round((512 - innerSize) / 2),
    },
  ])
  .png()
  .toFile(maskablePath);
console.log(`wrote ${maskablePath}`);
