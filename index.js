import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get __dirname equivalent in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const runDay = (day) => {
  const dayPath = path.join(__dirname, `day-${day.padStart(2, "0")}`); // Ensure zero-padded format
  const scriptPath = path.join(dayPath, "index.js");

  if (!fs.existsSync(dayPath) || !fs.existsSync(scriptPath)) {
    console.error(`Day ${day} does not exist or is missing index.js`);
    process.exit(1);
  }

  console.log(`\nRunning Advent of Code - Day ${day}\n`);
  try {
    execSync(`node ${scriptPath}`, { stdio: "inherit" });
  } catch (error) {
    console.error(`Failed to run Day ${day}:`, error);
  }
};

const main = () => {
  const args = process.argv.slice(2);
  const day = args[0];
  if (!day) {
    console.error("Please specify a day number (e.g., npm run day -- 1)");
    process.exit(1);
  }
  runDay(day);
};

main();
