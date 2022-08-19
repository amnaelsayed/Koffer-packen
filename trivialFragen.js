import promptSync from "prompt-sync";
import chalk from "chalk";
import figlet from "figlet";
import enquirer from "enquirer";
const prompt = promptSync();

const trivialFragen = [
  {
    massage:
      "In what year did the Titanic sink in the Atlantic on her maiden voyage?",
    choices: {
      a: 1912,
      b: 1921,
      c: 1914,
      d: 1916,
    },
    rightAnswer: "1912",
  },
  {
    massage: `What is the smallest bird in the world? `,
    choices: {
      a: "owl",
      b: "swallow",
      c: "pigeon",
      d: "Bee Hummingbird",
    },
    rightAnswer: "d",
  },
  {
    massage: `In which movie did Hugh Jackman play the rival magician of the character played by Christian Bale?`,
    choices: {
      a: "The prestige",
      b: "Lord of the Rings",
      C: "Assassins",
      d: "Dream",
    },
    rightAnswer: "a",
  },
  {
    massage: "What year was The Godfather first published?",
    choices: {
      a: 1917,
      b: 1972,
      c: 1982,
      d: 1983,
    },
    rightAnswer: "b",
  },
  {
    massage: "How many players are there on a water polo team?",
    choices: {
      a: "nine",
      b: "ten",
      c: "seven",
      d: "eight",
    },
    rightAnswer: "c",
  },
  {
    massage: "How many hearts does an octopus have?",
    choices: {
      a: "five",
      b: "Three",
      c: "four",
      d: "seven",
    },
    rightAnswer: "b",
  },
  {
    massage: `Which singer was known as "The King of Pop" and "The Gloved One" among others?`,
    choices: {
      a: "Michael Jackson",
      b: "Elton John",
      c: "Udo Jürgens",
      d: "John Lennon",
    },
    rightAnswer: "Michael Jackson",
  },
  {
    massage: "What nationality was the artist Henri Matisse?",
    choices: {
      a: "German",
      b: "Russian",
      c: "Arabian",
      d: "French",
    },
    rightAnswer: "d",
  },
  {
    massage: "Name the land.Giza Pyramid and the Great Sphinx?",
    choices: {
      a: "Syria",
      b: "Egypt",
      c: "Italy",
      b: "Greece",
    },
    rightAnswer: "b",
  },
  {
    massage: "What year is modern paper first used?",
    choices: {
      a: 105,
      b: 109,
      c: 125,
      d: 912,
    },
    rightAnswer: "a",
  },
];
console.log(trivialFragen);
