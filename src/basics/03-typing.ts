(() => {
    let myProductName = 'Laptop';
    let myProductPrice = 1299.99;
    
    myProductName.toLowerCase(); // Error: Property 'toLowerCase' does not exist on type 'number'.
    myProductName = 42; // Error: Type '42' is not assignable to type 'string'.
    myProductPrice = 100;
    myProductPrice.toFixed(); // Error: Expected 0 arguments, but got 1.
    
    const myProductStock = 10;
    const myProductName2 = 'Root';
    console.log(myProductStock);
    console.log(myProductName2);
    console.log(myProductName)
})();
