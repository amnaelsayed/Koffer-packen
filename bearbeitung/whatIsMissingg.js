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

const wim1 = ["ð§Đ", "ðŪ", "ðŠ", "ðŠ", "ð·", "ðīââïļ"];
const wim11 = ["ðž", "ðŠ", "ðĨ", "ðš", "ðē"];

const wim22 = ["ð§ââïļ", "ðŊ", "ðŠ", "ð", "ð "];
const wim2 = [`ðĢ`, `ðŠ`, `ðļ`, `ð`, `ðŽ`, `ð§―`];

const wim3 = ["ð", "ð", "ðĨ°", "ðĪ", "ð", "ð "];
const wim33 = ["ðĪĢ", "ðĪŠ", "ð", "ð", "ðĢ"];

const wim4 = ["ðļ", "ðĨ", "ðĶ", "ð", "ðŊ", "ð·"];
const wim44 = ["ðđ", "ðĶ", "ð", "ðī", "ðĢ"];

const wim5 = ["ð§", "ðĨĐ", "ðĨ", "ð", "ð°", "ðĻ"];
const wim55 = ["ðŪ", "ðĨ", "ðĨ", "ðĨ§", "ð§"];

const wim6 = ["ðļ", "ðī", "ðĒ", "ðē", "ðĐ", "ðŪ"];
const wim66 = ["ðđ", "ð―", "ðĄ", "ð", "ð§"];

const wim7 = ["ðĨ", "ð", "ð", "ðļ", "âļ", "ð"];
const wim77 = ["âūïļ", "â―ïļ", "ð", "ðž", "ð"];

const wim8 = ["ð", "ð", "ð", "ðĪūââïļ", "ðĪ―", "ðĪžââïļ"];
const wim88 = ["ðŦ", "ð", "âą", "ðĪū", , "ðĪž"];

const wim9 = ["ð ", "ðŠ", "ðĢ", "ðŽ", "ð", "ð§―"];
const wim99 = ["ðĻ", "ðŠ", "ðŦ", "ðŪ", "ð­"];

