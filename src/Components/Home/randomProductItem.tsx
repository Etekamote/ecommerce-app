import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'


const StyledArticle = styled.article`
display: flex;
flex-direction: column;
width: 15%;

`

const StyledImg = styled.img`
width: 100%;
height: 30rem;
&:hover{
    border: 1px solid black;
}
`

const StyledDiv = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
`
const StyledName = styled(Link)`
color: #000;
font-weight: bold;
text-decoration: none;
`
const StyledPrice = styled.span``

export const RandomProductItem = ({img, name, id, price}: {img: string, name: string, id: string, price: number}) => {
  return (
    <StyledArticle>
        <Link to={`product/${id}`}><StyledImg src={img} alt={name}/></Link>
        <StyledDiv>
        <StyledName to={`product/${id}`}>{name}</StyledName>
            <StyledPrice>${price}</StyledPrice>
        </StyledDiv>
        </StyledArticle>
  )
}
