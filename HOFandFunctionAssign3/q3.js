let expense = [
    {amount: 100, category: "Utilities"},
    {amount: 200, category: "Groceries"},
    {amount: 50, category: "Entertainment"},
];

let expenseWithTax = expense.map((expense) =>{
    let tax =expense.amount * 0.1
    return {... expense, tax:tax};
})

console.log("expense with tax:",expenseWithTax)