

function stringHandsOn(){
    console.log();
 }
 console.log("  Hey you are doing good, keep it up   ");
 stringHandsOn ();


 var greet = "  Hey you are doing good, keep it up   ";
 var greetLength = greet.length;
 console.log("Length of the given string is: ", greetLength);

 var greet = "  Hey you are doing good, keep it up   ";
var resultSplit = greet.split(" ");
console.log(resultSplit);
console.log("Total number of words: ",resultSplit.length);

var greet = "  Hey you are doing good, keep it up   ";
var resultTrim = greet.trim();
console.log(greet.trim());
console.log("Remove extra spaces of given string is: ",resultTrim.length);

var trimmedGreet = greet.trim();
var lengthAfterTrim = trimmedGreet.length;
console.log("After Trim greet is: ",trimmedGreet, trimmedGreet.length );
console.log("Trimmed total spaces : ", greetLength-lengthAfterTrim);

var greet ="Hey you are doing good, keep it up";
 var charAtZeroIndex = greet.charAt(0);
console.log("Char at 0 index: ",charAtZeroIndex);

var charAtLastIndex = greet.charAt(greet.length-1);
console.log("Char at last index: ",charAtLastIndex);


var resultSplit = greet.split(" ");
console.log(resultSplit);
console.log("Total words available in the string: ",resultSplit.length);


var indexOfGood = greet.indexOf("good")
console.log("Index of word good is: ", indexOfGood);


var sliceResult = greet.slice( 22);
console.log("Slice Result is: ", sliceResult);

var subStringResult = greet.substring( 22);
console.log("Substring starting from index 22: ", subStringResult);

var greet = "Hey you are doing good, keep it up";
var result = greet.startsWith("Hey");
console.log("Is string starts with Hey:" ,result );


var result = greet.endsWith("up");
console.log("Is string ends with up:" ,result );


