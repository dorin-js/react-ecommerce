import React, { useState } from 'react'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close'
import { mobile, tablet } from '../responsive'

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  ${mobile({
    padding: '0 5px',
    fontSize: '12px',
  })} /* transition: all 0.4s ease; */
  ${tablet({
    padding: '0 5px',
    fontSize: '12px',
  })}
`

export default function Announcement() {
  const [state, setState] = useState(true)

  return (
    <>
      {state && (
        <Container>
          <span
            style={{
              gridColumn: '2/3',
              textAlign: 'center',
              letterSpacing: '1px',
            }}
          >
            Super Deal! Free Shipping on Orders Over $50
          </span>
          <span style={{ gridColumn: '3/4' }}>
            <CloseIcon
              style={{
                cursor: 'pointer',
                width: '15px',
                display: 'flex',
                alignItems: 'center',
                marginLeft: '90%',
              }}
              onClick={() => {
                setState(false)
              }}
            />
          </span>
        </Container>
      )}
    </>
  )
}
