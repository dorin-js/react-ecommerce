import React from 'react'
import { ShoppingCartOutlined } from '@mui/icons-material'
import Badge from '@mui/material/Badge'
import styled from 'styled-components'
import searchIco from '../img/icons/search2.svg'
import SearchIcon from '@mui/icons-material/Search'

const Container = styled.div`
  height: 60px;
`
const Wrapper = styled.div`
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
const Center = styled.div`
  flex: 1;
  text-align: center;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const Language = styled.span`
  cursor: pointer;
  font-size: 14px;
  margin-right: 30px;
`
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 0.5px solid lightgray;
  padding: 5px;
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
  &:focus {
    border: none;
    outline: none;
  }
`
const Logo = styled.h1`
  cursor: pointer;
  font-weight: bold;
  font-size: 2rem;
  margin: 0;
  user-select: none;
`
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 30px;
  &:hover {
    color: teal;
    transition: 0.3s ease;
  }
`

const Navbar = () => {
  return (
    <nav>
      <Container>
        <Wrapper>
          <Left>
            <Language>EN</Language>
            <InputContainer>
              <Input />
              <SearchIcon
                style={{
                  cursor: 'pointer',
                  color: 'gray',
                  fontSize: '18px',
                }}
              />
            </InputContainer>
          </Left>
          <Center>
            <Logo>LAMA.</Logo>
          </Center>
          <Right>
            <MenuItem>REGISTER</MenuItem>
            <MenuItem>SIGN IN</MenuItem>
            <MenuItem>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined
                  className="cart hover"
                  style={{ cursor: 'pointer' }}
                />
              </Badge>
            </MenuItem>
          </Right>
        </Wrapper>
      </Container>
    </nav>
  )
}

export default Navbar
