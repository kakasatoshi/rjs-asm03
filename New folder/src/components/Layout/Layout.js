import { Fragment } from "react";
import css from "./Layout.module.css";

import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import MyNavBar from "./MyNavBar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showAction } from "../../store";
import useProducts from "../../http/useProduct";

const Layout = (props) => {
  const { products, isLoading, error } = useProducts();
  console.log(products, "layout");
  const dispatch = useDispatch();
  dispatch(showAction.LoadProductData(products));
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

      <Footer />
    </Fragment>
  );
};

export default Layout;
