import promptSync from "prompt-sync";
import chalk from "chalk";
import gradient from "gradient-string";
import figlet from "figlet";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import { createSpinner } from "nanospinner";
const prompt = promptSync();

const sleepMedium = (ms = 10000) => new Promise((r) => setTimeout(r, ms));
// Change the ms to 4000 or 5000
const sleepShort = (ms = 1000) => new Promise((r) => setTimeout(r, ms));
const sleepLong = (ms = 1000) => new Promise((r) => setTimeout(r, ms));

const wim1 = ["🧩", "🎮", "🪗", "🪘", "🎷", "🚴‍♂️"];
const wim11 = ["🛼", "🪀", "🥊", "🎺", "🚲"];

const wim22 = ["🧘‍♂️", "🎯", "🎪", "🏂", "🎠"];
const wim2 = [`💣`, `🪞`, `📸`, `🎈`, `📬`, `🧽`];

const wim3 = ["😂", "😜", "🥰", "🤓", "😚", "😠"];
const wim33 = ["🤣", "🤪", "😍", "😗", "😣"];

const wim4 = ["😸", "🐥", "🦄", "🐒", "🐯", "🐷"];
const wim44 = ["😹", "🦊", "🙉", "🐴", "🐣"];

const wim5 = ["🧆", "🥩", "🥐", "🍕", "🍰", "🍨"];
const wim55 = ["🌮", "🥓", "🥖", "🥧", "🍧"];

const wim6 = ["🍸", "🍴", "🍢", "🍲", "🍩", "🍮"];
const wim66 = ["🍹", "🍽", "🍡", "🍜", "🧁"];

const wim7 = ["🥎", "🏐", "🏀", "🏸", "⛸", "🏑"];
const wim77 = ["⚾️", "⚽️", "🏓", "🛼", "🏒"];

const wim8 = ["🎟", "🏅", "🏖", "🤾‍♂️", "🤽", "🤼‍♀️"];
const wim88 = ["🎫", "🎖", "⛱", "🤾", , "🤼"];

const wim9 = ["🛠", "🪚", "💣", "🔬", "🛌", "🧽"];
const wim99 = ["🔨", "🪛", "🔫", "🔮", "🔭"];

const wim10 = ["📪", "🔐", "🔓", "📌", "🗂", "📉"];
const wim1010 = ["📬", "🔒", "📍", "📁", "📈"];

// const wimAll = [
//   [wim1, wim11],
//   [wim2, wim22],

//   [wim3, wim33],

//   [wim4, wim44],

//   [wim5, wim55],

//   [wim6, wim66],

//   [wim7, wim77],

//   [wim8, wim88],

//   [wim9, wim99],

//   [wim10, wim1010],
// ];

