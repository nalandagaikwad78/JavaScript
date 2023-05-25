function countCharA(word) {   
var count = 0;
for (let index = 0; index < word.length; index++) {
    var char = word.charAt(index); 
    if (char == 'a' ||char == 'A'){
        console.log(char);
        count++;
    }
}
console.log(`Count the total number characters 'a' or 'A': ${count}`);
}
countCharA("I AM Learning Javascript, The Language of internet")
countCharA("My favorite movie is LAggAn")