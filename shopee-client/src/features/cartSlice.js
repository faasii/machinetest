import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: [],
  },
  reducers: {
    increment: (state,action) => {
      let ind = state.value.findIndex(item => item.id === action.payload)
      state.value[ind].qty = state.value[ind].qty + 1
    },
    decrement: (state,action) => {
      let ind = state.value.findIndex(item => item.id === action.payload)
      if(state.value[ind].qty == 1){
        state.value.splice(ind,1)
      }else{
      state.value[ind].qty = state.value[ind].qty - 1

      }
    },
    addtocart: (state, action) => {
      state.value.push(action.payload)
    },
   
  },
})


export const { increment, decrement,addtocart } = cartSlice.actions

export default cartSlice.reducer