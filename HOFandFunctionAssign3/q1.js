const orderList = [
    {name: 'Laptop', price: 120000},
    {name: 'Mobile', price: 70000},
    {name: 'Mobile Charger', price: 1500},
    {name: 'Laptop Charger', price: 10500},
];

let sum =0 ;

orderList.forEach(element => {
    sum = sum + element.price;
    return sum
    
});

console.log(`the sum of price of orderList is ${sum}`)