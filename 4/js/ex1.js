// Let's make this loop.
/*
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);


let number = 1;
while (number <= 5) {
  console.log(number);
  number++;
} // Same code, it adds a number til it hits 5.  

*/

// same code but with a for instead of while loop. 
// `For` is often used when you nkow how many times the loop will run.
// `While` is often used when you want the loop to run as long as a certain condition is True.  
// `For` loop has less risk of infinite loop, still possible.  `While` has more risk.  



let number;
for (number = 1; number <= 50; number++) {
  console.log(number);
}