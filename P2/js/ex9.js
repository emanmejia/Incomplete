// Write a program that accepts a month number (between 1 and 12), then shows the number of dats of that month.  Leap years are excluded.  Incorrect inputs must be taken into account. 

const month = prompt("Enter a number to correspond with a month.  Only enter numbers between 1-12");
switch (month) {
  case "1":
    console.log(`You entered January, there are 31 days in this month.`);
    break;
  case "2":
    console.log(`You entered February, there are 28 days in this month.`);
    break;
  case "3":
    console.log(`You entered March, there are 31 days in this month.`);
    break;
  case "4":
    console.log(`You entered April, there are 30 days in this month.`);
    break;
  case "5":
    console.log(`You entered May, there are 31 days in this month.`);
    break;
  case "6":
    console.log(`You entered June, there are 30 days in this month.`);
    break;
  case "7":
    console.log(`You entered July, there are 31 days in this month.`);
    break;
  case "8":
    console.log(`You entered August, there are 31 days in this month.`);
    break;
  case "9":
    console.log(`You entered September, there are 30 days in this month.`);
    break;
  case "10":
    console.log(`You entered October, there are 31 days in this month.`);
    break;
  case "11":
    console.log(`You entered November, there are 30 days in this month.`);
    break;
  case "12":
    console.log(`You entered December, there are 31 days in this month.`);
    break;
  default:
    console.log("Not a valid input.  We are looking for months via the numbers 1-12.  Please refresh the page.");
}
