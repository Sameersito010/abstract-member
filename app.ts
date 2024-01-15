let cl=console.log;

 abstract class Department{
    protected employees:Array<string>=[];
    constructor(public dName:string, private readonly dId:string){

    }
    abstract describe():void{

    }
    hireEmp(emp:string){

    }
    createEmp(emp:string){
        return{
            empName:emp
        }
    }
}

// let d=new Department("Test","D-789")
// cl(Department.createEmp("Tony"))




class FinanceDepartment extends Department{
    describe(): void {
        cl("this is Department Finance ");
    }
    constructor(dName:string, dId:string){
        super(dName,dId)
    }
    addReports(report:string){

    }
    hireEmp(emp:string):void{
        this.employees.push(emp)
    }
}

class ITDepartment extends Department{
    describe(): void {
        cl("this is IT department");
    }
    constructor(empName:string, empId:string){
        super(empName,empId)
    }
    hireEmp(emp:string):void{
        this.employees.push(emp)
    }
    addReports(report:string){

    }
}









