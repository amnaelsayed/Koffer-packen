import promptSync from "prompt-sync";
import chalk from "chalk";
import figlet from "figlet";
import enquirer from "enquirer";
const prompt = promptSync();


const { Select } = enquirer;

  const prompt1= new Select({
    name : `${chalk.yellow("q1")}`,
    message:`${chalk.bgGreen ("In what year did the Titanic sink in the Atlantic on her maiden voyage?")}`,
     choices:[ 
      "1912",
      "1921",
      "1914",
      "1916",
      ],
      rightAnswer: "1912",
      frageWarSchon: false,
  });
   const prompt2 = new Select({
    name : "q2",
    message:`${chalk.bgGreen("What is the smallest bird in the world?")} `,
    choices:[ 
      "owl",
      "swallow",
      "pigeon",
      "Bee Hummingbird",
     ],
    rightAnswer: "Bee Hummingbird",
    frageWarSchon: false,
  });

   const prompt3 = new Select({
    name : "q3",
    message:`${chalk.bgGreen("In which movie did Hugh Jackman play the rival magician of the character played by Christian Bale?")}`,
    choices:[ 
      "The prestige",
      "Lord of the Rings",
      "Assassins",
      "Dream",
     ],
    rightAnswer: "The prestige",
    frageWarSchon: false,
  });

  const prompt4 = new Select({
    name : "q4",
    message:"What year was The Godfather first published?",
    choices:[ 
      "1917",
      "1972",
      "1982",
      "1983",
     ],
    rightAnswer: "1972",
    frageWarSchon: false,
  });

   const prompt5 = new Select({
    name : "q5",
    message:"How many players are there on a water polo team?",
    choices:[ 
      "nine",
      "ten",
      "seven",
      "eight",
     ],
    rightAnswer:"seven" ,
    frageWarSchon: false,
   });

  const prompt6= new Select({
    name : "q6",
    message:"How many hearts does an octopus have?" ,
    choices:[ 
      "five",
      "Three",
      "four",
      "seven",
     ],
    rightAnswer:"Three" ,
    frageWarSchon: false,
  });

  const prompt7 = new Select({
    name : "q7",
   message:"Which singer was known as The King of Pop and The Gloved One among others?" ,
  choices: [
    "Michael Jackson",
    "Elton John",
    "Ubo Jürgens",
    "John Lennon",
   ],
   rightAnswer: "Michael Jackson",
   frageWarSchon: false,
  });

  const prompt8= new Select({
    name : "q8",
    message:"What nationality was the artist Henri Matisse?",
    choices:[ 
      "German",
      "Russian",
      "Arabian",
      "French",
     ],
    rightAnswer: "French" ,
    frageWarSchon: false,
  });

  const prompt9 = new Select({
    name : "q9",
    message:"Name the land.Giza Pyramid and the Great Sphinx?",
    choices:[ 
      "Syria",
      "Egypt",
      "Italy",
      "Greece",
     ],
    rightAnswer: "Egypt",
    frageWarSchon: false,
  });

  const prompt10 = new Select({
    name : "q10",
    message:"What year is modern paper first used?",
    choices:[ 
       "105",
      "109",
      "125",
       "912",
     ], 
    rightAnswer: "105",
    frageWarSchon: false,
  });

  // const arrayGames = [
  //   prompt1,
  //   prompt2,
  //   prompt3,
  //   prompt4,
  //   prompt5,
  //   prompt6,
  //   prompt7,
  //   prompt8,
  //   prompt9,
  //   prompt10,
  // ];
console.clear()
const begrüsung = prompt(chalk.bgGreen("Wie heisst du? "));
console.log(chalk.green(chalk.blue("Hallo", chalk.cyan(begrüsung),"🤗")));
const möchteSpiel = prompt(chalk.bgGreen("Willst du spielen?😉"))
console.log(chalk.bgGray(chalk.blue(möchteSpiel)));

const spielRegeln = prompt(chalk.red("Spielregeln :"))
  console.log(spielRegeln,"\n", chalk.blue("1- Du hast 3 Versuche."),"\n","\n", chalk.blue ("2-Jede Frage hat 4 Wahlen."),"\n","\n", chalk.green("Viel Glück  😍"));
