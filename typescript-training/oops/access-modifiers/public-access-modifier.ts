

// 1. public=> We can access from everywhere (within the class, child class and outside class)


//Main Class
class Person {
    name: string = "Nihar Behura";
    age: number = 26;
    city: string = "Bhubaneswar";

    printEmpData() {
        console.log("*****************Main class*********************")
        console.log("accessing data with in the class");
        console.log(this.name);
        console.log(this.age);
        console.log(this.city);
    }
}

//Child Class
class Child {

    printEmpData() {
        console.log("*****************Child class*********************")
        console.log("accessing data with in the Child class");
        let obj = new Person();
        console.log(obj.name);
        console.log(obj.age);
        console.log(obj.city);
    }
}

//Outside Class
class Outside {

    printEmpData() {
        console.log("*****************Outside class**********************")
        console.log("accessing data out side of the Main class");
        let obj = new Person();
        console.log(obj.name);
        console.log(obj.age);
        console.log(obj.city);
    }
}

let obj1 = new Person();
obj1.printEmpData();
let obj2 = new Child();
obj2.printEmpData();
let obj3 = new Outside();
obj3.printEmpData();

