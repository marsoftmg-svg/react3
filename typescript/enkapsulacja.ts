class BankAccount {
    private balance: number;

    constructor(initialBalance:number) {
        this.balance = initialBalance;


    }
// setter
    deposit(amount: number): void{
    this.balance += amount;
}
// getter
getBalance():number{
    return this.balance;
}

}
// ctr+?
// tab wpisuje nazwe pliku
const account = new BankAccount(1000);
account.deposit(500);
console.log(account.getBalance());
// console.log(account.balnce)