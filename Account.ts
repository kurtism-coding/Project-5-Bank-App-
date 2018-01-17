import { Transaction } from "./Transaction";
import { TransactionOrigin } from "./TransactionOrigin";
import { AccountType } from "./AccountType";

export interface Account {
    accountHolderName: string;
    accountHolderBirthDate: Date;
    balance: number;
    accountType: AccountType;
    accountHistory: Transaction[];
    success: Boolean;
    resultBalance: number;
    amount: number;
    description: string;
    transactionDate: Date;
    errorMessage: string;
    dateOpened: Date;


    /*accountHolderName: string;
    accountHolderBirthDate: Date;
    balance: number;
    withdrawMoney(amount: number,
                  description: string,
                  transactionOrigin: TransactionOrigin) : Transaction;
    depositMoney(amount: number,
    description: string) : Transaction;
    accountHistory : Transaction[];
    advanceDate(numberOfDays: number);
    accountType: AccountType;
    withdrawMoney();
    depositMoney();
    advanceDate();
    */
}
