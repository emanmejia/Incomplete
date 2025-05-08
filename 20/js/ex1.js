// Count down the counter
const decreaseCounter = () => {
  // Convert counter text to a number
  const counter = Number(counterElement.textContent);
  // Decrease counter by one
  counterElement.textContent = counter - 1;
};

const counterElement = document.getElementById("counter");

// Call the decreaseCounter function every second (1000 milliseconds)
setInterval(decreaseCounter, 1000);

