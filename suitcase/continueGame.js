import {
  sleepExtraLong,
  sleepLong,
  sleepMedium,
  sleepShort,
} from "./timings.js";
import { wantToContinue, player } from "./player.js";
import inquirer from "inquirer";
import game from "./game.js";
async function continueGame() {
  console.clear();
  await sleepMedium();

  const answers = await inquirer.prompt({
    name: `spielen`,
    type: `list`,
    message: `\n\n\n\n\n\n\n\n\n\n\n
                                                  Do you want to play again?\n\n\n`,

    choices: [`yes`, `no`],
  });
  if (answers.spielen === `yes`) {
    player.currentBalance = 0;
    player.kofferArray = [];
    player.level = 0;
    player.lives = ["💛", "💛", "💛"];
    return game();
  } else {
    process.exit(1);
  }
}
export default continueGame;
