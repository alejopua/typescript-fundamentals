import _ from 'lodash';

const members = [
    { name: 'John', age: 20, rol: 'admin' },
    { name: 'Peter', age: 30, rol: 'developer' },
    { name: 'Mary', age: 40, rol: 'designer' },
    { name: 'Jane', age: 50, rol: 'developer' },
    { name: 'Kate', age: 60, rol: 'admin' },
    { name: 'Alex', age: 70, rol: 'designer' },
    { name: 'Alice', age: 80, rol: 'developer' },
    { name: 'Bob', age: 90, rol: 'customer' },
]

const rta = _.groupBy(members, (member) => member.rol);
console.log(rta);