async function whatIsMissingIntro() {
  const intro = prompt(
    chalk.yellow(
      `
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⠀⠀⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠁⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠻⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⣿⣿⣿⡿⠛⠁⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⠟⠉⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⡄⠀⠉⠉⠉⠉⠛⠛⠛⠛⠛⠛⠃⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣀⣀⣀⣀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⠿⠿⠟⣻ But before we start with the main game
⣿⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠤⠒⠚⠉⠉⠉⠉⠉⠉⠉⠙⠒⠦⣀⠀⠀⠀⠀⠉⠉⠉⠀⠀⠀⠀⠀⣰⣿ let's have a little training to warm you up.
⣿⣿⣿⣿⣿⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠖⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠑⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿ You have 10 seconds to memorise the objects that  
⣿⣿⣿⣿⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀⠀⠀⢠⠞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠱⡀⠀⠀⠀⠀⠀⢀⣼⣿⣿⣿ will appear on the screen.
⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀⡰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠱⡀⠀⠀⠀⣠⣾⣿⣿⣿⣿ Then one of the objects will be blended with new
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⢰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢣⠀⠀⠰⣿⣿⣿⣿⣿⣿ items and you will be asked to find the one that  
⣿⣿⣿⣿⣿⣿⣿⠿⠛⠉⠁⠀⠀⠀⡎⠀⠀⠀⠀⠀⣀⠤⠖⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠊⠈⠉⠉⠐⠒⠒⠺⢦⠀⠀⠙⠿⣿⣿⣿⣿ you have seen before.
⣿⣿⣿⡿⠟⠋⠁⠀⠀⠀⠀⠀⠀⢠⠇⠀⠀⠀⠀⠘⠧⠦⠤⠤⠤⠒⠒⠒⠶⡔⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠲⣿⡀⠀⠀⠀⠈⠙⠻⢿
⡟⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⢰⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⡄⢠⠋⠀⠀⠀⠀⠀⠀⠀⠀⠈⢳⠀⠀⠀⠀⠀⢀⣴ Press Enter when you are ready!
⣿⣷⣦⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⣧⠤⠤⢤⣤⡤⠤⠤⠤⠤⠤⠤⣇⣾⠤⠤⠤⣤⡔⠒⠒⠒⠦⠤⢾⠀⠀⢀⣤⣾⣿⣿
⣿⣿⣿⣿⣿⣷⣦⣄⠀⠀⠀⠀⠀⢸⠀⠀⠀⠘⡇⠀⠀⠀⠟⠀⠀⠀⠀⠀⠀⠀⡞⢱⠀⠀⠀⠛⠃⠀⠀⠀⠀⠀⢸⠀⣰⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⠆⠀⠀⠀⢸⠀⠀⠀⠀⠸⣄⠀⠀⠀⠀⠀⠀⠀⠀⢀⡔⠁⠀⢣⡀⠀⠀⠀⠀⠀⠀⠀⣠⡇⠀⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⡿⠋⠁⠀⠀⠀⠀⢸⡀⠀⠀⠀⠀⠈⠑⠢⠤⠤⠤⠤⠤⠒⠉⠀⠀⠀⠀⣯⠓⠲⠤⠤⠔⠒⠉⣽⠁⠀⠈⠻⣿⣿⣿⣿
⣿⣿⣿⡿⠟⠋⠀⠀⠀⠀⠀⠀⠀⣸⣿⡄⠀⠀⠑⢄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣆⠀⠀⢹⡀⠠⣄⣀⣀⠤⠞⣻⣄⠀⠀⠀⠈⠻⣿⣿
⣿⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⢠⠞⠁⠀⠀⠀⠀⠀⠀⠈⠉⠉⠉⠉⠀⠀⠀⠀⠀⠸⡀⠀⠀⣇⠀⠀⠀⠀⠀⠀⣿⠈⢳⡀⣀⣠⣴⣾⣿
⣿⣿⣿⣷⣶⣤⣄⣀⠀⠀⠀⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠱⣄⡴⠃⠀⠀⠀⠀⠀⠀⡇⠀⢸⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⠀⠹⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣇⠤⣾⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⠟⠀⠀⠀⠈⠓⠶⡦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣀⣀⡀⠀⠀⠀⠀⠀⠀⢲⠁⠀⠈⢿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣏⣀⣀⣀⣀⣀⣀⡀⢣⠀⠀⠀⢠⠟⠀⠀⣀⡤⠔⠊⠉⠉⠉⢹⣿⣿⣿⣿⡟⠑⠒⠤⡄⠘⡄⣶⣶⣾⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠈⣧⠀⠀⠸⡄⠀⠊⠁⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⠿⠃⠀⠀⠀⠀⣸⠃⠹⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⠀⠈⣆⠀⠀⠈⠲⠶⠆⠀⠀⠀⠀⢀⡀⠘⣿⡟⢡⣤⠀⠀⠀⠒⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠿⠗⠀⠋⠀⠀⠀⠀⠀⢀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠶⢤⣀⣀⠀⠀⠀⢀⣀⣠⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠉⠉⠉⠉⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠛⠛⠋⠉⠉⠁⡄⠘⡷⢤⣀⣀⣀⣀⣠⠞⢻⠀⡀⠈⠉⠙⠛⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⡼⠁⠀⡇⠀⠀⠀⠀⠀⠀⠀⠘⡄⢳⡀⠀⠀⠀⠀⠀⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⡸⠁⠀⠀⢹⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⢳⡀⠀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿`
    )
  );
}