console.log();


  const answer1 = await prompt1.run()
  console.log(answer1);
  if(answer1 !== prompt1.rightAnswer){
    console.log(`Tut mir leid,${chalk.red("Falsch")}, Du verlierst einen Versuch!`); 
  }
  else{
    console.log(chalk.green(`richtig`)); 
  }

  const weiter = prompt(chalk.bgBlue("möschtest du weiter?y/n?"));
  console.log(weiter);
  

    if(weiter === "y"){
      console.log(`${chalk.green("Die nächste Frage"," 🤓")}`);
      
    }else if(weiter === "n"){
      
      console.log(`${chalk.red("GAME",    " 😟",      "OVER!")}`);
      
    }
    
  
    
    const answer2 = await prompt2.run()
 
  console.log(answer2)
  if(answer2 !== prompt2.rightAnswer){
    console.log(`Tut mir leid,${chalk.red("Falsch")}, Du verlierst einen Versuch!`); 
  }
  else if(answer2 === prompt2.rightAnswer){
    console.log(chalk.green(`richtig`)); 
  }

  

  // const weiter = prompt(chalk.bgBlue("möschtest du weiter?y/n?"));
  console.log(weiter);

  if(weiter === "y"){
    console.log(`${chalk.green("Die nächste Frage"," 🤓")}`);
  }else if(weiter === "n"){
    console.log(`${chalk.red("GAME",    " 😟",      "OVER!")}`);
  }
console.log("+".repeat(50));
  

  const answer3 = await prompt3.run()
  console.log(answer3);
  if(answer3 !== prompt3.rightAnswer){
    console.log(`Tut mir leid,${chalk.red("Falsch")}, Du verlierst einen Versuch!`); 
  }
  else{
    console.log(chalk.green(`richtig`)); 
  }
  console.log(weiter);

  if(weiter === "y"){
    console.log(`${chalk.green("Die nächste Frage"," 🤓")}`);
  }else if(weiter === "n"){
    console.log(`${chalk.red("GAME",    " 😟",      "OVER!")}`);
  }


// const trivialFragen = [
//   {
//     massage:
//       "In what year did the Titanic sink in the Atlantic on her maiden voyage?",
//     choices: {
//       a: 1912,
//       b: 1921,
//       c: 1914,
//       d: 1916,
//     },
//     rightAnswer: "1912",
//   },
//   {
//     massage: `What is the smallest bird in the world? `,
//     choices: {
//       a: "owl",
//       b: "swallow",
//       c: "pigeon",
//       d: "Bee Hummingbird",
//     },
//     rightAnswer: "d",
//   },
//   {
//     massage: `In which movie did Hugh Jackman play the rival magician of the character played by Christian Bale?`,
//     choices: {
//       a: "The prestige",
//       b: "Lord of the Rings",
//       C: "Assassins",
//       d: "Dream",
//     },
//     rightAnswer: "a",
//   },
//   {
//     massage: "What year was The Godfather first published?",
//     choices: {
//       a: 1917,
//       b: 1972,
//       c: 1982,
//       d: 1983,
//     },
//     rightAnswer: "b",
//   },
//   {
//     massage: "How many players are there on a water polo team?",
//     choices: {
//       a: "nine",
//       b: "ten",
//       c: "seven",
//       d: "eight",
//     },
//     rightAnswer: "c",
//   },
//   {
//     massage: "How many hearts does an octopus have?",
//     choices: {
//       a: "five",
//       b: "Three",
//       c: "four",
//       d: "seven",
//     },
//     rightAnswer: "b",
//   },
//   {
//     massage: `Which singer was known as "The King of Pop" and "The Gloved One" among others?`,
//     choices: {
//       a: "Michael Jackson",
//       b: "Elton John",
//       c: "Udo Jürgens",
//       d: "John Lennon",
//     },
//     rightAnswer: "Michael Jackson",
//   },
//   {
//     massage: "What nationality was the artist Henri Matisse?",
//     choices: {
//       a: "German",
//       b: "Russian",
//       c: "Arabian",
//       d: "French",
//     },
//     rightAnswer: "d",
//   },
//   {
//     massage: "Name the land.Giza Pyramid and the Great Sphinx?",
//     choices: {
//       a: "Syria",
//       b: "Egypt",
//       c: "Italy",
//       b: "Greece",
//     },
//     rightAnswer: "b",
//   },
//   {
//     massage: "What year is modern paper first used?",
//     choices: {
//       a: 105,
//       b: 109,
//       c: 125,
//       d: 912,
//     },
//     rightAnswer: "a",
//   },
// ];
// console.log(trivialFragen);

