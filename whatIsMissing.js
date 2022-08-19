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
  // `🎈`,
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

const whatIsMissingArray = [wim1, wim2];

function whatIsMissing(array, array2) {
  const i = Math.ceil(Math.random() * array.length - 1);
  console.log(array);
  setTimeout(function () {
    let ii = Math.ceil(Math.random() * array.length);

    console.clear();
    array2.push(array.splice(i, 1)[0]);
    array2[i] = array[ii];

    console.log();
    console.log(array2);
    // console.log(array);
  }, 6000);

  // array.splice(i, 1);
  // console.log(array);
}
whatIsMissing(whatIsMissingArray[0], whatIsMissingArray[1]);
