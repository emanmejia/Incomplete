// Function to compute the number of vowels in a word
function countVowels(word) {
  // Convert the word to lowercase to make it case insensitive
  word = word.toLowerCase();

  // Define vowels (including 'y')
  const vowels = "aeiouy";
  let vowelCount = 0;

  // Loop through the word and count vowels
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      vowelCount++;
    }
  }
  return vowelCount;
}

// Function to check if the word is a palindrome
function isPalindrome(word) {
  // Convert the word to lowercase for case insensitive comparison
  word = word.toLowerCase();

  // Reverse the word and compare it with the original
  let reversedWord = word.split("").reverse().join("");
  return word === reversedWord;
}

// Main program to prompt user input
let userInput = prompt("Enter a word:");

let vowelCount = countVowels(userInput);
let palindromeCheck = isPalindrome(userInput);

if (palindromeCheck) {
  console.log(`${userInput} contains ${vowelCount} vowels and is a palindrome`);
} else {
  console.log(`${userInput} contains ${vowelCount} vowels and is not a palindrome`);
}
