import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get __dirname equivalent in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const day = process.argv[2].padStart(2, "0");
const dayPath = path.join(__dirname, `day-${day}`);

if (!fs.existsSync(dayPath)) {
  fs.mkdirSync(dayPath);
  fs.copyFileSync("template/index.js", `${dayPath}/index.js`);
  fs.copyFileSync("template/input.txt", `${dayPath}/input.txt`);
  console.log(`Day ${day} setup completed!`);
} else {
  console.log(`Day ${day} already exists.`);
}
