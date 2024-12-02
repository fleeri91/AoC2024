import fs from "fs";
import path from "path";

const readInput = (day: string): string => {
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
const parseInput = (rawInput: string): any => {
  return rawInput.trim().split("\n");
};

/**
 * Solution
 *
 * @param parsedInput
 * @returns
 */
const solution = (parsedInput: any): any => {
  return "Solution 1 result";
};

const main = () => {
  const day = path.basename(__dirname).split("-")[1];
  const rawInput = readInput(day);
  const parsedInput = parseInput(rawInput);

  console.log(`Day ${day}:`, solution(parsedInput));
};

main();
