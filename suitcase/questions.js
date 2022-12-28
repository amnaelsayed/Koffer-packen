class Questions {
  constructor(name, type, message, choices, answer, asked) {
    this.name = name;
    this.type = type;
    this.message = message;
    this.choices = choices;
    this.answer = answer;
    this.asked = false;
  }
}

// class QuestionsInput {
//   constructor(names, types, messages, name, type, message, answer, asked) {
//     this.name = names;
//     this.type = types;
//     this.message = messages;
//     this.name = name;
//     this.type = type;
//     this.message = message;
//     this.answer = answer;
//     this.asked = false;
//   }
// }
// const emoji1 = new QuestionsInput(
//   `q`,
//   `confirm`,
//   `Remember:
//   "  😽   ",
//   "  😼  ",
//   "  😻  ",
//   "  😽   ",
//   "  😻  ",
//   "  😽   ",
//   "  😽   ",
//   "  😻  ",
//   "  😼  ",
//   "  😽   ",
//   "  😽   ",
//   "  😽   ",`,
//   `question`,
//   `input`,
//   "How many   😽   have you seen?",
//   2
// );
// ==========Mathe-Fragen=======================

const mathe1 = new Questions(
  `question`,
  `list`,
  "What is the square root of 64?",
  [6, 8, 21, 24],
  8
);

