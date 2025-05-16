const currentDay = prompt("What's today's day in the week?");
switch (currentDay) {
  case "Monday":
    console.log(`Today is ${currentDay}, tomorrow is Tuesday.`);
    break;
  case "Tuesday":
    console.log(`Today is ${currentDay}, tomorrow is Wednesday.`);
    break;
  case "Wednesday":
    console.log(`Today is ${currentDay}, tomorrow is Thursday.`);
    break;
  case "Thursday":
    console.log(`Today is ${currentDay}, tomorrow is Friday.`);
    break;
  case "Friday":
    console.log(`Today is ${currentDay}, tomorrow is Saturday.`);
    break;
  case "Saturday":
    console.log(`Today is ${currentDay}, tomorrow is Sunday.`);
    break;
  case "Sunday":
    console.log(`Today is ${currentDay}, tomorrow is Monday.`);
    break;
  default:
    console.log("Not a valid day in the week.  Days of the week are cap sensitive. ");
}
