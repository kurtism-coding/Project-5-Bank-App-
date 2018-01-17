import {RetirementAccount} from "./RetirementAccount";
import {SavingsAccount} from "./SavingsAccount";
import {CheckingAccount} from "./CheckingAccount";

let checking = new CheckingAccount();
let savings = new SavingsAccount();
let retirement = new RetirementAccount();

console.log(savings.withdrawMoney(14000,"boat", 2));
console.log(savings.success);
console.log(savings.errorMessage);
console.log(savings.transactionDate);
console.log(savings.balance);
console.log(savings.description);
console.log(savings.monthlyTransactions);