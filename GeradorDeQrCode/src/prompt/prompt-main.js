import chalk from "chalk";

//main prompt configuration
const mainPrompt = [
    {
        name: "select",
        description: chalk.bgGray.bold("Select option to generate || 1 - QR Code || 2- Password"),
        pattern : /^[1-2]+$/,
        message: chalk.red.bold("Please enter 1 or 2"),
        required: true
    }
]


export default mainPrompt;