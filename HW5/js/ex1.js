class Square {
  // Constructor to initialize the side property
  constructor(side) {
    this.side = side;
  }

  // Method to calculate the perimeter of the square
  perimeter() {
    return this.side * 4;
  }

  // Method to calculate the area of the square
  area() {
    return this.side ** 2;
  }

  // Method to calculate the diagonal of the square
  diagonal() {
    return Math.sqrt(2 * this.side ** 2);
  }

  // Method to describe the square and show its properties
  describe() {
    console.log(`Square with side ${this.side} has perimeter of ${this.perimeter()}, area of ${this.area()}, and diagonal of ${this.diagonal().toFixed(3)}`);
  }
}

// Create three square objects
const square1 = new Square(2);
const square2 = new Square(5);
const square3 = new Square(7);

// Use the describe method to show each square's information
square1.describe();
square2.describe();
square3.describe();
