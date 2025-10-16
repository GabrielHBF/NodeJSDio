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
    //se o produto existir no carrinho, remova-o
    //se não, não faça nada
    //retorne o carrinho atualizado
    const index = userCart.indexOf(productId);
    if (index > -1) {
        userCart.splice(index, 1);
    }
    return userCart;
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