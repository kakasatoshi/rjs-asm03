import React, { Fragment} from "react";

import css from "./ListProduct.module.css";
import ItemProduct from "./ItemProduct";
import HeadList from "./HeadList";

const ListProduct = ({ products }) => {
  // console.log(products, "ListProduct");
  // const [data,setDate]=useState(products);

if (products===null || products==[]){
  return (
    <h2>
      No hay productos para mostrar
    </h2>
  );
}

  return (
    <Fragment >
      
      <div className={css.content}>
          {products.map((e) => (
            <ItemProduct key={e._id} product={e} />
            
          ))}
      </div>
    </Fragment>
  );
};

export default ListProduct;
