import promptSync from "prompt-sync";
import chalk from "chalk";
import gradient from "gradient-string";
import figlet from "figlet";
import enquirer from "enquirer";
const prompt = promptSync();

const arrO = [0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1];
const search = (array, searchedItem) => {
  const filtered = array.filter((num) => num === searchedItem);
  return filtered.length;
};

const searchO = search(arrO, 0);
const searchOne = search(arrO, 1);

const filterGame = (zeichen) => {
  const frage = prompt(`Wieviele ${zeichen} siehst du?\n${arrO}\n`);
  console.log(parseInt(frage));
  if (parseInt(frage) === searchO) {
    return `Super! You have packed ${searchO} into your bag`;
  } else {
    return `Upps, try it one more time!`;
  }
};
console.log(filterGame(0));
