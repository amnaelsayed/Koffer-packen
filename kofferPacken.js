import promptSync from "prompt-sync";
import chalk from "chalk";
import gradient from "gradient-string";
import figlet from "figlet";
import enquirer from "enquirer";
import chalkAnimation from "chalk-animation";
const prompt = promptSync({ eot: true });
// import whatIsMissingg from "./whatIsMissingg.js";
import introGame from "./whatIsMissingg.js";
// import nullEinsSpiel from "./nullEinsSpiel.js";

var user = {
  kofferArray: [],
  userName: [],
  lifes: 3,
  money: { currentBalance: 0, flugzeug: [] },
};

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
        `   Try to concentrate and remember what you have packed into your Suitcase. It will bring you to the next level.\n\n
                                                   You have ${user.lifes} lifes.`
      )
    );
    console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
  }

  let timerID = setTimeout(myFunction, 8000);
};

const startGame = () => {
  greeting();
  infoUser();
  explainTheGame();
  introGame();
  // nullseinspiel 1* 2gepackt
  // mathespiel1*       2gepackt
  // missingSpiel1*      2gepackt
  // trivial1*              2gepackt
  // iq fragen1*               2gepackt
  // (geschichte)1*                2gepackt
  // (rückwärts)1*          2gepackt
  // bist du bereit ins nächste level zu reisen? arrayabfrage
  //

  // play;
  // nochEine;
};
// const nochEine = introGame();
startGame();

// import whatIsMissing from "./whatIsMissing.js";
