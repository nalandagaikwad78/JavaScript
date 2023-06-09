const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log("Numbers which are greater than 50 is:");
const arrayGreaterNum = arrayNumbers.filter( (element)=> {
    return element>50;
});
console.log(arrayGreaterNum);

console.log(" Even Numbers are:");
const arrayEvenNum = arrayNumbers.filter( (element)=> {
    return element%2==0;
});
console.log(arrayEvenNum);

console.log(" Odd Numbers are:");
const arrayOddNum = arrayNumbers.filter( (element)=> {
    return element%2==!0;
});
console.log(arrayOddNum);

console.log(" Multiple of 5 is:");
const arrayMultipleOf5 = arrayNumbers.filter( (element)=> {
    return element%5==0;
});
console.log(arrayMultipleOf5);

console.log(" Numbers which are in between 20 and 50 is:");
const arrayBetween = arrayNumbers.filter( (element)=> {
    return element >=20 && element <=50;
});
console.log(arrayBetween);