import promptSync from "prompt-sync";
import chalk from "chalk";
import gradient from "gradient-string";
import figlet from "figlet";
import enquirer from "enquirer";
import center_align from "center-align";
// var center = center_align();
// center("hallo", 12);
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
  frageWarSchon: false,
};
const prompt2 = {
  name: "question2",
  message: "Subtract 457 from 832",
  choices: ["375", "57", "376", "970"],
  rightAnswer: "375",
  frageWarSchon: false,
};
const prompt3 = {
  name: "question3",
  message: "50 times 5 is equal to",
  choices: ["2500", "505", "500", "None of these"],
  rightAnswer: "None of these",
  frageWarSchon: false,
};
const prompt4 = {
  name: "question4",
  message: "Find the product of 72 * 3",
  choices: ["216", "7230", "106", "372"],
  rightAnswer: "216",
  frageWarSchon: false,
};
const prompt5 = {
  name: "question5",
  message: "The smallest number of seven digits is",
  choices: ["0", "99,99,999", "10,10,100", "10,00,000"],
  rightAnswer: "10,00,000",
  frageWarSchon: false,
};
const prompt6 = {
  name: "question6",
  message: "What is the largest two digits prime number?",
  choices: ["96", "97", "98", "99"],
  rightAnswer: "97",
  frageWarSchon: false,
};
const prompt7 = {
  name: "question7",
  message: "How many factors are there in 71?",
  choices: ["1", "2", "3", "None of these"],
  rightAnswer: "2",
  frageWarSchon: false,
};
const prompt8 = {
  name: "question8",
  message: "What is the average value of 25, 20, 23 and 22?",
  choices: ["20", "21.5", "22.5", "24"],
  rightAnswer: "22.5",
  frageWarSchon: false,
};
const prompt9 = {
  name: "question9",
  message: "What is the sum of one digit prime numbers?",
  choices: ["11", "13", "15", "17"],
  rightAnswer: "17",
  frageWarSchon: false,
};
const prompt10 = {
  name: "question10",
  message: "How many hours in 90 minutes?",
  choices: ["1.5hours", "1.30 hours", "1 hour", "None of these"],
  rightAnswer: "1.5hours",
  frageWarSchon: false,
};
const prompt11 = {
  name: "question11",
  message:
    "A clock seen through a mirror shows 8 o 'clock. What is the correct time?",
  choices: ["8.00", "4.00", "12.20", "12.40"],
  rightAnswer: "4.00",
  frageWarSchon: false,
};
const prompt12 = {
  name: "question12",
  message:
    "Using the number line, determine how much more than or less than -2.2 is 6.8?",
  choices: ["9more", "4.6more", "4.6less", "9less"],
  rightAnswer: "9more",
  frageWarSchon: false,
};
const prompt13 = {
  name: "question13",
  message: "If Davids age is 27 years old in 2011. What was his age in 2003?",
  choices: ["17years", "37years", "20years", "19years"],
  rightAnswer: "19years",
  frageWarSchon: false,
};
const prompt14 = {
  name: "question14",
  message: "What is 121 times 11",
  choices: ["1331", "1313", "1133", "3131"],
  rightAnswer: "1331",
  frageWarSchon: false,
};
const prompt15 = {
  name: "question15",
  message: "10001 - 101 = ?",
  choices: ["1001", "990", "9990", "9900"],
  rightAnswer: "9900",
  frageWarSchon: false,
};
const prompt16 = {
  name: "question16",
  message: "Which number has the greatest absolute value?",
  choices: ["0", "-20", "-10", "10"],
  rightAnswer: "10",
  frageWarSchon: false,
};
const prompt17 = {
  name: "question17",
  message: "Speed of a car is 60 km/hr. Distance covered in 1 ¼ hours is",
  choices: ["60km", "65km", "70km", "75km"],
  rightAnswer: "75km",
  frageWarSchon: false,
};
const prompt18 = {
  name: "question18",
  message: "Which unit is used to measure length and width?",
  choices: ["Scale", "Meter", "Liter", "Gram"],
  rightAnswer: "Meter",
  frageWarSchon: false,
};
const prompt19 = {
  name: "question19",
  message: "How many sides are there in a nonagon?",
  choices: ["3", "5", "7", "9"],
  rightAnswer: "9",
  frageWarSchon: false,
};
const prompt20 = {
  name: "question20",
  message: "What is the square root of 64?",
  choices: ["6", "8", "21", "24"],
  rightAnswer: "8",
  frageWarSchon: false,
};
let arrayGames = [
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
  // console.log(
  //   `\n\n\n\n                                              ${obj.message}         \n\n\n\n\n\n                                               ${obj.choices}\n\n\n\n`
  // );
  console.log("\n\n\n\n");
  console.log(
    `                                                    ${obj.message}\n\n\n\n`
  );
  console.log(
    `                                                       ${obj.choices}\n\n\n\n`
  );
  console.log("");
  const frage = prompt(
    gradient.summer(
      "                                                   Wähle die richtige Antwort:        "
    )
  );
  // obj.frageWarSchon = true;
  console.log(obj.frageWarSchon);
  if (frage === obj.rightAnswer) {
    console.log(
      gradient.summer(
        `\n\n\n                                           Great! You have packed a 👜${frage}👜 into your bag        \n\n\n`
      )
    );
  } else {
    console.clear();
    console.log(`\n\n\n\n\n\n\n`);
    console.log(
      gradient.teen(
        `         ______    ______   __       __  ________         ______   __     __  ________           
                 /      \  /      \ /  \     /  |/        |       /      \ /  |   /  |/        |          
                 /$$$$$$  |/$$$$$$  |$$  \   /$$ |$$$$$$$$/       /$$$$$$  |$$ |   $$ |$$$$$$$$/   ______  
                 $$ | _$$/ $$ |__$$ |$$$  \ /$$$ |$$ |__          $$ |  $$ |$$ |   $$ |$$ |__     /      \ 
                 $$ |/    |$$    $$ |$$$$  /$$$$ |$$    |         $$ |  $$ |$$  \ /$$/ $$    |   /$$$$$$  |
                 $$ |$$$$ |$$$$$$$$ |$$ $$ $$/$$ |$$$$$/          $$ |  $$ | $$  /$$/  $$$$$/    $$ |  $$/ 
                 $$ \__$$ |$$ |  $$ |$$ |$$$/ $$ |$$ |_____       $$ \__$$ |  $$ $$/   $$ |_____ $$ |      
                 $$    $$/ $$ |  $$ |$$ | $/  $$ |$$       |      $$    $$/    $$$/    $$       |$$ |      
                 $$$$$$/  $$/   $$/ $$/      $$/ $$$$$$$$/        $$$$$$/      $/     $$$$$$$$/ $$/       
                                                                                                   
                                                                                                   
                                                                                                   
                 `
      )
    );
    console.log(`\n\n\n\n\n\n\n`);
    console.log(arrayGames.length);
    const index = arrayGames.findIndex((object) => {
      return obj === object;
    });
    console.log(index);

    arrayGames.splice(index, 1);

    console.log(arrayGames.length);
  }
};

