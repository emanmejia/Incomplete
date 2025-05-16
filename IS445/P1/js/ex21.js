// Let's think of an RPG game, a character has three attributes: name, health, strenght.

const phinie = {
  name: "Phinie",
  health: 150,
  strength: 25
}

// Phinie object has three properties.

console.log(`${phinie.name} has ${phinie.health} health points and ${phinie.strength} as strength.`);

console.log(`${phinie.name} has gone to battle.`)

// Phinie is harmed by an arrow
phinie.health -= 20;

// Phinie is equiped with a strength pack. 
phinie.strength += 10;

console.log(`...`)
console.log(`${phinie.name} has returned from battle.`)

console.log(`${phinie.name} has ${phinie.health} health points and ${phinie.strength} as strength.`);