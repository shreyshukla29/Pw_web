function createCounter(){
    let cnt = 0;

    return function(){
        cnt++;
        console.log(`Click count : ${cnt}`)
    }
}

let clickCount = createCounter();

clickCount()
clickCount()
clickCount()
clickCount()
