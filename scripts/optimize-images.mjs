// Resize every poster in public/images so its shorter side is 800px and
// convert it to WebP, replacing the original. Re-runnable: already-small
// images are not enlarged.
import { readdir, stat, rename, unlink } from 'node:fs/promises';
import { join, extname, basename } from 'node:path';
import sharp from 'sharp';

const DIR = new URL('../public/images/', import.meta.url).pathname;
const SKIP = new Set(['github.png']); // UI icons, not posters
const EXTS = new Set(['.jpg', '.jpeg', '.png', '.webp']);
const SIZE = 800; // shorter side, enough for a 400px tile at 2x DPR
const QUALITY = 80;

const kb = (n) => `${(n / 1024).toFixed(0)} KB`;
let before = 0;
let after = 0;

for (const file of (await readdir(DIR)).sort()) {
	const ext = extname(file).toLowerCase();
	if (SKIP.has(file) || !EXTS.has(ext)) continue;

	const src = join(DIR, file);
	const out = join(DIR, `${basename(file, extname(file))}.webp`);
	const tmp = `${out}.tmp`;
	const srcSize = (await stat(src)).size;

	await sharp(src)
		.rotate() // honour EXIF orientation
		.resize({ width: SIZE, height: SIZE, fit: 'outside', withoutEnlargement: true })
		.webp({ quality: QUALITY })
		.toFile(tmp);

	if (src !== out) await unlink(src);
	await rename(tmp, out);

	const outSize = (await stat(out)).size;
	before += srcSize;
	after += outSize;
	console.log(`${file.padEnd(50)} ${kb(srcSize).padStart(8)} -> ${kb(outSize).padStart(7)}`);
}

console.log(`\nTotal: ${kb(before)} -> ${kb(after)} (${((1 - after / before) * 100).toFixed(0)}% smaller)`);
