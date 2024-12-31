/*13.	Write a program per the following
Input: A word
a.	Output:
•	Length of word
•	Lowercase value
•	Uppercase value
•	Let the user know if the word contains the letter "e"
o	If it does, at which index?
b.	Use a loop to display each character of the word
c.	Convert the word to an array, use a loop to display each character of in the array*/

// Step 1. Get input
const word = prompt("Enter a word:");

// Step 2. Output the required info

console.log("Length of the word:", word.length);
console.log("Lowercase value:", word.toLowerCase());
console.log("Uppercase value:", word.toUpperCase());

// Step 3. Check if the word contains the letter "e"
const indexOfE = word.indexOf("e");
if (indexOfE !== -1) {
  console.log(`The word contains the letter "e" at the index of ${indexOfE}`);
} else {
  console.log(`The word does not contain the letter "e".`);
}

// Step 4. Use a loop to display each character of the word
console.log("\nDisplaying each character using a for loop:");
for (let i = 0; i < word.length; i++) {
  console.log(word[i]);
}

// Step 5. Conver the word to an array and display each character using a loop
console.log("\nDisplaying each character after converting to an array:");
const wordArray = word.split("");  // Convert the string to an array of characters
for (let i = 0; i < wordArray.length; i++) {
  console.log(wordArray[i]);
}