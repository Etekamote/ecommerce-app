import React, { useEffect, useState } from 'react'
import {collection, getDocs} from "firebase/firestore"
import { db } from '../Firebase/config'
import { useLocation, useParams } from 'react-router-dom'
import { useProduct } from '../hooks/useProduct'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'


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

const StyledH2 = styled.h2``

export const Product = () => {
  const {id} = useParams();
  const data = useProduct(id as string)

  const navigate = useNavigate();

  const [mainImg, setMainImg] = useState('')

  useEffect(() => {
    if (data) {
      if(data.id === ""){
        navigate("/")
      }
      else{setMainImg(data.imgs[0]);}
        
    }
  }, [data])


 

  
 
    return (
<StyledArticle>
  <StyledLeft>
    <MainImg>
      <StyledImg src={mainImg} alt={data?.name} />
    </MainImg>
    <SmallImgs>
      {data?.imgs.map((img)=><StyledSmallImg src={img} alt={data?.name} onClick={()=> setMainImg(img)}></StyledSmallImg>)}
    </SmallImgs>
  </StyledLeft>
  <StyledRight>
    <StyledH2>{data?.name}</StyledH2>
  </StyledRight>
</StyledArticle>
   
    

  )
}
