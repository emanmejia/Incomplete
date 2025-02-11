// Function to calculate the circumference of a circle
function calculateCircumference(radius) {
  return 2 * Math.PI * radius;  // Circumference formula: 2 * π * r
}

// Function to calculate the area of a circle
function calculateArea(radius) {
  return Math.PI * radius ** 2;  // Area formula: π * r^2
}

// Prompt the user for the radius of the circle
const radius = parseFloat(prompt("Enter the radius of the circle: "));

// Check if the radius is a valid positive number
if (isNaN(radius) || radius <= 0) {
  console.log("Please enter a valid positive number for the radius.");
} else {
  // Calculate and display the circumference and area
  const circumference = calculateCircumference(radius);
  const area = calculateArea(radius);
  
  console.log(`The circumference of the circle is: ${circumference.toFixed(2)}`);
  console.log(`The area of the circle is: ${area.toFixed(2)}`);
}
