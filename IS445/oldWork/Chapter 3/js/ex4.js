const number = Number(prompt("Enter a number:"));
/*if ((number > 0) && (number <= 100)) {
  console.log(`${number} is between 0 and 100, both included`)
} else {
  console.log("Wrong number bozo.")
}
*/

// Try it with the "Or" operator

if ((number < 0) || (number > 100)) {
  console.log(`${number} is not in between 0 and 100`)
} else {
  console.log(`${number} is between 0 and 100.`)
}
