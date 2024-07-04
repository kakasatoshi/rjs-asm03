import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const MyNavbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <NavLink to="/" exact="true" activeClassName="active home">
          Home
        </NavLink>
        <NavLink to="/shop" activeClassName="active">
          Shop
        </NavLink>
      </div>
      <div className="navbar-center">
        <a href="#home" className="navbar-logo">
          BOUTIQUE
        </a>
      </div>
      <div className="navbar-right">
        <NavLink to="/cart" activeClassName="active">
          <FontAwesomeIcon icon={faCartShopping} /> Cart
        </NavLink>

        <NavLink to="/login" activeClassName="active">
          <FontAwesomeIcon icon={faUser} /> Login
        </NavLink>
      </div>
    </nav>
  );
};

export default MyNavbar;
