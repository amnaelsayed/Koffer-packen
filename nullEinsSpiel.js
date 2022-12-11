import promptSync from "prompt-sync";
import chalk from "chalk";
import gradient from "gradient-string";
import figlet from "figlet";
import enquirer from "enquirer";
import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";

const prompt = promptSync();
var kofferArray = [];

const arrPQ = [
  "  p  ",
  "  p  ",
  "  q  ",
  "  p  ",
  "  p  ",
  "  p  ",
  "  p  ",
  "  p  ",
  "  q  ",
  "  p  ",
  "  p  ",
  "  p  ",
  "  p  ",
  "  q  ",
  "  p  ",
];
<<<<<<< HEAD
const arrO0 = [
  0,
=======
const arrOA = [
  "  A  ",
>>>>>>> 2f1691f8743854ad01a9462ceb33b21190f1036d
  "  O  ",
  "  O  ",
  "  O  ",
  "  O  ",
<<<<<<< HEAD
  0,
  "  O  ",
  "  O  ",
  0,
  0,
  "  O  ",
  0,
  "  O  ",
  "  O  ",
  "  O  ",
  0,
=======
  "  A  ",
  "  O  ",
  "  O  ",
  "  A  ",
  "  A  ",
  "  O  ",
  "  A  ",
  "  O  ",
  "  O  ",
  "  O  ",
  "  A  ",
>>>>>>> 2f1691f8743854ad01a9462ceb33b21190f1036d
];
const arrIl = [
  "  I  ",
  "  l  ",
  "  l  ",
  "  l  ",
  "  I  ",
  "  l  ",
  "  I  ",
  "  I  ",
  "  I  ",
  "  I  ",
  "  I  ",
  "  l  ",
  "  l  ",
  "  l  ",
  "  l  ",
  "  l  ",
];
const arrbpq = [
  "  b  ",
  "  b  ",
  "  p  ",
  "  p  ",
  "  q  ",
  "  b  ",
  "  b  ",
  "  p  ",
  "  q  ",
  "  b  ",
  "  q  ",
  "  p  ",
  "  b  ",
  "  p  ",
  "  p  ",
  "  q  ",
  "  b  ",
  "  p  ",
  "  p  ",
];

const arrBß = [
  "  B  ",
  "  ß  ",
  "  ß  ",
  "  ß  ",
  "  B  ",
  "  B  ",
  "  B  ",
  "  B  ",
  "  ß  ",
  "  ß  ",
];
const arrSmile = [
  "  😉  ",
  "  😡  ",
  "  😡  ",
  "  😡  ",
  "  😉  ",
  "  😉  ",
  "  😉  ",
  "  😡  ",
  "  😉  ",
  "  😉  ",
  "  😉  ",
  "  😉  ",
  "  😉  ",
  "  😉  ",
  "  😉  ",
];
const arrGhost = [
  "  👻  ",
  "  😱  ",
  "  👻  ",
  "  👻  ",
  "  😱  ",
  "  👻  ",
  "  👻  ",
  "  😱  ",
  "  👻  ",
  "  😱  ",
  "  👻  ",
  "  👻  ",
  "  👻  ",
  "  👻  ",
  "  😱  ",
  "  😱  ",
];
const arrMermaid = [
  "  🧞‍♀️   ",
  "  🧞‍♂️  ",
  "  🧞‍♂️  ",
  "  🧞‍♂️  ",
  "  🧞‍♀️   ",
  "  🧞‍♀️   ",
  "  🧞‍♂️  ",
  "  🧞‍♀️   ",
  "  🧞‍♂️  ",
  "  🧞‍♀️   ",
  "  🧞‍♂️  ",
  "  🧞‍♂️  ",
  "  🧞‍♂️  ",
  "  🧞‍♂️  ",
];
const arrAnimals = [
  "  🦖  ",
  "  🦖  ",
  "  🦖  ",
  "  🦖  ",
  "  🦞  ",
  "  🦖  ",
  "  🦞  ",
  "  🦖  ",
  "  🦖  ",
  "  🦞  ",
  "  🦞  ",
  "  🦖  ",
  "  🦞  ",
  "  🦖  ",
  "  🦖  ",
];
const arrCat = [
  "  😽   ",
  "  😼  ",
  "  😻  ",
  "  😽   ",
  "  😻  ",
  "  😽   ",
  "  😽   ",
  "  😻  ",
  "  😼  ",
  "  😽   ",
  "  😽   ",
  "  😽   ",
<<<<<<< HEAD

  ,
=======
>>>>>>> 2f1691f8743854ad01a9462ceb33b21190f1036d
];
const arraySmileyColdHot = [
  "  🥶  ",
  "  🥵  ",
  "  🤡  ",
  "  🥶  ",
  "  🥶  ",
  "  🥵  ",
  "  🥶  ",
  "  🥶  ",
  "  🥵  ",
  "  🥶  ",
  "  🥵  ",
  "  🥵  ",
  "  🤡  ",
];
var kofferArray = [];
// const filterGame = (array, zeichen) => {
//   // let randomArray = array[Math.floor(Math.random)];
//   const filtered = array.filter((num) => num === zeichen);

//   console.log("\n\n");
//   console.log(array.join());
//   console.log(``);
//   const wievielSiehstDu = prompt(
//     `\n\n\n\n\n\n                          How many ${zeichen} do you see?     `
//   );

<<<<<<< HEAD
const searchO = search(arrO, 0);
const searchOne = search(arrO, 1);
const searchQ = search(arrPQ, "  q  ");
const searchP = search(arrPQ, "  p  ");
const searchO0Null = search(arrO0, 0);
const searchO0dasO = search(arrO0, "  O  ");
const searchIoflI = search(arrIl, "  I  ");
const searchLoflI = search(arrIl, "  l  ");
const searchbofbpq = search(arrbpq, "  b  ");
const searchpofbpq = search(arrbpq, "  p  ");
const searchqofbpq = search(arrbpq, "  q  ");
const searchBofBß = search(arrBß, "  B  ");
const searchßofBß = search(arrBß, "  ß  ");
const searchNiceSmile = search(arrSmile, "  😉  ");
const searchBadSmile = search(arrSmile, "  😡  ");
const searchMonsterGhost = search(arrGhost, "  👻   ");
const searchMonsterShocked = search(arrGhost, "  😱  ");
const searchMermaid = search(arrMermaid, "  🧞‍♀️  ");
const searchMermaidMan = search(arrMermaid, "  🧞‍♂️  ");
const searchAnimalDino = search(arrAnimals, "  🦖  ");
const searchAnimalScorpion = search(arrAnimals, "  🦞  ");
const searchCatKiss = search(arrCat, "  😽   ");
const searchCatAngry = search(arrCat, "  😼  ");
const searchCatHeart = search(arrCat, "  😻  ");
const searchClown = search(arraySmileyColdHot, "  🤡  ");
const searchCold = search(arraySmileyColdHot, "   🥶  ");
const searchHot = search(arraySmileyColdHot, "  🥵  ");

const filterGame= (zeichen,array, funk)=>{
  
}



=======
//   if (filtered.length === parseInt(wievielSiehstDu)) {
//     console.log(
//       gradient.summer(
//         `\n\n\n\n\n\n                  Great! You have packed a 👜${wievielSiehstDu}👜 into your bag\n\n\n\n\n`
//       )
//     );
//     kofferArray.push(wievielSiehstDu);
//     // console.log(kofferArray);
//     const abfrage = prompt("Hast du dir gemerkt was du gepackt hat");
//     if (abfrage == kofferArray) {
//       console.log("Super gemacht");
//     } else {
//       ("Du hast ein Leben verloren");
//     }
//   } else {
//     console.log(
//       gradient.teen(`
>>>>>>> 2f1691f8743854ad01a9462ceb33b21190f1036d

//                ______    ______   __       __  ________         ______   __     __  ________  _______
//                /      \  /      \ /  \     /  |/        |       /      \ /  |   /  |/        |/       \
//               /$$$$$$  |/$$$$$$  |$$  \   /$$ |$$$$$$$$/       /$$$$$$  |$$ |   $$ |$$$$$$$$/ $$$$$$$  |
//               $$ | _$$/ $$ |__$$ |$$$  \ /$$$ |$$ |__          $$ |  $$ |$$ |   $$ |$$ |__    $$ |__$$ |
//               $$ |/    |$$    $$ |$$$$  /$$$$ |$$    |         $$ |  $$ |$$  \ /$$/ $$    |   $$    $$<
//               $$ |$$$$ |$$$$$$$$ |$$ $$ $$/$$ |$$$$$/          $$ |  $$ | $$  /$$/  $$$$$/    $$$$$$$  |
//               $$ \__$$ |$$ |  $$ |$$ |$$$/ $$ |$$ |_____       $$ \__$$ |  $$ $$/   $$ |_____ $$ |  $$ |
//               $$    $$/ $$ |  $$ |$$ | $/  $$ |$$       |      $$    $$/    $$$/    $$       |$$ |  $$ |
//                $$$$$$/  $$/   $$/ $$/      $$/ $$$$$$$$/        $$$$$$/      $/     $$$$$$$$/ $$/   $$/

<<<<<<< HEAD
  const prompt8 = new NumberPrompt({
    header: gradient.cristal(
      `   \n\n\n\n\n\n\n\n\n\n\n\n\n\n\nCount the ${zeichen}!\n\n\n`
    ),
    message: gradient.retro(
      `\n\n\n\n\n\n\n\n\n${array}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`
    ),
    footer: "",
  });

  prompt8
    .run()
    .then((answer) => {
      if (answer === funk) {
        kofferArray.push(answer);
        console.log(
          gradient.summer(
            `Super! You have packed a 👜${funk}👜 into your bag\n\n\n\n\n`
          )
        );
      } else {
        console.log(
          gradient.teen(
            `  ______    ______   __       __  ________         ______   __     __  ________           
 /      \  /      \ /  \     /  |/        |       /      \ /  |   /  |/        |          
/$$$$$$  |/$$$$$$  |$$  \   /$$ |$$$$$$$$/       /$$$$$$  |$$ |   $$ |$$$$$$$$/   ______  
$$ | _$$/ $$ |__$$ |$$$  \ /$$$ |$$ |__          $$ |  $$ |$$ |   $$ |$$ |__     /      \ 
$$ |/    |$$    $$ |$$$$  /$$$$ |$$    |         $$ |  $$ |$$  \ /$$/ $$    |   /$$$$$$  |
$$ |$$$$ |$$$$$$$$ |$$ $$ $$/$$ |$$$$$/          $$ |  $$ | $$  /$$/  $$$$$/    $$ |  $$/ 
$$ \__$$ |$$ |  $$ |$$ |$$$/ $$ |$$ |_____       $$ \__$$ |  $$ $$/   $$ |_____ $$ |      
$$    $$/ $$ |  $$ |$$ | $/  $$ |$$       |      $$    $$/    $$$/    $$       |$$ |      
 $$$$$$/  $$/   $$/ $$/      $$/ $$$$$$$$/        $$$$$$/      $/     $$$$$$$$/ $$/       
                                                                                          
                                                                                          
                                                                                          
`
          )
        );
      }
    })

    .catch(console.error);
};
const findO = filterGame(0, arrO, searchO);
const find1 = filterGame(1, arrO, searchOne);
const findO0Null = filterGame(0, arrO0, searchO0Null);
const findO0dasO = filterGame("  O  ", arrO0, searchO0dasO);
const findIoflI = filterGame("  I  ", arrIl, searchIoflI);
const findLoflI = filterGame("  L  ", arrIl, searchLoflI);
const findbofbpq = filterGame("  b  ", arrbpq, searchbofbpq);
const findpofbpq = filterGame("  p  ", arrbpq, searchpofbpq);
const findqofbpq = filterGame("  q  ", arrbpq, searchqofbpq);
const findBofBß = filterGame("  B  ", arrBß, searchBofBß);
const findßofBß = filterGame("  ß  ", arrBß, searchßofBß);
const findNiceSmile = filterGame("  😉  ", arrSmile, searchNiceSmile);
const findBadSmile = filterGame("  😡  ", arrSmile, searchBadSmile);
const findCatKiss = filterGame("  😽  ", arrCat, searchCatKiss);
const findCatAngry = filterGame("  😼  ", arrCat, searchCatAngry);
const findCatHeart = filterGame("  😻  ", arrCat, searchCatHeart);
const findClown = filterGame("  🤡  ", arraySmileyColdHot, searchClown);
const findCold = filterGame("  🥶  ", arraySmileyColdHot, searchCold);
const findHot = filterGame("  🥵  ", arraySmileyColdHot, searchHot);
const findMonsterGhost = filterGame("  👻  ", arrGhost, searchMonsterGhost);
const findMonsterShocked = filterGame("  😱  ", arrGhost, searchMonsterShocked);
const findMermaid = filterGame("  🧞‍♀️  ", arrMermaid, searchMermaid);
const findMermaidMan = filterGame("  🧞‍♂️  ", arrMermaid, searchMermaidMan);
const findAnimalDino = filterGame("  🦖  ", arrAnimals, searchAnimalDino);
const findAnimalScorpion = filterGame(
  "  🦞  ",
  arrAnimals,
  searchAnimalScorpion
);

