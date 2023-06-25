const array = [10, 5, 'a', 'b', 'h', 11];
console.log(`Given Array: ${array}`);
 const stringArray = [];
 const numberArray =[];


 array.forEach(element => {
    if (typeof(element) === "number") {
        numberArray.push(element);
    }
     });
     console.log(`Numbers: ${numberArray}`);

 array.forEach(element => {
if (typeof(element) === "string") {
    stringArray.push(element);
}
 });
 console.log(`Alphabates: ${stringArray}`);