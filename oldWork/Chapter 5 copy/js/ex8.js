// The function created in this example has no name:  It is anonymous.
// As you're soon discover, anonymous functions are heavily used in JavaScript.

// Here's how to create an anonymous function and assign it to a variable.

// Assignment of an anonymous function to the myFunc variable

const hello = (name) => {
  const message = `Hello, ${name}!`;
  return message;
};

console.log(hello("William")); // "Hello, William!"