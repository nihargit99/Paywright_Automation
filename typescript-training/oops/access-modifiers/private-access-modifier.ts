

// 3. private => We can access only within the class
console.log("*****************private**************************")

//Main Class
class Person {
    private name: string = "Bharath Reddy";
    private age: number = 35;
    private city: string = "Hyderabad";

    //method to access data with in the class
    printEmpData() {
        console.log("accessing data with in the class");
        console.log(this.name);
        console.log(this.age);
        console.log(this.city);       
    }

}

//Child Class
class Child extends Person{

       //method to access data with in the child class
        printEmpData() {
        console.log("accessing data with in the Child class");
        // let obj = new Person();

         // "As these is a outside class so, it will throw error. (You can check by uncommenting them"
        /*
        console.log(this.name);
        console.log(this.age);
        console.log(this.city);     
        */  
    }

}

//Outside Class
class Outside {

        //method to access data outside of the  class
        printEmpData() {
        console.log("accessing data out side of the Main class");
        let obj = new Person();
        // console.log(obj.name);
        // console.log(obj.age);
        // console.log(obj.city);   
        //  console.log(obj.getAge());    
    }

}

let obj1 = new Person();
obj1.printEmpData();
let obj2 = new Child();
obj1.printEmpData();
let obj3 = new Outside();
obj1.printEmpData();