async function whatIsMissing(array1, array2) {
  // let i = 0;
  // let played = 0;
  // const wimAll = [
  //   [wim1, wim11],
  //   [wim2, wim22],
  //   [wim3, wim33],
  //   [wim4, wim44],
  //   [wim5, wim55],
  //   [wim6, wim66],
  //   [wim7, wim77],
  //   [wim8, wim88],
  //   [wim9, wim99],
  //   [wim10, wim1010],
  // ];
  // i = Math.ceil(Math.random() * 9);
  // const array1 = wimAll[i][0];
  // const array2 = wimAll[i][1];
  console.clear();
  const disappears = Math.ceil(Math.random() * array1.length - 1);
  const array3 = [];
  console.log(`Memorise the objects :`);
  console.log(array1);

  //======================================================
  async function controlAnswer(isCorrect) {
    const spinner = createSpinner("Checking your answer...").start();
    await sleepShort();
    if (isCorrect) {
      return spinner.success({ texr: `That was amazing` });
    } else {
      return spinner.error({
        text: `Hmmm that wasn't the right answer! But let's play the $uitca$se game`,
      });
    }
  }
  // }
  // =======================================================
  setTimeout(function () {
    console.clear();
    array2.push(array1.splice(disappears, 1)[0]);

    // let seconds = new Date().getSeconds();
    // if (seconds <= 10) {
    array3.push(array2.shift());
    array3.push(array2.shift());
    array3.push(array2.pop());
    array3.push(array2.shift());
    array3.push(array2[0]);

    async function frage1(array3) {
      let item;

      const answers = await inquirer.prompt({
        name: `objekt1`,
        type: `list`,
        message: `Which of these items is the one that you saw before?`,
        choices: array3,
      });
      if (answers.objekt1 === array3[2]) {
        item = answers.objekt1;
      }
      return controlAnswer(answers.objekt1 === item);
    }
    frage1(array3);

    //   //=======================================0
    // } else if (seconds > 10 && seconds <= 20) {
    //   array3.push(array2.pop());
    //   array3.push(array2.pop());
    //   array3.push(array2.pop());
    //   array3.push(array2.pop());
    //   array3.push(array2[0]);
    //   async function frage1(array3) {
    //     let item;
    //     const answers = await inquirer.prompt({
    //       name: `objekt1`,
    //       type: `list`,
    //       message: `Which of these items is the one that you saw before?`,
    //       choices: array3,
    //     });
    //     if (answers.objekt1 === array3[0]) {
    //       item = answers.objekt1;
    //       console.log(`Amazing that was the right answer!!!`);
    //     }
    //     return controlAnswer(answers.objekt1 === item);
    //   }

    //   frage1(array3);
    //   // ================================================
    // } else if (seconds > 20 && seconds <= 30) {
    //   array3.push(array2.shift());
    //   array3.push(array2.shift());
    //   array3.push(array2.pop());
    //   array3.push(array2.pop());
    //   array3.push(array2[0]);

    //   async function frage1(array3) {
    //     let item;

    //     const answers = await inquirer.prompt({
    //       name: `objekt1`,
    //       type: `list`,
    //       message: `Which of these items is the one that you saw before?`,
    //       choices: array3,
    //     });
    //     if (answers.objekt1 === array3[2]) {
    //       item = answers.objekt1;
    //       console.log(`Amazing that was the right answer!!!`);
    //     }
    //     return controlAnswer(answers.objekt1 === item);
    //   }

    //   frage1(array3);

    //   // console.log(array);
    //   // console.log(array3);

    //   // =====================================
    // } else if (seconds > 30 && seconds <= 40) {
    //   array3.push(array2.shift());
    //   array3.push(array2.pop());
    //   array3.push(array2.pop());
    //   array3.push(array2.pop());
    //   array3.push(array2[0]);
    //   async function frage1(array3) {
    //     let item;

    //     const answers = await inquirer.prompt({
    //       name: `objekt1`,
    //       type: `list`,
    //       message: `Which of these items is the one that you saw before?`,
    //       choices: array3,
    //     });
    //     if (answers.objekt1 === array3[1]) {
    //       item = answers.objekt1;
    //       console.log(`Amazing that was the right answer!!!`);
    //     }
    //     return controlAnswer(answers.objekt1 === item);
    //   }

    //   frage1(array3);

    //   // console.log(array);
    //   // console.log(`Which of these items is the one that you saw before?`);
    //   // console.log(array3);

    //   // ============================================================
    // } else if (seconds > 40 && seconds <= 50) {
    //   array3.push(array2.shift());
    //   array3.push(array2.shift());
    //   array3.push(array2.shift());
    //   array3.push(array2.pop());
    //   array3.push(array2[0]);
    //   async function frage1(array3) {
    //     let item;

    //     const answers = await inquirer.prompt({
    //       name: `objekt1`,
    //       type: `list`,
    //       message: `Which of these items is the one that you saw before?`,
    //       choices: array3,
    //     });
    //     if (answers.objekt1 === array3[3]) {
    //       item = answers.objekt1;
    //       console.log(`Amazing that was the right answer!!!`);
    //     }
    //     return controlAnswer(answers.objekt1 === item);
    //   }

    //   frage1(array3);
    // } else {
    //   array3.push(...array2);
    //   async function frage1(array3) {
    //     let item;

    //     const answers = await inquirer.prompt({
    //       name: `objekt1`,
    //       type: `list`,
    //       message: `Which of these items is the one that you saw before?`,
    //       choices: array3,
    //     });
    //     if (answers.objekt1 === array3[4]) {
    //       item = answers.objekt1;
    //       console.log(`Amazing that was the right answer!!!`);
    //     }
    //     return controlAnswer(answers.objekt1 === item);
    //   }

    // frage1(array3);

    // console.log(array3);
    // }
  }, 8000);
}
function whatIsMissingGame() {
  whatIsMissingIntro();
  whatIsMissing(wim5, wim55);

  // whatIsMissing(wimAll[4][0], wimAll[4][1]);
}
whatIsMissingGame();
