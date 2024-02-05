let expense = [
    {amount: 100, category: "Utilities"},
    {amount: 200, category: "Groceries"},
    {amount: 50, category: "Entertainment"},
];

let grocerieExpense = expense.filter((expense)=>{
    return expense.category == "Groceries"
})

console.log(grocerieExpense)