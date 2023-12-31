import React from 'react'
import { styled } from 'styled-components'


const StyledButton = styled.button<{$open?: boolean}>`
background-color: ${props => props.$open ? "#fff" : "#000"};
border: 1px solid #000;
width: 15rem;
height: 5rem;
border-radius: 8px;
color: ${props => props.$open ? "#000" : "#fff"};
cursor: pointer;
font-size: 1.6rem;

`

interface SignInState {
  login: boolean
  register: boolean
}


export const SignInButton = ({title, active, setActive}: {title: string, active:boolean, setActive:  React.Dispatch<React.SetStateAction<SignInState>>}) => {

  const changeState = (title:string) =>{
    if(title === "Login"){
      setActive({
        login: true,
        register: false
    })
    }
    else{
      setActive({
        login: false,
        register: true
    })
    }
  }

  return (
    <StyledButton $open={active} onClick={()=> changeState(title)}>{title}</StyledButton>
  )
}
