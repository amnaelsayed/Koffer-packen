import promptSync from "prompt-sync";
import chalk from "chalk";
import gradient from "gradient-string";
import figlet from "figlet";
import enquirer from "enquirer";
import chalkAnimation from "chalk-animation";
const prompt = promptSync();

const kofferArray = [];

const greeting = () => {
  function myFunction(platform) {
    console.log("\n\n\n\n\n\n\n\n\n\n\n");
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
    console.log("\n\n\n\n\n\n\n\n\n\n\n");
  }

  let timerID = setTimeout(myFunction, 1000);
};

greeting();
