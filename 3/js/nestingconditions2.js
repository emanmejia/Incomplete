// A more concisde way to write our example.  When the only statement in an else block is an if.  In that case, you can write the else on the same line as if and without braces. 

const number = Number(prompt("Enter a number:"));
if (number > 0) {
  console.log(`${number} is positive`);
} else if (number < 0) {
  console.log(`${number} is negative.`);
} else {
  console.log(`${number} is zero.`)
}