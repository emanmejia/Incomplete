
// Ask the user for the number of turns
let numberOfTurns = prompt("How many turns should the carousel run?");
numberOfTurns = Number(numberOfTurns); // Convert the input to a number

// Check if the numberOfTurns is a valid positive integer
if (numberOfTurns <= 0 || numberOfTurns % 1 !== 0) {
  alert("Please enter a valid positive integer for the number of turns.");
} else {
  // Carousel for user-specified number of turns
  for (let turn = 1; turn <= numberOfTurns; turn++) {
    console.log(`Turn ${turn}`);
  }
}
