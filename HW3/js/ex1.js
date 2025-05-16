/* Validate Input - The program has the following requirements:
Input
Ask the user for a number between 1 – 100.
Output
If the input is valid (substitute XX for the number entered):
	Thank you! You entered XX, a valid number.

For invalid input (substitute XX for input)
Sorry, XX is not a valid entry.
	
Test your program with numeric, non-numeric, spaces, and blank input.
Hint: 
See hands-on tutorial.  Recall the following:
isNaN(), Number.isInteger(), Number.parseInt()
*/

let userInput = prompt("Please enter a number between 1 and 100: ");

// Parse the input into an integer
let number = Number(userInput);

// Check if the input is a valid number and falls within the range of 1 to 100.
if (!isNaN(number) && Number.isInteger(number) && number >= 1 && number <= 100) {
  console.log(`Thank you!  You entered ${number}, a valid number.`);
} else {
  console.log(`Sorry, ${userInput} is not a valid number.`);
}