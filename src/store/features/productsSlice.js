import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loadingProducts: false,
  productsData: [],
  productsErrors: null,
}

export const productsSlice = createSlice({
  name: 'allProducts',
  initialState,
  reducers: {
    setLoadingTrue: (state) => {
      state.loadingProducts = true
    },
    setLoadingFalse: (state) => {
      state.loadingProducts = false
    },
  },
})

export const { setLoadingFalse, setLoadingTrue } = productsSlice.actions
export default productsSlice.reducer
