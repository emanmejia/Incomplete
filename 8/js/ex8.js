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
*/

const word = prompt("Please enter a word: ");

// Check if the input is valid (not empty and has no spaces)
if (word && !word.includes(" ")) {
  console.log(`Your entry is: ${word}`)
  console.log(`The length of the word is: ${word.length}`);
  console.log(`Lowercase: ${word.toLowerCase()}`);
  console.log(`Uppercase: ${word.toUpperCase()}`);
} else {
  console.log("No valid entry: Please enter one word, no spaces.");
}