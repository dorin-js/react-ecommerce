import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'
import { mobile, tablet } from '../responsive'

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
