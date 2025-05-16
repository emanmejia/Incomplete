// Type conversions.

/* An expression's evaluation can result in type conversions.  These are called implicit conversions, as they happen automatically without the programmer's intervention.  For example, using the + operator between a string and a number causes the concatenation of the two values into a string result. 
*/

const f = 100;
// show "Variable f contains the value 100"
console.log("Variable f contains the value " + f);

// Javascript handles type converions well, but if it fails to convert into a number you will get NaN (Not a Number).

const g = "five" * 2;
console.log(g); // show NaN

// Using explicit conversions, JS has Number() and String() commands that convert the value between the parenthesis to a number or a string.
const h = "5";
console.log(h + 1); // Concatenation: show the string "51"

const i = Number("5");
console.log(i + 1); // Numerical addition: show the number 6 