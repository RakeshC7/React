import { createSlice } from '@reduxjs/toolkit';

const initialCartItem = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartItem,
    reducers: {
        // here action should carry some extra information about the which item added
        addItemToCart(state, action) {
            const newItem = action.payload;
            // check if item exists in "items" Array if it is then increase the number, else new item and push it in array. 
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity++;
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title 
                });
            }  else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price; 
            };
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            state.totalQuantity--;
            if(existingItem.quantity === 1) {
                state.items = state.items.filter( item => item.id !== id );
            } else {
                existingItem.quantity--;
                // existingItem.totalPrice = existingItem.totalPrice - existingItem.price; 
            }
        }
    }
});

export default cartSlice;
export const cartActions = cartSlice.actions