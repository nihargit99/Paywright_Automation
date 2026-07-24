
//Loop Statements : Loop the statements Or Execute the same statement multiple times until the condition is satisfied. 

let name: string = "Nihar";

//Before Loops
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);


//Loop statements are mainly divided into two different categories. 
//1. for loop => When we know the total number of iterations to be executed 
//2. while loop => When we do not know the total number of iterations to be executed before itself

//1. for loop 
//Syntax : 

// for(condition-to-start; condition-to-end; increment/decrement) {
//     statements to be executed
// }

// e.g.:
console.log("=======FOR=======")
for (let i: number = 1; i <= 10; i++) {
    console.log(`${i} time print ${name} `);
}

/*
2. while loop 
syntax:
    while(condition-to-begin){
         //statements to be executed
    if(condition-to-end) {
        break;
    }
    }

*/
console.log("=======WHILE=======")
let j: number = 1;
let isPageLoaded: boolean = false;

while (j > 0) {

    if (isPageLoaded || j > 10) {
        break;
    }
    console.log("Refresh the Page");
    j++;
}


//Special cases of loops. 
//1. for...in loop => used to iterate over the properties of an object.
//2. for...of loop => used to iterate over the values of an iterable object like array, string, etc.
//3. do...while loop => used to execute the block of code at least once and 
                     // then repeat the loop as long as the specified condition is true.

//Array
let fruits: string[] = ["apple", "mango", "grapes"];

//normal for loop
for (let i: number = 0; i <= fruits.length - 1; i++) {
    console.log(fruits[i])
}

//Syntax of for..of
    // for..of loop ==> Each and every value of the given list 
    // for (let variable of list){
    //     //statements to execute
    // }

console.log("=======FOR-IN=======")
// let fruits: string[] = ["apple", "mango", "grapes"];
for (let x of fruits) {
    console.log(x);
}

//for..in loop
interface personInfo {
    name: string;
    age: number;
    empId: number;
    visa: boolean;
    address: {
        city: string;
        state: string;
    }
}

let person: personInfo = {
    "name": "Nihar",
    "age": 25,
    "empId": 1234,
    "visa": true,
    "address": {
        "city": "BBSR",
        "state": "Odisha"
    }
}

// Synatx:
    //for(let key in object){
    //statements to execute
    //}
console.log("=======FOR-OF=======")
for (let key in person) {
    console.log(key);
    console.log(person[key as keyof personInfo]);
}

/*
do...while loop
syntax:
do{
    //statements to execute
}while(condition-to-continue);

*/

console.log("=======DO-WHILE=======")

let x: number = 0;
do {
    console.log("Refresh the Page")
    // x++;
} while (x > 0)