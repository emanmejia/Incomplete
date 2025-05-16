document.getElementById("buyButton").addEventListener("click", () => {
  // Create a new, empty FormData object
  const formData = new FormData();
  // Fill the object with key/value pairs
  formData.append("size", "2XL");
  formData.append("color", "CSULB Yellow - Pantone 124C");
  // Send data to the server
  fetch("https://thejsway-server.herokuapp.com/tshirt", {
    method: "POST",
    body: formData
  })
  .then(response => response.text())
  .then(result => {
    document.getElementById("result").textContent = result;
  })
  .catch(err => {
    console.error(err.message);
  });
});