let isPalindrome = (string) => {
    return string === string.split("").reverse().join("");
};
 
console.log(" madam is Palindrome? : " + isPalindrome("madam"));
console.log("--------------------------------------------");
console.log("141 is Palindrome?: " + isPalindrome("141"));
console.log("--------------------------------------------");
console.log("Sunday is Palindrome?: " + isPalindrome("Sunday"));
console.log("--------------------------------------------");
console.log("mom is Palindrome?: " + isPalindrome("mom"));
console.log("--------------------------------------------");
console.log("listen is Palindrome?: " + isPalindrome("listen"));
console.log("--------------------------------------------");
console.log("dad is Palindrome?: " + isPalindrome("dad"));