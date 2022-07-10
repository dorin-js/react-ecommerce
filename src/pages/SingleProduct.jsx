import React, { useState } from 'react'
import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { Button } from '../components/Slider'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { mobile, tablet } from '../responsive'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addInCart } from '../store/features/productsSlice'

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
  const dispatch = useDispatch()
  const productsInLocalStorage = JSON.parse(
    window.localStorage.getItem('storage_products')
  )
  const found = productsInLocalStorage.find((element) => element.id === id)
  const [product] = useState(found)
  const [quantity, setQuantity] = useState(1)
  const [color, setColor] = useState(product.colors[0])
  console.log(color)
  const handleAddToCart = () => {
    dispatch(
      addInCart({ ...product, quantity, color, price: product.price / 100 })
    )
  }
  // const cart = useSelector((state) => state.Products)
  // useEffect(() => {
  //   localStorage.setItem('localCart', JSON.stringify(cart))
  // }, [cart])

  return (
    <Container>
      <Wrapper>
        <ImageContainer>
          <Splide aria-label="My Favorite Images">
            <SplideSlide>
              <img src={product.image} alt="product" />
            </SplideSlide>
          </Splide>
        </ImageContainer>
        <InfoContainer>
          <Title>{product.name.toUpperCase()}</Title>
          <Desc>{product.description} </Desc>
          <Price>$ {product.price / 100}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.colors.map((col) => (
                <FilterColor
                  key={col}
                  color={col}
                  onClick={() => {
                    setColor(col)
                  }}
                />
              ))}
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <RemoveIcon
                className="hover-pointer"
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
              />
              <Amount>{quantity}</Amount>
              <AddIcon
                className="hover-pointer"
                onClick={() => quantity < 30 && setQuantity(quantity + 1)}
              />
            </AmountContainer>
            <TealButton onClick={handleAddToCart}>ADD TO CART</TealButton>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  )
}
