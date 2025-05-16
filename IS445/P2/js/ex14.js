let number;

/*  This version will work for any number 100 or less.
do {
  number = prompt("Please enter a number")
} while (number >= 100); // reviews if the number is greater than 50 but less than or equal to 100.

alert("You entered a valid number: " + number);
*/

// The version below will only accept numbers greater than 50, or less than or equal to 100. 

do {
  number = prompt("Please enter a number")
} while (number < 50 || number >= 100);

alert("You entered a valid number: " + number);