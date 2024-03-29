import { createSlice } from '@reduxjs/toolkit'
// const initialState=[];
export const CartSlice = createSlice({
  name: "cart",
  initialState:[],
  reducers: {
    addCart: (state, action) => {
     return [...state,action.payload]
    },
    removeCart:(state,action)=>{
      return state.filter((ele)=>(ele.id!==action.payload))
    },
 
  },
})


export const { addCart,removeCart } = CartSlice.actions;

export default CartSlice.reducer;