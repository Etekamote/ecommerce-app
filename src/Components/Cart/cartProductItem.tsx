import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { styled } from 'styled-components'
import { useDispatch } from 'react-redux'
import { remove } from '../../Redux/slices/cartSlice'


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

const StyledName = styled.h3`
font-size: 1.6rem;
`
const StyledPrice = styled.span<{$discount: boolean}>`
font-size: 1.5rem;
color: grey;
text-decoration: ${props => props.$discount ? "line-through" : "none"};
font-weight: ${props => props.$discount ? "none" : "bold"};
`

const StyledTrash = styled(FontAwesomeIcon)`
position: absolute;
right: 5rem;
top: 50%;
transform: translateY(-50%);
cursor: pointer;
`


export const CartProductItem = ({data, setTotalPrice}) => {
    
    const dispatch = useDispatch()

    const removeItem = (id: string) =>{
        dispatch(remove(id))
    }

    useEffect(()=>{
        setTotalPrice(prev => prev + data.price)
        return () => {
          setTotalPrice(prev => prev - data.price) 
        }
    },[data.price])


  return (
    <StyledCartProductItem>
        <StyledProductImg src={data.img} alt={data.name} />
        <StyledDescription>
            <StyledName>{data.name}</StyledName>
            <StyledPrice $discount={data.discount > 0} >${data.price}</StyledPrice>
        </StyledDescription>
        <StyledTrash icon={faTrash} onClick={()=>{removeItem(data.id)}} />
    </StyledCartProductItem>
  )
}
