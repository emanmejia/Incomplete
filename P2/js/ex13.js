let startNum = Number(prompt("Enter a number to start from:"));

if (isNaN(startNum)) {
  alert("Please enter a valid number.");
} else {
  for (let i = startNum; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log(`${i} is even`);
    }
  }

  for (let g = startNum; g <= 10; g++) {
    if (g % 2 !== 0) {
      console.log(`${g} is odd`);
    }
  }
}


console.log(10 % 2); // 0 because 10 = 5 * 2 + 0
console.log(11 % 2); // 1 because 11 = 5 * 2 + 1
console.log(18 % 3); // 0 because 18 = 3 * 6 + 0
console.log(19 % 3); // 1 because 19 = 3 * 6 + 1
console.log(20 % 3); // 2 because 20 = 3 * 6 + 2