const countGame = [
  find1,
  findBadSmile,
  findCatAngry,
  findCatHeart,
  findCatKiss,
  findClown,
  findCold,
  findHot,
  findIoflI,
  findLoflI,
  findNiceSmile,
  findO,
  findO0Null,
  findO0dasO,
  findbofbpq,
  findBofBß,
  findßofBß,
  findqofbpq,
  findpofbpq,
  findMermaid,
  findMermaidMan,
  findMonsterGhost,
  findMonsterShocked,
  findAnimalDino,
  findAnimalScorpion,
];
=======
//     `)
//     );
//   }
// };

// const findClown = filterGame(arraySmileyColdHot, "  🤡  ");

// const searchQ = filterGame(arrPQ, "  q  ");
// const searchP = filterGame(arrPQ, "  p  ");
// const searchO0Null = filterGame(arrOA, "  A  ");
// const searchO0dasO = filterGame(arrOA, "  O  ");
// const searchIoflI = filterGame(arrIl, "  I  ");
// const searchLoflI = filterGame(arrIl, "  l  ");
// const searchbofbpq = filterGame(arrbpq, "  b  ");
// const searchpofbpq = filterGame(arrbpq, "  p  ");
// const searchqofbpq = filterGame(arrbpq, "  q  ");
// const searchBofBß = filterGame(arrBß, "  B  ");
// const searchßofBß = filterGame(arrBß, "  ß  ");
// const searchNiceSmile = filterGame(arrSmile, "  😉  ");
// const searchBadSmile = filterGame(arrSmile, "  😡  ");
// const searchMonsterGhost = filterGame(arrGhost, "  👻   ");
// const searchMonsterShocked = filterGame(arrGhost, "  😱  ");
// const searchMermaid = filterGame(arrMermaid, "  🧞‍♀️  ");
// const searchMermaidMan = filterGame(arrMermaid, "  🧞‍♂️  ");
// const searchAnimalDino = filterGame(arrAnimals, "  🦖  ");
// const searchAnimalScorpion = filterGame(arrAnimals, "  🦞  ");
// const searchCatKiss = filterGame(arrCat, "  😽   ");
// const searchCatAngry = filterGame(arrCat, "  😼  ");
// const searchCatHeart = filterGame(arrCat, "  😻  ");

