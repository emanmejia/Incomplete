// Declaration is not the only way to create functions in JavaScript.  Check out this example.

const hello = function(name) {
  const message = `Hello, ${name}!`;
  return message;
};

console.log(hello("Richard")); // "Hello, Richard"