import React from "react";
import BannerShop from "../components/shop/BannerShop";

const CartPage = () => {
  return (
    <div>
      <BannerShop text="CART" />
      <h2>SHOPPING CART</h2>
      <div className="d-flex row">
        <div>IMAGE</div>
        <div>PRODUCT</div>
        <div>PRICE</div>
        <div>QUANTITY</div>
        <div>TOTAL</div>
        <div>REMOVE</div>
      </div> 
    </div>
  );
};

export default CartPage;
