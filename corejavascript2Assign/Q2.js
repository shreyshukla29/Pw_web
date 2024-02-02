
const ages = [19,22,19,24, 20,25,26,24,25,24]

ages.sort((a,b) => a-b)

const maxAge= ages[ages.length -1]
const minAge = ages[0]
let medianAge =0;
const  n = ages.length

if(n %2 ==0){
    const a = ages[Math.floor(n/2) -1];
    const b =  ages[Math.floor(n/2)];

    medianAge = (a+b)/2;
} else{
    medianAge = ages[Math.floor(n/2)];
}

const sumOfAges = ages.reduce((sum,age) => sum+age , 0);

const averageAge = sumOfAges /n;

const rangeOfAges  = maxAge -minAge;

const minDiff = Math.abs(minAge - averageAge)

const maxDiff = Math.abs (maxAge - averageAge)

console.log('sorted Ages',ages)
console.log('Min Age : ',minAge)
console.log('Max Age : ',maxAge)
console.log('Median Age',medianAge)
console.log('Average Age',averageAge)
console.log('Range Of Ages: ', rangeOfAges)
console.log('Min - Average Difference',minDiff)
console.log('Max - Average Difference',maxDiff)



