

// Click handler on the button
document.getElementById("propa").addEventListener("click", e => {
  console.log("Button handler");
  e.stopPropagation(); // Stop the event propagation
});