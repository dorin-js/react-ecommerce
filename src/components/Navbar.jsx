import React from 'react'
import { useSelector } from 'react-redux'
import { ShoppingCartOutlined } from '@mui/icons-material'
import Badge from '@mui/material/Badge'
import styled from 'styled-components'
import searchIco from '../img/icons/search2.svg'
import SearchIcon from '@mui/icons-material/Search'
import { Link } from 'react-router-dom'
import { mobile, tablet } from '../responsive'

const Nav = styled.nav`
  position: sticky;
  top: -0.5px;
  z-index: 10;
`

const Container = styled.div`
  height: 60px;
  border-bottom: 0.5px solid #eaeaea;
  background: white;
`
const Wrapper = styled.div`
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: '10px 10px' })}
  ${tablet({ padding: '10px 10px' })}
`
export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
export const Center = styled.div`
  flex: 1;
  text-align: center;
`
export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const Language = styled.span`
  cursor: pointer;
  font-size: 14px;
  margin-right: 30px;
  ${mobile({ display: 'none' })}
  ${tablet({ marginRight: '10px' })}
`
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 0.5px solid lightgray;
  padding: 5px;
  ${mobile({ alignItems: 'flex-start' })}
  &:focus-within {
    border: 1px solid #009688;
    outline: none;
  }
`
const Input = styled.input`
  /* background: url(${searchIco}) no-repeat right;
  background-size: 20px; */
  /* padding-right: 30px; */
  border: none;
  outline: none;
  ${mobile({ width: '0px' })}
  ${tablet({ width: '50px' })}
  &:focus {
    border: none;
    outline: none;
  }
`
export const Logo = styled.h1`
  cursor: pointer;
  font-weight: bold;
  font-size: 2rem;
  margin: 0;
  user-select: none;
  ${mobile({ fontSize: '1.6rem' })}
`
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 30px;
  &:hover {
    color: teal;
    transition: 0.3s ease;
  }
  ${mobile({ marginLeft: '20px' })}
  ${tablet({ marginLeft: '20px' })}
`
const Select = styled.select`
  border: 1px solid lightgray;
  outline: none;
  padding: 5px;
  font-size: 14px;
  font-family: 'Urbanist', sans-serif;
`
const Option = styled.option`
  background: white;
  padding: 10px;
`

const Navbar = () => {
  // const [cart, setCart] =
  const cart = JSON.parse(localStorage.getItem('localCart'))
  const cartQuantity = useSelector((state) => state.Products.cartQuantity)
  return (
    <Nav>
      <Container>
        <Wrapper>
          <Left>
            <Language>
              <Select defaultValue={'EN'}>
                <Option value="EN">EN</Option>
                <Option>RO</Option>
              </Select>
            </Language>
            <InputContainer>
              <Input placeholder="Search" aria-label="search" />
              <SearchIcon
                style={{
                  cursor: 'pointer',
                  color: 'gray',
                  fontSize: '18px',
                  flex: 1,
                }}
              />
            </InputContainer>
          </Left>
          <Center>
            <Link to="/">
              <Logo>LAMA.</Logo>
            </Link>
          </Center>
          <Right>
            <MenuItem>
              <Link to="/products">SHOP</Link>
            </MenuItem>
            <MenuItem>
              <Link to="register">REGISTER</Link>
            </MenuItem>
            <MenuItem>
              <Link to="login">SIGN IN</Link>
            </MenuItem>
            <Link to="/cart">
              <MenuItem>
                <Badge
                  badgeContent={cartQuantity || cart.cartQuantity}
                  color="primary"
                >
                  <ShoppingCartOutlined
                    className="cart hover"
                    style={{ cursor: 'pointer' }}
                  />
                </Badge>
              </MenuItem>
            </Link>
          </Right>
        </Wrapper>
      </Container>
    </Nav>
  )
}

export default Navbar
