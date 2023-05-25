var word = "I am very good IT Developer";
var count = 0;
for (let index = 0; index < word.length; index++) {
    var char = word.charAt(index); // 
    if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || 
        char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') {
        console.log(char);
        count++;
    }
    
}
console.log(`Count total number of vowels: ${count}`);

function sumOfQube(){
    var sum = 0;
    for (let index =1; index <=5; index++){ 
     var result = index * index * index;
        console.log(`${result}`);
        sum = sum+result;
    }
    console.log(`Sum of Qubes of number is : ${sum}`);
    }
    sumOfQube();
   

// function sumOfQube(){
// var sum = 0;
// for (let index =1; index <=5; index++){ 
//     sum = sum + index * index * index;
// }
// console.log(`Sum of Qubes of number is : ${sum}`);
// }
// sumOfQube();


function oddPositionedChars(givenString){
    var string = "";
    for (let index = 0; index <givenString .length; index++) {
        var char = givenString.charAt(index);
        if (index%2!=0 && char!=" ") {
            string = string + char;
        }
        
    }
    console.log("Odd positioned char are:");
    console.log(`${string}`);
   
}
oddPositionedChars("Hard work always pays back")
oddPositionedChars("Soon I will be Angular IT Champ")