const mathe2 = new Questions(
  `question`,
  `list`,
  "Subtract 457 from 832",
  [375, 57, 376, 970],
  375
);
const mathe3 = new Questions(
  `question`,
  `list`,
  "50 times 5 is equal to",
  [2500, 505, 500, "None of these"],
  `None of these`
);
const mathe4 = new Questions(
  `question`,
  `list`,
  "Find the product of 72 * 3",
  [216, 7230, 106, 372],
  216
);
const mathe5 = new Questions(
  `question`,
  `list`,
  "The smallest number of seven digits is",
  ["0", "99,99,999", "10,10,100", "10,00,000"],
  "10,00,000"
);
const mathe6 = new Questions(
  `question`,
  `list`,
  "What is the largest two digits prime number?",
  [96, 97, 98, 99],
  97
);
const mathe7 = new Questions(
  `question`,
  `list`,
  "How many factors are there in 71?",
  [1, 2, 3, "None of these"],
  2
);
const mathe8 = new Questions(
  `question`,
  `list`,
  "What is the average value of 25, 20, 23 and 22?",
  [20, 21.5, 22.5, 24],
  22.5
);
const mathe9 = new Questions(
  `question`,
  `list`,
  "What is the sum of one digit prime numbers?",
  [11, 13, 15, 17],
  17
);
const mathe10 = new Questions(
  `question`,
  `list`,
  "How many hours in 90 minutes?",
  [1.5, 1.3, 1, "None of these"],
  1.5
);
const mathe11 = new Questions(
  `question`,
  `list`,
  "A clock seen through a mirror shows 8 o 'clock. What is the correct time?",
  [8.0, 4.0, 12.2, 12.4],
  4.0
);
const mathe12 = new Questions(
  `question`,
  `list`,
  "Using the number line, determine how much more than or less than -2.2 is 6.8?",
  ["9 more", "4.6 more", "4.6 less", "9 less"],
  "9 more"
);
const mathe13 = new Questions(
  `question`,
  `list`,
  "If Davids age is 27 years old in 2011. What was his age in 2003?",
  [17, 37, 20, 19],
  19
);
const mathe14 = new Questions(
  `question`,
  `list`,
  "What is 121 times 11",
  [1331, 1313, 1133, 3131],
  1331
);
const mathe15 = new Questions(
  `question`,
  `list`,
  "10001 - 101 = ?",
  [1001, 990, 9990, 9900],
  9900
);
const mathe16 = new Questions(
  `question`,
  `list`,
  "Which number has the greatest absolute value?",
  [0, -20, -10, 10],
  10
);
const mathe17 = new Questions(
  `question`,
  `list`,
  "Speed of a car is 60 km/hr. Distance covered in 1 ¼ hours is",
  [60, 65, 70, 75],
  75
);
const mathe18 = new Questions(
  `question`,
  `list`,
  "Which unit is used to measure length and width?",
  ["Scale", "Meter", "Liter", "Gram"],
  "Meter"
);
const mathe19 = new Questions(
  `question`,
  `list`,
  "How many sides are there in a nonagon?",
  [3, 5, 7, 9],
  9
);
const mathe20 = new Questions(
  `question`,
  `list`,
  "Find the sum of 111 + 222 + 333",
  [700, 666, 10, 100],
  666
);
// ==========Trivial-Fragen=======================
const trivial1 = new Questions(
  `question`,
  `list`,
  "In what year did the Titanic sink in the Atlantic on her maiden voyage?",
  ["1912", "1921", "1914", "1916"],
  "1912"
);
const trivial2 = new Questions(
  `question`,
  `list`,
  "What is the smallest bird in the world?",
  ["owl", "swallow", "pigeon", "Bee Hummingbird"],
  "Bee Hummingbird"
);
const trivial3 = new Questions(
  `question`,
  `list`,
  "In which movie did Hugh Jackman play the rival magician of the character played by Christian Bale?",
  ["The prestige", "Lord of the Rings", "Assassins", "Dream"],
  "The prestige"
);
const trivial4 = new Questions(
  `question`,
  `list`,
  "What year was The Godfather first published?",
  [1917, 1972, 1982, 1983],
  1972
);
const trivial5 = new Questions(
  `question`,
  `list`,
  "How many players are there on a water polo team?",
  [9, 10, 7, 8],
  8
);
const trivial6 = new Questions(
  `question`,
  `list`,
  "How many hearts does an octopus have?",
  [5, 3, 4, 7],
  3
);
const trivial7 = new Questions(
  `question`,
  `list`,
  "Which singer was known as The King of Pop and The Gloved One among others?",
  ["Michael Jackson", "Elton John", "Ubo Jürgens", "John Lennon"],
  "Michael Jackson"
);
const trivial8 = new Questions(
  `question`,
  `list`,
  "What nationality was the artist Henri Matisse?",
  ["German", "Russian", "Arabian", "French"],
  "French"
);
const trivial9 = new Questions(
  `question`,
  `list`,
  "Name the land.Giza Pyramid and the Great Sphinx?",
  ["Syria", "Egypt", "Italy", "Greece"],
  "Egypt"
);
const trivial10 = new Questions(
  `question`,
  `list`,
  "What year is modern paper first used?",
  [105, 109, 125, 912],
  105
);
// ======================IQ-Fragen=======================
const iq_1 = new Questions(
  `questions`,
  `list`,
  `What starts with "e" and ends with "e" but only has one letter in it?`,
  [`envelope`, `e`, `eye`, `elite`],
  `envelope`,
  `envelope`
);
const iq_2 = new Questions(
  `questions`,
  `list`,
  `Which number should come next in the pattern?
  37, 34, 31, 28`,
  [23, 25, 17, 26],
  25
);
const iq_3 = new Questions(
  `questions`,
  `list`,
  `Book is to Reading as Fork is to:`,
  [`drawing`, `writing`, `stirring`, `eating`],
  `eating`
);
const iq_4 = new Questions(
  `questions`,
  `list`,
  `What number best completes mathe3the analogy:
  8:4 as 10:`,
  [3, 7, 24, 5],
  5
);
const iq_5 = new Questions(
  `questions`,
  `list`,
  ` 12593 is to 35291
  and 29684 is to 46982
  therefore 72936 is to ?`,
  [69237, 62397, 32796, 39762],
  69237
);
const iq_6 = new Questions(
  `questions`,
  `list`,
  ` How many cases do you need if you have to pack 112 pairs
  of shoes into cases that each hold 28 shoes?`,
  [16, 8, 24, 12],
  8
);
const iq_7 = new Questions(
  `questions`,
  `list`,
  `Which number should come next in the pattern?
  -2 , 5, -4, 3, -6:`,
  [0, 1, -3, -4],
  1
);
const iq_8 = new Questions(
  `questions`,
  `list`,
  `Which number should come next in the pattern?
  7,21,14,42,28:`,
  [84, 56, 64, 76],
  84
);
const iq_9 = new Questions(
  `questions`,
  `list`,
  `Which number should replace the questionmark?
  1, 10, 3, 8, ?, 6, 7, 4, 9, 2:`,
  [8, 5, 9, 11],
  5
);
const iq_10 = new Questions(
  `questions`,
  `list`,
  `Which number should replace the questionmark?
  1, 3, 9, 27, ?, 243:`,
  [36, 78, 81, 112],
  81
);
const iq_11 = new Questions(
  `questions`,
  `list`,
  `Jack is looking at Anne. Anne is looking at George. Jack is married, George is not, and we don’t know if Anne is married. Is a married person looking at an unmarried person?`,
  [`yes`, `no`, `we cannot know`],
  `yes`
);
const iq_12 = new Questions(
  `questions`,
  `list`,
  `The day before two days after the day before tomorrow is Saturday. What day is it today?`,
  [`Sunday`, `Tuesday`, `Monday`, `Friday`],
  `Friday`
);
const iq_13 = new Questions(
  `questions`,
  `list`,
  `What can be broken but never held?`,
  [`heart`, `vase`, `promise`, `none of this`],
  `promise`
);
const iq_14 = new Questions(
  `questions`,
  `list`,
  `What’s full of holes but can still hold water?`,
  [`cheese`, `rock`, `sponge`, `shocks`],
  `sponge`
);
const iq_15 = new Questions(
  `questions`,
  `list`,
  `What is always coming but never arrives?`,
  [`train`, `tomorrow`, `money`, `happines`],
  `tomorrow`
);
const iq_16 = new Questions(
  `questions`,
  `list`,
  `Which number should replace the questionmark?
  2, 3, 5, 7, 11, 13, 17, 19, ?, 29:`,
  [`23`, `22`, `25`, `30`],
  23
);
//========================================================
// let questionsInput = [emoji1];
let allQuestions = [
  mathe1,
  mathe2,
  mathe3,
  mathe4,
  mathe5,
  mathe6,
  mathe7,
  mathe8,
  mathe9,
  mathe10,
  mathe11,
  mathe12,
  mathe13,
  mathe14,
  mathe15,
  mathe16,
  mathe17,
  mathe18,
  mathe19,
  mathe20,
  trivial1,
  trivial2,
  trivial3,
  trivial4,
  trivial5,
  trivial6,
  trivial7,
  trivial8,
  trivial9,
  trivial10,
  iq_1,
  iq_2,
  iq_3,
  iq_4,
  iq_5,
  iq_6,
  iq_7,
  iq_8,
  iq_9,
  iq_10,
  iq_11,
  iq_12,
  iq_13,
  iq_14,
  iq_16,
];
export {
  allQuestions,
  // questionsInput
};
