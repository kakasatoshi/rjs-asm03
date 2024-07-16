import React, { Fragment } from "react";

import css from "./ListProduct.module.css";
import ItemProduct from "./ItemProduct";
import HeadList from "./HeadList";
import { useSelector } from "react-redux";
import ShowPopup from "./ShowPopup";

const ListProduct = ({ products }) => {
  // console.log(products, "ListProduct");
  const id = useSelector((state) => state.show.id) ||"";
  const show = useSelector((state) => state.show.show);
  const product = products.filter((e) => e._id.$oid === id) || null;
  if (products === null || products == []) {
    return <h2>No hay productos para mostrar</h2>;
  }

  return (
    <Fragment>
      <div className={css.content}>
        {products.map((e) => (
          <ItemProduct key={e._id} product={e} />
        ))}
        {show && <ShowPopup product={product} />}
      </div>
    </Fragment>
  );
};

export default ListProduct;
