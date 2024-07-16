import React from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "./ShowPopup.module.css";
import { showActions } from "../../store";
import { useNavigate } from "react-router-dom";
import formatPrice from "../Layout/formatPrice";

const ShowPopup = ({ product }) => {
  const show = useSelector((state) => state.show.show);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickClose = () => {
    dispatch(showActions.setShow());
  };

  const onClickHandle = () => {
    dispatch(showActions.setShow());
    navigate("/shop/" + product._id.$oid);
  };

  if (!show) return null;

  if (!product) return null;

  return (
    <div className={css.main}>
      <div className={css.contentMain}>
        <div className={css.icon}>
          <button className={css.btnClose} onClick={onClickClose}>
            X
          </button>
        </div>
        <div className={css.content}>
          <div className={`${css.img} ${css.item}`}>
            <img src={product.img1} alt="product" />
          </div>
          <div className={`${css.contentRight} ${css.item}`}>
            <h4 className={css.name}>{product.name}</h4>
            <p className={`col-auto ${css.price}`}>
              {formatPrice(product.price)}
            </p>
            <p>{product.short_desc}</p>
            <div>
              <button className={css.btn} onClick={onClickHandle}>
                View Detail
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowPopup;
