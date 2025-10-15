const product = require('./service/products');
const config = require('./service/config');


// desmenbrando funcoes de um modulo

const { getFullname } = require('./service/products');
//pega apenas a funcao getFullname do modulo products

//importando um modulo completo
const configFull = require('./service/config');
//pega o modulo completo config


async function main() {

    product.getFullname(1, 'Notebook');
    console.log(config.production);

    
}

main();