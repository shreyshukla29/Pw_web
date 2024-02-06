function shoppingCart(){
    const cartItem=['shoes','bag','t-shirt']
    return { 
        getCartItems: function(){
            return cartItem;
        }

    }
}
const cart = shoppingCart()

console.log(`Cart Items `,cart.getCartItems())