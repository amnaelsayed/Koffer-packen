import promptSync from "prompt-sync";
const prompt = promptSync();
import chalk from "chalk";

const mathQuestionsEasy = [
  {
    question: "What is 14/2",
    answers: {
      a: "6",
      b: "3",
      c: "7",
      d: "2",
    },
    answer: "c",
  },

  {
    question: "What is 7*7",
    answers: {
      a: "15",
      b: "29",
      c: "32",
      d: "49",
    },
    answer: "d",
  },
  {
    question: "What is the greatest two digit number?",
    answers: {
      a: "10",
      b: "23",
      c: "44",
      d: "90",
    },
    answer: "d",
  },
  {
    question: "How much is 90-19?",
    answers: {
      a: "71",
      b: "109",
      c: "80",
      d: "None of these above",
    },
    answer: "a",
  },
  {
    question: "How much is 190-87+16?",
    answers: {
      a: "103",
      b: "261",
      c: "87",
      d: "119",
    },
    answer: "d",
  },
  {
    question: "What is the symbol of pi?",
    answers: {
      a: "€",
      b: "π",
      c: "Ω",
      d: "∞",
    },
    answer: "b",
  },
  {
    question: "How much is 1000*1",
    answers: {
      a: "71",
      b: "109",
      c: "80",
      d: "1000",
    },
    answer: "b",
  },
  {
    question: "What is the smallest three digit number?",
    answers: {
      a: "100",
      b: "999",
      c: "111",
      d: "101",
    },
    answer: "a",
  },
  {
    question: "If the day tomorrow is Sunday, what was it yesterday?",
    answers: {
      a: "Wednesday",
      b: "Thursday",
      c: "Friday",
      d: "Saturday",
    },
    answer: "c",
  },
  {
    question: "6. 20 is divisible by",
    answers: {
      a: "None of these",
      b: "3",
      c: "7",
      d: "8",
    },
    answer: "b",
  },
];

const mathQuestionsHard = [
  {
    question: "The square root of 0.0081 is",
    answers: {
      a: "0.09",
      b: "0.9",
      c: "0.91",
      d: "0.009",
    },
    answer: "a",
  },

  {
    question: "The cube root of 1331 is",
    answers: {
      a: "11",
      b: "13",
      c: "19",
      d: "17",
    },
    answer: "a",
  },
  {
    question:
      "From the alternatives, select the set which is most alike the set (23, 29, 31).",
    answers: {
      a: "(17, 21, 29)",
      b: "(31, 37, 49)",
      c: "(13, 15, 23)",
      d: "(41, 43, 47)",
    },
    answer: "d",
  },
  {
    question:
      "A clock reads 4:30. If the minute hand points East, in what direction will the hour hand point?",
    answers: {
      a: "North",
      b: "North-West",
      c: "North-East",
      d: "South-East",
    },
    answer: "c",
  },
  {
    question:
      "Each edge of a cube is increased by 50%. What will be the percent increase in its volume?",
    answers: {
      a: "50 %",
      b: "150 %",
      c: "133 ¼ %",
      d: "237 ½ %",
    },
    answer: "d",
  },
  {
    question: "3456 ÷ 12 ÷ 8",
    answers: {
      a: "33.5",
      b: "36.5",
      c: "36",
      d: "33",
    },
    answer: "c",
  },
  {
    question:
      "A car covers a distance of 200km in 2 hours 40 minutes, whereas a jeep covers the same distance in 2 hours. What is the ratio of their speed?",
    answers: {
      a: "3:4",
      b: "4:3",
      c: "4:5",
      d: "5:4",
    },
    answer: "a",
  },
  {
    question: "What percentage should be added to 40 to make it 50?",
    answers: {
      a: "15%",
      b: "25%",
      c: "75%",
      d: "80%",
    },
    answer: "b",
  },
  {
    question: "Which is the smallest fraction among the following?",
    answers: {
      a: "3/4",
      b: "6/5",
      c: "6/7",
      d: "2/3",
    },
    answer: "d",
  },
  {
    question: "0.05 * 0.09 * 5",
    answers: {
      a: "0.005",
      b: "0.0225",
      c: "0.025",
      d: "0.225",
    },
    answer: "b",
  },
];
