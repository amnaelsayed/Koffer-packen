import promptSync from "prompt-sync";
import chalk from "chalk";
import gradient from "gradient-string";
import figlet from "figlet";
import enquirer from "enquirer";
import { log } from "console";
const prompt = promptSync();

// const iqFragen = [
//   {
//     q: `What starts with "E" and ends with "E" but only has one letter in it?`,
//     a: `envelope`,
//   },
//   { q: `What can be broken but never held?`, a: `promise` },
//   {
//     q: `What’s full of holes but can still hold water?`,
//     a: `sponge`,
//   },
//   {
//     q: `Which number should come next in the pattern?
//     37, 34, 31, 28`,
//     a: 25,
//     explanation: `the numbers are decreasing by 3`,
//   },
//   {
//     q: `Book is to Reading as Fork is to:
//     a. drawing
//     b. writing
//     c. stirring
//     d. eating`,
//     a: `d`,
//   },
//   {
//     q: `What number best completes the analogy:
//     8:4 as 10:
//     a. 3
//     b. 7
//     c.24
//     d.5`,
//     a: `d`,
//     explanation: `The answer is 5 because 4 is half of 8, and 5 is half of 10`,
//   },
//   {
//     q: ` 12593 is to 35291
//     and 29684 is to 46982
//     therefore 72936 is to ?`,
//     a: 69237,
//   },
//   {
//     q: ` How many cases do you need if you have to pack 112 pairs
//     of shoes into cases that each hold 28 shoes?`,
//     a: 8,
//     explanation: ` 112 pairs of shoes = 224 shoes. 224 ÷ 28 = 8`,
//   },
//   {
//     q: `Which number should come next in the pattern?
//     -2 , 5, -4, 3, -6:
//     a. 0
//     b. 1
//     c. -3
//     d. -4`,
//     a: `b`,
//     explanation: `the even numbers are decreasing by 2 and the odd numbers are decreasing by 1`,
//   },
//   {
//     q: `Which number should come next in the pattern?
//     7,21,14,42,28:
//     a. 84
//     b. 56
//     c. 64
//     d. 76`,
//     a: `a`,
//     explanation: `the even numbers are decreasing by 2 and the odd numbers are decreasing by 1`,
//   },
//   {
//     q: `Which number should replace the questionmark?
//     1, 10, 3, 8, ?, 6, 7, 4, 9, 2:
//     a. 8
//     b. 5
//     c. 9
//     d. 11`,
//     a: `b`,
//   },
//   {
//     q: `Which number should replace the questionmark?
//     1, 3, 9, 27, ?, 243:
//     a. 81
//     b. 36
//     c. 78
//     d. 112`,
//     a: `a`,
//   },
//   {
//     q: `Which number should replace the questionmark?
//     2, 3, 5, 7, 11, 13, 17, 19, ?, 29:
//     a. 23
//     b. 22
//     c. 25
//     d. 30`,
//     a: `a`,
//   },
//   {
//     q: `2. What is always coming but never arrives?`,
//     a: `Tomorrow`,
//   },
//   {
//     q:`There are two ducks in front of a duck, two ducks behind a duck and a duck in the middle. How many ducks are there?`,
//     a:3
//     explanation:`Two ducks are in front of the last duck; the first duck has two ducks behind; one duck is between the other two.`
//   },
//   {
//     q:`Jack is looking at Anne. Anne is looking at George. Jack is married, George is not, and we don’t know if Anne is married. Is a married person looking at an unmarried person?
//     a:yes
//     b:no`,
//     a:`a`,
//     explanation:`. If Anne is married, then she is married and looking at George, who is unmarried. If Anne is unmarried, then Jack, who is married, is looking at her. Either way, the statement is correct.`
//   }
//   {
//     q:`The day before two days after the day before tomorrow is Saturday. What day is it today?
//     a:Sunday
//     b:Tuesday
//     c:Monday
//     d:Friday`,
//     a:`d`
//   },

// ];
<<<<<<< HEAD

// const func1 = async () => {
//   const { Select } = enquirer;
//   const prompt1 = new Select({
//     name: "a",
//     message:
//       "The day before two days after the day before tomorrow is Saturday. What day is it today?",
//     choices: ["Sunday", "Monday", "Tuesady", "Friday"],
//     rightAnswer: `Friday`,
//   });
//   const answer1 = await prompt1.run();
//   if (answer1 !== prompt1.rightAnswer) {
//     return `Your an lost one life`;
//   } else {
//     console.log(`You're right`);
//   }
// };
// func1();
// const antwort = func1();
// console.log(antwort);
=======
async function frage() {
  const { Select } = enquirer;
  const prompt1 = new Select({
    name: "a",
    message:
      "The day before two days after the day before tomorrow is Saturday. What day is it today?",
    choices: ["Sunday", "Monday", "Tuesady", "Friday"],
    rightAnswer: `Friday`,
  });
  const answer1 = await prompt1.run();
  console.log(answer1);

  if (answer1 !== prompt1.rightAnswer) {
    console.log(`Your an lost one life`);
  } else {
    return `You're right`;
  }
}
>>>>>>> e27902a180798d2c35f1a91475c9b526efd07eef
// console.log(prompt1.name);
// const antwortName = prompt("Wie heißt du? ");
// console.log(antwortName);

// setTimeout();

// function frage() {
//   // console.log(answer1);

//   if (answer1 !== prompt1.rightAnswer) {
//     return `You lost one life`;
//   } else {
//     console.log(`You're right`);
//   }
// }

<<<<<<< HEAD
// import enquirer from "enquirer";
=======
const antwort = await frage();
console.log(antwort);
>>>>>>> e27902a180798d2c35f1a91475c9b526efd07eef
