console.log("--------Fabonecci Series----------");
const number = 500 ;
let n1 = 0, n2 = 1, nextTerm;


nextTerm = n1 + n2;

while (nextTerm < number) {
   
    console.log( nextTerm);

    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
}
