/* Define the value of the "username" input field
const usernameElement = document.getElementById("username");
usernameElement.value = "Enter Unique Username";
*/

const usernameElement = document.getElementById("username");
usernameElement.addEventListener("focus", e => {
  document.getElementById("usernameHelp").textContent = "You can use letters, numbers, and underscores. The username must be between 3 and 16 characters long.";
})

// hid the advice when the user moves onto a different field
usernameElement.addEventListener("blur", e => {
  document.getElementById("usernameHelp").textContent = " ";
})

const passwordElement = document.getElementById("password");
passwordElement.addEventListener("focus", e => {
  document.getElementById("passwordHelp").textContent = "Your password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
})

// hid the advice when the user moves onto a different field
passwordElement.addEventListener("blur", e => {
  document.getElementById("passwordHelp").textContent = " ";
})


const emailElement = document.getElementById("emailAddress");
emailElement.addEventListener("focus", e => {
  document.getElementById("emailHelp").textContent = "Do not use your university email address. Use a personal email address that you check regularly.";
})

// hid the advice when the user moves onto a different field
emailElement.addEventListener("blur", e => {
  document.getElementById("emailHelp").textContent = " ";
})