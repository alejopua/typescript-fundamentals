(()=>{
    let dynamicVar: any = 'Hello';
    dynamicVar = 1;
    dynamicVar = true;
    dynamicVar = 'World'
    console.log('dynamicVar: ', dynamicVar);

    let rta = (dynamicVar as string).toUpperCase(); // Cast
    console.log('rta: ', rta);

    let rta2 = (<string>dynamicVar).toLowerCase(); // Angle brackets
    console.log('rta2: ', rta2);

    let dynamicVar2: any = 1;
    dynamicVar2 = [1,2,3,4,5,6,7,8,9,10];
    console.log('dynamicVar2: ', dynamicVar2);

    let rta3 = (dynamicVar2 as number[]).push(11);
    let rta4 = (<number[]>dynamicVar2).push(12);
    console.log('rta3: ', rta3);
    console.log('rta4: ', rta4);
    console.log('dynamicVar2 with method push apply: ', dynamicVar2);

})();