// Set the correct password
const correctPassword = "Beach562";

// Set the maximum number of attempts
const maxAttempts = 3;

// Initialize the attempt counter
let attempts = 0;
let password = "";

// Loop up to 3 times
while (attempts < maxAttempts) {
  // Prompt the user for the password
  password = prompt("Please enter your password:");

  // Check if the entered password is correct
  if (password === correctPassword) {
    console.log(`You entered the correct password after ${attempts + 1} attempt(s)`);
    break; // Exit the loop if the password is correct
  } else {
    attempts++; // Increment the attempt counter
    if (attempts < maxAttempts) {
      console.log(`Incorrect password. You have ${maxAttempts - attempts} attempt(s) remaining.`);
    }
  }
}

// If the user failed after 3 attempts.  This is hard coded and you need to reload the site.  For the future, try to figure out how to unlock the users account. 
if (attempts === maxAttempts && password !== correctPassword) {
  console.log(`Your account is locked! You failed to enter the correct password ${maxAttempts} times.`);
}
