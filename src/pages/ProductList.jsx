import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Products from '../components/Products'

const Container = styled.div``
const Title = styled.h1`
  margin: 20px;
`
const Filter = styled.div`
  margin: 20px;
`
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
`
export const Select = styled.select`
  border: 1px solid lightgray;
  outline: none;
  padding: 10px;
  margin: 10px;
  font-size: 16px;
`
export const Option = styled.option`
  background: white;
  padding: 10px;
  line-height: 25px;
`

export default function ProductList() {
  const location = useLocation()
  const [filters, setFilters] = useState({})
  return (
    <Container>
      <Title>PRODUCTS</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select defaultValue={'Color'}>
            <Option value="Color" disabled>
              Color
            </Option>
            <Option>Red</Option>
            <Option>Green</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Black</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select defaultValue={'Newest'}>
            <Option value="Newest">Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
    </Container>
  )
}
