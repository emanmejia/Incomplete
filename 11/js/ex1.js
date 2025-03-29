const links = [
  { title: "Mejia's Complete Coursework", url: "https://csulbmejia.netlify.app/", author: "Emmanuel Mejia" },
  { title: "2026 World Cup Website", url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026", author: "Mozilla Foundation" },
  { title: "City of Long Beach Website", url: "https://longbeach.gov/", author: "Rex Richardson" }
];

function showLinks() {
  if (links.length === 0) {
      alert("No links available.");
  } else {
      const linkList = links.map((link, index) => {
          return `${index + 1}: ${link.title} (${link.url}), submitted by ${link.author}`; // add one as each index item starts at zero.
      }).join("\n");
      alert(linkList);
  }
}

function addLink() {
  const title = prompt("Enter the link title:");
  let url = prompt("Enter the link URL:");
  const author = prompt("Enter the author's name:");
  
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
      url = "http://" + url;
  }
  
  links.push({ title, url, author });
  alert("Link added successfully!");
} // Had help finding how to add 'http://'

function removeLink() {
  if (links.length === 0) {
      alert("No links to remove.");
      return;
  }
  showLinks();
  let index;
  do {
      index = parseInt(prompt("Enter the index of the link to remove:"), 10);
  } while (isNaN(index) || index < 1 || index > links.length);
  
  links.splice(index - 1, 1);
  alert("Link removed successfully!");
}

function mainMenu() {
  let choice;
  do {
      choice = prompt(
          "Choose an option:\n" +
          "1: Show links\n" +
          "2: Add a link\n" +
          "3: Remove a link\n" +
          "0: Quit"
      );
      
      switch (choice) {
          case "1":
              showLinks();
              break;
          case "2":
              addLink();
              break;
          case "3":
              removeLink();
              break;
          case "0":
              alert("Goodbye!");
              break;
          default:
              alert("Invalid choice. Please enter 1, 2, 3, or 0.");
      }
  } while (choice !== "0");
}

mainMenu();
