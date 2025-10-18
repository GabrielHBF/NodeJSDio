import chalk from "chalk";
import hundle from "./handle.js";

//main function to create password
async function createPassWord() {
    console.log(chalk.green("Creating password..."));
    await hundle();
}


export default createPassWord;