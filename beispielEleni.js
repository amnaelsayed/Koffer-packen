import promptSync from "prompt-sync";
import chalk from "chalk";
import gradient from "gradient-string";
import figlet from "figlet";
import enquirer from "enquirer";
import { log } from "console";
import chalkAnimation from "chalk-animation";
const prompt = promptSync();

// const tomorrow = () => {
//   const prompt5 = enquirer.select({
//     name: "user",
//     message:
//       "The day before two days after the day before tomorrow is Saturday. What day is it today?",
//     choices: ["Sunday", "Monday", "Tuesady", "Wednesday", "Friday", "Saturday"],
//     rigthAnswer: "Friday",
//   });
//   // prompt5.then((answer) => console.log("Answer:", answer)).catch(console.error);
//   prompt5
//     .then((answer) =>
//       console.log(
//         prompt5.rightAnswer === answer ? "You are right" : `You lost one life`
//       )
//     )
//     .catch(console.error);
// };
// const iqOne = tomorrow();
// console.log(iqOne);

// // chalk-animation
// const rainbow = chalkAnimation.rainbow("Lorem ipsum"); // Animation starts

// setTimeout(() => {
//   rainbow.stop(); // Animation stops
// }, 1000);

// setTimeout(() => {
//   rainbow.start(); // Animation resumes
// }, 2000);

// // Beispiel zu figlet
// figlet.text(
//   "test",
//   {
//     font: "Standard",
//   },
//   function (err, data) {
//     console.log(data);
//   }
// );
// // Beispiel zu gradient string
// // let coolGradient = gradient("red", "green", "blue");
// // let coolString = coolGradient("This is a fancy string!");
// // console.log(coolString);

// // let duck = gradient("orange", "yellow").multiline(
// //   ["  __", "<(o )___", " ( ._> /", "  `---'"].join("\n")
// // );
// // console.log(duck);

// // // Beispiel zu chalk
// // console.log(chalk.blue("Hello world!"));

// // Beispiel zu enquire--> select between choices
// const { Select } = enquirer;

// const prompt1 = new Select({
//   name: "color",
//   message: "Pick a flavor",
//   choices: ["apple", "grape", "watermelon", "cherry", "orange"],
// });
// const prompt2 = new Select({
//   name: "city",
//   message: "Choose the right answer",
//   choices: ["berlin", "münchen", "frankfurt"],
// });

// const answer1 = await prompt1.run();
// console.log(answer1);
// const answer2 = await prompt2.run();
// console.log(answer2);

// gradient("orange", "yellow").multiline(
//   ["  __", "<(o )___", " ( ._> /", "  `---'"].join("\n")
// );

// const objekt = {
//   name: `Maria`,
//   message: `Guten Morgen`,
//   choices: [`a`, `b`],
//   rightAnswer: `a`,
// };
const paradeigma = [
  {
    name: `Kostas`,
    message: `Guten Tag`,
    choices: [`a`, `c`],
    rightAnswer: `a`,
  },
  {
    name: `Maria`,
    message: `Guten Morgen`,
    choices: [`a`, `b`],
    rightAnswer: `a`,
  },
  {
    name: `Marsfsfgefgia`,
    message: `Guteneegeg Morgen`,
    choices: [`a`, `b`],
    rightAnswer: `b`,
  },
];

const game = (array) => {
  let index = Math.ceil(Math.random() * array.length);
  const prompt5 = enquirer.select({
    name: array[index].name,
    message: array[index].message,
    choices: array[index].choices,
    rightAnswer: array[index].rightAnswer,
  });
  setTimeout(function () {
    array.splice(index, 1);
    console.clear();
    console.log(array);
    if (array.length === 1) {
      return `Game Over`;
    } else return game(array);
  }, 3000);
  // prompt5.then((answer) => console.log("Answer:", answer)).catch(console.error);
  prompt5
    .then((answer) =>
      console.log(
        prompt5.rightAnswer === answer ? "You are right" : `You lost one life`
      )
    )
    .catch(console.error);
};
const iqOne = game(paradeigma);
console.log(iqOne);

// const array1 = paradeigma.splice(-1, 1);
// const tomorrow = (obj) => {
//   const prompt5 = enquirer.select({
//     name: obj.name,
//     message: obj.message,
//     choices: obj.choices,
//     rightAnswer: obj.rightAnswer,
//   });
//   // setInterval(function () {
//   //   console.clear();
//   // }, 10000);
//   // prompt5.then((answer) => console.log("Answer:", answer)).catch(console.error);
//   prompt5
//     .then((answer) =>
//       console.log(
//         prompt5.rightAnswer === answer ? "You are right" : `You lost one life`
//       )
//     )
//     .catch(console.error);
// };
// const iqOne = tomorrow(objekt);
// console.log(iqOne);
// // let countDown;
// // const timer = () => {
// //   countDown = setTimeout(function () {
// //     console.log(3);
// //   }, 300);
// // };

// // clearInterval(countDown);
// // const insertTimer = timer();
// // console.log(2);
