(()=>{
    let idUser: number | string = 10;
    idUser = 'H10';
    console.log('idUser:', idUser);

    function other(item: string | number) {
        if (typeof item === 'string') {
            console.log(item.toUpperCase());
        } else {
            console.log(item.toFixed(2));
        }
    }

    other('peter');
    other(10.1234);

})();