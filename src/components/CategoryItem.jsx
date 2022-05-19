import styled from 'styled-components'
// import { Button } from './Slider'

const Container = styled.div`
  position: relative;
  /* margin: 3px; */
  /* flex: 1; */
  grid-column: span 2;
  &:nth-child(n + 4) {
    grid-column: span 3;
  }
`
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
export const Info = styled.div`
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
  background: rgba(255, 255, 255, 0.3);
  /* background: rgba(2, 2, 2, 0.1); */
  letter-spacing: 2px;
  /* text-shadow: 1px 2px 30px #888; */
  color: #333;
`
const Title = styled.div``
const Button = styled.button`
  outline: none;
  border: 1px solid #999;
  padding: 15px;
  background: #f1f1f1;
  color: #222;
  font-size: 16px;
  letter-spacing: 1px;
  opacity: 0.9;
  &:hover {
    cursor: pointer;
    background: #666;
    color: #f1f1f1;
  }
`

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
