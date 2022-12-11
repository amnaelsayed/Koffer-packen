import promptSync from "prompt-sync";
import chalk from "chalk";
import gradient from "gradient-string";
import figlet from "figlet";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import { createSpinner } from "nanospinner";
const prompt = promptSync();

const sleepMedium = (ms = 10000) => new Promise((r) => setTimeout(r, ms));
// Change the ms to 4000 or 5000

const wim1 = ["🧩", "🎮", "🪗", "🪘", "🎷", "🚴‍♂️"];
const wim11 = ["🛼", "🪀", "🥊", "🎺", "🚲"];

const wim22 = ["🧘‍♂️", "🎯", "🎪", "🏂", "🎠"];
const wim2 = [`💣`, `🪞`, `📸`, `🎈`, `📬`, `🧽`];

const wim3 = ["😂", "😜", "🥰", "🤓", "😚", "😠"];
const wim33 = ["🤣", "🤪", "😍", "😗", "😣"];

const wim4 = ["😸", "🐥", "🦄", "🐒", "🐯", "🐷"];
const wim44 = ["😹", "🦊", "🙉", "🐴", "🐣"];

const wim5 = ["🧆", "🥩", "🥐", "🍕", "🍰", "🍨"];
const wim55 = ["🌮", "🥓", "🥖", "🥧", "🍧"];

const wim6 = ["🍸", "🍴", "🍢", "🍲", "🍩", "🍮"];
const wim66 = ["🍹", "🍽", "🍡", "🍜", "🧁"];

const wim7 = ["🥎", "🏐", "🏀", "🏸", "⛸", "🏑"];
const wim77 = ["⚾️", "⚽️", "🏓", "🛼", "🏒"];

const wim8 = ["🎟", "🏅", "🏖", "🤾‍♂️", "🤽", "🤼‍♀️"];
const wim88 = ["🎫", "🎖", "⛱", "🤾", , "🤼"];

const wim9 = ["🛠", "🪚", "💣", "🔬", "🛌", "🧽"];
const wim99 = ["🔨", "🪛", "🔫", "🔮", "🔭"];

const wim10 = ["📪", "🔐", "🔓", "📌", "🗂", "📉"];
const wim1010 = ["📬", "🔒", "📍", "📁", "📈"];

const wimAll = [
  [wim1, wim11],
  [wim2, wim22],

  [wim3, wim33],

  [wim4, wim44],

  [wim5, wim55],

  [wim6, wim66],

  [wim7, wim77],

  [wim8, wim88],

  [wim9, wim99],

  [wim10, wim1010],
];

