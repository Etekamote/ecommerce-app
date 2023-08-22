import React, { useEffect, useState } from 'react'
import {collection, getDocs} from "firebase/firestore"
import { db } from '../Firebase/config'
import { useLocation, useParams } from 'react-router-dom'
import { useProduct } from '../hooks/useProduct'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'


const StyledArticle = styled.article`
display: flex;
margin: 0 10rem;
`

const StyledLeft = styled.div``
const StyledRight = styled.div``

export const Product = () => {
  const {id} = useParams();
  const navigate = useNavigate()
  const data = useProduct(id as string)

  if(data === null){
    navigate("/")
  }
 
    return (
<StyledArticle>
  <StyledLeft>sss</StyledLeft>
  <StyledRight>aaassssss</StyledRight>
</StyledArticle>
   
    

  )
}
