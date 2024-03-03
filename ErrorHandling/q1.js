
function addToCart(name,price,quantity,shoppingCart){
    if(name === ""){
      throw new Error("Product name is required.");
    }
    if( price < 0){
        throw new Error("Invalid Product price.");
    }
    if (quantity <= 0 || !Number.isInteger(quantity)) {
        throw new Error("Invalid quantity.");
    }

    shoppingCart.push({ name, price, quantity });


}

function checkout(shoppingCart){

    if(!shoppingCart){
        throw new Error("Cart is empty. Add items before checkout");
    }
}

let shoppingCart = [];

try {
    addToCart("Laptop",1200,2,shoppingCart);
   // addToCart("",30,1,shoppingCart);
   // addToCart("Mouse",-15,3,shoppingCart);
    addToCart("Keyboard",50,"abc",shoppingCart);

    checkout(shoppingCart);

    console.log("your cart:",shoppingCart)
} catch (error) {
    console.log(error);
}


