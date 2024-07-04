import { useState, useEffect } from "react";

import useHttp from "./useHttp";

const str =
  "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74";
const requestConfig = {
  url: str,
  method: "GET",
};

const useProducts = () => {
  const { isLoading, error, sendRequest } = useHttp();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const applyData = (data) => {
      const arr = data.map((e) => ({
        _id: e._id,
        name: e.name,
        price: e.price,
        category: e.category,
        short_desc: e.short_desc,
        long_desc: e.long_desc,
        img1: e.img1,
        img2: e.img2,
        img3: e.img3,
        img4: e.img4,
      }));

      // console.log(arr);
      setProducts(data);
    };
    sendRequest(requestConfig, applyData);
  }, []);

  return { products, isLoading, error };
};

export default useProducts;