const wim10 = ["ðŠ", "ð", "ð", "ð", "ð", "ð"];
const wim1010 = ["ðŽ", "ð", "ð", "ð", "ð"];

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
âĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢâ â â âĒŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋ
âĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâ â â â â âĒŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĄŋâ âĒŧâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋ
âĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâ â â â â â â âĒŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĄŋâ â â âĒļâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋ
âĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâ â â â â â â â â ŧâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâ â â â â âĒļâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋ
âĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâ â â â â â â â â â âĒŋâĢŋâĢŋâĢŋâĄŋâ â â â â â â âĒļâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋ
âĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâ â â â â â â â â â â â đâ â â â â â â â â â âĒļâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋ
âĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĄŋâ â â â â â â â â â â â â â â â â â â â â âĒâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋ
âĢŋâĢŋâĢŋâĢŋâĢŋâĄâ â â â â â â â â â â â â â â â â â â â âĢâĢâĢâĢâĢâĢâ â â â â â â âĒļâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâ ŋâ ŋâ âĢŧ But before we start with the main game
âĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĄâ â â â â â â â â â â â â â âĢâ Īâ â â â â â â â â â â â ĶâĢâ â â â â â â â â â â â âĢ°âĢŋ let's have a little training to warm you up.
âĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĄâ â â â â â â â â â âĢ â â â â â â â â â â â â â â â â â â âĒâ â â â â â â â â âĢžâĢŋâĢŋ You have 10 seconds to memorise the objects that  
âĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢ·âĄâ â â â â â â âĒ â â â â â â â â â â â â â â â â â â â â â â ąâĄâ â â â â âĒâĢžâĢŋâĢŋâĢŋ will appear on the screen.
âĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢ·âĄâ â â â â âĄ°â â â â â â â â â â â â â â â â â â â â â â â â ąâĄâ â â âĢ âĢūâĢŋâĢŋâĢŋâĢŋ Then one of the objects will be blended with new
âĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢ§â â â â âĒ°â â â â â â â â â â â â â â â â â â â â â â â â â âĒĢâ â â °âĢŋâĢŋâĢŋâĢŋâĢŋâĢŋ items and you will be asked to find the one that  
âĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâ ŋâ â â â â â âĄâ â â â â âĢâ Īâ â â â â â â â â â â â â â â â â â â šâĒĶâ â â â ŋâĢŋâĢŋâĢŋâĢŋ you have seen before.
âĢŋâĢŋâĢŋâĄŋâ â â â â â â â â âĒ â â â â â â â §â Ķâ Īâ Īâ Īâ â â â ķâĄâ â â â â â â â â â â ēâĢŋâĄâ â â â â â ŧâĒŋ
âĄâ â â â â â â â â â â â âĒļâ â â â âĒ°â â â â â â â â â â â đâĄâĒ â â â â â â â â â â âĒģâ â â â â âĒâĢī Press Enter when you are ready!
âĢŋâĢ·âĢĶâĢâĄâ â â â â â â â âĒļâ â â â âĢ§â Īâ ĪâĒĪâĢĪâĄĪâ Īâ Īâ Īâ Īâ Īâ ĪâĢâĢūâ Īâ Īâ ĪâĢĪâĄâ â â â Ķâ ĪâĒūâ â âĒâĢĪâĢūâĢŋâĢŋ
âĢŋâĢŋâĢŋâĢŋâĢŋâĢ·âĢĶâĢâ â â â â âĒļâ â â â âĄâ â â â â â â â â â â âĄâĒąâ â â â â â â â â â âĒļâ âĢ°âĢŋâĢŋâĢŋâĢŋâĢŋ
âĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâ â â â âĒļâ â â â â ļâĢâ â â â â â â â âĒâĄâ â âĒĢâĄâ â â â â â â âĢ âĄâ âĢŋâĢŋâĢŋâĢŋâĢŋâĢŋ
âĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĄŋâ â â â â â âĒļâĄâ â â â â â â Ēâ Īâ Īâ Īâ Īâ Īâ â â â â â âĢŊâ â ēâ Īâ Īâ â â âĢ―â â â â ŧâĢŋâĢŋâĢŋâĢŋ
âĢŋâĢŋâĢŋâĄŋâ â â â â â â â â âĢļâĢŋâĄâ â â âĒâĄâ â â â â â â â â âĢâ â âĒđâĄâ  âĢâĢâĢâ Īâ âĢŧâĢâ â â â â ŧâĢŋâĢŋ
âĢŋâĢŋâĄâ â â â â â â â âĒ â â â â â â â â â â â â â â â â â â â ļâĄâ â âĢâ â â â â â âĢŋâ âĒģâĄâĢâĢ âĢīâĢūâĢŋ
âĢŋâĢŋâĢŋâĢ·âĢķâĢĪâĢâĢâ â â âĄâ â â â â â â â â â â â â â â â â â â â ąâĢâĄīâ â â â â â â âĄâ âĒļâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋ
âĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĄâ â đâĢâ â â â â â â â â â â â â â â â â â â â â â â â â â â â âĢâ ĪâĢūâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋ
âĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâ â â â â â â ķâĄĶâ â â â â â â â â â â â â âĢâĢâĢâĢâĄâ â â â â â âĒēâ â â âĒŋâĢŋâĢŋâĢŋâĢŋâĢŋ
âĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢâĢâĢâĢâĢâĢâĢâĄâĒĢâ â â âĒ â â â âĢâĄĪâ â â â â âĒđâĢŋâĢŋâĢŋâĢŋâĄâ â â ĪâĄâ âĄâĢķâĢķâĢūâĢŋâĢŋâĢŋâĢŋâĢŋ
âĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâ â âĢ§â â â ļâĄâ â â â â â â â â âĒļâĢŋâĢŋâĢŋâ ŋâ â â â â âĢļâ â đâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋ
âĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĄâ â â âĢâ â â â ēâ ķâ â â â â âĒâĄâ âĢŋâĄâĒĄâĢĪâ â â â âĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋ
âĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢ§âĄâ â â â â â â â â ŋâ â â â â â â â âĒâĢžâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋ
âĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢĶâĢâ â â â â â â â â â â â â âĒâĢīâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋ
âĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢ·â ķâĒĪâĢâĢâ â â âĒâĢâĢ âĢīâĢūâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋ
âĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâ â â â â â â â âĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋ
âĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâ ŋâ ŋâ â â â â â âĄâ âĄ·âĒĪâĢâĢâĢâĢâĢ â âĒŧâ âĄâ â â â â ŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋ
âĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĄâ â â â â â â â â âĄžâ â âĄâ â â â â â â â âĄâĒģâĄâ â â â â â âĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋ
âĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâ â â â â â â â â âĄļâ â â âĒđâ â â â â â â â âĄâ âĒģâĄâ â â â â â âĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋâĢŋ`
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
