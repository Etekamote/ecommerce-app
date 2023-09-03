import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../Firebase/config";
import { useState, useEffect } from "react";
import { ProductInterface } from "../interfaces/ProductInterface";

export function useProducts(whereValue?: string, secondWhereValue?: string): ProductInterface[] {
  const ref = collection(db, "products");
  const [products, setProducts] = useState<ProductInterface[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      let q: any = query(ref);
        
   

      if (whereValue) {
        if (secondWhereValue) {
          q = query(ref, where("category", "==", whereValue), where("subcategory", "==", secondWhereValue));
        } else {
          q = query(ref, where("category", "==", whereValue));
        }
        if(whereValue === "sale"){
            q = query(ref, where("sale", "==", true));
        }
      }

      

      const qSnapShot = await getDocs(q);
      const fetchedProducts: ProductInterface[] = qSnapShot.docs.map((doc) => ({
        id: doc.id, // Store the document ID using the existing field name
        ...doc.data() as Object,
      } as ProductInterface));
      setProducts(fetchedProducts);
    }

    fetchProducts();
  }, [whereValue,secondWhereValue]);

  return products;
}

