// You can remove the last element of an array using the pop() method.

const movies = ["Rush Hour", "Rush Hour II", "Rush Hour III"];
movies.pop(); // Remove the last array element
console.log(movies.length) // 2 (the amount of movies that mattered in this Series.)
console.log(movies[2]); // undefined

// Alternatively, you can use the splice() method with two parameters: the first one is the index from which to begin removing, and the second one is the number of elements to remove.
const movies2 = ["The Big Short", "Meet the Parents", "Roadhouse"];
movies2.splice(0, 1); // remove 1 element starting at index 0
console.log(movies2.length); // 2
console.log(movies2[0]); // Meet the Parents
console.log(movies2[1]); // Roadhouse