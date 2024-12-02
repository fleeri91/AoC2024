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
const solutionPart1 = (parsedInput) => {
  const leftSide = parsedInput.map((item) =>
    parseInt(item.split(/\s+/)[0], 10)
  );
  const rightSide = parsedInput.map((item) =>
    parseInt(item.split(/\s+/)[1], 10)
  );

  leftSide.sort((a, b) => a - b);
  rightSide.sort((a, b) => a - b);

  let totalDifference = 0;
  leftSide.forEach((left, index) => {
    const difference = Math.abs(left - rightSide[index]);
    totalDifference += difference;
  });

  return totalDifference;
};

const solutionPart2 = (parsedInput) => {
  const leftSide = parsedInput.map((item) =>
    parseInt(item.split(/\s+/)[0], 10)
  );
  const rightSide = parsedInput.map((item) =>
    parseInt(item.split(/\s+/)[1], 10)
  );

  let totalValue = 0;

  for (let i = 0; i < leftSide.length; i++) {
    const value = leftSide[i];
    const count = rightSide.filter((num) => num === value).length;

    if (count > 0) {
      totalValue += value * count;
    }
  }

  return totalValue;
};

const main = () => {
  const day = path.basename(__dirname).split("-")[1];
  const rawInput = readInput(day);
  const parsedInput = parseInput(rawInput);

  console.log(`Day ${day}: part 1`, solutionPart1(parsedInput));
  console.log(`Day ${day}: part 2`, solutionPart2(parsedInput));
};

main();
