//Asynchronous function with promise :

//normal function to generate random number
function normalFunction(): number {
    console.log("Using Normal function")
    return Math.random();
}

//call the normal function
console.log(normalFunction());

//Asynchronous function to generate a random number with a promise 
// Promise is always I want the number greater than 0.5 , Otherwise, fail/reject the program. 

/*
If we see promise in Playwright View, Microsoft team is creating playwright methods, Internally each and every methods they are 
already written promise used there

Lets say Click is a method used to click element, this clcik methods when created, they internally used async click method with promise
So when we used this methods, the method should work compulsory otherwise you need to stop the execution

*/

async function getRandomNumber(): Promise<number> {
    return new Promise((resolve, reject) => {
        const random = Math.random();
        console.log("Using asynchronous functions ");
        console.log(`Random Number: ${random}`);
        if (random > 0.5) {
            resolve(random);
        } else {
            reject(new Error(`Random number ${random} is less than 0.5`));
        }
    });
}

//Calling the asynchronous function. 
let value = await getRandomNumber();
console.log(value);

//Asynchronous function to generate a random number with a promise and a timeout of 10 seconds 
async function getRandomNumberWithTimeout(): Promise<number> {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const random = Math.random();
            console.log("Using asynchronous functions with timeout ");
            console.log(random);
            if (random > 0.5) {
                resolve(random);
            } else {
                reject(new Error(`Random number ${random} is less than 0.5`));
            }
        }, 10000)

    });
}


//Calling the asynchronous function. 
let value1 = await getRandomNumberWithTimeout();
console.log(value1);