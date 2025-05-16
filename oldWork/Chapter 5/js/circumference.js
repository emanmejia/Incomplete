function calculateCircumference(radius) {
  return 2 * Math.PI * radius;
}

function calculateArea(radius) {
  return Math.PI * radius * radius;
}

// Prompt the user for the radius
let radius = prompt("Enter the radius:");

let circumference = calculateCircumference(radius);
let area = calculateArea(radius);

console.log("Circumference:", circumference);
console.log("Area:", area);
