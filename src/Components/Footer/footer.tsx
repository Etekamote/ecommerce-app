import React from 'react'
import { styled } from 'styled-components'

const StyledFooter = styled.footer`
border-top: 1px solid #dbdbdb;
margin-top: 3rem;
text-align: center;
text-transform: uppercase;
color: #dbdbdb;
font-size: 1rem;
padding-top: 1rem;
`

export const Footer = () => {
  return (
    <StyledFooter>Imadeitup.com® All rights reserved</StyledFooter>
  )
}
