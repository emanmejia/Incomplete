const r = Number(prompt("Enter the circle radius:"));

// TODO: create the circle object here
const circle = {
  radius: r,
  // Shorthand method syntax for circumference
  circumference() {
    return (2 * Math.PI * this.radius).toFixed(2); // Formula for circumference rounded to 2 decimal places
  },
  // Shorthand method syntax for area
  area() {
    return (Math.PI * Math.pow(this.radius, 2)).toFixed(2); // Formula for area rounded to 2 decimal places
  }
};

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);
