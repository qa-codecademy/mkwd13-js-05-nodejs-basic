import chalk from "chalk";

// console.log(chalk.green("This text is green"));
// console.log(chalk.blue.underline("This text is underlined in blue"));

// Functions to be exported and used in index.js
export function printGreen(text) {
  console.log(chalk.green(text));
}

export function printYellow(text) {
  console.log(chalk.yellow(text));
}

export function printRed(text) {
  console.log(chalk.red(text));
}
