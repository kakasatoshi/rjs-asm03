import { Fragment, useEffect, useState } from "react";
import css from "./Layout.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";

import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import MyNavBar from "./MyNavBar";
import { useDispatch, useSelector } from "react-redux";
import { showActions, authActions, cartActions } from "../../store";
import useProducts from "../../http/useProduct";
import ChatBox from "../chatBox/ChatBox";
import arrUser from "./arrUser";

const Layout = (props) => {
  const { products, isLoading, error } = useProducts();
  console.log(products, "layout");
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const showArr = useSelector((state) => state.auth.show);
  const listCartLS = JSON.parse(localStorage.getItem("listCart")) || false;
  if (listCartLS) {
    dispatch(cartActions.addAllCart(listCartLS));
  }

  if (products) {
    dispatch(showActions.loadProductData(products));
  }

  if (localStorage.getItem("userArr") === null && showArr === false) {
    const userArr = arrUser();
    // console.log(userArr, "layout");
    localStorage.setItem("userArr", JSON.stringify(userArr));
  }
  if (localStorage.getItem("currentUser") !== null) {
    dispatch(authActions.logIn());
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Fragment>
      <div className={css.body}>
        <MyNavBar />
        <div className={css.content}>
          <Outlet />
        </div>
      </div>
      <div className={css.ChatBox}>
        {show && <ChatBox />}
        <button className={`btn ${css.icon}`} onClick={() => setShow(!show)}>
          <FontAwesomeIcon icon={faFacebookMessenger} />
        </button>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
