export const cart = []; // we want to access the variable cart outside of this cart


export function addToCart(productId) {
    // This part takes the product Id and adds it to the cart
        let matchingItem;
  
        cart.forEach((cartItem) => {
          if (productId === cartItem.productId) {
            matchingItem = cartItem;
          }
        });
  
  
        if (matchingItem) {
          matchingItem.quantity +=1;
        } else {
          cart.push({
            productId: productId,
            quantity: 1
          });
        } 
  }