// Number Comparison:  Lets write a program that accepts two numbers, then compares their values and displays an appropriate message in all cases.

// Prompt the user to input two numbers
let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");

// Convert the input values from strings to numbers
num1 = Number(num1);
num2 = Number(num2);

// Compare the two numbers and display appropriate messages
if (num1 > num2) {
  alert("The first number is greater than the second number.");
} else if (num1 < num2) {
  alert("The first number is smaller than the second number.");
} else {
  alert("Both numbers are equal.");
}
