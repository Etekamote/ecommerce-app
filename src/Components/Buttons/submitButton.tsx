import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
background-color:  #000;
border: 1px solid #000;
width: 15rem;
height: 5rem;
border-radius: 8px;
color: #fff;
cursor: pointer;
font-size: 1.6rem;

`
export const SubmitButton = ({title, action}:{title: string, action?: any}) => {
  return (
        <StyledButton onClick={action}>{title}</StyledButton>

  )
}
