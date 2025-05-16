// Pseudocode
// Get food
// Create elements
//  paragraph
//  span
// Set properties
//  span
//    textContent
//    style (or add class)
// Build the paragraph
// Add paragraph to page

// For testing, hard code the food
// const food = "sushi";
const food = prompt("Please enter your favorite food");


// Create elements
const paraElement = document.createElement("p");
const spanElement = document.createElement("span");

// Set properties
spanElement.textContent = food;

// Option 1 - Use style
// spanElement.style.color = "red";
// Option 2 - Use class
//   Create a class in the CSS file, let's call it red
//   It will set the color to red.  Add the class to the spanElement.
spanElement.classList.add("red");

// Buld paragraph
paraElement.textContent = "Your favorite food is ";
paraElement.appendChild(spanElement);
// Use textNode or innerHTML
paraElement.appendChild(document.createTextNode(". Yummy!"));

// Add paragraph to div
//  Do in one step
document.getElementById("output").appendChild(paraElement);