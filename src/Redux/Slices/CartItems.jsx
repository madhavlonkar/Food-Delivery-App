import { createSlice } from '@reduxjs/toolkit';



const cartItems = createSlice({
    name: 'cartItems',
    initialState: {
        cartItems: [],
        totalQuantity: 0
    },
    reducers: {
        addProduct(state, action) {
            const item = {
                ...action.payload,
            };

            const existingItemIndex = state.cartItems.findIndex(cartItem => cartItem.id === item.id);

            if (existingItemIndex >= 0) {
                state.cartItems[existingItemIndex].quantity += item.quantity;
                state.totalQuantity += item.quantity;
            } else {
                state.cartItems.push(item);
                state.totalQuantity += item.quantity;
            }


        },

        increaseQuantity(state, action) {
            const existingItemIndex = state.cartItems.findIndex(cartItem => cartItem.id === action.payload);
            state.cartItems[existingItemIndex].quantity += 1;
            state.totalQuantity += 1;
        },

        decreaseQuantity(state, action) {
            const existingItemIndex = state.cartItems.findIndex(cartItem => cartItem.id === action.payload);

            if (state.cartItems[existingItemIndex].quantity > 1) {
                state.cartItems[existingItemIndex].quantity -= 1;
                state.totalQuantity-=1
            }
            else {
                state.cartItems.splice(existingItemIndex, 1)
                state.totalQuantity-=1
            }

        },

        removeAllItemsFromCart(state) {
            state.cartItems = [];
            state.totalQuantity = 0;
        },

        deleteItemFromCart(state,action){
            const existingItemIndex = state.cartItems.findIndex(cartItem => cartItem.id === action.payload);
            state.totalQuantity-=state.cartItems[existingItemIndex].quantity
            state.cartItems.splice(existingItemIndex, 1)
        }


    }
});

export const { addProduct, increaseQuantity, decreaseQuantity, removeAllItemsFromCart,deleteItemFromCart } = cartItems.actions;
export default cartItems.reducer;