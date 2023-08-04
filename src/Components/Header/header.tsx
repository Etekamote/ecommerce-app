import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { styled } from 'styled-components'

const StyledHeader = styled.header`
padding: 3rem 10%;
`
const StyledH1 = styled.h1`
font-family: "Bebas Neue";
text-align: center;
font-size: 4.8rem
`

export const Header = () => {
  return (
    <StyledHeader>
        <StyledH1>imadeitup.com</StyledH1>
        <FontAwesomeIcon icon={faBasketShopping} />
    </StyledHeader>
  )
}
