// So many ways to do this via:
// https://www.tomdalling.com/blog/software-design/fizzbuzz-in-too-much-detail/

// Standard version
/*for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");  // Divisible by both 3 and 5
    } else if (i % 3 === 0) {
        console.log("Fizz");      // Divisible by 3
    } else if (i % 5 === 0) {
        console.log("Buzz");      // Divisible by 5
    } else {
        console.log(i);           // Otherwise print the number
    }
}
*/

// Reduction of duplication
for (let i = 1; i <= 100; i++) {
    let output = "";

    if (i % 3 === 0) {
        output += "Fizz";  // Divisible by 3
    }
    if (i % 5 === 0) {
        output += "Buzz";  // Divisible by 5
    }
    
    console.log(output || i);  // If output is empty, print the number
}
