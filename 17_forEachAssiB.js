
class Employee {
    constructor(id, name, dept, salary, company) {
      this.id = id;
      this.name = name;
      this.dept = dept;
      this.salary = salary;
      this.company = company;
    }
  }
  const anil = new Employee(22, "Anil", "IT", 50000, "TCS");
  const radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
  const rushi = new Employee(55, "Rushi", "Finence", 47000, "TCS");
  const sonali = new Employee(66, "Sonali", "Finence", 45000, "Infy");
  const monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
  const viny = new Employee(88, "Viny", "IT", 75000, "TCS");
  const mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

  console.log(
    `***********employee working in company TCS and  employee names and company name***********`
  );
  const Arrayemployees= [anil, radha, rushi, sonali, monika, viny, mahi];

  Arrayemployees.forEach( (employee)=> {
    if (employee.company=="TCS") {
        console.log(employee.name, employee.company);
    }
});

console.log(
    `***********employees with salary greater than equal to 50000***************` );
Arrayemployees.forEach( (employee)=> {
  if (employee.salary>=50000) {
      console.log(employee);
  }
});

console.log(
    `***********Sum of all employees salary***************` );
    let sumSalaryOfEmpl = 0;
    Arrayemployees.forEach( (employee)=> {
    if (employee.salary) {
        sumSalaryOfEmpl = sumSalaryOfEmpl + employee.salary;
    }
});
console.log(`Sum of all employees salary:-${sumSalaryOfEmpl}`);

console.log(
    `***********Average employees salary***************` );
    let sumSalary = 0;
    Arrayemployees.forEach( (employee) => {
    sumSalary = sumSalary + employee.salary;
});
let averageSalary = sumSalary / Arrayemployees.length;
console.log(`Average Salary is : ${averageSalary}`);

// console.log(
//     `***********Average employees salary***************` );

//     Arrayemployees.forEach( (employee)=> {
//         if (employee.dept=="HR"  && employee.salary >= 75000 ) {
//             console.log(employee);
//         }
//     });
    console.log(
        `***********IT OR HR department employee whose salary is greater than or equal to 75000***************` );
    Arrayemployees.forEach( (employee)=> {
        if (employee.dept="IT" && employee.salary >= 75000 ) {
            console.log(employee);
        } 
    });
  