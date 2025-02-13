// TODO: create the dog object here
const dog = {
  name: 'Luna',
  species: 'Pit Retriever',
  size: '75',
  bark() {
    return `Woof!`;
  }
};


console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}.`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);