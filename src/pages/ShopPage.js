import React, {useState, useEffect } from "react";
import NavBarShop from "../components/shop/NavBarShop";
import ListProduct from "../components/List/ListProduct";
import { useDispatch, useSelector } from "react-redux";
import { showAction } from "../store";
import useProducts from "../http/useProduct";
import BannerShop from "../components/shop/BannerShop";
import css from "./ShopPage.module.css"

const ShopPage = () => {
  const { products, isLoading, error } = useProducts();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.show.productData);
  // const [dataProduct,setDataProduct]=useState(show);

  // useEffect(() => {
  //   if (products && products.length > 0) {
  //     dispatch(showAction.LoadProductData(products));
  //   }
  // }, [dataProduct, dispatch]);

  // console.log(dataProduct);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className={css.content}>
      <div className={css.banner}>
        <BannerShop text="SHOP"/>
      </div>
      <div className={css.main}>
        <div className={css.left}>
           <NavBarShop />
        </div>
        <div className={css.right}>
          <div></div>
          <div><ListProduct products={data} /> </div>
        </div>
      </div>
      
      
    </div>
  );
};

export default ShopPage;
