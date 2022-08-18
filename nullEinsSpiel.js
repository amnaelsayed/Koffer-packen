import promptSync from "prompt-sync";
import chalk from "chalk";
import gradient from "gradient-string";
import figlet from "figlet";
import enquirer from "enquirer";
import chalkAnimation from "chalk-animation";
const prompt = promptSync();
var kofferArray = [];
const arrO = [0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1];
const arrPQ = [
  "p",
  "p",
  "q",
  "p",
  "p",
  "p",
  "p",
  "p",
  "q",
  "p",
  "p",
  "p",
  "p",
  "q",
  "p",
];
const arrO0 = [
  0,
  "O",
  "O",
  "O",
  "O",
  0,
  "O",
  "O",
  0,
  0,
  "O",
  0,
  "O",
  "O",
  "O",
  0,
];
const arrIl = [
  "I",
  "l",
  "l",
  "l",
  "I",
  "l",
  "I",
  "I",
  "I",
  "I",
  "I",
  "l",
  "l",
  "l",
  "l",
  "l",
];
const arrbpq = [
  "b",
  "b",
  "p",
  "p",
  "q",
  "b",
  "b",
  "p",
  "q",
  "b",
  "q",
  "p",
  "b",
  "p",
  "p",
  "q",
  "b",
  "p",
  "p",
];

const arrBß = ["B", "ß", "ß", "ß", "B", "B", "B", "B", "ß", "ß"];
const arrSmile = [
  "😉",
  "😡",
  "😡",
  "😡",
  "😉",
  "😉",
  "😉",
  "😡",
  "😉",
  "😉",
  "😉",
  "😉",
  "😉",
  "😉",
  "😉",
  "😉",
  "😉",
  "😉",
];
const arrGhost = [
  "👻",
  "😱",
  "👻",
  "👻",
  "😱",
  "👻",
  "👻",
  "😱",
  "👻",
  "😱",
  "👻",
  "👻",
  "👻",
  "👻",
  "😱",
  "😱",
  "👻",
  "👻",
  "👻",
];
const arrMermaid = [
  "🧞‍♀️ ",
  "🧞‍♂️",
  "🧞‍♂️",
  "🧞‍♂️",
  "🧞‍♀️ ",
  "🧞‍♀️ ",
  "🧞‍♂️",
  "🧞‍♀️ ",
  "🧞‍♂️",
  "🧞‍♀️ ",
  "🧞‍♂️",
  "🧞‍♂️",
  "🧞‍♂️",
  "🧞‍♂️",
  "🧞‍♀️ ",
  "🧞‍♀️ ",
  "🧞‍♀️ ",
  "🧞‍♀️ ",
  "🧞‍♂️",
  "🧞‍♀️ ",
];
const arrAnimals = [
  "🦖",
  "🦖",
  "🦖",
  "🦖",
  "🦞",
  "🦖",
  "🦞",
  "🦖",
  "🦖",
  "🦞",
  "🦞",
  "🦖",
  "🦞",
  "🦖",
  "🦖",
  "🦞",
  "🦞",
  "🦞",
];
const arrCat = [
  "😽 ",
  "😼",
  "😻",
  "😽 ",
  "😻",
  "😽 ",
  "😽 ",
  "😻",
  "😼",
  "😽 ",
  "😽 ",
  "😽 ",
  "😼",
  "😻",
  "😽 ",
  "😻",
];
const arraySmileyColdHot = [
  "🥶",
  "🥵",
  "🤡",
  "🥶",
  "🥶",
  "🥵",
  "🥶",
  "🥶",
  "🥵",
  "🥶",
  "🥵",
  "🥵",
  "🤡",
  "🥶",
  "🤡",
  "🥶",
  "🥶",
  "🥵",
  "🤡",
  "🥶",
  "🥶",
  "🥵",
  "🥵",
  "🥵",
];

const search = (array, searchedItem) => {
  const filtered = array.filter((num) => num === searchedItem);
  return filtered.length;
};

const searchO = search(arrO, 0);
const searchOne = search(arrO, 1);
const searchQ = search(arrPQ, "q");
const searchP = search(arrPQ, "p");
const searchO0Null = search(arrO0, 0);
const searchO0dasO = search(arrO0, "O");
const searchIoflI = search(arrIl, "I");
const searchLoflI = search(arrIl, "l");
const searchbofbpq = search(arrbpq, "b");
const searchpofbpq = search(arrbpq, "p");
const searchqofbpq = search(arrbpq, "q");
const searchBofBß = search(arrBß, "B");
const searchßofBß = search(arrBß, "ß");
const searchNiceSmile = search(arrSmile, "😉");
const searchBadSmile = search(arrSmile, "😡");
const searchMonsterGhost = search(arrGhost, "👻");
const searchMonsterShocked = search(arrGhost, "😱");
const searchMermaid = search(arrMermaid, "🧞‍♀️ ");
const searchMermaidMan = search(arrMermaid, "🧞‍♂️");
const searchAnimalDino = search(arrAnimals, "🦖");
const searchAnimalScorpion = search(arrAnimals, "🦞");
const searchCatKiss = search(arrCat, "😽 ");
const searchCatAngry = search(arrCat, "😼");
const searchCatHeart = search(arrCat, "😻");
const searchClown = search(arraySmileyColdHot, "🤡");
const searchCold = search(arraySmileyColdHot, "🥶");
const searchHot = search(arraySmileyColdHot, "🥵");

const filterGame = (zeichen, array, funk) => {
  const { NumberPrompt } = enquirer;

  const prompt8 = new NumberPrompt({
    header: gradient.cristal(`Count the ${zeichen}!`),
    message: gradient.retro(`${array}`),
    footer: "************************",
  });

  prompt8
    .run()
    .then((answer) => {
      if (answer === funk) {
        kofferArray.push(answer);
        console.log(
          gradient.summer(`Super! You have packed a 👜${funk}👜 into your bag`)
        );

        console.log(kofferArray, "gepackt");
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
// const findO = filterGame(0, arrO, searchO);
// console.log(kofferArray, "läuft");

// const find1 = filterGame(1, arrO, searchOne);

// const findO0Null = filterGame(0, arrO0, searchO0Null);
// const findO0dasO=filterGame("O",arrO0,searchO0dasO)

// const findIoflI =filterGame("I",arrIl, searchIoflI)
// const findLoflI=filterGame("L",arrIl, searchLoflI)
// const findbofbpq = filterGame("b",arrbpq, searchbofbpq);
// const findpofbpq = filterGame("p",arrbpq, searchpofbpq);
// const findqofbpq = filterGame("q",arrbpq, searchqofbpq);
// const findBofBß = filterGame("B", arrBß, searchBofBß);
// const findßofBß = filterGame("ß", arrBß, searchßofBß);

// const findNiceSmile = filterGame("😉", arrSmile, searchNiceSmile);
// const findBadSmile=filterGame("😡", arrSmile, searchBadSmile)
// const findCatKiss = filterGame("😽 ", arrCat, searchCatKiss);
// const findCatAngry = filterGame("😼", arrCat, searchCatAngry);
// const findCatHeart = filterGame("😻", arrCat, searchCatHeart);
// const findClown = filterGame("🤡", arraySmileyColdHot, searchClown);
// const findCold = filterGame("🥶", arraySmileyColdHot, searchCold);
const findHot = filterGame("🥵", arraySmileyColdHot, searchHot);
