// Function to change background color of all divs
function changeDivColor(color) {
  const divs = document.querySelectorAll("div");
  divs.forEach(div => {
    div.style.backgroundColor = color;
  });
}

// Listen for key presses
document.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase(); // Normalize to lowercase
  switch (key) {
    case "r":
      changeDivColor("darkred");
      break;
    case "y":
      changeDivColor("yellow");
      break;
    case "g":
      changeDivColor("forestgreen");
      break;
    case "b":
      changeDivColor("skyblue");
      break;
  }
});
