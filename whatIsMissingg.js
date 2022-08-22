import promptSync from "prompt-sync";
import chalk from "chalk";
import gradient from "gradient-string";
import figlet from "figlet";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
const prompt = promptSync();

const wim1 = ["🧩", "🎮", "🪗", "🎳", "🪘", "🎷", "🚴‍♂️"];
const wim11 = ["🥎", "🛼", "🪀", "🥊", "🎺", "🚲"];

const wim22 = ["🧘‍♂️", "🎻", "🎯", "🎪", "🏂", "🎠"];
const wim2 = [`📰`, `💣`, `🪞`, `📸`, `🎈`, `📬`, `🧽`];

const wim3 = ["😂", "😜", "😇", "🥰", "🤓", "😚", "😠"];
const wim33 = ["🤣", "🤪", "🥸", "😍", "😗", "😣"];

const wim4 = ["😸", "🐶", "🐥", "🦄", "🐒", "🐯", "🐷"];
const wim44 = ["😹", "🦊", "🙉", "🐴", "🐤", "🐣"];

const wim5 = ["🧆", "🌭", "🥩", "🥐", "🍕", "🍰", "🍨"];
const wim55 = ["🍔", "🌮", "🥓", "🥖", "🥧", "🍧"];

const wim6 = ["🍸", "🍴", "🍢", "🍲", "🍩", "🥠", "🍮"];
const wim66 = ["🍹", "🍽", "🍡", "🍜", "🧁", "🥟"];

const wim7 = ["🥎", "🏐", "🏀", "🏸", "🛹", "⛸", "🏑"];
const wim77 = ["⚾️", "⚽️", "🏉", "🏓", "🛼", "🏒"];

const wim8 = ["🎟", "🏅", "🏖", "🏊‍♂️", "🤾‍♂️", "🤽", "🤼‍♀️"];
const wim88 = ["🎫", "🎖", "⛱", "🤾", "🏌️‍♂️", "🤼"];

const wim9 = ["🛠", "🪚", "💣", "🔪", "🔬", "🛌", "🧽"];
const wim99 = ["🔨", "🪛", "🔫", "🔮", "🔭", "🛏"];

const wim10 = ["📪", "🔎", "🔐", "🔓", "📌", "🗂", "📉"];
const wim1010 = ["📬", "🔍", "🔒", "📍", "📁", "📈"];

function whatIsMissingIntro() {
  const intro = prompt(
    `You have 10 seconds to memorise the objects that will appear on your screen:\nPress enter when you are ready`
  );
}

// console.clear();

function whatIsMissing(array, array2) {
  console.clear();
  const i = Math.ceil(Math.random() * array.length - 1);
  const array3 = [];
  console.log(`Memorise the objects :`);
  console.log(array);
  setTimeout(function () {
    console.clear();
    const missing = array2.push(array.splice(i, 1)[0]);
    // const missingOne = array;

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
      if (answers.objekt1 === missing) {
        item = answers.frage1;
        console.log(`Amazing that was the right answer!!!`);
      }
      // return handleAnswer(answers.frage1 === missing );
    }
    frage1(array3);

    // } else if (seconds > 10 && seconds <= 20) {
    //   array3.push(`a:` + array2.pop());
    //   array3.push(`b:` + array2.pop());
    //   array3.push(`c:` + array2.pop());
    //   array3.push(`d:` + array2.pop());
    //   array3.push(`e:` + array2[0]);

    //   // console.log(array);
    //   console.log(`Which of these items is the one that you saw before?`);
    //   console.log(array3);
    // } else if (seconds > 20 && seconds <= 30) {
    //   array3.push(`a:` + array2.shift());
    //   array3.push(`b:` + array2.shift());
    //   array3.push(`c:` + array2.pop());
    //   array3.push(`d:` + array2.pop());
    //   array3.push(`e:` + array2[0]);

    //   // console.log(array);
    //   console.log(`Which of these items is the one that you saw before?`);
    //   console.log(array3);
    // } else if (seconds > 30 && seconds <= 40) {
    //   array3.push(`a:` + array2.shift());
    //   array3.push(`b:` + array2.pop());
    //   array3.push(`c:` + array2.pop());
    //   array3.push(`d:` + array2.pop());
    //   array3.push(`e:` + array2[0]);

    //   // console.log(array);
    //   console.log(`Which of these items is the one that you saw before?`);
    //   console.log(array3);
    // } else if (seconds > 40 && seconds <= 50) {
    //   array3.push(`a:` + array2.shift());
    //   array3.push(`b:` + array2.shift());
    //   array3.push(`c:` + array2.shift());
    //   array3.push(`d:` + array2.pop());
    //   array3.push(`e:` + array2[0]);

    //   // console.log(array);
    //   console.log(`Which of these items is the one that you saw before?`);
    //   console.log(array3);
    // } else {
    //   array3.push(...array2);

    // console.log(array3);
    // }
  }, 1000);
}

async function whatIsMissingGame(array, array2) {
  whatIsMissingIntro();
  whatIsMissing(array, array2);
}
whatIsMissingGame(wim3, wim33);

export default whatIsMissingGame;
