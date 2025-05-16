// Predict the output of the following code.  Then execute the code to verify.

const word = "koala";  // koala
console.log(word === "koala");  // true
console.log(word === "kangaroo");  // false
console.log(word === "Koala");  // false
console.log(word === "KOALA");  // false
console.log(word.toUpperCase() === "KOALA");  // true
console.log(word === "Koala".toLowerCase());  // false
