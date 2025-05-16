/*
The reduce() method applies a provided function to each array element in order to reduce it to one value. This method is typically used to perform calculations on an array.

Here's an example of reducing an array to the sum of its values.
*/
const numbers = [1, 5, 10, 15];
// Compute the sum of array elements
const sum = numbers.reduce((acc, value) => acc + value, 0);

console.log(numbers); // [1, 5, 10, 15] (no change)
console.log(sum);     // 31