
async function createItem(nome, id, descricao, preco, quantidade) {
   
    return { 
        nome, 
        id, 
        descricao, 
        preco, 
        quantidade, 
        //aronfuncão para calcular o valor total do item com base na quantidade
        subtotal(){
            return this.preco * this.quantidade;
        }
    };
}

export default createItem;

//Função para calcular o valor total do item com base na quantidade
//async function calcularValorTotal(item,quantidade) {
    //return item.Preco * item.Quantidade;
//}