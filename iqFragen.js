import promptSync from "prompt-sync";
import chalk from "chalk";
import gradient from "gradient-string";
import figlet from "figlet";
import enquirer from "enquirer";
import { log } from "console";
const prompt = promptSync();

const iqFragen = [
  {
    name: `iq1`,
    message: `What starts with "e" and ends with "e" but only has one letter in it?`,
    choices: [`envelope`, `e`, `eye`, `elite`],
    answer: `envelope`,
  },
  {
    name: `iq2`,
    message: `Which number should come next in the pattern?
      37, 34, 31, 28`,
    choices: [23, 25, 17, 26],
    answer: 25,
  },
  {
    name: `iq3`,
    message: `Book is to Reading as Fork is to:`,
    choices: [`a. drawing`, `b. writing`, `c. stirring`, `d. eating`],
    answer: `d`,
  },
  {
    name: `iq3`,
    message: `What number best completes the analogy:
      8:4 as 10:`,
    choices: [`a.3`, `b.7`, `c.24`, `d,5`],
    answer: `d`,
    explanation: `The answer is 5 because 4 is half of 8, and 5 is half of 10`,
  },
  {
    name: `iq4`,
    message: ` 12593 is to 35291
      and 29684 is to 46982
      therefore 72936 is to ?`,
    choices: [69237, 62397, 32796, 39762],
  },
  {
    name: `iq5`,
    message: ` How many cases do you need if you have to pack 112 pairs
      of shoes into cases that each hold 28 shoes?`,
    choices: [16, 8, 24, 12],
    answer: 8,
    explanation: ` 112 pairs of shoes = 224 shoes. 224 ÷ 28 = 8`,
  },
  {
    name: `iq6`,
    message: `Which number should come next in the pattern?
      -2 , 5, -4, 3, -6:`,
    choices: [`a. 0`, `b. 1`, `c. -3`, `d. -4`],
    explanation: `the even numbers are decreasing by 2 and the odd numbers are decreasing by 1`,
  },
  {
    name: `iq7`,
    message: `Which number should come next in the pattern?
      7,21,14,42,28:`,
    choices: [`a. 84`, `b. 56`, ` c. 64`, `d. 76`],
    answer: `a: a`,
    explanation: `the even numbers are decreasing by 2 and the odd numbers are decreasing by 1`,
  },
  {
    name: `iq8`,
    message: `Which number should replace the questionmark?
      1, 10, 3, 8, ?, 6, 7, 4, 9, 2:`,
    choices: [`a. 8`, `b. 5`, `c. 9`, `d. 11`],
    answer: `b`,
  },
  {
    name: `iq9`,
    message: `Which number should replace the questionmark?
      1, 3, 9, 27, ?, 243:`,
    choices: [`a. 81`, `b. 36`, `c. 78`, `d. 112`],
    answer: `a. 81`,
  },
  {
    name: `iq10`,
    message: `Which number should replace the questionmark?
      2, 3, 5, 7, 11, 13, 17, 19, ?, 29:`,
    choices: [`a. 23`, `b. 22`, `c. 25`, `d. 30`],
    answer: `a.23`,
  },
  {
    name: `ig11`,
    message: `There are two ducks in front of a duck, two ducks behind a duck and a duck in the middle. How many ducks are there?`,
    choices: [`a: 5`, `b: 6`, `c: 3`, `d: 4`],
    answer: `c: 3`,
    explanation: `Two ducks are in front of the last duck; the first duck has two ducks behind; one duck is between the other two.`,
  },
  {
    name: `iq11`,
    message: `Jack is looking at Anne. Anne is looking at George. Jack is married, George is not, and we don’t know if Anne is married. Is a married person looking at an unmarried person?`,
    choices: [`a: yes`, `b: no`, `c: we cannot know`],
    answer: `a: yes`,
    explanation: `. If Anne is married, then she is married and looking at George, who is unmarried. If Anne is unmarried, then Jack, who is married, is looking at her. Either way, the statement is correct.`,
  },
  {
    name: `iq12`,
    message: `The day before two days after the day before tomorrow is Saturday. What day is it today?`,
    choices: [`a:Sunday`, `b:Tuesday`, `c:Monday`, `d:Friday`],
    answer: `d: Friday`,
  },
  {
    name: `iq13`,
    message: `What can be broken but never held?`,
    choices: [`a: heart`, `b: vase`, `c: promise`, `d: I don't know`],
    answer: `c: promise`,
  },
  {
    name: `iq14`,
    message: `What’s full of holes but can still hold water?`,
    choices: [`a: sponge`, `b: a rock`, `c: the cheese`, `d: shocks`],
    answer: `a: sponge`,
  },
  {
    name: `iq15`,
    message: `2. What is always coming but never arrives?`,
    choices: [`a: train`, `b: tomorrow`, `c: money`, `d: happines`],
    answer: `b: tomorrow`,
  },
];
