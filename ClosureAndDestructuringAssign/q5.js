function shoppingCart(){
    const cartItems= [];
    function itemInCart (productID){
        return cartItems.findIndex(item => item.id == productID)
    }
    return {
        addItem : function (product) {
            const itemIndex = itemInCart(product.id)
            if(itemIndex!==-1){
                cartItems[itemIndex].quantity++;
                
            }else{
                cartItems.push({id: product.id,name : product.name , price: product.price, quantity: 1
                });
            }
        },

        removeItem: function (product) {
            const indexToremove = itemInCart(product.id)

            if(indexToremove!== -1){
                cartItems.splice(indexToremove,1);
            }

            
        },

            getCartItems: function(){
                return cartItems;
            }
            
        
    };
}

const cart =shoppingCart();

console.log(`Cart Items before Shopping :`,cart.getCartItems());

const product1 = {id:1,name:'Shoes',price:10}
const product2 = {id:2,name:'t-shirt',price:20}

cart.addItem(product1)
cart.addItem(product2)
cart.addItem(product1)

console.log(`Cart Items during checkout`,cart.getCartItems())

cart.removeItem(product2)
console.log(`Cart Items during checkout`,cart.getCartItems())