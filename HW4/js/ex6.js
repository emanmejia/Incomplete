let words = [];
let userInput;

while (true) {
  userInput = prompt("Enter a word (type 'stop' to finish):");

  // Check if the input is "stop" (case insensitive)
  if (userInput.toLowerCase() === "stop") {
    // If no words are entered before "stop"
    if (words.length === 0) {
      console.log("No words to display, 'stop' was the first word entered.");
    } else {
      // Display the words entered before "stop"
      console.log("You entered the following words:");
      words.forEach(word => console.log(word));
    }
    break; // Exit the loop
  } else {
    words.push(userInput); // Add the word to the array
  }
}
