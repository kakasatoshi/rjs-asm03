import React from "react";
import useProduct from "../../http/useProduct";
import formatPrice from "../Layout/formatPrice";
import css from "./CartItem.module.css"

const CartItem = () => {
  const { products, isLoad, err } = useProduct();

  if (isLoad) {
    return <div>Loading...</div>;
  }

  if (err) {
    return <div>Error: {err}</div>;
  }

  if (!products || products.length === 0) {
    return <div>No products available.</div>;
  }

  const product = products[0];

  return (
    <div>
      <div className="">
        <div className="row">
          <div className={`col-2 mr-4 ml-4 ${css.img}`}><img src={product.img1} alt='sanpham' /></div>
          <div className="col-2 mr-4 ml-4">{product.name}</div>
          <div className="col-2 mr-4 ml-4">{formatPrice(product.price)}</div>
          <div className="col-2 mr-4 ml-4">QUANTITY</div>
          <div className="col-2 mr-4 ml-4">TOTAL</div>
          <div className="col-2 mr-4 ml-4">REMOVE</div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
