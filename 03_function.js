

function show() {
    console.log("Show function");
}
console.log("Before function call");
show();
console.log("After function");
show();
show();
show();

console.log("-----------------------------------");


var numOne=100;
var numTwo=200;

var name1 = "Billgates";
var name2 = "Elon Musk";

var fruitApple = "Apple";
var fruitMango = "Mango";

function swapVariables(valueOne, valuaTwo){//arguments:  var valueOne = numOne valuaTwo = 200
    console.log("Before Swap:", valueOne , valuaTwo);
    // var valueOne = 100
    // var valuaTwo = 200
    // var temp = 100;
    var temp = valueOne;
    valueOne = valuaTwo;
    console.log("After Swap:",valueOne , valuaTwo);

}
swapVariables(numOne,numTwo);// 100 200
swapVariables(name1, name2);
swapVariables(fruitApple ,fruitMango );


console.log("-----------------------------------");


function myName () {
   
}
console.log("Ankita Thakur");
myName ();

console.log("-----------------------------------");


function personalDetails(firstName) {
   
}
console.log("First Name: Ankita");
personalDetails();

function personalDetails( lastName ) {
    
}
console.log("Last Name :Thakur");
personalDetails();

function personalDetails( collegeName) {
    
}
console.log("CollegeName:DYSP");
personalDetails();

console.log("-----------------------------------");

 var num1 = 1000;
 var num2 = 2000;

 function swapValuesDude( num1, num2){
    console.log("Before Swap:", num1, num2);
   
    var temp = num1;
   num1 =num2;
   num2 =temp
    console.log("After Swap:",num1 , num2);

}
swapValuesDude(num1 , num2);

console.log("-----------------------------------");

var Husband = "Virat";
var Wife = "Anushka";

function swapValuesDude( Husband,Wife){
    console.log("Before Swap:", Husband,Wife);
   
    var temp = Husband;
 Wife = Husband;
   Husband = Wife;
    console.log("After Swap:", Wife, Husband);

}
swapValuesDude(Husband,Wife);


console.log("-----------------------------------");

function addThreeValues( a, b, c){
    var result = a+b+c;
    console.log("Addition is:", result);
   
}
addThreeValues( 10.23, 600, 40);
addThreeValues( "Hello", "Good", "Morning");

console.log("-----------------------------------");

function addition(num1, num2) {
    var result  = num1 + num2;// result = 300
    return result;
}
var returnValue = addition(100, 200);
console.log("Addition of number is: ", returnValue);
var returnResult = addition(890.400, 600.3456);
console.log("Addition of number is: ", returnResult);