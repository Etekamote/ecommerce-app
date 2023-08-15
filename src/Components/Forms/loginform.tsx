import React, { useState } from 'react'
import { db } from '../../Firebase/config';
import {collection, getDocs, query, where} from "firebase/firestore"
import { login as LoginUser } from '../../Redux/slices/userSlice';
import { useDispatch } from 'react-redux';



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
      console.log("DATA:", data)
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
    <form onSubmit={handleSubmit}>
      <input type="text"  name="login" value={login} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setLogin(e.target.value)}/>
      <input type="password" name = "password" value={password}  onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setPassword(e.target.value)}/>
      <input type="submit" />
      {error && <p>Invalid login or password</p>}
    </form>
  )
}




