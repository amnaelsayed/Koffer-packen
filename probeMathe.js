import promptSync from "prompt-sync";
import chalk from "chalk";
import gradient from "gradient-string";
import figlet from "figlet";
import enquirer from "enquirer";
import chalkAnimation from "chalk-animation";
const prompt = promptSync();

const prompt1 = {
  name: "question1",
  message: "Find the sum of 111 + 222 + 333",
  choices: ["700", "666", "10", "100"],
  rightAnswer: "666",
};

const select = (obj) => {
  const prompt5 = enquirer.select({
    name: obj.name,
    message: obj.message,
    choices: obj.choices,
    rightAnswer: obj.rightAnswer,
  });

  prompt5
    .then(
      (answer) => {
        if (obj.rightAnswer === answer) {
          console.log("You are right");
        } else {
          console.log(`You lost one life`);
        }
      }
      //   console.log(
      //     prompt5.rightAnswer === answer ? "You are right" : `You lost one life`
      //   )
    )
    .catch(console.error);
};
const multipleChoice = select(prompt1);
console.log(multipleChoice);
