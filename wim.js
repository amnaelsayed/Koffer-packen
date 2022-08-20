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

function whatIsMissingIntro() {
  console.log(
    `You will have 20 seconds to memorise the following objects :`,
    `\n`,
    `Press enter when you are ready`
  );
  // }
  console.clear();

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
      if (seconds <= 7 || seconds >= 56) {
        array3.push(`a:` + array2.shift());
        array3.push(`b:` + array2.shift());
        array3.push(`c:` + array2.pop());
        array3.push(`d:` + array2.shift());
        array3.push(`e:` + array2[0]);
        console.log(array);
        console.log(`Choose the one that is missing from the top`);
        console.log(array3);
      } else if (
        (seconds > 7 && seconds <= 12) ||
        (seconds > 48 && seconds < 56)
      ) {
        array3.push(`a:` + array2.pop());
        array3.push(`b:` + array2.pop());
        array3.push(`c:` + array2.pop());
        array3.push(`d:` + array2.pop());
        array3.push(`e:` + array2[0]);

        console.log(array);
        console.log(`Choose the one that is missing from the top`);
        console.log(array3);
      } else if (
        (seconds > 12 && seconds <= 20) ||
        (seconds > 39 && seconds < 48)
      ) {
        array3.push(`a:` + array2.shift());
        array3.push(`b:` + array2.shift());
        array3.push(`c:` + array2.shift());
        array3.push(`d:` + array2.pop());
        array3.push(`e:` + array2[0]);

        console.log(array);
        console.log(`Choose the one that is missing from the top:`);
        console.log(array3);
      } else if (
        (seconds > 20 && seconds <= 23) ||
        (seconds > 33 && seconds < 39)
      ) {
        array3.push(`a:` + array2.shift());
        array3.push(`b:` + array2.pop());
        array3.push(`c:` + array2.pop());
        array3.push(`d:` + array2.pop());
        array3.push(`e:` + array2[0]);

        console.log(array);
        console.log(`Choose the one that is missing from the top`);
        console.log(array3);
      } else if (
        (seconds > 23 && seconds <= 30) ||
        (seconds > 31 && seconds < 33)
      ) {
        array3.push(`a:` + array2.shift());
        array3.push(`b:` + array2.shift());
        array3.push(`c:` + array2.shift());
        array3.push(`d:` + array2.pop());
        array3.push(`e:` + array2[0]);

        console.log(array);
        console.log(`Choose the one that is missing from the top`);
        console.log(array3);
      } else {
        array3.push(...array2);

        console.log(array3);
      }
    }, 6000);
  }
  const intro = prompt(
    whatIsMissing(whatIsMissingArray[0], whatIsMissingArray[1])
  );
  console.log(intro);
  // whatIsMissing(whatIsMissingArray[0], whatIsMissingArray[1]);
  // function wimAnswer() {
  // console.log(`This is yur answer`);
}
// }
// const theAnswer = prompt(`Choose your answer`);

// if (antwort.toLowerCase() == `a`) {
//   console.clear();
//   console.log(`Amazing`);
// } else {
//   console.log(`try one more time`);
// }

// export default whatIsMissing;
