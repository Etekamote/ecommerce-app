import React, { useState, useEffect } from 'react'
import { styled } from 'styled-components'
import { SignInButton } from '../Components/Buttons/signInButton'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useNavigate } from 'react-router-dom'
import { LoginForm } from '../Components/Forms/loginform'
import { RegisterForm } from '../Components/Forms/registerform'

const StyledSection = styled.section`
text-align: center;
`

const StyledButtons = styled.section`
display: flex;
justify-content: center;
gap: 3rem;
margin-bottom: 3rem;
`

export const SignIn = () => {
  const [active, setActive] = useState({
    login: true,
    register: false
})
const ifLogged = useSelector((state: any) => state.user.value.logged)
const navigate = useNavigate()

useEffect(()=>{
ifLogged && navigate("/")

})




  return (
    <StyledSection>
      <StyledButtons>
    <SignInButton title="Login" active = {active.login} setActive={setActive} />
    <SignInButton title="Register" active = {active.register} setActive={setActive} />
    </StyledButtons>
    {active.login ? <LoginForm /> : <RegisterForm />}
    </StyledSection>
    
  )
}
