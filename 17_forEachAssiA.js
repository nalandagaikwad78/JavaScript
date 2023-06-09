

const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
    console.log(`Given array is :-${arrayNumbers}`);

    console.log("=============array elements with its index======================================");
    arrayNumbers.forEach( ( currentValue, index, array ) => {
        console.log(` ${currentValue}, ${index}`);
    } );
    console.log("=============Positive numbers in array ======================================");
const arrayPositiveNums = [];
arrayNumbers.forEach((element, index) =>{
if (element>0) {
    arrayPositiveNums.push(element);
}

} );
arrayPositiveNums.forEach(element => console.log(element));

console.log("=============Negative numbers in array ======================================");
const arrayNegativeNums = [];
arrayNumbers.forEach((element, index) =>{
if (element<0) {
    arrayNegativeNums.push(element);
}

} );
arrayNegativeNums.forEach(element => console.log(element));


console.log("=============Even numbers in array ======================================");
const arrayEvenNums = [];
arrayNumbers.forEach((element, index) =>{
if (element%2==0) {
    arrayEvenNums.push(element);
}

} );
arrayEvenNums.forEach(element => console.log(element));

console.log("=============Sum of all elements in array ======================================");
var arrayElementSum =0;
arrayNumbers.forEach(sum =>{
arrayElementSum += sum;
});
console.log(arrayElementSum);

// console.log("=============Even indexed array value ======================================");
