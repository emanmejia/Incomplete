let hours = Number(prompt("Enter hours (0-23):"));
let minutes = Number(prompt("Enter minutes (0-59):"));
let seconds = Number(prompt("Enter seconds (0-59):"));

// Check for invalid input
if (
  isNaN(hours) || isNaN(minutes) || isNaN(seconds) ||
  hours < 0 || hours > 23 ||
  minutes < 0 || minutes > 59 ||
  seconds < 0 || seconds > 59
) {
  alert("Invalid time input.");
} else {
  console.log(`Original Time: ${hours}h${minutes}m${seconds}s`);
  // Add one second
  seconds += 1;

  if (seconds === 60) {
    seconds = 0;
    minutes += 1;
  }

  if (minutes === 60) {
    minutes = 0;
    hours += 1;
  }

  if (hours === 24) {
    hours = 0;
  }

  alert(`Time one second later: ${hours}h${minutes}m${seconds}s`);

  console.log(`Time one second later: ${hours}h${minutes}m${seconds}s`);
}
