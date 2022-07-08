import styled from 'styled-components'
import { useEffect } from 'react'
import axios from 'axios'
import {
  setLoadingFalse,
  setLoadingTrue,
  setProducts,
} from '../store/features/productsSlice'

import { mobile, tablet } from '../responsive'
import { popularProducts } from '../data'
import { useDispatch, useSelector } from 'react-redux'
import Product from './Product'

const Container = styled.div`
  display: grid;
  padding: 20px;
  /* flex-wrap: wrap; */
  /* margin: 0 auto; */
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 110px 15px;
  ${mobile({ gridTemplateColumns: '1fr' })}
  ${tablet({ gridTemplateColumns: '1fr 1fr' })}
`

const baseUrl = 'https://course-api.com/react-store-products'

export default function Products() {
  const dispatch = useDispatch()
  const loadingProducts = useSelector((state) => state.Products.loadingProducts)
  const productsData = useSelector((state) => state.Products.productsData)
  console.log(loadingProducts)
  const getProducts = async (url) => {
    dispatch(setLoadingTrue())
    const response = await axios.get(url)
    dispatch(setProducts(response.data))
    console.log(productsData)
    dispatch(setLoadingFalse())
  }
  useEffect(() => {
    getProducts(baseUrl)
  }, [])

  return (
    <div>
      <Container>
        {loadingProducts ? (
          <div>Loading...</div>
        ) : (
          productsData.map(
            (product) => product.featured && <Product product={product} />
          )
        )}
      </Container>
    </div>
  )
}
