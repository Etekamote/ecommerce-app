import { doc, getDoc } from "firebase/firestore";
import { db } from "../Firebase/config";
import { ProductInterface } from "../types/ProductInterface";
import { useEffect, useState } from "react";

export function useProduct(id: string): ProductInterface | null {
  const [product, setProduct] = useState<ProductInterface | null>(null);

  useEffect(() => {
    async function getData() {
      const productRef = doc(db, "products", id);
      const data = await getDoc(productRef);
      
      if (data.exists()) {
        const productData = {
          id: data.id,
          ...data.data()
        } as ProductInterface;
        setProduct(productData);
      } else {
        setProduct(null);
      }
    }

    getData();
  }, [id]);

  return product;
}
