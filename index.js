import promptSync from "prompt-sync";
const prompt = promptSync();
import chalk from "chalk";
import enquirer from 'enquirer';
const { Select } = enquirer;

const prompt1 = new Select({
  name: 'color',
  message: 'Pick a flavor',
  choices: ['apple', 'grape', 'watermelon', 'cherry', 'orange']
  
});

const answer1 = await prompt1.run();
console.log(answer1);
const prompt2 = new Select({
  name: 'Frage 1',
  message: `${chalk.bgBlue("In what year did the Titanic sink in the Atlantic on her maiden voyage?")}`,
  choices: ["1912",
    "1921",
    "1914",
    "1916"],
});
const answer2 = await prompt2.run()
console.log(answer2);
if(answer2 !== "1912"){
  console.log(`Tut mir leid,${chalk.red("Falsch")}, Du verlierst ein Leben`); 
}
else{
  console.log(chalk.green("richtig")); 
}
const weiter = prompt(chalk.bgBlue("möschtest du weiter?y/n?"));
console.log(weiter);