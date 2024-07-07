import React from "react";

const cart = () => {
  return (
    <div>
      <h2>SHOPPING CART</h2>
      <div className="container"></div>
      <div className="row">
        <div className="mr-4 ml-4">IMAGE</div>
        <div className="mr-4 ml-4">PRODUCT</div>
        <div className="mr-4 ml-4">PRICE</div>
        <div className="mr-4 ml-4">QUANTITY</div>
        <div className="mr-4 ml-4">TOTAL</div>
        <div className="mr-4 ml-4">REMOVE</div>
      </div>
    </div>
  );
};

export default cart;
