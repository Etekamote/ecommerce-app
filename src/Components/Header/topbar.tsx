import { faArrowRightToBracket, faBasketShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import { styled } from "styled-components"

const StyledSection = styled.section`
text-align: right;
margin-right: 20rem;
margin-top: 2rem;
font-size: 1.4rem;
display: flex;
justify-content: flex-end;
font-weight: bold;
`

const StyledLink = styled(Link)`
text-decoration: none;

color: #0a66fa;

&:hover{
  color: #5999ff;
}

`

const StyledSpan = styled.span`
color: #0a66fa;
margin-left: 1rem;

&:hover{
  color: #5999ff;
  cursor: pointer;
}

`

const StyledIcon = styled(FontAwesomeIcon)`
color: #033e9c;
margin-right: 5px;
`



export const Topbar = () => {
  return (
    <StyledSection>
      <StyledLink to="/signin"><StyledIcon icon={faArrowRightToBracket} />Login / Register</StyledLink>
      <StyledSpan><StyledIcon icon={faBasketShopping} />Cart</StyledSpan>
    </StyledSection>
  )
}
