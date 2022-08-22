#!/usr/bin/env node

import chalk from "chalk";
import gradient from "gradient-string";
import figlet from "figlet";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import promptSync from "prompt-sync";
import { createSpinner } from "nanospinner";
const prompt = promptSync();
import whatIsMissingGame from "./whatIsMissingg.js";
// import question1 from "./iqFragen.js";
import question2 from "./iqFragen.js";

/* npm install wird gebraicht, ich habe neue Packete addiert!!! */
let playerRemembers;
var player = {
  kofferArray: [],
  userName: [],
  userAge: 0,
  userCity: ``,
  lives: 3,
  currentBalance: 0,
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

const sleepMedium = (ms = 1100) => new Promise((r) => setTimeout(r, ms));
// Change the ms to 4000 or 5000
const sleepShort = (ms = 1000) => new Promise((r) => setTimeout(r, ms));
const sleepLong = (ms = 1000) => new Promise((r) => setTimeout(r, ms));

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
    chalkAnimation.karaoke(`Great to have you here ${player.userName} from ${player.userCity} \n\n
  Before you begin with the game, give me a second to explain the rules\n\n
  The $uitcase is fun & challenging (!only) memory game.\n
  Questions of different topics are combined with the classical\n
  "Packing the suitcase" game. \n
  You have to answer the questions correclty and remember all the items\n
  that you pack in your suitcase. Every time that you give 5 right answers\n
  you will be asked to say what is inside your suitcase. If your answer is right\n
  you will collect $money$ and level up. If you complete all levels you win\n
  tickes to magic destinations\n\n
  You have 3 lives to complete all the tasks\n\n`);
  // max.Gewicht 25Kg und bei jeder level kriegt 5 plus
  //  auch in den handleAnswer()
  await sleepLong();
  explanation.stop();
}

await gameRules();

async function handleAnswer(isCorrect, item, answers) {
  const spinner = createSpinner("Checking answer...").start();
  await sleepShort();
  if (isCorrect) {
    player.currentBalance += 40;
    spinner.success({
      text: ` 🤓 Great work ${player.userName}! You just put a / an ~ ${item} ~ in your $uitca$e and have ${player.currentBalance} 💵 for the journey of your dreams`,
    });
    player.kofferArray.push(item);
    if (player.currentBalance === 200) {
      const kofferFrage = await inquirer.prompt({
        name: `levelUp `,
        type: `input`,
        message: chalkAnimation.karaoke(
          `Do you still remember what is inside your $uitca$e? \n answer correclty and travel to the next level 💫`
        ),
      });
      async function answer() {
        const kofferFrage = await inquirer.prompt({
          name: `levelUp `,
          type: `input`,
          message: chalkAnimation.karaoke(
            `Do you still remember what is inside your $uitca$e? \n answer correclty this question to travel to the next level 💫`
          ),
          default() {
            return `Type in the correct order the items of your Suitcase`;
          },
        });
        playerRemembers = kofferFrage.levelUp;
      }
      console.log(player);
      if (kofferFrage.levelUp == player.kofferArray) {
        console.log(
          `👊🏼 Well done ${player.userName}. You just reached the next level.`
        );
      } else {
        console.log(
          gradient.teen(`

                   ______    ______   __       __  ________         ______   __     __  ________  _______
                   /      \  /      \ /  \     /  |/        |       /      \ /  |   /  |/        |/       \
                  /$$$$$$  |/$$$$$$  |$$  \   /$$ |$$$$$$$$/       /$$$$$$  |$$ |   $$ |$$$$$$$$/ $$$$$$$  |
                  $$ | _$$/ $$ |__$$ |$$$  \ /$$$ |$$ |__          $$ |  $$ |$$ |   $$ |$$ |__    $$ |__$$ |
                  $$ |/    |$$    $$ |$$$$  /$$$$ |$$    |         $$ |  $$ |$$  \ /$$/ $$    |   $$    $$<
                  $$ |$$$$ |$$$$$$$$ |$$ $$ $$/$$ |$$$$$/          $$ |  $$ | $$  /$$/  $$$$$/    $$$$$$$  |
                  $$ \__$$ |$$ |  $$ |$$ |$$$/ $$ |$$ |_____       $$ \__$$ |  $$ $$/   $$ |_____ $$ |  $$ |
                  $$    $$/ $$ |  $$ |$$ | $/  $$ |$$       |      $$    $$/    $$$/    $$       |$$ |  $$ |
                   $$$$$$/  $$/   $$/ $$/      $$/ $$$$$$$$/        $$$$$$/      $/     $$$$$$$$/ $$/   $$/

        `)
        );
      }
    }
  } else {
    player.lives--;
    spinner.error({
      text: `💔 UUppssss that was wrong, you now have ${player.lives} 😬 !`,
    });

    if (player.lives === 0) {
      await gameOver();
    }
    process.exit(1);
  }
}

