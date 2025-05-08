const paintingsData = [
  { name: "The Starry Night", year: 1889, artist: "Vincent Van Gogh" },
  { name: "The Scream", year: 1893, artist: "Edvard Munch" },
  { name: "Guernica", year: 1937, artist: "Pablo Picasso" }
];

const paintingsBody = document.getElementById("paintings-body");

paintingsData.forEach(painting => {
  const row = paintingsBody.insertRow();
  const nameCell = row.insertCell();
  const yearCell = row.insertCell();
  const artistCell = row.insertCell();

  nameCell.textContent = painting.name;
  yearCell.textContent = painting.year;
  artistCell.textContent = painting.artist;
});