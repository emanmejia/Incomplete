// When calling a function respecting the name and order of parameters is paramount!  

function presentation(name, age) {
  console.log(`Your name is ${name} and you're age is ${age} years old`);
}

presentation("Isabelle", 19); // "Your name is Isabelle and you're 19 years old."
presentation(5, "Brandon"); // "Your name is 5 and you're Brandon years old."

// The second call arguments are given in reverse order, so name gets the value 5 and age gets the "Brandon" for the call.