// Parameter Passing
// A parameter is information that the function needs in order to work.
// The function paramets are defined in parantheses immediately following the name of the function.  You can then use the parameter value in the body of the function.

// You supply the parameter value when calling the function.  This value is called an argument.

// Let's edit EX3 to add a personalized greeting.

function sayHello(name) {
  const message = `Hello, ${name}!`
  return message;
}

console.log(sayHello("Emmanuel"));
console.log(sayHello("Jose"));