function wimGame(arrayMain) {
  const intro = prompt(
    chalk.yellow(
      `
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⠀⠀⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠁⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠻⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⣿⣿⣿⡿⠛⠁⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⠟⠉⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⡄⠀⠉⠉⠉⠉⠛⠛⠛⠛⠛⠛⠃⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣀⣀⣀⣀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⠿⠿⠟⣻ But before we start with the main game
⣿⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠤⠒⠚⠉⠉⠉⠉⠉⠉⠉⠙⠒⠦⣀⠀⠀⠀⠀⠉⠉⠉⠀⠀⠀⠀⠀⣰⣿ let's have a little training to warm you up.
⣿⣿⣿⣿⣿⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠖⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠑⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿ You have 10 seconds to memorise the objects that  
⣿⣿⣿⣿⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀⠀⠀⢠⠞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠱⡀⠀⠀⠀⠀⠀⢀⣼⣿⣿⣿ will appear on the screen.
⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀⡰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠱⡀⠀⠀⠀⣠⣾⣿⣿⣿⣿ Then one of the objects will be blended with new
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⢰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢣⠀⠀⠰⣿⣿⣿⣿⣿⣿ items and you will be asked to find the one that  
⣿⣿⣿⣿⣿⣿⣿⠿⠛⠉⠁⠀⠀⠀⡎⠀⠀⠀⠀⠀⣀⠤⠖⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠊⠈⠉⠉⠐⠒⠒⠺⢦⠀⠀⠙⠿⣿⣿⣿⣿ you have seen before.
⣿⣿⣿⡿⠟⠋⠁⠀⠀⠀⠀⠀⠀⢠⠇⠀⠀⠀⠀⠘⠧⠦⠤⠤⠤⠒⠒⠒⠶⡔⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠲⣿⡀⠀⠀⠀⠈⠙⠻⢿
⡟⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⢰⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⡄⢠⠋⠀⠀⠀⠀⠀⠀⠀⠀⠈⢳⠀⠀⠀⠀⠀⢀⣴ Press Enter when you are ready!
⣿⣷⣦⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⣧⠤⠤⢤⣤⡤⠤⠤⠤⠤⠤⠤⣇⣾⠤⠤⠤⣤⡔⠒⠒⠒⠦⠤⢾⠀⠀⢀⣤⣾⣿⣿
⣿⣿⣿⣿⣿⣷⣦⣄⠀⠀⠀⠀⠀⢸⠀⠀⠀⠘⡇⠀⠀⠀⠟⠀⠀⠀⠀⠀⠀⠀⡞⢱⠀⠀⠀⠛⠃⠀⠀⠀⠀⠀⢸⠀⣰⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⠆⠀⠀⠀⢸⠀⠀⠀⠀⠸⣄⠀⠀⠀⠀⠀⠀⠀⠀⢀⡔⠁⠀⢣⡀⠀⠀⠀⠀⠀⠀⠀⣠⡇⠀⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⡿⠋⠁⠀⠀⠀⠀⢸⡀⠀⠀⠀⠀⠈⠑⠢⠤⠤⠤⠤⠤⠒⠉⠀⠀⠀⠀⣯⠓⠲⠤⠤⠔⠒⠉⣽⠁⠀⠈⠻⣿⣿⣿⣿
⣿⣿⣿⡿⠟⠋⠀⠀⠀⠀⠀⠀⠀⣸⣿⡄⠀⠀⠑⢄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣆⠀⠀⢹⡀⠠⣄⣀⣀⠤⠞⣻⣄⠀⠀⠀⠈⠻⣿⣿
⣿⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⢠⠞⠁⠀⠀⠀⠀⠀⠀⠈⠉⠉⠉⠉⠀⠀⠀⠀⠀⠸⡀⠀⠀⣇⠀⠀⠀⠀⠀⠀⣿⠈⢳⡀⣀⣠⣴⣾⣿
⣿⣿⣿⣷⣶⣤⣄⣀⠀⠀⠀⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠱⣄⡴⠃⠀⠀⠀⠀⠀⠀⡇⠀⢸⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⠀⠹⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣇⠤⣾⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⠟⠀⠀⠀⠈⠓⠶⡦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣀⣀⡀⠀⠀⠀⠀⠀⠀⢲⠁⠀⠈⢿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣏⣀⣀⣀⣀⣀⣀⡀⢣⠀⠀⠀⢠⠟⠀⠀⣀⡤⠔⠊⠉⠉⠉⢹⣿⣿⣿⣿⡟⠑⠒⠤⡄⠘⡄⣶⣶⣾⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠈⣧⠀⠀⠸⡄⠀⠊⠁⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⠿⠃⠀⠀⠀⠀⣸⠃⠹⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⠀⠈⣆⠀⠀⠈⠲⠶⠆⠀⠀⠀⠀⢀⡀⠘⣿⡟⢡⣤⠀⠀⠀⠒⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠿⠗⠀⠋⠀⠀⠀⠀⠀⢀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠶⢤⣀⣀⠀⠀⠀⢀⣀⣠⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠉⠉⠉⠉⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠛⠛⠋⠉⠉⠁⡄⠘⡷⢤⣀⣀⣀⣀⣠⠞⢻⠀⡀⠈⠉⠙⠛⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⡼⠁⠀⡇⠀⠀⠀⠀⠀⠀⠀⠘⡄⢳⡀⠀⠀⠀⠀⠀⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⡸⠁⠀⠀⢹⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⢳⡀⠀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿`
    )
  );
}
function chooseArray() {
  let i = Math.ceil(Math.random() * 9);
  const array1 = wimAll[i][0];
  const array2 = wimAll[i][1];
}
//=========================00
wimGame();
chooseArray();
//=========================00

function whatIsMissing(array1, array2) {
  console.clear();
  const i = Math.ceil(Math.random() * array1.length - 1);
  const array3 = [];
  console.log(`Memorise the objects :`);
  console.log(array1);

  // ================================
  async function controlAnswer(isCorrect) {
    const spinner = createSpinner("Checking answer...").start();
    await sleepMedium();
    if (isCorrect) {
      spinner.success({
        text: ` That was amazing!`,
      });
    } else{
      spinner.error({
        text: `Hmmm that wasn't the right answer! Let's try another one`,
      });
  }
}

// ==========================
setTimeout(function () {
  console.clear();
  array3.push(array2.shift());
  array3.push(array2.shift());
  array3.push(array2.pop());
  array3.push(array2.shift());
  array3.push(array2[0]);
  async function frage1(array3) {
    const answers = await inquirer.prompt({
      name: `objekt1`,
      type: `list`,
      message: `Which of these items is the one that you saw before?`,
      choices: array3,



  
