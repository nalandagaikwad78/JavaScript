 
 console.log("============Clone SBI Bank and Bank location in SBI Bank======================");
 console.log("======Before Cloning=========");
 let bankSbi = {
    bankName: "SBI Bank",
    location: "Pune",
    accountNo: "125367898664",
    ifsc: "sbi243500046",
 }
 console.table(bankSbi);

let bankLocation = {
    street: "Bhosari Road",
    landmark: "krushna wedding hall",
   city: "Pune",
    pin: 412217
}
console.table(bankLocation); 

let rateOfInterest = {
    homeLoanInterest: "5%",
    personalLoanInterest: "12%",
    dueInterest: "10%", 
 }
 console.table(rateOfInterest);

console.log("======After Cloning=========");

// Object.assign(bankSbi=bankLocation);
Object.assign(bankSbi,bankLocation);
console.table(bankSbi);

console.log("======Merge====================");

const sbiDetails = Object.assign({ },bankSbi, bankLocation,rateOfInterest ); 
console.table(sbiDetails);
 

console.log("============Traversing the merge values ===================");
for (const key in sbiDetails) { // key = "height"
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const value = sbiDetails[key];
        console.log(`${key}: ${value}`);
    }
}