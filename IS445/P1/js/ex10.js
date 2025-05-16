// This is how you display numbers between 1 and 5.
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

// Here is a sample written with a 'while' loop.
let number = 1;
while (number <= 5) { // code to run while the condition is true. 
  console.log(number);
  number++;
}

// When you need to write loops with conditions that are based on the value of a variable updated inside the loop body, JS offers another loop type to account for this: the 'for' loop.

let number2;
for (number2 = 1; number2 <= 6; number2++) {
  console.log(number2);
}

/* this works by doing the folloing:

declaration
for (initialization; condition; final expression) {
  // code to run while the condition is true. 
}

The 'for' loop is a bit more complicated than the 'while' loop syntax:
-Initalization only happens once, when the code first kicks off.  It's often used to set the initial value of the variable assocaited to the loop condition.
-The condition is evaluated before the loop runs each time.  If it's true, the code runs.  If not, the code doesn't run.
-The final expression is evaluated after the loop runs each time.  It's often used to update the value of the variable associated with the loop condition, as we saw in the previous example. 

*/

for (let i = 1; i <=4; i++) {
  console.log(i); // OK
}
console.log(i); // Error: the i variable is not visible here. 