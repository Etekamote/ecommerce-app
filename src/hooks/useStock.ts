import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../Firebase/config";
import { useState, useEffect } from "react";

export function useStock(id:string){

    const ref = collection(db, "stock")
    const [stock, setStock] = useState<any[]>([])

    useEffect(()=>{
        async function fetchStock(){
     const q = query(ref, where("productId", "==", id))   
     const qSnapShot = await getDocs(q)
    const fetchedStock: string[] = qSnapShot.docs
    .map((item) => {
    if(item.data().stock > 0 ){
        return item.data().size
    }}
    )
    setStock(fetchedStock)
    }

    fetchStock()
    },[id])

    return stock;

}
