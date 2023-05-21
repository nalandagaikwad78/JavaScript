function mothOfYear(monthNumber) {
  switch (monthNumber) {
    case 1:
      console.log(`Month is:january as month number is ${monthNumber}`);
      break;
    case 2:
      console.log(`Month is:february as month number is ${monthNumber}`);
      break;
    case 3:
      console.log(`Month is:March as month number is ${monthNumber}`);
      break;
    case 4:
      console.log(`Month is:April as month number is ${monthNumber}`);
      break;
    case 5:
      console.log(`Month is:May as month number is ${monthNumber}`);
      break;
    case 6:
      console.log(`Month is:Jun as month number is ${monthNumber}`);
      break;
    case 7:
      console.log(`Month is:July as month number is ${monthNumber}`);
      break;
    case 8:
      console.log(`Month is:August as month number is ${monthNumber}`);
      break;
    case 9:
      console.log(`Month is:Saptember as month number is ${monthNumber}`);
      break;
    case 10:
      console.log(`Month is:October as month number is ${monthNumber}`);
      break;
    case 11:
      console.log(`Month is:November as month number is ${monthNumber}`);
      break;
    case 12:
      console.log(`Month is:December as month number is ${monthNumber}`);
      break;
    default:
      console.log(`Invalid input ==>  ${monthNumber}`);
      break;
  }
}
mothOfYear(0);
mothOfYear(2);
mothOfYear(5);
mothOfYear(12);
mothOfYear(15);
mothOfYear(100);
mothOfYear(null);
mothOfYear(undefined);
