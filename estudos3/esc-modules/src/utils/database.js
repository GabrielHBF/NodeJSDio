const databases = {
    userTypes: ['admin', 'user', 'guest'],
    typedata: ['string', 'number', 'boolean']
};


async function connectToDataBase(dataName) {

    console.log(`Conectando ao banco de dados: ${dataName}`)
    
}


//exportando um único item como padrão
export default connectToDataBase;

//exportando múltiplos itens
export { connectToDataBase, databases };
