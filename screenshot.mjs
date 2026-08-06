import puppeteer from 'puppeteer';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(root, 'temporary screenshots');

const url = process.argv[2];
const label = process.argv[3];
const width = Number(process.argv[4]) || 1440;
const height = Number(process.argv[5]) || 900;

if (!url) {
  console.error('Usage: node screenshot.mjs <url> [label] [width] [height]');
  process.exit(1);
}

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

let n = 1;
while (
  fs.readdirSync(outDir).some((f) => f.startsWith(`screenshot-${n}-`) || f === `screenshot-${n}.png`)
) {
  n++;
}
const fileName = label ? `screenshot-${n}-${label}.png` : `screenshot-${n}.png`;
const outPath = path.join(outDir, fileName);

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.setViewport({ width, height });
await page.goto(url, { waitUntil: 'networkidle0' });
await page.screenshot({ path: outPath, fullPage: true });
await browser.close();

console.log(`Saved ${outPath}`);
