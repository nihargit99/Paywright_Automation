
// operators= these are nothing but the spacial symbols which are used to perform operations. 

// types of operators in javascript are:

    // 1. Arithmetic operators
    // 2. Assignment operators
    // 3. Comparison operators
    // 4. Logical operators
    // 5. Ternary operators

// 1. Arithmetic operators: these are used to perform mathematical operations on numbers.

    // + // addition
    // - // subtraction
    // * // multiplication
    // / // division
    // % // modulus (remainder)
    // ** // exponentiation
    // ++ // increment (increases the value of a variable by 1)
    // -- // decrement (decreases the value of a variable by 1)

    // placement of ++ and -- can decide the value of the variable.
    
    let a =10;
    let b =20;

    console.log(a++); // 10 (post-increment: returns the value before incrementing)
    console.log(b--); // 20 (post-decrement: returns the value before decrementing)
    console.log(a); // 11 (after post-increment, a is now 11)
    console.log(b); // 19 (after post-decrement, b is now 19)


    let c=10;
    let d=20;
    console.log(++c); // 11 (pre-increment: increments the value before returning it)
    console.log(--d); // 19 (pre-decrement: decrements the value before returning it)


// 2. Assignment operators: these are used to assign values to variables.

    i=10;
    console.log("initial value of i: ", i); // 10 

    i += 10; // equivalent to i = i + 10
    console.log("after addition assignment operator: ", i); // 20

    i-= 10; // equivalent to i = i - 10
    console.log("after subtraction assignment operator: ", i); // 10

    i *= 10; // equivalent to i = i * 10
    console.log("after multiplication assignment operator: ", i); // 100

    i /= 10; // equivalent to i = i / 10
    console.log("after division assignment operator: ", i); // 10   

    i %= 10; // equivalent to i = i % 10
    console.log("after modulus assignment operator: ", i); // 0

// 3. Comapairson Operators: these are used to compare two values and return a boolean value (true or false).

    // == // loose equality (compares values only)
    // === // strict equality (compares values and types, Represents strict equality)

    let x=10;
    let y=10;
    let z="10";
    
    console.log(x == y); // true (values are equal)
    console.log(x == z); // true (values are equal)

    console.log(x === y); // true (values and types are equal)
    console.log(x === z); // false (values are equal but types are different)

    console.log(x != y); // false (values are equal)
    console.log(x != z); // false (values are equal)
    cosnole.log(x !== y); // false (values and types are equal)
    console.log(x !== z); // true (values are equal but types are different)

// 4. Logical operators: these are used to combine multiple conditions and return a boolean value (true or false).

    // && // logical AND (returns true if both conditions are true)
    // || // logical OR (returns true if at least one condition is true)
    // ! // logical NOT (returns true if the condition is false)

    let p = 10;
    let q = 20;

    console.log(p > 5 && q > 15); // true && true => true
    console.log(p > 15 || q > 15); // false || true => true
    console.log(!(p > 5)); // !true => false

// 5. Ternary operator: a special character used to write condition/ shorthand for an if-else statement.

    // syntax: let result= condition ? value_if_true : value_if_false;

    let age = 18;
    let result =(age >= 18) ? " adult." : "minor.";
    console.log(result); // "adult."

    