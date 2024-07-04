import React, { useEffect, useState } from "react";
import css from "./NavBarShop.module.css";
import useProducts from "../../http/useProduct";
// import { useDispatch } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { showAction } from "../../store";

const NavBarShop = () => {
  const { products, isLoading, error } = useProducts();
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  const onClickHandle = (text) => {
    if (text === "" || text === "all") {
      const dataLoad = products;
      dispatch(showAction.UpDateProduct(dataLoad));
      console.log(text, dataLoad);
    } else {
      const dataLoad = products.filter((product) => product.category === text);
      dispatch(showAction.UpDateProduct(dataLoad));
      console.log(text, dataLoad);
    }
    // useEffect(() => {
    //   setData(dataLoad);
    // });
  };
  return (
    <div className={css.content}>
      <h4>CATEGORIES</h4>
      <div className={`${css.name} ${css.item}`}>APPLE</div>
      <div className={css.item}>
        <button
          className={css.btn}
          onClick={() => {
            onClickHandle("all");
          }}
        >
          ALL
        </button>
      </div>
      <div className={`${css.kink} ${css.item}`}>IPHONE & MAC</div>
      <div className={css.item}>
        <button
          className={css.btn}
          onClick={() => {
            onClickHandle("iphone");
          }}
        >
          iPhone
        </button>
      </div>
      <div className={css.item}>
        <button
          className={css.btn}
          onClick={() => {
            onClickHandle("ipad");
          }}
        >
          Ipad
        </button>
      </div>
      <div className={css.item}>
        <button
          className={css.btn}
          onClick={() => {
            onClickHandle("macbook");
          }}
        >
          Macbook
        </button>
      </div>
      <div className={`${css.kink} ${css.item}`}>WIRELESS</div>
      <div className={css.item}>
        <button
          className={css.btn}
          onClick={() => {
            onClickHandle("airpod");
          }}
        >
          Airpod
        </button>
      </div>
      <div className={css.item}>
        <button
          className={css.btn}
          onClick={() => {
            onClickHandle("watch");
          }}
        >
          Watch
        </button>
      </div>
      <div className={`${css.kink} ${css.item}`}>OTHER</div>
      <div className={css.item}>
        <button
          className={css.btn}
          onClick={() => {
            onClickHandle("mouse");
          }}
        >
          Mouse
        </button>
      </div>
      <div className={css.item}>
        <button
          className={css.btn}
          onClick={() => {
            onClickHandle("keyboard");
          }}
        >
          Keyboard
        </button>
      </div>
      <div className={css.item}>
        <button className={css.btn} onClick={() => onClickHandle("other")}>
          Other
        </button>
      </div>
    </div>
  );
};

export default NavBarShop;
