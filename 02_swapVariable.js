var num1 = 100;
var num2 = 200;
var num3 = 300;
// Output --> num1 = 200,  num2 =100

console.log("Before Swap:", "num1: ", num1, " num2: ", num2 ,"num3: ", num3);
var temp1 = num1;
num1 = num2;
num2 = temp1;
console.log("num1:", num1, " num2:", num2);
var temp2 = num2;
num2 = num3;
num3 = temp2;
console.log("After Swap:", "num1: ", num2, " num2: ", num3);


var sweety = "Sweety";
var cutie = "Cutie";

function swapVariables( sweety, cutie ){
    console.log("Before Swap:", sweety ,cutie);
   
    var temp3 = sweety;
    cutie =temp3;
    sweety = cutie;
    console.log("After Swap:", sweety,cutie);

}
swapVariables(sweety, cutie);