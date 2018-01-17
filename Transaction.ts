export interface Transaction
{
    success: Boolean;
    // amount will be positive for deposits and negative for withdrawals:
    amount: number;
    // resultBalance will be unchanged from the previous balance when success is false.
    resultBalance: number;
    transactionDate: Date;
    description: string;
    // errorMessage will be an empty string when success is true:
    errorMessage: string;
}