import promptSync from "prompt-sync";
import chalk from "chalk";
import figlet from "figlet";
import enquirer from "enquirer";
const prompt = promptSync();


const { Select } = enquirer;

// setTimeout(()=>{

import inquirer from "inquirer";

  
//     console.log("hallo");
  

//  },1000);
// let count = 0;
//  const interval = setInterval(()=>{
  
//   count +=1;
// console.log(count);
// if(count ===10){
//   clearInterval(interval)
// }

// },1000);

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

async function questions(){
  const answers = await inquirer.prompt({
    name : "q1",
    type:"list",
    message :"In what year did the Titanic sink in the Atlantic on her maiden voyage?",
    choices: [9, 10, 7, 8],
  });
  if(answers.q1 === 7){
     prompt1 = answers.q1;
  }
  return handelAnswer(answers.q1 === 7)
}

// await question2();
console.log(questions(prompt1));