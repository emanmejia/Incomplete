function getFullName(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
    fullName: firstName + " " + lastName
  };
}

// Prompting user to input their first and last name
const userFirstName = prompt("Enter your first name:");
const userLastName = prompt("Enter your last name:");

// Ensure the inputs are valid
console.log("First Name:", userFirstName);  // Debugging log
console.log("Last Name:", userLastName);    // Debugging log

// Call the function with the user input
const userInfo = getFullName(userFirstName, userLastName);

// Display the fullName in the console
console.log("Full Name:", userInfo.fullName);  // Should display full name correctly
