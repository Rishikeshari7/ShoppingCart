import { createSlice } from '@reduxjs/toolkit'
// const initialState=[];
export const CartSlice = createSlice({
  name: "cart",
  initialState:[],
  reducers: {
    addCart: (state, action) => {
     return [...state,action.payload]
    },
 
  },
})


export const { addCart } = CartSlice.actions;

export default CartSlice.reducer;