//You'll often want to have your code execute on way when something's true and another way when something's false.

// The else statement

const number = Number(prompt("Enter a number:"));
if (number > 0) {
  console.log(`${number} is positive`);
}
else {
  console.log(`${number} is negative or zero`)
}