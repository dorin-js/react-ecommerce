import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loadingProducts: false,
  productsData: [],
  productsErrors: null,
  productsInCart: [],
  cartQuantity: 0,
  cartTotalPrice: 0,
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
    addInCart: (state, action) => {
      state.cartQuantity += action.payload.quantity
      state.productsInCart.push(action.payload)
      state.cartTotalPrice += action.payload.price * action.payload.quantity
    },
  },
})

export const { setLoadingFalse, setLoadingTrue, setProducts, addInCart } =
  productsSlice.actions
export default productsSlice.reducer
