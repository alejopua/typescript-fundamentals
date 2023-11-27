import { addProduct, products } from "./product-service";

addProduct({
    name: 'Shirt',
    price: 45000,
    stock: 100,
    sizes: 'S'
});

addProduct({
    name: 'Jean',
    price: 130000,
    stock: 1
});

console.log(products);