await question2();

// console.log(player);
await whatIsMissingGame(wim3, wim33);
// await question2();
// await question3();
// await question4();
// await question5();

async function gameOver() {
  const go = chalkAnimation.karaoke(`
┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼
███▀▀▀██┼███▀▀▀███┼███▀█▄█▀███┼██▀▀▀
██┼┼┼┼██┼██┼┼┼┼┼██┼██┼┼┼█┼┼┼██┼██┼┼┼
██┼┼┼▄▄▄┼██▄▄▄▄▄██┼██┼┼┼▀┼┼┼██┼██▀▀▀
██┼┼┼┼██┼██┼┼┼┼┼██┼██┼┼┼┼┼┼┼██┼██┼┼┼
███▄▄▄██┼██┼┼┼┼┼██┼██┼┼┼┼┼┼┼██┼██▄▄▄
┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼
███▀▀▀███┼▀███┼┼██▀┼██▀▀▀┼██▀▀▀▀██▄┼
██┼┼┼┼┼██┼┼┼██┼┼██┼┼██┼┼┼┼██┼┼┼┼┼██┼
██┼┼┼┼┼██┼┼┼██┼┼██┼┼██▀▀▀┼██▄▄▄▄▄▀▀┼
██┼┼┼┼┼██┼┼┼██┼┼█▀┼┼██┼┼┼┼██┼┼┼┼┼██┼
███▄▄▄███┼┼┼─▀█▀┼┼─┼██▄▄▄┼██┼┼┼┼┼██▄
┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼
┼┼┼┼┼┼┼┼██┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼██┼┼┼┼┼┼┼┼┼
┼┼┼┼┼┼████▄┼┼┼▄▄▄▄▄▄▄┼┼┼▄████┼┼┼┼┼┼┼
┼┼┼┼┼┼┼┼┼▀▀█▄█████████▄█▀▀┼┼┼┼┼┼┼┼┼┼
┼┼┼┼┼┼┼┼┼┼┼█████████████┼┼┼┼┼┼┼┼┼┼┼┼
┼┼┼┼┼┼┼┼┼┼┼██▀▀▀███▀▀▀██┼┼┼┼┼┼┼┼┼┼┼┼
┼┼┼┼┼┼┼┼┼┼┼██┼┼┼███┼┼┼██┼┼┼┼┼┼┼┼┼┼┼┼
┼┼┼┼┼┼┼┼┼┼┼█████▀▄▀█████┼┼┼┼┼┼┼┼┼┼┼┼
┼┼┼┼┼┼┼┼┼┼┼┼███████████┼┼┼┼┼┼┼┼┼┼┼┼┼
┼┼┼┼┼┼┼┼▄▄▄██┼┼█▀█▀█┼┼██▄▄▄┼┼┼┼┼┼┼┼┼
┼┼┼┼┼┼┼┼▀▀██┼┼┼┼┼┼┼┼┼┼┼██▀▀┼┼┼┼┼┼┼┼┼
┼┼┼┼┼┼┼┼┼┼▀▀┼┼┼┼┼┼┼┼┼┼┼▀▀┼┼┼┼┼┼┼┼┼┼┼
┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼`);

  await sleepMedium();
  go.stop();
}
// await gameOver();

export default handleAnswer;
