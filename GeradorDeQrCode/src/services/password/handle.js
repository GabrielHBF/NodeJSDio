import permittedCharacters from "./utils/permitedCharacters";

//main function to generate password
async function hadle() {
    let characters = await permittedCharacters();
    const passwordLength = process.env.PASSWORD_LENGTH;
    let password = '';

     for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    console.log(`Generated Password: ${password}`);
    
}


export default hadle;