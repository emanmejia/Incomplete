// Valid code, commenting out to test for only one word input:
/*
const word = prompt("Please enter a word: ");

// Check if the input is valid.
if (word) {
  console.log(`Your entry is: ${word}`)
  console.log(`The length of the word is: ${word.length}`);
  console.log(`Lowercase: ${word.toLowerCase()}`);
  console.log(`Uppercase: ${word.toUpperCase()}`);
} else {
  console.log("No valid entry: ");
}

// Ask the user for a word
const word = prompt("Please enter a single word (letters only, no spaces or numbers):");

// Check if the input is valid (only letters, no spaces, no numbers, no special characters)
if (word && /^[A-Za-z]+$/.test(word)) {
  console.log(`Your entry is: ${word}`);
  console.log(`The length of the word is: ${word.length}`);
  console.log(`Lowercase: ${word.toLowerCase()}`);
  console.log(`Uppercase: ${word.toUpperCase()}`);
} else {
  console.log("Invalid entry: Please enter a single word with only letters (no spaces, numbers, or special characters).");
}
*/

let word;

while (true) {
  word = prompt("Please enter a single word (letters only, no spaces or numbers):");

  // Check if the input is valid (only letters, no spaces, numbers, or special characters)
  if (word && /^[A-Za-z]+$/.test(word)) {
    console.log(`Your entry is: ${word}`);
    console.log(`The length of the word is: ${word.length}`);
    console.log(`Lowercase: ${word.toLowerCase()}`);
    console.log(`Uppercase: ${word.toUpperCase()}`);
    break; // Exit the loop once a valid word is entered
  } else {
    alert("Invalid entry! Please enter a single word with only letters (no spaces, numbers, or special characters).");
  }
}
