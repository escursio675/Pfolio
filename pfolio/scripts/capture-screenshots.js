import { chromium } from "playwright";
import sharp from "sharp";
import path from "path";
import fs from "fs";

const projects = [
  { url: "https://cl-ock.vercel.app/", name: "clock" },
  { url: "https://counter-api-drab.vercel.app/", name: "counterapi" },
  { url: "https://lo-fe.vercel.app/", name: "lofe" },
  { url: "https://urlambda.netlify.app/", name: "urlambda" },
  { url: "https://uriel-001.vercel.app/", name: "uriel001" },
];

const VIEWPORT = { width: 1440, height: 900 };
const OUTPUT_WIDTH = 1600;
const OUTPUT_HEIGHT = 800; // 2:1 ratio
const OUTPUT_DIR = "./screenshots-raw2";

async function captureAll() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: VIEWPORT });

  for (const project of projects) {
    const page = await context.newPage();
    console.log(`Capturing ${project.name}...`);

    try {
      await page.goto(project.url, { waitUntil: "networkidle", timeout: 30000 });
      await page.waitForTimeout(1000); // let animations/fonts settle

      const rawPath = path.join(OUTPUT_DIR, `${project.name}-raw.png`);
      await page.screenshot({ path: rawPath, clip: { x: 0, y: 0, width: VIEWPORT.width, height: VIEWPORT.height } });

      await sharp(rawPath)
        .resize(OUTPUT_WIDTH, OUTPUT_HEIGHT, { fit: "cover", position: "top" })
        .webp({ quality: 80 })
        .toFile(path.join(OUTPUT_DIR, `${project.name}.webp`));

      fs.unlinkSync(rawPath); // clean up intermediate PNG
      console.log(`✓ ${project.name}.webp saved`);
    } catch (err) {
      console.error(`✗ Failed to capture ${project.name}:`, err.message);
    }

    await page.close();
  }

  await browser.close();
}

captureAll();