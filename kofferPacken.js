import promptSync from "prompt-sync";
import chalk from "chalk";
import gradient from "gradient-string";
import figlet from "figlet";
import enquirer from "enquirer";
const prompt = promptSync();
// Beispiel zu figlet
figlet.text(
  "test",
  {
    font: "Standard",
  },
  function (err, data) {
    console.log(data);
  }
);
// Beispiel zu gradient string
let coolGradient = gradient("red", "green", "blue");
let coolString = coolGradient("This is a fancy string!");
console.log(coolString);

let duck = gradient("orange", "yellow").multiline(
  ["  __", "<(o )___", " ( ._> /", "  `---'"].join("\n")
);
console.log(duck);

// Beispiel zu chalk
console.log(chalk.blue("Hello world!"));

// Beispiel zu enquire--> select between choices
const { Select } = enquirer;

const prompt1 = new Select({
  name: "color",
  message: "Pick a flavor",
  choices: ["apple", "grape", "watermelon", "cherry", "orange"],
});
const prompt2 = new Select({
  name: "city",
  message: "Choose the right answer",
  choices: ["berlin", "münchen", "frankfurt"],
});

const answer1 = await prompt1.run();
console.log(answer1);
const answer2 = await prompt2.run();
console.log(answer2);
