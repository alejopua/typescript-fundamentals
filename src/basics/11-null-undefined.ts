(()=>{
    let myNumber: number | null = 10;
    let myName: string | undefined = undefined;
    console.log(myNumber, myName);

    function name(insertName: string | null) {
        let hello: string = 'Hello ';
        if (insertName) {
            hello += insertName;
        } else {
            hello += 'nobody';
        }
        console.log(hello);
    }

    name('John');
    name(null);

    function name2(insertName: string | null) {
        let hello: string = 'Hi ';
        hello += insertName?.toUpperCase() || 'nobody'; // Optional chaining (?.)
        
        let otherOption: string = 'Ciao ';
        otherOption += insertName?? 'nobody'; // nullish coalescing (??)
        console.log(hello);
        console.log(otherOption);
    }

    name2('Peter');
    name2(null);
})();