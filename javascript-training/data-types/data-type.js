
/*
There are two type of data types in JavaScript:
    1. Premitive data 
    2. Non-primitive data

*/


/*
1. Primitive data types: these are the basic data types that are not objects and have no methods. They include:
  
    - Number: both integer and floating-point numbers.
    - String: a sequence of characters within single quotes. double quotes or backticks
    - Boolean: a logical entity that can have two values: true or false.
    - Null: intentional absence of any object value.
    - Undefined: represents a variable that has been declared but has not been assigned
    - Symbol: represents a unique identifier that can be used as a property key in objects.
*/
let x=10; // number
console.log(typeof x); // "number"

/*
2. Non-primitive data types: these are complex data types that are objects and have methods.
    - Object: collection of key-value pairs within {} brackets.
        e.g.: let details= {Name: "John", Age: 30, City: "New York"}
    
      - Array: used to store list of values.
        e.g.: let numbers = [1, 2, 3, 4, 5]

    - Function: code designed to perform a particular task.
        e.g.: function greet() {
                console.log("Hello, World!");
            }
*/
console.log("==============Start of Non-Primitive example==============")
let details= {Name: "John", Age: 30, City: "New York"}
console.log(details); // {Name: "John", Age: 30, City: "New York"}
console.log(details.Name); // "John"

let fruits = ["Apple", "Banana", "Cherry"];
let price=[250, 150, 300];
let fruitAndPrice = ["Apple", 250, "Banana", 150, "Cherry", 300];

console.log(fruits); // ["Apple", "Banana", "Cherry"]
console.log(fruits[0]); // "Apple"
console.log(fruitAndPrice[4]); // "Cherry"

/*
3. Function: represents a block of code
Functions can be defined using the function keyword or as arrow functions.
    - Function declaration:
        function greet() {
            console.log("Hello, World!");
        }
*/
console.log("==============Start of Function example==============");
function greet() {
    console.log("Hello, World!");
}   

greet(); // "Hello, World!"

// 4. Set: It allow only unique values and does not maintain any order.

console.log("==============Start of Set example==============");
let mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(2); // Duplicate value, will not be added

console.log(mySet); // Set(3) {1, 2, 3}

/*
5. Map: It is a collection of key-value pairs.

    - Keys can be any data type and shoud be unique.
    - values can be of any data type and can be duplicated.

*/
console.log("==============Start of Map example==============");    
let employeedetails = new Map();

employeedetails.set(1234, "Nihar");
employeedetails.set(1235, "Ranajan");
employeedetails.set(1236, "Behura");
employeedetails.set(1237, "Nihar"); // Duplicate key, will update the value

console.log(employeedetails.size)
console.log(employeedetails); // Map(4) {1234 => "Nihar", 1235 => "Ranajan", 1236 => "Behura", 1237 => "Nihar"}


