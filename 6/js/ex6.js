// TODO: create the character object here
const aurora = {
  name: "Aurora",
  health: 150,
  strength: 25,
  xp: 0,

  // Return the character description
  describe() {
    return `${this.name} has ${this.health} health points and ${this
      .strength} as strength and ${this.xp} XP points.`;
  }
};
console.log(`Pre journey.`)
console.log(aurora.describe());

// Aurora is harmed by an arrow
aurora.health -= 20;

// Aurora equips a strength necklace
aurora.strength += 10;

// Aurora learn a new skill
aurora.xp += 15;

console.log(`Post journey.`)
console.log(aurora.describe());


