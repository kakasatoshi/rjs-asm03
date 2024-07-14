import { Fragment, useState } from "react";
import css from "./Layout.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";

import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import MyNavBar from "./MyNavBar";
import { useDispatch, useSelector } from "react-redux";
import { showActions } from "../../store";
import useProducts from "../../http/useProduct";
import ChatBox from "../chatBox/ChatBox";

const Layout = (props) => {
  const { products, isLoading, error } = useProducts();
  console.log(products, "layout");
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  dispatch(showActions.loadProductData(products));
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
      <div className={` ${css.ChatBox}`}>
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
