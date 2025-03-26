export const cart = [{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2
}, {
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1
}]; // we want to access the variable cart outside of this cart


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