// Parameter Passing
// A parameter is information that the function needs in order to work.
// The function paramets are defined in parantheses immediately following the name of the function.  You can then use the parameter value in the body of the function.

// You supply the parameter value when calling the function.  This value is called an argument.

// Let's edit EX3 to add a personalized greeting.

function sayHello(firstName, lastName) {
  const message = `Hello, ${firstName} ${lastName}!`
  return message;
}

firstName = prompt("Enter your first name:");
lastName = prompt("Enter your last name:");
alert(sayHello(firstName, lastName));  // Calls function via Alert function
console.log(sayHello(firstName, lastName)); // Calls function via Console Log. 