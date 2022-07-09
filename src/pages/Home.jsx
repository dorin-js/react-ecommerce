import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'

import Categories from '../components/Categories'
import Slider from '../components/Slider'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import styled from 'styled-components'

export const H2 = styled.h2`
  margin-bottom: 0;
  text-align: center;
`

export default function Home() {
  // const products = useSelector((state) => state.Products.productsData)
  // console.log('home:', products)
  // const featured = products.fileter
  return (
    <div>
      <Slider />
      <Categories />
      <H2>FEATURED PRODUCTS</H2>
      <Products featured="true" />
      <Newsletter />
    </div>
  )
}
