import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: 0,
  },
  reducers: {
    add:()=>{},
    remove:()=>{},
  },
})


export const { add ,remove} = cartSlice.actions

export default cartSlice.reducer