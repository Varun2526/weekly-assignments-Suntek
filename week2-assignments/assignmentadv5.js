/**
 * @file assignmentadv5.js
 * @description Bank Transaction Analyzer — filter transaction types, extract
 *              amounts, calculate balance, and search transactions.
 * @concepts filter() by type, map() for extraction, reduce() with conditional logic
 */

// Bank transaction records
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

// 1. filter() — Get only credit (incoming) transactions
const creditTransactions = transactions.filter((txn) => txn.type === "credit");
console.log("Credits:", creditTransactions);

// 2. map() — Extract only the transaction amounts into a flat array
const amounts = transactions.map((txn) => txn.amount);
console.log("Amounts:", amounts);

// 3. reduce() — Calculate final balance (credits add, debits subtract)
const finalBalance = transactions.reduce((balance, txn) => {
    if (txn.type === "credit")
        return balance + txn.amount;
    else
        return balance - txn.amount;
}, 0);
console.log("Final balance:", finalBalance); // 5000 + 10000 - 2000 - 3000 = 10000

// 4. find() — Get the first debit transaction
const firstDebit = transactions.find((txn) => txn.type === "debit");
console.log("First debit:", firstDebit);

// 5. findIndex() — Find the index of the transaction with amount 10000
const index10k = transactions.findIndex((txn) => txn.amount === 10000);
console.log("Index of 10000:", index10k);