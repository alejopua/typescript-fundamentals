type Sizes = 'S' | 'M' | 'L' | 'XL';
export type Products = {
    name: string,
    price: number,
    stock: number,
    sizes?: Sizes
};

