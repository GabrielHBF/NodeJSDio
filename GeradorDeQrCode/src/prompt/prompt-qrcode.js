import chalk from "chalk";

//QR Code prompt configuration
const promptQRCode = [
    {
        name: "link",  
        description: chalk.bgGray.bold("Enter the link or text to generate QR Code"),

    },
    {
        name: "type",
        description: chalk.bgGray.bold("Enter the type of QR Code || 1 - JPG || 2 - Terminal"),
        pattern : /^[1-2]+$/,
        message: chalk.red.bold("Please enter 1 or 2"),
        required: true
    }
    ];


export default promptQRCode;