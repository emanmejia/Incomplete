// Square the given number x
function square1(x) {
    return `${x} squared = ` + x * x;  // Return the square of the number
  }
  
  // Square the given number x
  const square2 = x => `${x} squared = ` + x * x;  // Arrow function that returns the square of the number
  
  console.log(square1(0)); // Must show 0
  console.log(square1(2)); // Must show 4
  console.log(square1(5)); // Must show 25
  
  console.log(square2(0)); // Must show 0
  console.log(square2(2)); // Must show 4
  console.log(square2(5)); // Must show 25
  