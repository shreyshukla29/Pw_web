function getData(){
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve('Data fetch Successfully')
            
        }, 2000);
    })
}

getData().then((result) => console.log(result))