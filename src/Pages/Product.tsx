import React, { useEffect, useState } from 'react'
import {collection, getDocs} from "firebase/firestore"
import { db } from '../Firebase/config'

export const Product = () => {
  
  const [data, setData] = useState<any[]>()

  useEffect(()=>{
    const getProdukt = async () =>{
        const produkt = await getDocs(collection(db, "products"))
        const filteredProduct = produkt.docs.map((doc) =>({...doc.data(), id: doc.id}))
        setData(filteredProduct)
    }
    getProdukt()
  })

  const getConsole = () =>{
    console.log(data)
  }

    return (<>
     <div>{
         data?.map((x) =>(
           <img src={x.img}></img>
         ))
         }</div>
    <button onClick={getConsole}>KLIK</button>
    </>

  )
}
