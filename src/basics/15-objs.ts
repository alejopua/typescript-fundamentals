(()=>{
    type Sizes = 'S' | 'M' | 'L' | 'XL';
    type Products = {
        name: string,
        price: number,
        stock: number,
        sizes?: Sizes
    };

    const products: Products[] = [];

    const addProduct = (data: Products) => {
        products.push(data);
    }

    addProduct({
        name: 'Shirt',
        price: 45000,
        stock: 100,
        sizes: 'M'
    });

    addProduct({
        name: 'Jean',
        price: 130000,
        stock: 1
    });

    addProduct({
        name: 'Shoes',
        price: 50000,
        stock: 5
    });
    
    console.log(products);
})();