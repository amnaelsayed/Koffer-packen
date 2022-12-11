#!/usr/bin/env node

import chalk from "chalk";
import gradient from "gradient-string";
import figlet from "figlet";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import promptSync from "prompt-sync";
import { createSpinner } from "nanospinner";
const prompt = promptSync();
// import introGame from "./whatIsMissingg.js";
import arrSmile from "./nullEinsSpiel.js";
import arraySmileyColdHot from "./nullEinsSpiel.js";
import arrGhost from "./nullEinsSpiel.js";

/* npm install wird gebraicht, ich habe neue Packete addiert!!! */
let playerRemembers;
let wantToContinue;
var player = {
  kofferArray: [],
  userName: [],
  userAge: 0,
  userCity: ``,
  lives: ["💛", "💛", "💛"],
  currentBalance: 0,
  alife: true,
  level: 0,
  rightAnswer: 0,
};

//iq fragen sind hier nur zum testen
// const iqFragen = [
//   {
//     name: `iq1`,
//     message: `What starts with "e" and ends with "e" but only has one letter in it?`,
//     choices: [`envelope`, `e`, `eye`, `elite`],
//     rightAnswer: `envelope`,
//   },
//   {
//     name: `iq2`,
//     message: `Which number should come next in the pattern?
//       37, 34, 31, 28`,
//     choices: [23, 25, 17, 26],
//     rightAnswer: 25,
//   },
// ];

//=======================================================

const sleepMedium = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
// Change the ms to 4000 or 5000

const sleepShort = (ms = 1000) => new Promise((r) => setTimeout(r, ms));
const sleepLong = (ms = 5000) => new Promise((r) => setTimeout(r, ms));
const sleepExtraLong = (ms = 8000) => new Promise((r) => setTimeout(r, ms));

const clear = () => {
  console.clear();
};

// console.clear();
// it doesn't work properly-better as a callback function

async function welcome() {
  const title = chalkAnimation.karaoke(
    `\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n
                         ███████ ██    ██ ██ ████████  ██████  █████  ███████ ███████ 
                         ██      ██    ██ ██    ██    ██      ██   ██ ██      ██      
                         ███████ ██    ██ ██    ██    ██      ███████ ███████ █████   
                              ██ ██    ██ ██    ██    ██      ██   ██      ██ ██      
                         ███████  ██████  ██    ██     ██████ ██   ██ ███████ ███████ `
  );
  await sleepLong();
  title.stop(clear());
  // will stop the animation, otherwise it runs forever

  const welcomeText = chalkAnimation.karaoke(`\n\n\n\n\n
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
  
                                          Welcome to the Suitcase,\n\n\n
                            give the correct answer and fly to dreamy destinations!\n\n\n
                                         Are you readyyyyyyyyy?`);
  await sleepLong();
  welcomeText.stop(clear());
}

async function introTextAndName() {
  const getName = await inquirer.prompt({
    name: `userName`,
    type: `input`,
    message: `\n\n\n\n
                                         Before we start I would like to
                                          know a few things about you...
    \n\n\n
            What is your name?`,
    default() {
      return `Player`;
      // it will show (player) in the console
    },
  });
  player.userName = getName.userName;
}

// console.log(player);

async function getAge() {
  const age = await inquirer.prompt({
    name: `userAge`,
    type: `input`,
    message: `\n\n
            What is your age?`,

    default() {
      return `Age`;
    },
  });
  player.userAge = age.userAge;
}

async function getCity() {
  const city = await inquirer.prompt({
    name: `userCity`,
    type: `input`,
    message: `\n\n
            Where are you from?`,
    default() {
      return `City`;
    },
  });
  player.userCity = city.userCity;
  console.clear();
}

/* alle Infos gehen in das player Objet :)
console.log(player);*/

async function gameRules() {
  const explanation = chalkAnimation.karaoke(`\n\n\n\n
                                  Great to have you here ${player.userName} from ${player.userCity} \n\n
                    Before you begin with the game, give me a second to explain the rules:\n\n
                            The $uitcase is fun & challenging (!only) memory game.\n\n
           Questions of different topics are combined with the classical "Packing the suitcase" game. \n\n\n\n
      You have to answer the questions correclty and remember all the items that you pack in your suitcase.\n\n 
          Every time that you give 5 right answers you will be asked to say what is inside your suitcase.\n\n
                         If your answer is right you will collect $money$ and level up. \n\n
                        If you complete all levels you win tickes to magic destinations.\n\n
                                   You have 3 lives to complete all the tasks!\n\n`);
  // max.Gewicht 25Kg und bei jeder level kriegt 5 plus
  //  auch in den handleAnswer()
  await sleepExtraLong();

  explanation.stop();
}

async function nextLevel() {
  const title = chalkAnimation.rainbow(
    `\n\n\n\n\n\n\n\n
                                 ███    █████████   █████████    ██    ████████    █████████      
                                 ████   ███     ██ ██   ██       ██    ██    ██    ███    ██      
                                 ██ ██  ██████   ███    ██       ██    █████ ██    ██████ ██      
                                 ██  ██ ███     ██ ██   ██       ██    ██     ██  ████    ██      
                                 ██   ███████████   ██  ██       █████████████ ████ █████████████ 
                                                                    
                                                                    
   `
  );
  await sleepLong();
  title.stop(clear());
  // will stop the animation, otherwise it runs forever

  const welcomeText = chalkAnimation.rainbow(`\n\n\n\n\n\n\n
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

                                        \n\n\n\n      Congratulations!!!`);
  await sleepLong();
  welcomeText.stop(clear());
  // await spieleOneUP();
}

