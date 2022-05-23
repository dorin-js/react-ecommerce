import React from 'react'
import styled from 'styled-components'
import { keyframes } from 'styled-components'
import ups from '../img/404.png'
const Div = styled.div`
  color: teal;
  display: flex;
  justify-content: center;
  position: relative;
  width: 80vw;
  font-size: 2rem;
  padding: 30px;
`
const translate = keyframes`
  from {
    transform: translateX(${(props) => props.from}px);
  }

  to {
    transform: translateX(${(props) => props.to}px);;
  }
`
const Img = styled.img`
  min-width: 250px;
  width: 40%;
  transform: translateX(-115px);
  user-select: none;
  pointer-events: none;
  /* position: absolute;
  left: -20px; */
  animation: ${translate} 0.5s cubic-bezier(0.18, 0.96, 0.72, 0.98);
`
const H1 = styled.h1`
  animation: ${translate} 0.5s cubic-bezier(0.18, 0.96, 0.72, 0.98);
`

export default function NotFound() {
  return (
    <Div>
      <Img src={ups} loading="lazy" from="-400" to="-115" />
      <H1 from="-800" to="0">
        UPS.. NOT THE LAMA YOU ARE LOOKING FOR!
      </H1>
    </Div>
  )
}
