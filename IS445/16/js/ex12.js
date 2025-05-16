// Handling clicking on the forbidden link
document.getElementById("forbidden").addEventListener("click", e => {
  alert("Yes... But no.");
  e.preventDefault(); // Cancels the default behavior
});