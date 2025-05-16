// Reduction of duplication
for (let i = 1; i <= 100; i++) {
    let output = "";

    if (i % 3 === 0) {
        output += "Fizz";  // Divisible by 3, adds Fizz to output. 
    }
    if (i % 5 === 0) {
        output += "Buzz";  // Divisible by 5, adds Buzz to output. 
    }
    
    console.log(output || i);  // If output is empty, print the number
}
