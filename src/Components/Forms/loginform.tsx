import React, { useState } from 'react'
import { db } from '../../Firebase/config';
import {collection, getDocs, query, where} from "firebase/firestore"
import { login as LoginUser } from '../../Redux/slices/userSlice';
import { useDispatch } from 'react-redux';
import { styled } from 'styled-components';
import { SubmitButton } from '../Buttons/submitButton';


const StyledForm = styled.form`
display: flex;
align-items: center;
flex-direction: column;
gap: 1.5rem;
`
const StyledInput = styled.input`
border: 1px solid #0a66fa;
height: 3rem;
width: 20rem;
`
const StyledLabel = styled.label`
display: inline-block;
text-align: left;
margin-bottom: 5px;
font-size: 1.4rem;
color: #0a66fa;
`
const StyledInputGroup = styled.div`
display: flex;
flex-direction: column;
`
export const LoginForm = () => {
 
  const usersRef = collection(db, "users")
  const [login, setLogin] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [error, setError] = useState<boolean>(false)
  const dispatch = useDispatch()
  

  const handleSubmit = async (e: React.FormEvent) =>{
    e.preventDefault()
    const q = query(usersRef, where("email", "==", login))
    const docs = await getDocs(q)
    
    if(docs.size === 0){
      setError(true)
      return
    }
    else{
      setError(false)
    }

    docs.forEach((doc) =>{
      const data = doc.data()
      if(data.password === password){
        setError(false)
        dispatch(LoginUser({
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          country: data.country,
          city: data.city,
          homeNo: data.homeNo,
          phone: data.phone,
          street: data.street,
          streetNo: data.streetNo,
          logged: true 
        }))
      }
      else{
        setError(true)
      }
    })
    

  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInputGroup><StyledLabel htmlFor='email'>E-mail:</StyledLabel>
      <StyledInput type="text" id="email" name="email" value={login} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setLogin(e.target.value)}/></StyledInputGroup>
      <StyledInputGroup>
      <StyledLabel htmlFor='password'>Password:</StyledLabel>
      <StyledInput type="password" name = "password" value={password}  onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setPassword(e.target.value)}/>
      </StyledInputGroup>
     
     <SubmitButton title="Login!" />

      {error && <p>Invalid login or password</p>}
    </StyledForm>
  )
}




