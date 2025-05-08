// Count down the counter until 0
const decreaseCounter = () => {
  // Convert counter text to a number
  const counter = Number(counterElement.textContent);
  if (counter > 1) {
    // Decrease counter by one
    counterElement.textContent = counter - 1;
  }
  else {
    // Cancel the repeated execution
    clearInterval(intervalId);
    // Modify the page title
    const title = document.getElementById("title");
    title.textContent = "BOOM!!";
  }
};

// The section above is an important area to understand. It is a function that decreases the counter by one every second until it reaches 0, at which point it clears the interval and changes the title to "BOOM!!".  Changing titles with document.getElementById is a common practice in JavaScript. The setInterval function is used to repeatedly call the decreaseCounter function every second (1000 milliseconds). This is a common pattern in JavaScript for creating timed events or animations.

const counterElement = document.getElementById("counter");

// Call the decreaseCounter function every second (1000 milliseconds)
const intervalId = setInterval(decreaseCounter, 1000);