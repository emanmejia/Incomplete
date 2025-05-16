// IMPLICIT conversions, an expression's evaluation can result in type conversions.
// For example, using the '+' operator between a string and a number causes the concatenation of the two values into a string result.

const f = 100;
// Show " Variable f contains the value 100"
console.log("Variable f contains the value " + f);

// JS is extremely tolerant in terms of type conversion.  However, sometimes conversion isn't possible.  If a value fails to convert into a number, you'll get the result NaN

const g = "five" * 2;
console.log(g); // Show NaN

// Sometimes you'll wish to convert the value of another type.  This is called explicit conversion.  JavaScript has the Number() and String() commands that convert the value between the parenthesis to a number or a string.

const h = "5";
console.log(h + 1); // Concatenation: shows the string "51"
const i = Number("5");
console.log(i + 1); // Numerical addition: show the number 6