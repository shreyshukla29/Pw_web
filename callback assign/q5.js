array = [1,2,3,4,5]
function multiplyWithCallback(array,callback){
  const multipliedArray =  array.map((num)=> num*2);
  callback(multipliedArray);

}

function callback(arr){
    console.log(arr);
}

multiplyWithCallback(array,callback);