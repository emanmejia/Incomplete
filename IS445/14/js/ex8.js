// Show href attribute of the first link
console.log(document.querySelector("a").getAttribute("href"));

// Show ID attribute of the first list
console.log(document.querySelector("ul").id);

// Show href attribute of the first link
console.log(document.querySelector("a").href);

// Personal Practice

console.log()
console.log()

// Show href attribute of the second link
console.log(document.querySelectorAll("a")[1].href);

// Show ID attribut of the second list
console.log(document.querySelectorAll("ul")[1].getAttribute("id"));

console.log()
console.log()

// Loop showing href for attribut of all links
const links = document.querySelectorAll("a");
links.forEach(link => {
  console.log(link.href);
});

