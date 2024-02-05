let expense = [
    {amount: 100, category: "Utilities"},
    {amount: 200, category: "Groceries"},
    {amount: 50, category: "Entertainment"},
];

let ttoalexpense = expense.reduce((total,expense)=> total+expense.amount,0)

console.log(`total expense ${ttoalexpense}`)