/*
    ? Utility functions allow us to keep our files clean and organize functions
    ? that we may need in multiple files in one location
*/

// ? Params:
// ?    cartItems      -->  current cartItems in the state.
// ?    cartItemToAdd  -->  to be added cart item.
export const addItemToCart = (cartItems, cartItemToAdd) => {
    const isExistCartItem = cartItems.find(item => item.id === cartItemToAdd.id);
    if (isExistCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
}