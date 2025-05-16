// Loop through numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
  // Check if the number is divisible by both 3 and 5
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  }
  // Check if the number is divisible by 3 and not 5
  else if (i % 3 === 0) {
    console.log("Fizz");
  }
  // Check if the number is divisible by 5 and not 3
  else if (i % 5 === 0) {
    console.log("Buzz");
  }
  // Otherwise, show the number itself
  else {
    console.log(i);
  }
}
