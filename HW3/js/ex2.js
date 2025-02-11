/*2.	Class Standing - The program has the following requirements:
Input
Ask the user for their name and number of units completed at college (use prompt(s)).  
Validate input (integer  >= 0, check for non-numeric or decimal entry)

For invalid input, display an appropriate message. 

Output
Output the following message (Text in Italics will change depending on input)
Hello NameEntered
Your grade standing is GradeStanding

NameEntered – This is the name entered
GradeStanding – Calculate as follows:
Number of units:
0 – 30: 	Freshman
31 – 60: 	Sophomore
61 – 90:	Junior
> 91:	Senior
*/
let name = prompt("Please enter your name:");

//Ask the user for their completed units.
let unitsCompleted = prompt("Please enter the number of units completed in college: ");

// Convert the input to a number.
let units = Number(unitsCompleted);

if (isNaN(units) || !Number.isInteger(units) || units < 0) {
  console.log("Sorry, the number of units is not valid.  Please enter a non-negative number.");
} else {
  let gradeStanding;

  if (units >= 0 && units <= 30) {
    gradeStanding = "Freshman";
  } else if (units >= 31 && units <= 60) {
    gradeStanding = "Sophomore";
  } else if (units >= 61 && units <= 90) {
    gradeStanding = "Junior";
  } else if (units >= 91 && units <= 120) {
    gradeStanding = "Senior";
  } else if (units >= 121 ) {
    gradeStanding = "Super Senior"
  }

  // Output
  console.log(`Hello ${name}`);
  console.log(`Your grade standing is ${gradeStanding}`)
}