function randomQuestion(array) {
  const filtred = array.filter(({ frageWarSchon }) => frageWarSchon === false);
  return filtred[Math.floor(Math.random() * array.length)];

  // console.log(array);
  // let index = Math.floor(Math.random() * array.length);
  // if (!array[index].frageWarSchon) {
  //   return array[index];
  // } else {
  //   randomQuestion(array);
  // }
}
const randomMath = randomQuestion(arrayGames);

select(randomMath);

// const select = (obj) => {
//   console.log(obj);
//   if (obj !== undefined) {
//     const prompt5 = enquirer.select({
//       name: obj.name,
//       message: obj.message,
//       choices: obj.choices,
//       rightAnswer: obj.rightAnswer,
//       frageWarSchon: obj.frageWarSchon,
//     });

//     prompt5
//       .then((answer) => {
//         obj.frageWarSchon = true;
//         console.log(answer, `Ich binss`);
//         console.log(obj.frageWarSchon, `Die Frage War schon`);
//         if (obj.rightAnswer === answer) {
//           console.log("You are right");
// let random = randomQuestion(arrayGames);
// // console.log(arrayGames);

// while (random.frageWarSchon) {
//   console.log(random);
//   random = randomQuestion(arrayGames);
// }
//           select(randomQuestion(arrayGames));
//         } else {
//           console.log(`You lost one life`);
//         }
//       })
//       .catch(console.error);
//   } else {
//     console.log(`You answered all the questions`);
//   }
// };

// const multipleChoice = select(randomMath);
// console.log(multipleChoice);
