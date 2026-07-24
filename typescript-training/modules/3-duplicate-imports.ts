import {PI, add } from './1-named-exports.ts';
import {PI as pi, add as sum, substract as sub} from './2-export-all.ts';

console.log("Value of PI from export-all:"+ pi);
console.log("Sum of Numbers 2,3 from export-all is "+ sum(2,3));
console.log("Difference of Numbers 5,2 from export-all is "+ sub(5,2));

console.log("Value of PI named-exports :"+ PI);
console.log("Sum of Numbers 2,3 named-exports is "+ add(2,3));