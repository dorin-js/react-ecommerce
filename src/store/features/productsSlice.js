import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loadingProducts: false,
  productsData: [],
  productsErrors: null,
}

export const productsSlice = createSlice({
  name: 'Products',
  initialState,
  reducers: {
    setLoadingTrue: (state) => {
      state.loadingProducts = true
    },
    setLoadingFalse: (state) => {
      state.loadingProducts = false
    },
    setProducts: (state, action) => {
      state.productsData = action.payload
    },
  },
})

export const { setLoadingFalse, setLoadingTrue, setProducts } =
  productsSlice.actions
export default productsSlice.reducer
