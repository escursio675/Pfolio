import sharp from "sharp";

const [,, inputPath, outputName] = process.argv;

if (!inputPath || !outputName) {
  console.error("Usage: node normalize-manual-screenshot.mjs <input-path> <output-name>");
  process.exit(1);
}

await sharp(inputPath)
  .resize(1600, 800, { fit: "cover", position: "top" })
  .webp({ quality: 80 })
  .toFile(`./screenshots-raw/${outputName}.webp`);

console.log(`✓ ${outputName}.webp normalized and saved`);