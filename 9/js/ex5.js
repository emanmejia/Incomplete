class Dog {
  constructor(name, specieis, size) {
    this.name = name;
    this.specieis = specieis;
    this.size = size;
  }

  bark() {
    return this.size > 60 ? "Grr! Grr!" : "Woof! Woof!";
  }
}

const luna = new Dog("Luna", "pitbull", 75);
console.log(`${luna.name} is a ${luna.specieis} dog measuring ${luna.size} pounds.`);
console.log(`Look, a cat! ${luna.name} barks: ${luna.bark()}`);

const snowy = new Dog("Snowy", "terrier", 24);
console.log(`${snowy.name} is a ${snowy.specieis} dog measuring ${snowy.size} pounds.`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);