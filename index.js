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
  lives: 1,
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
    player.currentBalance += 200;
    spinner.success({
      text: `👏🏼 Great work ${player.userName}! You just put a / an ${item} in your $uitca$e and have ${player.currentBalance} 💵 for the journey of your dreams`,
    });
    player.kofferArray.push(item);
    if ((player.currentBalance === 200 % 200) === 0) {
      const kofferFrage = prompt(
        `Do you still remember what is inside your $uitca$e? \n answer correclty this question to travel to the next level 💫`
      );
      if (kofferFrage == player.kofferArray) {
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
      text: `😬  UUppssss that was wrong, you now have ${player.lives} 💔 !`,
    });

    if (player.lives === 0) {
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
    process.exit(1);
  }
}

await question1();
console.log(player);
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

  // async function question2() {
  //   const answers = await inquirer.prompt({
  //     name: `iq_2`,
  //     type: `list`,
  //     message: `Which number should come next in the pattern?
  //       37, 34, 31, 28`,
  //     choices: [23, 25, 17, 26],
  //   });
  //   return handleAnswer(answers.iq_2 === 25);
  // }
  // async function question3() {
  //   const answers = await inquirer.prompt({
  //     name: `iq_3`,
  //     type: `list`,
  //     message: `Book is to Reading as Fork is to:`,
  //     choices: [`a. drawing`, `b. writing`, `c. stirring`, `d. eating`],
  //   });
  //   return handleAnswer(answers.iq_3 === `d.eating`);
  // }
  // async function question4() {
  //   const answers = await inquirer.prompt({
  //     name: `iq_4`,
  //     type: `list`,
  //     message: `What number best completes the analogy:
  //     8:4 as 10:`,
  //     choices: [`a.3`, `b.7`, `c.24`, `d.5`],
  //   });
  //   return handleAnswer(answers.iq_4 === `d.5`);
  // }
  // async function question5() {
  //   const answers = await inquirer.prompt({
  //     name: `iq_5`,
  //     type: `list`,
  //     message: ` 12593 is to 35291
  //       and 29684 is to 46982
  //       therefore 72936 is to ?`,
  //     choices: [69237, 62397, 32796, 39762],
  //   });
  //   return handleAnswer(answers.iq_5 === 69237);
  // }
  // async function question6() {
  //   const answers = await inquirer.prompt({
  //     name: `iq_6`,
  //     type: `list`,
  //     message: ` How many cases do you need if you have to pack 112 pairs
  //     of shoes into cases that each hold 28 shoes?`,
  //     choices: [16, 8, 24, 12],
  //   });
  //   return handleAnswer(answers.iq_1 === 8);
  // }
  // async function question7() {
  //   const answers = await inquirer.prompt({
  //     name: `iq_7`,
  //     type: `list`,
  //     message: `Which number should come next in the pattern?
  //     -2 , 5, -4, 3, -6:`,
  //     choices: [`a. 0`, `b. 1`, `c. -3`, `d. -4`],
  //   });
  //   return handleAnswer(answers.iq_7 === `b. 1`);
  // }
  // async function question8() {
  //   const answers = await inquirer.prompt({
  //     name: `iq_8`,
  //     type: `list`,

  //   });
  //   return handleAnswer(answers.iq_8 === );
  // }

  // async function question9() {
  //   const answers = await inquirer.prompt({
  //     name: `iq_9`,
  //     type: `list`,

  //   });
  //   return handleAnswer(answers.iq_9 === );
  // }

  // async function question10() {
  //   const answers = await inquirer.prompt({
  //     name: `iq_10`,
  //     type: `list`,

  //   });
  //   return handleAnswer(answers.iq_10 === );
  // }
  // async function question11() {
  //   const answers = await inquirer.prompt({
  //     name: `iq_11`,
  //     type: `list`,

  //   });
  //   return handleAnswer(answers.iq_11 === );
  // }
  // async function question12() {
  //   const answers = await inquirer.prompt({
  //     name: `iq_12`,
  //     type: `list`,

  //   });
  //   return handleAnswer(answers.iq_12 === );
  // }
  // async function question13() {
  //   const answers = await inquirer.prompt({
  //     name: `iq_13`,
  //     type: `list`,

  //   });
  //   return handleAnswer(answers.iq_13 === );
  // }
  // async function question14() {
  //   const answers = await inquirer.prompt({
  //     name: `iq_14`,
  //     type: `list`,

  //   });
  //   return handleAnswer(answers.iq_14 === );
  // }
  // async function question15() {
  //   const answers = await inquirer.prompt({
  //     name: `iq_15`,
  //     type: `list`,

  //   });
  //   return handleAnswer(answers.iq_15 === );
  // }
  // async function question16() {
  //   const answers = await inquirer.prompt({
  //     name: `iq_16`,
  //     type: `list`,

  //   });
  //   return handleAnswer(answers.iq_16 === );
  // }
  // async function question17() {
  //   const answers = await inquirer.prompt({
  //     name: `iq_17`,
  //     type: `list`,

  //   });
  //   return handleAnswer(answers.iq_17 === );
  // }
  // async function question() {
  //   const answers = await inquirer.prompt({
  //     name: `iq_`,
  //     type: `list`,

  //   });
  //   return handleAnswer(answers.iq_ === );
}
