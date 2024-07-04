import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-content">
      <div className="footer">
        <div className="column">
          <div className="row top">Hàng 1 Cột 1</div>
          <div className="row bottom">Hàng 2 Cột 1</div>
          <div className="row bottom">Hàng 3 Cột 1</div>
          <div className="row bottom">Hàng 4 Cột 1</div>
          <div className="row bottom">Hàng 5 Cột 1</div>
        </div>
        <div className="column">
          <div className="row top">Hàng 1 Cột 2</div>
          <div className="row bottom">Hàng 2 Cột 2</div>
          <div className="row bottom">Hàng 3 Cột 2</div>
          <div className="row bottom">Hàng 4 Cột 2</div>
          <div className="row bottom">Hàng 5 Cột 2</div>
        </div>
        <div className="column">
          <div className="row top">Hàng 1 Cột 3</div>
          <div className="row bottom">Hàng 2 Cột 3</div>
          <div className="row bottom">Hàng 3 Cột 3</div>
          <div className="row bottom">Hàng 4 Cột 3</div>
          <div className="row bottom">Hàng 5 Cột 3</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
