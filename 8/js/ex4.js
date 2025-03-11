// Strings as sets of characters.
/* You may think of a string as an array of characters. Each character is identified by a number called an index, just as it does for an array. The same golden rules apply: 
- The index of the first character in a string is 0, not 1.
The higest index number is the string's length minus 1. 
*/


// accessing a particular charactr by its index. 
const sport = "basketball";
console.log(sport[0]);
console.log(sport[6]);
console.log(sport[9]);
console.log(sport[10]);

// Iterating over a string
const name = "Yossaphinie";
console.log(name[0]); // "Y"
console.log(name[1]); // "o"
console.log(name[2]); // "s"
console.log(name[3]); // "s"
console.log(name[4]); // "a"
console.log(name[5]); // "p"
console.log(name[6]); // "h"
console.log(name[7]); // "i"
console.log(name[8]); // "n"
console.log(name[9]); // "i"
console.log(name[10]); // "e"

console.log("--------") // Break

// Very impracticle, we need to form concepts, like a Loop in this case.

for (let i = 0; i < name.length; i++) {
  console.log(name[i]);
} // Shows each array element using a for loop.

console.log("--------") // Break


// new JavaScript evolution to iterate over a sring: the for-of loop.  The previous example may also be written:
const name2 = "Emmanuel";
for (const letter of name2) {
  console.log(letter);
}