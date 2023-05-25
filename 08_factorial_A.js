function factorialOfNum(num) {

    if (num==undefined || num==null || isNaN(num)) {
        console.log(`${num}`,`:is invalid`);
        return;
    }
var factorial = 1; 
for (let index = num; index >= 1; index--) { 
    factorial = factorial * index;
}
 console.log(`factorial of ${num} is ${factorial}`);
}


factorialOfNum(5);
factorialOfNum(3);
factorialOfNum(8);
factorialOfNum(9);
factorialOfNum(0);
factorialOfNum(null);
factorialOfNum(undefined);
factorialOfNum(NaN);
