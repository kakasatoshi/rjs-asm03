import React from "react";
import formatPrice from "../Layout/formatPrice";
import css from "./CartItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DeleteIcon from "@mui/icons-material/Delete";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store";

const CartItem = ({ product, quantity }) => {
  const [quantityCart, setQuantity] = React.useState(quantity);
  const dispatch = useDispatch();

  if (!product) {
    return <div>No products available.</div>;
  }

  const handleQuantityChange = (delta) => {
    setQuantity((prevQuantity) => {
      const newQuantity = Math.max(1, prevQuantity + delta);
      dispatch(cartActions.updateCart({ product, quantity: newQuantity }));
      return newQuantity;
    });
  };

  return (
    <div className="row">
      <div className={`col-2 ${css.img} text-center`}>
        <img src={product.img1} alt="Product" />
      </div>
      <div className="col-3 text-center">{product.name}</div>
      <div className="col-2 text-center">{formatPrice(product.price)}</div>
      <div className="col-2 text-center">
        <div
          className={`d-flex justify-content-left ${css.quantity} align-items-center`}
        >
          <button
            className={`btn ${css.faCaret}`}
            onClick={() => handleQuantityChange(-1)}
          >
            <FontAwesomeIcon icon={faCaretLeft} />
          </button>
          <p className="align-items-center">{quantityCart}</p>
          <button
            className={`btn ${css.faCaret}`}
            onClick={() => handleQuantityChange(1)}
          >
            <FontAwesomeIcon icon={faCaretRight} />
          </button>
        </div>
      </div>
      <div className="col-2 text-center">
        {formatPrice(product.price * quantityCart)}
      </div>
      <div className="col-1 text-center">
        <button
          className="btn"
          onClick={() => dispatch(cartActions.deleteCart(product._id.$oid))}
        >
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
