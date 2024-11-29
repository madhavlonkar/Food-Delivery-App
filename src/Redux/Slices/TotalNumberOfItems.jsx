import { createSlice } from '@reduxjs/toolkit';

const totalNumOfItemsInCart=createSlice({
    name:'totalNumOfItemsInCart',
    initialState:{
        numOfItems:0
    }
    ,reducers:{
        increment:(state)=>{
            state.numOfItems+=1
        }
    }
})


export const {increment} =totalNumOfItemsInCart.actions;
export default totalNumOfItemsInCart;
