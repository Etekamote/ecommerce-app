import {Link} from "react-router-dom"
import { styled } from 'styled-components';
const StyledNav = styled.nav`
padding: 0rem 5%;
border-top: 1px solid #0a66fa;
border-bottom: 1px solid #0a66fa;
font-family: "Bebas Neue";
margin-bottom: 5rem;
`

const StyledUl = styled.ul`
list-style: none;
display: flex;
justify-content: center;
position: relative;
font-size: 2.4rem;
`

const StyledLi = styled.li`
padding: 1rem 2rem;
&:not(:first-of-type){
    margin-left: 1rem;
}

&:hover > ul{
    display: flex;
}

`

const StyledLi2 = styled.li`

&:not(:last-of-type)::after{
    content: "/";
    margin-left: 1rem;
    margin-right: 1rem;
}

`

const StyledLink = styled(Link)`
text-decoration: none;
color: #0a66fa;

&:hover{
    text-decoration: underline;
}

`

const StyledSubMenu = styled(StyledUl)`
position: absolute;
top: 100%;
left: 0;
display: none;
width: 100%;
padding: 1rem 0 2.5rem;
// justify-content: start;
font-size: 1.6rem;
`
export const Navbar = () => {

 


  return (
    <StyledNav><StyledUl>
        <StyledLi><StyledLink to="/">Home</StyledLink></StyledLi>
        <StyledLi>
            <StyledLink to="/products/women">Women</StyledLink>
            <StyledSubMenu>
        <StyledLi2><StyledLink to="/products/women/tshirt">T-shirt</StyledLink></StyledLi2>
        <StyledLi2><StyledLink to="/products/women/hoodie">Hoodie</StyledLink></StyledLi2>
        <StyledLi2><StyledLink to="/products/women/dress">Dress</StyledLink></StyledLi2>
        </StyledSubMenu>
            </StyledLi>
        <StyledLi>
        <StyledLink to="/products/men">Men</StyledLink>
            <StyledSubMenu>
        <StyledLi2><StyledLink to="/products/men/tshirt">T-shirt</StyledLink></StyledLi2>
        <StyledLi2><StyledLink to="/products/men/hoodie">Hoodie</StyledLink></StyledLi2>
        <StyledLi2><StyledLink to="/products/men/pants">Pants</StyledLink></StyledLi2>
        </StyledSubMenu>
        </StyledLi>
        <StyledLi><StyledLink to="/products/sale">Sale</StyledLink></StyledLi>
        </StyledUl></StyledNav>
  )
}
