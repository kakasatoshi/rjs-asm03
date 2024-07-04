import React from "react";

const formatPrice = (price = "") => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " VND";
};

export default formatPrice;
