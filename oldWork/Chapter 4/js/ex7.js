/* Continue asking for a number until it's <= 100
let number;
do {
  number = prompt("Please enter a number:");
  number = Number(number);  // Convert the input to a number
} while (number > 100);

console.log("The entered number is " + number);  // Display the result
*/

// Continue asking for a number until it's between 50 and 100
let number;
do {
  number = prompt("Please enter a number between 50 and 100:");
  number = Number(number);  // Convert the input to a number
} while (number < 50 || number > 100);

console.log("The entered number is " + number);  // Display the result
