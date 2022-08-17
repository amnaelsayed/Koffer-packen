import promptSync from "prompt-sync";
import chalk from "chalk";
import gradient from "gradient-string";
import figlet from "figlet";
import enquirer from "enquirer";
import chalkAnimation from "chalk-animation";
const prompt = promptSync();

const arrO = [0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1];
const arrPQ = [
  "p",
  "p",
  "q",
  "p",
  "p",
  "p",
  "p",
  "p",
  "q",
  "p",
  "p",
  "p",
  "p",
  "q",
  "p",
];
const search = (array, searchedItem) => {
  const filtered = array.filter((num) => num === searchedItem);
  return filtered.length;
};

const searchO = search(arrO, 0);
const searchOne = search(arrO, 1);
const searchQ = search(arrPQ, "q");
const searchP = search(arrPQ, "p");
console.log(searchQ);

const filterGame = (zeichen, array, funk) => {
  const { NumberPrompt } = enquirer;
  let kofferArray = [];
  const prompt8 = new NumberPrompt({
    header: gradient.cristal(`Count the ${zeichen}!`),
    message: gradient.retro(`${array}`),
    footer: "************************",
  });

  prompt8
    .run()
    .then((answer) => {
      if (answer === funk) {
        console.log(
          gradient.summer(`Super! You have packed a ${funk} into your bag`)
        );
        kofferArray.push(answer);
        console.log(kofferArray, "läuft");
      } else {
        console.log(gradient.teen(`Upps, try it one more time!`));
      }
    })

    .catch(console.error);
};
const findO = filterGame(0, arrO, searchO);
console.log(findO);
// console.log(filterGame(0));

// const find1 = filterGame(1, arrO, searchOne);
// console.log(find1);

// const filterGame = (zeichen) => {
//   const frage = prompt(`Wieviele ${zeichen} siehst du?\n${arrO}\n`);
//   console.log(parseInt(frage));
//   if (parseInt(frage) === searchO) {
//     return `Super! You have packed ${searchO} into your bag`;
//   } else {
//     return `Upps, try it one more time!`;
//   }
// };
