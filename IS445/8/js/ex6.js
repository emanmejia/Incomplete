// Searching inside a string
/*The indexOf() method takes as a parameter the searched-for value.  If that value is found inside the string, it returns the index of the first occurence of the value.  Otherwise, it returns -1.*/

const song = "Honky Tonk Women";
console.log(song.indexOf("onk")); // 1
console.log(song.indexOf("Onk")); // -1 because of case mismatch 

// When searching for a value at the beginning or end of a string, you may also use the startsWith() and endsWith() methods.  Both return either true or false, depending on whether the value is found or not.  Beware:  these methods are case-sensitive.  

const song2 = "Achy Breaky Heart";
console.log(song2.startsWith("Achy")); // true
console.log(song2.startsWith("achy")); // false
console.log(song2.startsWith("breaky")); // false

console.log(song2.endsWith("art"));  // true
console.log(song2.endsWith("heart"));  // false
console.log(song2.endsWith("Breaky"));  // false
