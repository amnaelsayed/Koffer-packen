async function stories1() {
  let item;
  var answers = await inquirer.prompt({
    name: `stories_1`,
    type: `input`,
    message: ``,
    choices: [`envelope`, `e`, `eye`, `elite`],
    rightAnswer: `envelope`,
  });
  if (answers.iq_1 === `envelope`) {
    item = answers.iq_1;
  }
  return handleAnswer(answers.iq_1 === `envelope`, item, answers);
}
