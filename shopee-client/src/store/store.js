import { configureStore } from '@reduxjs/toolkit'
import cartReduser from '../features/cartSlice'
import stockReduser from '../features/stockSlice'

export default configureStore({
  reducer: {
      cart:cartReduser,
      stock:stockReduser
  },
})