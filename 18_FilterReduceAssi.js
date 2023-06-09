

class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha =  new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayEmps = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log("All employees from 'Wipro' company:");
const arrayWiproEmployees = arrayEmps.filter( (employee) => {
    return employee.emp_company == "Wipro";
} );
const arrayWiproEmployeeNames = arrayWiproEmployees.map( (employee) => {
    return employee.emp_name;
});
console.log(arrayWiproEmployeeNames);

console.log("All employees from 'IT' OR 'HR' department:");
const arrayITEmployees= arrayEmps.filter( (employee) => {
    return employee.emp_dept == "IT" || employee.emp_dept == "HR";
} );
const arrayITEmployeeNames = arrayITEmployees.map( (employee) => {
    return employee.emp_name;
});
console.log(arrayITEmployeeNames);


console.log("All employees id's are greater than 50:");
const arrayIDEmployees= arrayEmps.filter( (employee) => {
    return employee.emp_id>50 ;
} );
const arrayIDEmployeeNames = arrayIDEmployees.map( (employee) => {
    return employee.emp_name;
});
console.log(arrayIDEmployeeNames);

console.log("All employees name starts with 'A', 'V', 'M':");
for (const employee of arrayEmps) {
    if (employee.emp_name.startsWith("A") || employee.emp_name.startsWith("V") || employee.emp_name.startsWith("M")) {
      console.log(`${employee.emp_name}`);
    }
  }

  console.log("Avarage salary of employees from all department:");
  const arrEmployeesSalary = arrayEmps.filter((employee)=>{
return employee.emp_company;
  });
  let sumSalary = 0;
  arrEmployeesSalary.forEach((employee) =>{
sumSalary = sumSalary + employee.emp_salary;
  });
  const average = sumSalary / arrEmployeesSalary.length;
  console.log(average);

  console.log("Avarage salary of employees from 'IT' department:");
  const arrayDept= arrayEmps.filter( (employee) => {
    return employee.emp_dept == "IT";
} );
let sumOfSalary = 0;
const arrayITSalary = arrayDept.map( (employee) => {
    sumOfSalary = sumOfSalary + employee.emp_salary;
  
});
const averages = sumOfSalary / arrayDept.length;
console.log(averages);
