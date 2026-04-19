
function checkLoanEligibility(
  customerName: string,
  creditScore: number,
  income: number,
  isEmployed: boolean,
  debtToIncomeRatio: number
): void {
        let result: string;

  // 1. Credit Score Check
  if (creditScore > 750) {
    result = "Loan Approved";
  } 
  else if (creditScore >= 650 && creditScore <= 750) {

    // 2. Income Check
    if (income >= 50000) {

      // 3. Employment Check
      if (isEmployed) {

        // 4. DTI Check
        if (debtToIncomeRatio < 40) {
          result = "Loan Approved";
        } else {
          result = "Loan Denied (DTI >= 40%)";
        }

      } else {
        result = "Loan Denied (Unemployed)";
      }

    } else {
      result = "Loan Denied (Income < 50000)";
    }

  } 
  else {
    result = "Loan Denied (Credit Score < 650)";
  }

  console.log(`Customer: ${customerName}`);
  console.log(`Loan Status: ${result}`);
}


// Given Data
const customerName = "John Doe";
let creditScore = 720;
let income = 55000.0;
const isEmployed = true;
let debtToIncomeRatio = 35.0;

// Function Call
checkLoanEligibility(
  customerName,
  creditScore,
  income,
  isEmployed,
  debtToIncomeRatio
);
