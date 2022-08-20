import promptSync from "prompt-sync";
import chalk from "chalk";
import gradient from "gradient-string";
import figlet from "figlet";
import enquirer from "enquirer";
import chalkAnimation from "chalk-animation";
const prompt = promptSync();
var user = { kofferArray: [], userName: [], lifes: 3 };

const greeting = () => {
  function myFunction() {
    console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
    console.log(
      chalk.yellow(
        `
                              
                              
                                  ███████ ██    ██ ██ ████████  ██████  █████  ███████ ███████ 
                                  ██      ██    ██ ██    ██    ██      ██   ██ ██      ██      
                                  ███████ ██    ██ ██    ██    ██      ███████ ███████ █████   
                                       ██ ██    ██ ██    ██    ██      ██   ██      ██ ██      
                                  ███████  ██████  ██    ██     ██████ ██   ██ ███████ ███████ 
                                                                                               
                                                                                               
          
      `
      )
    );
    console.log("\n\n\n\n\n\n\n\n\n\n");
  }

  let timerID = setTimeout(myFunction, 1000);
};

const infoUser = () => {
  function myFunction() {
    console.clear();
    console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
    console.log(
      chalk.yellow(
        `                                           Before we start let us know more about you!`
      )
    );
    console.log("");
    console.log("");
    const name = prompt(
      chalk.yellow(
        `                                                  Please type in your name:   `
      )
    );
    console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
    user.userName.push(name);
  }

  let timerID = setTimeout(myFunction, 3000);
};

const explainTheGame = () => {
  function myFunction() {
    // console.clear();
    console.log("\n\n\n\n\n\n\n\n\n");
    console.log(
      chalk.yellow(
        `                                           Welcome ${user.userName} to "Pack the SuitCase"!`
      )
    );
    console.log("");
    console.log("");
    console.log(
      chalk.yellow(
        `   Try to concentrate and remember what you have packed into your Suitcase. It will bring you to the next level.`
      )
    );
    console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
  }

  let timerID = setTimeout(myFunction, 5000);
};

const startGame = () => {
  greeting();
  infoUser();
  explainTheGame();
};

startGame();
