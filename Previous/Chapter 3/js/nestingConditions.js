const number = Number(prompt("Enter a number:"));
if (number > 0) {
  console.log(`${number} is positive.`)
} else {
  // if number <= 0
  if (number < 0) {
    console.log(`${number} is negative.`);
  } else {
    // number === 0
    console.log(`${number} is zero.`)
  }
}