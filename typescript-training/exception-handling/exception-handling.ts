
/*
    Exception Handling => Handle the exceptions. 

    1. try..catch..finally ==> When there is an exception and if you want to handle the exception and continue the execution process 
    2. throw => When there is no exception, but the user intentionally wants to fail the program by throwing an exception 

*/

// 1. try..catch..finally syntax:
    try{
        //code that may throw an exception
    }
    catch(error){
        // code to handle the exception
    }
    finally{
        // code that will always execute, regradless of wheather an excpetion was caught or thrown
    }

// e.g.:
console.log("***************try catch exception*************************")

let input: any;

try{
    // console.log(10+20);
    console.log(input.toLowerCase());
}
catch(error){
    console.log("----Executing Catch block----")
    console.log(`Error causing due to: ${error}`)
}
finally{
        console.log("----Executing Finally block----")
}


// 2. throw
console.log("***************throw exception*************************")
let age: number=17

if(age<18){
    throw new Error("Not eligible to vote")
}
else{
    console.log("Eligible to vote")
}

console.log("Execution completed")