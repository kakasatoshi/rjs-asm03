import React from "react";
import BannerShop from "../components/shop/BannerShop";
import Cart from "../components/Cart/Cart";

const CartPage = () => {
  return (
    <div>
      <BannerShop text="CART" />
      <Cart />
    </div>
  );
};

export default CartPage;
