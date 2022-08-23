async function mathe1() {
  let item;
  const answers = await inquirer.prompt({
    name: `mathQuestions`,
    type: `list`,
    message: "Find the sum of 111 + 222 + 333",
    choices: [700, 666, 10, 100],
  });
  if (answers.mathQuestion === 666) {
    item = answers.mathQuestion;
  }
  return handleAnswer(answers.mathQuestion === 666);
}

async function mathe2() {
  let item;
  const answers = await inquirer.prompt({
    name: `mathQuestions`,
    type: `list`,
    message: "Subtract 457 from 832",
    choices: [375, 57, 376, 970],
  });
  if (answers.mathQuestion === 375) {
    item = answers.mathQuestion;
  }
  return handleAnswer(answers.mathQuestion === 375);
}

async function mathe3() {
  let item;
  const answers = await inquirer.prompt({
    name: `mathQuestions`,
    type: `list`,
    message: "50 times 5 is equal to",
    choices: [2500, 505, 500, "None of these"],
  });
  if (answers.mathQuestion === "None of these") {
    item = answers.mathQuestion;
  }
  return handleAnswer(answers.mathQuestion === "None of these");
}

async function mathe4() {
  let item;
  const answers = await inquirer.prompt({
    name: `mathQuestions`,
    type: `list`,
    message: "Find the product of 72 * 3",
    choices: [216, 7230, 106, 372],
  });
  if (answers.mathQuestion === 216) {
    item = answers.mathQuestion;
  }
  return handleAnswer(answers.mathQuestion === 216);
}

async function mathe5() {
  let item;
  const answers = await inquirer.prompt({
    name: `mathQuestions`,
    type: `list`,
    message: "The smallest number of seven digits is",
    choices: ["0", "99,99,999", "10,10,100", "10,00,000"],
  });
  if (answers.mathQuestion === "10,00,000") {
    item = answers.mathQuestion;
  }
  return handleAnswer(answers.mathQuestion === "10,00,000");
}

async function mathe6() {
  let item;
  const answers = await inquirer.prompt({
    name: `mathQuestions`,
    type: `list`,
    message: "What is the largest two digits prime number?",
    choices: [96, 97, 98, 99],
  });
  if (answers.mathQuestion === 97) {
    item = answers.mathQuestion;
  }
  return handleAnswer(answers.mathQuestion === 97);
}

async function mathe7() {
  let item;
  const answers = await inquirer.prompt({
    name: `mathQuestions`,
    type: `list`,
    message: "How many factors are there in 71?",
    choices: [1, 2, 3, "None of these"],
  });
  if (answers.mathQuestion === 2) {
    item = answers.mathQuestion;
  }
  return handleAnswer(answers.mathQuestion === 2);
}

async function mathe8() {
  let item;
  const answers = await inquirer.prompt({
    name: `mathQuestions`,
    type: `list`,
    message: "What is the average value of 25, 20, 23 and 22?",
    choices: [20, 21.5, 22.5, 24],
  });
  if (answers.mathQuestion === 22.5) {
    item = answers.mathQuestion;
  }
  return handleAnswer(answers.mathQuestion === 22.5);
}

async function mathe9() {
  let item;
  const answers = await inquirer.prompt({
    name: `mathQuestions`,
    type: `list`,
    message: "What is the sum of one digit prime numbers?",
    choices: [11, 13, 15, 17],
  });
  if (answers.mathQuestion === 17) {
    item = answers.mathQuestion;
  }
  return handleAnswer(answers.mathQuestion === 17);
}

async function mathe10() {
  let item;
  const answers = await inquirer.prompt({
    name: `mathQuestions`,
    type: `list`,
    message: "How many hours in 90 minutes?",
    choices: [1.5, 1.3, 1, "None of these"],
  });
  if (answers.mathQuestion === 1.5) {
    item = answers.mathQuestion;
  }
  return handleAnswer(answers.mathQuestion === 1.5);
}