// const filterGame = (array, zeichen) => {
//   const filtered = array.filter((num) => num === zeichen);
//   const { NumberPrompt } = enquirer;

//   const prompt8 = new NumberPrompt({
//     header: gradient.cristal(
//       `   \n\n\n\n\n\n\n\n\n\n\n\n\n\n\nCount the ${zeichen}!\n\n\n`
//     ),
//     message: gradient.retro(
//       `\n\n\n\n\n\n\n\n\n${array}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`
//     ),
//     footer: "",
//   });

//   prompt8
//     .run()
//     .then((answer) => {
//       if (answer === filtered) {
//         kofferArray.push(answer);
//         console.log(
//           gradient.summer(
//             `Super! You have packed a 👜${filtered}👜 into your bag\n\n\n\n\n`
//           )
//         );
//       } else {
//         console.log(
//           gradient.teen(
//             `  ______    ______   __       __  ________         ______   __     __  ________
//  /      \  /      \ /  \     /  |/        |       /      \ /  |   /  |/        |
// /$$$$$$  |/$$$$$$  |$$  \   /$$ |$$$$$$$$/       /$$$$$$  |$$ |   $$ |$$$$$$$$/   ______
// $$ | _$$/ $$ |__$$ |$$$  \ /$$$ |$$ |__          $$ |  $$ |$$ |   $$ |$$ |__     /      \
// $$ |/    |$$    $$ |$$$$  /$$$$ |$$    |         $$ |  $$ |$$  \ /$$/ $$    |   /$$$$$$  |
// $$ |$$$$ |$$$$$$$$ |$$ $$ $$/$$ |$$$$$/          $$ |  $$ | $$  /$$/  $$$$$/    $$ |  $$/
// $$ \__$$ |$$ |  $$ |$$ |$$$/ $$ |$$ |_____       $$ \__$$ |  $$ $$/   $$ |_____ $$ |
// $$    $$/ $$ |  $$ |$$ | $/  $$ |$$       |      $$    $$/    $$$/    $$       |$$ |
//  $$$$$$/  $$/   $$/ $$/      $$/ $$$$$$$$/        $$$$$$/      $/     $$$$$$$$/ $$/

