

function GenerateRandomNum(){
    const randomNum = Math.floor(Math.random() *10)
    console.log(randomNum);
}

function printRandomNumwithdelay(){
   
    setInterval(() => {
        GenerateRandomNum();
    }, 2000);
}


printRandomNumwithdelay()