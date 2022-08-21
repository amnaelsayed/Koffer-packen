#!/usr/bin/env node

import chalk from "chalk";
import gradient from "gradient-string";
import figlet from "figlet";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import { createSpinner } from "nanospinner";

/* npm install wird gebraicht, ich habe neue Packete addiert!!! */

var player = {
  kofferArray: [],
  userName: [],
  userAge: 0,
  userCity: ``,
  lives: 3,
  flower: [],
};

//iq fragen sind hier nur zum testen
const iqFragen = [
  {
    name: `iq1`,
    message: `What starts with "e" and ends with "e" but only has one letter in it?`,
    choices: [`envelope`, `e`, `eye`, `elite`],
    rightAnswer: `envelope`,
  },
  {
    name: `iq2`,
    message: `Which number should come next in the pattern?
      37, 34, 31, 28`,
    choices: [23, 25, 17, 26],
    rightAnswer: 25,
  },
];

//=======================================================

const sleepMedium = (ms = 4000) => new Promise((r) => setTimeout(r, ms));
// Change the ms to 4000 or 5000
const sleepShort = (ms = 1000) => new Promise((r) => setTimeout(r, ms));
const sleepLong = (ms = 10000) => new Promise((r) => setTimeout(r, ms));

const clear = () => {
  console.clear();
};

// console.clear();
// it doesn't work properly-better as a callback function

async function welcome() {
  const title = chalkAnimation.karaoke(
    `
  ███████ ██    ██ ██ ████████  ██████  █████  ███████ ███████ 
  ██      ██    ██ ██    ██    ██      ██   ██ ██      ██      
  ███████ ██    ██ ██    ██    ██      ███████ ███████ █████   
       ██ ██    ██ ██    ██    ██      ██   ██      ██ ██      
  ███████  ██████  ██    ██     ██████ ██   ██ ███████ ███████ `
  );
  await sleepMedium();
  title.stop(clear());
  // will stop the animation, otherwise it runs forever

  const welcomeText = chalkAnimation.karaoke(`
  ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
  ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
  ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
  ⣿⣿⣿⣿⣿⣿⣉⣉⣉⣿⣿⣇⣰⣶⣶⣶⣶⣆⣸⣿⣿⣉⣉⣉⣿⣿⣿⣿⣿⣿
  ⣿⣿⣿⣿⠟⠉⠉⣿⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⣿⠉⠉⠻⣿⣿⣿⣿
  ⣿⣿⣿⣿⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀⠀⣿⣿⣿⣿
  ⣿⣿⣿⣿⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀⠀⣿⣿⣿⣿
  ⣿⣿⣿⣿⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀⠀⣿⣿⣿⣿
  ⣿⣿⣿⣿⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀⠀⣿⣿⣿⣿
  ⣿⣿⣿⣿⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀⠀⣿⣿⣿⣿
  ⣿⣿⣿⣿⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀⠀⣿⣿⣿⣿
  ⣿⣿⣿⣿⣦⣀⣀⣿⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣿⣀⣀⣴⣿⣿⣿⣿
  ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
  ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
  ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿

  Welcome to the Suitcase,
  give the correct answer and fly to dreamy destinations!
  Are you readyyyyyyyyy?`);
  await sleepMedium();
  welcomeText.stop(clear());
}

await welcome();

async function introTextAndName() {
  const getName = await inquirer.prompt({
    name: `userName`,
    type: `input`,
    message: `
    Before we start I would like to
    know a few things about you...
    \n
    What is your name?`,
    default() {
      return `Player`;
      // it will show (player) in the console
    },
  });
  player.userName = getName.userName;
}
await introTextAndName();

// console.log(player);

async function getAge() {
  const age = await inquirer.prompt({
    name: `userAge`,
    type: `input`,
    message: `
    What is your age?`,
    default() {
      return `Age`;
    },
  });
  player.userAge = age.userAge;
}
await getAge();
async function getCity() {
  const city = await inquirer.prompt({
    name: `userCity`,
    type: `input`,
    message: `
    Where are you from?`,
    default() {
      return `City`;
    },
  });
  player.userCity = city.userCity;
}
await getCity();
/* alle Infos gehen in das player Objet :)
console.log(player);*/

async function gameRules() {
  const explanation =
    chalkAnimation.pulse(`Great to have you here ${player.userName} from ${player.userCity} \n\n
  Before you begin with the game, give me a second to explain the rules\n\n
  The $uitcase is fun & challenging (!only) memory game.\n
  Questions of different topics are combined with the classical\n
  "Packing the suitcase" game. \n
  You have to answer the questions correclty and remember all the items\n
  that you pack in your suitcase. Every time that you give 5 right answers\n
  you will be asked to say what is inside your suitcase. If your answer is right\n
  you will collect $money$ and level up. If you complete all levels you win\n
  tickes to magic destinations\n\n
  You have 3 lives to complete all the tasks`);
  await sleepLong;
  explanation.stop();
  // const rules = await inquirer.prompt({
  //   name: `rules`,
  //   type: `input`,
  //   message: `press enter when you are ready`,
  //   default() {
  //     return `...`;
  //   },
}

await gameRules();

async function askQuestion() {
  //we need to gfve the array of every which game
  // let index = Math.ceil(Math.random() * array.length - 1);

  const answer = await inquirer.prompt({
    name: `ìsTheOne`,
    type: `list`,
    message: `What starts with "e" and ends with "e" but only has one letter in it?`,
    choices: [`envelope`, `e`, `eye`, `elite`],
    // rightAnswer: array[index].rightAnswer,
    // frageWarSchon: false,
  });
  return handleAnswer(answer.isTheOne === `envelope`);
}

async function handleAnswer(isCorrect) {
  const spinner = createSpinner("Checking answer...").start();
  await sleepShort();

  if (isCorrect) {
    spinner.success({
      text: `Nice work ${player.userName}. That's a legit answer`,
    });
  } else {
    spinner.error({ text: `💀💀💀 Game over, you lose ${player.userName}!` });
    process.exit(1);
  }
}
// async function rightOrWrong(isCorrect) {
//   const spinner = createSpinner(`Cheching your answer...`).start();
//   await sleepShort();
//   if (isCorrect) {
//     spinner.success({
//       text: `Great work ${player.name}!\n
//     You just packed a ${answer.isTheOne} in your $uitca$e`,
//     });
//   } else {
//     spinner.error({ text: `Oh noooo, that was wrong, you just lost 1 life` });

//     process.exit(1);
//   }
// }

askQuestion(iqFragen);
