
/*
Syntax for creating a variable in JavaScript:

    Declaration Variable= value; 
    Example: let x = 5;

        Declaration: nature of the data
        Variable: name of the variable or memory location
        =: assignment operator
        Value: data assigned to the variable

*/

/*
Types of variable declaration in JavaScript:

    1. var: The var keyword is used to declare a variable in  the old version of JavaScript.  
            We need to avoid this in latst version
    2. let: The let keyword is used to declare a  variable This can be reassigned or modified 
    3. const: The const keyword is used to declare a variable. This cannot be reassigned or modified 
        once it is assigned a value.
*/

/*
These three different varible declaration will differ mainly based on 4 important parmaeters:

    1. Initialization
    2. Re-assignment
    3. Re-declartions
    4. Scope
*/

// 1. Initialization: This means, Adding a value at the time of declaration.
    var x ; //Its not mandatory to to initialize at the begining. we can add later as well
    let y; //Its not mandatory to to initialize at the begining. we can add later as well
    const z= 10; //Its not mandatory to to initialize during declaration.


// 2. Re-assignment: This means, Modifying the value of a variable after it has been declared and initialized.
    x=20 //var will allow reassignment
    y=30 //let will allow reassignment
    // z=40 const will not allow reassignment 

    console.log(x); //Output: 20
    console.log(y); //Output: 30
    console.log(z); //Output: 10
    
// 3. Re-declartions: Using the same variable to store some other value.
    var x='Nihar' //var will allow redeclaration
    // let y='JavaScript' //let will not allow redeclaration
    // const z= 20; //const will not allow redeclaration

    console.log(x); //Output: Nihar
    console.log(y); //Output: JavaScript
    console.log(z); //Output: 10

// 4. Scope: Accessing the data from out of the block or within the block.
    
    // let and const are block-scoped, which means they are only accessable within the block they are defined in
    // var is not block-scoped

{
    var a=10;
    let b=20;
    const c=30;
    console.log("Inside the block")
    console.log(a);
    console.log(b);
    console.log(c);
}

     console.log("outside the block")
    console.log(a);
    console.log(b);
    console.log(c);