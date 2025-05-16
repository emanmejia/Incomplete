// For testing, let's hard code the colors
// const textColor = "white";
// const backGroundColor = "red";

const textColor = prompt("Please enter the text color");
const backGroundColor = prompt("Please enter the background color");

// Pseudocode
// Prompt user for colors
// Loop
//   Get div elements
//   Change the color (assign style properties)

// Get div elements
const divElements = document.getElementsByTagName("div");

// If I want to use a forEach loop, convert to an array
//  Use one step to convert and loop
Array.from(divElements).forEach(div => {
  div.style.color = textColor;
  div.style.backgroundColor = backGroundColor;
});