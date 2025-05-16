// You can declare variables inside a fucntion, as in the example below.

function sayHello() {
  const message = "Hello dude!";
  return message;
}

console.log(sayHello()); // "Hello dude!"

// The function sayHello() declares a variable names message and returns its value.

// The variable decalred in the body of a function are called local variables.  Their scope is limited to the function body (hence their name).  If you try to use these local variables outside the function, you won't be able to!

function sayGoodbye() {
  const message = "Goodbye!";
  return message;
}

console.log(sayGoodbye()); // "Goodbye!"
console.log(message); // Error: the message variable is not visible here.

// Each function call will redeclare the function's local variables, making the calls perfectly independent from one another.  

// Not being able to use local variables outside the functions in which they are declared may seem like a limitation.  Actually, it's a good thing!  This means functions can be designed as autonomous and reusable.  moreover, this prevents naming conflicts:  allowing variables declared in different functions to have the same name.  

