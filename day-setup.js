const fs = require("fs");
const path = require("path");

const day = process.argv[2].padStart(2, "0");
const dayPath = path.join(__dirname, `day-${day}`);

if (!fs.existsSync(dayPath)) {
  fs.mkdirSync(dayPath);
  fs.copyFileSync("template/index.ts", `${dayPath}/solution.ts`);
  fs.copyFileSync("template/input.txt", `${dayPath}/input.txt`);
  console.log(`Day ${day} setup completed!`);
} else {
  console.log(`Day ${day} already exists.`);
}
