// Conditional Execution

// Suppose we want to write a program that asks the user to enter a number and then displays a message if the number is positive.

const number = Number(prompt("Enter a number:"));
if (number > 0) {
  console.log(`${number} is positive.`);
} else {
  // number <= 0
  if (number < 0) {
    console.log(`${number} is negative.`);
  } else {
    // number === 0
    console.log(`${number} is zero`);
  }
}

const number2 = Number(prompt("Enter a second number:"));
if (number2 > 0) {
  console.log(`${number2} is positive`);
} else if (number2 < 0) {
  console.log(`${number2} is negative`);
} else {
  console.log(`${number2} is zero.`)
}