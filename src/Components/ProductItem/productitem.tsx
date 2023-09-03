import React from 'react';
import { ProductInterface } from '../../interfaces/ProductInterface';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledArticle = styled.article`
  margin-top: 20px; 
  display: flex;
  flex-direction: column;
  width: 30%;
`;

const StyledImage = styled.img`
  width: 100%; 
  height: 100%; 
  object-fit: cover;
  object-position: top;
  position: absolute;
  top: 0;
  left: 0;
  transition: opacity 0.3s ease-in-out;
  z-index: 1;
`;

const SecondImage = styled(StyledImage)`
  opacity: 0;
  z-index: 2;
`;

const StyledImages = styled.div`
  position: relative;
  width: 100%; 
  height: 50rem; 
  cursor: pointer;
  &:hover ${StyledImage} {
    opacity: 0;
  }
  &:hover ${SecondImage} {
    opacity: 1;
  }
`;

const StyledP = styled.p`
display: flex;
margin-top: 1rem;
justify-content: space-between;
align-items: center;
`

const StyledH2 = styled.h2`
color: #000;
font-family: "Bebas Neue";

`



const StyledPriceBox = styled.p`
display: flex;
gap: 2rem;

`

const StyledPrice = styled.span`
font-weight: bold;

`

const StyledLink = styled(Link)`
text-decoration: none;

&:hover{
  text-decoration: underline;
  color: black;
}
`

export const ProductItem = ({ product }: { product: ProductInterface }) => {
  const { id, imgs, name, price, sale } = product;

  return (
    <StyledArticle>
      <Link to={`../product/${id}`}>
      <StyledImages>
          <StyledImage src={imgs[0]} alt={`${name} - Image 1`} />
          <SecondImage src={imgs[1]} alt={`${name} - Image 2`} />
        
      </StyledImages>
      </Link>
      <StyledP>
      <StyledLink to={`../product/${id}`}><StyledH2>{name}</StyledH2></StyledLink>
      <StyledPriceBox>
        <StyledPrice>${price}</StyledPrice>
        
      </StyledPriceBox>
      </StyledP>
      
    </StyledArticle>
  );
};

