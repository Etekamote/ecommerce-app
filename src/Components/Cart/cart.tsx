import React from 'react'
import { remove, toggleCart as toggleCartAction } from '../../Redux/slices/cartSlice'
import { useSelector, useDispatch } from 'react-redux'
import { styled } from 'styled-components'
import { CartProductItem } from './cartProductItem'

const StyledCart = styled.section<{$open?: boolean}>`
width: 50rem;
min-height: 70vh;
position: absolute;
top: 0;
right: 0;
background-color: #fff;
z-index: 999;
display: ${props => props.$open ? "block" : "none"};
-webkit-box-shadow: -9px 1px 26px -23px rgba(0, 0, 0, 1);
-moz-box-shadow: -9px 1px 26px -23px rgba(0, 0, 0, 1);
box-shadow: -9px 1px 26px -23px rgba(0, 0, 0, 1);
padding: 3rem 5rem;
`

const StyledCloseButton = styled.span`
position: absolute;
top: 3rem;
right: 3rem;
font-size: 5rem;
z-index: 9999;
cursor: pointer;
`
const StyledProducts = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;
`
const StyledH2 = styled.h2`
font-size: 4rem;
margin-bottom: 5rem;

`



export const Cart = () => {
    const cartItems = useSelector((state:any) => state.cart.value.items)
    const isCartOpen = useSelector((state:any) => state.cart.value.isOpen)
    const dispatch = useDispatch()
    const toggleCart = () =>{
    dispatch(toggleCartAction())
    }
  return (
    <StyledCart $open={isCartOpen}>
        <StyledCloseButton onClick={toggleCart}>X</StyledCloseButton>
        <StyledH2>Cart</StyledH2>
        <StyledProducts>
        {cartItems.map(item => <CartProductItem data={item}/>)}
        </StyledProducts>
    </StyledCart>
  )
}
