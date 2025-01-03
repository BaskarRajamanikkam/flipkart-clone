import { createSlice } from '@reduxjs/toolkit';


const initialState = {value : [] };


export const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
        setProducts : (state,action)=>{
            state.value = action.payload
        }
    }
})

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;