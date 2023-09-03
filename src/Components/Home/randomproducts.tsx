import React from 'react'
import { useProducts } from '../../hooks/useProducts'
import { ProductInterface } from '../../interfaces/ProductInterface';
import { styled} from 'styled-components';
import { RandomProductItem } from './randomProductItem';

const StyledSection = styled.section`
margin-top: 5rem;
`
const StyledH2 = styled.h2`
font-family: "Bebas Neue";
font-size: 4rem;
border-bottom: 1px solid grey;
`

const StyledDiv = styled.div`
display: flex;
justify-content: space-between;
padding: 1.5rem;
`

export const RandomProducts = ({category}:{category: string}) => {

    const shuffle = (array: ProductInterface[]) => { 
        for (let i = array.length - 1; i > 0; i--) { 
          const j = Math.floor(Math.random() * (i + 1)); 
          [array[i], array[j]] = [array[j], array[i]]; 
        } 
        return array; 
      }; 


    const allProducts = shuffle(useProducts(category))
    const selectedProducts = allProducts.slice(0,5)
    console.log(`all ${category}:`,allProducts)
    console.log(`${category}:`,selectedProducts)


    
  return (
    <StyledSection>
        <StyledH2>{category}</StyledH2>
        <StyledDiv>
            {selectedProducts.map(item => <RandomProductItem key={item.id} img={item.imgs[0]} name={item.name} id={item.id} price={item.price}/>)}
        </StyledDiv>
    </StyledSection>
  )
}
