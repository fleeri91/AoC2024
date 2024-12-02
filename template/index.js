import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const readInput = (day) => {
  const inputPath = path.join(__dirname, `input.txt`);
  try {
    return fs.readFileSync(inputPath, "utf8");
  } catch (error) {
    console.error(`Error reading input for day ${day}:`, error);
    process.exit(1);
  }
};

/**
 * Input parser
 *
 * @param rawInput
 * @returns
 */
const parseInput = (rawInput) => {
  return rawInput.trim().split("\n");
};

/**
 * Solution
 *
 * @param parsedInput
 * @returns
 */
const solution = (parsedInput) => {
  return "Solution 1 result";
};

const main = () => {
  const day = path.basename(__dirname).split("-")[1];
  const rawInput = readInput(day);
  const parsedInput = parseInput(rawInput);

  console.log(`Day ${day}:`, solution(parsedInput));
};

main();
