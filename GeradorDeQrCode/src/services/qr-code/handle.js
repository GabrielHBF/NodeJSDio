import chalk from "chalk";
import qr from "qrcode-terminal";

//handler function to process QR code generation
async function handler(err, result) {

    if(err){
        console.error("Error during QR Code generation:", err);
        return;
    }
    
    const isSmall =  result.type == 2 ? true : false;
    qr.generate(result.link, {small: isSmall}, function (qrcode) {
        console.log(chalk.bgBlue.bold("Here is your QR Code:"));
        console.log(qrcode);
    });
}

export default handler;
