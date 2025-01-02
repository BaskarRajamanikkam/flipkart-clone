import { configureStore } from '@reduxjs/toolkit';

import productReducer from './features/ProductSlice';


const store = configureStore({
reducer:{
    product: productReducer
}
});


export default store;
