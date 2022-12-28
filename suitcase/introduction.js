import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import {
  sleepExtraLong,
  sleepLong,
  sleepMedium,
  sleepShort,
} from "./timings.js";
import { wantToContinue, player } from "./player.js";
// ----------------------------------------------------------------------------
// ------------------------------------------------------------------------------
const clear = () => {
  console.clear();
};

async function welcome() {
  const title = chalkAnimation.karaoke(
    `\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n
                           ███████ ██    ██ ██ ████████  ██████  █████  ███████ ███████ 
                           ██      ██    ██ ██    ██    ██      ██   ██ ██      ██      
                           ███████ ██    ██ ██    ██    ██      ███████ ███████ █████   
                                ██ ██    ██ ██    ██    ██      ██   ██      ██ ██      
                           ███████  ██████  ██    ██     ██████ ██   ██ ███████ ███████ `
  );
  await sleepLong();
  title.stop(clear());
  // will stop the animation, otherwise it runs forever

  const welcomeText = chalkAnimation.karaoke(`\n\n\n\n\n
                                        ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
                                        ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
                                        ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
                                        ⣿⣿⣿⣿⣿⣿⣉⣉⣉⣿⣿⣇⣰⣶⣶⣶⣶⣆⣸⣿⣿⣉⣉⣉⣿⣿⣿⣿⣿⣿
                                        ⣿⣿⣿⣿⠟⠉⠉⣿⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⣿⠉⠉⠻⣿⣿⣿⣿
                                        ⣿⣿⣿⣿⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀⠀⣿⣿⣿⣿
                                        ⣿⣿⣿⣿⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀⠀⣿⣿⣿⣿
                                        ⣿⣿⣿⣿⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀⠀⣿⣿⣿⣿
                                        ⣿⣿⣿⣿⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀⠀⣿⣿⣿⣿
                                        ⣿⣿⣿⣿⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀⠀⣿⣿⣿⣿
                                        ⣿⣿⣿⣿⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀⠀⣿⣿⣿⣿
                                        ⣿⣿⣿⣿⣦⣀⣀⣿⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣿⣀⣀⣴⣿⣿⣿⣿
                                        ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
                                        ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
                                        ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    
                                            Welcome to the Suitcase,\n\n\n
                              give the correct answer and fly to dreamy destinations!\n\n\n
                                           Are you readyyyyyyyyy?`);
  await sleepLong();
  welcomeText.stop(clear());
}

async function introTextAndName() {
  const getName = await inquirer.prompt({
    name: `userName`,
    type: `input`,
    message: `\n\n\n\n
                                           Before we start I would like to
                                            know a few things about you...
      \n\n\n
              What is your name?`,
    default() {
      return `Player`;
      // it will show (player) in the console
    },
  });
  player.userName = getName.userName;
}

// console.log(player);

async function getAge() {
  const age = await inquirer.prompt({
    name: `userAge`,
    type: `input`,
    message: `\n\n
              What is your age?`,

    default() {
      return `Age`;
    },
  });
  player.userAge = age.userAge;
}

async function getCity() {
  const city = await inquirer.prompt({
    name: `userCity`,
    type: `input`,
    message: `\n\n
              Where are you from?`,
    default() {
      return `City`;
    },
  });
  player.userCity = city.userCity;
  console.clear();
}

/* alle Infos gehen in das player Objet :)
  console.log(player);*/

async function gameRules() {
  const explanation = chalkAnimation.karaoke(`\n\n\n\n
                                    Great to have you here ${player.userName} from ${player.userCity} \n\n
                      Before you begin with the game, give me a second to explain the rules:\n\n
                              The $uitcase is fun & challenging (!only) memory game.\n\n
             Questions of different topics are combined with the classical "Packing the suitcase" game. \n\n\n\n
        You have to answer the questions correclty and remember all the items that you pack in your suitcase.\n\n 
            Every time that you give 5 right answers you will be asked to say what is inside your suitcase.\n\n
                           If your answer is right you will collect $money$ and level up. \n\n
                          If you complete all levels you win tickes to magic destinations.\n\n
                                     You have 3 lives to complete all the tasks!\n\n`);
  // max.Gewicht 25Kg und bei jeder level kriegt 5 plus
  //  auch in den handleAnswer()
  await sleepLong();

  explanation.stop(clear());
}
async function introduction() {
  console.clear();
  await welcome();
  await introTextAndName();
  await getAge();
  await getCity();
  await gameRules();
}

export { introduction, sleepExtraLong, sleepLong, sleepMedium, sleepShort };
