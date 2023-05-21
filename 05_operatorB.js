  
var greaterNumber =  function(){
 console.log("The greatest number among two number.");
}
greaterNumber();

var greaterNumber =  function(num1, num2){
    var result = num1>=num2 ?`${num1} is greater` :`${num2} is greater`;
    console.log(result);
}
greaterNumber(10, -10);

var greaterNumber =  function(num1, num2){
    var result = num1>=num2 ?`${num1} is greater` :`${num2} is greater`;
    console.log(result);
}
greaterNumber(800, 899);

console.log("-----------------------------------");


var isEvenOrOddNum = function  (num) {
    var result = num%2 == 0 ?  true : false ;
    return result;
}
var result = isEvenOrOddNum(29);
var res = (result == true) ? "29 is even":"29 is odd";
console.log(`${res}`);
isEvenOrOddNum(29);


console.log("-----------------------------------");


var isEvenOrOddNum = function  (num) {
    var result = num%2 == 0 ?  true : false ;
return result;
}
var result = isEvenOrOddNum(44);
var res = (result == true) ? "44 is even":"44 is odd";
console.log(`${res}`);
isEvenOrOddNum(44);


console.log("-----------------------------------");

var isEvenOrOddNum = function  (num) {
    var result = num%2 == 0 ?  true : false ;
return result;
}
var result = isEvenOrOddNum(0);
var res = (result == true) ? "0 is even":"0 is odd";
console.log(`${res}`);
isEvenOrOddNum(0);


console.log("-----------------------------------");

var isEvenOrOddNum = function  (num) {
    var result = num%2 == 0 ?  true : false ;
return result;
}
var result = isEvenOrOddNum(101);
var res = (result == true) ? "101 is even":"101 is odd";
console.log(`${res}`);
isEvenOrOddNum(101);



console.log("-----------------------------------");
var greet = "developer";
var resultSplit = greet.split(" ");

console.log(resultSplit);


var greetLength = greet.length;
console.log("Length of word is: ", greetLength);

var wordLength = function (word ){
    var len = wordLength.length;
    var result = len %2 == 0 ? "EVEN" : "ODD" ;
    return result;
    }
    var returnValue=wordLength("developer");
    console.log(`developer is ${returnValue}`);

    console.log("-----------------------------------");

    var greet = "Google";
var resultSplit = greet.split(" ");

console.log(resultSplit);


var greetLength = greet.length;
console.log("Length of word is: ", greetLength);


var wordLength = function (num ){
    var num = 6 ;
    var result =  num%2 == 0 ? "EVEN" : "ODD" ;
    return result;
    }
    var returnValue = wordLength("6")
    console.log(`Google is ${returnValue}`);

    console.log("-----------------------------------");
    var greet = "JavaScript";
    var resultSplit = greet.split(" ");
    
    console.log(resultSplit);
    
    
    var greetLength = greet.length;
    console.log("Length of word is: ", greetLength);
    
    
    var wordLength = function (num ){
        var num = 10 ;
        var result =  num%2 == 0 ? "EVEN" : "ODD" ;
        return result;
        }
        var returnValue = wordLength("10")
        console.log(`JavaScript is ${returnValue}`);