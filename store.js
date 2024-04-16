import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Slices/CartSlice";
import RestaurantSlice from "./Slices/RestaurantSlice";

export const store = configureStore({
    reducer: {
        cart: CartSlice,
        restaurant:RestaurantSlice
    },
})