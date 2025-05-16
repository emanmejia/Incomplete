// You may compare two strings with the === operator. The operation returns a boolean value: true if the strings are equal, false if not.

const word = "koala";
console.log(word === "koala"); // true
console.log(word === "burger"); // false

// String comparison is case sensitive.  Do indeed pay attention to your lower and uppercase letters!

console.log("Qwerty" === "qwerty"); // false
console.log("Qwerty".toLowerCase() === "qwerty"); // true
