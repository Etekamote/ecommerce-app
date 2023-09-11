import React, { useEffect, useRef, useState } from 'react'

import { useParams } from 'react-router-dom'
import { useProduct } from '../hooks/useProduct'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { InfoBox } from '../Components/InfoBox/infoBox'
import { SubmitButton } from '../Components/Buttons/submitButton'
import { useDispatch,} from 'react-redux';
import {add} from "../Redux/slices/cartSlice"
import { useStock } from '../hooks/useStock'

const StyledArticle = styled.article`
display: flex;
margin: 0 7rem;
`

const StyledLeft = styled.div`
flex: 1;
`
const StyledRight = styled.div`
flex: 1;
padding-left: 8rem;
display: flex;
flex-direction: column;
gap: 5rem;
align-items: center;
padding-top: 10rem;

`
const MainImg = styled.div`
height: 60rem;
`
const StyledImg = styled.img`
width: 100%;
object-fit: cover;
object-position: top;
height: 100%;
cursor: pointer;
`

const SmallImgs = styled.div`
display: flex;
gap: 2rem;
margin-top: 1rem;
`

const StyledSmallImg = styled.img`
width: 10rem;
height: 10rem;
cursor: pointer;
`

const StyledH2 = styled.h2`
font-family: "Bebas Neue";
font-size: 4rem;
`

const StyledH3 = styled.h3`
font-size: 3rem;`

const StyledButtons = styled.div`
display: flex;
gap: 3rem;
`



export const Product = () => {
  const {id} = useParams();
  const data = useProduct(id as string)
  const stock = useStock(id as string)

 

  const navigate = useNavigate();
  const dispatch = useDispatch()


  const [mainImg, setMainImg] = useState<string>('')
  const [selectedSize, setSelectedSize] = useState<string>("")

  useEffect(() => {
    if (data) {
      if(data.id === ""){
        navigate("/")
      }
      else{setMainImg(data.imgs[0]);}
        
    }
  }, [data])

  useEffect(()=>{
    stock && setSelectedSize(stock[0])
  },[stock])


 const addToCart = () =>{
  dispatch(add({
    id: data?.id || "",
    name: data?.name || "",
    price: data?.price || 0,
    img: data?.imgs[0] || "",
    amount: 1
}))

 }

 const buyNow = () =>{
  addToCart()
  navigate("/checkout")
 }

 console.log(selectedSize)
 
    return (
<StyledArticle>
  <StyledLeft>
    <MainImg>
      <StyledImg src={mainImg} alt={data?.name} />
    </MainImg>
    <SmallImgs>
      {data?.imgs.map((img)=><StyledSmallImg src={img} alt={data?.name} onClick={()=> setMainImg(img)}></StyledSmallImg>)}
    </SmallImgs>
    <InfoBox title="Description" content={data?.description || ""} defaultOpen={true} />
    <InfoBox title="Material" content={data?.material || ""} />
  </StyledLeft>
  <StyledRight>
    <StyledH2>{data?.name}</StyledH2>
    <StyledH3>${data?.price}</StyledH3>
    <StyledButtons><SubmitButton title="Add to cart" action={addToCart}></SubmitButton>
    <SubmitButton title="Buy now" action={buyNow}></SubmitButton></StyledButtons>
 
  </StyledRight>
</StyledArticle>
   
    

  )
}
