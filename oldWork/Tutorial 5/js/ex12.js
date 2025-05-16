// Predict the output of the following code.  Then execute the code to verify.

const song = "Honky Tonk Women";

console.log(song.indexOf("onk")); // result
console.log(song.indexOf("Onk")); // no result

console.log(song.startsWith("Honk")); // result
console.log(song.startsWith("honk")); // no result
console.log(song.startsWith("Tonk")); // no result

console.log(song.endsWith("men")); // result
console.log(song.endsWith("Men")); // no result
console.log(song.endsWith("Tonk")); // no result 
