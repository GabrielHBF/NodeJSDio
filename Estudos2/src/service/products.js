
//Funcao exportadas por default
exports.FuncaoExportada = async (parametro) => {
    return parametro;
};

 

async function getFullname(codeId, productsName) {
    return console.log(`${codeId} - ${productsName}`);
}


module.exports = { getFullname };