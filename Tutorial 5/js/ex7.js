// Create an account object
let account = {
  // Properties
  name: "Emmanuel",
  balance: 0,

  // Method to add or subtract from the balance
  credit: function(amount) {
    this.balance += amount; // Add the amount to the balance (could be negative for debit)
  },

  // Method to describe the account
  describe: function() {
    console.log(`Account holder: ${this.name}`);
    console.log(`Balance: $${this.balance}`);
  }
};

// Show the account description
account.describe(); // Initially balance is 0

// Credit 250 to the account
account.credit(250);

// Show the updated account description
account.describe();  // After crediting 250

// Debit 80 from the account
account.credit(-80);

// Show the updated account description
account.describe();  // After debiting 80