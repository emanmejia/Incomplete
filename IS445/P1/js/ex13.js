/*function sayHello() {
  return "Hello";
}

console.log("Start of program");
const message = sayHello(); // Store the function return value in a variable
console.log(message); // Show the return value
console.log("End of program.");
*/


// This example is almost identical to ex12, but sayHello() funciton has changed:  The statement console.log("Hello!") was repalced by return "Hello!".

// The keyword return indicates that the function will return a value, which is specified immediately after the keyword.  This return value can be retrieved by the caller. 

// Simplied version of commented out section above. 

function sayHello() {
  return "Hello dude!";
}

console.log(sayHello()); // "Hello dude!"w