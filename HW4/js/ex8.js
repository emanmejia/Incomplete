// Generate a random number between 1 and 100 (inclusive)
const targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let userGuess;

// Loop until the user guesses the correct number
while (true) {
  // Prompt the user to enter a guess
  userGuess = parseInt(prompt("Guess a number between 1 and 100:"));

  // Increment the number of attempts
  attempts++;

  // Check if the guess is correct
  if (userGuess === targetNumber) {
    console.log(`Correct! It took you ${attempts} attempts to guess the correct number.`);
    break; // Exit the loop if the guess is correct
  } else if (userGuess < targetNumber) {
    // If the guess is too low
    console.log("Too low, guess again.");
  } else {
    // If the guess is too high
    console.log("Too high, guess again.");
  }
}
