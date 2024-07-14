import React from "react";
import useProduct from "../../http/useProduct";
import formatPrice from "../Layout/formatPrice";
import css from "./CartItem.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DeleteIcon from "@mui/icons-material/Delete";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const CartItem = ({product}) => {
  // const { products, isLoad, err } = useProduct();
  const [quantity, setQuantity] = React.useState(1);


  if (!product) {
    return <div>No products available.</div>;
  }

  // const product = products[0];

  return (
    <div className="row">
      <div className={`col-2 ${css.img} text-center`}>
        <img src={product.img1} alt="sanpham" />
      </div>
      <div className="col-3 text-center">{product.name}</div>
      <div className="col-2 text-center">{formatPrice(product.price)}</div>
      <div className="col-2 text-center">
        <div
          className={`d-flex justify-content-left ${css.quantity} align-items-center `}
        >
          <button
            className={`btn ${css.faCaret}`}
            onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
          >
            <FontAwesomeIcon icon={faCaretLeft} />
          </button>
          <p className="align-items-center ">{quantity}</p>
          <button
            className={`btn ${css.faCaret}`}
            onClick={() => setQuantity(quantity + 1)}
          >
            <FontAwesomeIcon icon={faCaretRight} />
          </button>
        </div>
      </div>
      <div className="col-2 text-center">
        {formatPrice(product.price * quantity)}
      </div>
      <div className="col-1 text-center">
        <button className="btn" ><DeleteIcon /></button>
      </div>
    </div>
  );
};

export default CartItem;
