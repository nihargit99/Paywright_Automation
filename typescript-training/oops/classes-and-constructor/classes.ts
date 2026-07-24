//Create employee class. 

class Employee {
   
    //properties
    empId: number = 1234;
    empName: string = "Nihar";
    empDept: string = "IT";

    //method
    empProjectInfo():void{
        console.log("Employee is working on a Playwright project.");
    }
}


//Access the data from the class. 
let emp= new Employee();
emp.empProjectInfo();

