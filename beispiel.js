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

const tomorrow = (array) => {
  const prompt5 = enquirer.select({
    name: array[0].name,
    message: array[0].message,
    choices: array[0].choices,
    rightAnswer: array[0].rightAnswer,
  });

    array.splice(0, 1);
    console.clear();
    if (array.length === 0) {
      console.log(`Game Over`);
    } else return tomorrow(array);
  }, 3000);
  // prompt5.then((answer) => console.log("Answer:", answer)).catch(console.error);
  prompt5
    .then(
      (answer) => {
        if (prompt5.rightAnswer === answer) {
          console.log("You are right");
        } else {
          console.log(`You lost one life`);
        }
      }
      // console.log(
      //   gradient.summer(
      //     prompt5.rightAnswer === answer ? "You are right" : `You lost one life`
      //   )
      // )
    )
    .catch(console.error);

  array.splice(0, 1);
  console.clear();
  if (array.length === 0) {
    console.log(`Game Over`);
  } else return tomorrow(array);

// prompt5.then((answer) => console.log("Answer:", answer)).catch(console.error);
prompt5
  .then(
    (answer) => {
      if (prompt5.rightAnswer === answer) {
        console.log("You are right");
      } else {
        console.log(`You lost one life`);
      }
    }
    // console.log(
    //   gradient.summer(
    //     prompt5.rightAnswer === answer ? "You are right" : `You lost one life`
    //   )
    // )
  )
  .catch(console.error);


const iqOne = tomorrow(paradeigma);
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

// // const tomorrowGame = tomorrow();
// // var refreshIntervalId = setInterval(tomorrowGame, 10000);

// // /* later */
// // clearInterval(refreshIntervalId);

// 2;
// 3;
// 4;
// 5;
// 6;
// 7;
// 8;
// 9;
// 10;
// 11;
// console.log("\nI'm the normal output");
// console.log("\x1b[31mAnd now I'm red!");
// console.log("Shoot, why am I still red?");
// console.log("I need to \x1b[0mreset my console to get back to normal");
// console.log(
//   "Colors \x1b[32mcan \x1b[33mchange \x1b[35min \x1b[36mthe \x1b[34msame \x1b[0mlog"
// );
// console.log(
//   "\x1b[1mBRIGHT colors \x1b[32mare \x1b[33mbolded \x1b[35mand \x1b[36mbrighter \x1b[0m"
// );
// console.log("\x1b[2mDIM colors \x1b[32mare \x1b[33mdarker \x1b[0m");
// console.log(
//   "and of course, \x1b[41mwe have \x1b[30m\x1b[43mbackground colors\x1b[0m"
// );
// console.log(
//   "\x1b[7mReverse \x1b[32mswap \x1b[33mforeground \x1b[35mand \x1b[36mbackground\x1b[0m"
// );
// console.log(
//   "\x1b[8m\x1b[41mthis text \x1b[43mis hidden \x1b[42mbut the background\x1b[42m still comes \x1b[45mthrough\x1b[0m"
// );
// console.log(
//   "\x1b[4mgetting fancy with underlines \x1b[30m\x1b[3m\x1b[105mand italics\x1b[0m"
// );

// console.log(
//   "%cStyling is %cfun",
//   "color: #00ff33; font-size: 14px",
//   "text-transform:uppercase; font-size: 40px; color: #ff33dd"
// );
