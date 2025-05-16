// A parameter is information that the function needs in order to work.  The function parameters are defined in parentheses immediately following the name of the function.  You can then use the parameter value in the body of the function.

function sayHello(name) {
  const message = `Hello, ${name}!`;
  return message;
}

console.log(sayHello("Emmanuel")); // "Hello, Emmanuel!"
console.log(sayHello("Mario")); // "Hello, Mario!"

// Both of these are running "Hello, ${name}" which allows input to the parameter. 

// The number of parameters is not limited, but more than 3 or 4 is rarely used.

function sayHello2(name2) {
  const message = `Hello, ${name2}!`;
  return message;
}

let name2 = "Dale";
console.log(sayHello(name2));
name2 = "Bill";
console.log(sayHello(name2));

// When calling a function, respecting the number and order of parameters is paramount!  

function presentation(name, age) {
  console.log(`Your name is ${name} and you're ${age} years old.`);
}
presentation("Mario", 69); // "Your name is Mario and you're 69 years old."
presentation(30, "Emmanuel"); // BAD! "Your name is 30 and you're Emmanuel years old." 

// The second call arguments are given in reverse order, so name gets the value 30 and age gets "Emmanuel" for that call. 