import fs from "fs";
import { createCanvas, loadImage } from "canvas";

function trimTransparent(img) {
  const c = createCanvas(img.width, img.height);
  const ctx = c.getContext("2d");
  ctx.drawImage(img, 0, 0);
  const { data, width, height } = ctx.getImageData(0, 0, img.width, img.height);

  let top = height, left = width, right = 0, bottom = 0;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (data[(y * width + x) * 4 + 3] > 10) {
        if (x < left) left = x;
        if (x > right) right = x;
        if (y < top) top = y;
        if (y > bottom) bottom = y;
      }
    }
  }
  if (right < left) return img;
  const tw = right - left + 1;
  const th = bottom - top + 1;
  const trimmed = createCanvas(tw, th);
  const tctx = trimmed.getContext("2d");
  tctx.drawImage(img, left, top, tw, th, 0, 0, tw, th);
  return trimmed;
}

async function makeFavicon(srcPath, size, padRatio = 0.06) {
  const img = trimTransparent(await loadImage(srcPath));
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, size, size);
  const pad = Math.round(size * padRatio);
  const max = size - pad * 2;
  const aspect = img.width / img.height;
  let dw, dh;
  if (aspect >= 1) { dw = max; dh = max / aspect; }
  else { dh = max; dw = max * aspect; }
  ctx.drawImage(img, (size - dw) / 2, (size - dh) / 2, dw, dh);
  return canvas;
}

async function main() {
  const src = "public/favicon-source.png";
  const sizes = [
    { size: 512, name: "public/favicon-512.png" },
    { size: 512, name: "public/apple-touch-icon.png" },
    { size: 192, name: "public/favicon-192.png" },
    { size: 96, name: "public/favicon-96.png" },
    { size: 48, name: "public/favicon.png" },
  ];
  for (const { size, name } of sizes) {
    const canvas = await makeFavicon(src, size);
    fs.writeFileSync(name, canvas.toBuffer("image/png"));
    console.log("Wrote", name);
  }
}

main().catch(console.error);
