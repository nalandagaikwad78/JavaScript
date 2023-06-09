"use strict";

const arrayNum = [11, 3, 4, 11, 4, 7, 3];
console.log(`given array is:${arrayNum}`);
 console.log(`-------After removing Duplicate elements-----`);
function removeDuplicates(arrayNum){
    return [...new Set(arrayNum)];
}
console.log(removeDuplicates(arrayNum));
 console.log(`Given string value is: "How are you mate"`);
function Capitalize(str){
    var spl =str.split(" ");
    var words = [];
    for (let i = 0; i < spl.length; i++) {
       for (let j = 0; j < spl[i].length; j++) {
        var word = spl[i];
        var size = spl[i].length;
        var firstLetterCapital = word.replace(word[0], word[0].toUpperCase()); 
        var LastLetterCapital = firstLetterCapital.replace(
            word[size - 1],
            word[size - 1].toUpperCase()
            );
       }
       words.push(LastLetterCapital) ;

    }
console.log(words.join(" "));
}
Capitalize("How are you mate");