import React from "react";
import BannerShop from "../components/shop/BannerShop";
import css from "./ChechoutPage.module.css";
import { useSelector } from "react-redux";
import formatPrice from "../components/Layout/formatPrice";

const CheckoutPage = () => {
  const listCart = useSelector((state) => state.cart.listCart);
  const total = listCart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  return (
    <div className={`${css.container}`}>
      <BannerShop text="CHECKOUT" textRight="HOME/CART/CHECKOUT" />
      <h2 className="p-2">BILLING DETAILS</h2>
      <div className={`row justify-content-between`}>
        <div className="left col-7 d-flex flex-column">
          <label className="mt-2" htmlFor="" style={{ fontWeight: "bold" }}>
            FULL NAME:
          </label>
          <input type="text" placeholder="Enter Your Full Name Here!" />
          <label className="mt-2" htmlFor="" style={{ fontWeight: "bold" }}>
            EMAIL:
          </label>
          <input type="email" placeholder="Enter Your Email Here!" />
          <label className="mt-2" htmlFor="" style={{ fontWeight: "bold" }}>
            PHONE NUMBER:
          </label>
          <input type="text" placeholder="Enter Your Phone Number Here!" />
          <label className="mt-2" htmlFor="" style={{ fontWeight: "bold" }}>
            ADDRESS
          </label>
          <input type="text" placeholder="Enter Your Address Here!" />
          <div>
            <button
              className="btn text-white mt-2 col-2"
              style={{ backgroundColor: "#000" }}
            >
              Place order
            </button>
          </div>
        </div>
        <div className="right col-5 row m-0">
          <div
            className={`container bg-dank column text-left col-auto p-3 ${css.total}`}
          >
            <h4 className="mb-3">YOUR ORDER</h4>
            {listCart.map((item, index) => (
              <div key={index} className="row justify-content-between mb-2">
                <p className="col-auto fw-bold fs-6 fst-italic text-truncate">
                  {item.product.name}
                </p>
                <p className="col-auto mb-0">{`${formatPrice(
                  item.product.price
                )} X ${item.quantity}`}</p>
                <hr className={css.hr} />
              </div>
            ))}
            <div className="row justify-content-between mt-4">
              <p className="col-auto mb-0 fs-5 fw-bold">TOTAL</p>
              <p className="col-auto mb-0 ">{formatPrice(total)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