async function gameOver() {
  console.clear();
  const go = chalkAnimation.pulse(`
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

  await sleepLong();
  go.stop();
  console.clear();
  await continueGame();
}

async function lostOneLife() {
  console.clear();
  const go = chalkAnimation.glitch(`
         ██       ██████  ███████ ████████      ██████  ███    ██ ███████     ██      ██ ███████ ███████ 
         ██      ██    ██ ██         ██        ██    ██ ████   ██ ██          ██      ██ ██      ██      
         ██      ██    ██ ███████    ██        ██    ██ ██ ██  ██ █████       ██      ██ █████   █████   
         ██      ██    ██      ██    ██        ██    ██ ██  ██ ██ ██          ██      ██ ██      ██      
         ███████  ██████  ███████    ██         ██████  ██   ████ ███████     ███████ ██ ██      ███████ 
              
                     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                     @@@@@@@@@@@@@**,,,,,,,,,***@@@@@@@@@@@@@**,,,,,,,,,,,,**@@@@@@@@@@@@@
                     @@@@@@@@@@*,,,,,,,,,,,,,,,,,**@@@@@@@@*,,,,,,,,,,,,,,,,,,,*@@@@@@@@@@
                     @@@@@@@@*,,,,,,,,,,,,,,,,,,,,,**@@@@@*,,,,,,,,,,,,,,,,,,,,,,*@@@@@@@@
                     @@@@@@@*,,,,,,,,,,,,,,,,,,,,,,,,*@@@*,,,,,,,,,,,,,,,,,,,,,,,,*@@@@@@@
                     @@@@@@*,,,,,,,,,,,,,,,,,,,,,,,,,,***,,,,,,,,,,,,,,,,,,,,,,,,,,*@@@@@@
                     @@@@@*,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,*@@@@@
                     @@@@@*,,,,,,,,,,,,,,,,@@@@@,,,,,,,,,,,,,,,@@@@@,,,,,,,,,,,,,,,,*@@@@@
                     @@@@@*,,,,,,,,,,,,,,,,@@@@@*,,,,,,,,,,,,,@@@@@@,,,,,,,,,,,,,,,,*@@@@@
                     @@@@@*,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,*@@@@@
                     @@@@@*,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,*#@@@@@
                     @@@@@@**,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,*@@@@@@@
                     @@@@@@@@**,,,,,,,,,,,,,,,,,,,,@@@@@@@@@@%,,,,,,,,,,,,,,,,,,*@@@@@@@@@
                     @@@@@@@@@@@**,,,,,,,,,,,,,@@@@@@,,,,,,%@@@@@,,,,,,,,,,,,**@@@@@@@@@@@
                     @@@@@@@@@@@@@@@**,,,,,,,,@@@,,,,,,,,,,,,,,@@@@,,,,,,,*@@@@@@@@@@@@@@@
                     @@@@@@@@@@@@@@@@@@@**,,,,,,,,,,,,,,,,,,,,,,,,,,,,**@@@@@@@@@@@@@@@@@@
                     @@@@@@@@@@@@@@@@@@@@@@@**,,,,,,,,,,,,,,,,,,,,**@@@@@@@@@@@@@@@@@@@@@@
                     @@@@@@@@@@@@@@@@@@@@@@@@@@@**,,,,,,,,,,,,**@@@@@@@@@@@@@@@@@@@@@@@@@@
                     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@**,,,,**@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
`);

  await sleepMedium();

  go.stop();
  console.clear();
}

async function handleAnswer(isCorrect, item, answers) {
  await sleepMedium();
  console.clear();
  const spinner = createSpinner("Checking answer...").start();
  // await sleepShort();
  if (isCorrect) {
    player.currentBalance += 40;

    await sleepShort();
    spinner.success({
      text: `\n\n\n                                                                                                          ${player.lives.join(
        ` `
      )}
      \n\n\n\n\n\n\n\n\n\n
👏🏼 Great work ${
        player.userName
      }! You just put a / an ${item} in your $uitca$e and have ${
        player.currentBalance
      } 💵 for the journey of your dreams`,
    });
    await sleepLong();
    console.clear();

    console.log(
      chalk.yellow(`\n\n\n                                                                                                    ${player.lives.join(
        ` `
      )}
      \n\n\n\n\n\n\n\n\n
                                                    Remember:\n\n\n\n               
                                                       ${item}`)
    );
    // await sleepLong();
    await sleepMedium();
    player.kofferArray.push(item);

    player.rightAnswer += 1;

    console.clear();
    if (
      (player.kofferArray.length == 5 && player.currentBalance == 200) ||
      (player.kofferArray.length == 5 && player.currentBalance == 400) ||
      (player.kofferArray.length == 5 && player.currentBalance == 600)
    ) {
      console.log(player.kofferArray);
      await kofferAbfrage();
    }
  } else {
    player.lives.pop();
    spinner.error({
      text: `\n\n\n                                                                                                                      ${player.lives.join(
        ` `
      )}                                                                         
      \n\n\n\n\n\n\n\n
                                      😬  UUppssss that was wrong, you now have ${
                                        player.lives.length
                                      } 💔 !`,
    });

    await sleepShort();
    await lostOneLife();

    if (player.lives.length === 0) {
      console.clear();
      await gameOver();

      process.exit(1);
    }
  }
}

async function kofferAbfrage() {
  const answers = await inquirer.prompt({
    name: `levelUp`,
    type: `input`,
    message: `\n\n\n\n\n\n\n
                               Do you still remember what is inside your $uitca$e? \n \n \n 
                            Answer correclty this question to travel to the next level 💫\n \n
                                Type in the answers only with a space between.\n
                                                     Good Luck!`,
    default() {
      return `abfrage`;
    },
  });
  await sleepLong();
  console.clear();
  playerRemembers = answers.levelUp;
  // console.log(playerRemembers);
  // console.log(player.kofferArray.join(` `));
  if (
    player.kofferArray.join(` `) == playerRemembers &&
    player.kofferArray.length == 5 &&
    player.currentBalance == 600
  ) {
    player.kofferArray = [];
    player.level += 1;
    console.log(player.currentBalance);
    console.clear();
    console.log(
      `\n\n\n                                                                                                              ${player.lives.join(
        ` `
      )}
      \n\n\n\n
                      👊🏼 Well done ${player.userName}. You just reached the ${
        player.level
      }.`
    );

    await sleepLong();
    console.clear();
    await nextLevel();
    await level3();
  }
  if (
    player.kofferArray.join(` `) == playerRemembers &&
    player.kofferArray.length == 5 &&
    player.currentBalance == 400
  ) {
    player.kofferArray = [];
    player.level += 1;
    console.log(player.currentBalance);
    console.log(
      `\n\n\n                                                                                            ${player.lives.join(
        ` `
      )}
      \n\n\n\n
                    Well done ${player.userName}. You just reached the ${
        player.level
      }.`
    );

    await sleepLong();
    console.clear();
    await nextLevel();
    await level2();
  }
  if (
    player.kofferArray.join(` `) == playerRemembers &&
    player.kofferArray.length == 5 &&
    player.currentBalance == 200
  ) {
    player.kofferArray = [];
    player.level += 1;
    console.log(player.currentBalance);
    console.log(
      `\n\n\n                                                                                            ${player.lives.join(
        ` `
      )}
      \n\n\n\n
                    Well done ${player.userName}. You just reached the ${
        player.level
      }.`
    );

    await sleepLong();
    console.clear();
    await nextLevel();
    await level1();
  } else {
    console.clear();

    await gameOver();
    process.exit(0);
    // player.alife = false;
    // console.log(player.alife);
  }
}

// console.log(player);
//==============Fragen-Funktionen========================
// async function mathe1() {
//   let item;
//   const answers = await inquirer.prompt({
//     name: `mathQuestion`,
//     type: `list`,
//     message: `\n\n                                                                                           ${player.lives.join(
//       ` `
//     )}
//     \n\n\n\n\n\n\n\n\n\n
//                                       "Find the sum of 111 + 222 + 333"`,
//     choices: [700, 666, 10, 100],
//   });
//   if (answers.mathQuestion == "666") {
//     item = answers.mathQuestion;
//   }
//   console.log(item);
//   console.log(answers.mathQuestion);
//   return handleAnswer(answers.mathQuestion === "666", item);
// }
async function mathe1() {
  let item;
  const answers = await inquirer.prompt({
    name: `mathQuestion`,
    type: `list`,
    message: `\n\n                                                                                           ${player.lives.join(
      ` `
    )}
    \n\n\n\n\n\n\n\n\n\n
                                     "Find the sum of 111 + 222 + 333"`,
    choices: [700, 666, 10, 100],
  });
  if (answers.mathQuestion == 666) {
    item = answers.mathQuestion;
  }

  return handleAnswer(answers.mathQuestion == 666, item);
}
async function mathe2() {
  let item;
  const answers = await inquirer.prompt({
    name: `mathQuestion`,
    type: `list`,
    message: `\n\n                                                                                           ${player.lives.join(
      ` `
    )}
    \n\n\n\n\n\n\n\n\n\n
                                            "Subtract 457 from 832"`,
    choices: ["375", "57", "376", "970"],
  });
  if (answers.mathQuestion == "375") {
    item = answers.mathQuestion;
  }

  return handleAnswer(answers.mathQuestion == "375", item);
}

async function mathe3() {
  let item;
  const answers = await inquirer.prompt({
    name: `mathQuestion`,
    type: `list`,
    message: `\n\n                                                                                           ${player.lives.join(
      ` `
    )}
    \n\n\n\n\n\n\n\n\n\n
                                              "50 times 5 is equal to"`,
    choices: [2500, 505, 500, "None"],
  });
  if (answers.mathQuestion == "None") {
    item = answers.mathQuestion;
  }
  return handleAnswer(answers.mathQuestion == "None", item);
}

async function mathe4() {
  let item;
  const answers = await inquirer.prompt({
    name: `mathQuestion`,
    type: `list`,
    message: `\n\n                                                                                           ${player.lives.join(
      ` `
    )}
    \n\n\n\n\n\n\n\n\n\n
                                          "Find the product of 72 * 3"`,
    choices: [216, 7230, 106, 372],
  });
  if (answers.mathQuestion == 216) {
    item = answers.mathQuestion;
  }
  return handleAnswer(answers.mathQuestion == 216, item);
}

async function mathe5() {
  let item;
  const answers = await inquirer.prompt({
    name: `mathQuestion`,
    type: `list`,
    message: `\n\n                                                                                           ${player.lives.join(
      ` `
    )}
    \n\n\n\n\n\n\n\n\n\n
                                       "The smallest number of seven digits is"`,
    choices: ["0", "99,99,999", "10,10,100", "10,00,000"],
  });
  if (answers.mathQuestion == "10,00,000") {
    item = answers.mathQuestion;
  }
  return handleAnswer(answers.mathQuestion == "10,00,000", item);
}

async function mathe6() {
  let item;
  const answers = await inquirer.prompt({
    name: `mathQuestion`,
    type: `list`,
    message: `\n\n                                                                                           ${player.lives.join(
      ` `
    )}
    \n\n\n\n\n\n\n\n\n\n
                                 "What is the largest two digits prime number?"`,
    choices: [96, 97, 98, 99],
  });
  if (answers.mathQuestion == 97) {
    item = answers.mathQuestion;
  }
  return handleAnswer(answers.mathQuestion == 97, item);
}

async function mathe7() {
  let item;
  const answers = await inquirer.prompt({
    name: `mathQuestion`,
    type: `list`,
    message: `\n\n                                                                                           ${player.lives.join(
      ` `
    )}
    \n\n\n\n\n\n\n\n\n\n
                                     "How many factors are there in 71?"`,
    choices: [1, 2, 3, "None of these"],
  });
  if (answers.mathQuestion == 2) {
    item = answers.mathQuestion;
  }
  return handleAnswer(answers.mathQuestion == 2, item);
}

async function mathe8() {
  let item;
  const answers = await inquirer.prompt({
    name: `mathQuestion`,
    type: `list`,
    message: `\n\n                                                                                           ${player.lives.join(
      ` `
    )}
    \n\n\n\n\n\n\n\n\n\n
                               "What is the average value of 25, 20, 23 and 22?"`,
    choices: [20, 21.5, 22.5, 24],
  });
  if (answers.mathQuestion == 22.5) {
    item = answers.mathQuestion;
  }
  return handleAnswer(answers.mathQuestion == 22.5, item);
}

async function mathe9() {
  let item;
  const answers = await inquirer.prompt({
    name: `mathQuestion`,
    type: `list`,
    message: `\n\n                                                                                           ${player.lives.join(
      ` `
    )}
    \n\n\n\n\n\n\n\n\n\n
                                  "What is the sum of one digit prime numbers?"`,
    choices: [11, 13, 15, 17],
  });
  if (answers.mathQuestion == 17) {
    item = answers.mathQuestion;
  }
  return handleAnswer(answers.mathQuestion == 17, item);
}

async function mathe10() {
  let item;
  const answers = await inquirer.prompt({
    name: `mathQuestion`,
    type: `list`,
    message: `\n\n                                                                                           ${player.lives.join(
      ` `
    )}
    \n\n\n\n\n\n\n\n\n\n
                                        "How many hours in 90 minutes?"`,
    choices: [1.5, 1.3, 1, "None of these"],
  });
  if (answers.mathQuestion == 1.5) {
    item = answers.mathQuestion;
  }
  return handleAnswer(answers.mathQuestion == 1.5, item);
}

async function mathe11() {
  let item;
  const answers = await inquirer.prompt({
    name: `mathQuestion`,
    type: `list`,
    message: `\n\n                                                                                           ${player.lives.join(
      ` `
    )}
      \n\n\n\n\n\n\n\n\n\n
                 "A clock seen through a mirror shows 8 o 'clock. What is the correct time?"`,
    choices: [8.0, 4.0, 12.2, 12.4],
  });
  if (answers.mathQuestion == 4.0) {
    item = answers.mathQuestion;
  }
  return handleAnswer(answers.mathQuestion == 4.0, item);
}
async function mathe12() {
  let item;
  const answers = await inquirer.prompt({
    name: `mathQuestion`,
    type: `list`,
    message: `\n\n                                                                                           ${player.lives.join(
      ` `
    )}
      \n\n\n\n\n\n\n\n\n\n
               "Using the number line, determine how much more than or less than -2.2 is 6.8?"`,
    choices: ["9more", "4.6more", "4.6less", "9less"],
  });
  if (answers.mathQuestion == "9more") {
    item = answers.mathQuestion;
  }
  return handleAnswer(answers.mathQuestion == "9more", item);
}

async function mathe13() {
  let item;
  const answers = await inquirer.prompt({
    name: `mathQuestion`,
    type: `list`,
    message: `\n\n                                                                                           ${player.lives.join(
      ` `
    )}
    \n\n\n\n\n\n\n\n\n\n
                         "If Davids age is 27 years old in 2011. What was his age in 2003?"`,
    choices: [17, 37, 20, 19],
  });
  if (answers.mathQuestion == 19) {
    item = answers.mathQuestion;
  }
  return handleAnswer(answers.mathQuestion == 19, item);
}

async function mathe14() {
  let item;
  const answers = await inquirer.prompt({
    name: `mathQuestion`,
    type: `list`,
    message: `\n\n                                                                                           ${player.lives.join(
      ` `
    )}
    \n\n\n\n\n\n\n\n\n\n
                                              "What is 121 times 11"`,
    choices: [1331, 1313, 1133, 3131],
  });
  if (answers.mathQuestion == 1331) {
    item = answers.mathQuestion;
  }
  return handleAnswer(answers.mathQuestion == 1331, item);
}

async function mathe15() {
  let item;
  const answers = await inquirer.prompt({
    name: `mathQuestion`,
    type: `list`,
    message: `\n\n                                                                                           ${player.lives.join(
      ` `
    )}
    \n\n\n\n\n\n\n\n\n\n
                                                "10001 - 101 = ?"`,
    choices: [1001, 990, 9990, 9900],
  });
  if (answers.mathQuestion == 9900) {
    item = answers.mathQuestion;
  }
  return handleAnswer(answers.mathQuestion == 9900, item);
}

async function mathe16() {
  let item;
  const answers = await inquirer.prompt({
    name: `mathQuestion`,
    type: `list`,
    message: `\n\n                                                                                           ${player.lives.join(
      ` `
    )}
    \n\n\n\n\n\n\n\n\n\n
                              "Which number has the greatest absolute value?"`,
    choices: [0, -20, -10, 10],
  });
  if (answers.mathQuestion == 10) {
    item = answers.mathQuestion;
  }
  return handleAnswer(answers.mathQuestion == 10, item);
}

async function mathe17() {
  let item;
  const answers = await inquirer.prompt({
    name: `mathQuestion`,
    type: `list`,
    message: `\n\n                                                                                           ${player.lives.join(
      ` `
    )}
    \n\n\n\n\n\n\n\n\n\n
                       "Speed of a car is 60 km/hr. Distance covered in 1 ¼ hours is"`,
    choices: [60, 65, 70, 75],
  });
  if (answers.mathQuestion == 75) {
    item = answers.mathQuestion;
  }
  return handleAnswer(answers.mathQuestion == 75, item);
}

async function mathe18() {
  let item;
  const answers = await inquirer.prompt({
    name: `mathQuestion`,
    type: `list`,
    message: `\n\n                                                                                           ${player.lives.join(
      ` `
    )}
    \n\n\n\n\n\n\n\n\n\n
                             "Which unit is used to measure length and width?"`,
    choices: ["Scale", "Meter", "Liter", "Gram"],
  });
  if (answers.mathQuestion == "Meter") {
    item = answers.mathQuestion;
  }
  return handleAnswer(answers.mathQuestion == "Meter", item);
}

async function mathe19() {
  let item;
  const answers = await inquirer.prompt({
    name: `mathQuestion`,
    type: `list`,
    message: `\n\n                                                                                           ${player.lives.join(
      ` `
    )}
    \n\n\n\n\n\n\n\n\n\n
                                  "How many sides are there in a nonagon?"`,
    choices: [3, 5, 7, 9],
  });
  if (answers.mathQuestion == 9) {
    item = answers.mathQuestion;
  }
  return handleAnswer(answers.mathQuestion == 9, item);
}

async function mathe20() {
  let item;
  const answers = await inquirer.prompt({
    name: `mathQuestion`,
    type: `list`,
    message: `\n\n                                                                                           ${player.lives.join(
      ` `
    )}
    \n\n\n\n\n\n\n\n\n\n
                                       "What is the square root of 64?"`,
    choices: [6, 8, 21, 24],
  });
  if (answers.mathQuestion == 8) {
    item = answers.mathQuestion;
  }
  return handleAnswer(answers.mathQuestion == 8, item);
}

async function trivial1() {
  let item;
  const answers = await inquirer.prompt({
    name: `trivialFragen`,
    type: `list`,
    message: `\n\n                                                                                           ${player.lives.join(
      ` `
    )}
    \n\n\n\n\n\n\n\n\n\n
                   "In what year did the Titanic sink in the Atlantic on her maiden voyage?"`,
    choices: ["1912", "1921", "1914", "1916"],
  });
  if (answers.trivialFragen == "1912") {
    item = answers.trivialFragen;
  }
  return handleAnswer(answers.trivialFragen == "1912", item);
}

async function trivial2() {
  let item;
  const answers = await inquirer.prompt({
    name: `trivialFragen`,
    type: `list`,
    message: `\n\n                                                                                           ${player.lives.join(
      ` `
    )}
    \n\n\n\n\n\n\n\n\n\n
                                       "What is the smallest bird in the world?"`,
    choices: ["owl", "swallow", "pigeon", "Bee Hummingbird"],
  });
  if (answers.trivialFragen == "Bee Hummingbird") {
    item = answers.trivialFragen;
  }
  return handleAnswer(answers.trivialFragen == "Bee Hummingbird", item);
}

async function trivial3() {
  let item;
  const answers = await inquirer.prompt({
    name: `trivialFragen`,
    type: `list`,
    message: `\n\n                                                                                           ${player.lives.join(
      ` `
    )}
    \n\n\n\n\n\n\n\n\n\n
      "In which movie did Hugh Jackman play the rival magician of the character played by Christian Bale?"`,
    choices: ["The prestige", "Lord of the Rings", "Assassins", "Dream"],
  });
  if (answers.trivialFragen == "The prestige") {
    item = answers.trivialFragen;
  }
  return handleAnswer(answers.trivialFragen == "The prestige", item);
}

async function trivial4() {
  let item;
  const answers = await inquirer.prompt({
    name: `trivialFragen`,
    type: `list`,
    message: `\n\n                                                                                           ${player.lives.join(
      ` `
    )}
    \n\n\n\n\n\n\n\n\n\n
                                "What year was The Godfather first published?"`,
    choices: [1917, 1972, 1982, 1983],
  });
  if (answers.trivialFragen == 1972) {
    item = answers.trivialFragen;
  }
  return handleAnswer(answers.trivialFragen == 1972, item);
}

async function trivial5() {
  let item;
  const answers = await inquirer.prompt({
    name: `trivialFragen`,
    type: `list`,
    message: `\n\n                                                                                           ${player.lives.join(
      ` `
    )}
    \n\n\n\n\n\n\n\n\n\n
                                "How many players are there on a water polo team?"`,
    choices: [9, 10, 7, 8],
  });
  if (answers.trivialFragen == 8) {
    item = answers.trivialFragen;
  }
  return handleAnswer(answers.trivialFragen == 8, item);
}

async function trivial6() {
  let item;
  const answers = await inquirer.prompt({
    name: `trivialFragen`,
    type: `list`,
    message: `\n\n                                                                                           ${player.lives.join(
      ` `
    )}
    \n\n\n\n\n\n\n\n\n\n
                                      "How many hearts does an octopus have?"`,
    choices: [5, 3, 4, 7],
  });
  if (answers.trivialFragen == 3) {
    item = answers.trivialFragen;
  }
  return handleAnswer(answers.trivialFragen == 3, item);
}

async function trivial7() {
  let item;
  const answers = await inquirer.prompt({
    name: `trivialFragen`,
    type: `list`,
    message: `\n\n                                                                                           ${player.lives.join(
      ` `
    )}
    \n\n\n\n\n\n\n\n\n\n
              "Which singer was known as The King of Pop and The Gloved One among others?"`,
    choices: ["Michael Jackson", "Elton John", "Ubo Jürgens", "John Lennon"],
  });
  if (answers.trivialFragen == "Michael Jackson") {
    item = answers.trivialFragen;
  }
  return handleAnswer(answers.trivialFragen == "Michael Jackson", item);
}

async function trivial8() {
  let item;
  const answers = await inquirer.prompt({
    name: `trivialFragen`,
    type: `list`,
    message: `\n\n                                                                                           ${player.lives.join(
      ` `
    )}
    \n\n\n\n\n\n\n\n\n\n
                                "What nationality was the artist Henri Matisse?"`,
    choices: ["German", "Russian", "Arabian", "French"],
  });
  if (answers.trivialFragen == "French") {
    item = answers.trivialFragen;
  }
  return handleAnswer(answers.trivialFragen == "French", item);
}

async function trivial9() {
  let item;
  const answers = await inquirer.prompt({
    name: `trivialFragen`,
    type: `list`,
    message: `\n\n                                                                                           ${player.lives.join(
      ` `
    )}
    \n\n\n\n\n\n\n\n\n\n
                                "Name the land.Giza Pyramid and the Great Sphinx?"`,
    choices: ["Syria", "Egypt", "Italy", "Greece"],
  });
  if (answers.trivialFragen === "Egypt") {
    item = answers.trivialFragen;
  }
  return handleAnswer(answers.trivialFragen === "Egypt", item);
}
async function trivial10() {
  let item;
  const answers = await inquirer.prompt({
    name: `trivialFragen`,
    type: `list`,
    message: ` \n\n                                                                                           ${player.lives.join(
      ` `
    )}
    \n\n\n\n\n\n\n\n\n\n
                                      What year is modern paper first used?`,
    choices: [105, 109, 125, 912],
  });
  if (answers.trivialFragen == 105) {
    item = answers.trivialFragen;
  }
  return handleAnswer(answers.trivialFragen == 105, item);
}

async function question1() {
  let item;
  var answers = await inquirer.prompt({
    name: `iq_1`,
    type: `list`,
    message: `\n\n                                                                                           ${player.lives.join(
      ` `
    )}
    \n\n\n\n\n\n\n\n\n\n
                     What starts with "e" and ends with "e" but only has one letter in it?`,
    choices: [`envelope`, `e`, `eye`, `elite`],
    rightAnswer: `envelope`,
  });
  if (answers.iq_1 === `envelope`) {
    item = answers.iq_1;
  }
  return handleAnswer(answers.iq_1 === `envelope`, item, answers);
}
// ==========================
async function question2() {
  let item;
  const answers = await inquirer.prompt({
    name: `iq_2`,
    type: `list`,
    message: `\n\n                                                                                           ${player.lives.join(
      ` `
    )}
    \n\n\n\n\n\n\n\n\n\n
                                  Which number should come next in the pattern?\n\n
                                                 37, 34, 31, 28`,
    choices: [23, 25, 17, 26],
  });
  if (answers.iq_2 == 25) {
    item = answers.iq_2;
  }
  return handleAnswer(answers.iq_2 == 25, item);
}
// ==========================
async function question3() {
  let item;
  const answers = await inquirer.prompt({
    name: `iq_3`,
    type: `list`,
    message: `\n\n                                                                                           ${player.lives.join(
      ` `
    )}
    \n\n\n\n\n\n\n\n\n\n
                                            Book is to Reading as Fork is to:`,
    choices: [`drawing`, `writing`, `stirring`, `eating`],
  });
  if (answers.iq_3 === `eating`) {
    item = answers.iq_3;
  }
  return handleAnswer(answers.iq_3 === `eating`, item);
}
// ==========================
async function question4() {
  let item;
  const answers = await inquirer.prompt({
    name: `iq_4`,
    type: `list`,
    message: `\n\n                                                                                           ${player.lives.join(
      ` `
    )}
    \n\n\n\n\n\n\n\n\n\n
                                     What number best completes the analogy:\n\n
                                                       8:4 as 10:`,
    choices: [3, 7, 24, 5],
  });
  if (answers.iq_4 == 5) {
    item = answers.iq_4;
  }
  return handleAnswer(answers.iq_4 == 5, item);
}
// ==========================
async function question5() {
  let item;
  const answers = await inquirer.prompt({
    name: `iq_5`,
    type: `list`,
    message: `\n\n                                                                                           ${player.lives.join(
      ` `
    )}
    \n\n\n\n\n\n\n\n\n\n
                                                   12593 is to 35291\n\n
                                                  and 29684 is to 46982\n\n
                                                 therefore 72936 is to ?`,
    choices: [69237, 62397, 32796, 39762],
  });
  if (answers.iq_5 == 69237) {
    item = answers.iq_5;
  }

  return handleAnswer(answers.iq_5 == 69237, item);
}
// ==========================
async function question6() {
  const answers = await inquirer.prompt({
    name: `iq_6`,
    type: `list`,
    message: `\n\n                                                                                           ${player.lives.join(
      ` `
    )}
    \n\n\n\n\n\n\n\n\n\n
                              How many cases do you need if you have to pack 112 pairs\n\n
                                      of shoes into cases that each hold 28 shoes?`,
    choices: [16, 8, 24, 12],
  });
  if (answers.iq_8 == 8) {
    item = answers.iq_;
  }
  return handleAnswer(answers.iq_1 == 8, item);
}
// ==========================
async function question7() {
  const answers = await inquirer.prompt({
    name: `iq_7`,
    type: `list`,
    message: `\n\n                                                                                           ${player.lives.join(
      ` `
    )}
    \n\n\n\n\n\n\n\n\n\n
                                      Which number should come next in the pattern?\n\n
                                                   -2 , 5, -4, 3, -6:`,
    choices: [0, 1, -3, -4],
  });
  if (answers.iq_7 == 1) {
    item = answers.iq_7;
  }
  return handleAnswer(answers.iq_7 == 1, item);
}
// ==========================
async function question8() {
  let item;
  const answers = await inquirer.prompt({
    name: `iq_8`,
    type: `list`,
    message: `\n\n                                                                                           ${player.lives.join(
      ` `
    )}
    \n\n\n\n\n\n\n\n\n\n
                                    Which number should come next in the pattern?\n\n
                                                      7,21,14,42,28:`,
    choices: [84, 56, 64, 76],
  });
  if (answers.iq_8 == 84) {
    item = answers.iq_8;
  }
  return handleAnswer(answers.iq_8 == 84, item);
}
// ==========================

async function question9() {
  let item;
  const answers = await inquirer.prompt({
    name: `iq_9`,
    type: `list`,
    message: `\n\n                                                                                           ${player.lives.join(
      ` `
    )}
    \n\n\n\n\n\n\n\n\n\n
                                   Which number should replace the questionmark?\n\n
                                          1, 10, 3, 8, ?, 6, 7, 4, 9, 2:`,
    choices: [8, 5, 9, 11],
  });
  if (answers.iq_9 == 5) {
    item = answers.iq_9;
  }
  return handleAnswer(answers.iq_9 == 5, item);
}
// ==========================

async function question10() {
  let item;
  const answers = await inquirer.prompt({
    name: `iq_10`,
    type: `list`,
    message: `\n\n\                                                                                           ${player.lives.join(
      ` `
    )}
    n\n\n\n\n\n\n\n\n\n
                                     Which number should replace the questionmark?\n\n
                                                 1, 3, 9, 27, ?, 243:`,
    choices: [36, 78, 81, 112],
  });
  if (answers.iq_10 == "81") {
    item = answers.iq_10;
  }
  return handleAnswer(answers.iq_10 == 81, item);
}
// ==========================

async function question11() {
  let item;
  const answers = await inquirer.prompt({
    name: `iq_11`,
    type: `list`,
    message: `\n\n                                                                                           ${player.lives.join(
      ` `
    )}
    \n\n\n\n\n\n\n\n\n\n
    Jack is looking at Anne. Anne is looking at George. Jack is married, George is not, and we don’t know if Anne is married. Is a married person looking at an unmarried person?`,
    choices: [`yes`, `no`, `we cannot know`],
  });
  if (answers.iq_11 === `yes`) {
    item = answers.iq_11;
  }
  return handleAnswer(answers.iq_11 === `yes`, item);
}
// ==========================

async function question12() {
  let item;
  const answers = await inquirer.prompt({
    name: `iq_12`,
    type: `list`,
    message: `\n\n                                                                                           ${player.lives.join(
      ` `
    )}
    \n\n\n\n\n\n\n\n\n\n
              The day before two days after the day before tomorrow is Saturday. What day is it today?`,
    choices: [`Sunday`, `Tuesday`, `Monday`, `Friday`],
  });
  if (answers.iq_12 === `Friday`) {
    item = answers.iq_12;
  }
  return handleAnswer(answers.iq_12 === `Friday`, item);
}
// ==========================

async function question13() {
  let item;
  const answers = await inquirer.prompt({
    name: `iq_13`,
    type: `list`,
    message: `\n\n                                                                                           ${player.lives.join(
      ` `
    )}
    \n\n\n\n\n\n\n\n\n\n
                                          What can be broken but never held?`,
    choices: [`heart`, `vase`, `promise`, `none of this`],
  });
  if (answers.iq_13 === `promise`) {
    item = answers.iq_13;
  }
  return handleAnswer(answers.iq_13 === promise, item);
}
// ==========================

async function question14() {
  let item;
  const answers = await inquirer.prompt({
    name: `iq_14`,
    type: `list`,
    message: `\n\n                                                                                           ${player.lives.join(
      ` `
    )}
    \n\n\n\n\n\n\n\n\n\n
                                   What’s full of holes but can still hold water?`,
    choices: [`cheese`, `rock`, `sponge`, `shocks`],
  });
  if (answers.iq_14 === `sponge`) {
    item = answers.iq_14;
  }
  return handleAnswer(answers.iq_14 === `sponge`, item);
}
// ==========================

async function question15() {
  let item;
  const answers = await inquirer.prompt({
    name: `iq_15`,
    type: `list`,
    message: `\n\n                                                                                           ${player.lives.join(
      ` `
    )}
    \n\n\n\n\n\n\n\n\n\n
                                      What is always coming but never arrives?`,
    choices: [`train`, `tomorrow`, `money`, `happines`],
  });
  if (answers.iq_15 === `tomorrow`) {
    item = answers.iq_15;
  }
  return handleAnswer(answers.iq_15 === `tomorrow`, item);
}
// ==========================

async function question16() {
  let item;
  const answers = await inquirer.prompt({
    name: `iq_16`,
    type: `list`,
    message: `\n\n                                                                                           ${player.lives.join(
      ` `
    )}
    \n\n\n\n\n\n\n\n\n\n
                                        Which number should replace the questionmark?
    2, 3, 5, 7, 11, 13, 17, 19, ?, 29:`,
    choices: [`23`, `22`, `25`, `30`],
  });
  if (answers.iq_16 == "23") {
    item = answers.iq_16;
  }
  return handleAnswer(answers.iq_16 == 23, item);
}
// ==========================

async function question17() {
  let item;
  const answers = await inquirer.prompt({
    name: `iq_17`,
    type: `list`,
    message: `\n\n                                                                                           ${player.lives.join(
      ` `
    )}
    \n\n\n\n\n\n\n\n\n\n
    There are two ducks in front of a duck, two ducks behind a duck and a duck in the middle. How many ducks are there?`,
    choices: [5, 6, 3, 4],
  });
  if (answers.iq_17 == "3") {
    item = answers.iq_17;
  }
  return handleAnswer(answers.iq_17 == 3, item);
}
async function countElemCold() {
  const arraySmileyColdHot = [
    "  🥶  ",
    "  🥵  ",
    "  🤡  ",
    "  🥶  ",
    "  🥶  ",
    "  🥵  ",
    "  🥶  ",
    "  🥶  ",
    "  🥵  ",
    "  🥶  ",
    "  🥵  ",
    "  🥵  ",
    "  🤡  ",
  ];
  const filtered = arraySmileyColdHot.filter((num) => num === "  🥶  ");
  console.log(
    `\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n
                             Try to concentrate and be fast. You only have 5 sec for this task!`
  );
  await sleepLong();
  console.clear();
  console.log(
    `\n\n                                                                                           ${player.lives.join(
      ` `
    )}
    \n\n\n\n\n\n\n\n\n\n
                                                    Count the "  ${
                                                      filtered[0]
                                                    }  "!`
  );
  console.log(`\n\n                                                                       
  \n\n\n${arraySmileyColdHot}\n`);
  await sleepLong();
  console.clear();
  let item;
  const answers = await inquirer.prompt({
    name: `ct_Cold`,
    type: `input`,
    message: `\n\n                                                                                           ${player.lives.join(
      ` `
    )}
    \n\n\n\n\n
                           Your time is up ${player.userName}! How many "  ${
      filtered[0]
    }  "have you counted?\n\n\n\n
                                                  `,
    // choices: [`0`, `1`, `-3`, `-4`],
  });
  if (answers.ct_Cold === filtered.length) {
    item = answers.ct_Cold;
  }

  return handleAnswer(answers.ct_Cold == filtered.length, answers.ct_Cold);
}
// await countElemClown("  🤡  ");

async function countElemClown() {
  const arraySmileyColdHot = [
    "  🥶  ",
    "  🥵  ",
    "  🤡  ",
    "  🥶  ",
    "  🥶  ",
    "  🥵  ",
    "  🥶  ",
    "  🥶  ",
    "  🥵  ",
    "  🥶  ",
    "  🥵  ",
    "  🥵  ",
    "  🤡  ",
  ];
  const filtered = arraySmileyColdHot.filter((num) => num === "  🤡  ");
  console.log(
    `\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n
                             Try to concentrate and be fast. You only have 5 sec for every task!`
  );
  await sleepLong();
  console.clear();
  console.log(
    `\n\n                                                                                           ${player.lives.join(
      ` `
    )}
    \n\n\n\n\n\n\n\n\n\n
                                                    Count the "  ${
                                                      filtered[0]
                                                    }  "!`
  );
  console.log(`\n\n                                                                                           
    
  )}
  \n\n\n${arraySmileyColdHot}\n`);
  await sleepLong();
  console.clear();
  let item;
  const answers = await inquirer.prompt({
    name: `ct_Clown`,
    type: `input`,
    message: `\n\n\n\n\n\n\n
                           Your time is up ${player.userName}! How many "  ${filtered[0]}  "have you counted?\n\n\n\n
                                                  `,
    // choices: [`0`, `1`, `-3`, `-4`],
  });
  if (answers.ct_Clown === filtered.length) {
    item = answers.ct_Clown;
  }

  return handleAnswer(answers.ct_Clown == filtered.length, answers.ct_Clown);
}

async function countElemHot() {
  const arraySmileyColdHot = [
    "  🥶  ",
    "  🥵  ",
    "  🤡  ",
    "  🥶  ",
    "  🥶  ",
    "  🥵  ",
    "  🥶  ",
    "  🥶  ",
    "  🥵  ",
    "  🥶  ",
    "  🥵  ",
    "  🥵  ",
    "  🤡  ",
  ];
  const filtered = arraySmileyColdHot.filter((num) => num === "  🥵  ");
  console.log(
    `\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n
                             Try to concentrate and be fast. You only have 5 sec for every task!`
  );
  await sleepLong();
  console.clear();
  console.log(
    `\n\n                                                                                           ${player.lives.join()}
    \n\n\n\n\n\n\n\n\n\n
                                                    Count the "  ${
                                                      filtered[0]
                                                    }  "!`
  );
  console.log(`\n\n                                                                                           ${player.lives.join()}
  \n\n\n${arraySmileyColdHot}\n`);
  await sleepLong();
  console.clear();
  let item;
  const answers = await inquirer.prompt({
    name: `ct_Hot`,
    type: `input`,
    message: `\n\n                                                                                           ${player.lives.join()}
    \n\n\n\n\n
                           Your time is up ${player.userName}! How many "  ${
      filtered[0]
    }  "have you counted?\n\n\n\n
                                                  `,
    // choices: [`0`, `1`, `-3`, `-4`],
  });
  if (answers.ct_Hot === filtered.length) {
    item = answers.ct_Hot;
  }

  return handleAnswer(answers.ct_Hot == filtered.length, answers.ct_Hot);
}

async function countElemSmileCat() {
  const arrCat = [
    "  😽   ",
    "  😼  ",
    "  😻  ",
    "  😽   ",
    "  😻  ",
    "  😽   ",
    "  😽   ",
    "  😻  ",
    "  😼  ",
    "  😽   ",
    "  😽   ",
    "  😽   ",
  ];
  const filtered = arrCat.filter((num) => num === "  😽   ");
  console.log(
    `\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n
                             Try to concentrate and be fast. You only have 5 sec for every task!`
  );
  await sleepLong();
  console.clear();
  console.log(
    `\n\n                                                                                           ${player.lives.join()}
    \n\n\n\n\n\n\n\n\n\n
                                                    Count the "  ${
                                                      filtered[0]
                                                    }  "!`
  );
  console.log(`\n\n                                                                                           
  \n\n\n${arrCat}\n`);
  await sleepLong();
  console.clear();
  let item;
  const answers = await inquirer.prompt({
    name: `ct_Cat`,
    type: `input`,
    message: `\n\n                                                                                           ${player.lives.join()}
    \n\n\n\n\n
                           Your time is up ${player.userName}! How many "  ${
      filtered[0]
    }  "have you counted?\n\n\n\n
                                                  `,
    // choices: [`0`, `1`, `-3`, `-4`],
  });
  if (answers.ct_Cat === filtered.length) {
    item = answers.ct_Cat;
  }

  return handleAnswer(answers.ct_Cat == filtered.length, answers.ct_Cat);
}
async function countElemAngryCat() {
  const arrCat = [
    "  😽   ",
    "  😼  ",
    "  😻  ",
    "  😽   ",
    "  😻  ",
    "  😽   ",
    "  😽   ",
    "  😻  ",
    "  😼  ",
    "  😽   ",
    "  😽   ",
    "  😽   ",
  ];
  const filtered = arrCat.filter((num) => num === "  😼  ");
  console.log(
    `\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n
                             Try to concentrate and be fast. You only have 5 sec for every task!`
  );
  await sleepLong();
  console.clear();
  console.log(
    `\n\n                                                                                           ${player.lives.join()}
    \n\n\n\n\n\n\n\n\n\n
                                                    Count the "  ${
                                                      filtered[0]
                                                    }  "!`
  );
  console.log(`\n\n                                                                                           
  \n\n\n${arrCat}\n`);
  await sleepLong();
  console.clear();
  let item;
  const answers = await inquirer.prompt({
    name: `ct_AngCat`,
    type: `input`,
    message: `\n\n                                                                                           ${player.lives.join()}
    \n\n\n\n\n
                           Your time is up ${player.userName}! How many "  ${
      filtered[0]
    }  "have you counted?\n\n\n\n
                                                  `,
    // choices: [`0`, `1`, `-3`, `-4`],
  });
  if (answers.ct_AngCat === filtered.length) {
    item = answers.ct_AngCat;
  }

  return handleAnswer(answers.ct_AngCat == filtered.length, answers.ct_AngCat);
}

async function countElemLoveCat() {
  const arrCat = [
    "  😽   ",
    "  😼  ",
    "  😻  ",
    "  😽   ",
    "  😻  ",
    "  😽   ",
    "  😽   ",
    "  😻  ",
    "  😼  ",
    "  😽   ",
    "  😽   ",
    "  😽   ",
  ];
  const filtered = arrCat.filter((num) => num === "  😻  ");
  console.log(
    `\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n
                             Try to concentrate and be fast. You only have 5 sec for every task!`
  );
  await sleepLong();
  console.clear();
  console.log(
    `\n\n                                                                                           ${player.lives.join()}
    \n\n\n\n\n\n\n\n\n\n
                                                    Count the "  ${
                                                      filtered[0]
                                                    }  "!`
  );
  console.log(`\n\n                                                                                           
  \n\n\n${arrCat}\n`);
  await sleepLong();
  console.clear();
  let item;
  const answers = await inquirer.prompt({
    name: `ct_LoveCat`,
    type: `input`,
    message: `\n\n\n\n\n\n\n
                           Your time is up ${player.userName}! How many "  ${filtered[0]}  "have you counted?\n\n\n\n
                                                  `,
    // choices: [`0`, `1`, `-3`, `-4`],
  });
  if (answers.ct_LoveCat === filtered.length) {
    item = answers.ct_LoveCat;
  }

  return handleAnswer(
    answers.ct_LoveCat == filtered.length,
    answers.ct_LoveCat
  );
}

async function countElemMermaidMan() {
  const arrMermaid = [
    "  🧞‍♀️   ",
    "  🧞‍♂️  ",
    "  🧞‍♂️  ",
    "  🧞‍♂️  ",
    "  🧞‍♀️   ",
    "  🧞‍♀️   ",
    "  🧞‍♂️  ",
    "  🧞‍♀️   ",
    "  🧞‍♂️  ",
    "  🧞‍♀️   ",
    "  🧞‍♂️  ",
    "  🧞‍♂️  ",
    "  🧞‍♂️  ",
    "  🧞‍♂️  ",
  ];
  const filtered = arrMermaid.filter((num) => num === "  🧞‍♂️  ");
  console.log(
    `\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n
                             Try to concentrate and be fast. You only have 5 sec for every task!`
  );
  await sleepLong();
  console.clear();
  console.log(
    `\n\n\n\n\n\n\n\n\n\n\n\n
                                                    Count the "  ${filtered[0]}  "!`
  );
  console.log(`\n\n\n\n\n${arrCat}\n`);
  await sleepLong();
  console.clear();
  let item;
  const answers = await inquirer.prompt({
    name: `ct_MerMan`,
    type: `input`,
    message: `\n\n\n\n\n\n\n
                           Your time is up ${player.userName}! How many "  ${filtered[0]}  "have you counted?\n\n\n\n
                                                  `,
    // choices: [`0`, `1`, `-3`, `-4`],
  });
  if (answers.ct_MerMan === filtered.length) {
    item = answers.ct_AngCat;
  }

  return handleAnswer(
    answers.ct_MerMan == filtered.length,
    answers.ct_ct_MerMan
  );
}

async function countElemMermaid() {
  const arrMermaid = [
    "  🧞‍♀️   ",
    "  🧞‍♂️  ",
    "  🧞‍♂️  ",
    "  🧞‍♂️  ",
    "  🧞‍♀️   ",
    "  🧞‍♀️   ",
    "  🧞‍♂️  ",
    "  🧞‍♀️   ",
    "  🧞‍♂️  ",
    "  🧞‍♀️   ",
    "  🧞‍♂️  ",
    "  🧞‍♂️  ",
    "  🧞‍♂️  ",
    "  🧞‍♂️  ",
  ];
  const filtered = arrMermaid.filter((num) => num === "  🧞‍♂️  ");
  console.log(
    `\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n
                             Try to concentrate and be fast. You only have 5 sec for every task!`
  );
  await sleepLong();
  console.clear();
  console.log(
    `\n\n\n\n\n\n\n\n\n\n\n\n
                                                    Count the "  ${filtered[0]}  "!`
  );
  console.log(`\n\n\n\n\n${arrMermaid}\n`);
  await sleepLong();
  console.clear();
  let item;
  const answers = await inquirer.prompt({
    name: `ct_Mermaid`,
    type: `input`,
    message: `\n\n\n\n\n\n\n
                           Your time is up ${player.userName}! How many "  ${filtered[0]}  "have you counted?\n\n\n\n
                                                  `,
    // choices: [`0`, `1`, `-3`, `-4`],
  });
  if (answers.ct_Mermaid === filtered.length) {
    item = answers.ct_Mermaid;
  }

  return handleAnswer(
    answers.ct_Mermaid == filtered.length,
    answers.ct_Mermaid
  );
}
async function countElemB() {
  const arrbpq = [
    "  b  ",
    "  b  ",
    "  p  ",
    "  p  ",
    "  q  ",
    "  b  ",
    "  b  ",
    "  p  ",
    "  q  ",
    "  b  ",
    "  q  ",
    "  p  ",
    "  b  ",
  ];
  const filtered = arrbpq.filter((num) => num === "  b  ");
  console.log(
    `\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n
                             Try to concentrate and be fast. You only have 5 sec for every task!`
  );
  await sleepLong();
  console.clear();
  console.log(
    `\n\n\n\n\n\n\n\n\n\n\n\n
                                                    Count the "  ${filtered[0]}  "!`
  );
  console.log(`\n\n\n\n\n${arrbpq}\n`);
  await sleepLong();
  console.clear();
  let item;
  const answers = await inquirer.prompt({
    name: `ct_b`,
    type: `input`,
    message: `\n\n\n\n\n\n\n
                           Your time is up ${player.userName}! How many "  ${filtered[0]}  "have you counted?\n\n\n\n
                                                  `,
    // choices: [`0`, `1`, `-3`, `-4`],
  });
  if (answers.ct_b === filtered.length) {
    item = answers.ct_b;
  }

  return handleAnswer(answers.ct_b == filtered.length, answers.ct_b);
}

async function countElemP() {
  const arrbpq = [
    "  b  ",
    "  b  ",
    "  p  ",
    "  p  ",
    "  q  ",
    "  b  ",
    "  b  ",
    "  p  ",
    "  q  ",
    "  b  ",
    "  q  ",
    "  p  ",
    "  b  ",
  ];
  const filtered = arrbpq.filter((num) => num === "  p  ");
  console.log(
    `\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n
                             Try to concentrate and be fast. You only have 5 sec for every task!`
  );
  await sleepLong();
  console.clear();
  console.log(
    `\n\n\n\n\n\n\n\n\n\n\n\n
                                                    Count the "  ${filtered[0]}  "!`
  );
  console.log(`\n\n\n\n\n${arrbpq}\n`);
  await sleepLong();
  console.clear();
  let item;
  const answers = await inquirer.prompt({
    name: `ct_p`,
    type: `input`,
    message: `\n\n\n\n\n\n\n
                           Your time is up ${player.userName}! How many "  ${filtered[0]}  "have you counted?\n\n\n\n
                                                  `,
    // choices: [`0`, `1`, `-3`, `-4`],
  });
  if (answers.ct_p === filtered.length) {
    item = answers.ct_p;
  }

  return handleAnswer(answers.ct_p == filtered.length, answers.ct_p);
}

async function countElemQ() {
  const arrbpq = [
    "  b  ",
    "  b  ",
    "  p  ",
    "  p  ",
    "  q  ",
    "  b  ",
    "  b  ",
    "  p  ",
    "  q  ",
    "  b  ",
    "  q  ",
    "  p  ",
    "  b  ",
  ];
  const filtered = arrbpq.filter((num) => num === "  q  ");
  console.log(
    `\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n
                             Try to concentrate and be fast. You only have 5 sec for every task!`
  );
  await sleepLong();
  console.clear();
  console.log(
    `\n\n\n\n\n\n\n\n\n\n\n\n
                                                    Count the "  ${filtered[0]}  "!`
  );
  console.log(`\n\n\n\n\n${arrbpq}\n`);
  await sleepLong();
  console.clear();
  let item;
  const answers = await inquirer.prompt({
    name: `ct_q`,
    type: `input`,
    message: `\n\n\n\n\n\n\n
                           Your time is up ${player.userName}! How many "  ${filtered[0]}  "have you counted?\n\n\n\n
                                                  `,
    // choices: [`0`, `1`, `-3`, `-4`],
  });
  if (answers.ct_q === filtered.length) {
    item = answers.ct_q;
  }

  return handleAnswer(answers.ct_q == filtered.length, answers.ct_q);
}

async function continueGame() {
  console.clear();
  await sleepMedium();

  const answers = await inquirer.prompt({
    name: `spielen`,
    type: `list`,
    message: `\n\n\n\n\n\n\n\n\n\n\n
                                                Do you want to play again?\n\n\n`,

    choices: [`yes`, `no`],
  });
  if (answers.spielen === `yes`) {
    player.currentBalance = 0;
    player.kofferArray = [];
    player.level = 0;
    player.lives = ["💛", "💛", "💛"];
    await spiele();
  } else {
    process.exit(1);
  }
}

// vlt noch eine won funktion????

async function introduction() {
  console.clear();
  await welcome();
  await introTextAndName();
  await getAge();
  await getCity();
  await gameRules();
}
async function spiele() {
  console.clear();
  await mathe1();
  await trivial1();
  await countElemCold();
  await question1();
  await countElemQ();
  await mathe2();
  await trivial2();
  await countElemAngryCat();

  await countElemHot();

  await mathe9();
  await mathe10();
  await mathe11();
  await mathe12();
  await mathe13();
  await mathe14();
  await mathe15();
  await mathe16();
  await mathe17();
  await mathe18();
  await mathe19();
  await mathe20();

  await question7();
  await question8();
  await question9();
  await question10();
  await question11();
  await question12();
  await question13();
  await question14();
  await question15();
  await question16();
  await question17();

  // 8spiele minimum
}

async function level1() {
  console.clear();
  await countElemClown();
  await mathe3();
  await trivial3();
  await question2();
  await mathe4();
  await trivial4();
  await countElemP();
  await trivial5();
  await question3();
  await mathe5();

  // 8spiele minimum
}
async function level2() {
  console.clear();
  await countElemB();

  await mathe6();
  await trivial6();
  await countElemLoveCat();
  await question4();
  await mathe7();
  await trivial7();
  await question5();
  await trivial8();
  await mathe8();
  await countElemSmileCat();
  await trivial9();
  await question6();
  await countElemClown();
  await trivial10();
  // 8spiele minimum
}
async function level3() {
  console.clear();
  await countElemB();

  await mathe6();
  await trivial6();
  await countElemLoveCat();
  await question4();
  await mathe7();
  await trivial7();
  await question5();
  await trivial8();
  await mathe8();
  await countElemSmileCat();
  await trivial9();
  await question6();
  await countElemClown();
  await trivial10();
  // 8spiele minimum
}
// async function spieleOneUP() {
//   await level1();
//   await level2();
// }

// async function weiter() {
//   await question6();
//   await question7();
//   await question1();
//   await question2();
//   await question3();
// }
await introduction();
await spiele();

// level1()
// await question1();
// await question2();
// await question3();
// await question4();
// await question5();

// await question1();
// await question2();
// await question3();

// ------------------------------------------------------
// die funktionen rufen sich wieder automatisch auf.
// nach gameover sollte es doch eigentöich nicht weitergehen...oder vlt nur noch eine abfrage ob man weiterspilen möchte
// ich habe versucht es mit einer if abfrage zu unterbrechen und den player.alife auf false zzu setzen wenn game over ist, es hat aber leider auch nicht funktioniert...
// -----------------------------------------------------------------------

// if (player.alife == true) {
//   // level2.forEach((funk) => funk);
//   await question5(),
//     await question1(),
//     await question2(),
//     await question3(),
//     await question4();
// }
