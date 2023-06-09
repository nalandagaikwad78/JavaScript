console.log(`----Using arrow function with no arg and no return----`);
let display = ()=> {
    console.log(`Good Morning, Today is Monday`);
}
display();

console.log(`Multiplication is:`);

function multiplication(num1, num2, num3= 1) {
    if (num3 == 0) {
      num3 = 1;
    }
    console.log(num1 * num2 * num3);
  }
  multiplication(5, 5, 2);
 multiplication(10,4);
  
 function Addition(num1, num2, num3, num4, num5, num6) {
    if (num6 == 0) {
      num6 = 0;
    }
    console.log(num1 + num2 + num3 + num4 + num5);
  }
  console.log("Addition of number is:");
Addition(100, 100, 200, 349, 756);
console.log("Addition of words is:");
Addition("I am" , " learning" , " ES6" , " features" , " in depth");
  