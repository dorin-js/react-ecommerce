import styled from 'styled-components'
import { useEffect } from 'react'
import axios from 'axios'

import { mobile, tablet } from '../responsive'
import { popularProducts } from '../data'

const Container = styled.div`
  display: grid;
  padding: 20px;
  /* flex-wrap: wrap; */
  /* margin: 0 auto; */
  justify-content: center;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;
  ${mobile({ gridTemplateColumns: '1fr' })}
  ${tablet({ gridTemplateColumns: '1fr 1fr' })}
`

const baseUrl = 'https://course-api.com/react-store-products'

export default function Products() {
  const getProducts = async (url) => {
    const response = await axios.get(url)
    console.log(response.data)
  }
  useEffect(() => {
    getProducts(baseUrl)
  }, [])

  return (
    <div>
      <Container>
        {/* {products.map((product) => (
          <Product />
        ))} */}
      </Container>
    </div>
  )
}