async function mathe11() {
  let item;
  const answers = await inquirer.prompt({
    name: `mathQuestions`,
    type: `list`,
    message:
      "A clock seen through a mirror shows 8 o 'clock. What is the correct time?",
    choices: [8.0, 4.0, 12.2, 12.4],
  });
  if (answers.mathQuestion === 4.0) {
    item = answers.mathQuestion;
  }
  return handleAnswer(answers.mathQuestion === 4.0);
}
async function mathe12() {
  let item;
  const answers = await inquirer.prompt({
    name: `mathQuestions`,
    type: `list`,
    message:
      "Using the number line, determine how much more than or less than -2.2 is 6.8?",
    choices: ["9more", "4.6more", "4.6less", "9less"],
  });
  if (answers.mathQuestion === "9more") {
    item = answers.mathQuestion;
  }
  return handleAnswer(answers.mathQuestion === "9more");
}

async function mathe13() {
  let item;
  const answers = await inquirer.prompt({
    name: `mathQuestions`,
    type: `list`,
    message: "If Davids age is 27 years old in 2011. What was his age in 2003?",
    choices: [17, 37, 20, 19],
  });
  if (answers.mathQuestion === 19) {
    item = answers.mathQuestion;
  }
  return handleAnswer(answers.mathQuestion === 19);
}

async function mathe14() {
  let item;
  const answers = await inquirer.prompt({
    name: `mathQuestions`,
    type: `list`,
    message: "What is 121 times 11",
    choices: [1331, 1313, 1133, 3131],
  });
  if (answers.mathQuestion === 1331) {
    item = answers.mathQuestion;
  }
  return handleAnswer(answers.mathQuestion === 1331);
}

async function mathe15() {
  let item;
  const answers = await inquirer.prompt({
    name: `mathQuestions`,
    type: `list`,
    message: "10001 - 101 = ?",
    choices: [1001, 990, 9990, 9900],
  });
  if (answers.mathQuestion === 9900) {
    item = answers.mathQuestion;
  }
  return handleAnswer(answers.mathQuestion === 9900);
}

async function mathe16() {
  let item;
  const answers = await inquirer.prompt({
    name: `mathQuestions`,
    type: `list`,
    message: "Which number has the greatest absolute value?",
    choices: [0, -20, -10, 10],
  });
  if (answers.mathQuestion === 10) {
    item = answers.mathQuestion;
  }
  return handleAnswer(answers.mathQuestion === 10);
}

async function mathe17() {
  let item;
  const answers = await inquirer.prompt({
    name: `mathQuestions`,
    type: `list`,
    message: "Speed of a car is 60 km/hr. Distance covered in 1 ¼ hours is",
    choices: [60, 65, 70, 75],
  });
  if (answers.mathQuestion === 75) {
    item = answers.mathQuestion;
  }
  return handleAnswer(answers.mathQuestion === 75);
}

async function mathe18() {
  let item;
  const answers = await inquirer.prompt({
    name: `mathQuestions`,
    type: `list`,
    message: "Which unit is used to measure length and width?",
    choices: ["Scale", "Meter", "Liter", "Gram"],
  });
  if (answers.mathQuestion === "Meter") {
    item = answers.mathQuestion;
  }
  return handleAnswer(answers.mathQuestion === "Meter");
}

async function mathe19() {
  let item;
  const answers = await inquirer.prompt({
    name: `mathQuestions`,
    type: `list`,
    message: "How many sides are there in a nonagon?",
    choices: [3, 5, 7, 9],
  });
  if (answers.mathQuestion === 9) {
    item = answers.mathQuestion;
  }
  return handleAnswer(answers.mathQuestion === 9);
}

async function mathe20() {
  let item;
  const answers = await inquirer.prompt({
    name: `mathQuestions`,
    type: `list`,
    message: "What is the square root of 64?",
    choices: [6, 8, 21, 24],
  });
  if (answers.mathQuestion === 8) {
    item = answers.mathQuestion;
  }
  return handleAnswer(answers.mathQuestion === 8);
}

