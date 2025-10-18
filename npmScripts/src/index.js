import bd from '../dataBase/data.js';


async function main() {
  await bd.connectDataBase(process.env.USERDATABASE, process.env.PASSWORDDATABASE)
}

main();
    