

function checkLeapYear(leapYear) {
    
if (leapYear==null || leapYear==undefined || isNaN(leapYear)) {
    console.log(`${leapYear}: is Invalid data `);
 } else {
    if (leapYear==NaN || leapYear=="") {
        console.log(`${leapYear}: is valid data `);
    } else {
       if ((leapYear%4==0) && (leapYear%100!=0) || (leapYear%400==0)) {
        console.log(leapYear+`  is a leap year`);
       } else {
        console.log(leapYear+`  is not leap year`);
       } 
    }
  }
}  
checkLeapYear(2020);
checkLeapYear(1999);
checkLeapYear(1600);
checkLeapYear(1750);
checkLeapYear(2022);
checkLeapYear(1945);
checkLeapYear(null);
checkLeapYear("Twenty Twenty");
checkLeapYear(undefined);
checkLeapYear(NaN);