const fs = require('fs')
const content  = fs.readFileSync('input.txt')

console.log("" +content)

fs.writeFileSync('output.txt' ,content)

const output_content = fs.readFileSync('output.txt')
console.log(""+output_content)

