import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
background-color:  #0a66fa;
border: 1px solid #0a66fa;
width: 15rem;
height: 5rem;
border-radius: 8px;
color: #fff;
cursor: pointer;
font-size: 1.6rem;

`
export const SubmitButton = ({title}:{title: string}) => {
  return (
        <StyledButton>{title}</StyledButton>

  )
}