// `
//           )
//         );
//       }
//     })

//     .catch(console.error);
// };
const sleepMedium = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
// Change the ms to 4000 or 5000

// const sleepShort = (ms = 1000) => new Promise((r) => setTimeout(r, ms));
// const sleepLong = (ms = 5000) => new Promise((r) => setTimeout(r, ms));
// async function filterGame(array, zeichen) {
//   console.clear();
//   const filtered = array.filter((num) => num === zeichen);
//   console.log(
//     `\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n
//                              Try to concentrate and be fast. You only have 5 sec for every task!`
//   );
//   await sleepLong();
//   console.clear();
//   console.log(
//     `\n\n\n\n\n\n\n\n\n\n\n\n
//                                                     Count the ${zeichen}!`
//   );
//   console.log(`\n\n\n\n\n
//     ${array}\n`);
//   await sleepLong();
//   console.clear();
//   const answers = await inquirer.prompt({
//     name: `anzahl`,
//     type: `input`,
//     message: `   \n\n\n\n\n\n\n\n\n\n\n\n\n\n
//                         Your time is up player.username! How many ${zeichen} have you counted?\n\n\n\n\n
//                                                         `,
//     default() {
//       return `anzahl`;
//     },
//   });
//   console.log(answers.anzahl);
//   console.log(filtered.length);
//   console.log(filtered);

