// Function Contents - Return Value

// The choice between `return` and `console.log()` inside a function depends on the intended purpose of the function. 

// In dev `return` will allow for use case, where a result can be stored, manipulated, or used elsewhere.  Console.log is great but more for debugging and developers, not for users.  

function sayHello() {
  return "Hello!";
}

console.log("Start of program.");
const message = sayHello(); // Store the function return value in a variable.
console.log(message);
console.log("End of program");