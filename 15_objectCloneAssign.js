console.log("--------*1.Performing Shallow Clone*----------------------");
const arrarNums = [20, 3, 4, 56, 90, 400, 49];
const clonedArray = arrarNums;
clonedArray.push(55, 66);
console.log(`Original array: ${arrarNums}`);
console.log(`Cloned array:   ${clonedArray}`);

console.log("----------*2.Performing Deep Clone*----------------------");

const arraNums = [20, 3, 4, 56, 90, 400, 49, 55, 66];

console.log(`Original Array is:${arrarNums}`);
arraNums.push(10, 25);
console.log(`Updating array values with 10 and 25: ${arraNums}`);
const clonedeepArray = arrarNums;
console.log(`Cloned array is: ${clonedeepArray}`);

console.log("----------*3.Merge or Concat Array*----------------------");
const arrayEven = [2, 30, 14, 8];
//  const arrayNums= [20,3,4,56,90,400,49,55,66];
const array = arrayEven.concat(arraNums);
console.log(array);
console.log("----------*4.Employee Details*----------------------");
const employee_info = {
  emp_name: "Satish Joshi",
  emp_id: 45,
  salary: {
    july_month: "40,0000INR",
    aug_month: "50,0000INR",
    jun_month: "65,0000INR",
  },
  address: {
    Locality: {
      colony: "Gawade Society",
      street: "Daund Road, 428967",
    },
    city: "Pune",
    state: "Maharashtra",
    country: "India",
  },
  mobiles: ["+91 3647 6785 00", "8745 3536 89", "+91- 9876 4567 11"],
};
console.log(employee_info);

console.log("----------*5.Employee Details*----------------------");
console.table(employee_info.address);
console.table(employee_info.mobiles);

console.log("----------*6.Perorming deep copy using JSON.stringfy()*----------------------");
console.log("---Updated properties of july month salary to 80k---");

const deepClonedEmopl = JSON.parse(JSON.stringify(employee_info));
employee_info.salary.july_month = "80,0000INR";
console.log(`Updated salary of july month is:${employee_info.salary.july_month}`);

console.log("------Updated property of country------");
console.log(`Original country is:${employee_info.address.country}`);
const deepClonedDetail = JSON.parse(JSON.stringify(employee_info));
employee_info.address.country = "United Kingdom";
console.log(`Updated country is:  ${employee_info.address.country}`);
