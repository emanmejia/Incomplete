// Example:
const aurora = {
  name: "Aurora",
  health: 150,
  strength: 25
};

// You can assign numbers, strings or even other objects to properties. 

console.log(`${aurora.name} has ${aurora.health} health points and ${aurora.strength} as strength before her journey.`);

console.log(`.. journey in progress ..`)
// Aurora is harmed by an arrow
aurora.health -= 20;

// Aurora equips a strength necklace
aurora.strength += 10;

console.log(`${aurora.name} has ${aurora.health} health points and ${aurora.strength} as strength after her journey.`);