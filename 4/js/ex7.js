let userInput;

// Continue asking for input until "yes" or "no" is typed
do {
    userInput = prompt("Please type something (type 'yes' or 'no' to stop):").toLowerCase();  // Convert input to lowercase
} while (userInput !== "yes" && userInput !== "no");

console.log(`You typed "${userInput}", and the game is over.`);
