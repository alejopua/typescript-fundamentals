(()=>{
    type IdUSER = number | string;
    let idUser: IdUSER = 10;
    idUser = 'H10';
    console.log('idUser:', idUser);

    function other(item: IdUSER) {
        if (typeof item === 'string') {
            console.log(item.toUpperCase());
        } else {
            console.log(item.toFixed(2));
        }
    }

    other(10.123456789);
    other('H10');

    type Sizes = 'S' | 'M' | 'L';
    let sizes: Sizes;
    sizes = 'S';
    console.log('size:', sizes);

})();