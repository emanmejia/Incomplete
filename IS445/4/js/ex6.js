/*
// Ask the user for a number
let number = prompt("Enter a number to show its multiplication table:");

// Convert the input to a number
number = Number(number);

// Generate and display the multiplication table
for (let i = 1; i <= 10; i++) {
    let result = number * i;
    console.log(`${number} x ${i} = ${result}`);
}


*/let number;

// Ask for a number between 2 and 9
do {
    number = prompt("Enter a number between 2 and 9 for the multiplication table:");
    number = Number(number);  // Convert input to a number

    // Check for invalid input
    if (isNaN(number)) {
        console.log("Error: You must enter a valid number.");
    } else if (number < 2 || number > 9) {
        console.log("Error: The number must be between 2 and 9.");
    }

} while (isNaN(number) || number < 2 || number > 9);  // Validate the input

// Generate and display the multiplication table
for (let i = 1; i <= 12; i++) {
    let result = number * i;
    console.log(`${number} x ${i} = ${result}`);
}
