import promptSync from "prompt-sync";
import chalk from "chalk";
import gradient from "gradient-string";
import figlet from "figlet";
import enquirer from "enquirer";
const prompt = promptSync();

const prompt5 = enquirer.form({
  name: "user",
  message: "Please provide the following information:",
  choices: [
    { name: "firstname", message: "First Name", initial: "Jon" },
    { name: "lastname", message: "Last Name", initial: "Schlinkert" },
    { name: "username", message: "GitHub username", initial: "jonschlinkert" },
  ],
});
prompt5.then((answer) => console.log("Answer:", answer)).catch(console.error);
