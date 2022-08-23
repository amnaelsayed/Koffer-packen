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
// import arrSmile from "./nullEinsSpiel.js";
// import arraySmileyColdHot from "./nullEinsSpiel.js";
// import arrGhost from "./nullEinsSpiel.js";
// import trivial10 from "./trivialFragen.js";

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
const sleepExtraLong = (ms = 50000) => new Promise((r) => setTimeout(r, ms));

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
  await sleepShort();

  explanation.stop();
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

  await sleepShort();

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
      \n\n\n\n\n                                                                      
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
    await sleepLong();
    player.kofferArray.push(item);
    player.rightAnswer += 1;

    console.clear();
    if (
      (player.kofferArray.length == 5 && player.currentBalance == 200) ||
      (player.kofferArray.length == 7 && player.currentBalance == 480) ||
      (player.kofferArray.length == 10 && player.currentBalance == 880)
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

    await sleepLong();
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
    message: chalkAnimation.karaoke(
      `\n\n\n                                                                                                                      ${player.lives.join(
        ` `
      )}
      \n\n\n\n
                                    Do you still remember what is inside your $uitca$e? \n \n \n 
                                 Answer correclty this question to travel to the next level 💫`
    ),
    default() {
      return `abfrage`;
    },
  });
  playerRemembers = answers.levelUp;
  console.log(playerRemembers);
  console.log(player.kofferArray.join(` `));
  if (
    player.kofferArray.join(` `) == playerRemembers &&
    player.kofferArray.length == 10 &&
    player.currentBalance == 880
  ) {
    player.kofferArray = [];
    player.level += 1;
    console.log(player.currentBalance);

    await sleepLong();
    console.clear();
    await nextLevel();
    await level2();
  }
  if (
    player.kofferArray.join(` `) == playerRemembers &&
    player.kofferArray.length == 7 &&
    player.currentBalance == 480
  ) {
    player.kofferArray = [];
    player.level += 1;
    console.log(player.currentBalance);

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
    console.log(
      `\n\n\n                                                                                                                        ${player.lives.join(
        ` `
      )}
      \n\n\n\n
                            👊🏼 Well done ${
                              player.userName
                            }. You just reached the ${player.level}.`
    );

    // player.currentBalance = 0;
    player.kofferArray = [];
    player.level += 1;
    console.log(player.currentBalance);

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

// //  =====IQ-Fragen
async function question1() {
  let item;
  var answers = await inquirer.prompt({
    name: `iq_1`,
    type: `list`,
    message: `\n\n\n                                                                                                                 ${player.livesjoin(
      14` `
    )}
    \n\n\n\n
                          What starts with "e" and ends with "e" but only has one letter in it?\n\n\n\n\n\n\n`,
    choices: [`envelope`, `e`, `eye`, `elite`],
    rightAnswer: `envelope`,
  });
  if (answers.iq_1 === `envelope`) {
    item = answers.iq_1;
  }
  return handleAnswer(answers.iq_1 === `envelope`, item, answers);
}
async function question2() {
  let item;
  const answers = await inquirer.prompt({
    name: `iq_2`,
    type: `list`,
    message: `\n\n\n                                                                                                                 ${player.lives.join(
      ` `
    )}
    \n\n\n\n
                                         Which number should come next in the pattern?\n\n\
                                                         37, 34, 31, 28\n\n\n\n\n\n\n`,
    choices: [23, 25, 17, 26],
  });
  if (answers.iq_2 === 25) {
    item = answers.iq_2;
  }
  return handleAnswer(answers.iq_2 === 25, item);
}
async function question3() {
  let item;
  const answers = await inquirer.prompt({
    name: `iq_3`,
    type: `list`,
    message: `\n\n\n                                                                                                                ${player.lives.join(
      ` `
    )}
    \n\n\n\n
                                              Book is to Reading as Fork is to:\n\n\n\n\n\n\n
                                                                    `,
    choices: [`a. drawing`, `b. writing`, `stirring`, `eating`],
  });
  if (answers.iq_3 === `eating`) {
    item = answers.iq_3;
  }
  return handleAnswer(answers.iq_3 === `eating`, item);
}
async function question4() {
  let item;
  const answers = await inquirer.prompt({
    name: `iq_4`,
    type: `list`,
    message: `\n\n\n                                                                                                                ${player.lives.join(
      ` `
    )}
    \n\n\n\n
                                           What number best completes the analogy:\n\n\n\n\
                                                            8:4 as 10:\n\n\n\n`,
    choices: [3, 7, 24, 5],
  });
  if (answers.iq_4 === 5) {
    item = answers.iq_4;
  }
  return handleAnswer(answers.iq_4 === 5, item);
}
async function question5() {
  let item;
  const answers = await inquirer.prompt({
    name: `iq_5`,
    type: `list`,
    message: `\n\n\n                                                                                                                 ${player.lives.join(
      ` `
    )}
    \n\n\n\n
                                               12593 is to 35291\n\n\n\n
                                               and 29684 is to 46982\n\n\n\n
                                              therefore 72936 is to ?\n\n\n\n\n\n\n`,
    choices: [69237, 62397, 32796, 39762],
  });
  if (answers.iq_5 === 69237) {
    item = answers.iq_5;
  }

  return handleAnswer(answers.iq_5 === 69237, item);
}
async function question6() {
  let item;
  const answers = await inquirer.prompt({
    name: `iq_6`,
    type: `list`,
    message: `\n\n\n                                                                                                                  ${player.lives.join(
      ` `
    )}
    \n\n\n\n
                                    How many cases do you need if you have to pack 112 pairs\n\n\n
                                         of shoes into cases that each hold 28 shoes?\n\n\n\n\n`,
    choices: [16, 8, 24, 12],
  });
  if (answers.iq_6 === 8) {
    item = answers.iq_6;
  }
  return handleAnswer(answers.iq_6 === 8, item);
}
async function question7() {
  let item;
  const answers = await inquirer.prompt({
    name: `iq_7`,
    type: `list`,
    message: `\n\n\n                                                                                                            ${player.lives.join(
      ` `
    )}
    \n\n\n\n
                                    Which number should come next in the pattern?\n\n\n\n
                                                  -2 , 5, -4, 3, -6:\n\n\n\n`,
    choices: [`0`, `1`, `-3`, `-4`],
  });
  if (answers.iq_7 === `1`) {
    item = answers.iq_7;
  }
  return handleAnswer(answers.iq_7 === `1`, item);
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
    player.lives = 3;
    await spiele();
  } else {
    process.exit(1);
  }
}
async function nextLevel() {
  const title = chalkAnimation.karaoke(
    `
                                 ███    █████████   █████████    ██    ████████    █████████      
                                 ████   ███     ██ ██   ██       ██    ██    ██    ███    ██      
                                 ██ ██  ██████   ███    ██       ██    █████ ██    ██████ ██      
                                 ██  ██ ███     ██ ██   ██       ██    ██     ██  ████    ██      
                                 ██   ███████████   ██  ██       █████████████ ████ █████████████ 
                                                                    
                                                                    
   `
  );
  await sleepMedium();
  title.stop(clear());
  // will stop the animation, otherwise it runs forever

  const welcomeText = chalkAnimation.karaoke(`\n\n\n\n\n\n\n
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

                                        \n\n\n\n      Congratulation!!!`);
  await sleepMedium();
  welcomeText.stop(clear());
  // await spieleOneUP();
}
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
  console.log(
    `\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n
                             Try to concentrate and be fast. You only have 5 sec for every task!`
  );
  await sleepLong();
  console.clear();
  console.log(
    `\n\n\n\n\n\n\n\n\n\n\n\n
                                                    Count the "  🤡  "!`
  );
  console.log(`\n\n\n\n\n${arraySmileyColdHot}\n`);
  await sleepLong();
  console.clear();
  let item;
  const answers = await inquirer.prompt({
    name: `ct_Clown`,
    type: `input`,
    message: `\n\n\n\n\n\n\n
                           Your time is up ${player.userName}! How many "  🤡  "have you counted?\n\n\n\n
                                                  `,
    // choices: [`0`, `1`, `-3`, `-4`],
  });
  if (answers.ct_Clown === "2") {
    item = answers.ct_Clown;
  }
  return handleAnswer(answers.ct_Clown === `2`, item);
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
                             Try to concentrate and be fast. You only have 5 sec for every task!`
  );
  await sleepLong();
  console.clear();
  console.log(
    `\n\n\n\n\n\n\n\n\n\n\n\n
                                                    Count the "  ${filtered[0]}  "!`
  );
  console.log(`\n\n\n\n\n${arraySmileyColdHot}\n`);
  await sleepLong();
  console.clear();
  let item;
  const answers = await inquirer.prompt({
    name: `ct_Cold`,
    type: `input`,
    message: `\n\n\n\n\n\n\n
                           Your time is up ${player.userName}! How many "  ${filtered[0]}  "have you counted?\n\n\n\n
                                                  `,
    // choices: [`0`, `1`, `-3`, `-4`],
  });
  if (answers.ct_Cold === filtered.length) {
    item = answers.ct_Cold;
  }
  return handleAnswer(answers.ct_Cold == filtered.length, item);
}
// await countElemClown("  🤡  ");

// vlt noch eine won funktion????
// await countElemCold();
async function trivial10() {
  let item;
  const answers = await inquirer.prompt({
    name: `trivialFragen`,
    type: `list`,
    message: "What year is modern paper first used?",
    choices: [105, 109, 125, 912],
  });
  if (answers.trivialFragen === 105) {
    item = answers.trivialFragen;
  }
  return handleAnswer(answers.trivialFragen === 105);
}
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
  await trivial10();
  await question7();
  await countElemClown("  🤡  ");
  await question7();
  await question7();
  await question7();
  await question7();
  await question7();
  await question7();
  // 8spiele minimum
}

async function level1() {
  console.clear();
  await question2();
  await question2();
  await question2();
  await question2();
  await question2();
  await question2();
  await question2();
  await question2();
  await question2();
  await question2();
  // 8spiele minimum
}
async function level2() {
  console.clear();
  await question6();
  await question6();
  await question6();
  await question6();
  await question6();
  await question6();
  await question6();
  await question6();
  await question6();
  await question6();
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
