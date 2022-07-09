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
  const [filters, setFilters] = useState({ category: 'all', color: 'all' })
  const [sort, setSort] = useState('asc')
  const handleFilters = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value.toLowerCase(),
    })
  }
  const handleSort = (e) => {
    setSort(e.target.value)
  }
  return (
    <Container>
      <Title>PRODUCTS</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select defaultValue={'Color'} name="color" onChange={handleFilters}>
            <Option value="Color" disabled>
              Color
            </Option>
            <Option>All</Option>
            <Option value="#0000ff">Blue</Option>
            <Option value="#ffb900">Yellow</Option>
            <Option value="#ff0000">Red</Option>
            <Option value="#00ff00">Green</Option>
            <Option value="#000">Black</Option>
          </Select>
        </Filter>
        <Filter>
          <Select defaultValue={'All'} name="category" onChange={handleFilters}>
            <Option value="Category" disabled>
              Category
            </Option>
            <Option>All</Option>
            <Option>Bedroom</Option>
            <Option>Dining</Option>
            <Option>Living room</Option>
            <Option>Office</Option>
            <Option>Kitchen</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select defaultValue={'asc'} name="sort" onChange={handleSort}>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products
        cat={location.pathname.split('/')[2]}
        filters={filters}
        sort={sort}
      />
    </Container>
  )
}
