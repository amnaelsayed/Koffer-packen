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
  alife: true,
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
  console.clear();
  const spinner = createSpinner("Checking answer...").start();
  // await sleepShort();
  if (isCorrect) {
    player.currentBalance += 40;

    await sleepShort();
    spinner.success({
      text: `👏🏼 Great work ${player.userName}! You just put a / an ${item} in your $uitca$e and have ${player.currentBalance} 💵 for the journey of your dreams`,
    });
    await sleepLong();
    await sleepLong();
    player.kofferArray.push(item);

    console.clear();
    if (player.currentBalance % 200 === 0) {
      await kofferAbfrage();
    }
    // if (player.currentBalance === 200) {
    //   arrayAbfrage();
    // const kofferFrage = await inquirer.prompt({
    //   name: `levelUp `,
    //   type: `input`,
    //   message: chalkAnimation.karaoke(
    //     `Do you still remember what is inside your $uitca$e? \n answer correclty this question to travel to the next level 💫`
    //   ),
    // });
  } else {
    player.lives--;
    spinner.error({
      text: `💔  UUppssss that was wrong, you now have ${player.lives} 😬 !`,
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
      player.alife = false;
      // console.log(player.alife);
      process.exit(1);
    }

    // process.exit(1);
  }
}

// const kofferAbfrage = () => {
//   inquirer
//     .prompt([
//       {
//         name: "faveReptile",
//         message: `Do you still remember what is inside your $uitca$e? \n answer correclty this question to travel to the next level 💫`,
//       },
//     ])
//     .then((answers) => {
//       console.info(
//         answers.faveReptile == player.kofferArray.join(`, `)
//           ? `👊🏼 Well done ${player.userName}. You just reached the next level.`
//           : gradient.teen(`

//               ______    ______   __       __  ________         ______   __     __  ________  _______
//              /      \  /      \ /  \     /  |/        |       /      \ /  |   /  |/        |/       \
//             /$$$$$$  |/$$$$$$  |$$  \   /$$ |$$$$$$$$/       /$$$$$$  |$$ |   $$ |$$$$$$$$/ $$$$$$$  |
//             $$ | _$$/ $$ |__$$ |$$$  \ /$$$ |$$ |__          $$ |  $$ |$$ |   $$ |$$ |__    $$ |__$$ |
//             $$ |/    |$$    $$ |$$$$  /$$$$ |$$    |         $$ |  $$ |$$  \ /$$/ $$    |   $$    $$<
//             $$ |$$$$ |$$$$$$$$ |$$ $$ $$/$$ |$$$$$/          $$ |  $$ | $$  /$$/  $$$$$/    $$$$$$$  |
//             $$ \__$$ |$$ |  $$ |$$ |$$$/ $$ |$$ |_____       $$ \__$$ |  $$ $$/   $$ |_____ $$ |  $$ |
//             $$    $$/ $$ |  $$ |$$ | $/  $$ |$$       |      $$    $$/    $$$/    $$       |$$ |  $$ |
//              $$$$$$/  $$/   $$/ $$/      $$/ $$$$$$$$/        $$$$$$/      $/     $$$$$$$$/ $$/   $$/

//   `)
//       );
//       player.alife = false;
//       console.log(player.alife);
//     });
// };

async function kofferAbfrage() {
  const answers = await inquirer.prompt({
    name: `levelUp`,
    type: `input`,
    message: chalkAnimation.karaoke(
      `Do you still remember what is inside your $uitca$e? \n answer correclty this question to travel to the next level 💫`
    ),
    default() {
      return `abfrage`;
    },
  });
  playerRemembers = answers.levelUp;
  if (player.kofferArray.join(`, `) == playerRemembers) {
    console.log(
      `👊🏼 Well done ${player.userName}. You just reached the next level.`
    );
    console.clear();
  } else {
    console.clear();
    console.log(
      gradient("orange", "yellow").multiline(`

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
    await sleepLong();

    process.exit(0);
    player.alife = false;
    console.log(player.alife);
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
    message: `What starts with "e" and ends with "e" but only has one letter in it?`,
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
    message: `Which number should come next in the pattern?
        37, 34, 31, 28`,
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
    message: `Book is to Reading as Fork is to:`,
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
    message: `What number best completes the analogy:
      8:4 as 10:`,
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
async function question6() {
  let item;
  const answers = await inquirer.prompt({
    name: `iq_6`,
    type: `list`,
    message: ` How many cases do you need if you have to pack 112 pairs
    of shoes into cases that each hold 28 shoes?`,
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
    message: `Which number should come next in the pattern?
    -2 , 5, -4, 3, -6:`,
    choices: [`0`, `1`, `-3`, `-4`],
  });
  if (answers.iq_7 === `1`) {
    item = answers.iq_7;
  }
  return handleAnswer(answers.iq_7 === `1`, item);
}
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
// }
console.clear();
await question1();
await question2();
await question3();
await question4();
await question5();
await question6();
await question7();
await question1();
await question2();
await question3();
await question1();
await question2();
await question3();
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
