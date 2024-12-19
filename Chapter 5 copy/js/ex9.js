// FAT arrow function syntax can be further simplified in some particular cases:

// When there's only one statement in the function body, evertyhing can be written on the same line without curly braces.  The return statements is ommited and implicit.
// When the function accepts only one parameter, parentheses around it can be omitted.

//Minimilist to the max.
const hello = name => `Hello, ${name}!`;
console.log(hello("Tatiana")); // "Hello, Tatiana!"