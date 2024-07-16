import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import css from "./Navbar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store";

const MyNavbar = () => {
  const login = useSelector((state) => state.auth.logIn);
  const user = useSelector((state) => state.auth.user) || "";
  const dispatch = useDispatch();

  const onClickHandle = () => {
    dispatch(authActions.logOut());
    dispatch(authActions.setUser(""));
    localStorage.clear();
  };

  return (
    <nav className={css.navbar}>
      <div className={css["navbar-left"]}>
        <NavLink
          to="/"
          exact={true}
          className={({ isActive, isPending, isTransitioning }) =>
            [
              isPending ? `${css.pending}` : "",
              isActive ? `${css.active}` : "",
              isTransitioning ? `${css.transitioning}` : "",
            ].join(" ")
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive, isPending, isTransitioning }) =>
            [
              isPending ? `${css.pending}` : "",
              isActive ? `${css.active}` : "",
              isTransitioning ? `${css.transitioning}` : "",
            ].join(" ")
          }
        >
          Shop
        </NavLink>
      </div>
      <div className={css["navbar-center"]}>
        <a href="/" className={css["navbar-logo"]}>
          BOUTIQUE
        </a>
      </div>
      <div className={css["navbar-right"]}>
        <NavLink
          to="/cart"
          className={({ isActive, isPending, isTransitioning }) =>
            [
              isPending ? `${css.pending}` : "",
              isActive ? `${css.active}` : "",
              isTransitioning ? `${css.transitioning}` : "",
            ].join(" ")
          }
        >
          <FontAwesomeIcon icon={faCartShopping} /> Cart
        </NavLink>
        <NavLink
          to={login ? "/" : "/login"}
          className={({ isActive, isPending, isTransitioning }) =>
            [
              isPending ? `${css.pending}` : "",
              isActive ? `${css.active}` : "",
              isTransitioning ? `${css.transitioning}` : "",
            ].join(" ")
          }
          onClick={onClickHandle}
        >
          <FontAwesomeIcon icon={faUser} /> {login ? user + " Logout" : "Login"}
        </NavLink>
      </div>
    </nav>
  );
};

export default MyNavbar;
