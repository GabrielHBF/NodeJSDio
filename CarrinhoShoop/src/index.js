import createItem from './services/item.js';
import * as cartService from './services/cart.js';

const cart = [];
const products = [];

console.log('Bem vindo ao seu carrinho de compras!');


const newProduct = await createItem('Camisa', 1, 'Camisa de algodão', 50.00, 2);
const newProduct2 = await createItem('Calça', 2, 'Calça jeans', 120.00, 1);

cartService.addToCart(cart, newProduct);
cartService.addToCart(cart, newProduct2);
console.log(cart);
console.log(cartService.calcularValorTotal(cart));
cartService.removeFromCart(cart, newProduct);
console.log(cart);
cartService.listCartItems(cart);

console.log(newProduct.subtotal());

