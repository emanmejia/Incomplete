// Brose the body node's children using a for loop@
for (let i = 0; i < document.body.childNodes.length; i++) {
  const child = document.body.childNodes[i];
}


// Browse the body node's children using the forEach() method
document.body.childNodes.forEach((child) => {
  console.log(child.nodeName);
});

// Browse the body node's children using the for...of loop
for (const child of document.body.childNodes) {
  console.log(child.nodeName);
}
