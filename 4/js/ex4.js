/* Simple version - second asks for user input

for (let turn = 1; turn <= 10; turn++) {
  console.log(`Turn number: ${turn}`);
}

*/

// Prompt the user for the number of turns
let turns = prompt("Enter the number of turns for the carousel:");

// Convert the input to a number and validate it
turns = Number(turns);

// Check if the input is a valid positive integer
if (isNaN(turns) || turns <= 0) {
    console.log("Please enter a valid positive number for the turns.");
} else {
    // Carousel for the specified number of turns
    for (let turn = 1; turn <= turns; turn++) {
        console.log(`Turn number: ${turn}`);
    }
}
