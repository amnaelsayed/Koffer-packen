import promptSync from "prompt-sync";
import chalk from "chalk";
import gradient from "gradient-string";
import figlet from "figlet";
import enquirer from "enquirer";
import chalkAnimation from "chalk-animation";
const prompt = promptSync();

const wim1 = [
  "🧩",
  "🎮",
  "🪗",
  "🎳",
  "🪘",
  "🎷",
  "🚴‍♂️",
  "🧘‍♂️",
  "🎻",
  "🎯",
  "🎪",
  "🏂",
  "🥎",
  "🛼",
  "🪀",
  "🥊",
  "🎺",
  "🚲",
  "🎠",
  "💵",
];

const wim2 = [
  `📰`,
  `💣`,
  `🪞`,
  `📸`,
  `🎈`,
  `📬`,
  `🧽`,
  `🩺`,
  `📚`,
  `📖`,
  `🔖`,
  `🧷`,
  `🪟`,
  `🎁`,
  `🩹`,
  `📐`,
  `📏`,
  `🧮`,
  `📌`,
  `🔭`,
];

const whatIsMissing = [wim1, wim2];
// console.log(whatIsMissing);
function missing(wim1) {
  const { NumberPrompt } = enquirer;

  const prompt1 = new NumberPrompt({
    header:
      "You have one minute to find which object is missing from the second line",
    message: wim1,
    footer: "************************",
  });

  prompt1
    .run()
    .then((answer) => console.log("String is:", answer))
    .catch(console.error);
}
console.log(missing(wim1));
