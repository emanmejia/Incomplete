// Get references to elements
const myButton = document.getElementById("myButton");
const deactivateButton = document.getElementById("deactivate");
const clickCountSpan = document.getElementById("clickCount");

let count = 0;
let isCounting = true;

// Handle clicks on the "Click me!" button
myButton.addEventListener("click", () => {
  if (isCounting) {
    count++;
    clickCountSpan.textContent = count;
  }
});

// Handle clicks on the "Désactivate counting" - french deactivate button.  PSG makes it to champions league and here we are changing buttons now!  haha.
deactivateButton.addEventListener("click", () => {
  isCounting = false;
});
