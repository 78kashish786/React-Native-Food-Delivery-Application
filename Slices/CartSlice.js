import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
}

export const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.items = [...state.items, action.payload]
        },
        removeFromCart: (state, action) => {
            let newCart = [...state.items]
            let itemIndex = state.items.findIndex(item => item.id === action.payload);
            if (itemIndex) {
                newCart.splice(itemIndex, 1);
            } else {
                console.log("Cant remove the item that is not added to the cart");
            }
            state.items = newCart;
        },
        emptyCart: (state, action) => {
            state.items = [];
        }
    }
})

export const { addToCart, removeFromCart, emptyCart } = CartSlice.actions;

export const selectCartItems = state => state.cart.items;
export const selectCartItemsById = (state, id) => state.cart.items.filter(item => item.id == id);
export const selectTotal = state => state.cart.items.reduce((total, item) => total = total + item.price, 0);


export default CartSlice.reducer