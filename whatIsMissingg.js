import promptSync from "prompt-sync";
import chalk from "chalk";
import gradient from "gradient-string";
import figlet from "figlet";
import enquirer from "enquirer";
import chalkAnimation from "chalk-animation";
const prompt = promptSync();

const wim1 = [
  "🧩",
  "🎮",
  "🪗",
  "🎳",
  "🪘",
  // "🎷",
  // "🚴‍♂️",
  // "🧘‍♂️",
  // "🎻",
  // "🎯",
  // "🎪",
  // "🏂",
  // "🥎",
  // "🛼",
  // "🪀",
  // "🥊",
  // "🎺",
  // "🚲",
  // "🎠",
  // "💵",
];

const wim2 = [
  `📰`,
  `💣`,
  `🪞`,
  `📸`,
  `🎈`,
  // `📬`,
  // `🧽`,
  // `🩺`,
  // `📚`,
  // `📖`,
  // `🔖`,
  // `🧷`,
  // `🪟`,
  // `🎁`,
  // `🩹`,
  // `📐`,
  // `📏`,
  // `🧮`,
  // `📌`,
  // `🔭`,
];

const whatIsMissingArrayTop = [wim1];

const whatIsMissingArrayBottom = [wim2];
function whatIsMissingIntro() {
  const intro = prompt(
    `You have 10 seconds to memorise the following objects :\nPress enter when you are ready`
  );
  // console.log(intro);
}

// console.clear();

function whatIsMissing(array, array2) {
  console.clear();
  const i = Math.ceil(Math.random() * array.length - 1);
  const array3 = [];
  console.log(`Memorise the objects :`);
  console.log(array);
  setTimeout(function () {
    // let ii = Math.ceil(Math.random() * array.length-1);

    console.clear();
    const missing = array2.push(array.splice(i, 1)[0]);
    const missingOne = array;

    let seconds = new Date().getSeconds();
    if (seconds <= 10) {
      array3.push(`a:` + array2.shift());
      array3.push(`b:` + array2.shift());
      array3.push(`c:` + array2.pop());
      array3.push(`d:` + array2.shift());
      array3.push(`e:` + array2[0]);
      console.log(array);
      console.log(`Which item of the bottom array is missing from the top one`);
      console.log(array3);
    } else if (seconds > 10 && seconds <= 20) {
      array3.push(`a:` + array2.pop());
      array3.push(`b:` + array2.pop());
      array3.push(`c:` + array2.pop());
      array3.push(`d:` + array2.pop());
      array3.push(`e:` + array2[0]);

      console.log(array);
      console.log(`Which item of the bottom array is missing from the top one`);
      console.log(array3);
    } else if (seconds > 20 && seconds <= 30) {
      array3.push(`a:` + array2.shift());
      array3.push(`b:` + array2.shift());
      array3.push(`c:` + array2.pop());
      array3.push(`d:` + array2.pop());
      array3.push(`e:` + array2[0]);

      console.log(array);
      console.log(`Which item of the bottom array is missing from the top one`);
      console.log(array3);
    } else if (seconds > 30 && seconds <= 40) {
      array3.push(`a:` + array2.shift());
      array3.push(`b:` + array2.pop());
      array3.push(`c:` + array2.pop());
      array3.push(`d:` + array2.pop());
      array3.push(`e:` + array2[0]);

      console.log(array);
      console.log(`Which item of the bottom array is missing from the top one`);
      console.log(array3);
    } else if (seconds > 40 && seconds <= 50) {
      array3.push(`a:` + array2.shift());
      array3.push(`b:` + array2.shift());
      array3.push(`c:` + array2.shift());
      array3.push(`d:` + array2.pop());
      array3.push(`e:` + array2[0]);

      console.log(array);
      console.log(`Which item of the bottom array is missing from the top one`);
      console.log(array3);
    } else {
      array3.push(...array2);

      console.log(array3);
    }
  }, 6000);
}

const introGame = () => {
  // const myFunction = () => {
  whatIsMissingIntro();
  whatIsMissing(whatIsMissingArrayTop[0], whatIsMissingArrayBottom[0]);
};
// let timerID = setTimeout(myFunction, 10000);
// };
introGame();
// const whatIsGame = () => {
//
// };
// const game={}
// function wimAnswer() {
//   // console.log(`This is yur answer`);
// }
// const theAnswer = prompt(`Choose your answer`);

// if (antwort.toLowerCase() == `a`) {
//   console.clear();
//   console.log(`Amazing`);
// } else {
//   console.log(`try one more time`);
// }

// console.log(missing());
export default introGame;
