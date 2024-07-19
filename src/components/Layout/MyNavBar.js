import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import css from "./Navbar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store";

const MyNavbar = () => {
  const dispatch = useDispatch();
  const data = JSON.parse(localStorage.getItem("currentUser")) || {};
  const dataLogIn = useSelector((state) => state.auth.logIn);
  const login = dataLogIn;
  const dataUser = useSelector((state) => state.auth.user);
  const user = data.fullName || dataUser;

  const onClickHandle = () => {
    if (dataLogIn) {
      localStorage.removeItem("currentUser");
      dispatch(authActions.setUser(""));
      dispatch(authActions.logOut());
    }
  };

  const getClassName = ({ isActive, isPending, isTransitioning }) => {
    let className = "";
    if (isPending) className += css.pending;
    if (isActive) className += ` ${css.active}`;
    if (isTransitioning) className += ` ${css.transitioning}`;
    return className.trim();
  };

  return (
    <nav className={css.navbar}>
      <div className={css["navbar-left"]}>
        <NavLink to="/" className={getClassName}>
          Home
        </NavLink>
        <NavLink to="/shop" className={getClassName}>
          Shop
        </NavLink>
      </div>
      <div className={css["navbar-center"]}>
        <a href="/" className={css["navbar-logo"]}>
          BOUTIQUE
        </a>
      </div>
      <div className={css["navbar-right"]}>
        <NavLink to="/cart" className={getClassName}>
          <FontAwesomeIcon icon={faCartShopping} /> Cart
        </NavLink>
        <NavLink
          to={login ? "/" : "/login"}
          className={getClassName}
          onClick={onClickHandle}
        >
          <FontAwesomeIcon icon={faUser} /> {login ? `${user} Logout` : "Login"}
        </NavLink>
      </div>
    </nav>
  );
};

export default MyNavbar;