//   if (answers.anzahl == filtered.length) {
//     // await spiele();
//     console.log("es laeuft");
//     await sleepMedium();
//   } else {
//     console.log("es laeuft nicht");
//     await sleepMedium();
//   }
//   // process.exit(0);
// }

// async function countElem() {
//   const searchNiceSmile = await filterGame(arrSmile, "  😉  ");
//   const searchBadSmile = await filterGame(arrSmile, "  😡  ");
//   const searchMonsterGhost = await filterGame(arrGhost, "  👻  ");
//   const searchClown = await filterGame(arraySmileyColdHot, "  🤡  ");
// }

// async function countElemClown(array, zeichen) {
//   console.log(
//     `\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n
//                              Try to concentrate and be fast. You only have 5 sec for every task!`
//   );
//   await sleepLong();
//   console.clear();
//   console.log(
//     `\n\n\n\n\n\n\n\n\n\n\n\n
//                                                     Count the ${zeichen}!`
//   );
//   console.log(`\n\n\n\n\n
//                                                         ${array}\n`);
//   await sleepLong();
//   console.clear();
//   let item;
//   const answers = await inquirer.prompt({
//     name: `ct_Clown`,
//     type: `input`,
//     message: `\n\n\n\n\n\n\n
//                                     Which number should come next in the pattern?\n\n\n\n
//                                                   -2 , 5, -4, 3, -6:\n\n\n\n`,
//     // choices: [`0`, `1`, `-3`, `-4`],
//   });
//   if (answers.ct_Clown === "2") {
//     item = answers.iq_7;
//   }
//   return handleAnswer(answers.ct_Clown === `2`, item);
// }
// const searchClown = await countElemClown(arraySmileyColdHot, "  🤡  ");

