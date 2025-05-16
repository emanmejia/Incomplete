const values = [3, 11, 7, 2, 9, 10];

// Calculate the maximum value in the array
let max = values[0]; // Start with the first element as the initial max

for (let i = 1; i < values.length; i++) {
  if (values[i] > max) {
    max = values[i]; // Update max if a larger value is found
  }
}

// Show the maximum value
console.log("The maximum value in the array is:", max);
