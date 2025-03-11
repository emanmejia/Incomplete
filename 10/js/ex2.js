/*Limiting mutations with const variables
In order to decrease the risk of accidental state mutation, a first step is to favor const over let whenever applicable for variable declarations. A variable declared with the const keyword cannot be further reassigned. Array and object content can still be mutated, though. Check the following code for details.*/

const n = 10;
const fruit = "Banana";
const obj = {
  myProp: 2
};
const animals = ["Elephant", "Turtle"];

obj.myProp = 3; // Mutating a property is OK even for a const object
obj.myOtherProp = "abc"; // Adding a new property is OK even for a const object
animals.push("Gorilla"); // Updating content is OK even for a const array

n++; // Illegal
fruit = "orange"; // Illegal
obj = {}; // Illegal
animals = ["Bee"]; // Illegal