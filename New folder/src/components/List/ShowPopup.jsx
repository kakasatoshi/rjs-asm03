import React,{useState} from "react";
import { useSelector } from "react-redux";
import css from "./ShowPopup.module.css";
import { showAction } from "../../store";

const formatPrice2 = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + " VND";
};

const ShowPopup = ({ product, dispatch,show}) => {
  // const show = useSelector((state) => state.show.show);
  const [isShow, setIsShow] = useState(show);

  const onClickClose = () => {
    setIsShow(!isShow);
    dispatch(showAction.HIDE_POPUP());
    
  };
   const  onClickHandle=()=>{
    window.location.href =`http://localhost:3000/shop/${product._id.$oid}`;
   };

  if(isShow){
    return (
      <div className={css.main}>
        <div className={css.contentMain}>
          <div className={css.icon}>
            <button className={css.btnClose} onClick={onClickClose}>X</button>
          </div>
          <div className={css.content}>
            <div className={css.img + " " + css.item}>
              <img src={product.img1} alt="product" />
            </div>
            <div className={css.contentRight + " " + css.item }>
              <h4 className={css.name}>{product.name}</h4>
              <p className={css.price}>{formatPrice2(product.price)}</p>
              <p>{product.short_desc}</p>
              <div>
                <button className={css.btn} onClick={onClickHandle}>View Detail</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return ;
  } 
};

export default ShowPopup;
