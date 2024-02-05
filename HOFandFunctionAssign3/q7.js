let originalNumbers = [2,5,8,10,3];

originalNumbers.forEach((num, idx, arr) => {
    arr[idx]= num*2;
    
});

console.log(`Dubled Numbers: [ ${originalNumbers} ] `)