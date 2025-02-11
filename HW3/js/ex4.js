// Ask the user for two integer numbers
let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");

// Convert the inputs to numbers
num1 = Number(num1);
num2 = Number(num2);

// Check if both inputs are valid integers
if (isNaN(num1) || isNaN(num2) || !Number.isInteger(num1) || !Number.isInteger(num2)) {
  console.log("Sorry, both inputs must be valid integers.");
} else {
  // Perform the mathematical operations
  let sum = num1 + num2;
  let difference = num1 - num2;
  let product = num1 * num2;
  let quotient = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";  // Division by zero check
  let remainder = num2 !== 0 ? num1 % num2 : "Cannot compute modulo by zero";  // Modulo by zero check

  // Note that the question mark is working as a ternary operator.  It is checking num2 via !== 0, and if it is true then it can proceed.  If false it assigns string "Cannot dvide or Compute Modulo"...

  // Output the results
  console.log(`${num1} + ${num2} = ${sum}`);
  console.log(`${num1} - ${num2} = ${difference}`);
  console.log(`${num1} * ${num2} = ${product}`);
  console.log(`${num1} / ${num2} = ${quotient}`);
  console.log(`${num1} % ${num2} = ${remainder}`);
}
