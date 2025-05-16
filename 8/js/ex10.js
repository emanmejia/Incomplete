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
const word = prompt("Please enter a word: ");

// Function to count vowels
function countVowels(str) {
  const vowels = "aeiouAEIOU"; // Define vowels (both lowercase and uppercase)
  let count = 0;

  for (const letter of str) {
    if (vowels.includes(letter)) {
      count++;
    }
  }

  return count;
}

// Function to reverse a word
function reverseWord(str) {
  return str.split("").reverse().join(""); // Splits, reverses, and joins back
}

// Check if the input is valid (not empty and has no spaces)
if (word && !word.includes(" ")) {
  const vowelCount = countVowels(word); // Get the number of vowels
  const reversed = reverseWord(word); // Get the reversed word

  console.log(`Your entry is: ${word}`);
  console.log(`The length of the word is: ${word.length}`);
  console.log(`Lowercase: ${word.toLowerCase()}`);
  console.log(`Uppercase: ${word.toUpperCase()}`);
  console.log(`Number of vowels: ${vowelCount}`);
  console.log(`Reversed: ${reversed}`);
} else {
  console.log("No valid entry: Please enter one word, no spaces.");
}
