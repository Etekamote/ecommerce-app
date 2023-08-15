import { useParams } from "react-router-dom"

export const Products = () => {
  const {category, subcategory} = useParams();
  return (
    <div>{category}, {subcategory}</div>
  )
}
