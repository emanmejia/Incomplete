// Create an array containing two objects
const cars = [
  {
    model: "Peugeot",
    color: "blue",
    registration: 2012,
    checkups: [2015, 2017]
  },
  {
    model: "Citroën",
    color: "white",
    registration: 1999,
    checkups: [2003, 2005, 2007, 2009, 2011, 2013]
  }
];

document.getElementById("send").addEventListener("click", () => {
  // Get the output element and clear it out
  const outputElement = document.getElementById("output");
  outputElement.innerHTML = "";

  // Send the array as JSON data to the server
  fetch("/api/cars", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(cars)
  })
    .then(response => response.text())
    .then(result => {
      //console.log(result);
      outputElement.appendChild(document.createTextNode(result));
    })
    .catch(err => {
      //console.error(err.message);
      outputElement.appendChild(document.createTextNode(err.message));
    });
})  
