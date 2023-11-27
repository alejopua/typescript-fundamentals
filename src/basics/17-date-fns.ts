import {subDays, format} from 'date-fns';

const date = new Date(2023, 9, 1);

const rta = subDays(date, 10);
console.log(format(rta, 'yyyy/MMMM/dd, EEEE'));