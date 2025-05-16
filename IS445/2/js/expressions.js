// c is an expression whose value is 3
const c = 3;
// d is an expression whose value is the value of c (3 here)
let d = c;
// (d + 1) is an expression whose value is d's + 1 (4 here)
d = d + 1; // d now contains the value 4
console.log(d); // Show 4

/*
An expression is a piece of code that produces a value. An expression is created by combining variables, values and operators. Every expression has a value and thus a type. Calculating an expression's value is called evaluation. During evaluation, variables are replaced by their values.
*/

// Operator priority inside an expression is the same as in math.  However, an expression can integrate parenthesis that modify these priorities.

let e = 3 + 2 * 4; // e contains 11 (3 + 8)
e = (3 + 2) * 4;  // e contains 20 (5 * 4)
console.log(e);

// It is possible to include expressions in a string by using backticks (`) to delimit the string. Such a string is called a template literal. Inside a template literal, expressions are identified by the ${expression} syntax.

// This is often used to create strings containing the values of some variables.

const country = "Cambodia";
console.log(`I live in ${country}`); // Show "I live in Cambodia"
const x = 4;
const y = 20;
console.log(`${x} + ${y} = ${x + y}`); // Show "4 + 20 = 24"