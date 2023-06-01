

 

let proffesor = {
  name: "Shyam Tiwari",
  height: "5.5feet",
 age: 39,
  city: "Mumbai",
  isMarried: false,
  degrees: {
    Engineering:"CSC",
    Phd:"Advance computing",
   Bsc:"Chemistry",
  
  },
  
  getDetails: function () {
    let details = `Name: ${this.name}, Age: ${this.age}, Is Married: ${this.isMarried}, City: ${this.city}`;
   

  },
  getDegrees: function () {
    let degrees = `Engineering: ${this.Engineering}, Phd: ${this.Phd}, \Bsc: ${this.Bsc},`;
   

  },
};
console.log(proffesor);
console.log("Teachers Total degrees:",proffesor.degrees);

console.log("=====================================================================================");
let totalExperience = proffesor.degrees;
console.log(totalExperience);
proffesor.degrees.totalExperience = "14 years";
console.log(proffesor.degrees);

console.log("===================================================================================================");
proffesor.city = "Satara";
proffesor.isMarried = true;

console.log(`proffesor City is : ${proffesor.city}`);
console.log(`proffesor married status is : ${proffesor.isMarried}`);

console.log("===================================================================================================================");
const certificates = ["Hacker rank partipitation",  "Certificate in IFE Course",  "Certificate in Adv Programming"];
console.log(`Teachers Certificates are :${certificates}`);

certificates.push("Oracle Certified");
console.log(certificates);

console.log("==============================================================================================================");
let certificatesLength = certificates.length;
const lastElement =certificates[ certificatesLength-1];
console.log(`Last element of array certificate is: ${lastElement}`);