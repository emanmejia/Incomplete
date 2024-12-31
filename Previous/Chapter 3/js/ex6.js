// In JavaScript, a value or an expression that can be converted to false is said to be falsy. If, on the contrary, it can be converted to true, it is so-called truthy. All values are considered truthy except for the following falsy ones:

/*

    false (obviously!)
    undefined
    null
    NaN (Not A Number)
    0
    "" or ''
*/

//Here are a few examples illustrating this JS-specific behaviour.

// Using the && operator ("logical and") can apply to both types of boolean values. true will only be the result of the statement if both conditions are true. 

console.log(true && "Hello");
console.log(false && "Hello");
console.log(undefined && "Hello");
console.log("" && "Hello");
console.log("Hello" && "Goodbye");

// The || operator makes statements true if at lease one statement is true.

console.log(true || "Hello");
console.log(false || "Hello");
console.log(undefined || "Hello");
console.log("" || "Hello");
console.log("Hello" || "Goodbye");