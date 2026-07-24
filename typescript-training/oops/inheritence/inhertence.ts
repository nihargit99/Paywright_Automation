//Inheritance : 

//1. Single Inheritance ==> Child extends Parent
//2. Multiple Inheritance => Child extends Parent1 , Parent 2 (not supported in TypeScript)
//3. Multi-level Inheritance => Child extends Parent and Parent extends GrandParent
//4. Hirarchical Inheritance => Child1 extends Parent, Child2 extends Parent


// 1. Single Inheritance 
//grand-parent class
console.log("************Single Inheritance************************")
class Class1{
    empName:string ="Nihar Ranjan";
    empId:number = 1234
}

//parent class
class Class2 extends Class1{
    empSalary:number = 50000;
}

let obj1 = new Class2();
console.log(obj1.empName);
console.log(obj1.empSalary)

console.log("************Multilevel Inheritance************************")
// 3. Multilevel Inheritance
//grand-parent class
class Class3{
    empName:string ="Nihar Ranjan";
    empId:number = 1234
}

//parent class
class Class4 extends Class1{
    empSalary:number = 50000;
}

//child class
class Class5 extends Class2{
    empProject:string = "Creatio CRM";
}

let obj = new Class5();
console.log(obj.empName);
console.log(obj.empId);
console.log(obj.empSalary);
console.log(obj.empProject);

