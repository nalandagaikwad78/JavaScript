const arrayNumbers =[20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];

let lengthOfArray = arrayNumbers.length;
console.log(`Length of total elements in array is : ${lengthOfArray}`);

console.log(`===============================================`);
const zerothIndexValue =arrayNumbers[0];
console.log(`First element index value is: ${zerothIndexValue}`);

console.log(`===============================================`);
let arrayLength = arrayNumbers.length;
const lastElement = arrayNumbers[arrayLength-1];
console.log(`Last element index value is: ${lastElement}`);

console.log(`===============================================`);
console.log(arrayNumbers);
arrayNumbers.splice(8, 1)
console.log(arrayNumbers);

console.log(`===============================================`);
const arrNumbers =[20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
const evens = [];
arrNumbers.forEach((num) => {
  if (num % 2 == 0) {
    evens.push(num);
  }
});
console.log( `Even numbers are: ${evens}`);

console.log(`===============================================`);
const arrOddNumbers =[20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
const odds = [];
arrOddNumbers.forEach((num) => {
  if (num %2 == !0) {
    odds.push(num);
  }
});
console.log( `Odd numbers are: ${odds}`);

console.log(`===============================================`);
const arrEvenNumbers =[20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11]; 
for (const index in arrEvenNumbers) {
   if (index%2==0) {
    console.log(`even indexed element is:${arrEvenNumbers[index]}`);
   }
}

console.log(`===============================================`);
const arrsOddNumbers =[20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11]; 
for (const index in arrsOddNumbers) {
    if (index%2==!0) {
     console.log(`odd indexed element is:${arrsOddNumbers[index]}`);
    }
 }

 console.log(`===============================================`);

 let array = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11]; 
 let sum = 0;
 for (let i = 0; i < array.length; i++){
  sum += array[i];
 }
 console.log("Sum of all elements:" + sum);
 console.log(`===============================================`);
 const multipleOfFive = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11]; 
 for(const index in  multipleOfFive)
 if (index%5==0){
  console.log(`multiple of 5 is: ${multipleOfFive[index]}`);
 }
 


