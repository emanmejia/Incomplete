//The && and || operators can also be applied to non-boolean values.  In these cases, they may not return a boolean value.

// * expr1 && expr2 returns expr1 if this expression can be converted to false.  Otherwise it returns expr2.

// the and operator accomodates
console.log(true && "hello"); // "Hello"
console.log(false && "hello"); // false
console.log(undefined && "hello"); // undefined
console.log("" && "hello"); // ""
console.log("Hello" && "Goodbye"); // "goodbye"

// expr1 || expr2 returns expr1 if the expression can be converted to true.  Otherwise it returns expr2.

// the or operator accomodates 
console.log(true || "hello"); // true
console.log(false || "hello"); // hello
console.log(undefined || "hello"); // hello
console.log("" || "hello"); //  hello
console.log("Hello" || "Goodbye"); // hello