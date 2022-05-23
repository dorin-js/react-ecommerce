import React from 'react'
import Categories from '../components/Categories'
import Slider from '../components/Slider'
import PopularProducts from '../components/PopularProducts'
import Newsletter from '../components/Newsletter'
import styled from 'styled-components'

export const H2 = styled.h2`
  margin-bottom: 0;
  text-align: center;
`

export default function Home() {
  return (
    <div>
      <Slider />
      <Categories />
      <H2>POPULAR PRODUCTS</H2>
      <PopularProducts />
      <Newsletter />
    </div>
  )
}
