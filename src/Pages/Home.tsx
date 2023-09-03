import React from 'react'
import { Hero } from '../Components/Home/hero'
import { styled } from 'styled-components'


const StyledMain = styled.main`
padding: 0 5rem;
`


export const Home = () => {
  return (
    <StyledMain>
      <Hero />
      </StyledMain>
      
    
  )
}
