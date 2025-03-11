class Character {
  constructor(name, health, strength) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.xp = 0; // XP is always zero for new characters
    this.gold = 10; // Each character starts with 10 gold
    this.keys = 1; // Each character starts with 1 key
  }

  // Attack a target
  attack(target) {
    if (this.health > 0) {
      const damage = this.strength;
      console.log(`${this.name} attacks ${target.name} and causes ${damage} damage points`);
      target.health -= damage;

      if (target.health > 0) {
        console.log(`${target.name} has ${target.health} health points left`);
      } else {
        target.health = 0;
        const bonusXP = 10;
        console.log(`${this.name} eliminated ${target.name} and wins ${bonusXP} experience points!`);

        // Transfer inventory from defeated target
        this.gold += target.gold;
        this.keys += target.keys;
        target.gold = 0;
        target.keys = 0;

        this.xp += bonusXP;
      }
    } else {
      console.log(`${this.name} can’t attack (they've been eliminated)`);
    }
  }

  // Return the character description, including inventory
  describe() {
    return `${this.name} has ${this.health} health points, ${this.strength} strength, ${this.xp} XP, ${this.gold} gold, and ${this.keys} key(s).`;
  }
}

// Create characters
const aurora = new Character("Aurora", 150, 25);
const glacius = new Character("Glacius", 130, 30);

console.log("Welcome to the adventure! Here are our heroes:");
console.log(aurora.describe());
console.log(glacius.describe());

// Introduce the monster
const monster = new Character("Spike", 40, 20);
console.log(`A wild monster has appeared: it's named ${monster.name}`);

monster.attack(aurora);
monster.attack(glacius);
aurora.attack(monster);
glacius.attack(monster); // One of the heroes will slay Spike and take its inventory

console.log("Final stats after battle:");
console.log(aurora.describe());
console.log(glacius.describe());
