
const transactions: number[] = [50000, -2000, 3000, -15000, -200, -300, 4000, -3000];

let totalCredits: number = 0;
let totalDebits: number = 0;
let totalCreditAmount: number = 0;
let totalDebitAmount: number = 0;
let suspiciousTransactions: number = 0;

for (let i = 0; i < transactions.length; i++) {

    if (transactions[i]! > 0) {

        totalCredits += 1;
        totalCreditAmount += transactions[i]!
        // Check for suspiciously large credit transaction
                if (transactions[i]! > 10000) {
                    console.log(`Suspicious credit transaction with Amount: ${transactions[i]!}`);
                    suspiciousTransactions++;
                }
        }
    else {
        totalDebits += 1;
        totalDebitAmount += transactions[i]!
        if (transactions[i]! <- 10000) {
                    console.log(`Suspicious credit transaction with Amount: ${transactions[i]!}`);
                    suspiciousTransactions++;
                }
    }

}

    console.log(`totalCredits: ${totalCredits}`);
    console.log(`totalDebits: ${totalDebits}`);
    console.log(`totalCreditAmount: ${totalCreditAmount}`)
    console.log(`totalDebitAmount: ${totalDebitAmount}`)
    console.log(`Remining amount: ${totalCreditAmount + totalDebitAmount}`)
    console.log("Total number of suspicious transactions:", suspiciousTransactions);


