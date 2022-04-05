const chalk = require('chalk');
const validator = require('validator');

const res = validator.isEmail("shishimaru@love.com")
console.log(chalk.yellow("fuck u"));
console.log(res ? chalk.green("True"): chalk.red("False"));