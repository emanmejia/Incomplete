let num1 = 0;
{
  num1 = 1; // OK : num1 is declared in the parent block
  const num2 = 0;
}
console.log(num1); // Num1 was declared in the parent block. 
// console.log(num2); // Error! num2 is not visible.

// c is an expression whose value is 3
const c = 3;

// d is an expression whose value is the value of c (3 here)
let d = c;

// (d + 1) is an expression whose value is d's +1 (4 here)

d++; // d = d + 1 would have worked as well, but I like using the inccrement operator

console.log(d); // Show 4



let e = 3 + 2 * 4; // e contains 11 (3 + 8)
console.log(e);

e = (3 + 2) * 4; // e contains 20 (5 * 4)
console.log(e);


/* You can use backticks (`) to delimit the string in expressions.  This is called a template literal.  Inside a template literal, expressions are identified by the ${expression} syntax.

This is often used to create strings containing the values of some variables.
*/

const country = "Cambodia";
console.log(`I live in ${country}`); // Show "I live in Cambodia."
const x = 3;
const y = 7;
console.log(`${x} + ${y} = ${x + y}`); // Show "3 + 7 = 10"