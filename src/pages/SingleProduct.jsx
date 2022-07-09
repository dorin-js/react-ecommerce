import React, { useState } from 'react'
import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { Button } from '../components/Slider'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { mobile, tablet } from '../responsive'
import { useLocation } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  justify-content: center;
`
const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  ${mobile({ flexDirection: 'column' })}
  ${tablet({ flexDirection: 'column' })}
`
const ImageContainer = styled.div`
  /* width: 50%; */
  display: flex;
  justify-content: center;
  padding: 50px;
`
const InfoContainer = styled.div`
  width: 50%;
  padding: 50px;
  ${mobile({ width: '100%', padding: '20px', textAlign: 'justify' })}
  ${tablet({ width: '100%', padding: '20px', textAlign: 'justify' })}
`
const Title = styled.h1`
  margin: 0;
  padding: 0;
`
const Desc = styled.p``
const Price = styled.span`
  font-size: 40px;
  font-weight: 100;
`
const FilterContainer = styled.div`
  /* display: flex;
  justify-content: space-between; */
  margin: 30px 0;
`
const Filter = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
`
const FilterTitle = styled.div`
  margin-right: 15px;
`
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  margin-right: 15px;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    border: 2px solid teal;
  }
  &:active {
    border: 2px solid teal;
  }
`
const AddContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  ${mobile({ width: '100%' })}
  ${tablet({ width: '100%' })}
`
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`
const Amount = styled.span`
  border: 1px solid teal;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`
const TealButton = styled(Button)`
  &:hover {
    color: teal;
    background-color: white;
    border: 1px solid teal;
  }
`

export default function SingleProduct() {
  const location = useLocation()
  const id = location.pathname.split('/')[2]
  const productsInLocalStorage = JSON.parse(
    window.localStorage.getItem('storage_products')
  )
  const found = productsInLocalStorage.find((element) => element.id === id)
  const [product] = useState(found)
  console.log('single P ', product)
  return (
    <Container>
      <Wrapper>
        <ImageContainer>
          <Splide aria-label="My Favorite Images">
            <SplideSlide>
              <img src={product.image} alt="1" />
            </SplideSlide>
            {/* <SplideSlide>
              <img
                src="https://demo.thepunte.com/punte-pro/ecommerce-furniture/wp-content/uploads/sites/10/2017/03/lamp-51.jpg"
                alt=" 2"
              />
            </SplideSlide> */}
          </Splide>
          {/* <Image src="https://demo.thepunte.com/punte-pro/ecommerce-furniture/wp-content/uploads/sites/10/2017/03/lamp-5.jpg" /> */}
        </ImageContainer>
        <InfoContainer>
          <Title>{product.name.toUpperCase()}</Title>
          <Desc>{product.description} </Desc>
          <Price>$ {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.colors.map((color) => (
                <FilterColor key={color} color={color} />
              ))}
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <RemoveIcon />
              <Amount>1</Amount>
              <AddIcon />
            </AmountContainer>
            <TealButton>ADD TO CART</TealButton>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  )
}
