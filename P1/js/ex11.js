for (let i = 1; i <= 5; i++) {
  console.log(i);
  i++ // second increment after i was displayed, resulting in a double increment. Omit anything to do with the counter inside the body of your loop. 
}

let letter = "";
while (letter !== "X") {
  letter = prompt("Type a letter or X to exit:");
}