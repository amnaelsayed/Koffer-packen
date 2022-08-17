import promptSync from "prompt-sync";
import chalk from "chalk";
import gradient from "gradient-string";
import figlet from "figlet";
import enquirer from "enquirer";
import { log } from "console";
import chalkAnimation from "chalk-animation";
const prompt = promptSync();

const tomorrow = () => {
  const prompt5 = enquirer.select({
    name: "user",
    message:
      "The day before two days after the day before tomorrow is Saturday. What day is it today?",
    choices: ["Sunday", "Monday", "Tuesady", "Wednesday", "Friday", "Saturday"],
    rigthAnswer: "Friday",
  });
  // prompt5.then((answer) => console.log("Answer:", answer)).catch(console.error);
  prompt5
    .then((answer) =>
      console.log(
        prompt5.rightAnswer === answer ? "You are right" : `You lost one life`
      )
    )
    .catch(console.error);
};
const iqOne = tomorrow();
console.log(iqOne);

// chalk-animation
const rainbow = chalkAnimation.rainbow("Lorem ipsum"); // Animation starts

setTimeout(() => {
  rainbow.stop(); // Animation stops
}, 1000);

setTimeout(() => {
  rainbow.start(); // Animation resumes
}, 2000);
