const myString = "Hello Everyone"; // null
console.log(myString.length); // 14
console.log(myString[1]); // e
console.log(myString.indexOf("l")); // 3,4
console.log(myString.indexOf("a")); // null
console.log(myString.indexOf("e", 2)); // 1, l
console.log(myString.lastIndexOf("e")); // 1,7,14
console.log(myString.substring(7,11)); // E, y

/*
Summary of Outputs:

    myString.length → 14 (The string has 14 characters)
    myString[1] → e (The character at index 1 is "e")
    myString.indexOf("l") → 2 (The first "l" appears at index 2)
    myString.indexOf("a") → -1 (There is no "a" in the string)
    myString.indexOf("e", 2) → 7 (The first "e" after index 2 appears at index 7)
    myString.lastIndexOf("e") → 12 (The last "e" appears at index 12)
    myString.substring(7, 11) → "Eve" (The substring from index 7 to 11 is "Eve")
*/e