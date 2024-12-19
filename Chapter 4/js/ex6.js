// Ask the user for the starting number
let startNumber = prompt("Enter a starting number: ");
startNumber = Number(startNumber); // Convert the input to a number

// Check if the input is a valid number and proceed
if (startNumber === NaN || startNumber <= 0) {
  alert("Please enter a valid positive number.");
} else {
  // Loop for 10 turns, starting with the user-specified number
  for (let i = 0; i < 10; i++) {
    let currentNumber = startNumber + i;
    
    // Check if the current number is odd or even
    if (currentNumber % 2 === 0) {
      console.log(currentNumber + " is even");
    } else {
      console.log(currentNumber + " is odd");
    }
  }
}
