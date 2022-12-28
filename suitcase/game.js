import chalk from "chalk";
import inquirer from "inquirer";
import promptSync from "prompt-sync";
import { createSpinner } from "nanospinner";
import {
  allQuestions,
  // questionsInput
} from "./questions.js";
import {
  sleepExtraLong,
  sleepLong,
  sleepMedium,
  sleepShort,
} from "./timings.js";
import { wantToContinue, player } from "./player.js";
import lostOneLife from "./loseLife.js";
import nextLevel from "./nextLevel.js";
import gameOver from "./gameOver.js";
const prompt = promptSync();

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
async function askQuestion(obj) {
  let item;
  const answers = await inquirer.prompt({
    name: `question`,
    type: obj.type,
    message: obj.message,
    choices: obj.choices,
    answer: obj.answer,
    asked: obj.asked,
  });
  if (answers.question === obj.answer) {
    item = answers.question;
  }

  // console.log(obj);

  obj.asked = true;
  // console.log(obj);

  return handleAnswer(obj.answer === answers.question, item);
}

// async function askInputQuestion(obj) {
//   const answer = await inquirer.prompt({
//     name: obj.names,
//     type: obj.types,
//     message: obj.messages,
//   });
//   let item;
//   const answers = await inquirer.prompt({
//     name: `question`,
//     type: obj.type,
//     message: obj.message,
//     answer: obj.answer,
//     asked: obj.asked,
//   });
//   if (answers.question === obj.answer) {
//     item = answers.question;
//   }

//   // console.log(obj);

//   obj.asked = true;
//   // console.log(obj);

//   return handleAnswer(obj.answer === answers.question, item);
// }

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
  var playerRemembers;
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
      }. level`
    );

    await sleepLong();
    console.clear();
    await nextLevel();
    await game();
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
    await game();
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
    await game();
  } else {
    console.clear();

    await gameOver();
    process.exit(0);
    // player.alife = false;
    // console.log(player.alife);
  }
}
const randomQuestion = async () => {
  const filter = allQuestions.filter((q) => !q.asked);
  // console.log("filter " + filter);
  const q = filter[Math.floor(Math.random() * filter.length)];
  return q;
};
// const randomInputQuestion = async () => {
//   const filter = questionsInput.filter((q) => !q.asked);
//   // console.log("filter " + filter);
//   const q = filter[Math.floor(Math.random() * filter.length)];
//   return q;
// };
const game = async () => {
  for (let i = 0; i < allQuestions.length; i++) {
    let r = await randomQuestion();
    // let z = await randomInputQuestion();
    for (let j = 0; j < 1; j++) {
      await askQuestion(r);
      //   await askInputQuestion(z);
    }
  }
};
export default game;
