import prompt from "prompt";
import promptQrcode from "../../prompt/prompt-qrcode.js";
import handler from "./handle.js";
//main function to create QR code
async function createQRCode(dta) {
   
    prompt.get(promptQrcode, handler);
    prompt.start();
}


export default createQRCode;