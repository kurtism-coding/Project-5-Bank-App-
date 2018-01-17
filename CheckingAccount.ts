import { Account } from "./Account";
import { Transaction } from "./Transaction";
import { AccountType } from "./AccountType";
import { TransactionOrigin } from "./TransactionOrigin";

export class CheckingAccount implements Account, Transaction {

    constructor(){
        this.dateOpened = new Date();
    }
    accountHolderName: string;
    accountHolderBirthDate: Date;
    balance: number = 300;
    accountType: AccountType;
    accountHistory: Transaction[];
    success: Boolean;
    resultBalance: number;
    amount: number;
    description: string;
    transactionDate: Date;
    errorMessage: string;
    dateOpened: Date;

    withdrawMoney(amount: number, description: string, transactionOrigin: TransactionOrigin): Transaction {
        let currentBalance = this.balance;
        this.accountType = 1;
            if(transactionOrigin == TransactionOrigin.branch || TransactionOrigin.phone || TransactionOrigin.web) {
                this.amount = amount;
                if (amount > currentBalance) {
                    this.success = false;
                    this.errorMessage = "Cannot withdraw more than the available balance.";
                    this.resultBalance = this.balance;
                    this.transactionDate = new Date();
                    this.description = description;
                }

                return;
            }
    }
    depositMoney (amount: number, description: string): Transaction {
        this.balance += amount;
        this.resultBalance = this.balance;
        this.success = true;
        this.description = description;
        this.errorMessage = "";
        this.transactionDate = new Date();

        return;
    }

}
