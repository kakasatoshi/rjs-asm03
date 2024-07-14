import React from "react";
import BannerShop from "../components/shop/BannerShop";
import css from "./ChechoutPage.module.css"

const CheckoutPage = () => {
  return (
    <div className={`${css.container}`}>
      
      <BannerShop text="CHECKOUT" textRight="HOME/CART/CHECKOUT" />
      <h2 className="p-2">BILLING DETAILS</h2>
      <div className={`row justify-content-between ${css.container}`}>
        <div className="left col-7 m-4 d-flex flex-column">
          <label className="mt-2" htmlFor="" style={{ fontWeight: "bold" }}>FULL NAME:</label>
          <input type="text" placeholder="Enter Your Full Name Here!"/>
          <label className="mt-2" htmlFor="" style={{ fontWeight: "bold" }}>EMAIL:</label>
          <input type="email" placeholder="Enter Your Email Here!"/>
          <label className="mt-2" htmlFor="" style={{ fontWeight: "bold" }}>PHONE NUMBER:</label>
          <input type="text" placeholder="Enter Your Phone Number Here!"/>
          <label className="mt-2" htmlFor="" style={{ fontWeight: "bold" }}>ADDRESS</label>
          <input type="text" placeholder="Enter Your Address Here!"/>
          <div>
          <button className="btn text-white mt-2 col-2" style={{backgroundColor:"#000"}}>Place order</button> 
          </div>
          
        </div>
        <div className="right col-auto column">
        <div className={`container bg-dank column text-left p-3 `}>
      <h4 className="mb-3">YOUR ORDER</h4>
      <div className="row justify-content-between mb-2">
        <p className="col-auto mb-0">SUBTOTAL</p>
        <p className="col-auto mb-0">11000vnd</p>
      </div>
      <hr />
      <div className="row justify-content-between mb-4">
        <p className="col-auto mb-0">TOTAL</p>
        <p className="col-auto mb-0">1000vnd</p>
      </div>
      <hr/>
      <div className=" row justify-content-between mb-4">
      <p className="col-auto mb-0">TOTAL</p>
      <p className="col-auto mb-0">1000vnd</p>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
