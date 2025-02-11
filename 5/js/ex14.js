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

// Test the function with various operations
console.log(calculate(4, "+", 6));  // Must show 10
console.log(calculate(4, "-", 6));  // Must show -2
console.log(calculate(2, "*", 0));  // Must show 0
console.log(calculate(12, "/", 0)); // Must show Infinity
