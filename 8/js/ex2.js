
console.log("List of movies:")


// Iterating over an array using the 'for' loop method. 
const movies = ["The Wolf of Wall Street", "Zootopia", "Babysitting"];
for (let i = 0; i < movies.length; i++) {
  console.log(movies[i]);
}

// Iterating over an array using 'forEach()' method on the array.  
const movies2 = ["Fast and Furious", "Dredd", "Blades of Glory"];
movies2.forEach(movie2 => {
  console.log(movie2);
});

// Previous example, rewritten with this method and a fat arrow function.
const movies3 = ["Superbad", "Casino", "Good Will Hunting"];
movies3.forEach(movies3 => {
  console.log(movies3);
});

// Previous example written with a 'for-of' loop 
const movies4 = ["Fantastic Four", "Rush Hour II", "Mulholland Drive"];
for (const movie of movies4) {
  console.log(movie);
}