import SendIcon from '@mui/icons-material/Send'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
  height: 50vh;
  background: #fcf5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 60px;
  margin-bottom: 20px;
`
const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ padding: '10px 20px' })}
`
const InputContainer = styled.form`
  width: 30%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #777;
  outline: none;
  &:focus-within {
    border: 1px solid teal;
    outline: none;
  }
  ${mobile({ width: '80%' })}
`
const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 20px;
  line-height: 2;
  flex: 9;
  padding-left: 10px;
  &:focus {
    color: teal;
  }
`
const Button = styled.button`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  border: none;
  flex: 1;
  color: white;
  background: teal;
  &:hover {
    cursor: pointer;
  }
`

export default function Newsletter() {
  return (
    <Container>
      <Title>Newletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your Email" />
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  )
}
