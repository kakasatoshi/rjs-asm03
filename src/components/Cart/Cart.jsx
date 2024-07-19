import React, { useEffect } from "react";
import CartItem from "./CartItem";
import css from "./Cart.module.css";
import Total from "./Total";
import { useSelector } from "react-redux";
import WestIcon from "@mui/icons-material/West";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const data = useSelector((state) => state.cart.listCart); // đã update ở trang layout lấy data từ localStorage
  // const testData = data.filter((e) => e.category === "watch");

  useEffect(() => {
    localStorage.setItem("listCart", JSON.stringify(data));
  }, [data]);
  console.log(data);
  const navigate = useNavigate();

  const goToCheckOut = React.useCallback(() => {
    navigate("/checkout");
  }, []);

  const goToShopPage = React.useCallback(() => {
    navigate("/shop");
  }, []);

  return (
    <div className={css.main}>
      <h2 className="p-4">SHOPPING CART</h2>
      <div className="row justify-content-between">
        <div className="left col-7">
          <div className={`row ${css.container} text-center`}>
            <div className={`col-2 text-center`}>IMAGE</div>
            <div className="col-3 text-center">PRODUCT</div>
            <div className="col-2 text-center">PRICE</div>
            <div className="col-2 text-center">QUANTITY</div>
            <div className="col-2 text-center">TOTAL</div>
            <div className="col-1 text-center">REMOVE</div>
          </div>
          {data.map((item, index) => (
            <CartItem
              product={item.product}
              key={index}
              quantity={item.quantity}
            />
          ))}
          <div
            className="d-flex flex-row justify-content-between p-2 mt-3"
            style={{ backgroundColor: "#F8F9FA" }}
          >
            <button className="btn" onClick={goToShopPage}>
              <WestIcon /> Continue shopping
            </button>
            <button className="btn" onClick={goToCheckOut}>
              Proceed to checkout <ArrowForwardIcon />
            </button>
          </div>
        </div>
        <div className="right col-4 column">
          <Total />
        </div>
      </div>
    </div>
  );
};

export default Cart;
