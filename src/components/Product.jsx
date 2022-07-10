import React from 'react'
import styled from 'styled-components'
import { ShoppingCartOutlined } from '@mui/icons-material'
import ZoomInIcon from '@mui/icons-material/ZoomIn'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { Link } from 'react-router-dom'
import { mobile, tablet } from '../responsive'

const Container = styled.div`
  position: relative;
`
const Image = styled.img`
  max-width: 500px;
  max-height: 500px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`
export const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 500px;
  max-height: 500px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  gap: 1.5rem;
  text-transform: uppercase;
  /* background: rgba(255, 255, 255, 0.3); */
  /* background: rgba(2, 2, 2, 0.1); */
  letter-spacing: 2px;
  /* text-shadow: 1px 2px 30px #888; */
  color: #333;
  opacity: 0;
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 1;
    background: rgba(59, 59, 59, 0.15);
  }
  ${mobile({ opacity: '1' })}
  ${tablet({ opacity: '1' })}
`
const Icon = styled.div`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background: rgba(8, 8, 8, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fbfbfb;
  opacity: 0.9;
  transition: all 0.3s ease;
  &:hover {
    cursor: pointer;
    background: #ffffff;
    color: teal;
  }
`
const ProductTitle = styled.h2`
  text-transform: uppercase;
  font-size: 1.2rem;
  letter-spacing: 1px;
`
const Price = styled.span`
  font-size: 1.2rem;
  letter-spacing: 1px;
`
const FlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default function Product({ product }) {
  return (
    <Container>
      <Image src={product.image} loading="lazy" />
      <Info>
        {/* <Icon>
          <ShoppingCartOutlined style={{ fontSize: '28px' }} />
        </Icon> */}
        <Link to={`/product/${product.id}`} className="r-link">
          <Icon>
            <ZoomInIcon style={{ fontSize: '28px' }} />
          </Icon>
        </Link>
        <Icon>
          <FavoriteBorderIcon style={{ fontSize: '28px' }} />
        </Icon>
      </Info>
      <FlexBetween>
        <ProductTitle>{product.name}</ProductTitle>
        <Price>{product.price / 100}</Price>
      </FlexBetween>
    </Container>
  )
}
