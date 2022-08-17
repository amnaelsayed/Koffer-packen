import promptSync from "prompt-sync";
import chalk from "chalk";
import gradient from "gradient-string";
let coolGradient = gradient("red", "green", "blue");
let coolString = coolGradient("This is a fancy string!");
console.log(coolString);
// const gradient = require("gradient-string");
// const prompt = promptSync();

// let duck = gradient("orange", "yellow").multiline(
//   ["  __", "<(o )___", " ( ._> /", "  `---'"].join("\n")
// );
// console.log(duck);

console.log(chalk.blue("Hello world!"));
