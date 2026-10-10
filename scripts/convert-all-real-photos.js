const fs = require("fs");
const path = require("path");
const convert = require("heic-convert");

const dir = path.join(__dirname, "..", "src", "assets", "real");

function getJpegDimensions(buffer) {
  let offset = 2;
  while (offset < buffer.length) {
    if (buffer[offset] !== 0xff) break;
    const marker = buffer[offset + 1];
    if (marker === 0xc0 || marker === 0xc2) {
      const height = buffer.readUInt16BE(offset + 5);
      const width = buffer.readUInt16BE(offset + 7);
      return { width, height };
    }
    const len = buffer.readUInt16BE(offset + 2);
    offset += 2 + len;
  }
  return null;
}

async function run() {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const buf = fs.readFileSync(filePath);
    const hex = buf.slice(0, 12).toString("hex");
    const isHeic = hex.includes("6674797068656963"); // 'ftypheic'
    const isJpeg = buf[0] === 0xff && buf[1] === 0xd8;

    if (isHeic) {
      console.log(`Converting HEIC -> JPEG: ${file}...`);
      const converted = await convert({
        buffer: buf,
        format: "JPEG",
        quality: 0.92,
      });
      fs.writeFileSync(filePath, converted);
      const dims = getJpegDimensions(converted);
      console.log(`  -> Converted ${file}: ${dims?.width}x${dims?.height}`);
    } else if (isJpeg) {
      const dims = getJpegDimensions(buf);
      console.log(`Standard JPEG: ${file}: ${dims?.width}x${dims?.height}`);
    } else {
      console.log(`Other format: ${file}`);
    }
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
