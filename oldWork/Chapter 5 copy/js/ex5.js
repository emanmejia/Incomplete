// Just like with local variables, parameter scope is limited to the function body.
// Thus, an external variable used as an argument in a function call may have the same name as function parameter.  The following example is perfectly valid.

function sayHello(name) {
  // Here, "name" is the function parameter
  const message = `Hello, ${name}!`;
  return message;
}

// Here, "name" is a variable used as an argument
let name = "Emmanuel";
console.log(sayHello(name));
name = "Jose";
console.log(sayHello(name));