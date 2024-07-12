import React, { Fragment, useState } from 'react';
import css from './Items.module.css';
import ShowPopup from "./ShowPopup";
import { useDispatch, useSelector } from "react-redux";
import { showAction } from "../../store";
import formatPrice from "../Layout/formatPrice";

// const formatPrice2 = (price) => {
//   return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + " VND";
// };

const ItemProduct = ({ product }) => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.show.show);
  const [isShow, setIsShow] = useState(show);

  // console.log(product, "item");

  const onClick = () => {
    
    dispatch(showAction.SHOW_POPUP());
    setIsShow(!isShow);

  };

  if (!product|| product==null || product==[]) {
   
    return <h4>No find Product</h4>
    
  }

  return (
    <Fragment>
      { isShow && <ShowPopup product={product} dispatch={dispatch} show={isShow}/>}
      <div className={css.content}>
        <div className={css.img}>
          <img src={product.img1} alt='sanpham' onClick={onClick} />
        </div>
        <h3 className={css.name}>{product.name || "Tên Sản Phẩm"}</h3>
        <h6 className={css.price}>{formatPrice(product.price) || "Giá sản Phẩm"}</h6>
      </div>
      
    </Fragment>
  );
};

export default ItemProduct;
