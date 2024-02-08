
function sumAsync (a,b,callback){
    setTimeout(() => {
        const sum = a+b;
        callback(sum);
    }, 1000);
}

function callback(sum)  {
    console.log(sum);
}

sumAsync(5,6,callback)