// await countElem();
export default arrSmile;
arrGhost;
arraySmileyColdHot;

// var inquirer = require("inquirer");

// const searchClown = filterGame(arraySmileyColdHot, "  🤡  ");
// const searchCold = filterGame(arraySmileyColdHot, "   🥶  ");
// const searchHot = filterGame(arraySmileyColdHot, "  🥵  ");

// const findO = filterGame(0, arrO, searchO);
// const find1 = filterGame(1, arrO, searchOne);
// const findO0Null = filterGame(0, arrO0, searchO0Null);
// const findO0dasO = filterGame("  O  ", arrO0, searchO0dasO);
// const findIoflI = filterGame("  I  ", arrIl, searchIoflI);
// const findLoflI = filterGame("  L  ", arrIl, searchLoflI);
// const findbofbpq = filterGame("  b  ", arrbpq, searchbofbpq);
// const findpofbpq = filterGame("  p  ", arrbpq, searchpofbpq);
// const findqofbpq = filterGame("  q  ", arrbpq, searchqofbpq);
// const findBofBß = filterGame("  B  ", arrBß, searchBofBß);
// const findßofBß = filterGame("  ß  ", arrBß, searchßofBß);
// const findNiceSmile = filterGame("  😉  ", arrSmile, searchNiceSmile);
// const findBadSmile = filterGame("  😡  ", arrSmile, searchBadSmile);
// const findCatKiss = filterGame("  😽  ", arrCat, searchCatKiss);
// const findCatAngry = filterGame("  😼  ", arrCat, searchCatAngry);
// const findCatHeart = filterGame("  😻  ", arrCat, searchCatHeart);
// const findClown = filterGame("  🤡  ", arraySmileyColdHot, searchClown);
// const findCold = filterGame("  🥶  ", arraySmileyColdHot, searchCold);
// const findHot = filterGame("  🥵  ", arraySmileyColdHot, searchHot);
// const findMonsterGhost = filterGame("  👻  ", arrGhost, searchMonsterGhost);
// const findMonsterShocked = filterGame("  😱  ", arrGhost, searchMonsterShocked);
// const findMermaid = filterGame("  🧞‍♀️  ", arrMermaid, searchMermaid);
// const findMermaidMan = filterGame("  🧞‍♂️  ", arrMermaid, searchMermaidMan);
// const findAnimalDino = filterGame("  🦖  ", arrAnimals, searchAnimalDino);
// const findAnimalScorpion = filterGame(
//   "  🦞  ",
//   arrAnimals,
//   searchAnimalScorpion
// );
// const { Confirm } = enquirer;

