/* Writes a brand-coloured placeholder PNG for every entry in
 * docs/figma-assets.json that has no real export yet. Real exports dropped in
 * at the same path simply overwrite them — nothing in the app changes.
 *
 *   node scripts/make-placeholders.mjs          # fill gaps
 *   node scripts/make-placeholders.mjs --list   # report what is still missing
 */
import { createHash } from "node:crypto";
import { deflateSync } from "node:zlib";
import { mkdirSync, existsSync, writeFileSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";

const root = process.cwd();
const manifest = JSON.parse(
  readFileSync(join(root, "docs/figma-assets.json"), "utf8"),
);

const crcTable = Array.from({ length: 256 }, (_, n) => {
  let c = n;
  for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  return c >>> 0;
});

function crc32(buf) {
  let c = 0xffffffff;
  for (const byte of buf) c = crcTable[(c ^ byte) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const body = Buffer.concat([Buffer.from(type, "ascii"), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body));
  return Buffer.concat([len, body, crc]);
}

/** Diagonal two-stop gradient in the TOTC palette, plus a faint grid so a
 *  placeholder is obviously a placeholder. */
function placeholderPng(width, height, from, to) {
  const rows = [];
  for (let y = 0; y < height; y++) {
    const row = Buffer.alloc(1 + width * 3);
    for (let x = 0; x < width; x++) {
      const t = (x / width + y / height) / 2;
      const grid = x % 64 === 0 || y % 64 === 0 ? 10 : 0;
      row[1 + x * 3] = Math.round(from[0] + (to[0] - from[0]) * t) + grid;
      row[2 + x * 3] = Math.round(from[1] + (to[1] - from[1]) * t) + grid;
      row[3 + x * 3] = Math.round(from[2] + (to[2] - from[2]) * t) + grid;
    }
    rows.push(row);
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 2; // truecolour
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk("IHDR", ihdr),
    chunk("IDAT", deflateSync(Buffer.concat(rows), { level: 9 })),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

const palettes = [
  [[73, 187, 189], [19, 106, 108]],
  [[91, 114, 238], [47, 50, 125]],
  [[244, 140, 6], [216, 88, 126]],
  [[51, 239, 160], [35, 189, 238]],
];

/* A generated file sits at the same path a real export will, so existence
 * alone cannot tell them apart. Every placeholder is recorded here and the
 * record is dropped as soon as the file's bytes stop matching. */
const ledgerPath = join(root, "public", ".placeholders.json");
const ledger = existsSync(ledgerPath)
  ? JSON.parse(readFileSync(ledgerPath, "utf8"))
  : {};

const listOnly = process.argv.includes("--list");
const digest = (buf) => createHash("sha1").update(buf).digest("hex");
const stillPlaceholder = [];

for (const [index, asset] of manifest.assets.entries()) {
  const file = join(root, "public", asset.path);

  if (existsSync(file)) {
    const current = digest(readFileSync(file));
    if (ledger[asset.path] === current) {
      stillPlaceholder.push(asset);
    } else {
      delete ledger[asset.path];
    }
    continue;
  }

  stillPlaceholder.push(asset);
  if (listOnly) continue;

  mkdirSync(dirname(file), { recursive: true });
  const seed = parseInt(digest(Buffer.from(asset.path)).slice(0, 4), 16);
  const [from, to] = palettes[(seed + index) % palettes.length];
  const png = placeholderPng(asset.width, asset.height, from, to);
  writeFileSync(file, png);
  ledger[asset.path] = digest(png);
}

if (!listOnly) writeFileSync(ledgerPath, JSON.stringify(ledger, null, 2) + "\n");

if (stillPlaceholder.length === 0) {
  console.log(`All ${manifest.assets.length} Figma exports are present.`);
} else {
  console.log(
    `${stillPlaceholder.length} of ${manifest.assets.length} still awaiting a real export:`,
  );
  for (const asset of stillPlaceholder) {
    console.log(
      `  ${asset.path.padEnd(46)} ${asset.width}x${asset.height}  node ${asset.node}`,
    );
  }
}
