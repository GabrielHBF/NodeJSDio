//adicionar produtos ao carrinho
//deletar produtos do carrinho
//remover todos os produtos do carrinho
//listar todos os produtos do carrinho
//calcular o valor total do carrinho


async function addToCart(userCart, productId) {
    //adicionar o produto ao carrinho
    //retorne o carrinho atualizado
    userCart.push(productId);
};

async function removeFromCart(userCart, productId) {
   //remover um produto do carrinho pelo id
   const index = userCart.findIndex(item => item.id === productId.id);  
    if(index == -1) {
        console.log('Produto não encontrado no carrinho');
        return userCart;
    };

    if(userCart[index].quantidade > 1) {
        userCart[index].quantidade -= 1;
        return userCart;
    };
    
    if(userCart[index].quantidade === 1) {
        usercart[index].quantidade -= 1;
        return userCart;
    }
};

async function clearCart(userCart) {
    //simplesmente esvazie o array
    userCart.length = 0;
    return userCart;
};

async function calcularValorTotal(userCart) {
    //função para calcular o valor total do carrinho
    let total = 0;
    userCart.forEach(item => {
        total += item.subtotal();
    });
    return total;
};

async function listCartItems(userCart) {
    //função para listar todos os produtos do carrinho
    console.log('Itens no carrinho:');
    userCart.forEach(item => {
        console.log(`- ${item.nome}: R$${item.preco} x ${item.quantidade} = R$${item.subtotal()}`);
    });
    return userCart;
};
export { addToCart, removeFromCart, clearCart, calcularValorTotal, listCartItems };