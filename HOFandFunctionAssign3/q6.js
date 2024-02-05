let expense = [
    {amount: 100, category: "Utilities"},
    {amount: 200, category: "Groceries"},
    {amount: 50, category: "Entertainment"},
];

function categorizeExpense(expense){
    if(expense.amount >100){
        return "high expense"
    } else{
        return "low expense"
    }
}

let categorizeExpenses = expense.map((expense) => categorizeExpense(expense));

console.log(`Categorize Expense: [${categorizeExpenses}]`)