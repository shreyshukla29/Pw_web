
const marks=26
let grade;

if(marks>=90){
    grade='A grade'
}
else if(marks<90 && marks >=70){
    grade='B grade'
}
 else if(marks>=50 && marks<70){
    grade='C grade'
}
else{
    grade='F grade'
}

console.log(grade)