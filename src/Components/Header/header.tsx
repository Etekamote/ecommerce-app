import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { styled } from 'styled-components'
import { Navbar } from './navbar'
import { Topbar } from './topbar'

const StyledHeader = styled.header`
padding: 3rem 5%;
display: flex;
align-items: center;
justify-content: flex-end;
position: relative;
`
const StyledH1 = styled.p`
font-family: "Bebas Neue";
font-size: 4.8rem;
position: absolute;
left: 50%;
transform: translateX(-50%);
color: #0a66fa;
`

const StyledInput = styled.input`
margin-right: 10rem;
width: 20rem;
height: 3rem;
border: none;
padding: 0 1rem;
border-bottom: 1px solid grey;
`
const StyledIcon = styled(FontAwesomeIcon)`
cursor: pointer;

&:hover{
    color: #CDCDCD;
}
`

export const Header = () => {
  return (<>
  <Topbar />
    <StyledHeader>
        <StyledH1>imadeitup.com</StyledH1>
        <StyledInput type="text" placeholder="Search..."></StyledInput>
        {/* <StyledIcon icon={faBasketShopping} size="2x" /> */}
    </StyledHeader>
    <Navbar />
    </>
  )
}
