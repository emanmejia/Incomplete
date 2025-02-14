// Function to check if a number is even
function isEven(number) {
  return number % 2 === 0;  // Returns true if even, false if odd
}

// Testing the function using a loop
for (let i = 1; i <= 10; i++) {
  console.log(`${i} - ${isEven(i)}`);
}


