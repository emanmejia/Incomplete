// Square the given number x
const square1 = x => x * x;  // Arrow function that returns the square of the number

// Loop to print the square of every number between 0 and 10
for (let i = 0; i <= 10; i++) {
  console.log(`square1(${i}) = ${square1(i)}`);
}
