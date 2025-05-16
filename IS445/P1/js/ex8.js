// "And" operator - suppose you want to check if a number is between 0 and 100.  You would essentially check if it's "greater than or equal to 0" and "less than or equal to 100".  Both sub-conditions must be satisfied at the same time. 

const number = Number(prompt("Enter a number:"));
if ((number >= 0) && (number <= 100)) {
  console.log(`${number} is between 0 and 100, both included.`);
}

// && operator ("logical and") can apply to both types of boolean values.  True will only be the result of the statement if both conditions are true.

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false



// "Or" operator, now imagine you want to check that a number is outside the range of 0 and 100.  To meet this requirement, the number should be less than 0 or greater than 100.  

const number2 = Number(prompt("Enter a second number:"));
if ((number2 < 0) || (number2 > 100)) {
  console.log(`${number2} is not between 0 and 100.`);
}

// The || operator ("logical or") makes statements true if at least one of the statements is true. 

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// As logical expressions are evaluated left to right, they are tested for possible "short-circuit" evaluation.  In both cases below, expr is never even evaluated.  

console.log(false && expr); // false
console.log(true || expr); // true


// Here are a few examples illustrating this JS-specific behavior.

console.log(true && "Hello");     // "Hello"
console.log(false && "Hello");    // false
console.log(undefined && "Hello"); // undefined
console.log("" && "Hello");     // "" empty string
console.log("Hello" && "Goodbye");  // "Goodbye"

console.log(true || "Hello");     // true
console.log(false || "Hello");    // "Hello"
console.log(undefined || "Hello"); // "Hello"
console.log("" || "Hello");     // "Hello"
console.log("Hello" || "Goodbye");  // "Hello"



// "Not" operator - There is another opeator for when you know what you don't wnat: the not operator!  You'll use a ! for this. 

const number3 = Number(prompt("Enter a third number:"));
if (!(number3 > 100)) {
  console.log(`${number3} is less than or equal to 100`);
}

console.log(!true); // false
console.log(!false); // true