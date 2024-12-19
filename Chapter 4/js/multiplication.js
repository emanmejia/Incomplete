// Ask the user for a number
let number = prompt("Enter a number to show its multiplication table:");
number = Number(number); // Convert the input to a number

// Display the multiplication table for the entered number
for (let i = 1; i <= 12; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}