async function trivial1() {
  let item;
  const answers = await inquirer.prompt({
    name: `trivialFragen`,
    type: `list`,
    message:
      "In what year did the Titanic sink in the Atlantic on her maiden voyage?",
    choices: ["1912", "1921", "1914", "1916"],
  });
  if (answers.trivialFragen === "1912") {
    item = answers.trivialFragen;
  }
  return handleAnswer(answers.trivialFragen === "1912");
}

async function trivial2() {
  let item;
  const answers = await inquirer.prompt({
    name: `trivialFragen`,
    type: `list`,
    message: "What is the smallest bird in the world?",
    choices: ["owl", "swallow", "pigeon", "Bee Hummingbird"],
  });
  if (answers.trivialFragen === "Bee Hummingbird") {
    item = answers.trivialFragen;
  }
  return handleAnswer(answers.trivialFragen === "Bee Hummingbird");
}

async function trivial3() {
  let item;
  const answers = await inquirer.prompt({
    name: `trivialFragen`,
    type: `list`,
    message:
      "In which movie did Hugh Jackman play the rival magician of the character played by Christian Bale?",
    choices: ["The prestige", "Lord of the Rings", "Assassins", "Dream"],
  });
  if (answers.trivialFragen === "The prestige") {
    item = answers.trivialFragen;
  }
  return handleAnswer(answers.trivialFragen === "The prestige");
}

async function trivial4() {
  let item;
  const answers = await inquirer.prompt({
    name: `trivialFragen`,
    type: `list`,
    message: "What year was The Godfather first published?",
    choices: [1917, 1972, 1982, 1983],
  });
  if (answers.trivialFragen === 1972) {
    item = answers.trivialFragen;
  }
  return handleAnswer(answers.trivialFragen === 1972);
}

async function trivial5() {
  let item;
  const answers = await inquirer.prompt({
    name: `trivialFragen`,
    type: `list`,
    message: "How many players are there on a water polo team?",
    choices: [9, 10, 7, 8],
  });
  if (answers.trivialFragen === 8) {
    item = answers.trivialFragen;
  }
  return handleAnswer(answers.trivialFragen === 8);
}

async function trivial6() {
  let item;
  const answers = await inquirer.prompt({
    name: `trivialFragen`,
    type: `list`,
    message: "How many hearts does an octopus have?",
    choices: [5, 3, 4, 7],
  });
  if (answers.trivialFragen === 3) {
    item = answers.trivialFragen;
  }
  return handleAnswer(answers.trivialFragen === 3);
}

async function trivial7() {
  let item;
  const answers = await inquirer.prompt({
    name: `trivialFragen`,
    type: `list`,
    message:
      "Which singer was known as The King of Pop and The Gloved One among others?",
    choices: ["Michael Jackson", "Elton John", "Ubo Jürgens", "John Lennon"],
  });
  if (answers.trivialFragen === "Michael Jackson") {
    item = answers.trivialFragen;
  }
  return handleAnswer(answers.trivialFragen === "Michael Jackson");
}

async function trivial8() {
  let item;
  const answers = await inquirer.prompt({
    name: `trivialFragen`,
    type: `list`,
    message: "What nationality was the artist Henri Matisse?",
    choices: ["German", "Russian", "Arabian", "French"],
  });
  if (answers.trivialFragen === "French") {
    item = answers.trivialFragen;
  }
  return handleAnswer(answers.trivialFragen === "French");
}

