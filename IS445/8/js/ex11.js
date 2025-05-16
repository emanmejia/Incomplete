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

// Function to check if the word is a palindrome
function isPalindrome(str) {
  const lowerStr = str.toLowerCase(); // Convert to lowercase for case-insensitive comparison
  return lowerStr === reverseWord(lowerStr); // Compare original with reversed version
}

// Check if the input is valid (only letters, no spaces)
if (word && /^[A-Za-z]+$/.test(word)) {
  const vowelCount = countVowels(word); // Get the number of vowels
  const reversed = reverseWord(word); // Get the reversed word
  const palindromeCheck = isPalindrome(word) ? "Yes, it's a palindrome!" : "No, it's not a palindrome.";

  console.log(`Your entry is: ${word}`);
  console.log(`The length of the word is: ${word.length}`);
  console.log(`Lowercase: ${word.toLowerCase()}`);
  console.log(`Uppercase: ${word.toUpperCase()}`);
  console.log(`Number of vowels: ${vowelCount}`);
  console.log(`Reversed: ${reversed}`);
  console.log(`Palindrome Check: ${palindromeCheck}`);
} else {
  console.log("Invalid entry: Please enter a single word with only letters (no spaces, numbers, or special characters).");
}
