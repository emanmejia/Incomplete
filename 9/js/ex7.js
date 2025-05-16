// Improved Bank Account Program 
class BankAccount {
  constructor(name) {
    this.name = name;
    this.balance = 0; // Initial balance is 0
  }

  // Method to credit the account
  credit(amount) {
    this.balance += amount;
  }

  // Method to return account description
  describe() {
    return `${this.name} has a balance of $${this.balance}`;
  }
}

// Create three accounts and store them in an array
const accounts = [
  new BankAccount("Sean"),
  new BankAccount("Brad"),
  new BankAccount("Georges")
];

// Credit each account with $1000
accounts.forEach(account => {
  account.credit(1000);
  console.log(account.describe()); // Display account details
});