async function trivial9() {
  let item;
  const answers = await inquirer.prompt({
    name: `trivialFragen`,
    type: `list`,
    message: "Name the land.Giza Pyramid and the Great Sphinx?",
    choices: ["Syria", "Egypt", "Italy", "Greece"],
  });
  if (answers.trivialFragen === "Egypt") {
    item = answers.trivialFragen;
  }
  return handleAnswer(answers.trivialFragen === "Egypt");
}
async function trivial10() {
  let item;
  const answers = await inquirer.prompt({
    name: `trivialFragen`,
    type: `list`,
    message: "What year is modern paper first used?",
    choices: [105, 109, 125, 912],
  });
  if (answers.trivialFragen === 105) {
    item = answers.trivialFragen;
  }
  return handleAnswer(answers.trivialFragen === 105);
}

async function question1() {
  let item;
  var answers = await inquirer.prompt({
    name: `iq_1`,
    type: `list`,
    message: `What starts with "e" and ends with "e" but only has one letter in it?`,
    choices: [`envelope`, `e`, `eye`, `elite`],
    rightAnswer: `envelope`,
  });
  if (answers.iq_1 === `envelope`) {
    item = answers.iq_1;
  }
  return handleAnswer(answers.iq_1 === `envelope`, item, answers);
}
// ==========================
async function question2() {
  let item;
  const answers = await inquirer.prompt({
    name: `iq_2`,
    type: `list`,
    message: `Which number should come next in the pattern?
        37, 34, 31, 28`,
    choices: [23, 25, 17, 26],
  });
  if (answers.iq_2 === 25) {
    item = answers.iq_2;
  }
  return handleAnswer(answers.iq_2 === 25, item);
}
// ==========================
async function question3() {
  let item;
  const answers = await inquirer.prompt({
    name: `iq_3`,
    type: `list`,
    message: `Book is to Reading as Fork is to:`,
    choices: [`drawing`, `writing`, `stirring`, `eating`],
  });
  if (answers.iq_3 === `eating`) {
    item = answers.iq_3;
  }
  return handleAnswer(answers.iq_3 === `eating`, item);
}
// ==========================
async function question4() {
  let item;
  const answers = await inquirer.prompt({
    name: `iq_4`,
    type: `list`,
    message: `What number best completes the analogy:
      8:4 as 10:`,
    choices: [3, 7, 24, 5],
  });
  if (answers.iq_4 === 5) {
    item = answers.iq_4;
  }
  return handleAnswer(answers.iq_4 === 5, item);
}
// ==========================
async function question5() {
  let item;
  const answers = await inquirer.prompt({
    name: `iq_5`,
    type: `list`,
    message: ` 12593 is to 35291
        and 29684 is to 46982
        therefore 72936 is to ?`,
    choices: [69237, 62397, 32796, 39762],
  });
  if (answers.iq_5 === 69237) {
    item = answers.iq_5;
  }

  return handleAnswer(answers.iq_5 === 69237, item);
}
// ==========================
async function question6() {
  const answers = await inquirer.prompt({
    name: `iq_6`,
    type: `list`,
    message: ` How many cases do you need if you have to pack 112 pairs
    of shoes into cases that each hold 28 shoes?`,
    choices: [16, 8, 24, 12],
  });
  if (answers.iq_8 === 8) {
    item = answers.iq_;
  }
  return handleAnswer(answers.iq_1 === 8);
}
// ==========================
async function question7() {
  const answers = await inquirer.prompt({
    name: `iq_7`,
    type: `list`,
    message: `Which number should come next in the pattern?
    -2 , 5, -4, 3, -6:`,
    choices: [0, 1, -3, -4],
  });
  if (answers.iq_7 === 1) {
    item = answers.iq_7;
  }
  return handleAnswer(answers.iq_7 === 1);
}
// ==========================
async function question8() {
  let item;
  const answers = await inquirer.prompt({
    name: `iq_8`,
    type: `list`,
    message: `Which number should come next in the pattern?
      7,21,14,42,28:`,
    choices: [84, 56, 64, 76],
  });
  if (answers.iq_8 === 84) {
    item = answers.iq_8;
  }
  return handleAnswer(answers.iq_8 === 84);
}
// ==========================

