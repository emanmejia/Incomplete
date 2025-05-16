// Get the time from the user
let hours = prompt("Enter hours (0-23):");
let minutes = prompt("Enter minutes (0-59):");
let seconds = prompt("Enter seconds (0-59):");

// Convert inputs to numbers
hours = Number(hours);
minutes = Number(minutes);
seconds = Number(seconds);

// Check if inputs are within valid ranges
if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59 || seconds < 0 || seconds > 59) {
  alert("Invalid input. Please enter valid time values.");
} else {
  // Increment the seconds by 1
  seconds++;

  // Handle the transition of seconds to minutes
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  // Handle the transition of minutes to hours
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  // Handle the transition of hours to a new day (midnight)
  if (hours === 24) {
    hours = 0;
  }

  // Display the updated time
  alert(`The time one second after is: ${hours}h${minutes}m${seconds}s`);
}
