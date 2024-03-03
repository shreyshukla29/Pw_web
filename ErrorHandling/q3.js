function processPayment(amount , cardNumber , expiryDate){
    if(amount <= 0  ){
        throw new Error("Invalid ayment amount")
    }

    if(cardNumber=="" || cardNumber =="invalidCardNumber"){
        throw new Error("Invalid Card Number")
    }

    if(expiryDate =="" || isExpired(expiryDate)){
        throw new Error("Invalid expiration date")

    }

}

function isExpired(expirationDate) {
    // Check if expiration date is in the past
    const today = new Date();
    const month = today.getMonth();
    const year = today.getYear()-100 ;
    const cardmonth = parseInt(expirationDate.slice(0,1));
    const cardYear = parseInt(expirationDate.slice(3,));
    // console.log(today)
    // console.log(month)
    // console.log(year)
    // console.log(cardmonth)
    // console.log(cardYear)
   
    return cardYear != year || cardmonth != month;
}

try {
  //  processPayment{50.25,"1234-5678-9012-3456","12/25"}
   // processPayment{-10,"invalidCardNumber","05/25"}
    processPayment(100.75,"9876-5432-1098-7654","01/20")
} catch (error) {
    console.log(error.message)
}