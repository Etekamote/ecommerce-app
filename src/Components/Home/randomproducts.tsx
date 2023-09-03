import React from 'react'
import { useProducts } from '../../hooks/useProducts'
import { ProductInterface } from '../../interfaces/ProductInterface';

export const RandomProducts = ({category}:{category: string}) => {

    const shuffle = (array: ProductInterface[]) => { 
        for (let i = array.length - 1; i > 0; i--) { 
          const j = Math.floor(Math.random() * (i + 1)); 
          [array[i], array[j]] = [array[j], array[i]]; 
        } 
        return array; 
      }; 


    const products = shuffle(useProducts(category))
    console.log(products)
    
  return (
    <div>Hi!</div>
  )
}
