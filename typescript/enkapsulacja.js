var BankAccount = /** @class */ (function () {
    function BankAccount(initialBalance) {
        this.balance = initialBalance;
    }
    // setter
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    // getter
    BankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    return BankAccount;
}());
var account = new BankAccount(1000);
account.deposit(500);
console.log(account.getBalance());
