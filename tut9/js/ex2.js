// Define an array containing two objects
const planes = [
  {
    manufacturer: "Airbus",
    model: "A380",
  },
  {
    manufacturer: "Boeing",
    model: "747",
  }
];
console.log(planes); // Display the array of objects

const planesText = JSON.stringify(planes); // Convert the array of objects to a JSON string
console.log(JSON.parse(planesText)); // Display the array of objects.