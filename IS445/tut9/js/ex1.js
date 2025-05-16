/*fetch(
  "https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/languages.txt"
)
  .then(response => response.text()) // Access and return response's text content
  .then(text => {
    console.log(text); // Display file content in the console
  });

console.log("This code is after the fetch()");
*/

// Because you are fetching data after you run the code, your device may take longer to fetch the results.  That doesn’t stop the script from running, so your console.log will run instantly, while fetching the results. 


console.log("First console.log()");

console.log(
  fetch("https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/languages.txt")
    .then(response => response.text())
    .then(text => {
      console.log("Second console.log() in fetch():", text);
    })
    .catch(err => {
      console.log("Error fetching data:", err.message);
    })
);

console.log("Third console.log()");
