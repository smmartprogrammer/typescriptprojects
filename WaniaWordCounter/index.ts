#!usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const sleep = () => {
  return new Promise((res, rej) => {
    setTimeout(res, 1000);
  });
};

async function welcome() {
  const rainbowTitle = chalkAnimation.rainbow(
    `----------lets started------------`
  );
  await sleep();
  rainbowTitle.stop();
}

async function askQuestion() {
  let que = await inquirer.prompt([
    {
      type: "input",
      name: "str",
      message: chalk.rgb(
        187,
        143,
        206
      )(`Please enter the paragraph you want to convert:`),
    },
  ]);
  //   word
  // convert a string into  an array

  const word_arr = que.str.split(" ");
  console.log(word_arr);
  console.log(`words in paragraph: ${word_arr.length}`);

  // characters
  const chr_withoutspaces = que.str.replace(/ /g, "");
  console.log(chr_withoutspaces);
  console.log(`Characters in paragraph: ${chr_withoutspaces.length}`);
}
welcome();

// askQuestion();

async function startAgain() {
    do {
        await askQuestion()
        var playAgain = await inquirer.prompt([{
            type:"input",
            name:"restart",
            message:chalk.rgb(
                187,
                143,
                206
              )(`do you want to restart the program press y,Yes, Y `),
         
        }])
    } while (playAgain.restart === 'y' || playAgain.restart === "Y"|| playAgain.restart === "YES"|| playAgain.restart === "yes");
}

startAgain()