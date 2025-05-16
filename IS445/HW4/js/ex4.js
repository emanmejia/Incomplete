const values = [3, 11, 7, 2, 9, 10];

// Initialize variables for sum, min, and max
let sum = 0;
let min = values[0];
let max = values[0];

// Iterate through the array to calculate the sum, min, and max
for (let i = 0; i < values.length; i++) {
  sum += values[i];  // Add the current value to sum
  
  if (values[i] < min) {
    min = values[i];  // Update min if the current value is smaller
  }
  
  if (values[i] > max) {
    max = values[i];  // Update max if the current value is larger
  }
}

// Output the results
console.log(`Sum of all values: ${sum}`);
console.log(`Minimum value: ${min}`);
console.log(`Maximum value: ${max}`);
