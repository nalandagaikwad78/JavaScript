


function stringBasics (){
   console.log();
}
console.log("My dream company is: TCS");
stringBasics ();


console.log("------------------------------------------------------------------------");

function stringBasics (){
    console.log();
 }
 console.log("My Hobbies are: Cricket , Songs , Drawing");
 stringBasics ();

 console.log("------------------------------------------------------------------------");

 var greet = " Cricket , Songs , Drawing";
 var greetLength = greet.length;
 console.log("Sum of the total number of character in given string is: ", greetLength);
 

 console.log("-------------------------------------------------------------------------");


 function stringHandsOn(){
    console.log();
 }
 console.log("Hey you are doing good, keep it up");
 stringHandsOn ();

 

 var greet = "   Hey you are doing good, keep it up   ";
 var greetLength = greet.length;
 console.log("Sum of the total number of character in given string is: ", greetLength);


 
 console.log("-------------------------------------------------------------------------");
  

 var firstName =  "   Hey you are doing good, keep it up   " ;
 var firstNameLength = firstName.length;
 console.log("Before trim length is: ", firstNameLength );



 var trimmedFirstName = firstName.trim();
var lengthAfterTrim = trimmedFirstName.length;
console.log("After Trim firstName is: ",trimmedFirstName, trimmedFirstName.length );
console.log("Trimmed total spaces : ", firstNameLength-lengthAfterTrim);

var greet = "Hey you are doing good, keep it up";
 var charAtZeroIndex = greet.charAt(0);
console.log("Char at 0 index: ",charAtZeroIndex);

var charAtLastIndex = greet.charAt(greet.length-1);
console.log("Char at last index: ",charAtLastIndex);

console.log("-------------------------------------------------------------------------");
  