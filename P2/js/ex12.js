//  Update your carousel app to allow user input for the amount of turns. 

let carouselTurns = Number(prompt("Enter the amount of times you'd like to go around on our carousel."));

if (isNaN(carouselTurns) || carouselTurns <= 0) {
  alert("Please enter a valid number greater than 0.");
} else {
  for (let i = 1; i <= carouselTurns; i++) {
    console.log(`This is turn ${i} of ${carouselTurns} times.`);
  }
}
