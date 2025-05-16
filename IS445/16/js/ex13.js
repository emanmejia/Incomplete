// Get references to the button and the list
const addButton = document.getElementById("addButton");
const dessertList = document.getElementById("desserts");

// Function to create a new list item with editing ability
function addDessert(name) {
  const li = document.createElement("li");
  li.textContent = name;

  // This will allow the user to edit the dessert name by clicking on it
  li.addEventListener("click", () => {
    const newName = prompt("Edit the dessert name:", li.textContent);
    if (newName !== null && newName.trim() !== "") {
      li.textContent = newName;
    }
  });

  dessertList.appendChild(li);
}

// Add new dessert when button is clicked
addButton.addEventListener("click", () => {
  const dessertName = prompt("Enter a dessert:");
  if (dessertName !== null && dessertName.trim() !== "") {
    addDessert(dessertName);
  }
});
