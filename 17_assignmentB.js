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
const array = [anil, radha, rushi, sonali, monika, viny, mahi];
for (const employee of array) {
  if (employee.company == "TCS") {
    console.log(
      `employee working in company TCS:- ${employee.name}, company name:-  ${employee.company}`
    );
  }
}



console.log(
  `***********employee working in Finence dept and employee names and company name***********`
);

for (const employee of array) {
  if (employee.dept == "Finence") {
    console.log(
      ` employees working in Finence dept:- ${employee.name} ,company name:-  ${employee.company}`
    );
  }
}



console.log(
  `***********employee name starts with 'R' and complete employee details***********`
);

for (const employee of array) {
  if (employee.name.startsWith("R")) {
    console.log(`employee name starts with 'R':- ${employee.name}`);
  }
}



console.log(
  `***********employee whose salary is greater than 75000 and name, salary,company***********`
);
for (const employee of array) {
  if (employee.salary > 75000) {
    console.log(
      `employee whose salary is greater than 75000 ${employee.name}, and name:- ${employee.name}, salary:- ${employee.salary}, company:-${employee.company}`
    );
  }
}



console.log(
  `***********employees whose salary is greater than equal to 50000 and it from 'IT' dept and complete emp details***********`
);

for (const employee of array) {
  if (employee.salary >= 50000 && employee.dept == "IT") {
    console.log(
      ` employees whose salary is greater than equal to 50000:- ${employee.name}, complete emp details:-name-${employee.name},salary-${employee.salary},company-${employee.company},id-${employee.id},dept-${employee.dept}`
    );
  }
}



console.log(
  `*********** all the emp from company 'infy' and  complate employee details***********`
);
for (const employee of array) {
  if (employee.company == "Infy") {
    console.log(
      `all the emp from company 'infy':-${employee.name},emp details:-name-${employee.name},salary-${employee.salary},company-${employee.company},id-${employee.id},dept-${employee.dept}`
    );
  }
}
