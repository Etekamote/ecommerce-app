import {Link} from "react-router-dom"
import { styled } from 'styled-components';

export const Navbar = () => {

    const StyledNav = styled.nav`
    padding: 0rem 5%;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
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
    color: black;

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


  return (
    <StyledNav><StyledUl>
        <StyledLi><StyledLink to="/">Home</StyledLink></StyledLi>
        <StyledLi>
            <StyledLink to="/">New</StyledLink>
        <StyledSubMenu>
        <StyledLi2><StyledLink to="/">Women</StyledLink></StyledLi2>
        <StyledLi2><StyledLink to="/">Men</StyledLink></StyledLi2>
        <StyledLi2><StyledLink to="/">Kids</StyledLink></StyledLi2>
        </StyledSubMenu>
        </StyledLi>
        <StyledLi>
            <StyledLink to="/">Women</StyledLink>
            <StyledSubMenu>
        <StyledLi2><StyledLink to="/">T-shirt</StyledLink></StyledLi2>
        <StyledLi2><StyledLink to="/">Dress</StyledLink></StyledLi2>
        <StyledLi2><StyledLink to="/">Pants</StyledLink></StyledLi2>
        <StyledLi2><StyledLink to="/">U</StyledLink></StyledLi2>
        </StyledSubMenu>
            </StyledLi>
        <StyledLi>
        <StyledLink to="/">Men</StyledLink>
            <StyledSubMenu>
        <StyledLi2><StyledLink to="/">T-shirt</StyledLink></StyledLi2>
        <StyledLi2><StyledLink to="/">Dress</StyledLink></StyledLi2>
        <StyledLi2><StyledLink to="/">Pants</StyledLink></StyledLi2>
        <StyledLi2><StyledLink to="/">U</StyledLink></StyledLi2>
        </StyledSubMenu>
        </StyledLi>
        <StyledLi>
        <StyledLink to="/">Kids</StyledLink>
            <StyledSubMenu>
        <StyledLi2><StyledLink to="/">T-shirt</StyledLink></StyledLi2>
        <StyledLi2><StyledLink to="/">Dress</StyledLink></StyledLi2>
        <StyledLi2><StyledLink to="/">Pants</StyledLink></StyledLi2>
        <StyledLi2><StyledLink to="/">U</StyledLink></StyledLi2>
        </StyledSubMenu>
        </StyledLi>
        <StyledLi><StyledLink to="/">Sale</StyledLink></StyledLi>
        </StyledUl></StyledNav>
  )
}
