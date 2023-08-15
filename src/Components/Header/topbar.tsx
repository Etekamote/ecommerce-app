import { faArrowRightToBracket, faBasketShopping, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import { styled } from "styled-components"
import { useSelector } from "react-redux/es/hooks/useSelector"

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
  const ifLogged = useSelector((state: any) => state.user.value.logged)
  return (
    <StyledSection>
      {!ifLogged && <StyledLink to="/signin"><StyledIcon icon={faArrowRightToBracket} />Login / Register</StyledLink>}
      {ifLogged && <StyledLink to="/"><StyledIcon icon={faUser} />My account</StyledLink>}
      <StyledSpan><StyledIcon icon={faBasketShopping} />Cart</StyledSpan>
    </StyledSection>
  )
}
