

function loanEvaluation(
    customerName: string,
    creditScore: number,
    income: number,
    isEmployed: boolean,
    debtToIncomeRatio: number
): void {
     // step-1: check the credit score
    if (creditScore > 750) {
        console.log(`Loan will be approved for ${customerName}`);
    } else if (creditScore <= 750 && creditScore > 650) {
        // step-2: check the income
        if (income >= 50000) {
            // step-3: check the employability
            if (isEmployed) {
                // step-4: check the DTR
                if (debtToIncomeRatio < 40) {
                    console.log(`Loan will be approved for ${customerName}`);
                } else {
                    console.log(`Loan will be declined for ${customerName}`);
                }
            } else {
                console.log(`Loan will be declined for ${customerName}`);
            }
        } else {
            console.log(`Loan will be declined for ${customerName}`);
        }
    } else {
        console.log(`Loan will be declined for ${customerName}`);
    }
}

loanEvaluation(
    "John Doe", // customerName
    720, // creditScore
    55000.0, // income
    true, // isEmployed
    35.0 // debtToIncomeRatio
);





