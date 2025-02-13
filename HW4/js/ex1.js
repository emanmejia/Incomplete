// Define the calculate function to handle basic arithmetic operations
function calculate(num1, operator, num2) {
  // Check the operator and perform the corresponding operation
  if (operator === "+") {
    return num1 + num2;  // Addition
  } else if (operator === "-") {
    return num1 - num2;  // Subtraction
  } else if (operator === "*") {
    return num1 * num2;  // Multiplication
  } else if (operator === "/") {
    if (num2 === 0) {
      return Infinity;  // Division by zero returns Infinity
    } else {
      return num1 / num2;  // Division
    }
  } else {
    return "Invalid operator";  // In case of an invalid operator
  }
}

const num1 = Number(prompt("Enter the first number (Number1):"));
const num2 = Number(prompt("Enter the second number (Number2):"));
const operator = prompt("Enter the mathematical operation (+, -, *, /):");

// Call the calculator function and show the result
const result = calculate(num1, operator, num2);

// Log the full mathematical expression
console.log(num1 + ' ' + operator + ' ' + num2 + ' = ' + result);
