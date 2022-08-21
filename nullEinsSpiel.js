import promptSync from "prompt-sync";
import chalk from "chalk";
import gradient from "gradient-string";
import figlet from "figlet";
import enquirer from "enquirer";
import chalkAnimation from "chalk-animation";

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
const arrOA = [
  "  A  ",
  "  O  ",
  "  O  ",
  "  O  ",
  "  O  ",
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

  ,
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

//                ______    ______   __       __  ________         ______   __     __  ________  _______
//                /      \  /      \ /  \     /  |/        |       /      \ /  |   /  |/        |/       \
//               /$$$$$$  |/$$$$$$  |$$  \   /$$ |$$$$$$$$/       /$$$$$$  |$$ |   $$ |$$$$$$$$/ $$$$$$$  |
//               $$ | _$$/ $$ |__$$ |$$$  \ /$$$ |$$ |__          $$ |  $$ |$$ |   $$ |$$ |__    $$ |__$$ |
//               $$ |/    |$$    $$ |$$$$  /$$$$ |$$    |         $$ |  $$ |$$  \ /$$/ $$    |   $$    $$<
//               $$ |$$$$ |$$$$$$$$ |$$ $$ $$/$$ |$$$$$/          $$ |  $$ | $$  /$$/  $$$$$/    $$$$$$$  |
//               $$ \__$$ |$$ |  $$ |$$ |$$$/ $$ |$$ |_____       $$ \__$$ |  $$ $$/   $$ |_____ $$ |  $$ |
//               $$    $$/ $$ |  $$ |$$ | $/  $$ |$$       |      $$    $$/    $$$/    $$       |$$ |  $$ |
//                $$$$$$/  $$/   $$/ $$/      $$/ $$$$$$$$/        $$$$$$/      $/     $$$$$$$$/ $$/   $$/

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

const countElem = () => {
  const searchNiceSmile = filterGame(arrSmile, "  😉  ");
  const searchBadSmile = filterGame(arrSmile, "  😡  ");
  const searchMonsterGhost = filterGame(arrGhost, "  👻   ");
};

const filterGame = (array, zeichen) => {
  const filtered = array.filter((num) => num === zeichen);
  const { NumberPrompt } = enquirer;

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
      if (answer === filtered) {
        kofferArray.push(answer);
        console.log(
          gradient.summer(
            `Super! You have packed a 👜${filtered}👜 into your bag\n\n\n\n\n`
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
const { Confirm } = enquirer;

const prompt1 = new Confirm({
  name: "\n\n\n                                        question\n\n\n\n\n",
  message:
    "\n\n\n\n\n                                      Did you like enquirer?\n\n\n\n",
});
console.log("\n\n\n\n");
prompt1.run().then((answer) => console.log("Answer:", answer));

chalkAnimation.rainbow("Lorem ipsum dolor sit amet");
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
