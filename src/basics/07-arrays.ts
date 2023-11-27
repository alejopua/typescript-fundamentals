(() => {
    let objectsOne = [1,2,3];
    objectsOne.push('hi');
    console.log('objectsOne: ', objectsOne);

    let objectsTwo = [1,2,3,'hi',true];
    objectsTwo.push('hello');
    console.log('objectsTwo: ', objectsTwo);

    let objectThree: number[] = [1,2,3];
    objectThree.push('hi');
    console.log('objectThree: ', objectThree);

    let objectFour: (number | string)[] = [1,2,3,'hi'];
    objectFour.push('hello');
    objectFour.push(true);
    console.log('objectFour: ', objectFour);

    let objectFive: number[] = [1,2,3];
    let res = objectFive.map( (item) => item.toFixed(2))
    console.log('objectFive: ', res);

})();