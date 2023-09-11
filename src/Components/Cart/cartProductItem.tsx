import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { styled } from 'styled-components'
import { useDispatch } from 'react-redux'
import { remove } from '../../Redux/slices/cartSlice'
import { Link } from 'react-router-dom'


const StyledCartProductItem = styled.article`
display: flex;
border-bottom: 1px solid grey;
padding: 1rem 0;
position: relative;
`

const StyledProductImg = styled.img`
width: 7rem;
height: 7rem;
`
const StyledDescription = styled.p `
display: flex;
flex-direction: column;
margin-left: 2rem;
`

const StyledName = styled(Link)`
font-size: 1.6rem;
color: black;
text-decoration: none;
font-weight: bold;
`
const StyledPrice = styled.span`
font-size: 1.5rem;
color: grey;
font-weight: bold;
`

const StyledTrash = styled(FontAwesomeIcon)`
position: absolute;
right: 5rem;
top: 50%;
transform: translateY(-50%);
cursor: pointer;
`

const StyledAmount = styled.span`
font-size: 1.3rem;
`


export const CartProductItem = ({data, setTotalPrice}) => {
    
    const dispatch = useDispatch()

    const removeItem = (id: string) =>{
        dispatch(remove(id))
    }

    useEffect(()=>{
        setTotalPrice(prev => prev + (data.price * data.amount))
        return () => {
          setTotalPrice(prev =>prev -(data.price * data.amount)) 
        }
    },[data.price, data.amount])


  return (
    <StyledCartProductItem>
        <StyledProductImg src={data.img} alt={data.name} />
        <StyledDescription>
            <StyledName to={`product/${data.id}`}>{data.name}</StyledName>
            <StyledPrice >${data.price}</StyledPrice>
            <StyledAmount>Qty: {data.amount}</StyledAmount>
        </StyledDescription>
        <StyledTrash icon={faTrash} onClick={()=>{removeItem(data.id)}} />
    </StyledCartProductItem>
  )
}
