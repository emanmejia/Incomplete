// Adding an element to an array.
// You've just watched Back to the Future, again!  Add it oto the list. 

const movies = ["The Wolf of Wall Street", "Zootopia", "Babysitting"];
movies.push("Back to the Future");
console.log(`Last movie I watched was ${movies[3]}`); // Back to the Future

console.log("\nNow let's run through the whole list. ")

for (let i = 0; i < movies.length; i++) {
  console.log(movies[i]);
} // Iterates through all options and ends on final listing (3 / Ghostbusters).

// To add an element at the beginning of an array, use the unshift() method instead of push()
// Let's say you forgot to add Super Troopers, you watched before all of these other films.
movies.unshift("Super Troopers");
console.log(`\nOh I almost forgot, the first movie I watched is ${movies[0]}`); // Super Troopers
