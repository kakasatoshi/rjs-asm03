import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import css from "./Total.module.css";

const Total = () => {
  return (
    <div className={`container bg-dank column text-left p-3 ${css.container}`}>
      <h4 className="mb-3">CART TOTAL</h4>
      <div className="row justify-content-between mb-2">
        <p className="col-auto mb-0">SUBTOTAL</p>
        <p className="col-auto mb-0">11000vnd</p>
      </div>
      <hr />
      <div className="row justify-content-between mb-4">
        <p className="col-auto mb-0">TOTAL</p>
        <p className="col-auto mb-0">1000vnd</p>
      </div>
      <div className="d-flex flex-column mt-3">
        <input type="text" className="mb-2" placeholder="Enter your coupon"/>
        <button className="btn btn-primary" style={{background:"#000"}}>Apply coupon</button>
      </div>
    </div>
  );
};

export default Total;
