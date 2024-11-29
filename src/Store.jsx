import { configureStore } from "@reduxjs/toolkit"
import DataToDisplay from './Redux/Slices/DataToDisplaySlice'
import logger from 'redux-logger'
import cartItems from './Redux/Slices/CartItems'

export const store = configureStore({
    reducer: {
        DataToDisplay: DataToDisplay,
        cartItems: cartItems
    },
    middleware:(getDefaultMiddleWare)=>getDefaultMiddleWare().concat(logger)
})