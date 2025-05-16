// Nesting conditions.  If the code block associated to the first else is run, then the number has to be either strictly negative or zero.  Inside this block, a second if statement checks if the number is negative.  If it's not, we know for sure that it'z zero.

const number = Number(prompt("Enter a number:"));
if (number > 0) {
  console.log(`${number} is positive`);
} else {
  // number <= 0
  if (number < 0) {
  console.log(`${number} is negative`);} else {
  // number === 0 (equals)
  console.log(`${number} is zero`);
  }
}
