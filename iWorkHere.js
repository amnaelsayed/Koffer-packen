#!/usr/bin/env node

import chalk from "chalk";
import gradient from "gradient-string";
import figlet from "figlet";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import promptSync from "prompt-sync";
import { createSpinner } from "nanospinner";
const prompt = promptSync();

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
      text: ` 👏🏼Great work ${player.userName}! You just put a / an ~ ${item} ~ in your $uitca$e and have ${player.currentBalance} 💵 for the journey of your dreams`,
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
      console.log(
        chalkAnimation.karaoke(`
                                                 
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
    process.exit(1);
  }
}

await question1();

// console.log(player);
//==============Fragen-Funktionen========================

// //  =====IQ-Fragen
async function question1() {
  let item;
  var answers = await inquirer.prompt({
    name: `iq_1`,
    type: `list`,
    message: `What starts with "e" and ends with "e" but only has one letter in it?`,
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
    message: `Which number should come next in the pattern?
        37, 34, 31, 28`,
    choices: [23, 25, 17, 26],
  });
  if (answers.iq_2 === 25) {
    item = answers.iq_2;
  }
  return handleAnswer(answers.iq_2 === 25, item);
}
// ==========================
async function question3() {
  let item;
  const answers = await inquirer.prompt({
    name: `iq_3`,
    type: `list`,
    message: `Book is to Reading as Fork is to:`,
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
    message: `What number best completes the analogy:
      8:4 as 10:`,
    choices: [3, 7, 24, 5],
  });
  if (answers.iq_4 === 5) {
    item = answers.iq_4;
  }
  return handleAnswer(answers.iq_4 === 5, item);
}
// ==========================
async function question5() {
  let item;
  const answers = await inquirer.prompt({
    name: `iq_5`,
    type: `list`,
    message: ` 12593 is to 35291
        and 29684 is to 46982
        therefore 72936 is to ?`,
    choices: [69237, 62397, 32796, 39762],
  });
  if (answers.iq_5 === 69237) {
    item = answers.iq_5;
  }

  return handleAnswer(answers.iq_5 === 69237, item);
}
// ==========================
async function question6() {
  const answers = await inquirer.prompt({
    name: `iq_6`,
    type: `list`,
    message: ` How many cases do you need if you have to pack 112 pairs
    of shoes into cases that each hold 28 shoes?`,
    choices: [16, 8, 24, 12],
  });
  if (answers.iq_8 === 8) {
    item = answers.iq_;
  }
  return handleAnswer(answers.iq_1 === 8);
}
// ==========================
async function question7() {
  const answers = await inquirer.prompt({
    name: `iq_7`,
    type: `list`,
    message: `Which number should come next in the pattern?
    -2 , 5, -4, 3, -6:`,
    choices: [0, 1, -3, -4],
  });
  if (answers.iq_7 === 1) {
    item = answers.iq_7;
  }
  return handleAnswer(answers.iq_7 === 1);
}
// ==========================
async function question8() {
  const answers = await inquirer.prompt({
    name: `iq_8`,
    type: `list`,
    message: `Which number should come next in the pattern?
      7,21,14,42,28:`,
    choices: [84, 56, 64, 76],
  });
  if (answers.iq_8 === 84) {
    item = answers.iq_8;
  }
  return handleAnswer(answers.iq_8 === 84);
}
// ==========================

async function question9() {
  const answers = await inquirer.prompt({
    name: `iq_9`,
    type: `list`,
    message: `Which number should replace the questionmark?
      1, 10, 3, 8, ?, 6, 7, 4, 9, 2:`,
    choices: [8, 5, 9, 11],
  });
  if (answers.iq_9 === 5) {
    item = answers.iq_9;
  }
  return handleAnswer(answers.iq_9 === 5);
}
// ==========================

async function question10() {
  const answers = await inquirer.prompt({
    name: `iq_10`,
    type: `list`,
    message: `Which number should replace the questionmark?
    1, 3, 9, 27, ?, 243:`,
    choices: [36, 78, 81, 112],
  });
  if (answers.iq_10 === 81) {
    item = answers.iq_10;
  }
  return handleAnswer(answers.iq_10 === 81);
}
// ==========================

async function question11() {
  const answers = await inquirer.prompt({
    name: `iq_11`,
    type: `list`,
    message: `Jack is looking at Anne. Anne is looking at George. Jack is married, George is not, and we don’t know if Anne is married. Is a married person looking at an unmarried person?`,
    choices: [`yes`, `no`, `we cannot know`],
  });
  if (answers.iq_11 === `yes`) {
    item = answers.iq_11;
  }
  return handleAnswer(answers.iq_11 === `yes`);
}
// ==========================

async function question12() {
  const answers = await inquirer.prompt({
    name: `iq_12`,
    type: `list`,
    message: `The day before two days after the day before tomorrow is Saturday. What day is it today?`,
    choices: [`Sunday`, `Tuesday`, `Monday`, `Friday`],
  });
  if (answers.iq_12 === `Friday`) {
    item = answers.iq_12;
  }
  return handleAnswer(answers.iq_12 === `Friday`);
}
// ==========================

async function question13() {
  const answers = await inquirer.prompt({
    name: `iq_13`,
    type: `list`,
    message: `What can be broken but never held?`,
    choices: [`heart`, `vase`, `promise`, `none of this`],
  });
  if (answers.iq_13 === `promise`) {
    item = answers.iq_13;
  }
  return handleAnswer(answers.iq_13 === promise);
}
// ==========================

async function question14() {
  const answers = await inquirer.prompt({
    name: `iq_14`,
    type: `list`,
    message: `What’s full of holes but can still hold water?`,
    choices: [`cheese`, `rock`, `sponge`, `shocks`],
  });
  if (answers.iq_14 === `sponge`) {
    item = answers.iq_14;
  }
  return handleAnswer(answers.iq_14 === `sponge`);
}
// ==========================

async function question15() {
  const answers = await inquirer.prompt({
    name: `iq_15`,
    type: `list`,
    message: `2. What is always coming but never arrives?`,
    choices: [`train`, `tomorrow`, `money`, `happines`],
  });
  if (answers.iq_15 === `tomorrow`) {
    item = answers.iq_15;
  }
  return handleAnswer(answers.iq_15 === `tomorrow`);
}
// ==========================

async function question16() {
  const answers = await inquirer.prompt({
    name: `iq_16`,
    type: `list`,
    message: `Which number should replace the questionmark?
    2, 3, 5, 7, 11, 13, 17, 19, ?, 29:`,
    choices: [`23`, `22`, `25`, `30`],
  });
  if (answers.iq_16 === 23) {
    item = answers.iq_16;
  }
  return handleAnswer(answers.iq_16 === 23);
}
// ==========================

async function question17() {
  const answers = await inquirer.prompt({
    name: `iq_17`,
    type: `list`,
    message: `There are two ducks in front of a duck, two ducks behind a duck and a duck in the middle. How many ducks are there?`,
    choices: [5, 6, 3, 4],
  });
  if (answers.iq_17 === 3) {
    item = answers.iq_17;
  }
  return handleAnswer(answers.iq_17 === 3);
}

// async function question() {
//   const answers = await inquirer.prompt({
//     name: `iq_`,
//     type: `list`,

//   });
//   if (answers.iq_ === ) {
//     item = answers.iq_;
//   }
//   return handleAnswer(answers.iq_ === );
// }

await question2();
await question3();
await question4();
await question5();
