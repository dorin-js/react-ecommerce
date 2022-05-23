import { css } from 'styled-components'

export const mobile = (props) => {
  return css`
    @media screen and (max-width: 480px) {
      ${props}
    }
  `
}
export const tablet = (props) => {
  return css`
    @media screen and (min-width: 481px) and (max-width: 780px) {
      ${props}
    }
  `
}
