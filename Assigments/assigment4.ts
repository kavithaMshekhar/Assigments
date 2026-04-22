 // program using conditional and looping statement.
 
 const transactions: number[] = [50000, -2000, 3000, -15000, -200, -300, 4000, -3000];

let creditCount = 0;
let debitCount = 0;

let totalCredit = 0;
let totalDebit = 0;

let suspiciousCount = 0;

for (let i = 0; i < transactions.length; i++) {
  const amount = transactions[i];

  // Credit
  if (amount > 0) {
    creditCount++;
    totalCredit += amount;

    if (amount > 10000) {
      console.log("Suspicious credit Transaction with Amount:", amount);
      suspiciousCount++;
    }
  }
  // Debit
  else {
    debitCount++;
    totalDebit += amount;

    if (amount < -10000) {
      console.log("Suspicious debit Transaction with Amount:", amount);
      suspiciousCount++;
    }
  }
}

// Remaining balance
const balance = totalCredit + totalDebit;

// Output
console.log("Total Credit Transactions:", creditCount);
console.log("Total Debit Transactions:", debitCount);

console.log("Total Credited Amount:", totalCredit);
console.log("Total Debited Amount:", totalDebit);

console.log("Remaining Balance:", balance);

console.log("Total Suspicious Transactions:", suspiciousCount);

