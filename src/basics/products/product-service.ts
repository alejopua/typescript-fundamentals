import { Products } from './product-models';

export const products: Products[] = [];

export const addProduct = (data: Products) => {
    products.push(data);
}