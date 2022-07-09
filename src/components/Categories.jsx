import styled from 'styled-components'
import { mobile } from '../responsive'
import { categories } from '../data'
import CategoryItem from './CategoryItem'

// const Container = styled.div`
//   display: flex;
//   padding: 20px;
//   /* flex-wrap: wrap; */
//   margin: 0 auto;
//   justify-content: center;
// `
const Container = styled.div`
  display: grid;
  padding: 20px;
  /* flex-wrap: wrap; */
  /* margin: 0 auto; */
  justify-content: center;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 5px;
  ${mobile({ gridTemplateColumns: '1fr' })}
`

export default function Categories() {
  return (
    <>
      <Container catLength={categories.length}>
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </Container>
    </>
  )
}
