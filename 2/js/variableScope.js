let num1 = 0;
{
  num1 = 1; // OK : num 1 is declared IN the parent block
  const num2 = 0;
}
console.log(num1); // OK : num1 is declared in the current block
// console.log(num2); // Error! num2 is not visible here

/*
The scope of a variable is the part of the program where the variable is visible and usable. Variables declared with let or const are block-scoped: their visibility is limited to the block where they are declared (and every sub-block, if any). In JavaScript and many other programming languages, a code block is a portion of a program delimited by a pair of opening and closing braces. By default, a JavaScript program forms one block of code.
*/