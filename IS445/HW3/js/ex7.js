// Prompt the user for hours, minutes, and seconds
let hours = prompt("Enter the hours (0-23):");
let minutes = prompt("Enter the minutes (0-59):");
let seconds = prompt("Enter the seconds (0-59):");

// Convert the inputs to numbers
hours = Number(hours);
minutes = Number(minutes);
seconds = Number(seconds);

// Validate the inputs
if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
  console.error("Error: Please enter valid numeric values for hours, minutes, and seconds.");
} else if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59 || seconds < 0 || seconds > 59) {
  console.error("Error: Invalid input. Please enter hours between 0-23, minutes between 0-59, and seconds between 0-59.");
} else {
  // Display the time entered
  console.log(`Time entered: ${hours}h${minutes}m${seconds}s`);

  // Add one second
  seconds++;

  // Handle overflow for seconds
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  // Handle overflow for minutes
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  // Handle overflow for hours
  if (hours === 24) {
    hours = 0;
  }

  // Display the time one second later
  console.log(`One second later: ${hours}h${minutes}m${seconds}s`);
}