async function trivial1() {
  let item ;
  const answers = await inquirer.prompt({
    name: `trivialFragen`,
    type: `list`,
    message:"In what year did the Titanic sink in the Atlantic on her maiden voyage?",
    choices:[ 
     "1912",
     "1921",
     "1914",
     "1916",
     ],
  });
  if (answers.trivialFragen === "1912" ) {
    item = answers.trivialFragen;
  }
  return handleAnswer(answers.trivialFragen === "1912");
}

async function trivial2() {
  let item;
  const answers = await inquirer.prompt({
    name: `trivialFragen`,
    type: `list`,
    message:"What is the smallest bird in the world?",
    choices:[ 
      "owl",
      "swallow",
      "pigeon",
      "Bee Hummingbird",
     ],

  });
  if (answers.trivialFragen === "Bee Hummingbird") {
    item = answers.trivialFragen;
  }
  return handleAnswer(answers.trivialFragen === "Bee Hummingbird",);
}

async function trivial3() {
  let item;
  const answers = await inquirer.prompt({
    name: `trivialFragen`,
    type: `list`,
    message:"In which movie did Hugh Jackman play the rival magician of the character played by Christian Bale?",
    choices:[ 
      "The prestige",
      "Lord of the Rings",
      "Assassins",
      "Dream",
     ],

  });
  if (answers.trivialFragen ==="The prestige" ) {
    item = answers.trivialFragen;
  }
  return handleAnswer(answers.trivialFragen === "The prestige");
}

async function trivial4() {
  let item;
  const answers = await inquirer.prompt({
    name: `trivialFragen`,
    type: `list`,
    message:"What year was The Godfather first published?",
    choices:[ 
      1917,
      1972,
      1982,
      1983,
     ],

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
    message:"How many players are there on a water polo team?",
    choices:[ 
      9,
      10,
      7,
      8,
     ],

  });
  if (answers.trivialFragen === 8 ) {
    item = answers.trivialFragen;
  }
  return handleAnswer(answers.trivialFragen === 8);
}

async function trivial6() {
  let item;
  const answers = await inquirer.prompt({
    name: `trivialFragen`,
    type: `list`,
    message:"How many hearts does an octopus have?" ,
    choices:[ 
      5,
      3,
      4,
      7,
     ],

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
    message:"Which singer was known as The King of Pop and The Gloved One among others?" ,
  choices: [
    "Michael Jackson",
    "Elton John",
    "Ubo Jürgens",
    "John Lennon",
   ],

  });
  if (answers.trivialFragen === "Michael Jackson") {
    item = answers.trivialFragen;
  }
  return handleAnswer(answers.trivialFragen ==="Michael Jackson" );
}

async function trivial8() {
  let item;
  const answers = await inquirer.prompt({
    name: `trivialFragen`,
    type: `list`,
    message:"What nationality was the artist Henri Matisse?",
    choices:[ 
      "German",
      "Russian",
      "Arabian",
      "French",
     ],
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
    message:"Name the land.Giza Pyramid and the Great Sphinx?",
    choices:[ 
      "Syria",
      "Egypt",
      "Italy",
      "Greece",
     ],

  });
  if (answers.trivialFragen === "Egypt") {
    item = answers.trivialFragen;
  }
  return handleAnswer(answers.trivialFragen ==="Egypt" );
}
async function trivial10() {
  let item;
  const answers = await inquirer.prompt({
    name: `trivialFragen`,
    type: `list`,
    message:"What year is modern paper first used?",
    choices:[ 
      105,
      109,
      125,
      912,
     ], 

  });
  if (answers.trivialFragen === 105) {
    item = answers.trivialFragen;
  }
  return handleAnswer(answers.trivialFragen === 105);
}