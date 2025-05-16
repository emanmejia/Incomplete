// Declaration is not the only way to create functions in JavaScript.  Check out this example.


const hello = function(name) {
  const message = `Hello, ${name}!`;
  return message;
};

console.log(hello("Hank")); // "Hello Hank!"

/* 
In this example, the function is assigned to the hello variable.  The value of this variable is a function.  We call the function using that variable.  This is an example of a function expression.  A function expression defines a function as part of a larger expression, typically a variable assignment.

The function created in this example has no name: it is anonymous.  A syou'll soon discover, anonymous functions are heavily used in JavaScript.

Here's how to create an anonymous function and asssign it to a variable. 

*/

const hello2 = (firstName) => {
  const message = `Hello, ${firstName}!`;
  return message;
};

console.log(hello2("Jose")); // "Hello, Jose!"

// functions created this way are called fat arrow functions.

/* Fat arrow function syntax can be further simplified in some particular cases:
- When there's only one statement in the function body, everything can be written on the same line iwthout curly braces.  The return statement is omitted and implicit.
- When the function accepts only one paraemter, parentheses around ti can be omitted.

*/

// Minimalist fat arrow function to the max

const hello3 = name3 => `Hello, ${name3}!`;
console.log(hello3("Kate")); // "Hello, Kate!"