async function question9() {
  let item;
  const answers = await inquirer.prompt({
    name: `iq_9`,
    type: `list`,
    message: `Which number should replace the questionmark?
      1, 10, 3, 8, ?, 6, 7, 4, 9, 2:`,
    choices: [8, 5, 9, 11],
  });
  if (answers.iq_9 === 5) {
    item = answers.iq_9;
  }
  return handleAnswer(answers.iq_9 === 5);
}
// ==========================

async function question10() {
  let item;
  const answers = await inquirer.prompt({
    name: `iq_10`,
    type: `list`,
    message: `Which number should replace the questionmark?
    1, 3, 9, 27, ?, 243:`,
    choices: [36, 78, 81, 112],
  });
  if (answers.iq_10 === 81) {
    item = answers.iq_10;
  }
  return handleAnswer(answers.iq_10 === 81);
}
// ==========================

async function question11() {
  let item;
  const answers = await inquirer.prompt({
    name: `iq_11`,
    type: `list`,
    message: `Jack is looking at Anne. Anne is looking at George. Jack is married, George is not, and we don’t know if Anne is married. Is a married person looking at an unmarried person?`,
    choices: [`yes`, `no`, `we cannot know`],
  });
  if (answers.iq_11 === `yes`) {
    item = answers.iq_11;
  }
  return handleAnswer(answers.iq_11 === `yes`);
}
// ==========================

async function question12() {
  let item;
  const answers = await inquirer.prompt({
    name: `iq_12`,
    type: `list`,
    message: `The day before two days after the day before tomorrow is Saturday. What day is it today?`,
    choices: [`Sunday`, `Tuesday`, `Monday`, `Friday`],
  });
  if (answers.iq_12 === `Friday`) {
    item = answers.iq_12;
  }
  return handleAnswer(answers.iq_12 === `Friday`);
}
// ==========================

async function question13() {
  let item;
  const answers = await inquirer.prompt({
    name: `iq_13`,
    type: `list`,
    message: `What can be broken but never held?`,
    choices: [`heart`, `vase`, `promise`, `none of this`],
  });
  if (answers.iq_13 === `promise`) {
    item = answers.iq_13;
  }
  return handleAnswer(answers.iq_13 === promise);
}
// ==========================

async function question14() {
  let item;
  const answers = await inquirer.prompt({
    name: `iq_14`,
    type: `list`,
    message: `What’s full of holes but can still hold water?`,
    choices: [`cheese`, `rock`, `sponge`, `shocks`],
  });
  if (answers.iq_14 === `sponge`) {
    item = answers.iq_14;
  }
  return handleAnswer(answers.iq_14 === `sponge`);
}
// ==========================

async function question15() {
  let item;
  const answers = await inquirer.prompt({
    name: `iq_15`,
    type: `list`,
    message: `2. What is always coming but never arrives?`,
    choices: [`train`, `tomorrow`, `money`, `happines`],
  });
  if (answers.iq_15 === `tomorrow`) {
    item = answers.iq_15;
  }
  return handleAnswer(answers.iq_15 === `tomorrow`);
}
// ==========================

async function question16() {
  let item;
  const answers = await inquirer.prompt({
    name: `iq_16`,
    type: `list`,
    message: `Which number should replace the questionmark?
    2, 3, 5, 7, 11, 13, 17, 19, ?, 29:`,
    choices: [`23`, `22`, `25`, `30`],
  });
  if (answers.iq_16 === 23) {
    item = answers.iq_16;
  }
  return handleAnswer(answers.iq_16 === 23);
}
// ==========================

async function question17() {
  let item;
  const answers = await inquirer.prompt({
    name: `iq_17`,
    type: `list`,
    message: `There are two ducks in front of a duck, two ducks behind a duck and a duck in the middle. How many ducks are there?`,
    choices: [5, 6, 3, 4],
  });
  if (answers.iq_17 === 3) {
    item = answers.iq_17;
  }
  return handleAnswer(answers.iq_17 === 3);
}
