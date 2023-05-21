
var square = function (Five) {
    var result = 5*5;
    return `Square of 5 is: ${result}`;
}
var result = square(5,5 );
console.log(result);

var square = function (Six) {
    var result = 6*6;
    return `Square of 6 is: ${result}`;
}
var result = square(6,6 );
console.log(result);

var square = function (TwentyFive) {
    var result = 25*25;
    return `Square of 25 is: ${result}`;
}
var result = square(25,25 );
console.log(result);


function varible(){
    console.log();
 }
 console.log("Type of function is:","Function");
varible ();

var multiplication = function (length, width ) {
    var result = length*width;
    return `Area of rectangle plot is: ${result}`;
}
var result = multiplication(499, 917);
console.log(result);

var Husband = "Virat";
var Wife = "Anushka";

var num1 = "1000";
var num2 = "2000";
function swapValuesDude( Husband, Wife){
    console.log("Before Swap:", Husband, Wife);
   
    var temp = Wife;
 temp = Husband;
 Husband = Wife;
    console.log("After Swap:", Husband, Wife);         
}
swapValuesDude(Husband,Wife);

function swapValuesDude( num1, num2){
    console.log("Before Swap:", num1, num2);
   
    var temp = num1;
   num1 =num2;
   num2 =temp
    console.log("After Swap:",num1 , num2);

}
swapValuesDude(num1 , num2);

var greet = "JS the most popular language of internet";
var greetLength = greet.length;
console.log("Total character available in the string is: ", greetLength);

var greet = "JS the most popular language of internet";
var charAtZeroIndex = greet.charAt(11);
console.log("Char at index 11: ",charAtZeroIndex);

var greet = "JS the most popular language of internet";
var charAtZeroIndex = greet.charAt(6);
console.log("Char at index 6: ",charAtZeroIndex);


var charAtLastIndex = greet.charAt(greet.length-1);
console.log("Char at last index is: ",charAtLastIndex);



 var charAtZeroIndex = greet.charAt(0);
console.log(" Very first Char from the given string: ",charAtZeroIndex);


var resultSplit = greet.split(" ");
console.log(resultSplit);
console.log("Total number of words: ",resultSplit.length);


var square = function (seven) {
    var result = 7*7;
    return `Square of total number of words is: ${result}`;
}
var result = square(7 );
console.log(result);