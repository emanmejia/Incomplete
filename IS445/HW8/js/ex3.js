document.addEventListener('DOMContentLoaded', () => {
  const nameInput = document.getElementById('name');
  const countriesContainer = document.getElementById('countries-container');
  const addCountryButton = document.getElementById('add-country');
  const submitButton = document.getElementById('submit-travel-info');
  const messageDiv = document.getElementById('message');
  let countryCount = 1;

  addCountryButton.addEventListener('click', () => {
    const newCountryDiv = document.createElement('div');
    newCountryDiv.classList.add('country-input');
    newCountryDiv.innerHTML = `
      <label for="country-name-${countryCount}">Country Name:</label>
      <input type="text" class="country-name" id="country-name-${countryCount}">
      <label for="country-year-${countryCount}">Year Visited:</label>
      <input type="number" class="country-year" id="country-year-${countryCount}">
    `;
    countriesContainer.appendChild(newCountryDiv);
    countryCount++;
  });

  submitButton.addEventListener('click', () => {
    const name = nameInput.value.trim();
    const countries = [];
    const countryInputs = document.querySelectorAll('.country-input');

    countryInputs.forEach(countryDiv => {
      const countryNameInput = countryDiv.querySelector('.country-name');
      const countryYearInput = countryDiv.querySelector('.country-year');
      const countryName = countryNameInput.value.trim();
      const countryYear = parseInt(countryYearInput.value);

      if (countryName && !isNaN(countryYear)) {
        countries.push({ name: countryName, year: countryYear });
      }
    });

    if (name && countries.length > 0) {
      const travelerData = {
        name: name,
        countries: countries
      };

      fetch('https://restcountries.com/v3.1/all', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(travelerData)
      })
      .then(response => response.json())
      .then(data => {
        console.log('Server Response:', data.message);
        messageDiv.textContent = 'Success! Check the console for the server response.';
        messageDiv.style.color = 'green';
      })
      .catch(error => {
        console.error('Error sending data:', error);
        messageDiv.textContent = 'Error sending data. Please try again.';
        messageDiv.style.color = 'red';
      });
    } else {
      alert('Please enter your name and at least one visited country with the year.');
    }
  });
});