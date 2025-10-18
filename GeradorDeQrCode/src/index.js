import prompt from "prompt";
import mainPrompt from "./prompt/prompt-main.js";
import createQRCode from "./services/qr-code/create.js";
import createPassWord from "./services/password/createPassWord.js";

async function main() {
    prompt.start();

    prompt.get(mainPrompt, function (err, result) {

        prompt.start();
        if(result.select == 1){
            console.log("Generating QR Code...");
            createQRCode();
        }
        else if(result.select == 2){
            console.log("Generating Password...");
            createPassWord();

        };
    
    });
};
    
     

main();