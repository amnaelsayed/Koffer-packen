import chalk from "chalk";
import gradient from "gradient-string";
import figlet from "figlet";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import promptSync from "prompt-sync";
import { createSpinner } from "nanospinner";
const prompt = promptSync();

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
class Questions {
  constructor(name, type, message, choices, answer) {
    this.name = name;
    this.type = type;
    this.message = message;
    this.choices = choices;
    this.answer = answer;
  }
}

const mathe1 = new Questions(
  `question`,
  `list`,
  "What is the square root of 64?",
  [6, 8, 21, 24],
  8
);

const mathe2 = new Questions(
  `question`,
  `list`,
  "Subtract 457 from 832",
  [375, 57, 376, 970],
  375
);
const mathe3 = new Questions(
  `question`,
  `list`,
  "50 times 5 is equal to",
  [2500, 505, 500, "None of these"],
  `None of these`
);
const mathe4 = new Questions(
  `question`,
  `list`,
  "Find the product of 72 * 3",
  [216, 7230, 106, 372],
  216
);
const mathe5 = new Questions(
  `question`,
  `list`,
  "The smallest number of seven digits is",
  ["0", "99,99,999", "10,10,100", "10,00,000"],
  "10,00,000"
);
const mathe6 = new Questions(
  `question`,
  `list`,
  "What is the largest two digits prime number?",
  [96, 97, 98, 99],
  97
);
const mathe7 = new Questions(
  `question`,
  `list`,
  "How many factors are there in 71?",
  [1, 2, 3, "None of these"],
  2
);
const mathe8 = new Questions(
  `question`,
  `list`,
  "What is the average value of 25, 20, 23 and 22?",
  [20, 21.5, 22.5, 24],
  22.5
);

const mathe9 = new Questions(
  `question`,
  `list`,
  "What is the sum of one digit prime numbers?",
  [11, 13, 15, 17],
  17
);
const mathe10 = new Questions(
  `question`,
  `list`,
  "How many hours in 90 minutes?",
  [1.5, 1.3, 1, "None of these"],
  1.5
);
const mathe11 = new Questions(
  `question`,
  `list`,
  "A clock seen through a mirror shows 8 o 'clock. What is the correct time?",
  [8.0, 4.0, 12.2, 12.4],
  4.0
);
const mathe12 = new Questions(
  `question`,
  `list`,
  "Using the number line, determine how much more than or less than -2.2 is 6.8?",
  ["9 more", "4.6 more", "4.6 less", "9 less"],
  "9 more"
);
const mathe13 = new Questions(
  `question`,
  `list`,
  "If Davids age is 27 years old in 2011. What was his age in 2003?",
  [17, 37, 20, 19],
  19
);
const mathe14 = new Questions(
  `question`,
  `list`,
  "What is 121 times 11",
  [1331, 1313, 1133, 3131],
  1331
);
const mathe15 = new Questions(
  `question`,
  `list`,
  "10001 - 101 = ?",
  [1001, 990, 9990, 9900],
  9900
);
const mathe16 = new Questions(
  `question`,
  `list`,
  "Which number has the greatest absolute value?",
  [0, -20, -10, 10],
  10
);
const mathe17 = new Questions(
  `question`,
  `list`,
  "Speed of a car is 60 km/hr. Distance covered in 1 ¼ hours is",
  [60, 65, 70, 75],
  75
);
const mathe18 = new Questions(
  `question`,
  `list`,
  "Which unit is used to measure length and width?",
  ["Scale", "Meter", "Liter", "Gram"],
  "Meter"
);
const mathe19 = new Questions(
  `question`,
  `list`,
  "How many sides are there in a nonagon?",
  [3, 5, 7, 9],
  9
);
const mathe20 = new Questions(
  `question`,
  `list`,
  "Find the sum of 111 + 222 + 333",
  [700, 666, 10, 100],
  666
);

async function handleAnswer(isCorrect) {
  const spinner = createSpinner("Checking your answer...").start();
  await sleep();

  if (isCorrect) {
    spinner.success({ text: `Nice work. That's a legit answer` });
  } else {
    spinner.error({ text: `💀💀💀 Game over!` });
    process.exit(1);
  }
}

async function askQuestion(obj) {
  let item = obj.answer;
  const answers = await inquirer.prompt({
    name: `question`,
    type: obj.type,
    message: obj.message,
    choices: obj.choices,
    answer: obj.answer,
  });
  if (answers.question === item) {
  }
  return handleAnswer(answers.question === item);
}

askQuestion(mathe1);
