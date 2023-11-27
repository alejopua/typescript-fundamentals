(()=>{
    type Sizes = 'S' | 'M' | 'L';

    const createProductJson = (
        name: string,
        createdAt: Date,
        stock: number,
        sizes?: Sizes
    ) => {
        return {
            name,
            createdAt,
            stock,
            sizes
        }
    }

    const product1 = createProductJson('Shirt', new Date(), 100, 'M');
    const product2 = createProductJson('Jean', new Date(), 2)

    console.log('product1: ', product1);
    console.log('product2: ', product2);
})();