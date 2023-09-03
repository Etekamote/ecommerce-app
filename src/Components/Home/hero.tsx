import React from 'react'
import { styled } from 'styled-components'
import heroImage from '../../assets/hero.jpg';
import { SubmitButton } from '../Buttons/submitButton';
import { Link } from 'react-router-dom';


const StyledSection = styled.section`
background-image: url(${heroImage});
background-size: cover;
height: 70vh;
display: flex;
flex-direction: column;
gap: 10rem;
justify-content: center;
padding-left: 10rem;
`
const StyledH2 = styled.h2`
font-family: "Bebas Neue";
color: #fff;
font-size: 4.6rem;
`

export const Hero = () => {
  return (
    <StyledSection>
        <StyledH2>Check out new women collection</StyledH2>
        <Link to="products/women"><SubmitButton title="Check!"/></Link>
    </StyledSection>
  )
}
