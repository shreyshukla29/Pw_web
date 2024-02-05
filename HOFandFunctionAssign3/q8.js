let originalNumbers = [2,5,8,10,3];

let evenNum = []

originalNumbers.forEach(num => {
    if(num%2==0){
        evenNum.push(num)
    }
    
});
console.log('even numbers:', evenNum)