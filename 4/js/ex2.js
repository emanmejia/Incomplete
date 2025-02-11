/*  This is the correct one:
let number;
for (number = 1; number <= 5; number++) {
  console.log(number);
}

This one has an i error as it is outside of the loop.
for (let i = 1; i <= 5; i++) {
  console.log(i); // OK
}
console.log(i); // Error: the i variable is not visible here
*/

for (let i = 1; i <= 5; i++) {
  console.log(i);
  i++; // The i variable is updated in the loop body
}
// this will only show 1, 3 and 5 as i++ is a double increment, just keep it in the first line.  

