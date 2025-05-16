let words = [];  // This array will begin to store words.

// Keep asking the user for a word until they type stop.
while (true) {
  let word = prompt("Enter a word (type 'stop' to stop):");

  if (word.toLowerCase() === "stop") {
    break;
  }

  words.push(word); // Add the word to the array 
}

console.log("Words entered:");
for (let i = 0; i < words.length; i++) {
  console.log(words[i]);
}