// const prompt1 = new Confirm({
//   name: "\n\n\n                                        question\n\n\n\n\n",
//   message:
//     "\n\n\n\n\n                                      Did you like enquirer?\n\n\n\n",
// });
// console.log("\n\n\n\n");
// prompt1.run().then((answer) => console.log("Answer:", answer));

// chalkAnimation.rainbow("Lorem ipsum dolor sit amet");
// const array = ["hallo", "hallo", 15, 15, 15];
// console.log(array.join(` `));

// const countGame = [
//   find1,
//   findBadSmile,
//   findCatAngry,
//   findCatHeart,
//   findCatKiss,
//   findClown,
//   findCold,
//   findHot,
//   findIoflI,
//   findLoflI,
//   findNiceSmile,
//   findO,
//   findO0Null,
//   findO0dasO,
//   findbofbpq,
//   findBofBß,
//   findßofBß,
//   findqofbpq,
//   findpofbpq,
//   findMermaid,
//   findMermaidMan,
//   findMonsterGhost,
//   findMonsterShocked,
//   findAnimalDino,
//   findAnimalScorpion,
// ];

// const countGame = [
//   find1,
//   findBadSmile,
//   findBofBß,
//   findCatAngry,
//   findCatHeart,
//   findCatKiss,
//   findClown,
//   findCold,
//   findHot,
//   findIoflI,
//   findLoflI,
//   findNiceSmile,
//   findO,
//   findO0Null,
//   findO0dasO,
//   findbofbpq,
//   findbofbpq,
// ];

// let wievielFragenVomNutzer = 5;
// for (let i = 0; i < wievielFragenVomNutzer; i++) {
//   let zufallFrage = Math.floor(Math.random(countGame.length * 10));
//   prompt(countGame[zufallFrage]);
// Nutzereingabe Checken
// Zwischenspeichern vom Ergebnis aus Nutzereingabe
// }
// export default nullEinsSpiel;
// const kofferAbfrage = () => {
//   inquirer
//     .prompt([
//       {
//         name: "faveReptile",
//         message: `Do you still remember what is inside your $uitca$e? \n answer correclty this question to travel to the next level 💫`,
//       },
//     ])
//     .then((answers) => {
//       console.info(
//         answers.faveReptile == player.kofferArray.join(`, `)
//           ? `👊🏼 Well done ${player.userName}. You just reached the next level.`
//           : gradient.teen(`

//               ______    ______   __       __  ________         ______   __     __  ________  _______
//              /      \  /      \ /  \     /  |/        |       /      \ /  |   /  |/        |/       \
//             /$$$$$$  |/$$$$$$  |$$  \   /$$ |$$$$$$$$/       /$$$$$$  |$$ |   $$ |$$$$$$$$/ $$$$$$$  |
//             $$ | _$$/ $$ |__$$ |$$$  \ /$$$ |$$ |__          $$ |  $$ |$$ |   $$ |$$ |__    $$ |__$$ |
//             $$ |/    |$$    $$ |$$$$  /$$$$ |$$    |         $$ |  $$ |$$  \ /$$/ $$    |   $$    $$<
//             $$ |$$$$ |$$$$$$$$ |$$ $$ $$/$$ |$$$$$/          $$ |  $$ | $$  /$$/  $$$$$/    $$$$$$$  |
//             $$ \__$$ |$$ |  $$ |$$ |$$$/ $$ |$$ |_____       $$ \__$$ |  $$ $$/   $$ |_____ $$ |  $$ |
//             $$    $$/ $$ |  $$ |$$ | $/  $$ |$$       |      $$    $$/    $$$/    $$       |$$ |  $$ |
//              $$$$$$/  $$/   $$/ $$/      $$/ $$$$$$$$/        $$$$$$/      $/     $$$$$$$$/ $$/   $$/

//   `)
//       );
//       player.alife = false;
//       console.log(player.alife);
//     });
// };
>>>>>>> 2f1691f8743854ad01a9462ceb33b21190f1036d
