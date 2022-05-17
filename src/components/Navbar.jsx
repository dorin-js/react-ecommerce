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
  padding: 10px 20px;
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
  font-weight: bold;
  font-size: 2rem;
  margin: 0;
`
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 30px;
`

const Navbar = () => {
  return (
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
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
