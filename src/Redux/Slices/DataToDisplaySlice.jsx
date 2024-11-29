import { createSlice } from '@reduxjs/toolkit'
import FoodData from '../../Component/FoodItemsData';

// const biryaniItems = FoodData.filter(item => item.foodName.toLowerCase().includes('biryani'));

const DataToDisplay=createSlice({
    name:'dataToDisplay',
    initialState:{
        data:FoodData,
    },
    reducers:{
        addData(state,action){
            state.data=action.payload;
        }
    }
})

export const {addData}=DataToDisplay.actions;
export default DataToDisplay.reducer;

