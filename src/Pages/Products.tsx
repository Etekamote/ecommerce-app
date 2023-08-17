
import { useParams } from "react-router-dom"
import { useProducts } from "../hooks/useProducts";


export const Products = () => {
  const {category, subcategory} = useParams();
  const products = useProducts(category,subcategory)
  console.log(category)

  return (
    <div>{products.map(product => <h1>{product.name}</h1>)}</div>
  )
}
