(()=> {
    let productPrice = 100;
    productPrice = 12.05;
    console.log('productPrice:', productPrice);
    
    let customerAge: number = 19;
    // customerAge = customerAge + '1'; // Error: Type 'string' is not assignable to type 'number'.
    customerAge = customerAge + 1; // OK
    console.log('customerAge:', customerAge);

    let productStock: number;
    console.log('productStock:', productStock); // undefined
    if(productStock > 10) {
        console.log('Product available');
    }

    let discount = parseInt('100');
    console.log('discount:', discount);
    if(discount > 0) {
        console.log('Discount applied');
    } else {
        console.log('No discount applied');
    }

    let hex = 0xf00d;
    console.log('hex:', hex);
    let binary = 0b1010;
    console.log('binary:', binary);

    const numberTo: number = 10;
    console.log('numberTo:', numberTo);

})();