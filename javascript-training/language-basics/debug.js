
console.log("Execute line 1");
console.log("Execute line 2");
console.log("Execute line 3");
sumOfNumbers(5,10);
console.log("Execute line 5");
console.log("Execute line 6");
console.log("Execute line 7");
console.log("Execute line 8");
console.log("Execute line 9");
console.log("Execute line 10");  


// Debugging the program step by step:

// 1. Add the breakpoint (Click on the left of the line number from where you want to start debugging)
// 2. Run the program in debug mode (Press F5 or click on the green play button with a bug icon)
//3. Use the debug option to identify the error and fix error

/*
DEBUGGING OPTIONS:
    a. Continue (F5) - Continue running the program until the next breakpoint or end of the program.
    b. Step Over (F10) - Execute the next line of code without stepping into any function calls.
    c. Step Into (F11) - Step into the next function call to debug it line by line.
    d. Step Out (Shift + F11) - Step out of the current function and return to the caller function.
    e. Restart (Ctrl + Shift + F5) - Restart the debugging session from the beginning.
    f. Stop (Shift + F5) - Stop the execution and terminate the debugging session.
*/





























function sumOfNumbers(a, b) {
    c=a-b;
    console.log(c);
}