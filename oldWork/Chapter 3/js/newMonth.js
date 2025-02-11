// Get the month number from the user
let month = prompt("Enter a month number (1-12):");

// Convert input to a number
month = Number(month);

// Check the month and display the number of days
if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
  alert("31 days");
} else if (month === 4 || month === 6 || month === 9 || month === 11) {
  alert("30 days");
} else if (month === 2) {
  alert("28 days");
} else {
  alert("Invalid month number.");
}
