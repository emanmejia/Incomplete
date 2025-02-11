function countE(word) {
  // Convert the word to lowercase to make the function case insensitive
  const lowerCaseWord = word.toLowerCase();

  // Use a regular expression to match the letter "e" globally in the word
  const matches = lowerCaseWord.match(/e/g);

  // Return the number of matches (or 0 if no matches were found)
  return matches ? matches.length : 0;
}

// Get user input via prompt
const userInput = prompt("Enter a word to count the letter 'e':");

// Call the function with the user's input and display the result in the console
const result = countE(userInput);
console.log(result);
console.log(`The letter "e" appears ${result} times in the word "${userInput}".`);
