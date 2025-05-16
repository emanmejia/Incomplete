// Work with strings.
/* Strings Recap:
- A string value represents text.
- In JavaScript, a string is defined by placing text within single quotas ('I am a string').
- You may use special characters within a string by prefacing them with \ ("backslash") follow by another character.  For example:
\n to add a line break.
The + operator concatenates (combines or adds) two or more strings.

Beyond the basic uses, strings have even more versatility.
*/

// To obtain the length of a string (the number of characters it contains), add .length to it.  The length will be returned as an integer.
console.log("ABC".length); // 3

const str = "I am a string";
const len = str.length;
console.log(len); // 13

// Although string values are primitive JavaScript types, some properties and methods can be applied to them just as if they were objects using the dot notation.  Length is one of those properties.

