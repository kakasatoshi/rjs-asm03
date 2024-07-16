import React, { Fragment } from "react";
import css from "./Items.module.css";
import ShowPopup from "./ShowPopup";
import { useDispatch, useSelector } from "react-redux";
import { showActions } from "../../store";
import formatPrice from "../Layout/formatPrice";

const ItemProduct = ({ product }) => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.show.show);
  // console.log(id);

  const onClick = () => {
    dispatch(showActions.setShow());
    dispatch(showActions.setId(product._id.$oid));
  };

  if (!product || product.length === 0) {
    return <h4>No Product Found</h4>;
  }

  return (
    <Fragment>
      <div className={css.content}>
        <div className={css.img}>
          <img src={product.img1} alt="product" onClick={onClick} />
        </div>
        <h3 className={css.name}>{product.name || "Product Name"}</h3>
        <h6 className={css.price}>
          {formatPrice(product.price) || "Product Price"}
        </h6>
      </div>
    </Fragment>
  );
};

export default ItemProduct;
