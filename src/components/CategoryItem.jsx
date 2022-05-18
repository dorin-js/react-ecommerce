import styled from 'styled-components'
import { Button } from './Slider'

const Container = styled.div`
  position: relative;
  /* margin: 3px; */
  /* flex: 1; */
  grid-column: span 2;
  &:nth-child(n + 4) {
    grid-column: span 3;
  }
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  gap: 1.5rem;
  text-transform: uppercase;
  background: rgba(255, 255, 255, 0.4);
  letter-spacing: 2px;
`
const Title = styled.div``

export default function CategoryItem({ item }) {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  )
}
