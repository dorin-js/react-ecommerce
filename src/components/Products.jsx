import styled from 'styled-components'
import { useEffect } from 'react'
import axios from 'axios'
import {
  setLoadingFalse,
  setLoadingTrue,
  setProducts,
} from '../store/features/productsSlice'

import { mobile, tablet } from '../responsive'
import { useDispatch, useSelector } from 'react-redux'
import Product from './Product'
import { WindowSharp } from '@mui/icons-material'

const Container = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  display: grid;
  padding: 20px;
  /* flex-wrap: wrap; */
  /* margin: 0 auto; */
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 110px 35px;
  ${mobile({ gridTemplateColumns: '1fr' })}
  ${tablet({ gridTemplateColumns: '1fr 1fr' })}
`

const baseUrl = 'https://course-api.com/react-store-products'

export default function Products({ featured, cat, filters, sort }) {
  console.log(cat, filters, sort)
  const dispatch = useDispatch()
  const loadingProducts = useSelector((state) => state.Products.loadingProducts)
  const productsData = useSelector((state) => state.Products.productsData)
  const getProducts = async (url) => {
    // console.log(loadingProducts)
    // console.log('pre', productsData)
    dispatch(setLoadingTrue())
    // console.log(loadingProducts)
    const response = await axios.get(url, {
      headers: { 'Access-Control-Allow-Origin': '*' },
    })
    dispatch(setProducts(response.data))
    window.localStorage.setItem(
      'storage_products',
      JSON.stringify(response.data)
    )
    // console.log('fetched', response.data)
    dispatch(setLoadingFalse())
    // console.log(loadingProducts)
    // console.log(productsData)
  }
  useEffect(() => {
    getProducts(baseUrl)
  }, [])
  const productsInLocalStorage = JSON.parse(
    window.localStorage.getItem('storage_products')
  )

  const filteredProducts = productsInLocalStorage.filter(
    (pr) =>
      filters &&
      (filters.category !== 'all' ? pr.category === filters.category : pr) &&
      (filters.color !== 'all'
        ? (pr.colors[0] || pr.colors[1] || pr.colors[2]) === filters.color
        : pr)
  )
  console.log('filtered', filteredProducts)
  return (
    <div>
      <Container>
        {productsInLocalStorage ? (
          featured ? (
            productsInLocalStorage.map(
              (product) =>
                product.featured && (
                  <Product product={product} key={product.id} />
                )
            )
          ) : (
            filteredProducts.map((product) => (
              <Product product={product} key={product.id} />
            ))
          )
        ) : (
          <div>Loading...</div>
        )}
      </Container>
    </div>
  )
}
