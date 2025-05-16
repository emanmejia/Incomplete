// Ask the user for a number
let number;
do {
  number = prompt("Enter a number between 2 and 9 to show its multiplication table:");
  number = Number(number);
} while (number < 2 || number > 9 || isNaN(number)); // Check if the number is valid

// Display the multiplication table for the entered number
for (let i = 1; i <= 12; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}