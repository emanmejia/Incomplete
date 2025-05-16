// Function to perform arithmetic operations
function calculate(num1, operator, num2) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      // Handle division by zero
      if (num2 === 0) {
        return Infinity;
      } else {
        return num1 / num2;
      }
    default:
      return "Invalid operator";
  }
}

console.log(calculate(4, "+", 6));  // Must show 10
console.log(calculate(4, "-", 6));  // Must show -2
console.log(calculate(2, "*", 0));  // Must show 0
console.log(calculate(12, "/", 0)); // Must show Infinity
