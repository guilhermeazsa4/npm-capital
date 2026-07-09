// One-off image optimization pass. Run with: node scripts/optimize-images.js
// Shrinks oversized source assets in public/assets to the resolutions actually
// rendered on the site, keeping filenames/extensions stable so no component
// code needs to change (next/image still handles per-request AVIF/WebP
// negotiation and responsive sizing on top of these smaller sources).
const path = require("path");
const fs = require("fs");
const sharp = require("sharp");

const ASSETS = path.join(__dirname, "..", "public", "assets");

// [file, maxWidth, jpeg/png quality]
const PHOTOS = [
  ["fariaLimaAvenue.jpg", 2200, 76],
  ["bannerTeamWorking.jpg", 2200, 76],
  ["BannerEmpresa.jpg", 2200, 78],
  ["analog-landscape-city-with-buildings.jpg", 1600, 78],
  ["analog-landscape-city-with-buildings-vertical.jpg", 1600, 78],
];

// Ebook tablet mockups: rendered at max ~360px (2x DPR => 720px is plenty).
const TABLETS = [
  "TabletNTR.png",
  "TabletEDI.png",
  "TabletEDI2.png",
  "TabletCBC.png",
  "TabletFCF.png",
  "TabletRDC.png",
  "TabletFDC.png",
  "TabletELE.png",
  "TabletELE2.png",
];

function writeAtomic(p, buf) {
  const tmp = `${p}.tmp`;
  fs.writeFileSync(tmp, buf);
  fs.renameSync(tmp, p);
}

async function shrinkPhoto(file, maxWidth, quality) {
  const p = path.join(ASSETS, file);
  const before = fs.statSync(p).size;
  const buf = await sharp(p)
    .resize({ width: maxWidth, withoutEnlargement: true })
    .jpeg({ quality, mozjpeg: true, progressive: true })
    .toBuffer();
  writeAtomic(p, buf);
  const after = buf.length;
  console.log(
    `${file}: ${(before / 1e6).toFixed(1)}MB -> ${(after / 1e6).toFixed(2)}MB`
  );
}

async function shrinkTablet(file) {
  const p = path.join(ASSETS, file);
  const before = fs.statSync(p).size;
  const buf = await sharp(p)
    .resize({ width: 900, withoutEnlargement: true })
    .png({ compressionLevel: 9, palette: true, quality: 90 })
    .toBuffer();
  writeAtomic(p, buf);
  const after = buf.length;
  console.log(
    `${file}: ${(before / 1e6).toFixed(1)}MB -> ${(after / 1e6).toFixed(2)}MB`
  );
}

async function main() {
  for (const [file, w, q] of PHOTOS) await shrinkPhoto(file, w, q);
  for (const file of TABLETS) await shrinkTablet(file);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
