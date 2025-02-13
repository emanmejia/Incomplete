function getArrayDetails(arr) {
  return {
    firstElement: arr[0],
    lastElement: arr[arr.length - 1],
    length: arr.length
  };
}

// Get user input as a string and split it into an array
let userInput = prompt("Enter numbers separated by commas (e.g., 1, 2, 3):");

// Convert the string into an array of numbers
let numberArray = userInput.split(',').map(Number);

// Get the details and log them
const result = getArrayDetails(numberArray);
console.log(result);
