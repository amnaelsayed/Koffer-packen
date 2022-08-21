
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
 setTimeout(()=>{
  // console.log(answer2);
  if(answer2 !== prompt2.rightAnswer){
    console.log(`Tut mir leid,${chalk.red("Falsch")}, Du verlierst einen Versuch!`); 
  }
  else if(answer2 === prompt2.rightAnswer){
    console.log(chalk.green(`richtig`)); 
  }else{
    console.log("hallo");
  }

 },5000);

  

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

