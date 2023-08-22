
import { useParams } from "react-router-dom"
import { useProducts } from "../hooks/useProducts";
import { ProductItem } from "../Components/ProductItem/productitem";
import styled from "styled-components";


const StyledProducts = styled.div`
display: flex;
justify-content: space-around;
flex-wrap: wrap;
`

export const Products = () => {
  const {category, subcategory} = useParams();
  const products = useProducts(category,subcategory)
  console.log(category)


  return (
    <StyledProducts>{products.map(product => <ProductItem product={product} />)}</StyledProducts>
  )
}
