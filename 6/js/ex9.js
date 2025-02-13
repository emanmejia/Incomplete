// Creating the account object
const account = {
  name: "Alex",   // name property
  balance: 0,     // balance property set to 0
  
  // Method to credit or debit the account balance
  credit(value) {
    this.balance += value;  // Adds the given value (can be positive or negative)
  },
  
  // Method to return the account description
  describe() {
    return `Account holder: ${this.name}, Balance: $${this.balance}`;
  }
};

// Show the account description
console.log(account.describe());  // Initial description

// Credit the account by 250
account.credit(250);

// Debit the account by 80
account.credit(-80);

console.log(`Post daily transactions.`)

// Show the account description again
console.log(account.describe());  // Updated description
