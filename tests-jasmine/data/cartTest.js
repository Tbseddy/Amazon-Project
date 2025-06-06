


import { addToCart, cart } from '../../data/cart.js';

describe('test suite: addToCart', () => {
    it('adds an existing product to the cart', () => {

    });

    it('adds a new product to the cart', () => {
        
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([]);
        });

        console.log(localStorage.getItem('cart'));


        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6'); // to check if this code is working correctly we will check what the cart looks like. first we need to import the cart.

        // let's check if the card.length is correct. To compare values we are going to use the function.

        expect(cart.length).toEqual(1);



    });
});