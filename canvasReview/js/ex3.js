// Use querySelectorAll
const paraElements = document.querySelectorAll("p");
console.log(paraElements);
paraElements.forEach(para => {
  console.log(para.textContent);
});

// Use getElementsByTagName
const paraElements2 = document.getElementsByTagName("p");
console.log(paraElements2);
// Oops, below doesn't work
// HTML Collection does not support forEach loop
// So, can covert to an array
// paraElements2.forEach(para => {
//   console.log(para.textContent);
// });

// Convert to an array
// Used a single step, can uses two steps with another identifier
Array.from(paraElements2).forEach(para => {
  console.log(para.textContent);
})

// Use two steps, assign array to a new varialbe
const paraElements2Array = Array.from(paraElements2);
paraElements2Array.forEach(para => {
  console.log(para.textContent)
}); 
