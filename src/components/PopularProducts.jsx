import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'

const Container = styled.div`
  display: grid;
  padding: 20px;
  /* flex-wrap: wrap; */
  /* margin: 0 auto; */
  justify-content: center;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;
`

export default function PopularProducts() {
  return (
    <div>
      <Container>
        {popularProducts.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </Container>
    </div>
  )
}
