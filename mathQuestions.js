import promptSync from "prompt-sync";
import chalk from "chalk";
import gradient from "gradient-string";
import figlet from "figlet";
import enquirer from "enquirer";
const prompt = promptSync();

// let userrightAnswers = [];
// let questionCounter = 0;

// if (isNaN(userrightAnswers[questionCounter])) {
//   console.log("Please make a selection!");
// } else {
//   questionCounter++;
//   displayNext();
// }

const prompt1 = {
  name: "question1",
  message: "Find the sum of 111 + 222 + 333",
  choices: ["700", "666", "10", "100"],
  rightAnswer: "666",
};
const prompt2 = {
  name: "question2",
  message: "Subtract 457 from 832",
  choices: ["375", "57", "376", "970"],
  rightAnswer: "375",
};
const prompt3 = {
  name: "question3",
  message: "50 times 5 is equal to",
  choices: ["2500", "505", "500", "None of these"],
  rightAnswer: "None of these",
};
const prompt4 = {
  name: "question4",
  message: "Find the product of 72 * 3",
  choices: ["216", "7230", "106", "372"],
  rightAnswer: "216",
};
const prompt5 = {
  name: "question5",
  message: "The smallest number of seven digits is",
  choices: ["0", "99,99,999", "10,10,100", "10,00,000"],
  rightAnswer: "10,00,000",
};
const prompt6 = {
  name: "question6",
  message: "What is the largest two digits prime number?",
  choices: ["96", "97", "98", "99"],
  rightAnswer: "97",
};
const prompt7 = {
  name: "question7",
  message: "How many factors are there in 71?",
  choices: ["1", "2", "3", "None of these"],
  rightAnswer: "2",
};
const prompt8 = {
  name: "question8",
  message: "What is the average value of 25, 20, 23 and 22?",
  choices: ["20", "21.5", "22.5", "24"],
  rightAnswer: "22.5",
};
const prompt9 = {
  name: "question9",
  message: "What is the sum of one digit prime numbers?",
  choices: ["11", "13", "15", "17"],
  rightAnswer: "17",
};
const prompt10 = {
  name: "question10",
  message: "How many hours in 90 minutes?",
  choices: ["1.5hours", "1.30 hours", "1 hour", "None of these"],
  rightAnswer: "1.5hours",
};
const prompt11 = {
  name: "question11",
  message:
    "A clock seen through a mirror shows 8 o 'clock. What is the correct time?",
  choices: ["8.00", "4.00", "12.20", "12.40"],
  rightAnswer: "4.00",
};
const prompt12 = {
  name: "question12",
  message:
    "Using the number line, determine how much more than or less than -2.2 is 6.8?",
  choices: ["9more", "4.6more", "4.6less", "9less"],
  rightAnswer: "9more",
};
const prompt13 = {
  name: "question13",
  message: "If Davids age is 27 years old in 2011. What was his age in 2003?",
  choices: ["17years", "37years", "20years", "19years"],
  rightAnswer: "19years",
};
const prompt14 = {
  name: "question14",
  message: "What is 121 times 11",
  choices: ["1331", "1313", "1133", "3131"],
  rightAnswer: "1331",
};
const prompt15 = {
  name: "question15",
  message: "10001 - 101 = ?",
  choices: ["1001", "990", "9990", "9900"],
  rightAnswer: "9900",
};
const prompt16 = {
  name: "question16",
  message: "Which number has the greatest absolute value?",
  choices: ["0", "-20", "-10", "10"],
  rightAnswer: "10",
};
const prompt17 = {
  name: "question17",
  message: "Speed of a car is 60 km/hr. Distance covered in 1 ¼ hours is",
  choices: ["60km", "65km", "70km", "75km"],
  rightAnswer: "75km",
};
const prompt18 = {
  name: "question18",
  message: "Which unit is used to measure length and breadth?",
  choices: ["Scale", "Meter", "Liter", "Gram"],
  rightAnswer: "Meter",
};
const prompt19 = {
  name: "question19",
  message: "How many sides are there in a nonagon?",
  choices: ["3", "5", "7", "9"],
  rightAnswer: "9",
};
const prompt20 = {
  name: "question20",
  message: "What is the square root of 64?",
  choices: ["6", "8", "21", "24"],
  rightAnswer: "8",
};
const arrayGames = [
  prompt1,
  prompt2,
  prompt3,
  prompt4,
  prompt5,
  prompt6,
  prompt7,
  prompt8,
  prompt9,
  prompt10,
  prompt11,
  prompt12,
  prompt13,
  prompt14,
  prompt15,
  prompt16,
  prompt17,
  prompt18,
  prompt19,
  prompt20,
];

const select = (obj) => {
  const prompt5 = enquirer.select({
    name: obj.name,
    message: obj.message,
    choices: obj.choices,
    rightrightAnswer: obj.rightrightAnswer,
  });

  prompt5
    .then((rightAnswer) => {
      if (obj.rightAnswer === rightAnswer) {
        console.log("You are right");
      } else {
        console.log(`You lost one life`);
      }
    })
    .catch(console.error);
};

