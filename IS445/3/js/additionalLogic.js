// You want to check if a number is between 0 and 100.  You are checking if it's "greater than or equal to 0" and "less than or equal to 100".

const number = Number(prompt("Enter a number:"));
if ((number >= 0) && (number <= 100)) {
  console.log(`${number} is between 0 and 100, both included`)
}