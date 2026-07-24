
// 2. protected => We can access from within the class and its child class but we can't access from outside of the class



//Main Class
class Person1 {
    protected name: string = "Nihar Behura";
    protected age: number = 26;
    protected city: string = "Bhubaneswar";

    printEmpData() {
        console.log("*****************Main class*********************")
        console.log("accessing data with in the class");
        console.log(this.name);
        console.log(this.age);
        console.log(this.city);
    }
}
//Child Class
class Child1 extends Person1 {

    //method to access data with in the child class
    printEmpData() {
        console.log("*****************Child class*********************")
        console.log("accessing data with in the Child class");
        // let obj = new Person();
        console.log(this.name);
        console.log(this.age);
        console.log(this.city);
    }
}

//Outside Class
class Outside1 {

    printEmpData() {
              console.log("*****************Outside1 class*********************")
        console.log("accessing data out side of the Main class");
        let obj = new Person1();
        
// "As this is a outside class so, even if we create an object of parent class it will throw error.(You can check by uncommenting them"
        /*
        console.log(obj.name);
        console.log(obj.age);
        console.log(obj.city);
        */
    }
}

let obj1 = new Person1();
obj1.printEmpData();
let obj2 = new Child1();
obj2.printEmpData();
// let obj3 = new Outside1();
// obj3.printEmpData();
