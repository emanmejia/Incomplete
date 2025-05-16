fetch(
  "https://api.open-meteo.com/v1/forecast?latitude=33.7701&longitude=-118.1937&current=temperature_2m,relative_humidity_2m&timezone=auto"
)
  .then((response) => response.json())
  .then((weatherData) => {
    const temperature = weatherData.current.temperature_2m;
    const humidity = weatherData.current.relative_humidity_2m;

    const summaryElement = document.createElement("div");
    summaryElement.textContent = `Temperature is ${temperature} °C with ${humidity}% humidity.`;

    document.querySelector("h2").textContent += ` Long Beach, CA`;

    const weatherElement = document.getElementById("weather");
    weatherElement.appendChild(summaryElement);
  })
  .catch((err) => {
    console.error("Error fetching weather:", err.message);
  });
