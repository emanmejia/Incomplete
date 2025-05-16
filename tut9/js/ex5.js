// Anonymous function for retrieving and displaying a random beer
const grabRandomBeer = () => {
  // Fetching random beer data from API
  fetch("https://api.openbrewerydb.org/v1/breweries/random")
    .then(response => response.json())
    .then(breweries => {
      // API returns an array containing only one element: we get it
      const brewery = breweries[0];

      // Creating DOM elements for brewery properties
      const nameElement = document.createElement("h2");
      nameElement.textContent = brewery.name;

      const typeElement = document.createElement("p");
      typeElement.textContent = `Type: ${brewery.brewery_type}`;

      const cityElement = document.createElement("p");
      cityElement.textContent = `City: ${brewery.city}`;

      const stateElement = document.createElement("p");
      stateElement.textContent = `State: ${brewery.state}`;

      const countryElement = document.createElement("p");
      countryElement.textContent = `State: ${brewery.country}`;

      const websiteElement = document.createElement("p");
      const websiteLink = document.createElement("a");
      websiteLink.href = brewery.website_url || "#"; // Use "#" as fallback if no URL
      websiteLink.textContent = brewery.website_url || "No Website";
      websiteElement.appendChild(document.createTextNode("Website: ")); // Add "Website:" text
      websiteElement.appendChild(websiteLink);

      // Clear previous brewery data
      const breweryElement = document.getElementById("beer");
      breweryElement.innerHTML = "";

      // Add brewery info to the page
      breweryElement.appendChild(nameElement);
      breweryElement.appendChild(typeElement);
      breweryElement.appendChild(cityElement);
      breweryElement.appendChild(stateElement);
      breweryElement.appendChild(countryElement);
      breweryElement.appendChild(websiteElement);
    })
    .catch(err => {
      console.error(err.message);
    });
};

// Grab a new beer when clicking the button
document.getElementById("grabButton").addEventListener("click", grabRandomBeer);