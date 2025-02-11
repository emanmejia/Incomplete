// Ask the user for a number
let input = prompt("Enter a number to generate its multiplication table:");

// Convert the input to a number
let number = Number(input);

// Validate that the input is a valid number - we allow for integers in this test. 
if (isNaN(number)) {
  console.log("Sorry, input is not a valid number.");
} else {
  // Loop through 0 to 10 and display the multiplication
  for (let i = 0; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
}
