
let uniqueItem = new Set([3,7,5,2,7,5,1,6])

let num_square = new Map();

uniqueItem.forEach(num => {
    num_square.set(num, num*num)
    
});

console.log("Unique numbers \n" , uniqueItem)

num_square.forEach((num, numSquare) => {
    console.log(`${num} : ${numSquare}`)

    
});