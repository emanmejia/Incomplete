// You may convert a string's text to lowercase by calling the toLowerCase() method. Alternatively, you may do the same with toUpperCase() to convert a string to uppercase.

const originalWord = "Bora-Bora";
console.log(originalWord);

const lowercaseWord = originalWord.toLowerCase();
console.log(lowercaseWord); // "bora-bora"

const uppercaseWord = originalWord.toUpperCase();
console.log(uppercaseWord); // "BORA-BORA"

// toLowerCase() and toUpperCase() are two string methods. Like every string method, both have no affect on the initial value and return a new string.

// It is IMPORTANT to understand that once created, a string value never changes:  strings are **immutable** in JavaScript. 

