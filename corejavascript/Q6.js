
paymentmethod ='debit'

switch(paymentmethod){
    case 'credit':
        console.log("Processign fee for credit payment method : 2%")
        break;
    case 'debit':
        console.log("Processign fee for debit payment method : 1.5%")
        break;
    case 'paypal':
        console.log("Processign fee for paypal payment method : 3%")
        break;
}