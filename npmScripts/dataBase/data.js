async function connectDataBase(user, password) {
    if (user === process.env.USERDATABASE && password === process.env.PASSWORDDATABASE) {
        return console.log('Conexão bem sucedida!');
    } else {
        throw new Error('Usuário ou senha inválidos.');
    }
}

export default { connectDataBase };
