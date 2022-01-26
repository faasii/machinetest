import { createSlice } from '@reduxjs/toolkit'

export const stockSlice = createSlice({
  name: 'stock',
  initialState: {
    value: [],
  },
  reducers: {
    stockincrement: (state, action) => {
      let ind = state.value.findIndex(item => item._id === action.payload)
      state.value[ind].stock = state.value[ind].stock - 1
    },
    stockdecrement: (state, action) => {
      let ind = state.value.findIndex(item => item._id === action.payload)
      if (state.value[ind].stock === 1) {
        return null
      } else {
        state.value[ind].stock = state.value[ind].stock + 1

      }
    },
    addStock: (state, action) => {
      console.log('payload',action.payload)
      let ind = state.value.findIndex(item => item._id === action.payload.id)
      state.value[ind].stock = state.value[ind].stock - action.payload.qty
    },
    addProduct: (state, action) => {
      state.value = action.payload
    },

  },
})


export const { stockincrement, stockdecrement, addStock,addProduct } = stockSlice.actions

export default stockSlice.reducer