// Say hello to the user
function sayHello(firstName, lastName) {
  const message = `Hello, ${firstName} ${lastName}!`;
  return message;
}

// Ask user for first and last name
const firstName = prompt("Enter your first name: ");
const lastName = prompt("Enter your last name: ");

// Call sayHello() and show its result
const output = sayHello(firstName, lastName);
console.log(output); // Output the message to the console
