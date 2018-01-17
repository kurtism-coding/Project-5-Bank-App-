"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RetirementAccount_1 = require("./RetirementAccount");
var SavingsAccount_1 = require("./SavingsAccount");
var CheckingAccount_1 = require("./CheckingAccount");
var checking = new CheckingAccount_1.CheckingAccount();
var savings = new SavingsAccount_1.SavingsAccount();
var retirement = new RetirementAccount_1.RetirementAccount();
console.log(savings.withdrawMoney(14000, "boat", 2));
console.log(savings.success);
console.log(savings.errorMessage);
console.log(savings.transactionDate);
console.log(savings.balance);
console.log(savings.description);
console.log(savings.monthlyTransactions);