function randomQuestion(array) {
  let index = Math.floor(Math.random() * array.length) + 1;
  return array[index];
}
const randomMath = randomQuestion(arrayGames);

const multipleChoice = select(randomMath);
console.log(multipleChoice);

/*
const mathQuestionsEasy = [
  {
    question: "What is 14/2",
    rightAnswers: {
      a: "6",
      b: "3",
      c: "7",
      d: "2",
    },
    rightAnswer: "c",
  },

  {
    question: "What is 7*7",
    rightAnswers: {
      a: "15",
      b: "29",
      c: "32",
      d: "49",
    },
    rightAnswer: "d",
  },
  {
    question: "What is the greatest two digit number?",
    rightAnswers: {
      a: "10",
      b: "23",
      c: "44",
      d: "90",
    },
    rightAnswer: "d",
  },
  {
    question: "How much is 90-19?",
    rightAnswers: {
      a: "71",
      b: "109",
      c: "80",
      d: "None of these above",
    },
    rightAnswer: "a",
  },
  {
    question: "How much is 190-87+16?",
    rightAnswers: {
      a: "103",
      b: "261",
      c: "87",
      d: "119",
    },
    rightAnswer: "d",
  },
  {
    question: "What is the symbol of pi?",
    rightAnswers: {
      a: "€",
      b: "π",
      c: "Ω",
      d: "∞",
    },
    rightAnswer: "b",
  },
  {
    question: "How much is 1000*1",
    rightAnswers: {
      a: "71",
      b: "109",
      c: "80",
      d: "1000",
    },
    rightAnswer: "b",
  },
  {
    question: "What is the smallest three digit number?",
    rightAnswers: {
      a: "100",
      b: "999",
      c: "111",
      d: "101",
    },
    rightAnswer: "a",
  },
  {
    question: "If the day tomorrow is Sunday, what was it yesterday?",
    rightAnswers: {
      a: "Wednesday",
      b: "Thursday",
      c: "Friday",
      d: "Saturday",
    },
    rightAnswer: "c",
  },
  {
    question: "6. 20 is divisible by",
    rightAnswers: {
      a: "None of these",
      b: "3",
      c: "7",
      d: "8",
    },
    rightAnswer: "b",
  },
];

const mathQuestionsHard = [
  {
    question: "The square root of 0.0081 is",
    rightAnswers: {
      a: "0.09",
      b: "0.9",
      c: "0.91",
      d: "0.009",
    },
    rightAnswer: "a",
  },

  {
    question: "The cube root of 1331 is",
    rightAnswers: {
      a: "11",
      b: "13",
      c: "19",
      d: "17",
    },
    rightAnswer: "a",
  },
  {
    question:
      "From the alternatives, select the set which is most alike the set (23, 29, 31).",
    rightAnswers: {
      a: "(17, 21, 29)",
      b: "(31, 37, 49)",
      c: "(13, 15, 23)",
      d: "(41, 43, 47)",
    },
    rightAnswer: "d",
  },
  {
    question:
      "A clock reads 4:30. If the minute hand points East, in what direction will the hour hand point?",
    rightAnswers: {
      a: "North",
      b: "North-West",
      c: "North-East",
      d: "South-East",
    },
    rightAnswer: "c",
  },
  {
    question:
      "Each edge of a cube is increased by 50%. What will be the percent increase in its volume?",
    rightAnswers: {
      a: "50 %",
      b: "150 %",
      c: "133 ¼ %",
      d: "237 ½ %",
    },
    rightAnswer: "d",
  },
  {
    question: "3456 ÷ 12 ÷ 8",
    rightAnswers: {
      a: "33.5",
      b: "36.5",
      c: "36",
      d: "33",
    },
    rightAnswer: "c",
  },
  {
    question:
      "A car covers a distance of 200km in 2 hours 40 minutes, whereas a jeep covers the same distance in 2 hours. What is the ratio of their speed?",
    rightAnswers: {
      a: "3:4",
      b: "4:3",
      c: "4:5",
      d: "5:4",
    },
    rightAnswer: "a",
  },
  {
    question: "What percentage should be added to 40 to make it 50?",
    rightAnswers: {
      a: "15%",
      b: "25%",
      c: "75%",
      d: "80%",
    },
    rightAnswer: "b",
  },
  {
    question: "Which is the smallest fraction among the following?",
    rightAnswers: {
      a: "3/4",
      b: "6/5",
      c: "6/7",
      d: "2/3",
    },
    rightAnswer: "d",
  },
  {
    question: "0.05 * 0.09 * 5",
    rightAnswers: {
      a: "0.005",
      b: "0.0225",
      c: "0.025",
      d: "0.225",
    },
    rightAnswer: "b",


*/
