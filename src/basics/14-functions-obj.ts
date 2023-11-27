(()=>{
    type Sizes = 'S' | 'M' | 'L' | 'XL';
    const products: any[] = [];

    const addProduct = (data:{
        name: string,
        price: number,
        stock: number,
        sizes?: Sizes
    }) => {
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

    console.log(products);

    

})();